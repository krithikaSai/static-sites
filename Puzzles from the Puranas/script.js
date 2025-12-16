/* script.js
   Replaces previous loadPuzzle with a dynamic grid+SVG flowchart generator,
   while keeping your check/hint/fill logic intact and adding submit/confetti/navigation.
*/

/* ----------------- Existing logic (kept mostly unchanged) ----------------- */

const hintProgress = {}; // tracks how many hints used per node

function renderLetterBoxes(nid, pattern) {
    const row = document.getElementById(`letters-${nid}`);
    if (!row) return;
    row.innerHTML = "";

    for (let ch of pattern) {
        const div = document.createElement("div");
        div.className = "letter-box";

        if (ch !== "_") {
            div.textContent = ch.toUpperCase();
            div.classList.add("fixed-letter");
            div.dataset.type = "fixed";
        } else {
            div.classList.add("blank-letter");
            div.dataset.type = "blank";
        }

        row.appendChild(div);
    }
}

/* Proper live-fill that correctly aligns with fixed letters */
function updateFilledPattern(nid) {
    const inputEl = document.getElementById(`input-${nid}`);
    if (!inputEl) return;
    const input = inputEl.value.toUpperCase();
    const boxes = document.querySelectorAll(`#letters-${nid} .letter-box`);

    let i = 0; // pointer into input

    boxes.forEach(box => {
        if (box.dataset.type === "fixed") {
            const fixedChar = box.textContent;

            // If the next input character matches the fixed letter, skip it.
            if (input[i] === fixedChar) {
                i++;
            }

            return; // keep the fixed letter as-is
        }

        // fill blank position with next available input char
        box.textContent = input[i] || "";
        i++;
    });

    // After each input change, possibly enable the submit button (live)
    refreshSubmitButtonState();
}

/* Check answer */
function check(pid, nid) {
    const puzzle = puzzles.find(x => x.id === pid);
    const node = puzzle.nodes.find(x => x.id === nid);

    const inputEl = document.getElementById(`input-${nid}`);
    if (!inputEl) return;
    const userInput = inputEl.value.trim().toLowerCase();

    const correct = node.answer.toLowerCase();
    const box = document.getElementById(`result-${nid}`);
    const nodeBox = document.getElementById(`node-${nid}`);

    // Remove previous animations
    nodeBox.classList.remove("correct-anim", "incorrect-anim");

    if (userInput === correct) {
        box.textContent = "Correct!";
        box.style.color = "#00ff66";

        // trigger animation
        void nodeBox.offsetWidth; // magic reset
        nodeBox.classList.add("correct-anim");

    } else {
        box.textContent = "Incorrect.";
        box.style.color = "red";

        // trigger animation
        void nodeBox.offsetWidth;
        nodeBox.classList.add("incorrect-anim");
    }
}

/* Simple hint */
function hint(pid, nid) {
    const puzzle = puzzles.find(x => x.id === pid);
    const node = puzzle.nodes.find(x => x.id === nid);

    // Initialize counter if first time
    if (!hintProgress[nid]) {
        hintProgress[nid] = 0;
    }

    const answer = node.answer.toUpperCase();
    const idx = hintProgress[nid];

    const hintBox = document.getElementById(`result-${nid}`);
    const hintButton = document.querySelector(`#node-${nid} .hint-btn`);

    if (idx >= answer.length) {
        if (hintBox) {
            hintBox.textContent = "No more hints.";
            hintBox.style.color = "var(--accent-color)";
        }
        return;
    }

    // Reveal letter number (idx + 1)
    if (hintBox) {
        hintBox.textContent = `The ${ordinal(idx + 1)} alphabet is ${answer[idx]}`;
        hintBox.style.color = "var(--accent-color)";
    }

    hintProgress[nid]++;

    // Update button label (if present)
    if (hintButton) {
        hintButton.textContent = `Hint ${hintProgress[nid] + 1}`;
    }
}

