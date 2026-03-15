// puzzles.js
const puzzles = [
  {
    id: 1,
    slug: "the-lineage-of-strength",
    title: "The Lineage of Strength",
    description: "This puzzle is related to the family of one of the Pandavas. Find out how well you know the (slightly) lesser known stories from the Mahabharatha! You can use hints when needed.",
    accent: "#d3a42c",
    congratsMessage: "Congratulations on mapping the lineage of Bhima! Onward to the next puranic puzzle!",
    nextSlug: "gurus-and-grudges",
    rowHeight: 300,
    nodes: [
      { id: 1, pattern: "__I__", clue: "The warrior who killed Keechaka.", answer: "BHIMA" },
      { id: 2, pattern: "H__I___", clue: "Wife of the character on the left, was originally sent by her brother to kill him.", answer: "HIDIMBA" },
      { id: 3, pattern: "__A_O____H_", clue: "Son of the above couple. Caused massive destruction among Kauravas in the Kurukshetra war.", answer: "GHATOTKACHA", size: "large"},
      { id: 4, pattern: "M__R_VI", clue: "Wife of the character on the left. Tried to defeat Krishna for revenge as her father was killed by him.", answer: "MAURAVI" },
      { id: 5, pattern: "_A_B_____", clue: "Son of the above couple - he was the only one to witness the entire Kurukshetra war and he beheaded himself upon Krishna's orders.", answer: "BARBARIKA" }
    ],

    layout: {
 positions: {
    1: { x: 0,   y: 0 },   // Bhima
    2: { x: 2,   y: 0 },   // Hidimba
    3: { x: 1,   y: 1 },   // Ghatotkacha
    4: { x: 3,   y: 1 },   // Mauravi
    5: { x: 2,   y: 2 }    // Barbarika
},

  connections: [
    { from: 1, to: 3 },
    { from: 2, to: 3 },
    { from: 3, to: 5 },
    { from: 4, to: 5 }
  ]
}, 


  },
  {
  id: 2,
  slug: "gurus-and-grudges",
  title: "Gurus and Grudges",
  description: "This puzzle is a combination of relationships and dynamics that are twisted by rivalry, friendship and vengeance. It is related to the epic of Mahabharatha. Can you unravel the story?",
  accent: "#9b6dfd",
  congratsMessage: "You've successfully unraveled a web of betrayals, oaths, and revenge. Nicely done - onwards to the next puzzle.",
  nextSlug: "a-dynasty-born-in-battle", 
  rowHeight: 250, 

  nodes: [
    {
      id: 1,
      pattern: "__U____",
      clue: "King of Panchala.",
      answer: "DRUPADA"
    },
    {
      id: 2,
      pattern: "__O__",
      clue: "A legendary teacher.",
      answer: "DRONA"
    },
    {
      id: 3,
      pattern: "__I__",
      clue: "Wife of the character to the left.",
      answer: "KRIPI"
    },
    {
      id: 4,
      pattern: "D_____________",
      clue: "Son of Drupada. Slayer of his father’s enemy.",
      answer: "DHRISHTADYUMNA",
      size: "wide"
    },
    {
      id: 5,
      pattern: "A__________",
      clue: "He attacked the Pandava camp on the 18th night of the Kurukshetra war and killed their sons.",
      answer: "ASHWATTHAMA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },    // Drupada
      2: { x: 1, y: 1 },    // Drona
      3: { x: 2, y: 1 },    // Kripi
      4: { x: 0, y: 2 },    // Dhrishtadyumna
      5: { x: 1, y: 3 }     // Ashwatthama
    },

    connections: [
      // Friendship → Enmity (Drupada → Drona)
      {from: 1, to: 2, noArrow: true, label: ["Best friends", "during childhood,", "later turned", "into enemies"]},

      // Drupada → Dhrishtadyumna
      { from: 1, to: 4 },

      // Drona’s son → Ashwatthama
      { from: 2, to: 5 },
      
       // Kripi → Ashwatthama
      { from: 3, to: 5 },

      // Dhrishtadyumna → Ashwatthama
      { from: 4, to: 5, label: "Killed by" }    

      
    ]
  }
}, 
{
  id: 3,
  slug: "a-dynasty-born-in-battle",
  title: "A dynasty born in battle",
  description: "This puzzle explores the lineage of a powerful fallen hero in the Mahabharatha war. His descendents shaped the future after the Kurukshetra war. See if you can figure it out.",
  accent: "#7fcfe3",
  congratsMessage: "Nice job solving this puzzle! Try your luck on the next one now.",
  nextSlug: "the-asura-the-fish-and-the-flood",   
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "___I_____",
      clue: "A warrior who knew how to enter the Chakravyuha, but not how to exit it.",
      answer: "ABHIMANYU"
    },
    {
      id: 2,
      pattern: "U______",
      clue: "Wife of the character on the left, princess of the kingdom in which the Pandavas spent their 13th year of exile.",
      answer: "UTTHARA"
    },
    {
      id: 3,
      pattern: "___IK____",
      clue: "Son of the above characters. He tried to kill Kali.",
      answer: "PARIKSHIT",
      size: "large"
    },
    {
      id: 4,
      pattern: "J_____J___",
      clue: "Son of the above character. He conducted a snake sacrifice as revenge for his father’s death. At this sacrifice, the entire story of Mahabharatha is narrated to him.",
      answer: "JANAMEJAYA",
      size: "large"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },   // Node 1 (top-left)
      2: { x: 2, y: 0 },   // Node 2 (top-right)
      3: { x: 1, y: 1 },   // Node 3 (centered below 1 & 2)
      4: { x: 1, y: 2 }    // Node 4 (below Node 3)
    },

    connections: [
      { from: 1, to: 3 },
      { from: 2, to: 3 },
      { from: 3, to: 4 }
    ]
  }
},

{
  id: 4,
  slug: "the-asura-the-fish-and-the-flood",
  title: "The Asura, the Fish, and the Flood",
  description: "This puzzle is related to a story from Bhagavatam. See if you can follow the trail of events leading to the recovery of the stolen Vedas.",
  accent: "#ffa36e",
  congratsMessage: "Congratulations on solving a difficult puzzle! Onward to the next one.",
  nextSlug: "samudra-manthana",   
  rowHeight: 250,

  nodes: [
    {
      id: 1,
      pattern: "H_Y_G__V_",
      clue: "An Asura who steals the Vedas and takes them to the bottom of the ocean where he resides.",
      answer: "HAYAGRIVA"
    },
    {
      id: 2,
      pattern: "M_T__A AVATARA",
      clue: "Lord Vishnu takes the form of a fish to get back the Vedas. Fill in the name of this avatara.",
      answer: "MATSYA",
      size: "large"
    },
    {
      id: 3,
      pattern: "S_T__VR___",
      clue: "A king who sees the seemingly helpless fish and keeps bringing bigger and bigger vessels to accomodate it. Later on, this fish advises him to collect and safeguard all the species of plants and animals in a boat when the Pralaya begins.",
      answer: "SATYAVRATA",
      size: "large"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // Hayagriva (left)
      2: { x: 2, y: 1 },   // Matsya Avatara (right)

      3: { x: 2, y: 2 }    // Satyavrata (below Matsya)
    },

    connections: [
      // Hayagriva → Matsya (line, no arrow)
      { from: 1, to: 2, noArrow: true },

      // Matsya → Satyavrata (arrow)
      { from: 2, to: 3 }
    ]
  }
},
{
  id: 5,
  slug: "samudra-manthana",
  title: "The Churning of the Milky Ocean (Samudra Manthana)",
  description: "Try to identify the main characters, outcomes and events of the legendary churning.",
  accent: "#8bc6ff",
  congratsMessage: "Congratulations on identifying all the major events of Samudra Manthana. On to the next puzzle!",
  nextSlug: "the-warriors-who-fed-the-flame",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "D__T___",
      clue: "While churning the ocean, which group were holding on to the head of the snake? (Hint - was it the Devas or the Daityas?)",
      answer: "DAITYAS",
      size: "small"
    },

    {
      id: 100,   // IMAGE NODE
      image: "assets/images/Samudra-Manthana.jpg",
      clue: "",
      answer: "",   // no answer needed
      size: "large"
    },

    {
      id: 2,
      pattern: "D_V__",
      clue: "Which group held the tail of the snake during the churning?",
      answer: "DEVAS",
      size: "small"
    },

    // ROW BELOW IMAGE
    {
      id: 3,
      pattern: "M_R_",
      clue: "Which mountain was used during the Samudra Manthana?",
      answer: "MERU"
    },
    {
      id: 4,
      pattern: "V_S_K_",
      clue: "What was the name of the snake used for churning? A tiny hint - he also appears in the Mahabharatha and gives divine nectar to Bhima.",
      answer: "VASUKI"
    },
    {
      id: 5,
      pattern: "T_R_____",
      clue: "Which animal does Lord Vishnu take the form of to balance the sinking Mountain? (you can refer to the picture)",
      answer: "TORTOISE"
    },

    // POISON CLUSTER
    {
      id: 6,
      pattern: "H___H__A",
      clue: "The name of the terrible poison that arises while churning the ocean.",
      answer: "HALAHALA"
    },
    {
      id: 7,
      pattern: "__I__",
      clue: "The God who gathered the poison and swallowed it to protect everyone, which gave his throat a blue hue (Neelakanta).",
      answer: "SHIVA"
    },
    {
      id: 8,
      pattern: "P_R____",
      clue: "The goddess who holds her husband's throat so the poison does not pass down.",
      answer: "PARVATI"
    },

    // AIRAVATA CLUSTER
    {
      id: 9,
      pattern: "A_R_____",
      clue: "A famous white elephant that emerges during the churning.",
      answer: "AIRAVATA"
    },
    {
      id: 10,
      pattern: "I____",
      clue: "The one who claims the elephant, he's the King of Gods (he's also partially the reason why Samudra Manthana had to happen)",
      answer: "INDRA"
    },

    // LAKSHMI ROW
    {
      id: 11,
      pattern: "L_K____",
      clue: "The goddess that emerges during the churning of the ocean, she weds Lord Vishnu.",
      answer: "LAKSHMI"
    },

    // AMRITA
    {
      id: 12,
      pattern: "A_____",
      clue: "The most awaited offering of the Samudra Manthana that both the Devas and Daityas are eager for.",
      answer: "AMRITA"
    },
    {
      id: 13,
      pattern: "M____I",
      clue: "The enchanting woman that Lord Vishnu takes the form of, to distribute the above substance among the Devas and Daityas.",
      answer: "MOHINI"
    },
    {
      id: 14,
      pattern: "R___",
      clue: "An Asura who disguises himself as a Deva. The Sun and the Moon find this out, so Vishnu slays him and he turns into a planet. To this day, this planet has enmity with the Sun and the Moon.",
      answer: "RAHU"
    }
  ],

  layout: {
    positions: {
      // ROW 0
      1:   { x: 0, y: 0 },
      100: { x: 1, y: 0 },   // IMAGE CENTER
      2:   { x: 2, y: 0 },

      // ROW 1
      3: { x: 0, y: 1 },
      4: { x: 1, y: 1 },
      5: { x: 2, y: 1 },

      // ROW 2
      6: { x: 0, y: 2 },
      7: { x: 1, y: 3 },
      8: { x: 2, y: 3 },

      // ROW 3
      9:  { x: 0, y: 4 },
      10: { x: 1, y: 4 },

      // ROW 4
      11: { x: 1, y: 5 },

      // ROW 5
      12: { x: 1, y: 6 },

      // ROW 6
      13: { x: 0, y: 7 },
      14: { x: 2, y: 7 }
    },

    connections: [
      // Poison cluster
      { from: 6, to: 7, noArrow: true },
      { from: 7, to: 8, noArrow: true },

      // Airavata cluster
      { from: 9, to: 10, straight: true, noArrow: true },

      // Amrita → Mohini → Rahu
      { from: 12, to: 13 },   // arrow
      { 
        from: 13,
        to: 14,
        label: "kills him with his Sudarshana Chakra"
      }
    ]
  }
},

{
  id: 6, 
  slug: "the-warriors-who-fed-the-flame",
  title: "The Warriors who fed the Flame",
  description: "The hunger of the fire-god sets off a chain of alliances, rescues, and creations that reshape the Pandavas’ destiny.",
  accent: "#ffb3c6",
  congratsMessage: "Congratulations on identifying the events related to Khandavaprastha's burning! On to the next puzzle!",
  nextSlug: "arrogance-to-aftermath",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "_G__",
      clue: "He asks a pair of best friends to help him satisfy his hunger by burning a forest.",
      answer: "AGNI"
    },

    {
      id: 2,
      pattern: "_____A",
      clue: "The Pandava prince best known for his archery skills.",
      answer: "ARJUNA"
    },

    {
      id: 3,
      pattern: "K______",
      clue: "Divine flute-player who is currently (in the times of this story) residing in Dwaraka.",
      answer: "KRISHNA"
    },

    {
      id: 4,
      pattern: "M___SURA",
      clue: "Chief architect of the Asuras, saved by Arjuna during the burning of Khandavaprastha.",
      answer: "MAYASURA",
      size: "large"
    },

    {
      id: 5,
      pattern: "__YA__BHA",
      clue: "The palace he builds for the Pandavas in gratitude. Later, Duryodhana is overwhelmed and jealous upon seeing it.",
      answer: "MAYASABHA",
      size: "large"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // AGNI centered top

      2: { x: 0, y: 1 },   // ARJUNA bottom-left
      3: { x: 2, y: 1 },   // KRISHNA bottom-right

      4: { x: 1, y: 2 },   // MAYASURA under Arjuna
      5: { x: 1, y: 3 }    // MAYASABHA under Mayasura
    },

    connections: [
      { from: 1, to: 2 },   // Agni -> Arjuna
      { from: 1, to: 3 },   // Agni -> Krishna

      { from: 2, to: 4 },   // curved arrow
      { from: 4, to: 5 }    // curved arrow
    ]
  }
},
{
  id: 7,   
  slug: "arrogance-to-aftermath",
  title: "Arrogance to Aftermath",
  description: "One God's pride sets off a chain reaction: the abandonment of their guru, the rise of a new teacher, the birth of a feared asura, and the ultimate sacrifice of a sage. Piece together the events if you can.",
  accent: "#ffd27b",
  congratsMessage: "Nicely solved! Onto the next puzzle.",
  nextSlug: "the-rise-of-the-kuru-line",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "I____",
      clue: "The King of Gods, who in this particular instance, gets blinded by arrogance and proceeds to offend the guru of Devas.",
      answer: "INDRA"
    },

    {
      id: 2,
      pattern: "B__H__P___",
      clue: "Guru of the Devas, who temporarily vanishes due to the previous character's actions.",
      answer: "BRIHASPATI",
      size: "wide"
    },

    {
      id: 3,
      pattern: "TV___TA",
      clue: "The craftsman of the Devas.",
      answer: "TVASHTA"
    },

    {
      id: 4,
      pattern: "V_R_CH___",
      clue: "Daughter of Prahlada, wife of the character on the left.",
      answer: "VIROCHANA"
    },

    {
      id: 5,
      pattern: "V___W_R___",
      clue: "Son of the above couple. Becomes the interim Guru of Devas, since the Guru of Devas is absent.",
      answer: "VISHWARUPA",
      size: "wide"
    },

    {
      id: 6,
      pattern: "V_I__",
      clue: "He is an asura who swallows Indra, but Indra defeats him with a powerful weapon. After this, the Asura enters straight into Sri Narayana.",
      answer: "VRITA"
    },

    {
      id: 7,
      pattern: "D_D__C__",
      clue: "The sage who gives up his body, so that divine weapons can be made out of his bones to defeat the asura on the right",
      answer: "DADHICHI"
    }
  ],

  layout: {
    positions: {

      // Row 1
      1: { x: 0, y: 0 },   // Indra
      2: { x: 2, y: 0 },   // Brihaspati

      // Row 2
      3: { x: 1, y: 1 },   // Tvashta
      4: { x: 2, y: 1 },   // Virochana

      // Row 3
      5: { x: 1, y: 2 },   // Vishwarupa
      6: { x: 2, y: 3 },   // Vrita

      // Row 4
      7: { x: 0, y: 3 },   // Dadhichi

    },

    connections: [
      { from: 1, to: 2, noArrow: true},  // Indra → Brihaspati

      
      // Vishwarupa beheading
      { 
        from: 1, 
        to: 5, 
        sideTarget: "left",
        label: ["Beheads", "him", "for secretly", "giving" , "offerings", "to Daityas"], 
        noArrow: false 
      },

      // Tvashta to Vrita
      { 
        from: 3, 
        to: 6, 
        avoidNode: 5,
        label: ["Performs a penance", "to create", "a daitya destined", "to kill Indra"] 
      },
      // Dadhichi to Vrita
      { 
        from: 7, 
        to: 6, 
        sideOrigin: "right",
        straight: true, 
        label: ["is the weapon that kills him"],
      },

      //Indra to Dadhichi
      { 
        from: 1, 
        to: 7
      },
      //Tvashta to Vishwarupa
      { 
        from: 3, 
        to: 5
      },
      //Virochana to Vishwarupa
      { 
        from: 4, 
        to: 5
      },
      
    ]
  }
},

{
  id: 8,
  slug: "the-rise-of-the-kuru-line",
  title: "The Rise of the Kuru Line",
  description: "Solve this puzzle about the ancestors of the Pandavas and Kauravas, the curses, vows, tragedies, and events that shaped the destiny of the Kuru dynasty.",
  accent: "rgb(102, 248, 102)",
  congratsMessage: "Great job! On to the next puzzle!",
  nextSlug: "the-penance-that-lit-the-sky",
  rowHeight: 300,

  nodes: [
    // ROW 1
    { id: 1, pattern: "G__G_", clue: "The sacred river that flows in Kashi. She marries the King on a condition that he must never question her actions. ", answer: "GANGA" },
    { id: 2, pattern: "S__NT___", clue: "A king who loved hunting, ancestor to the Pandavas and Kauravas.", answer: "SHANTANU" },
    { id: 3, pattern: "S_T__V_T_", clue: "The daughter of a fisherman. She is known for her divine fragrance.", answer: "SATYAVATI" },

    // ROW 2
    { id: 4, pattern: "B__S___", clue: "The man who took a terrible oath to make his father happy.", answer: "BHISHMA" },

    // STACKED nodes under SATYAVATI
    {
      id: 5,
      pattern: "C__T___G___", 
      clue: "The elder son of the above couple. He was killed in a battle with a Gandharva who had the same name.",
      answer: "CHITRANGADA",
      size: "wide"
    },
    {
      id: 6,
      pattern: "V_C__T__V____", 
      clue: "Younger son of the above couple.",
      answer: "VICHITRAVIRYA",
      size: "wide"
    },

    // ROW 3 - sons' wives
    {
      id: 7,
      pattern: "A_B___",
      clue: "A princess from Kashi, taken from her Swayamvara by Bhishma and wedded to the above prince. When she sees a particular sage, she closes her eyes in fear.",
      answer: "AMBIKA"
    },
    {
      id: 8,
      pattern: "A_B_L___",
      clue: "A princess from Kashi, taken from her Swayamvara by Bhishma and wedded to the above prince. Upon seeing the aforementioned sage, she turns pale.",
      answer: "AMBALIKA"
    },

    // FLOATING NODE + below
    {
      id: 9,
      pattern: "A_B_",
      clue: "The eldest princess of Kashi, who was in love with the King of Shalva.",
      answer: "AMBA",
    },
    {
      id: 10,
      pattern: "S__KH__D_",
      clue: "The reincarnation of the above character, seeking vengeance against Bhishma, and plays a pivotal role in his defeat during the Kurukshetra war.",
      answer: "SHIKHANDI",
    }
  ],

  layout: {
    positions: {
      // Row 1
      1: { x: 0, y: 0 },
      2: { x: 1, y: 0 },
      3: { x: 2, y: 0 },

      // Row 2 — BHISHMA directly under Ganga
      4: { x: 0, y: 1 },

      // Chitrangada + Vichitravirya stacked below Satyavati
      5: { x: 2, y: 1 },
      6: { x: 2, y: 2 },

      // Ambika + Ambalika below Vichitravirya
      7: { x: 1, y: 3 },
      8: { x: 2, y: 3 },

      // AMBA floating-ish
      9: { x: 0, y: 3 },
      10: { x: 0, y: 4 }
    },

    connections: [
      //Shantanu → Ganga
      { from: 2, to: 1, straight: true, sideOrigin: "left", sideTarget: "right" },

      //Shantanu → Satyavati
      { from: 2, to: 3, straight: true, sideOrigin: "right" },
      

      // Ganga → Bhishma
      { from: 1, to: 4},

      // Bhishma to the princesses
      { from: 4, to: 7, label: ["abducts"]},
      { from: 4, to: 8, label: ["abducts"]},
      { from: 4, to: 9, label: ["abducts"]},

      // Shantanu → Bhishma
      { from: 2, to: 4},

      // Shantanu → Bhishma
      { from: 2, to: 5},

      // Satyavati → Chitrangada → Vichitravirya
      { from: 3, to: 5, straight: true },
      { from: 5, to: 6, straight: true, noArrow: true, label: ["brother"] },

      // Vichitravirya → Ambika / Ambalika
      { from: 6, to: 7},
      { from: 6, to: 8},

      // Amba → Shikhandi
      { from: 9, to: 10 }

    ]
  }
},

{
  id: 9,
  slug: "the-penance-that-lit-the-sky",
  title: "The Penance That Lit the Sky",
  description: "Explore the immense devotion of a young prince whose meditation moved Lord Narayana and earned him an eternal place in the heavens.",
  accent: "#ffffff",
  congratsMessage:
    "Dhruva’s unshakeable devotion carried him to the heavens. Congratulations on identifying all the events surrounding his journey. On to the next one!",
  nextSlug: "brihaspati-yagna",        
  rowHeight: 300,

  nodes: [
    // ROW 1
    {
      id: 1,
      pattern: "U__A__P_D_",
      clue: "A King who is the first son of Swayambhuva Manu.",
      answer: "UTTANAPADA",
      size: "wide"
    },

    // ROW 2
    {
      id: 2,
      pattern: "S_N_T_",
      clue:
        "The elder wife of the king, gentle and kind. Advises her son to seek Narayana through penance.",
      answer: "SUNITI"
    },
    {
      id: 3,
      pattern: "S_R_C__",
      clue:
        "The younger queen, favoured for her beauty, but very jealous and possessive in nature.",
      answer: "SURUCHI"
    },

    // ROW 3
    {
      id: 4,
      pattern: "_TT___",
      clue: "The son of the younger queen.",
      answer: "UTTAMA"
    },
    {
      id: 5,
      pattern: "D_____",
      clue:
        "The son of the elder queen. In order to acquire the love of his father, he undertakes a rigorous penance to Lord Narayana at a very tender age. Later on, he acquires a celestial form and is visible to us as a guiding star to this day.",
      answer: "DHRUVA",
      size: "wide"
    },

    // ROW 4
    {
      id: 6,
      pattern: "N___D_",
      clue:
        "Advises the child that he is too young to seek God, but convinced by his earnestness, teaches him a divine mantra.",
      answer: "NARADA",
      size: "wide"
    },

    // IMAGE NODE
    {
      id: 100,
      image: "assets/images/Dhruva.png",
      size: "large"
    }
  ],

  layout: {
    positions: {
      // row 1 (center)
      1: { x: 1, y: 0 },

      // row 2
      2: { x: 0, y: 1 },
      3: { x: 2, y: 1 },

      // row 3
      4: { x: 2, y: 2 },
      5: { x: 0, y: 2 },

      // row 4
      6: { x: 0, y: 3 },

      // image row (full width center)
      100: { x: 1, y: 4 }
    },

    connections: [
      // king to the two wives
      { from: 1, to: 2 },
      { from: 1, to: 3 },

      // Suniti → Dhruva
      { from: 2, to: 5, label: ["son"]},

      // Suruchi → Uttama
      { from: 3, to: 4, label: ["son"] },

      // Suruchi → Dhruva (arrow, label)
      {
        from: 3,
        to: 5,
        label: [
          "tells him that if he wants",
          "his father to love him, he",
          "must be reborn as her son"
        ]
      },

      // Dhruva → Uttama (arrow, label)
      {
        from: 5,
        to: 4,
        label: [
          "sees him playing on his",
          "father's lap and tries to",
          "sit there too"
        ]
      },

      // Dhruva → Narada (straight, no arrow)
      { from: 5, to: 6, straight: true, noArrow: true }
    ]
  }
}, 

{
  id: 10,
  slug: "brihaspati-yagna",
  title: "Brihaspati Yagna",
  description:
    "A grand sacrifice, an unforgivable slight, and a big set of consequences. Solve it if you can.",
  accent: "#ec61be",
  congratsMessage:
    "Congratulations! On to the next one!",
  nextSlug: "the-fall-from-the-seventh-gate", 
  rowHeight: 300,

  nodes: [
    // ROW 1 — Daksha
    {
      id: 1,
      pattern: "D__S__",
      clue: "The head of the Prajapatis, and the son of Lord Brahma. He decides to perform a huge Yagna, to which all the beings of the three worlds were invited, except one God.",
      answer: "DAKSHA"
    },

    // ROW 2 — Prasuti
    {
      id: 2,
      pattern: "P_____",
      clue: "The third daughter of Swayambhuva Manu, marries the character on the left.",
      answer: "PRASUTI"
    },

    // ROW 3 — Sati (center)
    {
      id: 3,
      pattern: "S_T_",
      clue:
        "Incarnation of the Goddess and one of the sixteen daughters of the above couple. When her father disrespects the God of Kailasa, she immolates herself in the sacrificial hall.",
      answer: "SATI",
      size: "wide"
    },

    // Same row as Sati — Shiva (to the right)
    {
      id: 4,
      pattern: "S____",
      clue: "The God who is adorned by a serpent around his neck and a crescent moon on his head, and wields a Trishula.",
      answer: "SHIVA",
      size: "wide"
    },

    // ROW 4 — Parvati
    {
      id: 5,
      pattern: "P_R__T_",
      clue:
        "Reincarnation of the previous character, born as the daughter of Himavan, the king of the mountains. Performs a rigorous penance to be reunited with her husband.",
      answer: "PARVATI",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      // Daksha row
      1: { x: 0, y: 0 },

      // Prasuti beside Daksha
      2: { x: 1, y: 0 },

      // Sati row
      3: { x: 1, y: 1 },   // center
      4: { x: 2, y: 2 },   // right

      // Parvati row
      5: { x: 1, y: 3 }    // directly under Sati
    },

    connections: [
      // Daksha → Prasuti
      { from: 1, to: 2, noArrow: true},

      // Daksha → Sati
      { from: 1, to: 3 },

      // Prasuti → Sati
      { from: 2, to: 3 },

      // Sati → Shiva
      { from: 3, to: 4 },

      // Shiva → Sati
      { from: 4, to: 5 },

      // Sati → Parvati
      { from: 3, to: 5 }
    ]
  }
},

