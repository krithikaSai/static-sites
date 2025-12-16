// puzzles.js
const puzzles = [
  {
    id: 1,
    slug: "mahabharata-1",
    title: "The Lineage of Strength",
    description: "This puzzle is related to the family of one of the Pandavas. Find out how well you know the (slightly) lesser known stories from the Mahabharatha! You can use hints when needed.",
    accent: "#d3a42c",
    congratsMessage: "Congratulations on mapping the lineage of Bhima! Onward to the next puranic puzzle!",
    nextSlug: "mahabharata-2",
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
    1: { x: 0,   y: 0 },   // top-left
    2: { x: 2,   y: 0 },   // top-right

    3: { x: 1,   y: 1 },   // middle-left-ish
    4: { x: 3,   y: 1 },   // middle-right-ish

    5: { x: 2,   y: 2 }    // bottom-middle
}
,

  connections: [
    { from: 1, to: 3 },
    { from: 2, to: 3 },
    { from: 3, to: 5 },
    { from: 4, to: 5 }
  ]
}

  },
  {
  id: 2,
  slug: "mahabharata-2",
  title: "Gurus and Grudges",
  description: "This puzzle is a combination of relationships and dynamics that are twisted by rivalry, friendship and vengeance. It is related to the epic of Mahabharatha. Can you unravel the story?",
  accent: "#9b6dfd",
  congratsMessage: "You've successfully unraveled a web of betrayals, oaths, and revenge. Nicely done - onwards to the next puzzle.",
  nextSlug: "mahabharata-3", 
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
  slug: "mahabharata-3",
  title: "A dynasty born in battle",
  description: "This puzzle explores the lineage of a powerful fallen hero in the Mahabharatha war. His descendents shaped the future after the Kurukshetra war. See if you can figure it out.",
  accent: "#7fcfe3",
  congratsMessage: "Nice job solving this puzzle! Try your luck on the next one now.",
  nextSlug: "matsya-1",   
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
  slug: "matsya-1",
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
  congratsMessage: "You successfully navigated through a puzzle filled with gods, demons, poison, nectar, avatars and deception. On to the next puzzle!",
  nextSlug: "khandava-forest",
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
  slug: "khandava-forest",
  title: "The Warriors who fed the Flame",
  description: "The hunger of the fire-god sets off a chain of alliances, rescues, and creations that reshape the Pandavas’ destiny.",
  accent: "#ffb3c6",
  congratsMessage: "Congrats on getting this Mahabharatha puzzle right! On to the next one!",
  nextSlug: "indra-guru-fallout",
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
  slug: "indra-guru-fallout",
  title: "Arrogance to Aftermath",
  description: "One God's pride sets off a chain reaction: the abandonment of their guru, the rise of a new teacher, the birth of a feared asura, and the ultimate sacrifice of a sage. Piece together the events if you can.",
  accent: "#ffd27b",
  congratsMessage: "Nicely done! Onto the next puzzle.",
  nextSlug: "shantanu-lineage",
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
  slug: "shantanu-lineage",
  title: "The Rise of the Kuru Line",
  description: "Solve this puzzle about the ancestors of the Pandavas and Kauravas, the curses, vows, tragedies, and events that shaped the destiny of the Kuru dynasty.",
  accent: "#12e112ff",
  congratsMessage: "Great job! You’ve followed the Kuru family through disasters, vows, and reincarnations. On to the next puzzle!",
  nextSlug: "dhruva-1",
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
    },    

    {
      id: 12,
      pattern: "D___T________",
      clue: "The elder prince, but ineligible to become a king due to his visual disability.",
      answer: "DHRITARASHTRA",
      size: "wide"
    },
    {
      id: 13,
      pattern: "__N__",
      clue: "The younger brother, powerful and virtuous and the father of the Pandavas.",
      answer: "PANDU",
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
      10: { x: 0, y: 5 },

      // Dhritarashtra 
      12: { x: 1, y: 4 },

      //Pandu
      13: { x: 2, y: 4 }
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
      { from: 9, to: 10 },


      // Ambika to Dhritarashtra
      { from: 7, to: 12, label: ["son"] },

      // Ambalika to Pandu
      { from: 8, to: 13, label: ["son"] }

    ]
  }
},

{
  id: 9,
  slug: "dhruva-1",
  title: "The Penance That Lit the Sky",
  description: "Explore the immense devotion of a young prince whose meditation moved Lord Narayana and earned him an eternal place in the heavens.",
  accent: "#ffffff",
  congratsMessage:
    "Dhruva’s unshakeable devotion carried him to the heavens. You solved it beautifully! On to the next one!",
  nextSlug: "daksha-lineage",        
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
  slug: "daksha-lineage",
  title: "Brihaspati Yagna",
  description:
    "A grand sacrifice, an unforgivable slight, and a big set of consequences. Solve it if you can.",
  accent: "#ff00aa",
  congratsMessage:
    "From Daksha’s pride to Parvati’s devotion, you traced the journey beautifully. On to the next one!",
  nextSlug: "jaya-vijaya-lineage", 
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
  slug: "jaya-vijaya-lineage",
  title: "The Fall from the Seventh Gate",
  description: "A single incident at the gates of Vaikuntha sets off a chain of rebirths across multiple Yugas. Follow the journey of the gatekeepers who reincarnate again and again as powerful rakshasas, and finally meet their end at the hands of the very God they served, so that they could reunite with him again.",
  accent: "#0077ffff",
  congratsMessage: "You successfully solved a puzzle that spans different realms and lifetimes! From divine service to banishment and finally to release — well solved. On to the next one.",
  nextSlug: "end", 
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
}






];