function ordinal(n) {
    if (n === 1) return "first";
    if (n === 2) return "second";
    if (n === 3) return "third";
    return n + "th";
}

/* ----------------- New dynamic flowchart + utility logic ----------------- */

/* Grid cell size (px) - used to compute coordinates for SVG; responsive scaling handled by CSS */
const CELL_W = 260; // approximate width per grid column
const CELL_H = 200; // approximate height per grid row
const FLOWCHART_ID = "flowchart";

/* Helper: read ?slug=... */
function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

/* Compute readable foreground (black or white) for an accent color */
function pickForeground(hex) {
    try {
        hex = hex.replace('#', '');
        if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
        }
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return lum > 150 ? 'black' : 'white';
    } catch (e) {
        return 'black';
    }
}

/* Create the SVG container used for connectors (one-per-page) */
function createOrResetSVG(container) {
    let svg = container.querySelector('svg.flow-svg');
    if (svg) {
        svg.innerHTML = ""; // wipe previous paths
        return svg;
    }
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('flow-svg');
    svg.style.position = 'absolute';
    svg.style.left = 0;
    svg.style.top = 0;
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    svg.style.overflow = 'visible';
    container.appendChild(svg);

    // Add arrow marker definition
    const defs = document.createElementNS(svg.namespaceURI, 'defs');
    defs.innerHTML = `
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto" >
        <path d="M0,0 L10,3.5 L0,7 z" fill="var(--accent-color)"></path>
      </marker>
    `;
    svg.appendChild(defs);

    return svg;
}

/* ===========================================================
   UNIVERSAL SIDE-POINT EXTRACTOR
   =========================================================== */
function getSidePoint(rect, containerRect, side) {
    switch (side) {
        case "left":
            return {
                x: rect.left - containerRect.left,
                y: (rect.top + rect.bottom) / 2 - containerRect.top
            };

        case "right":
            return {
                x: rect.right - containerRect.left,
                y: (rect.top + rect.bottom) / 2 - containerRect.top
            };

        case "top":
            return {
                x: (rect.left + rect.right) / 2 - containerRect.left,
                y: rect.top - containerRect.top
            };

        case "bottom":
            return {
                x: (rect.left + rect.right) / 2 - containerRect.left,
                y: rect.bottom - containerRect.top
            };
    }
    return null;
}


/* ===========================================================
   CLEAN DRAW CURVED OR STRAIGHT CONNECTOR
   =========================================================== */