{
  id: 11,
  slug: "the-fall-from-the-seventh-gate",
  title: "The Fall from the Seventh Gate",
  description: "A single incident at the gates of Vaikuntha sets off a chain of rebirths across multiple Yugas. Follow the journey of the gatekeepers who reincarnate again and again as powerful rakshasas, and finally meet their end at the hands of the very God they served, so that they could reunite with him again.",
  accent: "#f67878",
  congratsMessage: "You successfully solved a puzzle that spans different realms and lifetimes! On to the next one.",
  nextSlug: "forgotten-love", 
  rowHeight: 300,

  nodes: [
    // IMAGE NODE (CENTER TOP)
    {
      id: 100,
      image: "assets/images/jaya_vijaya.jpg",
      size: "large"
    },

    // ROW 1 — Vishnu
    {
      id: 1,
      pattern: "V_____",
      clue: "The god who carries the conch, discus, mace, and lotus. He promises his two gatekeepers (who were under a curse to be born as Asuras), that he will himself come and redeem them.",
      answer: "VISHNU",
      size: "wide"
    },

    // ROW 2 — Jaya & Vijaya
    {
      id: 2,
      pattern: "_AY_",
      clue: "One of the gatekeepers guarding the seventh gate at the entrance of Vaikuntha.",
      answer: "JAYA"
    },
    {
      id: 3,
      pattern: "V_J___",
      clue: "One of the gatekeepers guarding the seventh gate at the entrance of Vaikuntha.",
      answer: "VIJAYA"
    },

    // ROW 3 — Sanatkumara(s)
    {
      id: 4,
      pattern: "S_N_T_U__R__",
      clue: "The four sons of Brahma, that come to Vaikunta in order to visit Lord Vishnu. Although they're the wisest and oldest living beings, they appear like five-year-old boys (due to their tapas). He lays a curse on the gatekeepers to be born on Earth.",
      answer: "SANATKUMARAS",
      size: "wide"
    },

    // ROW 4 — Hiranyaksha & Hiranyakasipu
    {
      id: 5,
      pattern: "H_R_N__K___",
      clue: "Born to Diti and Kasyapa. He causes the Earth to fall into the ocean, for which Lord Vishnu has to take the form of a boar (Varaha), to lift Her back up.",
      answer: "HIRANYAKSHA",
      size: "wide"
    },
    {
      id: 6,
      pattern: "H_R_N__K_S___",
      clue: "Second son of Diti and Kasyapa, after his brothers' death, performs a rigorous Tapas to Lord Brahma, and asks him for a boon that will make it impossible for anyone to kill him.",
      answer: "HIRANYAKASIPU",
      size: "wide"
    },

    // ROW 5 — Ravana & Kumbhakarna
    {
      id: 7,
      pattern: "R_V___",
      clue: "Son of Vishrava and Kaikasi. The king of Lanka, who falls in love with the incarnation of Goddess Lakshmi and forcibly abducts her.",
      answer: "RAVANA"
    },
    {
      id: 8,
      pattern: "K_M___K____",
      clue: "Son of Vishrava and Kaikasi. Known for his immense size, strength, and enormous appetite. He sleeps for 6 months at a time.",
      answer: "KUMBHAKARNA",
      size: "wide"
    },

    // ROW 6 — Shishupala & Dantavakra
    {
      id: 9,
      pattern: "S__SH_P___",
      clue: "Son of Damaghosha and Srutashrava, known for his enmity with Lord Krishna, who is his cousin. His mother asks for a boon from Krishna to forgive him for any offenses that he might commit, for a hundred times. After his 101th mistake that happens during Yudhishtira's Rajasuya Yagna, he is killed with the Sudarshana Chakra.",
      answer: "SHISHUPALA",
      size: "wide"
    },
    {
      id: 10,
      pattern: "D_NT_V_KR_",
      clue: "Son of Vriddhasharman and Shrutadeva. King of Karusha, and the final incarnation of Vijaya. Is an enemy of Krishna and attacks him when the latter was on his way to Dwaraka. In the mace duel that follows, Krishna kills him.",
      answer: "DANTAVAKRA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      // IMAGE
      100: { x: 1, y: 0 },

      // Vishnu
      1: { x: 1, y: 1 },

      // Jaya / Vijaya
      2: { x: 0, y: 2 },
      3: { x: 2, y: 2 },

      // Sanatkumara(s)
      4: { x: 1, y: 3 },

      // Hiranyaksha / Hiranyakasipu
      5: { x: 0, y: 4 },
      6: { x: 2, y: 4 },

      // Ravana / Kumbhakarna
      7: { x: 0, y: 5 },
      8: { x: 2, y: 5 },

      // Shishupala / Dantavakra
      9: { x: 0, y: 6 },
      10:{ x: 2, y: 6 }
    },

    connections: [
      // Vishnu → Gatekeepers
      { from: 1, to: 2 },
      { from: 1, to: 3 },

      // Jaya — Vijaya
      { from: 2, to: 3, straight: true, noArrow: true, label: ["brothers"] },

      // Gatekeepers → Sanatkumara(s)
      { from: 2, to: 4, label: ["tries to stop them", "from entering"] },
      { from: 3, to: 4, label: ["tries to stop them", "from entering"] },

      // Reincarnation chains
      { from: 2, to: 5, straight: true, noArrow: true, label: ["reincarnation"] },
      { from: 3, to: 6, straight: true, noArrow: true, label: ["reincarnation"] },

      // Brothers
      { from: 5, to: 6, straight: true, noArrow: true, label: ["brothers"] },

      // Next reincarnation
      { from: 5, to: 7, straight: true, noArrow: true, label: ["reincarnation"] },
      { from: 6, to: 8, straight: true, noArrow: true, label: ["reincarnation"] },

      // Brothers again
      { from: 7, to: 8, straight: true, noArrow: true, label: ["brothers"] },

      // Final incarnation
      { from: 7, to: 9, straight: true, noArrow: true, label: ["reincarnation"] },
      { from: 8, to: 10, straight: true, noArrow: true, label: ["reincarnation"] },

      // Cousins
      { from: 9, to: 10, straight: true, noArrow: true, label: ["cousins"] }
    ]
  }
},

{
  id: 12,
  slug: "forgotten-love",
  title: "Forgotten Love", 
  description: "A distracted penance, a sage’s curse, and the birth of a king whose name would define a nation. Piece together this tale from the Mahabharata.", 
  accent: "#c77dff",
  congratsMessage: "Nicely done. On to the next puzzle!",
  nextSlug: "devotee-deity",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "M_N___",
      clue: "An Apsara sent by Indra to distract Vishwamitra from his penance. After their union results in a child, she leaves the newborn baby in the forest, under the protection of birds. She returns to heaven as her mission is complete.",
      answer: "MENAKA"
    },

    {
      id: 2,
      pattern: "K_N__",
      clue: "A compassionate Rishi who discovers the abandoned baby and raises her. He names her after the birds that protected her.",
      answer: "KANVA"
    },

    {
      id: 3,
      pattern: "S__K__T___",
      clue: "The name of the girl raised in the hermitage.",
      answer: "SHAKUNTALA",
      size: "wide"
    },

    {
      id: 101,
      image: "assets/images/Shakuntala.png",
      size: "medium"
    },

    {
      id: 4,
      pattern: "D__H_____",
      clue: "The King of Hastinapur who comes to the forest for hunting, encounters her, and falls in love with her.",
      answer: "DUSHYANTA",
      size: "wide"
    },

    {
      id: 102,
      image: "assets/images/Dushyantha.png",
      size: "medium"
    },

    {
      id: 5,
      pattern: "__R____",
      clue: "A fiery-tempered sage who visits the hermitage but is ignored by her, as she is lost in thoughts of the King. Offended, he curses that the one she loves will forget her.",
      answer: "DURVASA"
    },

    {
      id: 6,
      pattern: "B__R_T__",
      clue: "Their son, becomes a mighty ruler of Hastinapur, and he is the one after whom this country is named.",
      answer: "BHARATHA", 
      size: "wide"
    }
  ],

  layout: {
    positions: {
      // Row 1
      1: { x: 0, y: 0 },
      102: { x: 1, y: 0 },

      // Row 2
      2: { x: 1, y: 1 },
      101: { x: 2, y: 1 },

      // Row 3
      3:   { x: 1, y: 2 },
     
      // Row 4
      5: { x: 0, y: 3 },
      4: { x: 2, y: 3 },
    
      // Row 5
      6: { x: 1, y: 4 }
    },

    connections: [
      // Menaka → Shakuntala
      { from: 1, to: 3,  sideTarget: "left" },

      // Kanva → Shakuntala
      { from: 2, to: 3 },

      // Shakuntala — Dushyanta
      { from: 3, to: 4, straight: true, noArrow: true },

      // Durvasa → Shakuntala
      { from: 5, to: 3, label: ["curses her"], sideOrigin: "top", sideTarget: "bottom", straight: true },

      // Shakuntala → Bharata
      { from: 3, to: 6 },

      // Dushyanta → Bharata
      { from: 4, to: 6 }
    ]
  }
},

{
  id: 13,
  slug: "devotee-deity",
  title: "Deity and Devotee",
  description: "Across different Yugas and traditions, devotion binds the mortal and the divine. Match each devotee to the deity they surrendered their heart to.",
  accent: "#d3a42c",
  congratsMessage: "You've successfully identified 14 unique bonds of devotion. Now try your luck with the next puzzle!",
  nextSlug: "the-boons-that-changed-a-kingdom",
  rowHeight: 290,

  nodes: [
    // Row 1
    { id: 1, pattern: "P______A", clue: "Staunch devotee of Lord Vishnu, despite being born to a Daitya family. When his father repeatedly tried to kill him with poison, elephants, fire and venomous snakes, he remains unharmed due to his devotion.", answer: "PRAHLADA" },
    { id: 2, pattern: "N___S__H_", clue: "The fierce avatara who emerged from a pillar to protect his devotee.", answer: "NARASIMHA", size:"wide" },

    // Row 2
    { id: 3, pattern: "_R____", clue: "Pandava prince guided in battle and life by the Lord.", answer: "ARJUNA" },
    { id: 4, pattern: "__I__N_", clue: "Charioteer, strategist, and a divine guide.", answer: "KRISHNA" },

    // Row 3
    { id: 5, pattern: "_H__V_", clue: "Undertook a very severe penance in the forest at a young age, using the Mantra - Om Namo Bhagavate Vasudevaya'", answer: "DHRUVA" },
    { id: 6, pattern: "N_R_Y___", clue: "The sustainer of the universe, holding in his four arms the lotus, conch, mace and discus.", answer: "NARAYANA" },

    // Row 4
    { id: 7, pattern: "R_____", clue: "A ten-headed Rakshasa.", answer: "RAVANA" },
    { id: 8, pattern: "__I__", clue: "The ascetic god worshipped deeply by the King on the left.", answer: "SHIVA" },

    // Row 5
    { id: 9, pattern: "D___P_D_", clue: "Queen of Indraprastha.", answer: "DRAUPADI" },
    { id: 10, pattern: "K_____A", clue: "Protector who answered her desperate prayer during her hour of need.", answer: "KRISHNA" },

    // Row 6
    { id: 11, pattern: "M____N___A", clue: "Son of a Rishi, who was destined to die very young.", answer: "MARKANDEYA", size:"wide" },
    { id: 12, pattern: "S____", clue: "The God who teaches Yama a lesson and protects his devotee. He grants him immortality.", answer: "SHIVA" },

    // Row 7
    { id: 13, pattern: "A___L", clue: "Tamil saint-poetess, one of the 12 Alvars, she composed the 'Tiruppavai'.", answer: "ANDAL" },
    { id: 14, pattern: "V____U", clue: "The deity worshipped by her.", answer: "VISHNU" },

    // Row 8
    { id: 15, pattern: "____A__A", clue: "A hunter who unwavering and deep devotion, who worshipped a Lingam with whatever he could offer - like water from his mouth, and meat from his hunts. One time when he sees the Lingam's eye bleeding, he plucks out his own eye and places it on it.", answer: "KANNAPPA" },
    { id: 16, pattern: "__IV_", clue: "The God worshipped by him. (Hint - A river flows from his matted locks).", answer: "SHIVA" },

    // Row 9
    { id: 17, pattern: "S___M_", clue: "Visits his friend from his childhood days to ask for help, as he was in poverty. He brings parched rice to offer him.", answer: "SUDAMA" },
    { id: 18, pattern: "K_____A", clue: "Welcomed his old friend with great affection. When the friend returns to his house, he finds that it has turned into a palace", answer: "KRISHNA" },

    // Row 10
    { id: 19, pattern: "G_______", clue: "King of elephants who gets attacked by a crocodile, who surrenders to the Lord.", answer: "GAJENDRA" },
    { id: 20, pattern: "V____U", clue: "Responded instantly to the cry for help, and slays the crocodile with the Sudarshana Chakra.", answer: "VISHNU" },

    // Row 11
    { id: 21, pattern: "M_R_B__", clue: "Rajput princess and poet who composed songs on the Lord.", answer: "MIRABAI" },
    { id: 22, pattern: "___SH__", clue: "The God who plays the flute.", answer: "KRISHNA" },

    // Row 12
    { id: 23, pattern: "S____R_", clue: "Elderly devotee who waited for several years to meet the Lord. She collects berries to give him, and tastes each one to keep only the sweet ones and discard the bitter ones.", answer: "SHABARI" },
    { id: 24, pattern: "R___", clue: "He and his brother visit her hermitage while in search of Sita. He accepts the offerings and blesses her.", answer: "RAMA" },

    //Row 13
    { id: 25, pattern: "J___Y_", clue: "A vulture who was very old, but fought very valiantly and gave up his life trying to rescue the princess of Mithila.", answer: "JATAYU" },
    { id: 26, pattern: "R___", clue: "Prince of Ayodhya, who revered him as a father.", answer: "RAMA" },

    //Row 14
    { id: 27, pattern: "A___R___A", clue: "King of Ikshavaku Dynasty, who was following a fast called 'Dvadasi Vrata'. When he breaks the fast by sipping water, Durvasa becomes furious and curses him.", answer: "AMBARISHA", size:"wide" },
    { id: 28, pattern: "N_R_Y___", clue: "The Supreme Lord who protected the King with the Sudarshana Chakra.", answer: "NARAYANA" }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },   2: { x: 2, y: 0 },
      3: { x: 0, y: 1 },   4: { x: 2, y: 1 },
      5: { x: 0, y: 2 },   6: { x: 2, y: 2 },
      7: { x: 0, y: 3 },   8: { x: 2, y: 3 },
      9: { x: 0, y: 4 },   10:{ x: 2, y: 4 },
      11:{ x: 0, y: 5 },   12:{ x: 2, y: 5 },
      13:{ x: 0, y: 6 },   14:{ x: 2, y: 6 },
      15:{ x: 0, y: 7 },   16:{ x: 2, y: 7 },
      17:{ x: 0, y: 8 },   18:{ x: 2, y: 8 },
      19:{ x: 0, y: 9 },   20:{ x: 2, y: 9 },
      21:{ x: 0, y: 10 },  22:{ x: 2, y: 10 },
      23:{ x: 0, y: 11 },  24:{ x: 2, y: 11 },
      25:{ x: 0, y: 12 },  26:{ x: 2, y: 12 },
      27:{ x: 0, y: 13 },  28:{ x: 2, y: 13 }
    },

    connections: [
      { from: 1, to: 2, straight: true, label: ["devotee of"] },
      { from: 3, to: 4, straight: true, label: ["devotee of"] },
      { from: 5, to: 6, straight: true, label: ["devotee of"] },
      { from: 7, to: 8, straight: true, label: ["devotee of"] },
      { from: 9, to: 10, straight: true, label: ["devotee of"] },
      { from: 11, to: 12, straight: true, label: ["devotee of"] },
      { from: 13, to: 14, straight: true, label: ["devotee of"] },
      { from: 15, to: 16, straight: true, label: ["devotee of"] },
      { from: 17, to: 18, straight: true, label: ["devotee of"] },
      { from: 19, to: 20, straight: true, label: ["devotee of"] },
      { from: 21, to: 22, straight: true, label: ["devotee of"] },
      { from: 23, to: 24, straight: true, label: ["devotee of"] },
      { from: 25, to: 26, straight: true, label: ["devotee of"] },
      { from: 27, to: 28, straight: true, label: ["devotee of"] }
    ]
  }
},

{
  id: 14,
  slug: "the-boons-that-changed-a-kingdom",
  title: "The Boons That Changed a Kingdom",
  description: "A promise made in gratitude, a mind swayed by jealousy, and a prince who walks willingly into exile. Trace the chain of events that led to fourteen years in the forest.",
  accent: "#ff9f1c",
  congratsMessage: "From palace intrigue to forest exile — you've identified the major events. On to the next puzzle!",
  nextSlug: "the-midnight-prophecy",
  rowHeight: 300,

  nodes: [
    // Row 1
    {
      id: 1,
      pattern: "K__K_Y_",
      clue: "One of the queens of Ayodhya. Her mind becomes clouded by malicious advice given by her maid, and she plots to send the crown prince away to the forests for 14 years.",
      answer: "KAIKEYI"
    },

    {
      id: 2,
      pattern: "D____R____",
      clue: "The King of Ayodhya. When he was fighting Rakshasas, his life was saved by the queen on the left. Because of this, he offers her two boons, which she chooses to claim later.",
      answer: "DASHARATHA"
    },

    // Row 2
    {
      id: 4,
      pattern: "S_T_",
      clue: "The princess of Mithila, who follows her husband into exile.",
      answer: "SITA"
    },

    {
      id: 3,
      pattern: "R_M_",
      clue: "The crown prince of Ayodhya. On the day he was to be coronated, he is told to leave for the forests for 14 years.",
      answer: "RAMA"
    },

    {
      id: 5,
      pattern: "L_K____N_",
      clue: "His younger brother, who follows him to the forest. He does not sleep for 14 years, to serve and protect them.",
      answer: "LAKSHMANA"
    },

    // Row 3
    {
      id: 6,
      pattern: "G___",
      clue: "The Nishada king who welcomes Rama during his exile and becomes his devoted ally. He helps him cross the Ganga river.",
      answer: "GUHA"
    }
  ],

  layout: {
    positions: {
      // Row 1
      1: { x: 0, y: 0 },
      2: { x: 1, y: 0 },

      // Row 2
      4: { x: 0, y: 1 },
      3: { x: 1, y: 1 },
      5: { x: 2, y: 1 },

      // Row 3
      6: { x: 1, y: 2 }
    },

    connections: [
      // Kaikeyi ↔ Dasharatha (boons relationship)
      { from: 1, to: 2, noArrow: true},

      // Dasharatha → Rama (exile decision)
      { from: 2, to: 3 },

      // Kaikeyi → Rama (demands exile)
      { from: 1, to: 3 },

      // Rama ↔ Sita
      { from: 3, to: 4, straight: true, noArrow: true, sideOrigin: "left", sideTarget: "right" },

      // Rama ↔ Lakshmana
      { from: 3, to: 5, straight: true, noArrow: true },

      // Rama → Guha
      { from: 3, to: 6 }
    ]
  }
},

{
  id: 15,
  slug: "the-midnight-prophecy",
  title: "The Midnight Prophecy",
  description: "A tyrant king, a celestial warning, and a divine birth that changes destiny. Follow the chain of events that led to the birth of Krishna.",
  accent: "#8bc6ff",
  congratsMessage: "Nicely solved! On to the next puzzle!",
  nextSlug: "twilight-on-the-threshold",
  rowHeight: 300,

  nodes: [
    // Row 1
    {
      id: 1,
      pattern: "U___S_N_",
      clue: "King of Mathura, later imprisoned by his own son, who was a tyrant.",
      answer: "UGRASENA"
    },

    // Row 2
    {
      id: 2,
      pattern: "_A___",
      clue: "Overthrew his father from the throne, with Jarasandha's support, and becomes the King of Mathura.",
      answer: "KAMSA"
    },

    // Row 3
    {
      id: 3,
      pattern: "D_V_K_",
      clue: "During her wedding, a celestial voice announces that the eighth child born to her will slay her brother. Upon hearing this, her brother tries to kill her immediately.",
      answer: "DEVAKI"
    },
    {
      id: 4,
      pattern: "V_S_____",
      clue: "Prince of the Yadava dynasty — tries to pacify his wife's brother and assures him that they will give him their children so that they won't pose a threat.",
      answer: "VASUDEVA"
    },

    // Row 4
    {
      id: 5,
      pattern: "K _ _ S _ _ _",
      clue: "The eighth son born to the above couple, in the prison, at midnight.",
      answer: "KRISHNA",
      size: "wide"
    },

    // Row 5
    {
      id: 6,
      pattern: "Y _ M _ _ _ _",
      clue: "The river which his father has to cross, in order to reach the other side and exchange the baby.",
      answer: "YAMUNA"
    },
    {
      id: 7,
      pattern: "__E___",
      clue: "The serpent which acts as a hood to protect the baby, when his father is carrying him across the river in the rain.",
      answer: "SHESHA",
    },

    // Row 6
    {
      id: 8,
      pattern: "N _ N _ _",
      clue: "The Chief of the cowherds in Vrindavan.",
      answer: "NANDA"
    },
    {
      id: 9,
      pattern: "Y_S_O__",
      clue: "Wife of the chieftain, who had given birth to a baby girl on the same night.",
      answer: "YASHODA"
    },

    // Row 7
    {
      id: 10,
      pattern: "Y _ G _ _ _ Y _",
      clue: "The baby girl who is brought back to the prison. When Kamsa attempts to kill her, she escapes from his grasp and warns him that the eighth child has been born and that his end is near.",
      answer: "YOGAMAYA",
      size: "wide"
    },

    // Image
    {
      id: 100,
      image: "assets/images/vasudeva_devaki.jpg",
      size: "medium"
    }
  ],

  layout: {
    positions: {
      // Row 1
      1: { x: 1, y: 0 },

      // Row 2
      2: { x: 1, y: 1 },

      // Row 3
      3: { x: 0, y: 2 },
      4: { x: 2, y: 2 },

      // Row 4
      5: { x: 1, y: 3 },

      // Row 5
      6: { x: 0, y: 4 },
      7: { x: 2, y: 4 },

      // Row 6
      8: { x: 0, y: 5 },
      9: { x: 2, y: 5 },

      // Row 7
      10: { x: 1, y: 6 },

      // Image
      100: { x: 1, y: 7 }
    },

    connections: [
      // Ugrasena → Kamsa
      { from: 1, to: 2, label: ["son"] },

      // Kamsa ↔ Devaki (siblings)
      { from: 2, to: 3, label: ["siblings"] },

      // Devaki & Vasudeva → Krishna
      { from: 3, to: 5 },
      { from: 4, to: 5 },

      // Krishna journey elements
      { from: 5, to: 6 },
      { from: 5, to: 7 },

      // Nanda → Yashoda
      { from: 8, to: 9 },

      // Nanda & Yashoda → Yogamaya
      { from: 8, to: 10 },
      { from: 9, to: 10 }
    ]
  }
},

{
  id: 16,
  slug: "twilight-on-the-threshold",
  title: "Twilight on the Threshold",
  description: "A powerful Daitya seeks invincibility through clever conditions. But destiny has its own interpretation of words. Follow the chain that led to one of Vishnu’s fiercest incarnations.",
  accent: "#ffa36e",
  congratsMessage: "Well solved. On to the next puzzle!",
  nextSlug: "the-abduction-and-the-search",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "H_R_N__K_S___",
      clue: "A Daitya who asks Lord Brahma for a boon that he should not die at the hands of a god, man, or animal, neither in the day nor night, neither indoor nor outdoors, not by a weapon, and neither in the sky nor in the earth.",
      answer: "HIRANYAKASIPU",
      size: "wide"
    },

    {
      id: 2,
      pattern: "P_______",
      clue: "The youngest son of this Daitya, who is a great devotee of Vishnu from birth.",
      answer: "PRAHLADA"
    },

    {
      id: 3,
      pattern: "N_R_S_MH_",
      clue: "When the Daitya king cuts down a pillar in rage, a being — half man, and half lion — emerges and kills him, seating himself on the throne. Name this mighty and fearsome Avatara of Lord Vishnu.",
      answer: "NARASIMHA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },
      2: { x: 2, y: 0 },
      3: { x: 1, y: 1 }
    },

    connections: [
      // Father → Son
      { from: 1, to: 2, noArrow:true, label: ["son"] },

      // Son's devotion → Narasimha
      { from: 2, to: 3, sideTarget: "right",  noArrow:true },

      // Narasimha → Hiranyakasipu (slaying)
      { 
        from: 3, 
        to: 1, 
        straight: true,
        sideOrigin: "top",
        sideTarget: "bottom",
        label: [
          "kills him on his",
          "lap with his claws"
        ]
      }
    ]
  }
},