function drawCurvedPath(svg, fromRect, toRect, options = {}) {
    const containerRect = svg.getBoundingClientRect();

    /* -----------------------------------------------------------
       STEP 1: Determine the anchor points (x1, y1) and (x2, y2)
       ----------------------------------------------------------- */
    let p1 = null, p2 = null;

    // Explicit override: always respected if given
    if (options.sideOrigin) {
        p1 = getSidePoint(fromRect, containerRect, options.sideOrigin);
    }

    if (options.sideTarget) {
        p2 = getSidePoint(toRect, containerRect, options.sideTarget);
    }

    // Fallback logic when sideOrigin/sideTarget is not provided
    if (!p1) {
        const sameRow = Math.abs(fromRect.top - toRect.top) < 40;

        p1 = sameRow
            ? {
                x: fromRect.right - containerRect.left,
                y: (fromRect.top + fromRect.bottom) / 2 - containerRect.top
            }
            : {
                x: (fromRect.left + fromRect.right) / 2 - containerRect.left,
                y: fromRect.bottom - containerRect.top
            };
    }

    if (!p2) {
        const sameRow = Math.abs(fromRect.top - toRect.top) < 40;

        p2 = sameRow
            ? {
                x: toRect.left - containerRect.left,
                y: (toRect.top + toRect.bottom) / 2 - containerRect.top
            }
            : {
                x: (toRect.left + toRect.right) / 2 - containerRect.left,
                y: toRect.top - containerRect.top
            };
    }

    const x1 = p1.x, y1 = p1.y;
    const x2 = p2.x, y2 = p2.y;


    /* -----------------------------------------------------------
       STEP 2: Straight-line mode (with optional arrow + label)
       ----------------------------------------------------------- */
    if (options.straight) {
        const line = document.createElementNS(svg.namespaceURI, 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', 'var(--accent-color)');
        line.setAttribute('stroke-width', '2');

        if (!options.noArrow) {
            line.setAttribute('marker-end', 'url(#arrowhead)');
        }

        svg.appendChild(line);

        // LABEL
        if (options.label) {
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2 - 10;

            const text = document.createElementNS(svg.namespaceURI, 'text');
            text.setAttribute('x', midX);
            text.setAttribute('y', midY);
            text.setAttribute('fill', 'var(--accent-color)');
            text.setAttribute('font-size', '12px');
            text.setAttribute('text-anchor', 'middle');

            if (Array.isArray(options.label)) {
                options.label.forEach((ln, idx) => {
                    const t = document.createElementNS(svg.namespaceURI, 'tspan');
                    t.setAttribute('x', midX);
                    t.setAttribute('dy', idx === 0 ? 0 : 14);
                    t.textContent = ln;
                    text.appendChild(t);
                });
            } else {
                text.textContent = options.label;
            }

            svg.appendChild(text);
        }

        return;
    }


    /* -----------------------------------------------------------
       STEP 3: Curved mode control point calculation
       ----------------------------------------------------------- */
    const dx = x2 - x1;
    const dy = y2 - y1;

    const offset = Math.min(120, Math.abs(dy * 0.45));

    // Horizontal curve bias
    let hShift = 0;
    if (options.angleBias === "left") hShift = -40;
    if (options.angleBias === "right") hShift = 40;
    if (options.angleBias === "strongLeft") hShift = -90;
    if (options.angleBias === "strongRight") hShift = 90;

    // Default control points
    let cx1 = x1 + hShift;
    let cy1 = y1 + offset;
    let cx2 = x2 - hShift;
    let cy2 = y2 - offset;


    /* -----------------------------------------------------------
       STEP 4: Node-avoidance push
       ----------------------------------------------------------- */
    if (options.avoidNode) {
        const avoidEl = document.getElementById(`node-${options.avoidNode}`);
        if (avoidEl) {
            // Big push sideways
            cx1 += 300;
            cx2 += 300;
        }
    }


    /* -----------------------------------------------------------
       STEP 5: Create the PATH
       ----------------------------------------------------------- */
    const path = document.createElementNS(svg.namespaceURI, 'path');
    const d = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;

    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'var(--accent-color)');
    path.setAttribute('stroke-width', '2');

    if (!options.noArrow) {
        path.setAttribute('marker-end', 'url(#arrowhead)');
    }

    svg.appendChild(path);


    /* -----------------------------------------------------------
       STEP 6: Labels for curved paths
       ----------------------------------------------------------- */
    if (options.label) {
        let midX = (x1 + cx1 + cx2 + x2) / 4;
        let midY = (y1 + cy1 + cy2 + y2) / 4;

        // Push label outward along curve bulge
        if (hShift !== 0) midX += hShift * 0.4;
        if (options.avoidNode) midX += 120;
        midY -= 12;

        const text = document.createElementNS(svg.namespaceURI, 'text');
        text.setAttribute('x', midX);
        text.setAttribute('y', midY);
        text.setAttribute('fill', 'var(--accent-color)');
        text.setAttribute('font-size', '12px');
        text.setAttribute('text-anchor', 'middle');

        if (Array.isArray(options.label)) {
            options.label.forEach((ln, idx) => {
                const t = document.createElementNS(svg.namespaceURI, 'tspan');
                t.setAttribute('x', midX);
                t.setAttribute('dy', idx === 0 ? 0 : 14);
                t.textContent = ln;
                text.appendChild(t);
            });
        } else {
            text.textContent = options.label;
        }

        svg.appendChild(text);
    }
}

/* Build DOM nodes + grid and connections from puzzle data */
function loadPuzzle(puzzle) {
    // Set title
    document.getElementById("title").textContent = puzzle.title || "";
    document.getElementById("description").textContent = puzzle.description || "";

    // Set theme color
    if (puzzle.accent) {
        document.documentElement.style.setProperty('--accent-color', puzzle.accent);
        const fg = pickForeground(puzzle.accent);
        document.documentElement.style.setProperty('--accent-foreground', fg);
    }

    // Reset hint progress
    for (const k in hintProgress) delete hintProgress[k];

    // flowchart container
    const flow = document.getElementById(FLOWCHART_ID);
    if (!flow) {
        console.error("Missing flowchart container with id='flowchart'.");
        return;
    }

    // Clear flowchart and set relative positioning for SVG overlay
    flow.innerHTML = "";
    flow.style.position = 'relative';
    flow.style.minHeight = '300px';

    // Create a grid wrapper
    const grid = document.createElement('div');
    grid.className = 'flow-grid';
    // We'll set CSS grid properties based on layout extents
    grid.style.display = 'grid';
    grid.style.gap = '20px';
    grid.style.alignItems = 'center';
    grid.style.justifyItems = 'center';
    grid.style.position = 'relative';
    grid.style.padding = '30px 10px';

    flow.appendChild(grid);

    // fallback layout if none provided: place nodes left->right in order
    const layout = (puzzle.layout && (puzzle.layout.positions || puzzle.layout.nodes)) ? puzzle.layout : null;

    // Build positions map: { nodeId: {x, y} }
    let positions = {};
    if (layout && layout.positions) {
        positions = layout.positions;
    } else if (layout && layout.nodes) {
        // old name alternative
        positions = layout.nodes;
    } else {
        // fallback: linear horizontal
        puzzle.nodes.forEach((n, idx) => {
            positions[n.id] = { x: idx, y: 0 };
        });
    }

    // determine grid bounds
    const xs = Object.values(positions).map(p => p.x);
    const ys = Object.values(positions).map(p => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const cols = maxX - minX + 1;
    const rows = maxY - minY + 1;

    // set grid template columns/rows using repeat
    // each cell uses a min width so grid is responsive; CSS handles scaling
    grid.style.gridTemplateColumns = `repeat(${cols}, minmax(180px, 1fr))`;
    const rowH = puzzle.rowHeight || CELL_H;
    grid.style.gridAutoRows = `${rowH}px`;


    // map nodes by id for quick lookup
    const nodeMap = {};
    puzzle.nodes.forEach(n => nodeMap[n.id] = n);

    // Create DOM nodes
    puzzle.nodes.forEach(n => {
        const pos = positions[n.id];
        // if position missing, place at end
        const x = (pos && typeof pos.x === 'number') ? (pos.x - minX + 1) : 1;
        const y = (pos && typeof pos.y === 'number') ? (pos.y - minY + 1) : 1;

        const el = document.createElement('div');
        el.className = n.image ? 'node image-node' : 'node';
        el.id = `node-${n.id}`;

        // handle size variations: normal|wide|small|large|tall
        const size = (n.size || 'normal').toString().toLowerCase();
        if (size === 'wide') {
            el.classList.add('wide');
        } else if (size === 'small') {
            el.style.width = '150px';
        } else if (size === 'large') {
            el.style.width = '380px';
            el.style.padding = '18px';
        } else if (size === 'tall') {
            el.style.minHeight = '320px';
            el.style.width = '220px';
        }

        // grid placement
        el.style.gridColumnStart = x;
        el.style.gridRowStart = y;

        // content: optional image, letter-row, clue, input, buttons, result
        // IMAGE NODE MODE
if (n.image) {
    el.innerHTML = `
        <div class="node-image" style="text-align:center;">
            <img src="${n.image}" 
                 style="max-width:100%; border-radius:8px; display:block; margin:auto;">
        </div>
    `;
} 
else {
    // NORMAL PUZZLE NODE
    const clueText = n.longClue ? 
        `<div class="clue">${n.longClue}</div>` :
        `<div class="clue">${n.clue || ''}</div>`;

    el.innerHTML = `
        <div class="letter-row" id="letters-${n.id}"></div>
        ${clueText}
        <input id="input-${n.id}" placeholder="ENTER NAME" style="text-transform: uppercase;">
        <div style="margin-top:6px;">
            <button class="check-btn" data-pid="${puzzle.id}" data-nid="${n.id}">Check</button>
            <button class="hint-btn" data-pid="${puzzle.id}" data-nid="${n.id}">Hint</button>
        </div>
        <div class="result" id="result-${n.id}"></div>
    `;
}


        grid.appendChild(el);

        if (!n.image) {
    renderLetterBoxes(n.id, n.pattern);
}

    });

    // Create/insert SVG for connections (behind nodes visually)
    const svg = createOrResetSVG(flow);

    // draw connections after layout pass so getBoundingClientRect works
    // we wait for next frame to ensure DOM layout done
    requestAnimationFrame(() => {
        // optional connections array in layout
        const connections = (layout && layout.connections) ? layout.connections : (layout && layout.links ? layout.links : []);
        // if no explicit connections are provided and puzzle defines parents/children implicitly, we can't guess — skip drawing
        connections.forEach(conn => {
            const fromEl = document.getElementById(`node-${conn.from}`);
            const toEl = document.getElementById(`node-${conn.to}`);
            if (!fromEl || !toEl) return;
            const r1 = fromEl.getBoundingClientRect();
            const r2 = toEl.getBoundingClientRect();
            drawCurvedPath(svg, r1, r2, conn);
        });
    });

    // Wire up input events and buttons (delegate)
    grid.querySelectorAll('input[id^="input-"]').forEach(inp => {
        const nid = parseInt(inp.id.split('-')[1]);
        inp.addEventListener('input', () => updateFilledPattern(nid));
    });

    grid.querySelectorAll('.check-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pid = parseInt(btn.dataset.pid);
            const nid = parseInt(btn.dataset.nid);
            check(pid, nid);
        });
    });

    grid.querySelectorAll('.hint-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pid = parseInt(btn.dataset.pid);
            const nid = parseInt(btn.dataset.nid);
            hint(pid, nid);
        });
    });

    // After building nodes, add the submit area (below the grid)
    createSubmitButton(puzzle);
}