{
  id: 17,
  slug: "the-abduction-and-the-search",
  title: "The Abduction and the Search",
  description: "A false ascetic, a desperate cry in the sky, and a wounded guardian falling to the earth. Follow the trail of courage and sacrifice that sets the stage for a great alliance.",
  accent: "#7fcfe3",
  congratsMessage: "From deception till the alliance, you've identified the significant events in the Ramyana! On to the next puzzle.",
  nextSlug: "rajasuya-yagna",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "R_V___",
      clue: "The Rakshasa who disguises himself as a Rishi asking for alms, and abducts a princess.",
      answer: "RAVANA"
    },

    {
      id: 2,
      pattern: "S_T_",
      clue: "She is kidnapped by the Rakshasa, and throws some of her jewels down to indicate the direction in which he has taken her.",
      answer: "SITA"
    },

    {
      id: 3,
      pattern: "J_T___",
      clue: "Son of Aruna, an aged but brave vulture who does his best to rescue the woman, but his wings are chopped off by the Rakshasa.",
      answer: "JATAYU"
    },

    {
      id: 4,
      pattern: "S_M____",
      clue: "The vulture’s brother, who in childhood challenged him to fly toward the sun. Later, he shields his brother with his wings.",
      answer: "SAMPATI"
    },

    {
      id: 5,
      pattern: "V_N____",
      clue: "The people who see the jewels and help the prince of Ayodhya in his search for his wife.",
      answer: "VANARAS",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },
      2: { x: 1, y: 1 },
      3: { x: 1, y: 2 },
      4: { x: 0, y: 3 },
      5: { x: 2, y: 3 }
    },

    connections: [
      // Ravana → Sita (abduction)
      { from: 1, to: 2, label: ["abducts her"] },

      // Sita → Jatayu (tries to save her)
      { from: 2, to: 3 },

      // Jatayu ↔ Sampati (brothers)
      { from: 3, to: 4, straight: true, noArrow: true, label: ["brothers"] },

      // Sita → Vanaras (jewels guide them)
      { from: 2, to: 5, noArrow: true, label: ["drops jewels"], avoidNode:3 }
    ]
  }
},

{
  id: 18,
  slug: "rajasuya-yagna",
  title: "The Rajasuya Yagna",
  description: "Before the grand Rajasuya could be performed, an obstacle had to be removed. A conquest had to be completed. And a ceremony would ignite pride, devotion, and downfall.",
  accent: "#f7fb08",
  congratsMessage: "From Jarasandha’s fall, to the major campaign, and to Shishupala’s end + Duryodhana’s envy — you identified the main events surrounding Rajasuya. On to the next puzzle!",
  nextSlug: "when-brothers-become-enemies",
  rowHeight: 350,

  nodes: [

    // ===== SECTION 1: THE OBSTACLE =====
    {
      id: 1,
      pattern: "J_R_",
      clue: "She is a Rakshasi who finds two lifeless halves of a child, that had been abandoned by a King. She joins the two halves together, which makes the child come to life.",
      answer: "JARA"
    },
    {
      id: 2,
      pattern: "J___S_____",
      clue: "King of Magadha, conquers numerous kings and holds them captive. He attacked Mathura seventeen times, and was a very powerful ruler. For Yudhishtira to perform his Rajasuya Yagna, this King had to be eliminated first.",
      answer: "JARASANDHA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "B_I___",
      clue: "The Pandava who ultimately kills the Emperor of Magadha in a gruelling wrestling match which lasted 14 days.",
      answer: "BHIMA"
    },
    {
      id: 4,
      pattern: "K_____A",
      clue: "Strategist who guides Bhima on how to defeat the Emperor. He splits a leaf and demonstrates throwing away the halves in opposite directions to prevent them from rejoining.",
      answer: "KRISHNA"
    },

    // ===== SECTION 2: DIGVIJAYA =====
    {
      id: 5,
      image: "assets/images/ancient_compass.png",
      size: "small"
    },

    {
      id: 6,
      pattern: "__H_D___",
      clue: "The prince who conquered the southern kingdoms including Kosala, Avanti, etc.",
      answer: "Sahadeva"
    },
    {
      id: 7,
      pattern: "__J_N_",
      clue: "The prince who conquered the northern regions including Anarta, Kalakuta, Pragjyotisha etc.",
      answer: "ARJUNA"
    },
    {
      id: 8,
      pattern: "__K___",
      clue: "The prince who conquered kingdoms in the west.",
      answer: "NAKULA"
    },
    {
      id: 9,
      pattern: "__I__",
      clue: "The prince who conquered kingdoms in the eastern direction - such as Videha, Kasi, Pundra etc.",
      answer: "BHIMA"
    },

    // ===== SECTION 3: THE YAGNA =====
    {
      id: 10,
      pattern: "S__SH_P___",
      clue: "Insults Krishna repeatedly during the Rajasuya ceremony and is slain after exceeding hundred crimes commited.",
      answer: "SHISHUPALA",
      size: "wide"
    },
    {
      id: 11,
      pattern: "K_____A",
      clue: "Honored with the Arghya first at the Rajasuya.",
      answer: "KRISHNA"
    },
    {
      id: 12,
      pattern: "D___Y____A",
      clue: "In the Mayasabha, he mistakes an illusion for real water and lifts his garnments. He feels humiliated by this and also jealous of the Pandavas, and starts plotting against them.",
      answer: "DURYODHANA",
      size: "wide"
    }
  ],

  layout: {
    positions: {

      // ===== SECTION 1 (Top) =====
      1: { x: 1, y: 0 },
      2: { x: 1, y: 1 },
      3: { x: 0, y: 2 },
      4: { x: 2, y: 2 },

      // ===== SECTION 2 (Compass Style) =====

      5: { x: 1, y: 4 },   // Compass center
      9: { x: 2, y: 4 },   // South (Bhima)
      7: { x: 1, y: 3 },   // North (Arjuna)
      8: { x: 0, y: 4 },   // West (Nakula)
      6: { x: 1, y: 5 },   // East (Bhima)


      // ===== SECTION 3 (Bottom) =====
      11:{ x: 1, y: 6 },   // Krishna center
      10:{ x: 0, y: 7 },   // Shishupala
      12:{ x: 2, y: 7 }    // Duryodhana
    },

    connections: [

      // SECTION 1
      { from: 1, to: 2, label: ["joins his two halves"] },
      { from: 4, to: 3, label: ["guides him"], sideOrigin: "left", sideTarget: "right" },
      { from: 3, to: 2, label: ["kills him"], sideOrigin: "top", sideTarget: "bottom", straight: true },

      // SECTION 2 (Digvijaya Compass Spokes)
      { from: 5, to: 7, straight: true, label: ["North"], sideOrigin: "top", sideTarget:"bottom" },
      { from: 5, to: 9, straight: true, label: ["East"], sideOrigin: "right", sideTarget: "left" },
      { from: 5, to: 6, straight: true, label: ["South"], sideOrigin: "bottom", sideTarget: "top"},
      { from: 5, to: 8, straight: true, label: ["West"], sideOrigin: "left", sideTarget: "right" },
      
      // SECTION 3
      { from: 10, to: 11, label: ["insults repeatedly"], sideOrigin:"top", sideTarget:"left", straight:true },
      { from: 11, to: 10, label: ["kills with Sudarshana Chakra"], sideTarget:"right", straight:true },

    
    ]
  }
},

{
  id: 19,
  slug: "when-brothers-become-enemies",
  title: "When Brothers Become Enemies",
  description: "A misunderstanding between brothers leads to exile, a new alliance, and eventually a search that would cross oceans.",
  accent: "#12f0d6",
  congratsMessage: "Brilliant! On to the next puzzle.",
  nextSlug: "a-night-in-the-dance-hall",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "V_L_",
      clue: "The King of the Vaanaras. He chases a Rakshasa named Mayavi into a cave and asks his brother to guard the entrance. When he doesn't emerge for long, the entrance is sealed.",
      answer: "VALI"
    },

    {
      id: 2,
      pattern: "S_G_I__",
      clue: "The Vaanara prince who had sealed the entrance. He is exiled by the King when he returned. He hides in the Rishyamukha mountains from his brother.",
      answer: "SUGRIVA"
    },

    {
      id: 3,
      pattern: "H_N_M_N",
      clue: "The minister of the exiled prince. Seeing two ascetics near the river Pampa, he approaches them to find out what they had come for. Realising their purpose, he carries both brothers on his shoulders to meet the prince.",
      answer: "HANUMAN"
    },

    {
      id: 4,
      pattern: "R_M_",
      clue: "When asked to demonstrate his prowess, he shoots an arrow through one Sal tree — and it pierces six more behind it.",
      answer: "RAMA"
    },

    {
      id: 5,
      pattern: "A_G_D_",
      clue: "The son of the Vaanara king. Along with the son of Vayu and others, he travels southward in search of Sita.",
      answer: "ANGADA"
    },

    {
      id: 6,
      pattern: "S_M____",
      clue: "A vulture who overhears the Vaanaras discussing their dilemma at the seashore. Upon hearing his brother's name mentioned, he reveals that he saw a Rakshasa flying over the ocean with a woman.",
      answer: "SAMPATI"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // Vali

      2: { x: 0, y: 1 },   // Sugriva

      3: { x: 0, y: 2 },   // Hanuman
      4: { x: 2, y: 2 },   // Rama

      5: { x: 1, y: 3 },   // Angada
      6: { x: 2, y: 3 }    // Sampati
    },

    connections: [
      // Brothers
      { from: 1, to: 2, straight: true, noArrow: true, label: ["brothers"] },

      // Sugriva → Hanuman
      { from: 2, to: 3, label: ["minister"] },

      // Sugriva → Rama (seeks help)
      { from: 2, to: 4, noArrow:true },

      // Rama → Vali (slays him)
      { from: 4, to: 1, label: ["kills him"], sideOrigin:"top", sideTarget:"right", straight: true },

      // Vali → Angada (son)
      { from: 1, to: 5 },

      // Angada ↔ Sampati (search phase)
      { from: 5, to: 6, noArrow:true }
    ]
  }
}, 

{
  id: 20,
  slug: "a-night-in-the-dance-hall",
  title: "A Night in the Dance Hall",
  description: "During the Pandavas’ incognito year in the Matsya kingdom, a powerful commander becomes infatuated with a woman in disguise. His malicious actions lead to a brutal end.",
  accent: "#759ff4",
  congratsMessage: "Congratulations - onward to the next puzzle.",
  nextSlug: "the-messenger-of-rama",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "M___N_",
      clue: "The name under which Draupadi serves in the court of Matsya during the Pandavas’ incognito year.",
      answer: "MALINI"
    },

    {
      id: 2,
      pattern: "S___K____A",
      clue: "The queen of Matsya, who is served by a Sairandhri, who is actually an empress in disguise.",
      answer: "SUDAKSHINA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "K__C____",
      clue: "Brother of the queen, and the powerful commander of Matsya who becomes infatuated with the Sairandhri. His repeated attempts to harass her results in his downfall.",
      answer: "KEECHAKA"
    },

    {
      id: 4,
      pattern: "B_I___",
      clue: "The Pandava who is disguised as a cook in Matsya. He disguises himself as the Sairandhri and waits in the dance hall where Keechaka is lured, and kills him in that night.",
      answer: "BHIMA"
    }
  ],

  layout: {
    positions: {
      2: { x: 1, y: 0 },   // Sudakshina (top center)

      1: { x: 1, y: 1 },   // Malini (below queen)

      3: { x: 0, y: 2 },   // Keechaka (left)

      4: { x: 2, y: 2 }    // Bhima (right)
    },

    connections: [
      // Malini serves Sudakshina
      { from: 1, to: 2, sideOrigin:"top", sideTarget:"bottom", noArrow:true },

      // Keechaka harasses Malini
      { from: 3, to: 1, label: ["harasses"], straight:true, sideOrigin:"top", sideTarget:"left" },

      // Bhima kills Keechaka
      { from: 4, to: 3, label: ["kills him"], sideOrigin:"left", sideTarget:"right" },

      // Malini → Bhima (seeks protection)
      { from: 1, to: 4, label: ["seeks protection"] }
    ]
  }
}, 

{
  id: 21,
  slug: "the-messenger-of-rama",
  title: "The Messenger of Rama",
  description: "From forgotten strength to fiery defiance, trace Hanuman’s journey across the ocean into Lanka.",
  accent: "#ff6b35",
  congratsMessage: "From leap to Lanka to Ashoka grove, you followed Hanuman’s path and identified the main events. Try your luck with the next puzzle!",
  nextSlug: "seven-days-of-rain",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "H___M_N",
      clue: "The one who leaps across the ocean in search of Sita.",
      answer: "HANUMAN"
    },

    {
      id: 2,
      pattern: "S_R_S_",
      clue: "The Rakshasi near the ocean who tries to swallow him, testing his wit and agility.",
      answer: "SURASA"
    },

    {
      id: 3,
      pattern: "J_MB_V_N",
      clue: "The wise Vaanara who reminds the son of Vayu of his forgotten strength before the leap.",
      answer: "JAMBAVAN"
    },

    {
      id: 4,
      pattern: "A_____ VANAM",
      clue: "The garden in Lanka where Sita is kept under guard.",
      answer: "ASHOKA",
      size: "wide"
    },

    {
      id: 5,
      pattern: "R_V___",
      clue: "The king of Lanka who holds Sita captive.",
      answer: "RAVANA"
    }
  ],

  layout: {
    positions: {
      3: { x: 1, y: 0 },   // Jambavan (top)

      1: { x: 1, y: 1 },   // Hanuman

      2: { x: 0, y: 2 },   // Surasa
      4: { x: 2, y: 2 },   // Ashoka Vatika

      5: { x: 1, y: 3 }    // Ravana
    },

    connections: [
      // Jambavan reminds Hanuman
      { from: 3, to: 1, label: ["reminds him of his strength"] },

      // Hanuman encounters Surasa
      { from: 1, to: 2, label: ["outwits her"] },

      // Hanuman reaches Ashoka Vatika
      { from: 1, to: 4 },

      // Ravana → Ashoka Vatika
      { from: 5, to: 4, label: ["keeps Sita here"], sideOrigin:"right", sideTarget:"bottom", straight:true }
    ]
  }
}, 
{
  id: 22,
  slug: "seven-days-of-rain",
  title: "Seven Days of Rain",
  description: "When pride is challenged and devotion is redirected, a mountain becomes an umbrella and a lesson is taught to the king of the heavens.",
  accent: "#70e000",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "at-the-edge-of-sixteen",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "K_____A",
      clue: "The young cowherd who questions the ritual worship of Indra and redirects devotion toward nature.",
      answer: "KRISHNA"
    },

    {
      id: 2,
      pattern: "I____",
      clue: "The king of the Devas who sends torrential rains in anger.",
      answer: "INDRA"
    },

    {
      id: 3,
      pattern: "V____A___A",
      clue: "The village which is protected during the great storm.",
      answer: "VRINDAVANA",
      size: "wide"
    },

    {
      id: 4,
      pattern: "G_V_R____A",
      clue: "The mountain lifted effortlessly to shelter the people from the storm.",
      answer: "GOVARDHANA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      2: { x: 1, y: 0 },   // Indra (top)

      1: { x: 1, y: 1 },   // Krishna

      3: { x: 0, y: 2 },   // Vrindavan
      4: { x: 2, y: 2 }    // Govardhana
    },

    connections: [
      // Indra attacks Vrindavan
      { from: 2, to: 3, label: ["sends torrential rains"], sideOrigin:"left", sideTarget:"top" },

      // Krishna lifts Govardhana
      { from: 1, to: 4, label: ["lifts"] },

      // Govardhana shelters Vrindavan
      { from: 4, to: 3, label: ["shelters"], sideOrigin: "left", sideTarget:"right" },

      // Krishna humbles Indra
      { from: 1, to: 2, noArrow:true, sideOrigin:"top", sideTarget: "bottom" }
    ]
  }
}, 
{
  id: 23,
  slug: "at-the-edge-of-sixteen",
  title: "At the edge of sixteen",
  description: "A child born with a short lifespan, a father’s devotion, divine witnesses, and the moment when fate itself is challenged.",
  accent: "#b774ee",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-year-in-disguise",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "M__K_N__Y_",
      clue: "A young sage destined to live only sixteen years.",
      answer: "MARKANDEYA",
      size: "wide"
    },

    {
      id: 2,
      pattern: "M__K__DU",
      clue: "The father of the young sage, who performs penance. He is given two choices, a son without virtues who would live long, and a virtuous son who would live only sixteen years.",
      answer: "MRIKANDU"
    },

    {
      id: 3,
      pattern: "__I__",
      clue: "The deity to whom the young sage prays with unwavering devotion.",
      answer: "SHIVA"
    },

    {
      id: 4,
      pattern: "___T___S_I_",
      clue: "The seven great sages who witness many cosmic events. At one point, when the boy bows down to them, they bless him with a long life.",
      answer: "SAPTARISHIS",
      size: "wide"
    },

    {
      id: 5,
      pattern: "_R____",
      clue: "The creator who grants the boon to the father.",
      answer: "BRAHMA"
    },

    {
      id: 6,
      pattern: "____D_",
      clue: "The wandering sage who often appears at pivotal moments in divine stories. When the Rishis grant a long life to the boy, he laughs, saying their words would be proven wrong for the first time.",
      answer: "NARADA"
    },

    {
      id: 7,
      pattern: "___A",
      clue: "The god of death who comes to claim the young sage.",
      answer: "YAMA"
    }
  ],

  layout: {
    positions: {
      5: { x: 2, y: 0 },   // Brahma (top)
      2: { x: 1, y: 0 },   // Mrikanda
      1: { x: 1, y: 1 },   // Markandeya
      7: { x: 0, y: 2 },   // Yama
      3: { x: 2, y: 2 },   // Shiva
      6: { x: 2, y: 3 },   // Narada
      4: { x: 0, y: 3 }    // Saptarishis
    },

    connections: [
      // Brahma → Mrikanda (boon)
      { from: 5, to: 2, sideOrigin: "left", sideTarget: "right", straight: true },

      // Mrikanda → Markandeya (father)
      { from: 2, to: 1, label: ["son"] },

      // Markandeya → Shiva (devotion)
      { from: 1, to: 3 },

      // Yama → Markandeya
      { from: 7, to: 1, sideOrigin: "top", sideTarget: "left", straight: true,label: ["comes to claim him"] },

      // Shiva → Yama
      { from: 3, to: 7, sideOrigin: "left", sideTarget: "right", straight: true, label: ["teaches him", "a lesson"] }
    ]
  }
}, 

{
  id: 24,
  slug: "the-year-in-disguise",
  title: "The Year in Disguise",
  description: "During the thirteenth year of exile, the Pandavas conceal their identities in the kingdom of Matsya. Their disguises, alliances, and battles shape what follows.",
  accent: "#8d9eeb",
  congratsMessage: "From hidden identities to revealed strength, you identified the major characters involved during the incognito year. Try your luck with the next puzzle!",
  nextSlug: "the-golden-deception",
  rowHeight: 280,

  nodes: [

    // ===== PANDAVAS (LEFT) =====
    { id: 1, pattern: "Y_____H____", clue: "Eldest of the Pandavas.", answer: "YUDHISHTIRA", size: "wide" },
    { id: 2, pattern: "B_I__", clue: "Second of the Pandavas, known for immense strength.", answer: "BHIMA" },
    { id: 3, pattern: "__J___", clue: "Master archer among the Pandavas.", answer: "ARJUNA" },
    { id: 4, pattern: "__K___", clue: "Fourth of the Pandavas.", answer: "NAKULA" },
    { id: 5, pattern: "____D___", clue: "Youngest of the Pandavas.", answer: "SAHADEVA" },

    // ===== DISGUISE NAMES (RIGHT) =====
    { id: 6, pattern: "K_N__A", clue: "Courtier and dice companion in Matsya.", answer: "KANAKA" },
    { id: 7, pattern: "__LL_B__", clue: "Royal cook with extraordinary strength.", answer: "VALLABHA" },
    { id: 8, pattern: "B__H_NN___", clue: "Dance and music teacher in the royal court.", answer: "BRIHANNALA", size: "wide" },
    { id: 9, pattern: "____TH_K_", clue: "Keeper of horses in Matsya.", answer: "GRANTHIKA" },
    { id: 10, pattern: "T_U__P__A", clue: "Supervisor of cattle in the kingdom.", answer: "TAUTIPALA", size: "wide" },

    // ===== VIRATA CONTEXT =====
    { id: 11, pattern: "_TTH___", clue: "Princess of Matsya, student of dance.", answer: "UTTARA" },
    { id: 12, pattern: "__U__J__NY_", clue: "Prince of Matsya who initially boasts about his prowess but gets scared to fight the battle.", answer: "BHUMIJANYA", size: "wide" },

    // ===== ANTAGONISTS =====
    { id: 13, pattern: "___Y_D__N_", clue: "Kaurava prince who attempts to expose the Pandavas.", answer: "DURYODHANA", size: "wide" },
    { id: 14, pattern: "__R__", clue: "Ally of the Kaurava prince, famed archer.", answer: "KARNA" },
    { id: 15, pattern: "__SH__M_", clue: "King of Trigarta who attacks Matsya from another side.", answer: "SUSHARMA" }
  ],

  layout: {
    positions: {

      // Pandavas left column
      1: { x: 0, y: 1 },
      2: { x: 0, y: 3 },
      3: { x: 0, y: 4 },
      4: { x: 0, y: 2 },
      5: { x: 0, y: 0 },

      // Disguises right column
      6: { x: 2, y: 1 },
      7: { x: 2, y: 3 },
      8: { x: 2, y: 4 },
      9: { x: 2, y: 2 },
      10:{ x: 2, y: 0 },

      // Virata layer
      11:{ x: 0, y: 5 },
      12:{ x: 2, y: 5 },

      // Antagonists bottom
      13:{ x: 0, y: 6 },
      14:{ x: 1, y: 6 },
      15:{ x: 2, y: 6 }
    },

    connections: [

      // Identity swaps
      { from: 1, to: 6, straight: true, label:["disguises","himself as"] },
      { from: 2, to: 7, straight: true, label:["disguises","himself as"] },
      { from: 3, to: 8, straight: true, label:["disguises","himself as"] },
      { from: 4, to: 9, straight: true, label:["disguises","himself as"] },
      { from: 5, to: 10, straight: true, label:["disguises","himself as"] },

      // Brihannala → Uttara
      { from: 8, to: 11, label: ["his student"] },

      // Brihannala → Bhumijanya (charioteer moment)
      { from: 8, to: 12, label: ["becomes his charioteer"] },
    ]
  }
}, 

{
  id: 25,
  slug: "the-golden-deception",
  title: "The Golden Deception",
  description: "A chance encounter in the forest sets off a chain of humiliation, revenge, and deception that ultimately leads to the abduction of Sita.",
  accent: "#ff8fab",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-bow-of-rudra",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "R_M_",
      clue: "Prince of Ayodhya, who wields a bow named Kodanda.",
      answer: "RAMA"
    },

    {
      id: 2,
      pattern: "S_RP_N__H_",
      clue: "The demoness who spots the person on the left in the forest, falls in love with him, and wants to marry him.",
      answer: "SURPANAKHA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "L_K____N_",
      clue: "He is the one who cuts the demoness's nose and ears when she tries to attack Sita.",
      answer: "LAKSHMANA",
      size:"wide"
    },

    {
      id: 4,
      pattern: "R_V___",
      clue: "The King of Lanka. He is informed by Akampana about what happened to his sister, and about how his brothers Khara and Dooshana were defeated by Rama. In retaliation, he plans revenge for which he takes the help of a Rakshasa.",
      answer: "RAVANA"
    },

    {
      id: 5,
      pattern: "M_R__H_",
      clue: "The Rakshasa who is approached by Ravana, and asked to disguise himself as a golden deer to lure the two sons of Dasharatha away, so that he could abduct Sita. He is reluctant to do this, as he knows about their prowess which he had witnessed at Vishwamitra's Yagna. But he finally agrees.",
      answer: "MARICHA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },   // Rama
      2: { x: 2, y: 0 },   // Surpanakha

      3: { x: 1, y: 1 },   // Lakshmana

      4: { x: 2, y: 2 },   // Ravana

      5: { x: 1, y: 3 }    // Maricha
    },

    connections: [
      //Rama to Lakshmana
      {from: 3, to:1, sideOrigin: "left", sideTarget: "bottom", straight: true, noArrow:true, label:["brothers"]},
      // Surpanakha approaches Rama
      { from: 2, to: 1, sideOrigin: "left", sideTarget: "right", straight: true, },

      // Lakshmana mutilates Surpanakha
      { from: 3, to: 2, sideOrigin: "top", sideTarget: "bottom", straight: true,label: ["cuts her nose", "and ears"] },

      // Surpanakha → Ravana (complaint)
      { from: 2, to: 4, label: ["brother"] },

      // Ravana recruits Maricha
      { from: 4, to: 5, sideOrigin: "bottom", sideTarget: "right", straight: true,label: ["asks him to", "disguise himself", "as a golden deer"] }
    ]
  }
},