/* ----------------- Submit / confetti / sound / next puzzle ----------------- */

function createSubmitButton(puzzle) {
    const existing = document.getElementById('submit-area');
    if (existing) existing.remove();

    const container = document.querySelector('.container');
    if (!container) return;

    const div = document.createElement('div');
    div.id = 'submit-area';
    div.style.textAlign = 'center';
    div.style.marginTop = '24px';

    // Submit button
    const btn = document.createElement('button');
    btn.id = 'submit-all';
    btn.textContent = 'Submit';
    btn.disabled = true;
    btn.style.padding = '10px 18px';
    btn.style.fontSize = '16px';
    btn.style.cursor = 'pointer';

    // Next / Skip button
    const skip = document.createElement('button');
    skip.id = 'skip-next';
    skip.textContent = 'Next';
    skip.style.padding = '10px 18px';
    skip.style.fontSize = '16px';
    skip.style.cursor = 'pointer';
    skip.style.marginLeft = '10px';

    div.appendChild(btn);
    div.appendChild(skip);

    container.appendChild(div);

    btn.addEventListener('click', () => onSubmitAll(puzzle));

    skip.addEventListener('click', () => {
        setTimeout(() => {
            if (puzzle.nextSlug === "end") {
              window.location.href = "end.html";
            } else if (puzzle.nextSlug) {
                   window.location.href = `puzzle.html?slug=${puzzle.nextSlug}`;
            } else {
                   window.location.href = "index.html";
            }

        }, 200);
    });

    refreshSubmitButtonState();
}