{
  id: 26,
  slug: "the-bow-of-rudra",
  title: "The Bow of Rudra",
  description: "A divine bow, a royal challenge, and a moment that echoes across kingdoms. Follow the events of the famous Swayamvara in Mithila.",
  accent: "#ffd166",
  congratsMessage: "From the fields of Mithila to the breaking of the divine bow — you solved the Swayamvara puzzle. On to the next one!",
  nextSlug: "the-sleeping-king",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "J_N___",
      clue: "The King of Mithila. He proclaims that whoever is able to lift and string his divine bow would receive his daughter's hand in marriage.",
      answer: "JANAKA"
    },

    {
      id: 2,
      pattern: "S___",
      clue: "She is found by the King near some bushes and shrubs, while he was ploughing the land to perform a Yagna.",
      answer: "SITA"
    },

    {
      id: 3,
      pattern: "__M_",
      clue: "The prince of Ayodhya, who is brought by Vishwamitra to Mithila. He lifts the mighty bow with ease, and draws the string to his ear. When he does, the bow snaps into two with a thunderous clap.",
      answer: "RAMA"
    },

    {
      id: 4,
      pattern: "P_R____R_M_",
      clue: "The son of Jamadagni, the sworn enemy of Kshatriya's who arrives in anger when the bow of Rudra breaks.",
      answer: "PARASHURAMA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // Janaka

      2: { x: 0, y: 1 },   // Sita
      3: { x: 2, y: 1 },   // Rama

      4: { x: 1, y: 2 }    // Parashurama
    },

    connections: [
      // Janaka → Sita
      { from: 1, to: 2, label:["daughter"]},

      // Rama → Sita (wins her hand)
      { from: 3, to: 2, sideOrigin: "left", sideTarget: "right", straight: true,label:["wins her hand"] },

    ]
  }
}, 
{
  id: 27,
  slug: "the-sleeping-king",
  title: "The Sleeping King",
  description: "When Mathura is threatened by powerful enemies, Krishna devises a strategy that leads one invincible warrior straight into the gaze of a long-sleeping king.",
  accent: "#ffb703",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "when-rama-walked-into-the-hermitage",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "J_R_S___H_",
      clue: "Jarasandha - The King of Magadha and the father-in-law of Kamsa. When Kamsa is slain by Krishna, he decides to take revenge and comes to Mathura with an army of 23 Akshauhinis.",
      answer: "JARASANDHA",
      size: "wide"
    },

    {
      id: 2,
      pattern: "K_L_Y____A",
      clue: "A warrior who was an ally of the Magadha King, and joins in attacking Krishna's Kingdom (Mathura). Due to a boon from Shiva, he is invincible and cannot be defeated by any King.",
      answer: "KALAYAVANA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "D____K_",
      clue: "The city into which Krishna and Balarama transfer the population of Mathura into, in order to protect them from the attack.",
      answer: "DWARAKA"
    },

    {
      id: 4,
      pattern: "___SH__",
      clue: "The character who enters the cave where a King is sleeping. The warrior follows him inside. Mistaking the sleeping King to be him, the warrior rudely kicks that king.",
      answer: "KRISHNA"
    },

    {
      id: 5,
      pattern: "M____K___A",
      clue: "Name this King, who was the descendant of Ikshavaku, and had a boon of continuous and uninterrupted sleep, after he had kept a long guard for the Devas against the Asura's. He looks up at the man who had so rudely awoken him, reducing him to ashes.",
      answer: "MUCHUKUNDA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },   // Jarasandha
      2: { x: 2, y: 0 },   // Kalayavana

      3: { x: 1, y: 1 },   // Dwaraka

      4: { x: 1, y: 2 },   // Krishna

      5: { x: 2, y: 3 }    // Muchukunda
    },

    connections: [
      // Jarasandha attacks Mathura
      { from: 2, to: 1, sideOrigin: "left", sideTarget: "right", straight: true, noArrow:true, label: ["allies"] },


      // Krishna leads Kalayavana to the cave
      { from: 4, to: 2, sideOrigin: "right", sideTarget: "bottom", straight: true, label: ["lures him to the cave"] },

      // Kalayavana → Muchukunda
      { from: 2, to: 5, label: ["kicks the sleeping king"] }
    ]
  }
},
{
  id: 28,
  slug: "when-rama-walked-into-the-hermitage",
  title: "When Rama Walked into the Hermitage",
  description: "While travelling to Mithila, Vishwamitra brings the princes of Ayodhya to a deserted hermitage. The story behind its silence reveals a curse, deception, and redemption.",
  accent: "#90dbf4",
  congratsMessage: "You uncovered the story of Gautama's curse and Ahalya’s redemption. Try your luck with the next puzzle!",
  nextSlug: "the-digestion-of-a-demon",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "G____M_",
      clue: "Vishwamitra, while taking the two princes of Ayodhya with him to Mithila, stops at a deserted Ashrama of a Rishi. Name this Rishi.",
      answer: "GAUTAMA"
    },

    {
      id: 2,
      pattern: "A___Y_",
      clue: "The wife of this Rishi, who had been cursed - and the curse would only be released upon touching the feet of Rama.",
      answer: "AHALYA"
    },

    {
      id: 3,
      pattern: "I____",
      clue: "The King of Gods, who had tried to tempt the wife of the Rishi with an unholy desire.",
      answer: "INDRA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },   // Gautama

      2: { x: 2, y: 0 },   // Ahalya

      3: { x: 1, y: 1 }    // Indra
    },

    connections: [
      // Indra → Ahalya
      { from: 3, to: 2, sideOrigin: "right", sideTarget: "bottom", straight: true,label: ["tempts her"] },
      // Gautama curses Ahalya
      { from: 1, to: 2, sideOrigin: "right", sideTarget: "left", straight: true, label: ["curses her"] }
    ]
  }
},

{
  id: 29,
  slug: "the-digestion-of-a-demon",
  title: "The Digestion of a Demon",
  description: "Two Rakshasa brothers devise a cruel trick to kill sages and travellers. But one day, a powerful Rishi visits them, and the scheme meets its end.",
  accent: "#f28482",
  congratsMessage: "The wicked scheme of the Rakshasa brothers meets its end. Well solved. On to the next puzzle.",
  nextSlug: "the-last-seven-days",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "I_V___",
      clue: "A Rakshasa with a boon from Brahma - that no matter how many pieces his body was cut into, they would always be able to join back.",
      answer: "ILVALA"
    },

    {
      id: 2,
      pattern: "__T_P_",
      clue: "The brother of the Rakshasa on the left. He would offer food (containing the Rakshasa cut up into small pieces)to unsuspecting travellers and sages. Once the Rishi finished his meal, he would call out to his brother, who would tear open the Rishi's body from inside and come out in his true form.",
      answer: "VATAPI"
    },

    {
      id: 3,
      pattern: "_G___Y_",
      clue: "The Rishi who visits him one day. When he eats the food, he digests the Rakshasa, and this time, he is killed and cannot come out. The Rakshasa's brother is also reduced into a heap of ashes by him. He is also visited by Rama, Lakshmana and Sita near the Dandaka forest, and advises them to spend the rest of their exile in Panchavati.",
      answer: "AGASTYA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },   // Ilvala
      2: { x: 2, y: 0 },   // Vatapi
      3: { x: 1, y: 1 }    // Agastya
    },

    connections: [
      // Brothers
      { from: 1, to: 2, straight: true, noArrow: true, label: ["brothers"] },

      // Agastya defeats them
      { from: 3, to: 2, sideOrigin: "right", sideTarget: "bottom", straight: true, label: ["digests him"] },
      { from: 3, to: 1, sideOrigin: "left", sideTarget: "bottom", straight: true, label: ["reduces him to ashes"] }
    ]
  }
},
{
  id: 30,
  slug: "the-last-seven-days",
  title: "The Last Seven Days",
  description: "A moment of disrespect toward a silent sage sets in motion a curse that will end a king’s life in seven days — and give rise to the narration of the Bhagavatam.",
  accent: "#a0c4ff",
  congratsMessage: "From a moment of anger to a timeless narration — you followed the complete story of Parikshit’s curse. On to the next one.",
  nextSlug: "the-young-princes-first-battle",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__R__S___",
      clue: "A King who had gone deep into a jungle to hunt. After a while, he feels thirsty and wanders in search of water. He reaches the ashrama of a sage called Samika, and asks him for water. But the sage had gone into a deep state of Samadhi and does not reply. The King places a dead snake from nearby around the Rishi's neck - name this King.",
      answer: "PARIKSHIT",
      size: "wide"
    },

    {
      id: 2,
      pattern: "__I_G_",
      clue: "The son of this Rishi. When he returns and sees what had happened, becomes furious and curses the King that - seven days from now, a powerful serpent would bite him.",
      answer: "SRINGI"
    },

    {
      id: 3,
      pattern: "__K___K_",
      clue: "Name the serpent that bites the King.",
      answer: "TAKSHAKA"
    },

    {
      id: 4,
      pattern: "S__A",
      clue: "The Rishi who narrates the entire Bhagavatam to this emperor in his last 7 days.",
      answer: "SUKA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // Parikshit

      2: { x: 0, y: 1 },   // Sringi
      3: { x: 2, y: 1 },   // Takshaka

      4: { x: 1, y: 2 }    // Suka
    },

    connections: [
      // Sringi curses Parikshit
      { from: 2, to: 1, sideOrigin: "top", sideTarget: "left", straight: true, label: ["curses him"] },

      // Takshaka kills Parikshit
      { from: 3, to: 1, sideOrigin: "top", sideTarget: "right", straight: true, label: ["bites him"] },

      // Suka narrates Bhagavatam
      { from: 4, to: 1, sideOrigin: "top", sideTarget: "bottom", straight: true, label: ["narrates Bhagavatam", "to him"] }
    ]
  }
}, 

{
  id: 31,
  slug: "the-young-princes-first-battle",
  title: "The Young Princes’ First Battle",
  description: "A sage seeks help from the king of Ayodhya to protect his sacred Yagna. What follows is the first great test of the young princes.",
  accent: "#ffd6a5",
  congratsMessage: "From Ayodhya to Mithila — you followed the young princes’ first great mission. Try your luck with the next puzzle!",
  nextSlug: "three-steps-that-measured-the-worlds",
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "_A__A__T__",
      clue: "King of Ayodhya. One day, he is approached by a sage and asked to send his son to help protect a Yagna that he is performing. The King is reluctant to do so and offers to himself come and fight the Rakshasas.",
      answer: "DASHARATHA",
      size:"wide"
    },

    {
      id: 2,
      pattern: "__SH__M_T__",
      clue: "The Sage whose Yagna kept getting disturbed by Rakshasa's which is why he had come to the King's court to ask for his son to come and fight the Rakshasas to protect the Yagna.",
      answer: "VISHWAMITRA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "__S_S___",
      clue: "The Guru of the princes of Ayodhya. He also advises the King to do as the sage asks, and to send his son, saying that there is no one equal to him in spiritual or martial powers.",
      answer: "VASISTHA"
    },

    {
      id: 4,
      pattern: "__M_",
      clue: "The eldest prince, who is sent to the Ashrama of this sage.",
      answer: "RAMA"
    },

    {
      id: 5,
      pattern: "_A___M__A",
      clue: "The younger brother of the prince, who also accompanies him.",
      answer: "LAKSHMANA"
    },

    {
      id: 6,
      pattern: "T_T___",
      clue: "A demoness encountered by the two brothers and the Rishi when they come near the Dandaka forest. The sage advises the prince to slay her as she is evil, and to not hesitate because she is a woman. The prince does as he is told, and kills the demoness with his arrows.",
      answer: "TATAKA"
    },

    {
      id: 7,
      pattern: "M____H_",
      clue: "The son of the above demoness who is one of the Rakshasas trying to ruin the Yagna. The prince uses his Maanavastra on him, which ties him in a bundle and hurls him far away. (But he does not get killed, he shows up in the story once again as a golden deer)",
      answer: "MARICHA"
    },

    {
      id: 8,
      pattern: "S_B___",
      clue: "The other Rakshasa who was trying to impede the Yagna. The prince uses Agneyastra on him and him and kills him.",
      answer: "SUBAHU"
    },

    {
      id: 9,
      pattern: "M_____A",
      clue: "The Kingdom the which the sage takes them to, after the Yagna is finished.",
      answer: "MITHILA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },   // Dasharatha
      2: { x: 2, y: 0 },   // Vishwamitra
      3: { x: 0, y: 1 },   // Vasistha

      4: { x: 1, y: 2 },   // Rama
      5: { x: 2, y: 2 },   // Lakshmana

      6: { x: 0, y: 3 },   // Tataka

      7: { x: 1, y: 4 },   // Maricha
      8: { x: 2, y: 4 },   // Subahu

      9: { x: 1, y: 5 }    // Mithila
    },

    connections: [
      { from: 2, to: 1, sideOrigin: "left", sideTarget: "right", straight: true,label: ["asks for his son"] },
      { from: 3, to: 1, sideOrigin: "top", sideTarget: "bottom", straight: true, label: ["advises him"] },

      { from: 2, to: 4 },
      { from: 2, to: 5 },

      { from: 4, to: 6, label: ["kills her"] },

      { from: 4, to: 7, label: ["defeats him"] },
      { from: 4, to: 8, label: ["kills him"] }
    ]
  }
},

{
  id: 32,
  slug: "three-steps-that-measured-the-worlds",
  title: "Three Steps That Measured the Worlds",
  description: "A powerful Asura king performs a grand sacrifice, but a small Brahmin boy arrives with a humble request that will change the fate of the three worlds.",
  accent: "#cdb4db",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-letter-to-krishna",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__L_",
      clue: "The King of Rakshasas and the grandson of Prahlada, who defeats Indra. He performs the Ashwamedha Yagna.",
      answer: "BALI"
    },

    {
      id: 2,
      pattern: "_D__I",
      clue: "The mother of Indra. Her husband Kasyapa advises her to meditate upon Lord Vishnu. After this, he appears to her and tells her that he will be born as her son.",
      answer: "ADITI"
    },

    {
      id: 3,
      pattern: "V_M___",
      clue: "Lord Vishnu is born to the person above as a dwarf. He goes to the Ashwamedha Yagna being performed by the King, and asks him to provide three paces of ground covered by his own feet.",
      answer: "VAMANA"
    },

    {
      id: 4,
      pattern: "S__K___H___A",
      clue: "The guru of Rakshasas, who realises that there is something afoot, and warns the King to retract the promise.",
      answer: "SHUKRACHARYA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      2: { x: 0, y: 0 },   // Aditi
      1: { x: 2, y: 0 },   // Bali

      3: { x: 0, y: 1 },   // Vamana

      4: { x: 2, y: 1 }    // Shukracharya
    },

    connections: [
      // Aditi → Vamana
      { from: 2, to: 3, label: ["son"] },

      // Vamana → Bali
      { from: 3, to: 1, sideOrigin: "right", sideTarget: "left", straight: true, label: ["asks for three paces"] },

      // Shukracharya warns Bali
      { from: 4, to: 1, sideOrigin: "top", sideTarget: "bottom", straight: true,label: ["warns him"] }
    ]
  }
},
{
  id: 33,
  slug: "the-letter-to-krishna",
  title: "The Letter to Krishna",
  description: "A princess of Vidarbha sends a desperate message to the one she truly wishes to marry, setting the stage for one of the most famous abductions.",
  accent: "#ffcad4",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-accusation",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "B____M__A",
      clue: "The King of Vidharba, who had five sons and a daughter (who is the incarnation of Goddess Lakshmi)",
      answer: "BHISHMAKA",
      size:"wide"
    },

    {
      id: 2,
      pattern: "R_K_I",
      clue: "The eldest son of the king, who hated the son of Vasudeva, and resolved to give his sister in marriage to the prince of Chedi.",
      answer: "RUKMI"
    },

    {
      id: 3,
      pattern: "S__SH_P___",
      clue: "Name the prince of Chedi. His mother was granted a boon by Krishna that he would be forgiven for any offenses committed for a hundred times.",
      answer: "SHISHUPALA",
      size: "wide"
    },

    {
      id: 4,
      pattern: "R_K___I",
      clue: "The princess of Vidharba - she sends a message to Krishna.",
      answer: "RUKMINI"
    },

    {
      id: 5,
      pattern: "S_N___A",
      clue: "The person who carries the message to Krishna.",
      answer: "SUNANDA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // Bhishmaka

      2: { x: 0, y: 1 },   // Rukmi
      3: { x: 0, y: 2 },   // Shishupala

      4: { x: 2, y: 1 },   // Rukmini

      5: { x: 2, y: 2 }    // Sunanda
    },

    connections: [
      // Bhishmaka → children
      { from: 1, to: 2, sideOrigin: "bottom", sideTarget: "top", straight: true, label:["son"]},
      { from: 1, to: 4, sideOrigin: "bottom", sideTarget: "top", straight: true, label:["daughter"] },

      // Rukmi → Shishupala marriage plan
      { from: 2, to: 3, label: ["plans to marry","his sister", "to him"] },

      // Rukmini → messenger
      { from: 4, to: 5, label: ["sends letter","through"] }
    ]
  }
}, 
{
  id: 34,
  slug: "the-accusation",
  title: "The Accusation",
  description: "A divine jewel gifted by Surya leads to suspicion, a deadly hunt, and a legendary duel before finally returning to its rightful place.",
  accent: "#f9c74f",
  congratsMessage: "You've traced the entire story of the Syamantaka jewel. On to the next puzzle!",
  nextSlug: "the-vow-and-the-exile",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "S_T____T",
      clue: "A subject of Dwaraka, who was a great devotee of the Surya.",
      answer: "SATRAJIT"
    },

    {
      id: 2,
      pattern: "S____NT_K_",
      clue: "Pleased by this devotion, Surya appears and presents him with a gem which produces a lot of gold everyday. Name this gem.",
      answer: "SYAMANTAKA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "P_A__N_",
      clue: "The brother of Satrajit, who wore the jewel and went hunting. He was attacked by a lion who took away the jewel.",
      answer: "PRASENA"
    },

    {
      id: 4,
      pattern: "J_M__V__",
      clue: "The Bear-chief, who kills the lion and takes the jewel for his son to play with. (Hint - he is a character in Ramayana too.) When Krishna comes for the jewel, they fight for 28 days, after which he recognizes who he is fighting with and asks for forgiveness.",
      answer: "JAMBAVAN"
    },

    {
      id: 5,
      pattern: "J____V_T_",
      clue: "The daughter of this person, who was given in marriage to Krishna after he brings back the gem.",
      answer: "JAMBAVATI"
    },
    {
      id: 6,
      pattern: "__I__N_",
      clue: "He is accused of stealing the jewel, so he goes in search for it.",
      answer: "KRISHNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // Satrajit

      2: { x: 1, y: 1 },   // Syamantaka jewel

      3: { x: 0, y: 2 },   // Prasena
      4: { x: 2, y: 2 },   // Jambavan

      5: { x: 2, y: 3 },    // Jambavati
      6: { x: 0, y: 3 }    //Krishna
    },

    connections: [
      // Surya gives jewel to Satrajit
      { from: 1, to: 2, label: ["receives the jewel"] },

      // Prasena wears jewel
      { from: 2, to: 3, label: ["worn by him"] },

      // Jambavan gets the jewel
      { from: 3, to: 4, label: ["lion takes it", "then he kills the lion"] },

      // Jambavan → Jambavati
      { from: 4, to: 5, label: ["daughter"] },

      // Krishna → Jambavan
       { from: 6, to: 4, sideOrigin: "right", sideTarget: "left", straight: true, label: ["fights"] },

      // Krishna → Jambavati
       { from: 6, to: 5, sideOrigin: "right", sideTarget: "left", straight: true, label: ["marries"] }
      
    ]
  }
}, 

{
  id: 35,
  slug: "the-vow-and-the-exile",
  title: "The Vow and the Exile",
  description: "A vow meant to preserve harmony leads to exile, and the exile leads to an unexpected encounter beneath the waters of a river.",
  accent: "#6ec6ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-boar-who-lifted-the-earth",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "Y_____H____",
      clue: "The Pandava who was with Draupadi, when a Brahmin, whose cows were stolen, comes for help.",
      answer: "YUDHISHTIRA",
      size: "wide"
    },

    {
      id: 2,
      pattern: "__J___",
      clue: "The prince who assures to bring back the cows, but is in a quandary because his brother and Draupadi were in the chamber where the weapons were kept. After rescuing the cows, he volunteers to go into exile, as he had broken the rule.",
      answer: "ARJUNA"
    },

    {
      id: 3,
      pattern: "__U__",
      clue: "The Naga king's daughter, that the Pandava prince meets during his exile and marries.",
      answer: "ULUPI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },
      2: { x: 2, y: 0 },
      3: { x: 1, y: 1 }
    },

    connections: [
      { from: 2, to: 3, sideOrigin: "bottom", sideTarget: "right", straight: true, label:["marries"] }
    ]
  }
}, 

{
  id: 36,
  slug: "the-boar-who-lifted-the-earth",
  title: "The Boar Who Lifted the Earth",
  description: "When the earth sinks into the cosmic ocean, a surprising form emerges to restore balance.",
  accent: "#90be6d",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-abduction-from-dwaraka",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "B____A",
      clue: "The creator of the universe",
      answer: "BRAHMA"
    },
    {
      id: 2,
      pattern: "S__________ M___",
      clue: "The first man created by him. He and his wife are instructed to go forth and multiply. However, he doesn't know where he can keep them as the earth was buried deep in the oceans.",
      answer: "SWAYAMBHUVA MANU",
      size: "large"
    },
    {
      id: 3,
      pattern: "S_T_R__A",
      clue: "The first woman created by him",
      answer: "SATARUPA"
    },
    {
      id: 4,
      pattern: "V_____ A_____A",
      clue: "A boar springs out of the creators right nostril, and begans to grow in size. Name this Avatara of Lord Vishnu, which dives deep into the oceans and brings out the earth.",
      answer: "VARAHA AVATARA",
      size: "wide"
    },
    {
      id: 5,
      pattern: "H_R_N__K___",
      clue: "The Rakshasa that attacks Lord Vishnu while he is bringing Bhu Devi out of the water.",
      answer: "HIRANYAKSHA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Brahma

      2: { x: 1, y: 1 }, //Swayambhuva Manu
      3: { x: 2, y: 1 }, //Satarupa

      4: { x: 1, y: 2 }, //Varaha Avatara

      5: { x: 1, y: 3 } //Hiranyaksha
    },

    connections: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 4, to: 5, label: ["fights him"] }
    ]
  }
}, 
{
  id: 37,
  slug: "the-abduction-from-dwaraka",
  title: "The Abduction from Dwaraka",
  description: "A planned marriage, a determined prince, and a daring abduction reshape alliances.",
  accent: "#f4a261",
  congratsMessage: "Strategy, friendship, and a daring ride away from Dwaraka — well solved. On to the next puzzle!",
  nextSlug: "the-bet-and-the-births",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "___A__M_",
      clue: "The son of Rohini - who plans to marry his sister to Duryodhana.",
      answer: "BALARAMA"
    },
    {
      id: 2,
      pattern: "___U__",
      clue: "A prince who is enchanted by the princess and wishes to marry her.",
      answer: "ARJUNA"
    },
    {
      id: 3,
      pattern: "___SH__",
      clue: "The younger brother, who advises the prince (his friend), to abduct her.",
      answer: "KRISHNA"
    },
    {
      id: 4,
      pattern: "__B__D__",
      clue: "The princess who was abducted from Dwaraka by the Pandava.",
      answer: "SUBHADRA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Balarama
      2: { x: 2, y: 1 }, //Arjuna
      3: { x: 2, y: 0 }, //Krishna
      4: { x: 1, y: 1 } //Subhadra
    },

    connections: [
      { from: 1, to: 4, sideOrigin: "right", sideTarget: "top", straight: true, noArrow:true, label:["siblings"] },
      { from: 1, to: 3, sideOrigin: "right", sideTarget: "left", straight: true, noArrow:true, label:["siblings"] },
      { from: 3, to: 4, sideOrigin: "left", sideTarget: "top", straight: true, noArrow:true, label:["siblings"]},
      { from: 3, to: 2, label: ["advises him"] },
      { from: 2, to: 4, sideOrigin: "left", sideTarget: "right", straight: true, label: ["abducts her"] }
    ]
  }
},
{
  id: 38,
  slug: "the-bet-and-the-births",
  title: "The Bet and the Births",
  description: "Two sisters, a wager over a horse’s tail, and the birth of beings who would shape the heavens.",
  accent: "#ffafcc",
  congratsMessage: "Well done! Onward to the next puzzle!.",
  nextSlug: "the-invitation-to-the-dice-game",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__SH__P_",
      clue: "A sage, who is the son of Marichi (who is the son of Brahma). He is married to the many daughters of Daksha.",
      answer: "KASHYAPA"
    },
    {
      id: 2,
      pattern: "__D__",
      clue: "One of the daughters of Daksha, married to this sage. She asks her husband for a boon that she wants a thousand powerful sons (Nagas) to be born to her.",
      answer: "KADRU"
    },
    {
      id: 3,
      pattern: "__N___",
      clue: "One of the daughters of Daksha, married to this sage. She asks for a boon to have two sons who would surpass those thousand, in strength and brilliance.",
      answer: "VINATA"
    },
    {
      id: 4,
      pattern: "__U__",
      clue: "One of the two sons. When he is inside the egg, his mother becomes impatient and she tries to open it. The son was only half-formed, enraged at his mother's impatience - he curses her to slavery for years, promising that her other son would free her. He later becomes the charioteer of Surya.",
      answer: "ARUNA"
    },
    {
      id: 5,
      pattern: "___U__",
      clue: "The mighty eagle who is born from the other egg. He vows to free his mother from slavery, and does so by bringing Amrita.",
      answer: "GARUDA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Kashyapa
      2: { x: 0, y: 1 }, //Kadru
      3: { x: 2, y: 1 }, //Vinata
      4: { x: 0, y: 2 }, //Aruna
      5: { x: 2, y: 2 } //Garuda
    },

    connections: [
      { from: 1, to: 2, label:["wife"] },
      { from: 1, to: 3, label:["wife"] },

      { 
        from: 3, 
        to: 2, 
        sideOrigin: "left", sideTarget: "right", 
        straight: true,
        label: [
          "becomes her slave when she loses a bet",
          "where she has to identify the color",
          "of the tail of a horse"
        ]
      },

      { from: 3, to: 4, straight:true, sideOrigin: "bottom", sideTarget: "right", straight: true, label:["son"] },
      { from: 3, to: 5, straight:true, label:["son"] }
    ]
  }
},
{
  id: 39,
  slug: "the-invitation-to-the-dice-game",
  title: "The Invitation to the Dice Game",
  description: "An invitation to Hastinapura sets the stage for a game that will alter the fate of a dynasty.",
  accent: "#e76f51",
  congratsMessage: "From invitation to manipulation — the dice has begun to roll. Well solved and onto the next puzzle!",
  nextSlug: "from-king-to-deer-to-sage",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D_____R___T__",
      clue: "A King who invites his nephew to Hastinapura, to play a game of dice.",
      answer: "DHRITARASHTRA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "__D___",
      clue: "The uncle of the Pandavas, who warns them against accepting the game.",
      answer: "VIDURA"
    },
    {
      id: 3,
      pattern: "Y_____H____",
      clue: "The prince who is made to play the game and manipulated.",
      answer: "YUDHISHTIRA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "___K___",
      clue: "The evil brother of Gandhari, who is skilled at tricks in the game of dice.",
      answer: "SHAKUNI"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },

      2: { x: 0, y: 1 },
      4: { x: 2, y: 1 },

      3: { x: 1, y: 2 }
    },

    connections: [
      { from: 1, to: 3, label: ["invites him"] },

      { from: 2, to: 3, label: ["warns him"] },

      { from: 4, to: 3, label: ["manipulates him"] }
    ]
  }
},

{
  id: 40,
  slug: "from-king-to-deer-to-sage",
  title: "From King to Deer to Sage",
  description: "A lineage of kings reveals how attachment can shape rebirth and how wisdom can appear in unexpected forms.",
  accent: "#b8c0ff",
  congratsMessage: "You followed the strange journey from king to deer to enlightened sage. Well solved - try your luck with the next puzzle.",
  nextSlug: "the-bridge-across-the-ocean",
  rowHeight: 350,

  nodes: [
    {
      id: 1,
      pattern: "R____B_A",
      clue: "A descendent of Priyavrata (who is the son of Manu). He is an Avatara of Lord Vishnu.",
      answer: "RISHABHA"
    },
    {
      id: 2,
      pattern: "J_____I",
      clue: "The person he marries (she is the daughter of Indra)",
      answer: "JAYANTI"
    },
    {
      id: 3,
      pattern: "B_____A",
      clue: "Their son, who is crowned as the King. After this King becomes old, he retires to the forest. In the forest, he rescues a baby deer. But unfortunately, this act results in his spiritual downfall - as he grew more and more attached to it and began neglecting his spiritual practices. Even in his final moments, his thoughts were not on god, but on the deer, and as a result - he is born as a deer in his next life. Name this King.",
      answer: "BHARATA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "R_____NA",
      clue: "The King above, in his next life (after the deer one), is born as the youngest son of a wealthy Brahmin. When he is made to carry the palanquin of a King, his step is very unsteady (as he trying carefully not to tread on any creatures like ants) The King gets angry at how slowly the palanquin is moving and yells at him, but later realises how great he is, and becomes his disciple. Name this King.",
      answer: "RAHUGANA",
      size:"large"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Rishabha
      2: { x: 2, y: 0 }, //Jayanti
      3: { x: 1, y: 1 }, //Bharata
      4: { x: 1, y: 2 } //Rahugana
    },

    connections: [
      { from: 1, to: 3 },
      { from: 2, to: 3 },

      { from: 3, to: 4, label: ["later teaches him"] }
    ]
  }
}, 
{
  id: 41,
  slug: "the-bridge-across-the-ocean",
  title: "The Bridge Across the Ocean",
  description: "Advice rejected, anger directed at the ocean, and the plan that leads to the building of the bridge to Lanka.",
  accent: "#48cae4",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-vessel-that-never-emptied",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "V_____S___A",
      clue: "The younger brother of Ravana, who repeatedly advises him to give up his evil ways and to return Sita, but his advise is rejected, so he comes to Rama.",
      answer: "VIBHEESHANA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "V_R___",
      clue: "Rama loses his temper and shoots his arrows at a particular god when he doesn't help them create a way to Lanka. Who is this god?",
      answer: "VARUNA"
    },
    {
      id: 3,
      pattern: "N___",
      clue: "The mighty Vanara who is told to assist with building the bridge.",
      answer: "NALA"
    },
    {
      id: 4,
      pattern: "V_SH____R__",
      clue: "The above Vanara is the son of...? (Hint - The Architect of Gods)",
      answer: "VISHWAKARMA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Vibheeshana
      2: { x: 2, y: 0 }, //Varuna
      3: { x: 1, y: 1 }, //Nala
      4: { x: 1, y: 2 } //Vishwakarma
    },

    connections: [
      { from: 2, to: 3, label: ["suggests building","the bridge","with his help"] },

    ]
  }
},
{
  id: 42,
  slug: "the-vessel-that-never-emptied",
  title: "The Vessel That Never Emptied",
  description: "A divine vessel feeds countless guests, but one unexpected visit tests the Pandavas’ fortune.",
  accent: "#ffd166",
  congratsMessage: "You've successfully identified the events related to the Akshaya Patra. On to the next puzzle!",
  nextSlug: "the-elephants-last-desperate-prayer",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D___M__",
      clue: "The priest who teaches the Pandavas a mantra to invoke a god. This results in being able to feed any number of people for a meal. The vessel would never exhaust until Draupadi had her meal.",
      answer: "DHAUMYA"
    },
    {
      id: 2,
      pattern: "__R__",
      clue: "Who is the god that they had invoked?",
      answer: "SURYA"
    },
    {
      id: 3,
      pattern: "__R___A",
      clue: "The short tempered Rishi who visits the Pandavas one day, after Draupadi had finished eating. The Pandavas are struck in confusion as to how to feed their guest.",
      answer: "DURVASA"
    },
    {
      id: 4,
      pattern: "__I__N_",
      clue: "The person who helps them out of this scrape, by eating the remaining grains in the vessel, and satisfying the hunger of the whole world with it.",
      answer: "KRISHNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Dhaumya
      2: { x: 2, y: 0 }, //Surya
      3: { x: 0, y: 1 }, //Durvasa
      4: { x: 2, y: 1 } //Krishna
    },

    connections: [
      { from: 1, to: 2, sideOrigin: "right", sideTarget: "left", straight: true, label: ["invokes him"] },
    ]
  }
},
{
  id: 43,
  slug: "the-elephants-last-desperate-prayer",
  title: "The Elephant’s Last Desperate Prayer",
  description: "Two curses across realms meet in a desperate struggle in a lake, ending in a heartfelt prayer to the Lord.",
  accent: "#80ed99",
  congratsMessage: "Well done on identifying all the events related to the Gajendra Moksha - onto the next puzzle!",
  nextSlug: "before-the-war-in-lanka",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "I____D_U_N_",
      clue: "A Pandya King, who is a great devotee of Sri Hari. He had taken a vow of silence, and sat in the mountains in deep meditation. One day, Rishi Agastya came along with his disciples to his ashrama, but the King was lost in his meditation, and Agastya curses him that he will be born as an elephant.",
      answer: "INDRADYUMNA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "H_H_",
      clue: "A Gandharva, who was bathing in a tank - and later when Rishi Devala also goes there to bathe, he plays tricks on the Rishi. Devala curses him, saying that he will be born as a crocodile. Name this Gandharva.",
      answer: "HUHU"
    },
    {
      id: 3,
      pattern: "G_J_N___",
      clue: "The reincarnation of the Pandya king as an elephant. One day, he goes to bath in a lake to refresh himself. Suddenly, a powerful crocodile attacks his feet, and starts dragging him into the water. He struggles and fights with the crocodile for a long long time, and then finally, when his last moment draws near, he turns his thoughts to the Lord and prays to him for help. Name this elephant.",
      answer: "GAJENDRA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "__R_",
      clue: "Name the God to which the above elephant had called out.",
      answer: "HARI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Indradyumna
      2: { x: 2, y: 0 }, //Huhu
      3: { x: 1, y: 1 }, //Gajendra
      4: { x: 1, y: 2 } //Hari
    },

    connections: [
      { from: 1, to: 3, label: ["reborn as"] },
      {from: 2, to: 3, sideOrigin: "bottom", sideTarget: "right", straight: true, label: ["in his next life,", "he attacks him"]},
      { from: 3, to: 4, label: ["prays to him"] }
    ]
  }
},
{
  id: 44,
  slug: "before-the-war-in-lanka",
  title: "Before the war in Lanka",
  description: "Warnings, deception, and quiet reassurance unfold in Lanka before the great battle begins.",
  accent: "#ff758f",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-hunter-in-the-forest",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "M_L_A___",
      clue: "The grandfather of Ravana, who advises him right before the battle, to make peace with his enemy, and return Sita.",
      answer: "MALYAVAN"
    },
    {
      id: 2,
      pattern: "_N__D_",
      clue: "The Vanara, who goes to the King of Lanka, with a final message from Rama to return Sita to him and escape with his life.",
      answer: "ANGADA"
    },
    {
      id: 3,
      pattern: "V_DY_T J_H_A",
      clue: "A skilled sorcerer that Ravana uses, to build a life like head of Rama, in an attempt to convince Sita that he has been defeated.",
      answer: "VIDYUT JIHVA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "_A_A_A",
      clue: "A Rakshasi (who is good) consoles Sita by saying that this was all Ravana's plan to deceive her.",
      answer: "SAMARA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Malyavan
      2: { x: 2, y: 0 }, //Angada
      3: { x: 0, y: 1 }, //Vidyut Jihva
      4: { x: 2, y: 1 } //Samara
    },

    connections: []
  }
}, 
{
  id: 45,
  slug: "the-hunter-in-the-forest",
  title: "The Hunter in the Forest",
  description: "During deep meditation in the forest, a Pandava faces a charging boar and an unexpected challenger who reveals a divine test.",
  accent: "#adb5bd",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-rakshasa-in-the-forest",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__J_N_",
      clue: "The Pandava who was deep in meditation, and gets attacked by a great boar that charges at him ferociously.",
      answer: "ARJUNA"
    },
    {
      id: 2,
      pattern: "__K_",
      clue: "The Boar was actually an asura in disguise - what is the name of the asura?",
      answer: "MUKA"
    },
    {
      id: 3,
      pattern: "__I__",
      clue: "At the same time when the Pandava shoots his arrow at the boar, so does a hunter. This hunter is actually a god in disguise, and the Pandava challenges him. After finally realising who he is, bows down to him, and this god gifts him deadly weapons, making him invincible. Who is he?",
      answer: "SHIVA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Arjuna
      2: { x: 2, y: 0 }, //Muka
      3: { x: 1, y: 1 } //Shiva
    },

    connections: [
      { from: 2, to: 1, sideOrigin: "left", sideTarget: "right", straight: true, label: ["attacks him"] },
      { from: 3, to: 2, sideOrigin: "right", sideTarget: "bottom", straight: true, label: ["shoots his arrow","at the boar","at the same time","as the Pandava"] },
      { from: 3, to: 1, sideOrigin: "left", sideTarget: "bottom", straight: true, label: ["tests him"] }
    ]
  }
},
{
  id: 46,
  slug: "the-rakshasa-in-the-forest",
  title: "The Rakshasa in the Forest",
  description: "As the Pandavas begin their exile, a Rakshasa emerges from the darkness of the forest seeking revenge.",
  accent: "#ae7fef",
  congratsMessage: "The Rakshasa’s revenge ends in the forest. Well solved.",
  nextSlug: "the-serpent-darts",
  rowHeight: 220,

  nodes: [
    {
      id: 1,
      pattern: "K_R___A",
      clue: "He is the brother of a Rakshasa named Vakasura, and tries to attack the Pandavas when they begin their 13 year exile.",
      answer: "KIRMIRA"
    },
    {
      id: 2,
      pattern: "____A",
      clue: "The Pandava who kills this Rakshasa. (Hint - he is the same Pandava who killed his brother in Ekachakra)",
      answer: "BHIMA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },
      2: { x: 2, y: 0 }
    },

    connections: [
      { from: 2, to: 1, sideOrigin: "left", sideTarget: "right", straight: true, label: ["kills him"] }
    ]
  }
},
{
  id: 47,
  slug: "the-serpent-darts",
  title: "The Serpent Darts",
  description: "In the battle of Lanka, fury, illusion, and divine intervention shape the fate of the princes of Ayodhya.",
  accent: "#ff595e",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-teacher-of-sankhya",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "A___D_",
      clue: "The Vanara who kills the charioteer, horses, and smashes the charioteer of the son of the King of Lanka.",
      answer: "ANGADA"
    },
    {
      id: 2,
      pattern: "__D__J__",
      clue: "Losing his temper at this, the prince of Lanka starts shooting poisonous darts on the two princes of Ayodhya. Name this prince.",
      answer: "INDRAJIT"
    },
    {
      id: 3,
      pattern: "___J___",
      clue: "When the two princes lose their consciousness, Sita is taken on the Pushpaka Vimana to see them. A Rakshasi tells her in assurance that they are not really dead - who is she?",
      answer: "TRIJATA"
    },
    {
      id: 4,
      pattern: "___U__",
      clue: "The King of birds, who comes to the princes. With this arrival, the serpent darts fled as they stood no chance against their sworn enemy.",
      answer: "GARUDA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Angada
      2: { x: 2, y: 0 }, //Indrajit
      3: { x: 0, y: 1 }, //Trijata
      4: { x: 2, y: 1 } //Garuda
    },

    connections: [
      { from: 1, to: 2, label: ["attacks his chariot"] }
    ]
  }
},
{
  id: 48,
  slug: "the-teacher-of-sankhya",
  title: "The Teacher of Sankhya",
  description: "From the first man to a divine incarnation, a lineage unfolds that leads to one of the greatest teachers of philosophy.",
  accent: "#8ecae6",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-mother-of-devas-and-daityas",
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "S__________ M_N_",
      clue: "The first man created by Brahma.",
      answer: "SWAYAMBHUVA MANU",
      size: "large"
    },
    {
      id: 2,
      pattern: "D_VA__T_",
      clue: "One of the daughters of the above. She is married to a Rishi called Kardama. Is given a boon that they would have nine daughters, and that finally, Lord Vishnu would be born as their son.",
      answer: "DEVAHUTI",
      size: "wide"
    },
    {
      id: 3,
      pattern: "K___L_",
      clue: "Lord Vishnu's incarnation, born to the above couple. He becomes famous as a divine teacher and is the founder as the Sankhya philosophy. When he is born, Kardama departs the ashrama to do greater penance. This boy, also teaches his mother how to gain freedom from the cycle of birth and death. It is said that he went to the Himalayas, and still meditates there and prays for the world. Name this incarnation of Lord Vishnu.",
      answer: "KAPILA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Swayambhuva Manu
      2: { x: 1, y: 1 }, //Devahuti
      3: { x: 1, y: 2 } //Kapila
    },

    connections: [
      { from: 1, to: 2, label: ["daughter"] },
      { from: 2, to: 3, label: ["son"] }
    ]
  }
},
{
  id: 49,
  slug: "the-mother-of-devas-and-daityas",
  title: "The Mothers of Devas and Daityas",
  description: "From the daughters of Daksha come two lineages whose descendants shape the fate of the worlds.",
  accent: "#cdb4db",
  congratsMessage: "You identified the lineage from Kashyapa to the mighty Daityas. Well done and try your luck with the next puzzle!",
  nextSlug: "the-fall-of-ravanas-generals",
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "K___Y___",
      clue: "A sage, who is the son of Marichi (who is the son of Brahma). He is married to the many daughters of Daksha.",
      answer: "KASHYAPA"
    },
    {
      id: 2,
      pattern: "A_I__",
      clue: "One of the daughters of Daksha who is married to him. She becomes the mother of Devas - including Surya and Indra. Name her.",
      answer: "ADITI"
    },
    {
      id: 3,
      pattern: "D_T_",
      clue: "One of the daughters of Daksha who is married to him. Once, during Sandhya time, when her husband is about to sit down and meditate, she becomes consumed by desire and asks him to satisfy it. Subsequently, she gives birth to two sons who are both extremely wicked (to prevent this, she keeps them in her womb for a hundred years, knowing that they would be a trouble to the Devas and the Rishis). She is the mother of Daityas.",
      answer: "DITI",
      size: "wide"
    },
    {
      id: 4,
      pattern: "H___N______",
      clue: "Name the son of the above who tries to submerge the earth into the ocean.",
      answer: "HIRANYAKSHA",
      size: "wide"
    },
    {
      id: 5,
      pattern: "H___N____S___",
      clue: "Name the son of the above who seeks a boon from Brahma that he cannot die at the hands of a man or a god, neither during day nor night, neither indoors and outdoors, neither in the earth nor in the sky.",
      answer: "HIRANYAKASIPU",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Kashyapa
      2: { x: 0, y: 1 }, //Aditi
      3: { x: 2, y: 1 }, //Diti
      4: { x: 0, y: 2 }, //Hiranyaksha
      5: { x: 2, y: 2 } //Hiranyakasipu
    },

    connections: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 3, to: 4, sideOrigin: "bottom", sideTarget: "top", straight: true, label:["son"] },
      { from: 3, to: 5, sideOrigin: "bottom", sideTarget: "top", straight: true, label:["son"] }
    ]
  }
},