function refreshSubmitButtonState() {
    const btn = document.getElementById('submit-all');
    if (!btn) return;
    btn.disabled = !areAllNodesFilled();
}

function areAllNodesFilled() {
    const blanks = document.querySelectorAll('.letter-box.blank-letter');
    if (blanks.length === 0) return true;
    for (const b of blanks) {
        if (!b.textContent || b.textContent.trim() === '') return false;
    }
    return true;
}

function onSubmitAll(puzzle) {
    // small pop

    // confetti
    triggerConfetti();

    // mark solved
    localStorage.setItem('solved:' + puzzle.slug, '1');

    // popup and navigation
    showCongratsPopup(puzzle);
}

function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 140,
            spread: 80,
            origin: { y: 0.55 }
        });
    }
}

function showCongratsPopup(puzzle) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; left:0; right:0; top:0; bottom:0;
        display:flex; align-items:center; justify-content:center;
        background: rgba(0,0,0,0.6); z-index:9999;
    `;
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') || '#f5d37b';
    const fg = getComputedStyle(document.documentElement).getPropertyValue('--accent-foreground') || '#000';
    modal.innerHTML = `
      <div style="background:#111; padding:22px; border-radius:10px; max-width:560px; text-align:center; color:${accent}; border:1px solid ${accent};">
        <h2 style="margin:0 0 8px 0;">🎉 ${puzzle.title}</h2>
        <p style="color:${accent}; margin:12px 0;">${(puzzle.congratsMessage && puzzle.congratsMessage.trim()) || 'Well done!'}
</p>
        <div style="margin-top:12px;">
          <button id="modal-next" style="padding:8px 12px; cursor:pointer;">Next puzzle</button>
          <button id="modal-close" style="margin-left:10px; padding:8px 12px; cursor:pointer;">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // play congrats sound

    document.getElementById('modal-close').addEventListener('click', () => {
        modal.remove();
    });

    const nextBtn = document.getElementById('modal-next');

if (puzzle.nextSlug === "end") {
    nextBtn.textContent = "Finish";
    nextBtn.addEventListener('click', () => {
        setTimeout(() => {
            window.location.href = "end.html";
        }, 220);
    });

} else if (puzzle.nextSlug) {
    nextBtn.addEventListener('click', () => {
        setTimeout(() => {
            window.location.href = `puzzle.html?slug=${puzzle.nextSlug}`;
        }, 220);
    });

} else {
    nextBtn.textContent = 'Main menu';
    nextBtn.addEventListener('click', () => {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 220);
    });
}
}

/* ----------------- Loader: find puzzle by slug and initialize ----------------- */

function loadPuzzleBySlug(slug) {
    const puzzle = puzzles.find(p => p.slug === slug) || puzzles[0];
    if (!puzzle) {
        console.error("No puzzles available.");
        return;
    }
    // set default accent if missing
    if (!puzzle.accent) puzzle.accent = '#f5d37b';

    loadPuzzle(puzzle);
}

/* ----------------- Initialization ----------------- */

// When DOM ready, load puzzle based on slug
document.addEventListener('DOMContentLoaded', () => {
    const slug = getQueryParam('slug');
    loadPuzzleBySlug(slug);
});

// Keep UI responsive: re-draw connectors on resize (throttled)
let resizeTimer = null;
window.addEventListener('resize', () => {
    // If popup is open, DO NOT redraw
    if (document.querySelector('#modal-next') || document.querySelector('#modal-close')) {
        return;
    }

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const slug = getQueryParam('slug');
        loadPuzzleBySlug(slug);
    }, 180);
});