{
  id: 50,
  slug: "the-fall-of-ravanas-generals",
  title: "The Fall of Ravana's Generals",
  description: "One by one, Ravana sends his commanders into battle — and one by one they fall to the Vanara warriors.",
  accent: "#ff686b",
  congratsMessage: "You followed the fall of each of Ravana’s commanders. On to the next puzzle!",
  nextSlug: "the-sage-who-regained-his-youth",
  rowHeight: 260,

  nodes: [
    {
      id: 1,
      pattern: "__OO__R_K___",
      clue: "A fierce Rakshasa sent by Ravana to lead the army from the western gate.",
      answer: "DHOOMARAKSHA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "H___M__",
      clue: "The Vanara who slays him by uprooting a tree and crashing it on the head of the Rakshasa.",
      answer: "HANUMAN"
    },
    {
      id: 3,
      pattern: "V____D__S__R_",
      clue: "The next Rakshasa sent by Ravana to lead the army from the southern entrance, after the above Rakshasas death.",
      answer: "VAJRADUMSHTRA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "A___D_",
      clue: "The Vaanara who kills him.",
      answer: "ANGADA"
    },
    {
      id: 5,
      pattern: "_R_H___A",
      clue: "The commander-in-chief of Ravana. He tells Ravana that all this could have been avoided if they had returned Sita to Rama, nevertheless - he marches out of the southern gate to fight.",
      answer: "PRAHASTA"
    },
    {
      id: 6,
      pattern: "_EE__",
      clue: "The Vanara who kills him by smashing a boulder on his head.",
      answer: "NEELA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //DHOOMARAKSHA
      2: { x: 2, y: 0 }, //HANUMAN
      3: { x: 0, y: 1 }, //VAJRADUMSHTRA
      4: { x: 2, y: 1 }, //ANGADA
      5: { x: 0, y: 2 }, //PRAHASTA
      6: { x: 2, y: 2 } //NEELA
    },

    connections: [
      { from: 1, to: 2, straight: true, label: ["killed by"] },
      { from: 3, to: 4, straight: true, label: ["killed by"] },
      { from: 5, to: 6, straight: true, label: ["killed by"] }
    ]
  }
},
{
  id: 51,
  slug: "the-sage-who-regained-his-youth",
  title: "The Sage Who Regained His Youth",
  description: "A mistake in the forest leads to a marriage, divine intervention, and a confrontation with the king of the gods.",
  accent: "#f1c0e8",
  congratsMessage: "From Sukanya’s devotion to Chyavana’s restored youth — well solved. On to the next puzzle!",
  nextSlug: "the-many-names-of-the-archer",
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "C______A",
      clue: "A King called Sharyati, along with his daughter, and their attendants, once go into the forest for an outing, and then come across the ashrama of a Rishi. Name this Rishi.",
      answer: "CHYAVANA"
    },
    {
      id: 2,
      pattern: "S_K___A",
      clue: "The daughter of this King. She spots two glowing lights from an ant-hill, and childishly pokes them. After this, some bad omens happen, by which her father realises that some harm must have been done to the Rishi. He realises that his daughter had unknowingly harmed the Rishi, he asks him for forgiveness and also offers his daughter in marriage to the Rishi. After that, she serves the sage very sincerely. Name this princess.",
      answer: "SUKANYA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "A_____I K_____S",
      clue: "Two twin gods, the divine physicians, who visit this Ashrama. The Rishi asks them to give him back his youth and strength, and in return offers to give them soma juice at the sacrificial offerings.",
      answer: "ASHWINI KUMARAS",
      size: "wide"
    },
    {
      id: 4,
      pattern: "I____",
      clue: "When these offerings are made, a god gets very angry and picks up his Vajra to hurl it at the Rishi. However, his hands get paralysed. Name this god.",
      answer: "INDRA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Chyavana
      2: { x: 1, y: 1 }, //Sukanya
      3: { x: 0, y: 2 }, //Ashwini Kumaras
      4: { x: 2, y: 2 } //Indra
    },

    connections: [
      { from: 2, to: 1, sideOrigin: "top", sideTarget: "bottom", straight: true,label: ["marries him"] },
      { from: 3, to: 1, sideOrigin: "top", sideTarget: "left", straight: true, label: ["restores","his youth"] },
      { from: 4, to: 1, sideOrigin: "top", sideTarget: "right", straight: true, label: ["tries to", "strike him"] }
    ]
  }
}, 
{
  id: 52,
  slug: "the-many-names-of-the-archer",
  title: "The Many Names of the Archer",
  description: "A legendary warrior is known by many names — each earned through birth, virtue, skill, or deed.",
  accent: "#9bf6ff",
  congratsMessage: "You identified the many names of the great archer. Well done! Onward to the next puzzle!",
  nextSlug: "a-glimpse-of-creation",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "__J_N_",
      clue: "He got this name due to his rare splendour and virtuous deeds. This name means - white, pure and radiant.",
      answer: "ARJUNA"
    },
    {
      id: 2,
      pattern: "___L_U__",
      clue: "He got this name with reference to the star at which time he had been born. (Uttara Phalguni Nakshatra)",
      answer: "PHALGUNA"
    },
    {
      id: 3,
      pattern: "_I__N_",
      clue: "This name was given to him as he is the son of Indra and difficult to conquer.",
      answer: "JISHNU"
    },
    {
      id: 4,
      pattern: "__R_T_",
      clue: "While fighting the Danavas, Indra places a crown as radiant as the sun on his head, because of which he receives this name.",
      answer: "KIRITI"
    },
    {
      id: 5,
      pattern: "SH__T_V_____",
      clue: "The name he got because he his chariot was yoked by white horses on the battlefield.",
      answer: "SHWETAVAHANA",
      size: "wide"
    },
    {
      id: 6,
      pattern: "__B__T__",
      clue: "The name he received, because he had never indulged in any loathsome or cruel action, not even on the battlefield.",
      answer: "BIBHATSU"
    },
    {
      id: 7,
      pattern: "__J___",
      clue: "Having never returned from a battlefield without defeating the enemy, he received this name.",
      answer: "VIJAYA"
    },
    {
      id: 8,
      pattern: "__I__N_",
      clue: "The name given by his father out of love for this son with a resplendent dark complexion.",
      answer: "KRISHNA"
    },
    {
      id: 9,
      pattern: "__V__S_C__",
      clue: "The name given to him as he could shoot arrows from his Gandiva using both his right AND left hand with equal ease and dexterity.",
      answer: "SAVYASACHI"
    },
    {
      id: 10,
      pattern: "___N__J_Y_",
      clue: "Having won over various janapadas, he acquired a lot of treasure from them. The name he got for this, which signifies wealth.",
      answer: "DHANANJAYA"
    },
    {
      id: 11,
      pattern: "__R___",
      clue: "The name that he is known by, as he is the son of Pritha (Kunti).",
      answer: "PARTHA"
    },
    {
      id: 12,
      pattern: "___N_E__",
      clue: "The other name that he is known by, as he is the son of Kunti.",
      answer: "Kaunteya"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Arjuna
      2: { x: 1, y: 0 }, //Phalguna
      3: { x: 1, y: 1 }, //Jishnu
      4: { x: 2, y: 1 }, //Kiriti
      5: { x: 0, y: 2 }, //Shwethavahana
      6: { x: 1, y: 2 }, //Bibhatsu
      7: { x: 1, y: 3 }, //Vijaya
      8: { x: 2, y: 3 }, //Krishna
      9: { x: 0, y: 4 }, //Savyasachi
      10:{ x: 1, y: 4 }, //Dhananjaya
      11:{ x: 1, y: 5 },  //Partha
      12:{ x: 2, y: 5 }  //Partha
    },

    connections: []
  }
}, 
{
  id: 53,
  slug: "a-glimpse-of-creation",
  title: "A Glimpse of Creation",
  description: "The complaint of a child reveals a cosmic truth hidden within a playful moment.",
  accent: "#ffd6a5",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "awakening-of-the-rakshasa",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__L_R___",
      clue: "A young boy, who complains to his mother that his younger brother was eating mud.",
      answer: "BALARAMA"
    },
    {
      id: 2,
      pattern: "__I____",
      clue: "The younger brother, who denies that he had done such a thing, and tells his mother that she can look into his mouth and see for herself if he is lying.",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "__S__D_",
      clue: "The boys mother, who looks into his mouth, and sees the whole creation in it.",
      answer: "YASHODA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Balarama
      2: { x: 2, y: 0 }, //Krishna
      3: { x: 1, y: 1 } //Yashoda
    },

    connections: [
      { from: 1, to: 2, label: ["complains about him"] },
      { from: 3, to: 2, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["looks into his mouth"] }
    ]
  }
}, 
{
  id: 54,
  slug: "awakening-of-the-rakshasa",
  title: "Awakening of the Rakshasa",
  description: "A sleeping giant of Lanka is awakened to join the battle.",
  accent: "#f28482",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-twin-trees",
  rowHeight: 220,

  nodes: [
    {
      id: 1,
      pattern: "___B__K____",
      clue: "The younger brother of the king of Lanka. Upon his orders, he is woken up with loud drums and trumpets being blown near his ears and with elephants which were brought to tread on him. (He has a curse that he sleeps for six months in a year)",
      answer: "KUMBHAKARNA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "__G____",
      clue: "The Vanara king, who tears off this Rakshasa's ears and nose with his sharp nails.",
      answer: "SUGRIVA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Kumbhakarna
      2: { x: 2, y: 0 } //Sugriva
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true,label: ["tears off his ears and nose"] }
    ]
  }
}, 
{
  id: 55,
  slug: "the-twin-trees",
  title: "The Twin Trees",
  description: "A mischievous child tied to a mortar drags it between two trees, revealing a hidden divine story.",
  accent: "#ffb4a2",
  congratsMessage: "From mischief to miracle, you've traced the fall of the Arjuna trees. Well done! Onward to the next puzzle!",
  nextSlug: "the-chariot-from-the-heavens",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_R_____",
      clue: "A baby boy who constantly does deeds of mischief and loves milk, curds, and butter.",
      answer: "KRISHNA"
    },
    {
      id: 2,
      pattern: "__S____",
      clue: "The mother of this boy. One day, she found her pot of butter broken, and to punish her son, ties him to a mortar.",
      answer: "YASHODA"
    },
    {
      id: 3,
      pattern: "__J_N_ TREES",
      clue: "The boy catches sight of two trees side by side. He waddles up to them, with the mortar dragging heavily behind. The mortar gets wedged between the trees, so he gives a hard pull, which results in both the trees crashing down. Name these trees.",
      answer: "ARJUNA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "__B___",
      clue: "From these trees, emerge two heavenly beings, who are the sons of a god. Who is this God? Name him. (hint: the god of wealth)",
      answer: "KUBERA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Krishna
      2: { x: 2, y: 0 }, //Yashoda
      3: { x: 1, y: 1 }, //Arjuna
      4: { x: 1, y: 2 } //Kubera
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["ties him to a mortar"] },
      { from: 1, to: 3, label: ["pulls them down"] },
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["are the sons of"] }
    ]
  }
},
{
  id: 56,
  slug: "the-chariot-from-the-heavens",
  title: "The Chariot from the Heavens",
  description: "When the battle against the king of Lanka reaches its fiercest moment, help arrives from the heavens.",
  accent: "#bde0fe",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "events-in-vrindavana",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "R_V___",
      clue: "A ten headed rakshasa.",
      answer: "RAVANA"
    },
    {
      id: 2,
      pattern: "R_M_",
      clue: "The prince who is trying to defeat this Rakshasa, but everytime he severs a head, another one takes its place, to his bewilderment.",
      answer: "RAMA"
    },
    {
      id: 3,
      pattern: "I____",
      clue: "The King of Gods, who senses this prince's distress and sends down his own divine chariot to him.",
      answer: "INDRA"
    },
    {
      id: 4,
      pattern: "M____I",
      clue: "The charioteer of this God, who now steers the prince.",
      answer: "MATALI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Ravana
      2: { x: 2, y: 0 }, //Rama
      3: { x: 0, y: 1 }, //Indra
      4: { x: 2, y: 2 } //Matali
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["severs his heads"] },
      { from: 3, to: 2, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["sends his chariot"] },
      { from: 3, to: 4, sideOrigin:"right", sideTarget:"left", straight:true, label: ["his charioteer"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true,label: ["steers his chariot"] }
    ]
  }
},
{
  id: 57,
  slug: "events-in-vrindavana",
  title: "Events in Vrindavana",
  description: "In the forests of Vrindavana, divine play unfolds through rivers, gods, and lessons in humility.",
  accent: "#a0e7e5",
  congratsMessage: "You've identified some of the major events connected to Vrindavana. Well done! Onward to the next puzzle!",
  nextSlug: "the-vision-of-the-war",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "V_I___V___",
      clue: "Since a multitude of Rakshasa's kept coming to Gokula to attack Krishna, the village elders decide that they should all move to a different place. Name the forest which they move into.",
      answer: "VRINDAVANA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "__M___",
      clue: "Name the river which flows by, close to this forest.",
      answer: "YAMUNA"
    },
    {
      id: 3,
      pattern: "_R__M_",
      clue: "A God who decides to witness Krishna's tricks and extraordinary strength. He hides all the calves and the gopa boys in a mountain cave to see what Krishna would do. In response, Krishna multiplies himself and takes the forms of each of them. Name the God who plays this trick.",
      answer: "BRAHMA"
    },
    {
      id: 4,
      pattern: "_N___",
      clue: "A God, who is taught a lesson and his pride is broken when Krishna tells the people of Vrindavan to worship the Govardhana mountain instead of him.",
      answer: "INDRA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Vrindavana
      2: { x: 2, y: 0 }, //Yamuna
      3: { x: 0, y: 1 }, //Brahma
      4: { x: 2, y: 1 } //Indra
    },

    connections: []
  }
},
{
  id: 58,
  slug: "the-vision-of-the-war",
  title: "The Vision of the War",
  description: "A king refuses divine sight but still wishes to hear every moment of the great battle.",
  accent: "#caffbf",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-curse-of-the-hermit-boys-parents",
  rowHeight: 330,

  nodes: [
    {
      id: 1,
      pattern: "V_A_A",
      clue: "A sage who offers divine vision of the battle, to the King.",
      answer: "VYASA"
    },
    {
      id: 2,
      pattern: "__R_T_R_S_T__",
      clue: "The King refuses this vision, saying he has no desire to view the death of his own sons. But he says that he would like to hear every detail of the war.",
      answer: "DHRITARASHTRA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "__N__Y_",
      clue: "The person who is blessed with a divine vision for the duration of the war. He narrates everything that he sees and hears to the King.",
      answer: "SANJAYA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Vyasa
      2: { x: 2, y: 0 }, //Dhritharashtra
      3: { x: 1, y: 1 } //Sanjaya
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"right", sideTarget:"left", straight:true, label: ["offers divine vision"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"left", straight:true, label: ["grants divine vision"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["narrates the war"] }
    ]
  }
},
{
  id: 59,
  slug: "the-curse-of-the-hermit-boys-parents",
  title: "The Curse of the Hermit Boy's Parents",
  description: "A tragic mistake in the forest brings a curse whose consequences echo years later.",
  accent: "#ffd670",
  congratsMessage: "You followed the chain of events that led to Dasharatha’s tragic fate. Try your luck with the next puzzle!",
  nextSlug: "the-lie-that-wasnt-a-lie",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D_S__R_T__",
      clue: "A young prince from Ayodhya, who goes for hunting in the dark forest on the banks of the Sarayu. He hears what sounds like an elephant drawing in water through its trunk, and shoots his arrow at it.",
      answer: "DASHARATHA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "S___V___",
      clue: "The innocent hermit boy that this arrow actually hits. He was drawing water for his parents who were old and blind.",
      answer: "SHRAVANA"
    },
    {
      id: 3,
      pattern: "__M_",
      clue: "The curse by the boys parents comes true, where the prince mentioned above eventually dies due to the grief of separation from his son. What is the name of his son?",
      answer: "RAMA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Dasharatha
      2: { x: 2, y: 0 }, //Shravana
      3: { x: 0, y: 1 } //Rama
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: [" his parents curse him"] },
      { from: 1, to: 3, label: ["son"] }
    ]
  }
},
{
  id: 60,
  slug: "the-lie-that-wasnt-a-lie",
  title: "The Lie that wasn't a Lie",
  description: "A master warrior falls when a tragic misunderstanding spreads across the battlefield.",
  accent: "#bdb2ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-rakshasi-in-gokula",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__O__",
      clue: "A powerful and formidable warrior in the battle of Mahabharatha.",
      answer: "DRONA"
    },
    {
      id: 2,
      pattern: "__I____",
      clue: "This charioteer realises that the only way to defeat him is by using his weakness (his son).",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "Y_____H____",
      clue: "This prince is asked to say that a certain elephant is dead.",
      answer: "YUDHISHTIRA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "_SH____H___",
      clue: "What is the name of this elephant? (And his son?)",
      answer: "ASHWATTHAMA",
      size:"wide"
    },
    {
      id: 5,
      pattern: "__R___T_D__M__",
      clue: "When this warrior misunderstands and thinks that his son is no more, he is slain by the prince of Panchala. Who is he?",
      answer: "DHRISHTADYUMNA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Drona
      2: { x: 1, y: 2 }, //Krishna
      3: { x: 2, y: 1 }, //Yudhishtira
      4: { x: 0, y: 1 }, //Ashwatthama
      5: { x: 2, y: 0 } //Dhrishtadyumna
    },

    connections: [
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["advises him"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true,  label: ["says that his 'son' is dead"] },
      { from: 5, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["kills him"] },
      { from: 1, to: 4, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["son"] }
    ]
  }
},
{
  id: 61,
  slug: "the-rakshasi-in-gokula",
  title: "The Rakshasi in Gokula",
  description: "A tyrant’s plot sends a dangerous Rakshasi into Gokula, but the divine child reveals his true power.",
  accent: "#ffc6ff",
  congratsMessage: "You uncovered the story of Poothana. Well done! Onward to the next puzzle!",
  nextSlug: "the-curse-that-became-a-disguise",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__M__",
      clue: "A tyrant, and ruler of Mathura, who sat on the throne after imprisoning his own father.",
      answer: "KAMSA"
    },
    {
      id: 2,
      pattern: "_OO__A__",
      clue: "A frightful and dreaded Rakshasi who knew many magic tricks and spells that she used, to do asuric work for the King. She enters Gokula at the behest of this King, transforming herself into a beautiful woman. Name this Rakshasi.",
      answer: "POOTHANA"
    },
    {
      id: 3,
      pattern: "____O__",
      clue: "A woman who had just recently given birth. The many people from village come to look at the divine baby boy. She is visited by a woman, who asks her if she can hold and feed her son. Name the mother.",
      answer: "YASHODA"
    },
    {
      id: 4,
      pattern: "__I___A",
      clue: "When the Rakshasi holds this baby and tries to feed him milk from her breast, which she had poisoned. The baby keeps sucking harder and harder until he sucks the life from her. Name this baby.",
      answer: "KRISHNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Kamsa
      2: { x: 0, y: 1 }, //Poothana
      3: { x: 2, y: 1 }, //Yashoda
      4: { x: 1, y: 2 } //Krishna
    },

    connections: [
      { from: 1, to: 2, label: ["sends her"] },
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"left", straight:true,  label: ["visits her"] },
      { from: 4, to: 2, sideOrigin:"left", sideTarget:"bottom", straight:true, label: ["kills her"] }
    ]
  }
},
{
  id: 62,
  slug: "the-curse-that-became-a-disguise",
  title: "The Curse That Became a Disguise",
  description: "A visit to Amaravati leads the prince to acquire the knowledge of many useful divine weapons, but also a curse. Identify the characters and events if you can.",
  accent: "#a8dadc",
  congratsMessage: "A terrible curse indeed turned into the perfect disguise. Well done! Onward to the next puzzle!",
  nextSlug: "curses-across-births",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "I____",
      clue: "The King of Gods, and the father of a Pandava prince, who brings his son to Amaravati. There, he learns how to use various divine weapons.",
      answer: "INDRA"
    },
    {
      id: 2,
      pattern: "U_____I",
      clue: "An Apsara, who curses this Pandava to live the life of an eunuch. (She is also his ancestor, as she is the wife of Pururava)",
      answer: "URVASHI"
    },
    {
      id: 3,
      pattern: "B________A",
      clue: "This curse proves to be a perfect disguise for this Pandava during his thirteenth year of exile. What is the name he took during this year?",
      answer: "BRIHANNALA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Indra
      2: { x: 0, y: 1 }, //Urvashi
      3: { x: 2, y: 1 } //Brihannala
    },

    connections: [
      { from: 1, to: 2, label: ["his court"] },
      { from: 2, to: 3, label: [" her curse leads to this disguise"] }
    ]
  }
},
{
  id: 63,
  slug: "curses-across-births",
  title: "Curses Across Births",
  description: "Penance, arrogance, and curses ripple across births until they meet again in the story of Kaliya.",
  accent: "#90dbf4",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-princess-from-the-fire",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "V_D____R_M__I",
      clue: "A Rishi who is performing penance for Narayana.",
      answer: "VEDASHIRAMUNI",
      size: "wide"
    },
    {
      id: 2,
      pattern: "A__W____R_M__I",
      clue: "Another Rishi who comes into this Rishi's ashrama, wanting to do tapas. In his arrogance, the other Rishi refuses, because of which this Rishi curses him to be born as a poisonous snake.",
      answer: "ASHWASHIRAMUNI",
      size: "wide"
    },
    {
      id: 3,
      pattern: "K_K_ B_______I",
      clue: "The crow who tells the story of Rama to Garuda, which is captured in Ramcharitmanas",
      answer: "KAKA BHUSHUNDI",
      size: "wide"
    },
    {
      id: 4,
      pattern: "__L___",
      clue: "A hundred hooded serpent that lived in a pool with his family from many yugas. He constantly breathed poisonous fumes, and any life which came near this pool got killed. Name this serpent.",
      answer: "KALIYA"
    },
    {
      id: 5,
      pattern: "K_I____",
      clue: "Name the god who jumps into this pool from the top of a Kadamba tree. He dances on top of the snake, breaking each of its hoods.",
      answer: "KRISHNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Vedashiramuni
      2: { x: 2, y: 0 }, //Ashwashiramuni
      4: { x: 0, y: 1 }, //Kaliya
      3: { x: 2, y: 1 }, //Kaka Bhushundi
      5: { x: 1, y: 2 } //Krishna
    },

    connections: [
      { from: 1, to: 2, label: ["curses him to be born as a crow"] },
      { from: 1, to: 4, label: ["reincarnation"] },
      { from: 2, to: 3, label: ["reincarnation"] },
      { from: 5, to: 4, sideOrigin:"top", sideTarget:"right", straight:true, label: ["dances atop of"] }
      
    ]
  }
},
{
  id: 64,
  slug: "the-princess-from-the-fire",
  title: "The Princess from the Fire",
  description: "From a sacrificial fire emerges a princess whose marriage will shape the destiny of the Pandavas.",
  accent: "#ffafcc",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "rakshasas-sent-to-vrindavan",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_R_____",
      clue: "A powerful king, after being humiliated by his former best friend, performs a Yagna to have a son who would help him in revenge.",
      answer: "DRUPADA"
    },
    {
      id: 2,
      pattern: "_R______",
      clue: "The girl who emerges from this sacrificial fire, having dark complexion.",
      answer: "DRAUPADI"
    },
    {
      id: 3,
      pattern: "___U__",
      clue: "The prince who successfully shoots his arrow at the eye of a rotating fish, while only looking at its reflection - thus fulfilling the conditions of the Swayamwara and marrying her.",
      answer: "ARJUNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Drupada
      2: { x: 0, y: 1 }, //Draupadi
      3: { x: 2, y: 1 }  //Arjuna
    },

    connections: [
      { from: 1, to: 2, label: ["daughter"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["wins her hand"] }
    ]
  }
},
{
  id: 65,
  slug: "rakshasas-sent-to-vrindavan",
  title: "Rakshasas Sent to Vrindavan",
  description: "The tyrant of Mathura sends fearsome Rakshasas to destroy the boy of Vrindavan.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "one-cart-each-day",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__M__",
      clue: "Tyrant ruler of Mathura who had imprisoned his own father.",
      answer: "KAMSA"
    },
    {
      id: 2,
      pattern: "___S___",
      clue: "A young boy who lives in Vrindavan and plays the flute.",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "__K_S_R_",
      clue: "A Rakshasa sent by the King to kill the boy. He comes in the form of a monstrous crane and holds the boy in his beak. The boy tears it apart and the asura falls down, dead. Name this Rakshasa.",
      answer: "BAKASURA"
    },
    {
      id: 4,
      pattern: "_GH_S_R_",
      clue: "He is the younger brother of Poothana and the Rakshasa on the left, and is determined to avenge both their deaths. He takes the form of a huge python, and lies down with his mouth wide open. The Gopas unknowingly venture into its giant mouth, and the cowherd follows. He wedges himself in the Rakshasa's throat and prevents him from breathing, with which he dies. Name this Rakshasa.",
      answer: "AGHASURA",
      size:"wide"

    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Kamsa
      2: { x: 1, y: 1 }, //Krishna
      3: { x: 0, y: 2 }, //Bakasura
      4: { x: 2, y: 2 } //Aghasura
    },

    connections: [
      { from: 1, to: 3, sideOrigin:"left", sideTarget:"top", straight:true,  label: ["sends him"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top", straight:true,  label: ["kills him"] },
      { from: 2, to: 4, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["kills him"] }
    ]
  }
},
{
  id: 66,
  slug: "one-cart-each-day",
  title: "One Cart Each Day",
  description: "While living in disguise, the Pandavas confront the terror that plagued the town of Ekachakra.",
  accent: "#bde0fe",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-rakshasas-garden",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "E_A___K__",
      clue: "The town where the Pandavas stay in disguise after escaping from Lakshagriha.",
      answer: "EKACHAKRA"
    },
    {
      id: 2,
      pattern: "V_K____A",
      clue: "The Rakshasa who lived nearby. Everyday, he wanted one person from the town to drive a cart of food to him. He would eat all the food and the rider.",
      answer: "VAKASURA"
    },
    {
      id: 3,
      pattern: "____A",
      clue: "The Pandava who drives the cart, and finishes off the Rakshasa.",
      answer: "BHIMA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Ekachakra
      2: { x: 0, y: 1 }, //Vakasura
      3: { x: 2, y: 1 } //Bhima
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["terrorizes the town"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["kills him"] }
    ]
  }
},
{
  id: 67,
  slug: "the-rakshasas-garden",
  title: "The Rakshasa's Garden",
  description: "Two brothers from Vrindavan enter a forbidden grove guarded by a fearsome Rakshasa.",
  accent: "#a0c4ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "lakshagriha-escape",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__I____",
      clue: "A cowherd from Vrindavan, who loved to play pranks and his flute.",
      answer: "KRISHNA"
    },
    {
      id: 2,
      pattern: "___A___A",
      clue: "The elder brother of this boy, the son of Rohini.",
      answer: "BALARAMA"
    },
    {
      id: 3,
      pattern: "D__N_K_S__A",
      clue: "There was a beautiful garden nearby filled with juicy fruits. However, no one dared to go there, as a ferocious Rakshasa lived there. When the two brothers go to this garden to get the fruits, this Rakshasa becomes angry and attacks them. He is slain by them - name the Rakshasa.",
      answer: "DHENUKASURA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Krishna
      2: { x: 2, y: 0 }, //Balarama
      3: { x: 1, y: 1 } //Dhenukasura
    },

    connections: [
      { from: 1, to: 3, label: ["kills him"] },
      { from: 2, to: 3, label: ["kills him"] }
    ]
  }
}, 
{
  id: 68,
  slug: "lakshagriha-escape",
  title: "Lakshagriha",
  description: "A palace built to burn becomes the setting of a deadly plot against the Pandavas.",
  accent: "#ffd6a5",
  congratsMessage: "You've identified the plot of the burning palace and the escape of the Pandavas. Well done! Onward to the next puzzle!",
  nextSlug: "a-walk-with-death",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "V_R__V_T_",
      clue: "The place where Duryodhana and Dhritarashtra send the Pandavas, to murder them in a \"fire.\"",
      answer: "VARNAVATA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "P_R______",
      clue: "The architect who had built the house in an inflammable way.",
      answer: "PUROCHANA",
      size:"wide"
    },
    {
      id: 3,
      pattern: "__D___",
      clue: "The uncle of the Pandavas, who accompanies the Pandavas.",
      answer: "VIDURA"
    },
    {
      id: 4,
      pattern: "Y_____H____",
      clue: "The only Pandava who knows the language of the Mlechhas, therefore he understands Vidura's cryptic warning. Due to this, he and his brothers manage to escape before the palace kills.",
      answer: "YUDHISHTIRA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Varnavata
      2: { x: 0, y: 1 }, //Purochana
      3: { x: 2, y: 1 }, //Vidura
      4: { x: 1, y: 2 } //Yudhishtira
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["builds the palace"] },
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget:"top", straight:true,  label: ["warns him"] }
    ]
  }
}, 
{
  id: 69,
  slug: "a-walk-with-death",
  title: "A Walk with Death",
  description: "Devotion, wisdom, and resolve confront destiny itself in the forest.",
  accent: "#ffc8dd",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "yaksha-prashna",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D__M_TS_N_",
      clue: "The King of Shalva, who was ousted from his kingdom, and goes to live in the forest with his wife and child.",
      answer: "DYUMATSENA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "S_T_____",
      clue: "The child who grows up in this forest. He is destined to live a very short life.",
      answer: "SATYAVAN"
    },
    {
      id: 3,
      pattern: "__V___I",
      clue: "The princess from Madra, who wishes to marry this prince in the forest. When there are only four days left in his life, she undertakes a rigorous fast.",
      answer: "SAVITRI"
    },
    {
      id: 4,
      pattern: "__R__A",
      clue: "The sage who warns King Ashwapati of Madra against letting his daughter marry this prince, saying that he only has one year left to live.",
      answer: "NARADA"
    },
    {
      id: 5,
      pattern: "_A__",
      clue: "The God who arrives on the stipulated day to take the prince away. However, impressed by her wisdom, speech and knowledge in Dharma, he grants her husbands life and Kingdom.",
      answer: "YAMA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Dyumatsena
      2: { x: 1, y: 1 }, //Satyavan
      3: { x: 0, y: 2 }, //Savitri
      4: { x: 2, y: 2 }, //Narada
      5: { x: 1, y: 3 }  //Yama
    },

    connections: [
      { from: 1, to: 2, label: ["son"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["marries him"] },
      { from: 5, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["comes to take his life"] },
      { from: 5, to: 3, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["asks to ask for a boon"] }
    ]
  }
},
{
  id: 70,
  slug: "yaksha-prashna",
  title: "Yaksha Prashna",
  description: "At a mysterious lake, a prince must answer profound questions to restore life to his fallen brothers.",
  accent: "#bde0fe",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-python",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_____A",
      clue: "A prince who sets out to a lake to bring water for himself and his brothers. But the moment he sips the water, he drops dead.",
      answer: "NAKULA"
    },
    {
      id: 2,
      pattern: "Y_____H____",
      clue: "The eldest prince who comes to the lake and finds all his brothers dead. He answers all the questions posed to him by a Yaksha, and as a boon, the Yaksha offers him to ask for the life of one of his brothers.",
      answer: "YUDHISHTIRA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "__M_",
      clue: "What is the true form of this Yaksha? (Hint - the god of Dharma)",
      answer: "YAMA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Nakula
      2: { x: 2, y: 0 }, //Yudhishtira
      3: { x: 1, y: 1 } //Yama
    },

    connections: [
      { from: 1, to: 3, label: ["killed by the Yaksha"] },
      { from: 2, to: 3, label: ["answers his questions"] },
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["chooses his life to be restored"] }
    ]
  }
},
{
  id: 71,
  slug: "the-python",
  title: "The Python",
  description: "A night near a temple turns strange when a python seizes the cowherd chieftain, revealing a hidden curse.",
  accent: "#caffbf",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-challenge-in-the-arena",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__N__",
      clue: "The chief of the cowhered community in Vrindavan. One day, when he had performed a ritual to a goddess, he and the other villagers decide to spend the night near the temple courtyard. In the middle of the night, he suddenly finds his foot in the hold of a large python. Name this man.",
      answer: "NANDA"
    },
    {
      id: 2,
      pattern: "_R___N_",
      clue: "His son rushes to help him, and he touches the snake with his foot. Name this boy.",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "S_D_R__AN_",
      clue: "When the boy touches him, the snake instantly turns into a shining celestial magician, and he explains that he had been cursed by a Rishi to be born as a python. Name this celestial being.",
      answer: "SUDARSHANA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "A_G__A",
      clue: "The Rishi who had cursed him, because the magician had disrupted his meditation by flying over him in his chariot a hundred times.",
      answer: "ANGIRA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Nanda
      2: { x: 1, y: 1 }, //Krishna
      3: { x: 0, y: 2 }, //Sudarshana
      4: { x: 2, y: 2 } //Angira
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget:"top", straight:true,label: ["son"] },
      { from: 2, to: 3, label: ["frees him"] },
      { from: 4, to: 3, sideOrigin:"left", sideTarget:"right", straight:true, label: ["curses him"] }
    ]
  }
},
{
  id: 72,
  slug: "the-challenge-in-the-arena",
  title: "The Challenge in the Arena",
  description: "A display of martial skill turns dramatic when a mysterious stranger enters the arena.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-warrior-who-could-not-return",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_____A",
      clue: "The prince who is known for his skills in archery - he displays his skills on his final day after all the lessons (along with the other Pandavas and Kauravas).",
      answer: "ARJUNA"
    },
    {
      id: 2,
      pattern: "__R__",
      clue: "A young man who enters the arena and challenges this prince.",
      answer: "KARNA"
    },
    {
      id: 3,
      pattern: "__R_______",
      clue: "The prince who offers him the Kingdom of Anga, and with this, begins a friendship of doom.",
      answer: "DURYODHANA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },
      2: { x: 0, y: 1 },
      3: { x: 2, y: 1 }
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["challenges him"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["makes him king of Anga"] }
    ]
  }
},
{
  id: 73,
  slug: "the-warrior-who-could-not-return",
  title: "The Warrior who Could Not Return",
  description: "A young warrior enters a deadly battle formation, while a powerful king blocks those who could have saved him.",
  accent: "#f4a261",
  congratsMessage: "You followed the tragic story of a warrior trapped inside the Chakravyuha. Try your luck with the next puzzle!",
  nextSlug: "those-who-stayed-away-from-the-war",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "A__U_A",
      clue: "A powerful archer. One of the few people who knows how to enter and exit the Chakravyuha.",
      answer: "ARJUNA"
    },
    {
      id: 2,
      pattern: "S__H__R_",
      clue: "The wife of this warrior. She falls asleep after her husband tells her about how to enter the formation, and doesn't hear about how to exit it.",
      answer: "SUBHADRA"
    },
    {
      id: 3,
      pattern: "A__I__N__",
      clue: "Their son - a powerful warior who is killed unfaiely on the 13th day of war.",
      answer: "ABHIMANYU"
    },
    {
      id: 4,
      pattern: "J_Y____T__",
      clue: "The King of Sindhu, who uses his boon obtained from Lord Shiva to block the other four Pandavas from entering the formation.",
      answer: "JAYADRATHA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Arjuna
      2: { x: 0, y: 1 }, //Subhadra
      3: { x: 1, y: 2 }, //Abhimanyu
      4: { x: 2, y: 1 }  //Jayadratha
    },

    connections: [
      { from: 1, to: 2, sideOrigin: "left", sideTarget: "top", straight: true, label: ["wife"] },
      { from: 1, to: 3, sideOrigin: "bottom", sideTarget: "top", straight: true, label: ["son"] },
      { from: 2, to: 3, sideOrigin: "right", sideTarget: "left", straight: true, label: ["mother"] },
      { from: 4, to: 3, sideOrigin: "left", sideTarget: "right", label: ["traps him in the formation"] }
    ]
  }
}
,
{
  id: 74,
  slug: "those-who-stayed-away-from-the-war",
  title: "Those Who Stayed Away from the War",
  description: "A few powerful warriors chose not to take part in the great war of Kurukshetra. See if you can identify them.",
  accent: "#a0c4ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-guru-dakshina",
  rowHeight: 220,

  nodes: [
    {
      id: 1,
      pattern: "____R___",
      clue: "The elder brother of Krishna, who decides not to take either side in the battle and instead goes on a pilgrimage until the war is over.",
      answer: "BALARAMA"
    },
    {
      id: 2,
      pattern: "_R____M__",
      clue: "The son of Krishna and Rukmini, who accompanies his uncle and some other Yadavas in their pilgrimage. He is also the person who had trained Abhimanyu and the Upapandavas in warfare.",
      answer: "PRADYUMNA"
    },
    {
      id: 3,
      pattern: "__K__",
      clue: "The son of Bhishmaka - he first offers himself and his akshauhini for the Pandavas, who refuse his offer. The Kauravas also reject him, and he does not participate in the battle.",
      answer: "RUKMI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },
      2: { x: 2, y: 0 },
      3: { x: 1, y: 1 }
    },

    connections: []
  }
},
{
  id: 75,
  slug: "the-guru-dakshina",
  title: "The Guru Dakshina",
  description: "Two divine brothers complete their studies and undertake an extraordinary task to repay their Guru.",
  accent: "#bde0fe",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-poisoned-feast",
  rowHeight: 250,

  nodes: [
    {
      id: 1,
      pattern: "__I____",
      clue: "The eight son of Vasudeva, the slayer of Kamsa.",
      answer: "KRISHNA"
    },
    {
      id: 2,
      pattern: "__L_R___",
      clue: "The elder brother of the boy.",
      answer: "BALARAMA"
    },
    {
      id: 3,
      pattern: "S_______N_",
      clue: "The Guru of the two boys. They finish their studies in his ashrama, and when they ask him to name his Gurudakshina, he asks them to restore his son who had drowned at Prabhasa.",
      answer: "SANDEEPANI",
      size: "wide"
    },
    {
      id: 4,
      pattern: "Y___",
      clue: "The God from whom the two brothers bring back the lost son.",
      answer: "YAMA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Krishna
      2: { x: 2, y: 0 }, //Balarama
      3: { x: 1, y: 1 }, //Sandeepani
      4: { x: 1, y: 2 } //Yama
    },

    connections: [
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"left", straight:true, label: ["student of"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"right", straight:true, label: ["student of"] },
    ]
  }
},
{
  id: 76,
  slug: "the-poisoned-feast",
  title: "The Poisoned Feast",
  description: "A treacherous picnic turns deadly, but fate leads a Pandava to unexpected strength beneath the waters.",
  accent: "#a8dadc",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-sindhu-kings-revenge",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D_R__D____",
      clue: "The eldest son of Dhritarashtra. One day, he invites his cousins, the Pandavas, for a picnic.",
      answer: "DURYODHANA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "B_I__",
      clue: "One of the Pandavas, who loves food a lot. During the picnic, not realising that his cousin had poisoned it, he eats many helpings and falls unconscious. His cousin then threw him into a lake.",
      answer: "BHIMA"
    },
    {
      id: 3,
      pattern: "__S__I",
      clue: "The King of serpents, at the bottom of the lake, who is pleased with his bravery. At the behest of Aryaka, he offers him bowls of rasakunda, each of which would offer him the strength of a thousand elephants. Who is this serpent?",
      answer: "VASUKI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Duryodhana
      2: { x: 2, y: 0 }, //Bhima
      3: { x: 1, y: 1 } //Vasuki
    },

    connections: [
      { from: 1, to: 2, label: ["throws him into the lake"] },
      { from: 3, to: 2, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["gives him nectar"] }
    ]
  }
},
{
  id: 77,
  slug: "the-sindhu-kings-revenge",
  title: "The Sindhu King's Revenge",
  description: "Humiliation leads to penance, and penance leads to a boon that changes the course of a terrible day in the war.",
  accent: "#ffcad4",
  congratsMessage: "You followed the chain of events that led to Abhimanyu’s tragic fate. Onward to the next puzzle!",
  nextSlug: "the-arena-of-mathura",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "J_Y____T__",
      clue: "The King of Sindhu, and the husband of a Kaurava princess. On his way to Shalva's kingdom, he passes by a hut and is awestruck by the beauty of the woman he sees there.",
      answer: "JAYADRATHA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "D___P___",
      clue: "Who is the woman mentioned here? The King forcibly drags her to his chariot.",
      answer: "DRAUPADI"
    },
    {
      id: 3,
      pattern: "B_I__",
      clue: "Name the prince who captures this king and shaves off his hair to humiliate him.",
      answer: "BHIMA"
    },
    {
      id: 4,
      pattern: "__I__",
      clue: "The God that this King meditates to, in order to take his revenge against the Pandavas. He gives him the boon to be able to hold off the Pandavas for one of battle.",
      answer: "SHIVA"
    },
    {
      id: 5,
      pattern: "_____A",
      clue: "The only Pandava who is an exception to his boon as he has celestial weapons.",
      answer: "ARJUNA"
    },
    {
      id: 6,
      pattern: "A__I___Y_",
      clue: "The King uses this boon on one of the days of the battle, to withstand the Pandavas and prevent them from entering a battle formation. As a result, they are unable to rescue a young prince who was trapped inside the formation, and is then unfairly killed. Who is this prince?",
      answer: "ABHIMANYU",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Jayadratha
      2: { x: 0, y: 1 }, //Draupadi
      3: { x: 2, y: 1 }, //Bhima
      4: { x: 1, y: 2 }, //Shiva
      5: { x: 0, y: 3 }, //Arjuna
      6: { x: 2, y: 3 } //Abhimanyu
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"left", sideTarget:"top", straight:true, label: ["abducts her"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["humiliates"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["grants him a boon"] },
      { from: 4, to: 5, label: ["exception to the boon"] },
      { from: 1, to: 6, label: ["prevents rescue of"] }
    ]
  }
},
{
  id: 78,
  slug: "the-arena-of-mathura",
  title: "The Arena of Mathura",
  description: "A warning, an invitation, and a deadly arena lead to the fall of a tyrant.",
  accent: "#ffd6a5",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-cursed-ancestor",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "N_R_D_",
      clue: "A divine sage, who usually acts as an instrument to carry out the Lord's wishes. He goes to a King and informs him that he has been tricked, and that Devaki's eighth son lives.",
      answer: "NARADA"
    },
    {
      id: 2,
      pattern: "A__U_A",
      clue: "One of the chiefs of the Yadava clan. He is sent by the King to bring the two sons of Vasudeva to Mathura under the pretext of being invited to see a Yagna.",
      answer: "AKRURA"
    },
    {
      id: 3,
      pattern: "C__NU__",
      clue: "One of the wrestlers, who challenges Krishna to a match of wrestling.",
      answer: "CHANURA"
    },
    {
      id: 4,
      pattern: "M___TI__",
      clue: "Another wrestler who challenges Balarama.",
      answer: "MUSHTIKA"
    },
    {
      id: 5,
      pattern: "K_M__",
      clue: "Next, Krishna jumps up, and catches hold of the King by his hair, swung him around, and killed him. Name this King.",
      answer: "KAMSA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Narada
      2: { x: 1, y: 1 }, //Akrura
      3: { x: 0, y: 2 }, //Chanura
      4: { x: 2, y: 2 }, //Mushtika
      5: { x: 2, y: 0 } //Kamsa
    },

    connections: [
      { from: 1, to: 5, label: ["warns him"] },
      { from: 5, to: 2, label: ["sends him"] }
    ]
  }
},
{
  id: 79,
  slug: "the-cursed-ancestor",
  title: "The Cursed Ancestor",
  description: "A Pandava trapped by a python discovers that the creature is actually a cursed ancestor.",
  accent: "#caffbf",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-stags-curse",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "____A",
      clue: "A Pandava, who during his years of exile, enters a mountain cave and gets trapped by a ferocious python.",
      answer: "BHIMA"
    },
    {
      id: 2,
      pattern: "N_H____",
      clue: "This python is actually one of his ancestors who was cursed. Who is he?",
      answer: "NAHUSHA"
    },
    {
      id: 3,
      pattern: "A__S_Y_",
      clue: "The sage who cursed this King into becoming a python.",
      answer: "AGASTYA"
    },
    {
      id: 4,
      pattern: "Y____S_____",
      clue: "The elder brother of the prince, who comes in search for him. He answers all the questions of the python, and got his brother freed. The python too, assumes its divine form and proceeds to heaven.",
      answer: "YUDHISHTIRA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Bhima
      2: { x: 2, y: 0 }, //Nahusha
      3: { x: 2, y: 1 }, //Agastya
      4: { x: 0, y: 1 } //Yudhishtira
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["traps him"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["curses him"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true, noArrow:true,label: ["brothers"] }

    ]
  }
},
{
  id: 80,
  slug: "the-stags-curse",
  title: "The Stag's Curse",
  description: "A king’s fatal mistake in the forest leads to a terrible curse that shapes the destiny of the Pandavas.",
  accent: "#ffadad",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-visit-to-the-kuru-court",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "__N__",
      clue: "A king who notices a large stag, roaming in the forest with its mate. He shoots his arrows at them. They were actually a sage and his wife. As they fell, they cursed him that he would die in the first passionate embrace with his spouse.",
      answer: "PANDU"
    },
    {
      id: 2,
      pattern: "____I",
      clue: "The wife of this King - her presence makes him forget the warning and he goes into a spell of uncontrollable desire - which ultimately results in his death.",
      answer: "MADRI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Pandu
      2: { x: 2, y: 0 } //Madri
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["wife"] }
    ]
  }
},
{
  id: 81,
  slug: "a-visit-to-the-kuru-court",
  title: "A Visit to the Kuru Court",
  description: "On his journey to Mathura and after the fall of Kamsa, events lead to a diplomatic visit to Hastinapura.",
  accent: "#ffd6a5",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-return-from-the-celestial-realms",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "T__V___A",
      clue: "While on his way to Mathura to defeat Kamsa, Krishna comes across a girl who had a hunchback. She was carrying a pot of fragrant sandalpaste to give to Kamsa, which he asks for. Pleased with the devotion of this maid, he blesses her. What is the name of this girl?",
      answer: "TRIVAKRA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "A_R_R_",
      clue: "After killing Kamsa, Krishna asks the Yadava chief (who had brought him to Mathura on Kamsa's orders), to now go to Hastinapura to enquire after the welfare of the Pandavas. Name this Yadava chief.",
      answer: "AKRURA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "D___T________",
      clue: "When the person above visits Hastinapur, he notices that the sons of the King were very jealous of their cousins. He requests the King to be impartial in the treatment of both his sons and nephews, but the King, to his disappointment, confesses that he is much too attached to his sons to be impartial. Who is this King?",
      answer: "DHRITARASHTRA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Trivakra
      2: { x: 2, y: 0 }, //Akrura
      3: { x: 1, y: 1 } //Dhritarashtra
    },

    connections: [
      { from: 2, to: 3, label: ["visits him"] }
    ]
  }
},
{
  id: 82,
  slug: "the-return-from-the-celestial-realms",
  title: "The Return from the Celestial Realms",
  description: "After visiting the celestial worlds, a Pandava reunites with his brothers in the mountains.",
  accent: "#bde0fe",
  congratsMessage: "You've traced the reunion of the Pandavas at Gandhamadana! Well done! Onward to the next puzzle!",
  nextSlug: "the-princes-of-hastinapura",
  rowHeight: 250,

  nodes: [
    {
      id: 1,
      pattern: "_____A",
      clue: "The Pandava who had briefly visited the celestial abodes during their exile.",
      answer: "ARJUNA"
    },
    {
      id: 2,
      pattern: "G__________A",
      clue: "The mountain where the other Pandava brothers trek to, to meet him upon his return.",
      answer: "GANDHAMADANA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "___T_T_____",
      clue: "The young Rakshasa boy who carries Draupadi and the Pandavas to the mountain peak.",
      answer: "GHATOTKACHA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "N_R___",
      clue: "The sage who stops this prince from demonstrating the use of his weapons to his brothers and warns him against using them unless absolutely needed.",
      answer: "NARADA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Arjuna
      2: { x: 1, y: 1 }, //Gandhamadana
      3: { x: 0, y: 2 }, //Ghatotkacha
      4: { x: 2, y: 2 } //Narada
    },

    connections: [
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["carries them to"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["warns him"] }
    ]
  }
},
{
  id: 83,
  slug: "the-princes-of-hastinapura",
  title: "The Princes of Hastinapura",
  description: "From the queens of Vichitravirya are born the princes whose lineage will shape the fate of the Kuru kingdom.",
  accent: "#e9c46a",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-solar-household",
  rowHeight: 260,

  nodes: [
    {
      id: 1,
      pattern: "D_R_______T__",
      clue: "The son of Ambika. Although he is the eldest prince, he is not given the throne due to his blindness.",
      answer: "DHRITARASHTRA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "______R_",
      clue: "A princess who marries him. In order to share her husbands fate, she binds her eyes with a dark cloth, never to remove it again. (except once)",
      answer: "GANDHARI"
    },
    {
      id: 3,
      pattern: "__N__",
      clue: "The son of Ambalika - he is unrivalled in archery, and he is made the King of Hastinapura.",
      answer: "PANDU"
    },
    {
      id: 4,
      pattern: "__N__",
      clue: "The princess who is married to this King.",
      answer: "KUNTI"
    },
    {
      id: 5,
      pattern: "M_D__",
      clue: "The sister of King Shalya, who is also married to this King.",
      answer: "MADRI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Dhritarashtra
      2: { x: 2, y: 0 }, //Gandhari
      3: { x: 0, y: 1 }, //Pandu 
      4: { x: 2, y: 1 }, //Kunti
      5: { x: 2, y: 2 } //Madri
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["wife"] },
      { from: 4, to: 3, sideOrigin:"left", sideTarget:"right", straight:true, label: ["wife"] },
      { from: 5, to: 3, sideOrigin:"left", sideTarget:"right", straight:true,  label: ["wife"] }
    ]
  }
},
{
  id: 84,
  slug: "the-solar-household",
  title: "The Solar Household",
  description: "From this family emerge children who rule over death, time, justice, and the sacred rivers of the earth.",
  accent: "#f5ffb6",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-child-with-the-golden-armour-and-earrings",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "S_N____",
      clue: "The daughter of the architect of gods. She creates a clone of herself and makes it take her place, as she is unable to bear the lustre of her husband.",
      answer: "SANJANA"
    },
    {
      id: 2,
      pattern: "S_R__",
      clue: "The celestial god, who is the luminous one.",
      answer: "SURYA"
    },
    {
      id: 3,
      pattern: "C__A__",
      clue: "The clone, who takes the place as his wife. She gives birth to a son.",
      answer: "CHHAYA"
    },
    {
      id: 4,
      pattern: "S____",
      clue: "Name her son. He has the responsibility of doling out judgements, punishments and rewards to people in their lifetimes. He is the planet Saturn.",
      answer: "SHANI"
    },
    {
      id: 5,
      pattern: "Y___",
      clue: "One of the sons. He is placed in charge of the protection of Dharma.",
      answer: "YAMA"
    },
    {
      id: 6,
      pattern: "Y_____",
      clue: "One of the daughters. She flows on earth as a river.",
      answer: "YAMUNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 1 }, //Sanjana
      2: { x: 1, y: 0 }, //Surya
      3: { x: 2, y: 1 }, //Chhaya
      4: { x: 2, y: 3 }, //Shani
      5: { x: 0, y: 2 }, //Yama
      6: { x: 1, y: 2 }  //Yamuna
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["wife"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"right", straight:true, label: ["becomes his wife(clone)"] },
      { from: 3, to: 4, label: ["son"] },
      { from: 1, to: 5, label: ["son"] },
      { from: 1, to: 6, label: ["daughter"] }
    ]
  }
},
{
  id: 85,
  slug: "the-child-with-the-golden-armour-and-earrings",
  title: "The Child With the Golden Armour and Earrings",
  description: "A boon granted in gratitude leads to the birth of a child destined for greatness.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-fall-of-a-heavenly-dancer",
  rowHeight: 270,

  nodes: [
    {
      id: 1,
      pattern: "K_N__",
      clue: "Once, sage Durvasa had visited Kuntibhoja, and she had taken care of the guest, fulfilling his slightest demand. Name this character.",
      answer: "KUNTI"
    },
    {
      id: 2,
      pattern: "D___A__",
      clue: "The Rishi who grants the girl a boon that she could invoke any God with a mantra, and be blessed with a son. He is usually known for losing his temper.",
      answer: "DURVASA"
    },
    {
      id: 3,
      pattern: "S_R__",
      clue: "In her curiosity to test the mantra, she invokes a god, who blesses her with a child. Who is this God?",
      answer: "SURYA"
    },
    {
      id: 4,
      pattern: "K____",
      clue: "Name the baby who is born with golden armour and earrings.",
      answer: "KARNA"
    },
    {
      id: 5,
      pattern: "A__I_____",
      clue: "A charioteer, who finds the baby and adopts him.",
      answer: "ADHIRATHA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Kunti
      2: { x: 2, y: 0 }, //Durvasa
      3: { x: 1, y: 1 }, //Surya
      4: { x: 0, y: 2 }, //Karna
      5: { x: 1, y: 3 } //Adhiratha
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["grants her the boon"] },
      { from: 1, to: 3, label: ["invokes him"] },
      { from: 3, to: 4, label: ["son"] },
      { from: 1, to: 4, label: ["son"] },
      { from: 5, to: 4, sideOrigin:"left", sideTarget:"bottom", straight:true, label: ["adopts him"] }
    ]
  }
},
{
  id: 86,
  slug: "the-fall-of-a-heavenly-dancer",
  title: "The Fall of a Heavenly Dancer",
  description: "A celestial apsara, a curse, and a heroic rescue lead to the birth of a royal lineage.",
  accent: "#e0aaff",
  congratsMessage: "You've followed the story of Urvashi and Pururava! Well done! Onward to the next puzzle!",
  nextSlug: "the-choice-before-the-war",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "U_V_S__",
      clue: "A beautiful maiden who is created by Narayana. She is later taken by Indra to his abode, and made the head of apsaras.",
      answer: "URVASHI"
    },
    {
      id: 2,
      pattern: "B_______ M__I",
      clue: "The Muni who chooses her as the main character for his play - Lakshmi Swayamwara. Later on, when she makes a mistake in the play, she is cursed by him to become human and live on earth. (Hint - he is known to us as the father of Indian classical dance)",
      answer: "BHARATHA MUNI",
      size: "wide"
    },
    {
      id: 3,
      pattern: "K_S_",
      clue: "A Rakshasa who tries to abduct this Apsara.",
      answer: "KESI"
    },
    {
      id: 4,
      pattern: "P_R_____",
      clue: "A great and powerful King from the Chandravamsa who fights with the Rakshasa and rescues her.",
      answer: "PURURAVA"
    },
    {
      id: 5,
      pattern: "A_U__",
      clue: "The child of this Apsara and King.",
      answer: "AYUSH"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Urvashi
      2: { x: 0, y: 1 }, //Bharatha Muni
      3: { x: 2, y: 1 }, //Kesi
      4: { x: 1, y: 2 }, //Pururava
      5: { x: 1, y: 3 }  //Ayush
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["curses her"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["tries to abduct her"] },
      { from: 4, to: 3, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["fights him"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["rescues her"] },
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["son"] }
    ]
  }
},
{
  id: 87,
  slug: "the-choice-before-the-war",
  title: "The Choice Before the War",
  description: "Before the great battle begins, an unusual choice is offered to the two rival princes.",
  accent: "#bde0fe",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-kings-great-penance",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "K______",
      clue: "Before the battle of Mahabharatha starts - this person gives a choice to two princes. He says that one of them can have him on their side of the battle, and that his Narayani Sena would fight for the other side.",
      answer: "KRISHNA"
    },
    {
      id: 2,
      pattern: "A_J___",
      clue: "The prince who chooses him over his army.",
      answer: "ARJUNA"
    },
    {
      id: 3,
      pattern: "D_________",
      clue: "The other prince who gets the Narayani Sena on his side",
      answer: "DURYODHANA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Krishna
      2: { x: 0, y: 1 }, //Arjuna
      3: { x: 2, y: 1 } //Duryodhana
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["chooses him"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["takes his army"] }
    ]
  }
},
{
  id: 88,
  slug: "the-kings-great-penance",
  title: "The Kings Great Penance",
  description: "A king's penance brings the celestial river down to earth, but divine intervention is needed to control her power.",
  accent: "#90dbf4",
  congratsMessage: "You traced the story of how the Ganga descended to earth! Well done! Onward to the next puzzle!",
  nextSlug: "the-birth-of-a-great-epic",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "B__G_R____",
      clue: "A king whose ancestors had been reduced to ashes, and for them to attain salvation, he wants a sacred river to descend from the heavens to the earth. For his, he performs a very severe penance.",
      answer: "BHAGIRATHA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "G_N__",
      clue: "She finally comes down, but flows with such force that she nearly submerges the earth.",
      answer: "GANGA"
    },
    {
      id: 3,
      pattern: "S_I__",
      clue: "The God who decides to make only a small fraction of her flow into the earth. Therefore, he holds her in his hair, which gives him the name Gangadhara.",
      answer: "SHIVA"
    },
    {
      id: 4,
      pattern: "J__N_",
      clue: "The Rishi whose ashrama is flooded by this river. Angered by this, he drinks the river. But when the king prays again, the river emerges from his ears, earning the name Jahnavi.",
      answer: "JAHNU"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Bhagiratha
      2: { x: 1, y: 1 }, //Ganga
      3: { x: 0, y: 2 }, //Shiva
      4: { x: 2, y: 2 }  //Jahnu
    },

    connections: [
      { from: 1, to: 2, label: ["brings her to earth"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["controls her descent"] },
      { from: 4, to: 2, sideOrigin:"left", sideTarget:"bottom", straight:true, label: ["drinks the river"] }
    ]
  }
},
{
  id: 89,
  slug: "the-birth-of-a-great-epic",
  title: "The Birth of a Great Epic",
  description: "A sage seeks help to record a monumental story, leading to a divine collaboration.",
  accent: "#e9c46a",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-secret-of-the-sanjeevani",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "V__S_",
      clue: "The son of Parashara and Satyavati, who had compiled the Vedas. He wanted to write the story of the Kurus, but didn't know anyone skilled enough to put it down in writing. He invokes a god to help him solve this problem.",
      answer: "VYASA"
    },
    {
      id: 2,
      pattern: "B_A___",
      clue: "The god, the creator of the three worlds, who appears before him, and suggests who can write down the epic for him.",
      answer: "BRAHMA"
    },
    {
      id: 3,
      pattern: "G_N____",
      clue: "The God who agrees to write down the epic, but with a condition that, while dictating, he must not let his pen pause even for a moment.",
      answer: "GANESHA"
    },
    {
      id: 4,
      pattern: "M___________",
      clue: "Name the epic!!!",
      answer: "MAHABHARATHA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Vyasa
      2: { x: 2, y: 0 }, //Brahma
      3: { x: 1, y: 1 }, //Ganesha
      4: { x: 1, y: 2 } //Mahabharatha
    },

    connections: [
      { from: 1, to: 2, label: ["invokes him"] },
      { from: 3, to: 4, label: ["writes the epic"] },
      { from: 1, to: 3, label: ["dictates the epic"] }
    ]
  }
},
{
  id: 90,
  slug: "the-secret-of-the-sanjeevani",
  title: "The Secret of the Sanjeevani",
  description: "The Devas devise a plan to learn the powerful mantra that could bring the fallen back to life.",
  accent: "#cdb4db",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-final-attempt-at-peace",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "S_U___CH____",
      clue: "The Guru of Rakshasas. Whenever Rakshasas were slain in battles by Devas, he would revive them with the Sanjeevani Mantra. This makes the gods frustrated.",
      answer: "SHUKRACHARYA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "K_C__",
      clue: "The son of Brihaspati, who is sent by the Devas to the ashram of this Guru, to learn the mantra.",
      answer: "KACHA"
    },
    {
      id: 3,
      pattern: "D_V__A__",
      clue: "The daughter of the Guru, who gradually falls in love with the son of Brihaspati. However, he leaves when he learns the Mantra and she curses him that he will never be able to revive anyone by chanting it.",
      answer: "DEVAYANI"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Shukracharya
      2: { x: 0, y: 1 }, //Kacha
      3: { x: 2, y: 1 } //Devayani
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["studies under him"] },
      { from: 1, to: 3, sideOrigin:"right", sideTarget:"top", straight:true, label: ["daughter"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["curses him"]}
    ]
  }
},
{
  id: 91,
  slug: "the-final-attempt-at-peace",
  title: "The Final Attempt at Peace",
  description: "Before the great war begins, a final message is carried to Hastinapura in the hope of avoiding bloodshed.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-fatal-game-of-dice",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "______A",
      clue: "The person who travels as a messenger to Hastinapur to give a message in one last attempt of peace. They attempt to capture him, and he assumes his cosmic form",
      answer: "KRISHNA"
    },
    {
      id: 2,
      pattern: "D_R______A",
      clue: "The prince who refuses to return the kingdom, or even 5 villages, to his cousins, even after they finish the terms of their exile.",
      answer: "DURYODHANA",
      size:"wide"

    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 },
      2: { x: 2, y: 0 }
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["tries to capture him"] }
    ]
  }
},
{
  id: 92,
  slug: "a-fatal-game-of-dice",
  title: "A Fatal Game of Dice",
  description: "Not the one played by Yudhishtira. A story of royal love, a game of dice, and a strange transformation shape the fate of a king.",
  accent: "#f1c0e8",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-wheel-in-the-mud",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "D_M___N__",
      clue: "Princess of Vidharba, daughter of King Bhima (not the Pandava), who falls in love with a prince from Nishadha Kingdom.",
      answer: "DAMAYANTI"
    },
    {
      id: 2,
      pattern: "N___",
      clue: "The prince from Nishadha, whom this princess chooses in her Swayamwara.",
      answer: "NALA"
    },
    {
      id: 3,
      pattern: "P_SH____",
      clue: "The brother of this prince, who invites him for a game of dice. After the prince loses, he snatches the kingdom and sends the king in exile.",
      answer: "PUSHKARA"
    },
    {
      id: 4,
      pattern: "K_RK_____",
      clue: "While in the forest, a serpent cries out to him for help. The prince helps him, but then the serpent bites him, which turns the prince into an ugly creature the size of a dwarf. What is the name of this serpent?",
      answer: "KARKOTAKA"
    },
    {
      id: 5,
      pattern: "B_H_K_",
      clue: "The tranformed prince now uses this new form as a disguise and goes to the court of Rituparna, where he works as a chef in the royal kitchen. Eventually, he regains his true form and is reunited with his wife. What is his name under disguise?",
      answer: "BAHUKA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Damayanti
      2: { x: 1, y: 1 }, //Nala
      3: { x: 0, y: 2 }, //Pushkara
      4: { x: 2, y: 2 }, //Karkota
      5: { x: 1, y: 3 }  //Bahuka
    },

    connections: [
      { from: 1, to: 2, label: ["chooses him"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["defeats him in dice"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"right", straight:true, label: ["bites him"] },
      { from: 2, to: 5, label: ["disguise"] }
    ]
  }
},
{
  id: 93,
  slug: "the-wheel-in-the-mud",
  title: "The Wheel in the Mud",
  description: "During a decisive duel in the great war, strategy, fate, and hesitation collide on the battlefield.",
  accent: "#c37e61",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-fall-of-a-tyrant",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "S__L__",
      clue: "The King of Madra, who is manipulated into fighting for Duryadhana's side, although he is the maternal uncle of the Pandavas.",
      answer: "SHALYA"
    },
    {
      id: 2,
      pattern: "K_R__",
      clue: "Name the warrior for which the above character become a charioteer during the Mahabharatha war?",
      answer: "KARNA"
    },
    {
      id: 3,
      pattern: "Y___I__T___",
      clue: "The prince who requests his uncle to demoralise that warrior during his single combat with his brother.",
      answer: "YUDHISHTHIRA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "A__U__",
      clue: "The prince who faces the warrior. When that warrior's chariot wheel gets struck in the mud, he requests him to wait. But, with the urging from Krishna, he attacks the warrior.",
      answer: "ARJUNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //SHALYA
      2: { x: 1, y: 1 }, //KARNA
      3: { x: 0, y: 2 }, //YUDHISHTIRA
      4: { x: 2, y: 2 } //ARJUNA
    },

    connections: [
      { from: 1, to: 2, label: ["charioteer of"] },
      { from: 1, to: 3, sideOrigin:"left", sideTarget:"top", straight:true, label: ["nephew"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"right", straight:true, label: ["kills him"] },
      { from: 4, to: 3, sideOrigin:"left", sideTarget:"right", straight:true, noArrow:true, label: ["brothers"] }
    ]
  }
},
{
  id: 94,
  slug: "the-fall-of-a-tyrant",
  title: "The Fall of a Tyrant",
  description: "A powerful asura builds an impregnable fortress, but destiny arrives at his gates.",
  accent: "#ffd166",
  congratsMessage: "You followed the story of the fall of Narakasura. Well done! Onward to the next puzzle!",
  nextSlug: "a-princess-and-a-heros-son",
  rowHeight: 270,

  nodes: [
    {
      id: 1,
      pattern: "N_R___S___",
      clue: "A powerful Rakshasa who had captured 16,000 women. He also stole the divine earrings of Aditi, who is the mother of Gods.",
      answer: "NARAKASURA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "M_R_",
      clue: "The great asura architect, who had designed the city of the above Rakshasa with rings of fire, wind, water, and self-shooting weapons and traps at the corners.",
      answer: "MURA"
    },
    {
      id: 3,
      pattern: "K_I___A",
      clue: "The God who kills the above two Rakshasas.",
      answer: "KRISHNA"
    },
    {
      id: 4,
      pattern: "S_T__B____",
      clue: "The wife of the above God, who helps him defeat this Rakshasa.",
      answer: "SATYABHAMA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },

      2: { x: 0, y: 1 },
      3: { x: 2, y: 1 },

      4: { x: 1, y: 2 }
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["builds his fortress"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["kills him"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["kills him"] },
      { from: 4, to: 3, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["assists him"] }
    ]
  }
},
{
  id: 95,
  slug: "a-princess-and-a-heros-son",
  title: "A Princess and a Hero’s Son",
  description: "A childhood wish, a warrior’s valor, and a marriage that links two great lineages.",
  accent: "#7ef1ae",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-daughter-of-the-goddess",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "UT_H_R_",
      clue: "The princess of Matsya. During her childhood, she had asked her brother to get her the clothes of defeated Kaurava warriors.",
      answer: "UTTHARA"
    },
    {
      id: 2,
      pattern: "A_J___",
      clue: "The warrior who steered the chariot of the Matsya prince, and the one whose conch is the Devadutta.",
      answer: "ARJUNA"
    },
    {
      id: 3,
      pattern: "A_H_M____",
      clue: "The son of this warrior and Subhadra, who is married to this princess.",
      answer: "ABHIMANYU"
    }
  ],

  layout: {
    positions: {
      2: { x: 1, y: 0 },

      1: { x: 0, y: 1 },
      3: { x: 2, y: 1 }
    },

    connections: [
      { from: 2, to: 3, straight: true, label: ["son"] },
      { from: 3, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["marries her"] }
    ]
  }
},
{
  id: 96,
  slug: "a-daughter-of-the-goddess",
  title: "A Daughter of the Goddess",
  description: "A wish beneath a celestial tree leads to a destiny that crosses paths with demons and kings.",
  accent: "#f1c0e8",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "when-the-gods-forged-a-warrior",
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "AS____S_N____",
      clue: "The daughter of Parvati. She is born when Parvati sees a Kalpavriksha (wishing tree), and desires to have a daughter.",
      answer: "ASHOKASUNDARI",
      size: "wide"
    },
    {
      id: 2,
      pattern: "H_N__",
      clue: "A Rakshasa who sees this girl and falls in love with her. He kidnaps her.",
      answer: "HUNDA"
    },
    {
      id: 3,
      pattern: "N_H__H_",
      clue: "The King who was raised by Vasishta and Arundhati. He kills the Rakshasa and marries the daughter of Parvati. In time he became a very powerful emperor who could defeat gods. He even dethroned Indra for a short period of time. (Hint - this character appears briefly in the Mahabharatha as a python that attacks Bhima)",
      answer: "NAHUSHA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Ashokasundari
      2: { x: 0, y: 1 }, //Hunda
      3: { x: 2, y: 1 }  //Nahusha
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["kidnaps her"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["kills him"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["marries her"] }
    ]
  }
},
{
  id: 97,
  slug: "when-the-gods-forged-a-warrior",
  title: "When the Gods forged a Warrior",
  description: "A chain of ambition and vengeance leads to the rise of a fearsome asura and the creation of a divine warrior.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-prince-and-the-monkey",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "R_M___",
      clue: "An Asura who desired special powers, and began to seek them with intense meditation and prayers to Agni.",
      answer: "RAMBHA"
    },
    {
      id: 2,
      pattern: "K_R_____",
      clue: "His brother, who also desired powers and prayed to Lord Varuna. Worried that he might obtain any boons that could be used against gods, Indra takes the form of a crocodile and kills him.",
      answer: "KARAMBHA"
    },
    {
      id: 3,
      pattern: "M_H____SU__",
      clue: "The Rakshasa born from the above King. As he grew up, he learnt the story behind his uncles death and decided to wage a war against Indra. Who is he? (Hint - his name refers to a buffalo)",
      answer: "MAHISHASURA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "D_R__",
      clue: "A divine goddess created to defeat this Rakshasa who rides a tiger. She is also given different gods characteristic weapons - the trident from Shiva, the Sudarshana Chakra from Vishnu, a small water pot from Brahma, a bow from Vayu, arrows from Surya, thunderbolt from Indra, a spear from Agni, and a conch from Varuna. Name this fearsome Avatara of the Goddess.",
      answer: "DURGA",
      size: "large"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Rambha
      2: { x: 2, y: 0 }, //Karambha
      3: { x: 1, y: 1 }, //Mahishasura
      4: { x: 1, y: 2 }  //Durga
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", noArrow:true,label: ["brothers"]},
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"left", straight:true, label: ["son"] },
      { from: 4, to: 3, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["kills him"] }
    ]
  }
},
{
  id: 98,
  slug: "a-prince-and-the-monkey",
  title: "A Prince and the Monkey",
  description: "A quest for a rare flower leads a Pandava to an unexpected encounter in the mountains.",
  accent: "#a8dadc",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-king-who-borrowed-youth",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "D___P___",
      clue: "The queen of Indraprastha. One day, during the 13-year exile, she finds a very beautiful flower. She is bewitched by it and asks her husband to get her more such flowers.",
      answer: "DRAUPADI"
    },
    {
      id: 2,
      pattern: "B_I__",
      clue: "The prince who sets out on the search for those flowers. He searches through the Gandhamadana mountain, and finally exhausted, takes a bathe in the lake. When he is coming out, his way is blocked by the tail of an old monkey. Name this prince.",
      answer: "BHIMA"
    },
    {
      id: 3,
      pattern: "H_N____",
      clue: "Who is this monkey? He asks the prince to move his tail, but the prince finds that he is unable to. (Hintn- in the final battle, he is seated on top of Arjuna's chariot)",
      answer: "HANUMAN"
    },
    {
      id: 4,
      pattern: "K_B___",
      clue: "The prince finally goes to the garden and gets the flowers (after a small fight with the guards). Who does this garden belong to?",
      answer: "KUBERA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Draupadi
      2: { x: 2, y: 0 }, //Bhima
      3: { x: 1, y: 1 }, //Hanuman
      4: { x: 1, y: 2 } //Kubera
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"right", sideTarget:"left", straight:true, label: ["wife of"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["blocks his path"] },
      { from: 2, to: 4, sideOrigin:"bottom", sideTarget:"right", label: ["enters his garden"] }
    ]
  }
},
{
  id: 99,
  slug: "the-king-who-borrowed-youth",
  title: "The King Who Borrowed Youth",
  description: "A king cursed with old age seeks youth from his sons, shaping the destinies of two great lineages.",
  accent: "#e9c46a",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-cure-on-the-mountain",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D_V__A__",
      clue: "The Daughter of the Guru of Rakshasas. One day, she gets into an argument with a princess (with regard to a mix-up with clothes) and is thrown by the princess into a well.",
      answer: "DEVAYANI"
    },
    {
      id: 2,
      pattern: "Y_Y___",
      clue: "The King who finds a girl stranded in a well and rescues her. They eventually get married.",
      answer: "YAYATI"
    },
    {
      id: 3,
      pattern: "SH__M____A",
      clue: "The princess who is made a slave and made to accompany the person on the left after her marriage.",
      answer: "SHARMISHTA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "_H_K__CH__Y_",
      clue: "The Guru of Rakshasa who curses a King that he would lose his youth. But he later relents and tells him that he can exchange his old age with someone's youth temporarily. Who is the person who has given this curse?",
      answer: "SHUKRACHARYA",
      size: "wide"
    },
    {
      id: 5,
      pattern: "Y_D_",
      clue: "When requested by his father to exchange his youth for a while, he refuses. Because of this, he is cursed that none in his lineage would ever rule a Kingdom.",
      answer: "YADU"
    },
    {
      id: 6,
      pattern: "P__U",
      clue: "The son of the second queen, who agrees to exchange his youth with his father. After his father enjoys it for many, many years, he returns it back to his him. This prince eventually becomes the Emperor and his lineage rules Hastinapur. His descendants include the Pandavas and the Kauravas.",
      answer: "PURU"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 2 }, //Devayani
      2: { x: 1, y: 1 }, //Yayati
      3: { x: 2, y: 2 }, //Sharmishta      
      4: { x: 1, y: 0 }, //Shukracharya
      5: { x: 0, y: 3 }, //Yadu
      6: { x: 2, y: 3 }  //Puru
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"top", straight:true, label: ["rescues"] },
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"top", straight:true, label: ["secretly marries her"] },
      { from: 4, to: 2, label: ["curses him"] },
      { from: 2, to: 5, sideOrigin:"bottom", sideTarget:"right", straight:true, label: ["son"] },
      { from: 2, to: 6, sideOrigin:"bottom", sideTarget:"left", straight:true, label: ["son"] },
      { from: 3, to: 6, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["son"] },
      { from: 1, to: 5, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["son"] }
    ]
  }
},
{
  id: 100,
  slug: "a-cure-on-the-mountain",
  title: "A Cure on the Mountain",
  description: "When a fallen warrior lies between life and death, a desperate search begins for a miraculous cure.",
  accent: "#90dbf4",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "when-the-vow-was-almost-broken",
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "L_K___A__",
      clue: "Hit by a powerful astra by the King of Lanka, he falls unconscious.",
      answer: "LAKSHMANA"
    },
    {
      id: 2,
      pattern: "R___",
      clue: "His brother (who thinks that he has died), is devastated and is prepared to die too.",
      answer: "RAMA"
    },
    {
      id: 3,
      pattern: "S_SH_N_",
      clue: "A physician who tells him that he is merely unconscious, and can be revived by a herb.",
      answer: "SUSHENA"
    },
    {
      id: 4,
      pattern: "H_N___N",
      clue: "He is unable to identify the herbs which are needed to revive the prince, so he uproots the entire mountain and brings it.",
      answer: "HANUMAN"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Lakshmana
      2: { x: 0, y: 1 }, //Rama
      3: { x: 2, y: 1 }, //Sushena
      4: { x: 1, y: 2 } //Hanuman
    },

    connections: [
      { from: 1, to: 2, sideOrigin: "left", sideTarget: "top", straight: true, label: ["brother"] },
      { from: 3, to: 2, sideOrigin: "left", sideTarget: "right"}
    ]
  }
},
{
  id: 101,
  slug: "when-the-vow-was-almost-broken",
  title: "When The Vow Was Almost Broken",
  description: "During a fierce battle, a vow is almost broken when a warrior refuses to strike his own grandfather.",
  accent: "#b8c0ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-king-at-the-hermitage",
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "__I___A",
      clue: "A very powerful warrior who wreaks havoc on the Pandavas side, during the war. His elephant division surrounds one of the Pandavas.",
      answer: "BHISHMA"
    },
    {
      id: 2,
      pattern: "___U_A",
      clue: "The Pandava prince who fights back by breaking his bow.",
      answer: "ARJUNA"
    },
    {
      id: 3,
      pattern: "S_T_A_I",
      clue: "A powerful Yadava warrior who rushes to the aid of the Pandava prince.",
      answer: "SATYAKI"
    },
    {
      id: 4,
      pattern: "K_I___A",
      clue: "The one who had taken a vow to never take up arms during the battle. However, seeing the prince hesitating to kill his grandfather, gets angry and jumps out of the chariot with the Sudarshana Chakra on his finger.",
      answer: "KRISHNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Bhishma
      2: { x: 0, y: 1 }, //Arjuna
      3: { x: 2, y: 1 }, //Satyaki
      4: { x: 1, y: 2 }  //Krishna
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["fights"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["rushes to aid"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["charioteer of"] }
    ]
  }
},
{
  id: 102,
  slug: "a-king-at-the-hermitage",
  title: "A King at the Hermitage",
  description: "A visit to a quiet hermitage turns into a clash between royal power and the quiet strength of a sage.",
  accent: "#84a98c",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-weapon-meant-for-another",
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "A___D__T_",
      clue: "The eighth daughter of Kardama and Devahuti.",
      answer: "ARUNDHATI"
    },
    {
      id: 2,
      pattern: "V_____T_",
      clue: "The sage who is her husband, and one of the saptarishis.",
      answer: "VASISHTA"
    },
    {
      id: 3,
      pattern: "N___I__",
      clue: "The cow given to the couple by Brahma, which fulfils all their needs.",
      answer: "NANDINI"
    },
    {
      id: 4,
      pattern: "V___W_M____",
      clue: "The King to comes to visit their ashrama, and desires to have this cow, and tries to have it by force. Later on, this King becomes a great sage.",
      answer: "VISHWAMITRA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 1 }, //Arundhati
      2: { x: 2, y: 1 }, //Vasishta
      3: { x: 1, y: 0 }, //Nandini
      4: { x: 1, y: 2 }  //Vishwamitra
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"right", sideTarget:"left", straight:true, label: ["wife of"] },
      { from: 3, to: 2, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["belongs to"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["tries to seize the cow of"] }
    ]
  }
},
{
  id: 103,
  slug: "a-weapon-meant-for-another",
  title: "A Weapon Meant for Another",
  description: "A dangerous weapon threatens to turn the tide of battle, but a clever plan forces it to be used too soon.",
  accent: "#f4a261",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-transformation-in-the-sacred-grove",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__R__",
      clue: "The warrior who possesses Indra's Vajra with him. He is deadly with it.",
      answer: "KARNA"
    },
    {
      id: 2,
      pattern: "__IS___",
      clue: "The character who is worried that the Vajra can be used to kill the powerful archer, and therefore devises a plan involving a young Rakshasa.",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "G_____K____",
      clue: "The son of one of the Pandavas sent by this charioteer to create extreme destruction on the Kaurava's side, so that they are forced to use the Vajra on him.",
      answer: "GHATOTKACHA",
      size:"wide"
    },
    {
      id: 4,
      pattern: "_____A",
      clue: "The warrior who is thus protected from that weapon, he is the one who finally kills the one having the Vajra.",
      answer: "ARJUNA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Karna
      2: { x: 0, y: 1 }, //Krishna
      3: { x: 2, y: 1 }, //Ghatotkacha
      4: { x: 1, y: 2 }  //Arjuna
    },

    connections: [
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["uses the weapon on"] },
      { from: 2, to: 4, sideOrigin:"bottom", sideTarget:"left", straight:true, label: ["charioteer of"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["finally kills"] }
    ]
  }
},
{
  id: 104,
  slug: "the-transformation-in-the-sacred-grove",
  title: "A Transformation in the Sacred Grove",
  description: "A prince wanders into a divine garden and is transformed forever, setting in motion the beginning of a great lineage.",
  accent: "#cdb4db",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-curse-on-the-god-of-justice",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_L_",
      clue: "The prince who had wandered deep into a forest, and accidentally enters Parvati's garden. As a result of the curse, he transforms into a woman. Name this woman.",
      answer: "ILA"
    },
    {
      id: 2,
      pattern: "B__H_",
      clue: "The god of planet mercury, and the sun of Chandra, who falls in love with this woman and marries her.",
      answer: "BUDHA"
    },
    {
      id: 3,
      pattern: "P__U___A",
      clue: "The son of these two. He's a great warrior and helps Indra in various battles. He is the man who thus introduced the Chandravamsha.",
      answer: "PURURAVA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 1 }, //Ila
      2: { x: 2, y: 1 }, //Budha
      3: { x: 1, y: 2 }  //Pururava
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["marries"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["parent of"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["parent of"] }
    ]
  }
},
{
  id: 105,
  slug: "a-curse-on-the-god-of-justice",
  title: "A Curse on the God of Justice",
  description: "A sage who suffers a terrible punishment questions the very nature of justice, setting in motion a destiny that will influence the course of a great war.",
  accent: "#8ecae6",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-guardian-of-the-door",
  rowHeight: 260,

  nodes: [
    {
      id: 1,
      pattern: "M___A__A",
      clue: "A sage who had taken the vow of silence. He was wrongfully accused of a robbery and underwent a painful punishment.",
      answer: "MANDAVYA"
    },
    {
      id: 2,
      pattern: "___A",
      clue: "The God of Dharma, who is approached by this sage. He is asked about what he has done to undergo such pain, and this God reveals that in his past life - he used to torture butterflies by inserting twigs into its bodies. In anger at the disproportionate punishment, the sage curses this God to be born as a human, with great knowledge of Dharma - but completely uneffective in the circumstances.",
      answer: "YAMA"
    },
    {
      id: 3,
      pattern: "V___R_",
      clue: "The reincarnation of the God above. In this life - he would be constantly advising his brother and nephew about the path of righteousness, but his advice is continuously ignored, and this eventually leads to a massive war.",
      answer: "VIDURA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Mandavya
      2: { x: 0, y: 1 }, //Yama
      3: { x: 2, y: 1 }  //Vidura
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"left", sideTarget:"top", straight:true, label: ["curses"] },
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"left", straight:true, label: ["reincarnates as"] }
    ]
  }
},
{
  id: 106,
  slug: "the-guardian-of-the-door",
  title: "The Guardian of the Door",
  description: "A small moment of disobedience leads to the creation of a new guardian, whose unusual head comes from an unexpected source.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-warrior-on-the-bed-of-arrows",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "N___I",
      clue: "One of the Ganas of the God of Kailasa. He is asked by Parvati to be posted at her door and not let anyone in.",
      answer: "NANDI"
    },
    {
      id: 2,
      pattern: "S___A",
      clue: "However, when the God of Kailasa comes, he is led inside.",
      answer: "SHIVA"
    },
    {
      id: 3,
      pattern: "G__E___",
      clue: "Due to this, Parvati decides to have a Gana who is her own. She gathers a saffron paste from her own body and sculpts a boy. Who is he?",
      answer: "GANESHA"
    },
    {
      id: 4,
      pattern: "G___S__A",
      clue: "The Rakshasa whose head was taken, and placed on the boys body.",
      answer: "GAJASURA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 1 }, //Nandi
      2: { x: 2, y: 1 }, //Shiva
      3: { x: 1, y: 0 }, //Ganesha
      4: { x: 1, y: 2 }  //Gajasura
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"right", sideTarget:"left", straight:true, label: ["lets inside"] },
      { from: 2, to: 3, sideOrigin:"top", sideTarget:"right", straight:true, label: ["father of"] }
    ]
  }
},
{
  id: 107,
  slug: "the-warrior-on-the-bed-of-arrows",
  title: "The Warrior on the Bed of Arrows",
  description: "After a devastating day of battle, a fallen warrior lies upon a bed of arrows and continues to guide the princes who stand before him.",
  accent: "#e5989b",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-princess-born-of-a-boon",
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "B_I___A",
      clue: "The great warrior who is struck repetitively by a volley of arrows, on the tenth day of war. The arrows were so numerous and precisely placed that they held his body above the ground, preventing him from touching the earth - however, he doesn't die as he has the boon to choose his time of death.",
      answer: "BHISHMA"
    },
    {
      id: 2,
      pattern: "A__U_A",
      clue: "The prince who shoots an arrow into the ground, causing water to come out and quench the warrior's thirst.",
      answer: "ARJUNA"
    },
    {
      id: 3,
      pattern: "Y_____H_I__",
      clue: "The prince to whom he narrates the thousand names of Lord Vishnu. (Vishnu Sahasranamam)",
      answer: "YUDHISHTIRA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Bhishma
      2: { x: 0, y: 1 }, //Arjuna
      3: { x: 2, y: 1 }  //Yudhishtira
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["gives water to"] },
      { from: 1, to: 3, sideOrigin:"right", sideTarget:"top", straight:true, label: ["narrates the thousand names to"] }
    ]
  }
},
{
  id: 108,
  slug: "a-princess-born-of-a-boon",
  title: "A Princess Born of a Boon",
  description: "A princess blessed in a previous life marries a powerful king, but their story becomes tied to one of the greatest battles ever fought.",
  accent: "#f6bd60",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "end",
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "M___S__A",
      clue: "The Architect of Asuras.",
      answer: "MAYASURA"
    },
    {
      id: 2,
      pattern: "M___O___I",
      clue: "A princess who was a frog in her previous life. This frog saves some Rishi from drinking poisonous water, and is given a boon that in her next life, she would be very beautiful, and would marry a very learnt man who was an emperor.",
      answer: "MANDODARI"
    },
    {
      id: 3,
      pattern: "R___N_",
      clue: "The King that is married to her. He was the greatest warrior of the time and a highly learnt man.",
      answer: "RAVANA"
    },
    {
      id: 4,
      pattern: "R__A",
      clue: "The prince who kills this King.",
      answer: "RAMA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 1 }, //Mayasura
      2: { x: 1, y: 0 }, //Mandodari
      3: { x: 2, y: 1 }, //Ravana
      4: { x: 1, y: 2 }  //Rama
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["daughter"] },
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"top", straight:true, label: ["married to"] },
      { from: 4, to: 3, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["kills"] }
    ]
  }
}
];

