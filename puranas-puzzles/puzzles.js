// puzzles.js
const puzzles = [
  {
  id: 1,
  slug: "samudra-manthana",
  title: "The Churning of the Milky Ocean (Samudra Manthana)",
  description: "Try to identify the main characters, outcomes and events of the legendary churning. You can use hints when needed.",
  accent: "#8bc6ff",
  congratsMessage: "Congratulations on identifying all the major events of Samudra Manthana. On to the next puzzle!",
  nextSlug: "from-best-friends-to-enemies",
  trivia: `
    <p>One day, Rishi Durvasa was returning from Vaikuntha, and he met Indra on the way. Durvasa presented him with a flower garland which had been given to him by Lord Vishnu. Indra, being in a proud and arrogant mood, took the garland and put it around the neck of his elephant.</p>
    <p>The elephant threw the garland on the ground and trampled upon it. This enraged Durvasa, who cursed him and his three worlds to lose their prosperity and glory.</p>
    <p>Indra, pale and lustreless with the effects of the curse, went to Brahma on Mount Meru. Brahma saw that the heavens and earth had lost their glory and splendor, all religious practices had been stopped and the Gods had become weak. As a result, more and more Devas were losing their lives day by day, and the asuras seemed to gather more and more life and energy. Brahma did not know what to do, so he, Indra, and some other Devas went to Vishnu and asked for help.</p>
    <p>Lord Vishnu advised them that since the asuras were now more powerful, to make peace with them and take their help in churning the Milky Ocean. As a result of this, Amrita would come out, and drinking it would give them immortality. He tells them to throw all the plants, herbs and creepers into the ocean - to make Mount Mandara the churning rod, and Vasuki, the King of Serpents, the churning rope. He foretells that many things would arise from the churning, and not to express any anger, greed, or desire for them.</p>
    <p>Indra and the Devas then went to Bali, the King of Asuras, and explained the plan of churning the ocean. Bali agreed to the plans, and the Devas and Asuras went to Mount Mandara and uprooted the golden mountain. Vasuki agreed to be the rope, provided he got a share of the Amrita.</p>
    <p>At first, the Devas caught the head and the asuras caught the tail. But the asuras complained that it was inauspicious to hold the tail of a serpent, so Vishnu smiled at them and handed over the mouth of the snake. The Devas now went to the tail end.</p>
    <p>The mountain soon proved to be too heavy, even for the joint strength of Devas and Asuras. It sank to the bottom of the ocean. Then, Sri Vishnu assumed the form of a Giant Tortoise and dived to the bottom of the ocean and lifted it up on His back.</p>
    <p>As the churning continued, fire and smoke came out of the thousand mouths of Vasuki. The Devas and Asuras started suffocating. Vishnu revived them by sending down clouds, rain and wind.</p>
    <p>The first thing that came out of the ocean was a dangerous poison. Its fumes rose to the air and spread on all sides. The animals of the sea, sky, and land became choked by it, and in sheer terror, took refuge at the feet of Lord Shiva. Shiva gathered all the poison in the palm of his hand and swallowed it up. Parvati, fearing for her Lord, quickly caught at his throat. The poison could not go down, and got absorbed in his neck. That is why Lord Shiva is known as Sri Neelakantha. A few drops of poison fell to the ground, which were quickly swallowed by snakes, scorpions and other poisonous animals and plants.</p>
    <p>Next, a sacred sacrificial vessel known as Surabhi, came out of the ocean, which was claimed by the Rishis.</p>
    <p>Next came a white horse called Ucchaishrava, which was taken by Bali, followed by Airavata, which was taken by Indra.</p>
    <p>Next came the beautiful Kaustubha gem, which went to adorn the chest of Sri Vishnu.</p>
    <p>After this came the Parijata tree which fulfills all wishes, and then a group of beautiful apsaras.</p>
    <p>Next came someone who filled both the Devas and Asuras with awe and wonder - Goddess Lakshmi! She stood in all splendor and brilliance, with a garland of lotuses in her hand. She went up to Sri Hari and placed it on His neck.</p>
    <p>Brahma, Shiva and all the Devas worshipped her, and Brahmins chanted Vedic hymns and sprinkled on her holy water from golden pots.</p>
    <p>Next, came Varuni, who is the Goddess of all intoxicating drinks. She was claimed by the Asuras.</p>
    <p>Next came a youth named Dhanvantri (who was an amsa of Lord Vishnu), carrying a jar of Amrita.</p>
    <p>When the Asuras saw this, they were filled with greed, and they snatched the jar from the hands of the divine youth, and started fighting amongst themselves as to who should get it first.</p>
    <p>Then, Lord Vishnu took the form of a beautiful and enchanting young girl called Mohini. The Asuras at once fell in love with her - they gave her the pot of Amrita and asked her to distribute it to whomever she pleased.</p>
    <p>The Devas and Asuras sat down in two rows, and Mohini began distributing the Amrita among the Devas first. By the time she had finished with them, the jar was empty. But one of the Daityas named Rahu had disguised himself as a Deva and sat amongst them. But before he could swallow the nectar, the Sun and the Moon spotted him, and Sri Vishnu cut off his head with his Chakra.</p>
    <p>But since his head had tasted the Amrita, it was immortal. The Lord turned it into the planet Rahu, which causes eclipses of the Sun and the Moon, showing his eternal enmity to them.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred from: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "The name of the terrible poison that came up during the churning of the ocean.",
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
      clue: "The goddess who held her husband's throat so the poison would not pass down.",
      answer: "PARVATI"
    },

    // AIRAVATA CLUSTER
    {
      id: 9,
      pattern: "A_R_____",
      clue: "A famous white elephant that emerged during the churning.",
      answer: "AIRAVATA"
    },
    {
      id: 10,
      pattern: "I____",
      clue: "The one who claimed the elephant, he's the King of Gods (and also partially the reason why Samudra Manthana had to take place)",
      answer: "INDRA"
    },

    // LAKSHMI ROW
    {
      id: 11,
      pattern: "L_K____",
      clue: "The goddess that emerged during the churning of the ocean, and wed Lord Vishnu.",
      answer: "LAKSHMI"
    },

    // AMRITA
    {
      id: 12,
      pattern: "A_____",
      clue: "The most awaited offering of the Samudra Manthana that both the Devas and Daityas were eager for.",
      answer: "AMRITA"
    },
    {
      id: 13,
      pattern: "M____I",
      clue: "The enchanting woman that Lord Vishnu took the form of, to distribute the above substance among the Devas and Daityas.",
      answer: "MOHINI"
    },
    {
      id: 14,
      pattern: "R___",
      clue: "An Asura who disguised himself as a Deva. The Sun and the Moon found this out, so Vishnu beheaded him, and he turns into a planet. To this day, this planet has enmity with the Sun and the Moon.",
      answer: "RAHU"
    }
  ],

  layout: {
    positions: {
      // ROW 0
      1:   { x: 0, y: 0 }, //Daityas
      100: { x: 1, y: 0 },   // IMAGE CENTER
      2:   { x: 2, y: 0 }, //Devas

      // ROW 1
      3: { x: 0, y: 1 }, //Meru
      4: { x: 1, y: 1 }, //Vasuki
      5: { x: 2, y: 1 }, //Tortoise

      // ROW 2
      6: { x: 0, y: 2 }, //Halahala
      7: { x: 1, y: 3 }, //Shiva
      8: { x: 2, y: 3 }, //Parvati

      // ROW 3
      9:  { x: 0, y: 4 }, //Airavata
      10: { x: 1, y: 4 }, //Indra

      // ROW 4
      11: { x: 1, y: 5 }, //Lakshmi

      // ROW 5
      12: { x: 1, y: 6 }, //Amrita

      // ROW 6
      13: { x: 0, y: 7 }, //Mohini
      14: { x: 2, y: 7 } //Rahu
    },

    connections: [
      // Poison cluster
      { from: 6, to: 7, noArrow: true, straight:true, sideOrigin:"right", sideTarget:"top" },
      { from: 7, to: 8, noArrow: true, straight:true, sideOrigin:"right", sideTarget:"left" },

      // Airavata cluster
      { from: 9, to: 10, straight: true, noArrow: true, sideOrigin:"right", sideTarget:"left" },

      // Amrita → Mohini → Rahu
      { from: 12, to: 13, sideOrigin:"bottom", sideTarget:"top" },   // arrow
      { 
        from: 13,
        to: 14,
        sideOrigin:"right", sideTarget:"left",
        label: "killed him with his Sudarshana Chakra"
      }
    ]
  }
},

{
  id: 2,
  slug: "from-best-friends-to-enemies",
  title: "From Best Friends To Enemies",
  description: "This puzzle is a combination of relationships and dynamics that are twisted by rivalry, friendship and vengeance. It is related to the epic of Mahabharatha. Can you unravel the story?",
  accent: "#ff9f1c",
  congratsMessage: "Nice job solving this puzzle! Try your luck on the next one now.",
  nextSlug: "a-dynasty-born-in-battle", 
  trivia: `
    <p>Drupada, the prince of Panchala, was sent to Sage Bharadwaja's gurukula to study. There, he met the Sage's son – Drona, who was an outstanding archer. The two of them soon became inseparable, and studied together, ate together and played together.</p>
    <p>Years went by and it was soon time for the two friends to go their separate ways. Then Drupada told Drona that it would eventually be his destiny to become the king of Panchala. Drupada promised that even though they were parting at that moment, whenever Drona was in need, he could come to him, and he would even share half his kingdom if he wanted.</p>
    <p>The years passed. Although Drona was intelligent, he was extremely poor. He tried to make some money by becoming a teacher and imparting his skills to others, but he wasn't very successful. In time, he married Kripi, the sister of Rishi Kripacharya, and they had a son named Ashwatthama, but his situation remained the same.</p>
    <p>One day, young Ashwatthama craved for some milk but there was no milk at home. His mother, helpless, mixed a little bit of rice flour with water and gave it to her son.</p>
    <p>Drona, who was observing this, couldn't take it anymore. He then remembered Drupada's words, and decided to go and ask his friend for a cow so that his child could drink milk every day. When he reached the royal gates of Panchala, he told the guard to tell the king that he was his friend Drona who had come to meet him.</p>
    <p>When Drupada was told this, he got nervous, and wondered if Drona had come to demand half of the kingdom, which he had promised to him in his youth.</p>
    <p>Before Drona could even say anything, Drupada declared that – while he had made a promise years ago, a friendship could only exist between two people of similar standing. Today, Drupada was the King and Drona was but a poor commoner. He requested Drona not to ask for something which did not befit his stature.</p>
    <p>Drona was humiliated by this, and responded that he had only come to ask for a cow. He said that since there was no match between them now, he would befriend him again when he obtained half his kingdom.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>One day, Drona encountered a few boys playing with a ball. Just as he was passing by them, the ball fell into a well, and the boys gathered around it, wondering how to get the ball back.</p>
    <p>Drona said with disdain that they seemed to be from a royal family by their appearance, and yet couldn't get a ball out – hadn't their teacher taught them anything about archery?</p>
    <p>The young boys fell silent. Drona then used his knowledge and expertise to get the ball out, and handed it over to the boys. Together, the boys ran back to the palace and narrated the entire story to their grandfather – who was none other than Bhishma. Bhishma realized that this stranger was indeed a special man, and went in search of him. He requested Drona to tutor his grandchildren – the Pandavas and the Kauravas.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>At the end of their education, Drona asked the princes to march to Panchala and defeat King Drupada – tie him to a chariot, and bring him back to his ashrama. This was what he wanted as his <em>gurudakshina</em>.</p>
    <p>At first, the Kauravas went to Panchala along with their army, but Drupada being no ordinary man, defeated them easily.</p>
    <p>When Drona heard the news of their defeat, he turned to the Pandavas and told them that he hoped they would accomplish this task.</p>
    <p>In the next battle, Drupada could not stand strong against the five Pandavas. Arjuna finally caught him, tied him to a chariot and brought him back to his teacher.</p>
    <p>Drona then said that although Drupada had been defeated by his students and had lost his kingdom, he would not behave the way Drupada had when they were in unequal positions. He said that they would divide the Panchala kingdom into two halves – and Drupada could take back one half, and his capital – Ahichatra, while Drona would take the other half and announce Kampilya as his capital.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>Drupada was furious and humiliated. However, he was not angry with Arjuna, he appreciated his valor and loyalty. He wished that he had a daughter who could be married to him.</p>
    <p>Then his mind turned to Drona again, and he also wished for a son that would be responsible for Drona's death.</p>
    <p>Therefore, Drupada began a penance and performed a yagna to obtain such a daughter and a son.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>A strong handsome warrior, armed with weapons, and a dark and beautiful girl rose out of the sacrificial fire. They were named Dhristadyumna and Draupadi.</p>
    <p>As fated, Draupadi married Arjuna later and Dhrishtadyumna killed Drona on the fifteenth day of the Mahabharatha war.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy – Unusual Tales from the Mahabharatha</em></p>
`,
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
      clue: "Son of the above king. Slayer of his father’s enemy.",
      answer: "DHRISHTADYUMNA",
      size: "wide"
    },
    {
      id: 5,
      pattern: "A__________",
      clue: "The character who attacked the Pandava camp on the 18th night of the Kurukshetra war and killed their sons.",
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
      {from: 1, to: 2, noArrow: true, label: ["Best friends", "during childhood,", "later turned", "into enemies"], sideOrigin:"bottom", sideTarget:"top"},

      // Drupada → Dhrishtadyumna
      { from: 1, to: 4, sideOrigin:"bottom", sideTarget:"top" },

      // Drona’s son → Ashwatthama
      { from: 2, to: 5, sideOrigin:"bottom", sideTarget:"top" },
      
       // Kripi → Ashwatthama
      { from: 3, to: 5, sideOrigin:"bottom", sideTarget:"top" },

      // Dhrishtadyumna → Ashwatthama
      { from: 4, to: 5, label: "Killed by", sideOrigin:"bottom", sideTarget:"top" }    

      
    ]
  }
},  
  
{
  id: 3,
  slug: "a-dynasty-born-in-battle",
  title: "A dynasty born in battle",
  description: "This puzzle explores the lineage of a powerful fallen hero in the Mahabharatha war. His descendents shaped the future after the Kurukshetra war. See if you can figure it out.",
  accent: "#fe96dc",
  congratsMessage: "Nice job solving this puzzle! Try your luck on the next one now.",
  nextSlug: "the-asura-the-fish-and-the-flood",   
  trivia: `
    <p>With the fall of Bhishma, Duryodhana appointed Dronacharya as the commander of the Kaurava forces and requested him to capture Yudhishtira alive.</p>
    <p>Duryodhana's reasoning was that if Yudhishtira was captured alive, he could be cajoled into playing the dice again, and the Pandavas could be packed off to the jungle for another thirteen years.</p>
    <p>Dronacharya agreed and said that he could capture Yudhishtira, but he had a condition. Arjuna had to be kept away from Yudhishtira – not even Indra could defeat a raging Arjuna in a war.</p>
    <p>A horrific battle played out - however, Yudhishtira was not captured because the Kaurava warriors couldn't keep Arjuna at bay. The next morning, Susharma, the king of Trigarta, with his brothers and his army, dared Arjuna to a battle. This was part of their strategy to keeo Arjuna engaged in combat, and away from Yudhishtira. Unaware of Drona's plan, Arjuna took Susharma's bait.</p>
    <p>He appointed Satyajeet, a Panchala prince, to protect Yudhishtira, and headed southwards where Susharma and his forces were waiting.</p>
    <p>While Arjuna was away fighting them, Drona and Bhagadatta (the King of Pragjyotisha), rampaged through the Pandava army. Satyajeet fought till his last breath but was finally killed by Drona. On the other side, Bheema was struggling to contain the advances of Bhagadatta.</p>
    <p>After some time, Arjuna returned and joined Bhima's defense against Bhagadatta, who released the deadly <em>Vaishnavastra</em> on Arjuna. But Krishna's astute manoeuvring of the chariot saved him – Krishna took the blow of the weapon on himself. He was endowed with the power to withstand the shakti of the weapon.</p>
    <p>Thus, another day ended without Yudhishtira getting captured. Duryodhana was indignant and blamed Drona, who in turn reiterated that defeating Arjuna was impossible. Arjuna had to be led far enough away, to ensure that he didn't come back before the day ended.</p>
    <p>Susharma again volunteered to face Arjuna, and Drona decided to organize the army in a Chakra Vyuha to trap Yudhishtira. Drona was aware that no one except Arjuna could successfully penetrate the formation and get out of it alive. But what he didn't know was that Abhimanyu – Arjuna's young son, knew how to enter the formation too. (But he did not know how to get out)</p>
    <p>As planned, when Susharma led Arjuna much further away, Drona unveiled the Chakra Vyuha. Yudhishtira entrusted the task of entering the Vyuha to Abhimanyu, assuring the young warrior that once he made his way inside, others would follow. However, once Abhimanyu entered the Vyuha, Jayadratha held back the rest of the Pandava warriors single-handedly. He was able to do this because of a boon he had obtained from Lord Shiva – that made him invincible for a day, and gave him the power to keep all the Pandavas (except Arjuna) in check, on that day.</p>
    <p>Abhimanyu was trapped inside the formation, but nonetheless, fought like Kartikeya himself. No Kaurava warrior could match him in a duel. Eventually, the young warrior was killed unethically by a simultaneous attack of six warriors, including Drona and Karna, even though he was weaponless and on the ground.</p>
    <p>Arjuna was devastated when he heard about the ruthless killing of Abhimanyu. Yudhishtira was even more repentant since he had assured Abhimanyu that they would all protect him. He explained the details of the encounter to Arjuna, stating his helplessness and that of the others in moving past Jayadratha.</p>
    <p>Arjuna enquired how Jayadratha was able to hold back such indomitable Pandava warriors, and was told about the boon granted to Jayadratha by Shiva that could be used once. Incensed, Arjuna vowed to kill Jayadratha the very next day, and made a vow that if he didn't, he would jump into the fire.</p>
    <p>The next day, Arjuna shot an arrow that severed Jayadratha's head and carried it to the lap of his father, Vriddhakshatra. When Vriddhakshatra dropped the head to the ground, he died instantly due to a curse that anyone responsible for Jayadratha's head touching the earth would have their own head burst into pieces.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>Thirty-six years after the fated war, Yudhishtira, along with his brothers and Draupadi, renounced the kingdom and proceeded to the Himalayas to spend their last days. Parikshit was crowned the king of Hastinapura. Yuyutsu, the foster brother of Duryodhana, and cousin of Pandavas was appointed to guide Parikshit.</p>
    <p>Living up to the reputation of his ancestors, Parikshit was a just and popular king. An expert in both administration and economics, the kingdom flourished under his rule. He reigned peacefully for twenty-four years, before there was an unfortunate turn of events.</p>
    <p>Once, while on a hunting expedition, Parikshit who was tired and thirsty, approached Rishi Shamika's ashrama. Unaware of the Rishi's vow of silence, Parikshit asked him for some water. On not receiving a reply, in a fit of anger, he picked up a dead snake lying nearby and threw it around the Rishi's neck and left.</p>
    <p>When Rishi Shamika's son – Rishi Shringi returned to the ashrama later that day, he saw his father in deep Tapasya with a dead snake hanging around his neck. Enraged, he showered a curse on the perpetrator, saying that whoever had cursed his father would be bitten to death by Takshaka in seven days.</p>
    <p>A siddha rishi's curse couldn't have gone in vain, and as was foretold, Takshaka bit him on the seventh day after the incident.</p>
    <p>When Parikshit had been informed that he had only seven days to live, he crowned Janamejaya as the King of Hastinapura and proceeded to the banks of the Ganga to spend the seven days in the company of sages, fasting and meditating. Just then, Rishi Shukadeva, the son of Veda Vyasa also arrived there and narrated the stories and leelas of Shri Krishna to Parikshit. This narration is immortalized as <em>Shrimad Bhagavata Purana</em>.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>Janamejaya had just returned from a campaign in Takshashila, when a Rishi named Uttanka came to his court. He wanted Janamejaya to teach Takshaka a lesson. Takshaka had become a menace and would trouble innocent people even though they posed no threat to him.</p>
    <p>Uttanka explained that Takshaka had stolen the earrings that he had procured for his <em>gurumata</em>, without any provocation. Only by divine intervention and his guru's grace did Uttanka manage to retrieve the earrings and gift them at the ordained time. After telling his own story, Uttanka also reminded Janamejaya of how Takshaka had killed his father.</p>
    <p>He provoked Janamejaya to avenge Parikshit's death by conducting the ritual of snake sacrifice, the Sarpa Satra. The idea appealed to Janamejaya and he took Uttanka's suggestion and soon initiated the Sarpa Yagna. This ritual sacrifice was so potent that on completion, it would have annihilated all the Nagas from Earth.</p>
    <p>Many distinguished rishis, brahmins, and kings from across Bharatavarsha assembled to witness the Yagna. The most revered Rishi Krishna Dwaipayana Vyasa also arrived with his students to bless the king.</p>
    <p>Janamejaya paid his obeisance to the Rishi and made a request – to know about the great war between the Pandavas and Kauravas, his ancestors, in detail, and what led them to it.</p>
    <p>Veda Vyasa happily obliged – he asked his student Vaishampayana to narrate the history of the Bharatha vamsha – the Mahabharatha.</p>
    <p>Janamajeya's Sarpa Satra thus became the first instance of the public rendering of the Mahabharatha.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
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
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top" },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top" },
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget:"top" }
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
  nextSlug: "the-eighth-child",   
  trivia: `
    <p>Brahma, once, happened to lose the Vedas, which were stolen by an asura named Hayagriva. Hayagriva resided in the bottom of the ocean – and Shri Vishnu took the form of a fish to get back the Vedas.</p>
    <p>There was a King named Satyavrata who was a great devotee of Sri Vishnu. He performed a penance by living only on water. One day, he was doing his daily ablutions, when a tiny fish came out of his <em>kamandalu</em> on to the palm of his hand. The King, being large-hearted and generous, placed it back in the river.</p>
    <p>To his surprise, the fish cried out and said not to leave it in the great big river where other creatures were bound to swallow it up.</p>
    <p>So, Satyavrata put the fish back into his <em>kamandalu</em>, which was full of water. Next morning, he saw that the fish had grown in size and had occupied the whole vessel. It was crying out for more space – so he put it in a bigger vessel. The size of the fish kept on increasing and he kept putting it in bigger and bigger vessels. At last he had to put it in the lake – but the fish filled that too with its increasing size.</p>
    <p>Satyavrata finally put the fish in the ocean, thinking that was the only place big enough for it. But the fish was not happy here either, for it was scared that alligators and other animals of the water would kill it.</p>
    <p>This was too much for the King, and he was completely perplexed. It then suddenly occurred to him that the fish was none other than Sri Narayana, incarnated for a specific purpose.</p>
    <p>The Lord then answered that on the seventh day from that day, the three worlds would be plunged into the waters of <em>pralaya.</em> A large boat would then come to him. He instructs him to collect all the herbs, plants, seeds and trees and all the different species of animals. He tells Satyavrata to take all of those, and the seven Rishis with him, and enter the boat.</p>
    <p>Sure enough, on the seventh day, the deluge started and Satyavrata did as he was instructed.</p>
    <p>At the end of <em>pralaya,</em> the Lord killed the demon Hayagriva and returned the Vedas to Brahma.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 250,

  nodes: [
    {
      id: 1,
      pattern: "H_Y_G__V_",
      clue: "An Asura who stole the Vedas and took them to the bottom of the ocean where he used to reside.",
      answer: "HAYAGRIVA"
    },
    {
      id: 2,
      pattern: "M_T__A AVATARA",
      clue: "Lord Vishnu took the form of a fish to get back the Vedas. Fill in the name of this avatara.",
      answer: ["MATSYA", "MATSYA AVATARA"],
      size: "large"
    },
    {
      id: 3,
      pattern: "S_T__VR___",
      clue: "A king who saw the seemingly helpless fish. In his compassion, he kept bringing bigger and bigger vessels to accomodate the fish. Later on, this fish advised him to collect and safeguard all the species of plants and animals in a boat when the Pralaya began.",
      answer: "SATYAVRATA",
      size: "large"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // Hayagriva 
      2: { x: 2, y: 1 },   // Matsya Avatara 
      3: { x: 2, y: 2 }    // Satyavrata 
    },

    connections: [
      // Hayagriva → Matsya (line, no arrow)
      { from: 1, to: 2, noArrow: true, sideOrigin:"bottom", sideTarget:"top" },

      // Matsya → Satyavrata (arrow)
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top" }
    ]
  }
},
 {
  id: 5,
  slug: "the-eighth-child",
  title: "The Eighth Child",
  description: "Try to identify the key characters and events surrounding the birth of the eighth child destined to change Mathura forever.",
  accent: "#8bc6ff",
  congratsMessage: "Congratulations! On to the next puzzle!",
  nextSlug: "the-warriors-who-fed-the-flame",
  trivia: `
    <p>Devaki was the princess of Mathura. Her father was King Ugrasena, and the powerful and wicked Kamsa was her brother. She was virtuous and beautiful. She was given in marriage to a noble young man called Vasudeva.</p>
    <p>After the marriage ceremony, Vasudeva took his bride away in their chariot which was loaded with gifts. Kamsa, who was very fond of his sister, wanted to drive the chariot himself. Thus, the procession started to the sound of conches, drums and trumpets. Everyone was very happy and in a mood of joy and merriment.</p>
    <p>But suddenly, a heavenly voice cut across — "Fool! Know that the eighth child born of this girl you are driving now shall be the cause of your death!"</p>
    <p>Kamsa's face changed suddenly, and became ugly and distorted. He lunged at Devaki and caught her by the hair. Swiftly, he drew forth his sword and was about to cut her head off, when Vasudeva restrained his hand.</p>
    <p>In a pacifying tone, he told Kamsa that he was a noble king, and why would he want to suffer the disgrace of killing a woman — his own sister at that — on the very day of her marriage. She was innocent and helpless, and besides, it was not her, but her eighth child who would be the cause of his death. He asked Kamsa to desist from this terrible action.</p>
    <p>But Kamsa was hard and adamant, and not at all moved by his pleas. Vasudeva thought quickly and then said that if he spared Devaki's life now, he would hand over all her children when they were born.</p>
    <p>Kamsa finally relented, and put his sword away, ordering the wedding procession to move on. Vasudeva was relieved that he was able to ward off the present danger.</p>
    <p>In due course, the first child was born to Vasudeva and Devaki. True to his word, Vasudeva took the baby to Kamsa and handed it over to him. Kamsa appreciated the gesture of honesty and gave the child back, saying that he had nothing to fear from it since it would be the eighth child of Devaki who would cause his death.</p>
    <p>While Kamsa was feeling happy with his generous gesture, Narada came to him, eyes twinkling mischievously. He asked Kamsa what he had done, and whether he did not know that all of Devaki's children were to be rays of Lord Vishnu. Narayana would incarnate as her eighth child, and all his supporters in Vaikuntha had already taken birth in the Yadava clan. They would also help him to fight Kamsa and the other rakshasas.</p>
    <p>Kamsa was alarmed and shocked by the news, especially since it had come from the special messenger of Narayana. He issued orders to put Devaki and Vasudeva in jail. They were bound with chains and thrown into the darkest dungeons. He decided to take no risk with Devaki's children, and as each of them were born, he had it seized and put to death instantly. Thus, he killed six of his nephews.</p>
    <p>Once again, Devaki was pregnant. She shone with divine lustre and looked the very picture of auspiciousness. Even Kamsa did not fail to notice that his sister had a special glow about her, and felt sure that she was carrying his fated enemy in her womb.</p>
    <p>He had an irresistible desire to kill her then and there, but then he thought of the sin and shame he would incur for having killed a pregnant woman. He decided it was better to wait till his hated enemy was born, and then show everyone that nobody could kill Kamsa.</p>
    <p>But still, he knew no peace. Something gnawed at his heart, and he would sit day and night consumed with worry and anxiety. He imprisoned his father as well, and seized the throne himself. He grew hard and cruel and people became afraid of his power and tyranny. Yet, with all the power and strength in the world, his nerves were completely shattered.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>It was midnight, and Kamsa's palace was enveloped in darkness. The constellation Rohini was rising in the heavens and the stars shone with an unearthly beauty.</p>
    <p>The hour was at its darkest. And suddenly, the room in the prison was filled with a brilliant light. It seemed as if a second sun had arisen. Their eyes dazzled, and Vasudeva and Devaki could barely look at the source of the light — for there stood Lord Vishnu himself in all His divine magnificence!</p>
    <p>In his four hands he held the conch (<em>Shankha</em>), the Discus (<em>Chakra</em>), the Club (<em>Gada</em>), and the Lotus-flower (<em>Padma</em>).</p>
    <p>Vasudeva and Devaki bowed before Him, and he blessed the couple and spoke to them. He told them that their days of suffering were over, and that for too long, the earth had borne the burden of the wicked deeds of the impious. He was now manifesting Himself for their destruction. He asked Vasudeva to take Him to the house of his good friend, Nanda, in Gokula. His wife, Yashoda, had just given birth to a baby girl. Vishnu told them to exchange Him for that daughter and place Him by Yashoda's side. Then, he was to bring the baby girl into the prison.</p>
    <p>Then the light was no more, and by Devaki's side lay a little dark baby whose complexion was like that of a rain-bearing cloud.</p>
    <p>Silently, Vasudeva took the baby from her, and moved towards the door. Suddenly, the chains that bound him dropped away of their own accord. One after the other, the doors of the prison swung open. The guards had fallen into an unnatural deep slumber, and within moments, Vasudeva found himself walking on the streets of Mathura.</p>
    <p>It had now started raining. Carrying the divine baby, Vasudeva arrived at the banks of the Yamuna. The waters were swirling in a flood, but suddenly, they parted for him. Vasudeva walked through the river, carrying the baby high above his head so that the waters wouldn't touch it. The celestial thousand-hooded Seshanaga protected and guarded them as a moving umbrella.</p>
    <p>When Vasudeva arrived at Gokula, he saw that everything was absolutely hushed and quiet. He entered the house of Nanda. His wife Yashoda was fast asleep, with a baby girl beside her. Quietly, Vasudeva picked her up and put the baby boy in her place. Then he crept away and came back to Mathura. He gave the baby girl to Devaki, and slowly, the prison gates closed on him, and he found himself in chains again.</p>
    <p>When the guards heard the cry of a baby coming from the prison chamber, they rushed to give Kamsa the news. Kamsa woke up, and with dishevelled hair and bleary eyes, stumbled towards the dungeon. Devaki saw the expression in his eyes and clutched the baby closer.</p>
    <p>She shouted at Kamsa to leave this baby at least — she was only a girl and what possible harm could she do to him?</p>
    <p>But the wicked king was unrelenting and snatched the child from her hands and lifted it high in the air. He was about to dash it against the stone wall when suddenly, the infant slipped from his fingers and rose up into the air. She became a resplendent goddess and shouted at Kamsa that he would gain nothing by destroying innocent children. His enemy had already been born, and when the time came, he would indeed destroy Kamsa!</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "_G__S___",
      clue: "King of Mathura, later imprisoned by his own son, who was a tyrant.",
      answer: "UGRASENA"
    },

    {
      id: 2,
      pattern: "_A_S_",
      clue: "The character who overthrew his father from the throne with Jarasandha's support, and became the King of Mathura.",
      answer: "KAMSA"
    },

    {
      id: 3,
      pattern: "D_V___",
      clue: "During this character's wedding, a celestial voice announced that the eighth child born to her would slay her brother.",
      answer: "DEVAKI"
    },

    {
      id: 4,
      pattern: "_A__D___",
      clue: "Prince of the Yadava dynasty who tried to pacify his wife's brother and assured him that they would give him their children so that they wouldn't pose a threat to his life.",
      answer: "VASUDEVA"
    },

    {
      id: 5,
      pattern: "_R_SH__",
      clue: "The eighth son born to the above couple in the prison, at midnight.",
      answer: "KRISHNA"
    },

    {
      id: 6,
      pattern: "Y_M___",
      clue: "The river that had to be crossed by the father, in order to reach the other side and exchange the baby.",
      answer: "YAMUNA"
    },

    {
      id: 7,
      pattern: "S_E___",
      clue: "The serpent which acted as a hood to protect the baby, when his father was carrying him across the river in the heavy rain.",
      answer: "SHESHA"
    },

    {
      id: 8,
      pattern: "N_N__",
      clue: "The Chief of the cowherds in Vrindavan.",
      answer: "NANDA"
    },

    {
      id: 9,
      pattern: "Y_S____",
      clue: "Wife of the chieftain who had given birth to a baby girl on the same night.",
      answer: "YASHODA"
    },

    {
      id: 10,
      pattern: "Y_G_M__A",
      clue: "The baby girl who was brought back to the prison after the exchange. When Kamsa attempted to kill her, she escaped from his grasp and warned him that the eighth child was born and that his end was very near.",
      answer: "YOGAMAYA"
    },

    {
      id: 100,
      image: "assets/images/vasudeva_devaki.jpg",
      clue: "",
      answer: "",
      size: "medium"
    }
  ],

  layout: {
    positions: {
      1:   { x: 1, y: 0 }, //Ugrasena
      2:   { x: 1, y: 1 }, //Kamsa
      3:   { x: 0, y: 2 }, //Devaki
      4:   { x: 2, y: 2 }, //Vasudeva
      5:   { x: 1, y: 3 }, //Krishna
      6:   { x: 0, y: 4 }, //Yamuna
      7:   { x: 2, y: 4 }, //Shesha
      8:   { x: 0, y: 5 }, //Nanda
      9:   { x: 2, y: 5 }, //Yashoda
      10:  { x: 1, y: 6 }, //Yogamaya
      100: { x: 1, y: 7 } //image
    },

    connections: [
      { from: 1, to: 2, straight: true, noArrow: true, sideOrigin:"bottom", sideTarget:"top" },
      { from: 2, to: 3, straight: true, label: "siblings", noArrow: true, sideOrigin:"bottom", sideTarget:"top" },
      { from: 3, to: 5, sideOrigin:"bottom", sideTarget:"top" },
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget:"top" },
      { from: 8, to: 9, straight: true, noArrow: true, sideOrigin:"right", sideTarget:"left"},
      { from: 8, to: 10, straight: true, sideOrigin:"bottom", sideTarget:"top" },
      { from: 9, to: 10, straight: true, sideOrigin:"bottom", sideTarget:"top" }
    ]
  }
},

{
  id: 6, 
  slug: "the-warriors-who-fed-the-flame",
  title: "The Warriors who fed the Flame",
  description: "The hunger of the fire-god sets off a chain of alliances, rescues, and the building of a magnificent palace. See if you can identify the characters involved.",
  accent: "#ffb3c6",
  congratsMessage: "Congratulations! On to the next puzzle!",
  nextSlug: "the-demon-and-the-thunderbolt",
  trivia: `
    <p>Bhishma decided to divide their Kingdom equally, among the Pandavas and Kauravas, in order to prevent any conflict.</p>
    <p>Dhritarashtra, the father of Kauravas, agreed to this – and declared that the Kauravas would rule Hastinapura while the Pandavas would rule the forest area of Khandavaprastha, across the river Yamuna.</p>
    <p>It was an unequal distribution, because the forest area was uninhabitable and uncivilized, but the Pandavas accepted their share with grace.</p>
    <p>With Krishna's assistance, the Pandavas created the city of Indraprastha in a part of the forest, and soon their followers made the city their home and chose to become their subjects. One day, an old man came to meet Arjuna and Krishna. The man said that he was extremely hungry, and no matter how much and what he ate, he was not feeling satisfied. He asked them for their help.</p>
    <p>They agreed to help and asked him what he would like to eat, and that they would do their best to ensure that he got his fill. Suddenly, the old man transformed into Agni – the god of fire. He said that he was longing to eat the Khandava forest. But since Indra's friend, Takshaka, lived there, Indra prevented him from burning the forest by sending heavy rains whenever he approached it.</p>
    <p>Agni said that his hunger had now become unbearable, and requested them to protect him while he burnt the forest.</p>
    <p>Arjuna agreed to this, but said that he wanted a chariot that could move as fast as his thoughts, and some suitable weapons for Krishna. Provided that they had those, they could start right away.</p>
    <p>Agni then gave him a solid gold chariot yoked by white horses, and an extraordinary bow called Gandiva, which belonged to his friend Varuna. Krishna was equipped with the mace <em>Kaumodaki</em>.</p>
    <p>On the designated day, Agni began burning the forest – and the flames shot up high, covering even the sky. Arjuna and Krishna stopped everything that came in Agni's way. The news soon reached Indra, who was immediately worried about Takshaka's family. He called for a storm of clouds and commanded them to rain over the forest and quench the fire. Arjuna used the mighty Gandiva bow and covered the forest with so many arrows and in such a manner that even a drop of rain couldn't get through.</p>
    <p>Suddenly, a frightened Danava ran to Arjuna, pleading mercy, and prayed to save him from Agni. Arjuna reassured him that the fire would not touch him.</p>
    <p>The inferno raged on for ten days, which was sufficient to reduce the Khandava forest and all its creatures to ashes, with the exception of six – Mayasura (the Danava that Arjuna had protected), four Saranga birds, and Ashvasena (a Naga).</p>
    <p>Agni thanked Arjuna and Krishna and left, saying that the weapons were theirs to keep.</p>
    <p>Since Arjuna had saved Mayasura, the latter promised to build a fantastic palace for him, the like of which had never been seen before and never would be seen after.</p>
    <p>True to his word, Mayasura created a striking palace in Indraprastha, and the Pandavas performed the Rajasuya Yagna, at the end of which they invited all their relatives to their new home.</p>
    <p>Duryodhana couldn't control his jealousy when he saw this beautiful palace and decided to get back at the Pandavas. This eventually led to the dice game which caused them to be exiled and became the root cause of the Kurukshetra war.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "_G__",
      clue: "The God who asked a pair of best friends to help him satisfy his hunger by burning a forest.",
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
      clue: "Divine flute-player who was currently (in the times of this story) residing in Dwaraka.",
      answer: "KRISHNA"
    },

    {
      id: 4,
      pattern: "M___SURA",
      clue: "The chief architect of the Asuras who was saved by Arjuna during the burning of Khandavaprastha.",
      answer: "MAYASURA",
      size: "large"
    },

    {
      id: 5,
      pattern: "__YA__BHA",
      clue: "The palace built by the above character for the Pandavas in gratitude. Later, Duryodhana was overwhelmed and jealous upon seeing it.",
      answer: "MAYASABHA",
      size: "large"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 },   // AGNI 
      2: { x: 0, y: 1 },   // ARJUNA 
      3: { x: 2, y: 1 },   // KRISHNA
      4: { x: 1, y: 2 },   // MAYASURA 
      5: { x: 1, y: 3 }    // MAYASABHA 
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget:"top" },   
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top" },   
      { from: 2, to: 4, sideOrigin:"bottom", sideTarget:"top" },  
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget:"top" }    
    ]
  }
},
{
  id: 7,   
  slug: "the-demon-and-the-thunderbolt",
  title: "The Demon and the Thunderbolt",
  description: "One God's pride sets off a chain reaction: the abandonment of their guru, the rise of a new teacher, the birth of a feared asura, and the ultimate sacrifice of a sage. Piece together the events if you can.",
  accent: "#ffd27b",
  congratsMessage: "Nicely solved! Onto the next puzzle.",
  nextSlug: "the-rise-of-the-kuru-line",
  trivia: `
    <p>One day, while Indra, the King of Gods, was sitting in Swarga, his mind was enchanted by the glamor all around him.</p>
    <p>He was so puffed up with pride at being the ruler of it all, that when Brihaspati - the teacher of the Devas entered, he did not rise to receive him.</p>
    <p>Brihaspati, offended by the arrogant behavior of Indra, angrily turned on his heel and left the court. Indra quickly realised his mistake, and went in search of him. However, Brihaspati was nowhere to be found.</p>
    <p>Meanwhile, the Devas and Daityas were constantly quarreling, and without Brihaspati, the Devas became weaker. Time and again they suffered defeat and humiliation.</p>
    <p>Finally, Indra approached Brahma, who said that he was suffering the price for his arrogant folly.</p>
    <p>He advices him to go to Vishwarupa, who was the younger son of Twasta, and to ask him to be the teacher of the Devas.</p>
    <p>Vishwarupa agreed to be their preceptor, and taught them the Narayana Kavacha. With this, the Devas began scoring more victories and the asuras lost miserably.</p>
    <p>In the midst of all this, Vishwarupa (who was a Deva from his father's side but a Daitya from his mother's side) secretly offered a share of oblations in the sacrificial fire for the Daityas as well.</p>
    <p>When Indra came to know about this, he was so angry that he cut off Vishwarupa's head. Twastadeva then performed a sacrifice, and commanded a demon to rise from it to destroy Indra.</p>
    <p>From the flames rose Vrita. The Devas tried to fight against him by throwing a variety of weapons, but Vrita merely swallowed them all.</p>
    <p>Terrified, the Devas rushed to Sri Narayana and asked him for help. Narayana advised Indra to go to Rishi Dadhichi and ask him to give him his body. And to make a weapon out of his bones to cut off Vrita's head.</p>
    <p>The Devas did as they were told and attacked Vrita again. Vrita fought ferociously and nobly, and eventually swallowed both Indra and his elephant Airavata. Indra still had the weapon with him, and tore open Vrita's belly and came out. Then, he cut off the asura's head.</p>
    <p>The Devas watched in amazement, as the most amazing thing happened - Vrita's soul went straight into Sri Narayana, who was standing amidst them.</p>
    <p style="margin-top:20px; font-size:20px; font-style:italic; color:#aaa;">✦ A Bonus story to know who Vrita really is!✦</p>
    <p>Chitraketu was the King of Surasena - he had everything that a monarch could wish for, including prosperity, good ministers and obedient subjects. However he was unhappy as he did not have a son.</p>
    <p>One day, Sage Angiras visited his court and grants him the boon of having a son. But there's a catch. He says that - while his son would bring him a lot of joy, he would also bring him a lot of sorrow.</p>
    <p>In due time, a son was born to the chief queen and there was great rejoicing throughout the Kingdom. The other queens grew jealous, and one day, they poisoned the baby prince.</p>
    <p>The King and queen, upon his death, were inconsolable, and one day - Sage Angira and Narada appeared before him. They asked him who was there before his son was born and who is there now that he is no more? - they also told him that the soul is one and it is the body which differs and is of perishable nature.</p>
    <p>Chitraketu then asked them to teach him further and shed their light of wisdom upon him. Angada and Narada taught him the paths of worship and meditation, and Chitraketu eventually retired to the valleys of Mount Meru, and spent his time in devotional practices.</p>
    <p>One day, while he was passing Mount Kailasa, where the sages were gathered around Shiva and Parvati and listening to Shiva's teachings.</p>
    <p>Chitrakuta passed a rude comment, at which Parvati was angry, and cursed Chitraketu to take an Asura birth.</p>
    <p>Thus, when Twastadeva demanded for a demon to rise from the sacrificial fire and kill Indra, Chitraketu sprang up as Vrita. He had always been a <em>Hari Bhakta</em>, and even in his demon body, he had an unceasing devotion for the Lord.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story referred from: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "I____",
      clue: "The King of Gods, who in this particular instance, was blinded by arrogance and proceeded to offend the guru of Devas.",
      answer: "INDRA"
    },

    {
      id: 2,
      pattern: "B__H__P___",
      clue: "Guru of the Devas, who temporarily vanished due to the actions of the king of Gods.",
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
      clue: "The daughter of Prahlada, and wife of the character on the left.",
      answer: "VIROCHANA"
    },

    {
      id: 5,
      pattern: "V___W_R___",
      clue: "Son of the above couple. He became the interim Guru of Devas, since the actual Guru of Devas was absent.",
      answer: "VISHWARUPA",
      size: "wide"
    },

    {
      id: 6,
      pattern: "V_I__",
      clue: "An asura who arose from the flames. He swallowed Indra, but Indra defeated him with a powerful weapon. After this, to the surprise of all, this Asura entered straight into Sri Narayana.",
      answer: "VRITA"
    },

    {
      id: 7,
      pattern: "D_D__C__",
      clue: "The sage who gave up his body, so that divine weapons could be made out of his bones to defeat the asura on the right.",
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
      // Indra to Brihaspati
      { from: 1, to: 2, noArrow: true, sideOrigin:"right", sideTarget:"left"},  

      
      // Indra to Vishwarupa
      { 
        from: 1, 
        to: 5, 
        sideTarget: "left",
        label: ["Beheaded", "him", "for secretly", "giving" , "offerings", "to Daityas"], 
        noArrow: false,
        sideOrigin:"bottom", 
        sideTarget:"left" 
      },

      // Tvashta to Vrita
      { 
        from: 3, 
        to: 6, 
        avoidNode: 5,
        label: ["Performed a penance", "to create", "a daitya destined", "to kill Indra"],
        sideOrigin:"bottom", 
        sideTarget:"top" 
      },
      // Dadhichi to Vrita
      { 
        from: 7, 
        to: 6, 
        sideOrigin: "right",
        straight: true, 
        label: ["is the weapon that killed him"],
        sideOrigin:"right", 
        sideTarget:"left"
      },

      //Indra to Dadhichi
      { 
        from: 1, 
        to: 7,
        sideOrigin:"bottom", 
        sideTarget:"top"
      },
      //Tvashta to Vishwarupa
      { 
        from: 3, 
        to: 5,
        sideOrigin:"bottom", 
        sideTarget:"top"
      },
      //Virochana to Vishwarupa
      { 
        from: 4, 
        to: 5,
        sideOrigin:"bottom", 
        sideTarget:"top"
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
  trivia: `
    <p><em>Nandini is a wish-fulfilling cow, and the daughter of Kamadhenu (who was given to Rishi Vasishta's ashrama to help him perform prayers and to take care of his guests).</em></p>
    <p><em>One day, eight <em>vasus</em> experienced Nandini's hospitality at Vasishtha's ashrama, and came back and told their wives about her. The wives immediately wanted to possess the holy cow and insisted that their husbands catch Nandini and bring her to them.</em></p>
    <p><em>Prabhasa, who was one of the eight <em>vasus</em>, took the lead. He stole the cow, and then directed the other cows out of the ashrama. When Vasishtha came to know about this, he was furious, and cursed the <em>vasus</em> to be born on earth as punishment.</em></p>
    <p><em>The <em>vasus</em> begged Vasishtha for forgiveness, and he finally relented and reduced the potency of the curse. He told them that they would be born out of the holy Ganga, and be immersed in her immediately after birth, which would cleanse their sins. But Prabhasa, who had stolen Nandini, would remain on earth for a much longer time.</em></p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Shantanu, one of the illustrious Kings of the Bharata dynasty, loved hunting. One day, while he was on a hunting expedition, he saw a girl whose beauty left him awestruck.</p>
    <p>Eventually, he fell in love with her and requested her to marry him. She agreed, but said that she had two conditions — first, that he would never interfere nor question any act of hers, and second, that he would never utter a harsh word to her.</p>
    <p>The King readily agreed, and they were soon married. Eventually, a son was born to them. But Ganga took the newborn to the river and threw the infant into the flowing waters. Shantanu was aghast at what he saw, but did not retaliate for fear that Ganga would leave him.</p>
    <p>Six more sons were born to Ganga, one after the other. Each time, she threw them into the river, and Shantanu watched her helplessly. Seven sons were thus consigned to the flowing waters.</p>
    <p>Then the eighth son was born to Ganga, and she took him down to the river immediately. Shantanu followed her again, this time determined to stop her. As she was about to throw the baby into the flowing waters, he shouted at her to stop and have mercy on this baby. He demanded whether she was a woman or a demoness, to be able to kill her own children without remorse.</p>
    <p>Ganga then turned around to face Shantanu, still holding the baby in her arms. She told him that she had to leave, since he had broken his conditions, but first explained the curse on the <em>vasus</em> by Vasishtha. The <em>vasus</em> had requested Ganga to be their mother on earth and ensure that they did not lead a miserable life as mortals, and she had thus released them.</p>
    <p>However, the eighth son was destined to live in this world. Ganga then told him that the child would remain with her until he was perfectly trained in every skill and art, and thereafter, he would come back to Shantanu. Saying this, she and the baby son vanished, and Shantanu returned to the palace, dejected and disappointed.</p>
    <p>Years rolled by, and Shantanu one day came to the bank of river Ganga while chasing a stag. Suddenly, a woman appeared out of the gushing waves of the river, leading a boy with her. Shantanu realized to his surprise that it was Ganga.</p>
    <p>Ganga then spoke in her melodious voice — "O King of Bharata, take a look at your son. I had promised that I would bring him back to you. He will, from today, stay with you, and be unrivalled in the world. Vasishtha, Parashurama and Brihaspati have been his tutors. He will bring glory to the world."</p>
    <p>Saying this, Ganga vanished and Shantanu brought his son into the palace. He was named Devavrata, and installed as the heir.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>A few years later, while Shantanu was hunting on the banks of the Yamuna, he found the atmosphere around him filled with a sweet fragrance. He saw a beautiful lady and followed her. He was enchanted by her beauty and instantly decided to marry her.</p>
    <p>The woman said that she was Satyavati, daughter of the chief of the fishermen. She told him to first ask her father for her hand.</p>
    <p>The chief of the fishermen was astounded to find the King of the Bharata dynasty at his doorstep, and asked him what he could do for him. Shantanu, without wasting words, spoke the desire of his heart.</p>
    <p>The fisherman was a cunning one. He said that Shantanu could marry his daughter, but on the condition that Satyavati's son should succeed him as the King.</p>
    <p>Shantanu thought of Devavrata, and turned speechless and listless. Without saying a word, he came back. Once in the palace, the King's apathy and listlessness became obvious to all.</p>
    <p>Devavrata too noticed his father's lack of interest in life. He went to the King's personal attendant and asked him what the matter was. He replied that Shantanu wanted to marry the fisherman's daughter, and also told him about the condition laid out by the fisherman.</p>
    <p>For a moment, Devavrata was nonplussed, but then an idea occurred to him and he smiled. Taking some ministers to accompany him, he went to the banks of the Yamuna and requested the fisherman for his daughter's hand in marriage to his father.</p>
    <p>The fisherman repeated the same condition — and Devavrata gave his word that his daughter's son would be the King after Shantanu.</p>
    <p>But the fisherman was not satisfied with this either — he said that Devavrata would keep his promise, but that he could not trust his children. In the future, they could oppose his daughter's son's succession to the throne.</p>
    <p>Devavrata appeared more serious and determined now. He said that he had already given his word, and if that was not enough, he would also remain celibate.</p>
    <p>There was a stunned silence as soon as Devavrata swore. The gods from heaven rained flowers on the man who had taken such a stern oath only because he wanted his father to be happy. From then on, Devavrata came to be known as Bhishma.</p>
    <p>When Shantanu came to know of the great price his son had paid to buy him happiness, he was moved and blessed him with a boon — that no one could ever defeat him in war, and that death would never touch him unless he chose it himself.</p>
    <p>Not much later, Shantanu died, leaving behind his young wife Satyavati, and two young sons — Chitrangada and Vichitravirya. True to his word, Bhishma crowned Chitrangada as King and himself acted as the regent.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Chitrangada did not live very long. One day in the forest while hunting, he came across a Gandharva with the same name as his. The Gandharva, who did not like a human being having the same name, challenged the young King to a fight. The Gandharva killed him, and Bhishma crowned Vichitravirya as the next King.</p>
    <p>When Vichitravirya attained a marriageable age, Bhishma began looking for a suitable bride for him. He came to know that the King of Kashi was going to hold a Swayamvara for his three daughters – Amba, Ambika and Ambalika. They were all beautiful, accomplished and skillful.</p>
    <p>Bhishma reached Kashi, and abducted the three princesses. There were few Kings who opposed and resisted, but they were no match for his swift marksmanship.</p>
    <p>Ambika and Ambalika were happy to be married to King Vichitravirya, but Amba complained to Bhishma that he had not given her the opportunity to speak as he carried them away. Even before the Swayamvara, she had planned to marry the prince of Shalva, and had it taken place, she would have garlanded him.</p>
    <p>Upon knowing this, Bhishma sent her honourably to the Shalva capital along with escorts. But King Shalva refused to marry her as she had been captured by Bhishma. Amba returned to Bhishma and asked him to marry her, to which he declined due to his vow. Feeling humiliated and angry, she vowed to kill Bhishma in her next birth.</p>
    <p>Later, she was born as Shikhandi to prince Drupada.</p>

    <p style="margin-top:20px; font-size:20px; font-style:italic; color:#aaa;">✦ A Bonus Story about Shantanu!✦</p>
    <p>Once, there lived a frog in a forest. This frog heard about the River Ganga and how people yearned to go on a pilgrimage to her and take a dip in her waters. So, the frog also decided to travel to the river.</p>
    <p>Unfortunately, he got stuck in a stampede during his journey and was crushed to death under a man's foot.</p>
    <p>In his next birth, he was born as a man who was employed by Indra. Indra was very appreciative of his work and gave him a cart full of gold. Now that he had more than enough money to make the trip, the man once again started his journey towards River Ganga. However, his bullocks died on the way, and he was at a loss of what to do.</p>
    <p>He requested Surya for help, saying that he would give him half of the gold if he helped. Surya assisted him, and the man managed to make his way to the Ganga. Once he was there, he took a dip in the waters, and donated all the gold that he had by immersing it into the river.</p>
    <p>Later on, when Surya asked him for his share, the man was unable to pay it. Angered by this, Surya turned him into a jackal as punishment. With no place to go, the jackal lived near the river and had a dip in the waters every day.</p>
    <p>One day, Ganga showed up in the form of a beautiful maiden. Fascinated, the jackal followed her. Frightened, Ganga threw a stone at the animal, which hit him and blinded his eye, but he continued to follow her. She ran to a sage nearby and hid behind him, telling him about the jackal.</p>
    <p>Upset by this, the sage asked his disciples to kill the animal. His ashes were burnt and immersed into the river. A few years later, the same ashes transported the seeds of a sal tree to the banks of the river, and eventually a huge tree grew there. The sage realized through his yogic powers that the jackal's ashes were responsible for it and were a part of the tree.</p>
    <p>He instructed his disciples to cut the tree down and burn the trunk. Out of the fire emerged a handsome young prince, whom the sage named Shantanu. The sage told him that he had been trying for years to meet and be a companion to Ganga in different forms, and that he would bless him to marry her, even if it was for a short period.</p>
    <p>Much later, Shantanu met Ganga again, in her human form, and was enchanted by her beauty. She agreed to marry him on the condition that he must never question her actions — and the rest is history.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha - Om Books International</em></p>
`,
  rowHeight: 300,

  nodes: [
    // ROW 1
    { id: 1, pattern: "G__G_", clue: "The sacred river that flows in Kashi. This character married the King on a condition that he must never question her actions. ", answer: "GANGA" },
    { id: 2, pattern: "S__NT___", clue: "A king who loved hunting, ancestor to the Pandavas and Kauravas.", answer: "SHANTANU" },
    { id: 3, pattern: "S_T__V_T_", clue: "The daughter of a fisherman who was known for her divine fragrance.", answer: "SATYAVATI" },

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
      clue: "A princess from Kashi, taken from her Swayamvara by Bhishma and wedded to the above prince. When she saw Sage Vyasa, she closed her eyes in fear.",
      answer: "AMBIKA"
    },
    {
      id: 8,
      pattern: "A_B_L___",
      clue: "A princess from Kashi, taken from her Swayamvara by Bhishma and wedded to the above prince. Upon seeing the aforementioned sage, she turned pale.",
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
      clue: "The reincarnation of the above character, seeking vengeance against Bhishma. This character played a pivotal role in his defeat during the Kurukshetra war.",
      answer: "SHIKHANDI",
    }
  ],

  layout: {
    positions: {
     
      1: { x: 0, y: 0 }, //Ganga
      2: { x: 1, y: 0 }, //Shantanu
      3: { x: 2, y: 0 }, //Satyavati      
      4: { x: 0, y: 1 }, //Bhishma
      5: { x: 2, y: 1 }, //Chitrangada
      6: { x: 2, y: 2 }, //Vichitravirya
      7: { x: 1, y: 3 }, //Ambika
      8: { x: 2, y: 3 }, //Ambalika
      9: { x: 0, y: 3 }, //Amba
      10: { x: 0, y: 4 } //Shikhandi
    },

    connections: [
      //Shantanu → Ganga
      { from: 2, to: 1, straight: true, sideOrigin: "left", sideTarget: "right" },

      //Shantanu → Satyavati
      { from: 2, to: 3, straight: true, sideOrigin: "right", sideTarget: "left" },
      

      // Ganga → Bhishma
      { from: 1, to: 4, sideOrigin:"bottom", sideTarget:"top"},

      // Bhishma to the princesses
      { from: 4, to: 7, label: ["abducted"], sideOrigin:"bottom", sideTarget:"top"},
      { from: 4, to: 8, label: ["abducted"], sideOrigin:"bottom", sideTarget:"top"},
      { from: 4, to: 9, label: ["abducted"], sideOrigin:"bottom", sideTarget:"top"},

      // Shantanu → Bhishma
      { from: 2, to: 4, sideOrigin:"bottom", sideTarget:"top"},

      // Shantanu → Chitrangada
      { from: 2, to: 5, sideOrigin:"bottom", sideTarget:"top"},

      // Satyavati → Chitrangada and Chitrangada to Vichitravirya
      { from: 3, to: 5, straight: true, sideOrigin:"bottom", sideTarget:"top" },
      { from: 5, to: 6, straight: true, noArrow: true, label: ["brother"], sideOrigin:"bottom", sideTarget:"top" },

      // Vichitravirya → Ambika / Ambalika
      { from: 6, to: 7, sideOrigin:"bottom", sideTarget:"top"},
      { from: 6, to: 8, sideOrigin:"bottom", sideTarget:"top"},

      // Amba → Shikhandi
      { from: 9, to: 10, sideOrigin:"bottom", sideTarget:"top" }

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
  trivia: `
    <p>King Uttanapada was the first son of Manu – he had two wives, the elder was Suniti and the younger was Suruchi. Suruchi was very beautiful and so the king favoured her. However, she had a terribly jealous and possessive nature – so much that she wouldn't even let the King see Suniti or her son.</p>
    <p>One day, Suruchi was sitting, laughing and chatting with the king and her son Uttama was playing on his lap. Just then, Dhruva (the son of Suniti) came into the room, and he too, wanted to climb his father's knee and play with him. But the king, fearing Suruchi's anger, paid no attention to him. Suruchi taunted the little boy and said that although he was the king's eldest son, to be in his favour was a different thing. For that, he would have to take birth in her womb. Therefore, she told him to go do penance so that in his next life, he could be born as her son. Dhruva sadly looked up at his father, but the king took no notice.</p>
    <p>Now Dhruva, although only five years old, was of an extremely sensitive nature. He ran to his mother's apartments and clung to her legs, crying uncontrollably. Suniti took him in her arms, and soothed him with soft, loving words. When he had become fairly calm, she told him that there was always justice in the eyes of God. Everyone had to pay the price for their karmas, whether good or bad. She added that Suruchi had told one truth – through penance, prayer and the grace of Narayana, everything was possible.</p>
    <p>Dhruva asked his mother who Narayana was and where he could find him.</p>
    <p>Suniti answered that he was called the Lotus-eyed One – and he removed the miseries and fulfilled the desires of those who renounced everything and took refuge in Him. But He was not easily attainable – after years of austerity and penance, yogis had realized Him through intense devotion, seated deep within their own hearts.</p>
    <p>Dhruva thought over his mother's words, and that night, when everyone was fast asleep, quietly stole out of the palace and made his way towards the deep, dark jungles. He walked thus for many days and nights without food, water or rest, calling out to Narayana. He asked the lions, tigers, bears and jackals of the forest if they had seen Narayana – they looked at him in amazement, shook their heads and walked away.</p>
    <p>It is said in the <em>Shastras</em> that when one sought the light to dispel the darkness in one's heart, the Lord would send a teacher who had discovered his own inner Light.</p>
    <p>Narada had heard the sincere cries of Dhruva for the vision of the Lord. Narada set out to meet the boy and decided to test his earnestness. He told him that he was too young to start off on his search for God, and to go back to wherever he belonged. These were the days to enjoy – asked him to go and lead a worthy life, and when all his duties were over, he could meditate on the Lord.</p>
    <p>Dhruva said that his desire to realise God was the highest goal in life and prayed to show him the path.</p>
    <p>Narada, now convinced that Dhruva was a sincere seeker, taught him how to meditate and also taught him the mantra – "OM NAMO BHAGAVATE VASUDEVAYA", and asked him to meditate upon it constantly.</p>
    <p>Narada then advised Dhruva to go to Madhuvanam, on the sacred banks of Yamuna to practice his penance. He told him to meditate on him always, to see only Him at all places and in all beings.</p>
    <p>During the first few days, Dhruva was restless. But soon he found a boundless joy in meditation. He subjected himself to rigorous tapas and undertook terrible fasts, only eating dried leaves and grass, sipping water once in nine days, and breathing only once in a while. He went into long spells of Samadhi. By the fifth month, he had lost all consciousness of the outer world and entered deeper into meditation.</p>
    <p>So great was the force of his penance, that the three worlds rocked! The earth tilted at the point where his toe pressed on the ground. When he stopped his breath in Samadhi, the breath of the three worlds also stopped, suffocating the creatures.</p>
    <p>The Lord was now thirsty for the darshan of his <em>bhakta</em>, and he mounted his Garuda.</p>
    <p>Dhruva opened his eyes and was dazzled by the presence of the Lord. He prostrated before him, but could not utter a single word, he was so struck by the resplendence of Sri Narayana!</p>
    <p>In blessing, he touched Dhruva with His divine conch. Dhruva's heart was flooded with love and then with supreme joy, he sang the praises of the Lord.</p>
    <p>Narayana then said that he would grant him his boon, but now he must go back to his father and rule the kingdom till his allotted time on the earth was over. Then, he would ascend to the celestial sphere where the Devas, Gandharvas and Apasaras constantly chanted the Lord's glories.</p>
    <p>There – he would have a permanent, unchanging place and would be called the Dhruva Nakshatra. In later years, men would draw their guidance from him.</p>
    <p>With this blessing, Narayana disappeared.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam – Central Chinmaya Mission Trust</em></p>
`,       
  rowHeight: 300,

  nodes: [
    // ROW 1
    {
      id: 1,
      pattern: "U__A__P_D_",
      clue: "A King who was the first son of Swayambhuva Manu.",
      answer: "UTTANAPADA",
      size: "wide"
    },

    // ROW 2
    {
      id: 2,
      pattern: "S_N_T_",
      clue:
        "The elder wife of the king who was gentle and kind. She advised her son to seek Narayana through penance.",
      answer: "SUNITI"
    },
    {
      id: 3,
      pattern: "S_R_C__",
      clue:
        "The younger queen who was favoured for her beauty, but very jealous and possessive in nature.",
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
        "The son of the elder queen. In order to acquire the love of his father, he undertook a rigorous penance to Lord Narayana at a very tender age. Later on, he acquired a celestial form and is visible to us as a guiding star to this day.",
      answer: "DHRUVA",
      size: "wide"
    },

    // ROW 4
    {
      id: 6,
      pattern: "N___D_",
      clue:
        "Advised the child that he was too young to seek God, but convinced by his earnestness, taught him a divine mantra.",
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
      1: { x: 1, y: 0 }, //Uttanapada
      2: { x: 0, y: 1 }, //Suniti
      3: { x: 2, y: 1 }, //Suruchi      
      4: { x: 2, y: 2 }, //Uttama
      5: { x: 0, y: 2 }, //Dhruva     
      6: { x: 0, y: 3 }, //Narada    
      100: { x: 1, y: 4 } //image
    },

    connections: [
      // king to the two wives
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget:"top" },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top" },

      // Suniti → Dhruva
      { from: 2, to: 5, label: ["son"], sideOrigin:"bottom", sideTarget:"top"},

      // Suruchi → Uttama
      { from: 3, to: 4, label: ["son"], sideOrigin:"bottom", sideTarget:"top" },

      // Suruchi → Dhruva (arrow, label)
      {
        from: 3,
        to: 5,
        sideOrigin:"bottom", 
        sideTarget:"top",
        label: [
          "told him that if he wanted",
          "his father's favor, he",
          "must be reborn as her son"
        ]
      },

      // Dhruva → Uttama (arrow, label)
      {
        from: 5,
        to: 4,
        sideOrigin:"right", 
        sideTarget:"left",
        label: [
          "saw him playing on his",
          "father's lap and tried to",
          "sit there too"
        ]
      },

      // Dhruva → Narada (straight, no arrow)
      { from: 5, to: 6, straight: true, noArrow: true, sideOrigin:"bottom", sideTarget:"top" }
    ]
  }
}, 

{
  id: 10,
  slug: "brihaspati-yagna",
  title: "Brihaspati Yagna",
  description:
    "This is the story of a very grand sacrifice, where an unexpected incident took place because of the pride of one Prajapati. This led to a set of curses, and eventually a fight. Solve it if you can.",
  accent: "#7fcfe3",
  congratsMessage:
    "Congratulations! On to the next one!",
  nextSlug: "the-fall-from-the-seventh-gate", 
  trivia: `
    <p>Daksha, the Prajapati, married Prasuti who is the third daughter of Manu. She gave birth to sixteen daughters, all of whom were married to the Lord of Dharma, except for one – Sati.</p>
    <p>Sati was a great devotee of Lord Shiva and she worshipped him at all times with intense devotion. Eventually, they were married. One day, Daksha decided to perform a sacrifice. All the Rishis, Gods, Kings, and celestials were invited to it.</p>
    <p>When Daksha entered the sacrificial hall, the entire assembly rose in respect. But there were two people who hadn't stood up. One of them was his father – Brahma, and the other was Shiva. Daksha prostrated before Brahma, and asked his blessings. He then turned to Shiva who continued to sit quietly.</p>
    <p>Offended, Daksha lost his temper and began scolding Shiva. He cursed him that he will henceforth never get the share of any sacrifice.</p>
    <p>At this, Nandishwara cursed Daksha that he will forever be chained to the path of sacrifice and ritual, and that he would soon acquire the face of a goat. He also curses the Brahmins who were supporting Daksha that they would be forever caught up in the cycle of birth and death, and that they will crave wealth and worldly enjoyments.</p>
    <p>In response to this, Bhringu – who was the leader of the Brahmins, cursed Nandi and the followers of Shiva that they would adorn their bodies with ashes and bones, and would frequent cremation grounds.</p>
    <p>There was confusion all round. People had never heard such terrible curses before. Shiva got up and left the hall, and his followers went with him. Since then, there was enmity between the followers of Shiva and the followers of Daksha.</p>
    <p>Later on, Daksha was made the head of Prajapatis, and he decided to perform a Yagna on a very lavish scale – this was the Brihaspati Yagna – to which all the inhabitants of the three worlds were invited except Shiva and Sati.</p>
    <p>When Sati heard about the elaborate preparations going on, she also wanted to go and see it. Shiva pointed out that they had not been invited, but Sati insisted that one did not need an invitation to visit her father's house, and also that she was eager to see her mother and sisters again.</p>
    <p>So finally, Shiva agreed, and Sati set off on Shiva's bull, accompanied by some attendants. However, when she arrived there, no one came forward to receive her (except for her mother and sisters), and the other guests would not even talk to her out of fear of Daksha.</p>
    <p>Sati then looked around and realized that no yagna offering had been kept in the name of Shiva. She turned furiously on Daksha and told him that he had shown disrespect on Shiva in whose eyes all are equal.</p>
    <p>To the horror of everyone watching, she sat down in a yogic posture, facing north, and closed her eyes. Focusing on the air and fire elements in her body, she fixed her mind on Lord Shiva, and suddenly – her body caught fire and was reduced to ashes.</p>
    <p>Narada ran to tell Shiva what had happened. Shiva rose in great fury and tore a lock of his hair and smashed it on the ground. From it sprang a being, tall and terrible, named Virabhadra. He had a thousand hands, and in each of them, he carried mighty weapons of destruction. Shiva commanded him to lead his whole army and destroy Daksha and his sacrifice.</p>
    <p>Like a dust storm, Virabhadra and the warriors of Shiva descended upon the Yagna, and began their destruction. Finally, after Virabhadra had cut off the head of Daksha, he and the army returned back to Kailasa.</p>
    <p>Then the Devas, along with Brahma, went to Mount Kailasa, where they found Lord Shiva absorbed in Yoga Samadhi.</p>
    <p>Brahma then requested Shiva to pardon Daksha and his followers, to return them back to life, and to let the Yagna be completed. He requested him not to let his anger destroy the ignorant Devas, and told him that they had learnt their lesson. He also said that henceforth, the remnants of all the Yagna offerings would be Shiva's.</p>
    <p>Shiva stirred and looked up with a smile, and said that he has nothing against Daksha, but that he has indeed taught a lesson to those who had been led astray by Maya. He wanted them to know that he does not care for sacrifices on the material level, and that he attached no importance to the body whatsoever. He promised that the limbs of the Devas would be restored to them, and that since Daksha's head was burnt up, to have it replaced with the head of a goat.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 300,

  nodes: [
    // ROW 1 — Daksha
    {
      id: 1,
      pattern: "D__S__",
      clue: "The head of the Prajapatis, and the son of Lord Brahma. He decided to perform a huge Yagna, to which all the beings of the three worlds were invited, except one God.",
      answer: "DAKSHA"
    },

    // ROW 2 — Prasuti
    {
      id: 2,
      pattern: "P______",
      clue: "The third daughter of Swayambhuva Manu, who married the character on the left.",
      answer: "PRASUTI"
    },

    // ROW 3 — Sati (center)
    {
      id: 3,
      pattern: "S_T_",
      clue:
        "Incarnation of the Goddess and one of the sixteen daughters of the above couple. When her father disrespected the God of Kailasa, she immolated herself in the sacrificial hall.",
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
      clue: "Reincarnation of the previous character, reborn as the daughter of Himavan, the king of the mountains. She performed a rigorous penance to be reunited with her husband.",
      answer: "PARVATI",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Daksha
      2: { x: 1, y: 0 }, //Prasuti
      3: { x: 1, y: 1 }, //Sati 
      4: { x: 2, y: 2 }, //Shiva  
      5: { x: 1, y: 3 } //Parvati   
    },

    connections: [
      // Daksha → Prasuti
      { from: 1, to: 2, noArrow: true, sideOrigin:"right", sideTarget:"left"},

      // Daksha → Sati
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top" },

      // Prasuti → Sati
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top" },

      // Sati → Shiva
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget:"top" },

      // Shiva → Parvati
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget:"top" },

      // Sati → Parvati
      { from: 3, to: 5, label:"reincarnated as", sideOrigin:"bottom", sideTarget:"top" }
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
  trivia: `
    <p>One day, four of Brahma's mind-born sons, the Sanatkumaras, decided to visit Lord Vishnu in Vaikuntha. Because of their great Tapas, they looked like small five-year old boys, despite being some of the oldest living beings.</p>
    <p>These sages passed through the first six gates unhindered, but when they reached the seventh gate – two gatekeepers, Jaya and Vijaya, stopped them with their clubs, thinking they were small children.</p>
    <p>The Rishis were upset by this and ask them how they can make distinctions in Vaikuntha where a uniform oneness prevails. Saying that Jaya and Vijaya are not fit to live in the Sattwik sphere, they curse them to descend onto the earth.</p>
    <p>Jaya and Vijaya realized their mistake, and begged to be forgiven. Vishnu, who knew everything that was happening, hurried outside with Lakshmi by his side. He said that Jaya and Vijaya would be born as Asuras, but that their minds would constantly be fixed on him. (in anger and hatred)</p>
    <p>He then told them to go forth and not be afraid, and that when the time would come, he would come and redeem them.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "The god who carries the conch, discus, mace, and lotus. He promised his two gatekeepers (who were under a curse to be born as Asuras), that he would himself come and redeem them.",
      answer: "VISHNU",
      size: "wide"
    },

    // ROW 2 — Jaya & Vijaya
    {
      id: 2,
      pattern: "_AY_",
      clue: "One of the gatekeepers who were guarding the seventh gate at the entrance of Vaikuntha.",
      answer: "JAYA"
    },
    {
      id: 3,
      pattern: "V_J___",
      clue: "One of the gatekeepers who were guarding the seventh gate at the entrance of Vaikuntha.",
      answer: "VIJAYA"
    },

    // ROW 3 — Sanatkumara(s)
    {
      id: 4,
      pattern: "S_N_T_U__R__",
      clue: "The four sons of Brahma, who came to Vaikunta in order to visit Lord Vishnu. Although they were the wisest and oldest living beings, they appeared like five-year-old boys (due to their tapas). They cursed the gatekeepers to be born on Earth.",
      answer: "SANATKUMARAS",
      size: "wide"
    },

    // ROW 4 — Hiranyaksha & Hiranyakasipu
    {
      id: 5,
      pattern: "H___N__K___",
      clue: "Born to Diti and Kasyapa. He caused the Earth to fall into the ocean, for which Lord Vishnu had to take the form of a boar (Varaha), to lift Her back up.",
      answer: "HIRANYAKSHA",
      size: "wide"
    },
    {
      id: 6,
      pattern: "H_R____K_S___",
      clue: "The second son of Diti and Kasyapa. After his brother's death, he performed a rigorous Tapas to Lord Brahma. He asked Brahma to grant him a boon that he must not die in the hands of a god, man, demon or animal, and his death could not be by day or night, indoors or outdoors, in the sky or in the earth, and not by any weapon.",
      answer: "HIRANYAKASIPU",
      size: "wide"
    },

    // ROW 5 — Ravana & Kumbhakarna
    {
      id: 7,
      pattern: "R_V___",
      clue: "The son of Vishrava and Kaikasi, and the king of Lanka, who forcibly abducted the incarnation of Goddess Lakshmi.",
      answer: "RAVANA"
    },
    {
      id: 8,
      pattern: "K_M___K____",
      clue: "The second son of Vishrava and Kaikasi. He was known for his immense size, strength, and enormous appetite, and would sleep for 6 months at a time.",
      answer: "KUMBHAKARNA",
      size: "wide"
    },

    // ROW 6 — Shishupala & Dantavakra
    {
      id: 9,
      pattern: "S__SH_P___",
      clue: "Son of Damaghosha and Srutashrava, who was known for his enmity with Lord Krishna (his cousin). His mother asked Lord Krishna for a boon, to forgive her son for any offenses that he may commit, for a hundred times. After his 101th mistake that happened during Yudhishtira's Rajasuya Yagna, this character was killed with the Sudarshana Chakra.",
      answer: "SHISHUPALA",
      size: "wide"
    },
    {
      id: 10,
      pattern: "D_NT_V_KR_",
      clue: "Son of Vriddhasharman and Shrutadeva. King of Karusha, and the final incarnation of Vijaya. Was an enemy of Krishna and attacked him when the latter was on his way to Dwaraka. In the mace duel that followed, Krishna killed him.",
      answer: "DANTAVAKRA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      // IMAGE
      100: { x: 1, y: 0 },
    
      1: { x: 1, y: 1 }, //Vishnu     
      2: { x: 0, y: 2 }, //Jaya
      3: { x: 2, y: 2 }, //Vijaya
      4: { x: 1, y: 3 }, //Sanatkumaras     
      5: { x: 0, y: 4 }, //Hiranyaksha
      6: { x: 2, y: 4 }, //Hiranyakasipu
      7: { x: 0, y: 5 }, //Ravana
      8: { x: 2, y: 5 }, //Kumbhakarna
      9: { x: 0, y: 6 }, //Shishupala
      10:{ x: 2, y: 6 } //Dantavakra
    },

    connections: [
      // Vishnu → Gatekeepers
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget:"top" },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top" },

      // Jaya — Vijaya
      { from: 2, to: 3, straight: true, noArrow: true, label: ["brothers"], sideOrigin:"right", sideTarget:"left" },

      // Gatekeepers → Sanatkumara(s)
      { from: 2, to: 4, label: ["tried to stop them", "from entering"], sideOrigin:"bottom", sideTarget:"top" },
      { from: 3, to: 4, label: ["tried to stop them", "from entering"], sideOrigin:"bottom", sideTarget:"top" },

      // Reincarnation chains
      { from: 2, to: 5, straight: true, noArrow: true, label: ["reincarnation"], sideOrigin:"bottom", sideTarget:"top" },
      { from: 3, to: 6, straight: true, noArrow: true, label: ["reincarnation"], sideOrigin:"bottom", sideTarget:"top" },

      // Brothers
      { from: 5, to: 6, straight: true, noArrow: true, label: ["brothers"], sideOrigin:"right", sideTarget:"left" },

      // Next reincarnation
      { from: 5, to: 7, straight: true, noArrow: true, label: ["reincarnation"], sideOrigin:"bottom", sideTarget:"top" },
      { from: 6, to: 8, straight: true, noArrow: true, label: ["reincarnation"], sideOrigin:"bottom", sideTarget:"top" },

      // Brothers again
      { from: 7, to: 8, straight: true, noArrow: true, label: ["brothers"], sideOrigin:"right", sideTarget:"left" },

      // Final incarnation
      { from: 7, to: 9, straight: true, noArrow: true, label: ["reincarnation"], sideOrigin:"bottom", sideTarget:"top" },
      { from: 8, to: 10, straight: true, noArrow: true, label: ["reincarnation"], sideOrigin:"bottom", sideTarget:"top" },

      // Cousins
      { from: 9, to: 10, straight: true, noArrow: true, label: ["cousins"], sideOrigin:"right", sideTarget:"left" }
    ]
  }
},

{
  id: 12,
  slug: "forgotten-love",
  title: "Forgotten Love", 
  description: "This story started with a penance that was disturbed by Indra, and finally ends with the birth of a king whose name would define a nation. Piece together this tale from the Mahabharata.", 
  accent: "#c77dff",
  congratsMessage: "Nicely done. On to the next puzzle!",
  nextSlug: "devotee-deity",
  trivia: `
    <p>Once, there was a King named Vishwamitra, who had given up everything to become a sage, and went into meditation in a forest for several years.</p>
    <p>Indra, the king of gods, was worried that this powerful sage's penance would be a threat to his throne, so he sent a beautiful celestial dancer named Menaka to distract Vishwamitra.</p>
    <p>Menaka came down from the heavens and tried her best to distract the sage. Vishwamitra opened his eyes, and the moment they landed on Menaka, he forgot his meditation and fell in love with her. The couple lived happily for a while, and had a baby girl.</p>
    <p>Vishwamitra realised to his dismay that he had forgotten about his penance. Angry, he told Menaka that she had diverted his attention from his purpose, and left the home.</p>
    <p>Menaka placed the baby on a leaf under a shady tree, and prayed to the Gods above and the creatures in the forest to look after her. Sage Kanva, who was passing by, saw to his surprise a baby girl surrounded by birds. He realised by his yogic powers that the child had been abandoned there. He picked the baby up and brought her back to his ashram to raise her. Since she had been surrounded by <em>Shakunta</em> birds when he had found her, he named her Shakuntala.</p>
    <p>Shakuntala thus grew up in Sage Kanva's ashram, and was very fond of the animals, birds and trees there.</p>
    <p>One day, Sage Kanva had to go away from the ashram for a few months. While she was busy tending to the garden and watering the plants, she heard a voice behind her requesting for water.</p>
    <p>It was a young man — none other than Dushyanta, who was the descendant of the Kurus and the King of Hastinapur. He had come to the forests near the ashram for hunting wild animals, as he had heard that they were constantly attacking his people.</p>
    <p>Dushyanta and Shakuntala were instantly drawn to each other, and the King began visiting the ashram every day. Weeks passed, and the couple got married.</p>
    <p>Soon after, Dushyanta had to go back to the capital. He gave Shakuntala a ring, and promised to send word to her father soon after reaching Hastinapur, to take his permission to bring her too.</p>
    <p>Dushyanta soon became busy with matters of the state when he reached the capital. Shakuntala was constantly lost in thoughts of him, and one day — Durvasa, a sage known for his short temper, entered the ashram to meet Kanva. Shakuntala was so distracted that she forgot her duties as a host and did not offer so much as a greeting to the sage.</p>
    <p>Durvasa was livid at this, and cursed her that the person in her thoughts would have no recollection of her from that point on.</p>
    <p>Shakuntala had barely registered his words, but her friends who heard this immediately pleaded with the sage to take back his curse. They told him that she never hurt anyone even unintentionally, and asked for forgiveness on her behalf.</p>
    <p>Durvasa said that he could not take back the curse, but modified it slightly. He said that if Shakuntala possessed a material item belonging to the person she was thinking about, then that person would remember her as soon as he saw it.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Soon, it was time for Shakuntala to depart. Her friends reminded her to keep the ring carefully, and she finally left the ashrama along with Gautami and a few sages. After leaving the forest, they took a boat across the river Ganga to reach Hastinapur. Shakuntala absent-mindedly dipped her hands in the water while thinking of Dushyanta. As the ring was slightly loose, it fell into the river and was swallowed by a fish.</p>
    <p>After a long journey, they finally reached the royal court, where Dushyanta was busy with matters of state. When they got the chance, Gautami addressed the King and presented Shakuntala before him, saying that they had brought his wife back and requesting him to look after her well, on behalf of their guru.</p>
    <p>King Dushyanta, as per the curse, could not recollect her at all. He told the group that they must be mistaken. Shakuntala then went on to narrate a few incidents, trying her best to remind him, but it was of no use. Suddenly, she remembered the ring he had given her. She stretched out her hand to show him, and then realised to her horror that it was gone. Helpless, Shakuntala left the court in silence.</p>
    <p>While they were on their way back to the ashrama, Menaka suddenly came down from the heavens. She took Shakuntala to Sage Marichi's ashrama, where Shakuntala gave birth to a baby boy and named him Bharata.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>A few days later, a soldier came to Dushyanta and said that they had arrested a fisherman who had been trying to sell his ring in the local market. When the fisherman was brought to the king, he explained in a shaky voice that he had caught a huge fish and had found the ring inside it.</p>
    <p>The ring was handed over to the King, and the moment he saw it, he remembered everything about Shakuntala. He recalled the way he had mercilessly sent her away and was overcome with remorse. He rewarded the fisherman and instructed his soldiers to find Shakuntala. They searched every nook and corner of the kingdom but could not locate her.</p>
    <p>Meanwhile, as the years rolled by, Bharata was growing up quickly under Shakuntala's care. He was a brave young boy whose playmates were wild animals!</p>
    <p>One day, Indra requested Dushyanta to help him in a war against the asuras. Dushyanta agreed and managed to defeat them. On the way back from Indra's abode, he stopped to rest at Sage Marichi's ashrama. There, he saw a wonderful sight — a young boy was fearlessly playing with a lion cub and forcing its mouth open to count its teeth.</p>
    <p>He saw a strange armlet on the ground and picked it up. Suddenly, a maid came rushing towards him, panic-stricken, telling him not to touch it. She explained that the armlet had special powers given by Sage Marichi to protect the boy — if anyone other than his parents and guru were to touch it, it would turn into a snake and bite the person holding it. Dushyanta only smiled and held on.</p>
    <p>Meanwhile, Shakuntala, hearing the commotion, rushed out to see what was going on. When she saw Dushyanta, she stopped in her tracks and stared at him in disbelief. Dushyanta looked back at her and begged her for forgiveness. By now, Shakuntala had understood the reason for this turn of events, and that it was not Dushyanta's fault for not having recognised her.</p>
    <p>King Dushyanta went straight to Sage Marichi and sought permission to take his family home, and finally brought Bharata and Shakuntala back to Hastinapur.</p>
    <p>Bharata grew up to be a great ruler and conquered lands all over India. In time, he came to be known as Bharata Chakravarti. He performed many yagnas including Ashwamedha Yagna, Rajasuya Yagna, Vajapeya Yagna, and the Viswajit Yagna. Usually, a successful king performed only one of these yagnas, but the warrior-king Bharata surpassed everyone. He performed hundreds of Ashwamedha Yagnas – 100 on the banks of River Yamuna, 300 on the banks of River Saraswati, and 400 on the banks of River Ganga.</p>
    <p>It is this Bharata after whom our country is named — <em>Bharatavarsha,</em> the Kingdom of Bharata.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales from the Mahabharata</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "M_N___",
      clue: "An Apsara sent by Indra to distract Vishwamitra from his penance. After their union results in a child she left the newborn baby in the forest, under the protection of birds. As her mission was complete, she returned to heaven.",
      answer: "MENAKA"
    },

    {
      id: 2,
      pattern: "K_N__",
      clue: "A compassionate Rishi who discovered the abandoned baby, and took her under his care. He named her after the birds that protected her.",
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
      clue: "The King of Hastinapur who came to the forest for hunting, and encountered her. They both fell and love and got married - who was this king?",
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
      clue: "A fiery-tempered sage who visited the hermitage but is ignored by her, as she was lost in thoughts of the King. Offended, he cursed her that the one she was thinking of would forget her.",
      answer: "DURVASA"
    },

    {
      id: 6,
      pattern: "B__R_T_",
      clue: "Their son, who eventually became a mighty ruler of Hastinapur, and he was the one after whom this country is named.",
      answer: "BHARATA", 
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Menaka
      102: { x: 1, y: 0 }, //Dushyanta image
      2: { x: 1, y: 1 }, //Kanva
      101: { x: 2, y: 1 }, //Shakuntala image
      3:   { x: 1, y: 2 }, //Shakuntala
      5: { x: 0, y: 3 }, //Durvasa
      4: { x: 2, y: 3 }, //Dushyanta
      6: { x: 1, y: 4 } //Bharatha
    },

    connections: [
      // Menaka → Shakuntala
      { from: 1, to: 3, straight:true, label:"daughter", sideOrigin:"bottom", sideTarget: "left" },

      // Kanva → Shakuntala
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top" },

      // Shakuntala — Dushyanta
      { from: 3, to: 4, straight: true, noArrow: true, label:"married", sideOrigin:"right", sideTarget:"top" },

      // Durvasa → Shakuntala
      { from: 5, to: 3, label: ["cursed her"], sideOrigin: "top", sideTarget: "left", straight: true },

      // Shakuntala → Bharata
      { from: 3, to: 6, sideOrigin:"bottom", sideTarget:"top" },

      // Dushyanta → Bharata
      { from: 4, to: 6, sideOrigin:"bottom", sideTarget:"top" }
    ]
  }
},

{
  id: 13,
  slug: "devotee-deity",
  title: "Deity and Devotee",
  description: "Across different Yugas and traditions, devotion binds the mortal and the divine. Match each devotee to the deity they surrendered themselves to.",
  accent: "#ffe39b",
  congratsMessage: "Congratulations! On to the next puzzle!",
  nextSlug: "the-boons-that-changed-a-kingdom",
  triviaAccordion: [
  {
    title: "Prahlada & Narasimha",
    content: `<p>Hiranyakasipu had four sons of whom the youngest was called Prahlada. From birth itself, he was a great devotee of Vishnu. He would constantly chant the glories of Lord Vishnu, which caused great alarm to his father. </p>
    <p>The teacher of the daityas was Shukracharya. He had two sons who were the tutors of Prahlada. It was their duty to teach Prahlada how to be a perfect daitya. He learnt all his daitya lessons very well indeed but his heart was not in them. Whenever he got the opportunity, he would sing the glories of Sri Vishnu. </p>
    <p>This troubled his teachers very much, so they took him to the king and told him all about it. Hiranyakasipu lovingly took Prahlada on his lap and asked him what he thought was the greatest good. Prahlada replied immediately - “I think that the highest good is to leave the home where one is always thinking in terms of ‘I’ and ‘mine’, and to go into the forest and undisturbed, meditate upon Sri Hari." </p>
    <p>Hiranyakasipu called the teachers of the boy aside and said to them - “I do not understand where he gets these ideas from. Keep a close watch over him and see that he does not come in contact with anyone who is likely to utter the name of Vishnu.” </p>
    <p>The teachers, with great care taught him all about righteousness (Dharma), wealth (Artha) and desire-fulfilment (Kama) but left out even the mention of Moksha. Prahlada repeated all the material and secular lessons after them very faithfully. Then they took him before the king once more, and asked him to repeat the lesson he had just learnt. </p>
    <p>Instead, Prahlada said, “Devotion to Lord Vishnu – hearing His glories, reciting them, constantly remembering Him, attending upon Him, worshipping Him, adoring Him, serving Him, being His friend, and surrendering oneself entirely to Him-these are the nine-fold modes of devotion which must be practised at all times.” </p>
    <p>Now Hiranyakasipu was really furious. He scolded the teachers and then turned his angry red eyes on the little Prahlada, asking him to tell the truth. Who had taught him all this nonsense about Vishnu? </p>
    <p>Prahlada calmly replied that those were indeed blind who had thought for Narayana, but instead derived the same cheap pleasures from the same sense objects, birth after birth. It was only Narayana who could lift one out of this cycle. </p>
    <p>Now Hiranyakashipu's fury knew no bounds. He shouted to put the child to death. The blood-thirsty asuras pounced upon Prahlada and pierced the little boy with their poison-tipped spears. </p>
    <p>But nothing happened to Prahlada, for his mind was concentrated upon the Lord - he did not even feel the spear thrusts! </p>
    <p>Hiranyakasipu was now at his wits’ end. He tried various means of putting Prahlada to death. </p>
    <p>He ordered him to be trampled upon by a mad elephant. The enraged animal rushed on to the little boy, but stopped short of him, bowed his head and turned away! Then Hiranyakasipu ordered the daityas to take him to the top of the highest mountain and drop him from it. Prahlada was all the time thinking of Sri Narayana, with the result he came down as gentle as a flower is brought down by the breeze on the grass! His food was poisoned. He was bitten by poisonous snakes. He was locked up in a solitary cell for days without food. He was thrown into the sea. He was burned by fire. He was made the object of numerous magical spells and enchantments. But he always came out of them safe and sound. </p>
    <p>Hiranyakasipu was now thoroughly frustrated. This was the first time that his authority had been challenged. Besides it was also a tremendous blow to his pride. For up till now he had never known fear, failure or humiliation. The teachers tried to pacify him by saying that Prahlada was still too small to know what he was saying and that in time he would learn to behave like a true daitya. </p>
    <p>So once again, Prahlada was given to the care of his teachers who taught him the duties of a true king. They taught him the asuric sciences all over again. One day, when the teachers were away, Prahlada got together the other little daitya boys and taught them how to chant the name of the Lord. He told them not to follow the example of their elders who had given in to the pleasures of their senses. Prahlada told them to devote their minds to Narayana and to be kind and compassionate to all. </p>
    <p>The little daityas liked what he told them. So they all sat down together and sang the glories of the Lord, as taught to them by Prahlada. </p>
    <p>Hiranyakasipu soon came to hear about this. He ordered Prahlada to be brought before him, and scolded him that he seemed to be bent upon creating trouble in his own race. Hiranyakasipu then asked him where he was getting such extraordinary strength to resist him. </p>
    <p>Prahlada replied that his only strength was Lord Vishnu. He was not only his strength, but also his. He was the strength of the whole universe. </p>
    <p>Hiranyakashipu screamed that there was no Vishnu, and that he was the only Lord. Prahlada shook his head and said that Vishnu was the Lord of the universe - without a beginning and without an end. He was present in the entire universe and was therefore to be worshipped. </p>
    <p>Hiranyakashipu then shouted - "Is your Vishnu present in this pillar too?” </p>
    <p> “Yes, in that too,” said Prahlada. </p>
    <p> “Then let Him show Himself to me,” said Hiranyakasipu, cutting down the pillar in uncontrolled rage. </p>
    <p>Wonderfully, this prayer of the daitya king was heard! </p>
    <p>Suddenly, the pillar split into two with such tremendous force that the sound echoed in all the worlds and filled man, god, animal and demon with fear. </p>
    <p>And out of the pillar came a mighty Being, half-man-half-lion. He was of a huge build and his stature was awe-inspiring. His face, eyes, and mane had a brilliance that shed their dazzling light all around. His neck was short and thick. His chest was broad and mighty. His tongue had an edge as sharp as a razor’s and his teeth and claws were sharp and glistening. </p>
    <p>All the daityas present, though they were armed with the most dangerous weapons, fled in sheer fright. Hiranyakasipu lifted his iron mace to strike him. But the Narasimha roared a tremendous roar which was at once like a man’s laughter and a lion’s roar. With the greatest ease, he picked up the mighty daitya and placed him in his lap across his thighs. Then, with another of his heart-rending laughs, he tore open the heart and bowels of Hiranyakasipu and flung the dead carcass aside. Then he turned his countless arms on all sides and slew the wicked supporters of the dead king. And with one leap, he seated himself on the throne. </p>
    <p>Flowers were showered on him from above. Brahma, Shiva, the Rishis, the gods and the goddesses, all sang the praises of Sri Vishnu. There was great rejoicing in the three worlds. But Narasimha continued to quiver and none of the gods or Rishis dared to approach him. </p>
    <p>Brahma then sent Prahlada to him. He approached Him slowly and prostrated before him. The Lord, in an outpouring of divine love, placed His hand on the head of His little devotee, and raised him to his feet. </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Bhagavatam - Central Chinmaya Mission Trust</em></p>
    `
  },
  {
    title: "Arjuna & Krishna",
    content: `<p>The day of the war arrived. The armies of the cousins stood facing each other. The Pandava fleet was smaller in size. Their hope was hinged on the might of their warriors, most of all on Bheema and Arjuna. </p>
    <p>For his part, Arjuna had been waiting for this day. He had spent a significant part of the thirteen-year vanvas doing penance and collecting celestial weapons for a probable war. After all modes of a peaceful resolution were exhausted, a war for justice had become inevitable. </p>
    <p>Yudhishthira was very upset. “How do we expect to win by killing our own elders and teachers? They are not worthy of being killed.” Arjuna consoled him, “Had it been an unrighteous act, Krishna, Vidura and our mother Kunti would have deterred us from the war. They have encouraged us to take this path as it is the right thing to do. We shouldn’t be abandoning the war now.” </p>
    <p>The morning before the armies proceeded to the battlefield, Yudhishthira was informed of the conversation in the Kaurava camp about the prowess of their warriors. Concerned, he called his brothers and other key allies to share what he had heard about the might of the Kaurava army. </p>
    <p>Arjuna reminded Yudhishthira of his previous exploits and possession of the Pashupatastra, which none of the warriors on the Kaurava side had. He clarified, though, that it would be used only as the last recourse as such deadly weapons were not meant for use on human beings under normal circumstances. Arjuna listed out the mighty warriors who were there to support the Pandavas to assuage Yudhishthira’s concerns. “And what to say about your prominence? When filled with rage, you can destroy the enemy with a mere glance,” Arjuna said encouragingly. </p>
    <p>Yet, as he saw Bhishma, Dronacharya, Kripacharya and his cousins standing across him on the battlefield ready to fight and die, Arjuna himself was rattled. “What is the point of a victory that will be covered in the blood of the same people for whom I wish to win. And win what? Just the luxuries of a kingdom? I would rather die than fight this war that entails me to kill my people. I will not fight this war.” declared a dejected Arjuna, collapsing in his chariot. </p>
    <p>In that moment of bewilderment, Arjuna forgot the injustice done to them and Draupadi. He forgot that the entire Pandava forces’ hopes of victory hinged solely on his bow. He forgot that only a few months back, he had single-handedly defeated the Kauravas in the battle of Virata. </p>
    <p>Krishna smirked. Appealing to Arjuna’s warrior spirit, he said, “From where has this unworthy sorrow befallen you? Don’t give in to cowardice. Get up and fight.” </p>
    <p>Arjuna was too perturbed to make much of being called a coward. But he did realise that he was not thinking clearly. Very humbly, he sought Krishna’s guidance, “My mind is completely bewildered. I can’t decide what is the right thing for me to do. I, therefore, come to you as a disciple. Please guide me.” For the one considered the greatest warrior in Bharatavarsha, to accept that he was confused and needs help was quite a humble gesture—and a sincere one. </p>
    <p>Krishna, as a friend and a mentor, reminded Arjuna of his <em>swa-dharma.</em> He explained to Arjuna why he needs to act and how. Krishna assured him that he will stand by Arjuna at all times but also made it clear that he can only be a guide. The eventual decision and action will have to be Arjuna’s to own. </p>
    <p>At the end of his discourse, Krishna said, “I have told you everything that you need to know. Now mull over it and do what you deem right.” Sense prevailed. Arjuna geared up to fight. The war commenced. </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Mahabharatha Unravelled - Ami Ganatra</em></p>
    `
  },
  {
    title: "Dhruva & Narayana",
    content: `<p>King Uttanapada was the first son of Manu – he had two wives, the elder was Suniti and the younger was Suruchi. Suruchi was very beautiful and so the king favoured her. However, she had a terribly jealous and possessive nature – so much that she wouldn't even let the King see Suniti or her son.</p>
    <p>One day, Suruchi was sitting, laughing and chatting with the king and her son Uttama was playing on his lap. Just then, Dhruva (the son of Suniti) came into the room, and he too, wanted to climb his father's knee and play with him. But the king, fearing Suruchi's anger, paid no attention to him. Suruchi taunted the little boy and said that although he was the king's eldest son, to be in his favour was a different thing. For that, he would have to take birth in her womb. Therefore, she told him to go do penance so that in his next life, he could be born as her son. Dhruva sadly looked up at his father, but the king took no notice.</p>
    <p>Now Dhruva, although only five years old, was of an extremely sensitive nature. He ran to his mother's apartments and clung to her legs, crying uncontrollably. Suniti took him in her arms, and soothed him with soft, loving words. When he had become fairly calm, she told him that there was always justice in the eyes of God. Everyone had to pay the price for their karmas, whether good or bad. She added that Suruchi had told one truth – through penance, prayer and the grace of Narayana, everything was possible.</p>
    <p>Dhruva asked his mother who Narayana was and where he could find him.</p>
    <p>Suniti answered that he was called the Lotus-eyed One – and he removed the miseries and fulfilled the desires of those who renounced everything and took refuge in Him. But He was not easily attainable – after years of austerity and penance, yogis had realized Him through intense devotion, seated deep within their own hearts.</p>
    <p>Dhruva thought over his mother's words, and that night, when everyone was fast asleep, quietly stole out of the palace and made his way towards the deep, dark jungles. He walked thus for many days and nights without food, water or rest, calling out to Narayana. He asked the lions, tigers, bears and jackals of the forest if they had seen Narayana – they looked at him in amazement, shook their heads and walked away.</p>
    <p>It is said in the <em>Shastras</em> that when one sought the light to dispel the darkness in one's heart, the Lord would send a teacher who had discovered his own inner Light.</p>
    <p>Narada had heard the sincere cries of Dhruva for the vision of the Lord. Narada set out to meet the boy and decided to test his earnestness. He told him that he was too young to start off on his search for God, and to go back to wherever he belonged. These were the days to enjoy – asked him to go and lead a worthy life, and when all his duties were over, he could meditate on the Lord.</p>
    <p>Dhruva said that his desire to realise God was the highest goal in life and prayed to show him the path.</p>
    <p>Narada, now convinced that Dhruva was a sincere seeker, taught him how to meditate and also taught him the mantra – "OM NAMO BHAGAVATE VASUDEVAYA", and asked him to meditate upon it constantly.</p>
    <p>Narada then advised Dhruva to go to Madhuvanam, on the sacred banks of Yamuna to practice his penance. He told him to meditate on him always, to see only Him at all places and in all beings.</p>
    <p>During the first few days, Dhruva was restless. But soon he found a boundless joy in meditation. He subjected himself to rigorous tapas and undertook terrible fasts, only eating dried leaves and grass, sipping water once in nine days, and breathing only once in a while. He went into long spells of Samadhi. By the fifth month, he had lost all consciousness of the outer world and entered deeper into meditation.</p>
    <p>So great was the force of his penance, that the three worlds rocked! The earth tilted at the point where his toe pressed on the ground. When he stopped his breath in Samadhi, the breath of the three worlds also stopped, suffocating the creatures.</p>
    <p>The Lord was now thirsty for the darshan of his <em>bhakta</em>, and he mounted his Garuda.</p>
    <p>Dhruva opened his eyes and was dazzled by the presence of the Lord. He prostrated before him, but could not utter a single word, he was so struck by the resplendence of Sri Narayana!</p>
    <p>In blessing, he touched Dhruva with His divine conch. Dhruva's heart was flooded with love and then with supreme joy, he sang the praises of the Lord.</p>
    <p>Narayana then said that he would grant him his boon, but now he must go back to his father and rule the kingdom till his allotted time on the earth was over. Then, he would ascend to the celestial sphere where the Devas, Gandharvas and Apasaras constantly chanted the Lord's glories.</p>
    <p>There – he would have a permanent, unchanging place and would be called the Dhruva Nakshatra. In later years, men would draw their guidance from him.</p>
    <p>With this blessing, Narayana disappeared.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Bhagavatam - Central Chinmaya Mission Trust</em></p>
    `
  },
  {
    title: "Ravana & Shiva",
    content: `<p>King Ravana of Lanka was a devoted disciple of Lord Shiva. His mother, Kaikesi, was also a devotee and responsible for initiating the seeds of Shiva bhakti into her son. </p>
    <p>One day, Ravana decided to go to Mount Kailasa and perform a penance to please Lord Shiva. He met his mother before leaving, who advised him not to ask the lord for material things, but to instead ask him for the divine <em>atmalinga</em>, the source of immortality and great power. </p>
    <p>Meanwhile Vishnu, who was following the course of events, was aware of Ravana’s desire for the atmalinga. He was against the idea of Ravana possessing the linga. Ravana was an asura and could wreak havoc upon the gods once he owned it. Therefore, he decided to enter Ravana's mind and influence it whenever Shiva appeared. </p>
    <p>Years passed in deep meditation and strict penance, but Lord Shiva did not appear. Angered by this and filled with a desire to force Shiva’s attention, Ravana put his palm below Mount Kailash, ready to lift it. </p>
    <p>Lord Shiva simply put his little toe to the ground. That was enough. Ravana’s fingers became trapped under Mount Kailash. He pulled and pulled to get them out but to no avail. Realizing Shiva’s greatness, Ravana prayed to him for forgiveness. This prayer is now known as the "Shiva Tandava Stotram".</p>
    <p>The kind-hearted Shiva forgave Ravana and lifted his toe, and asked him to tell him what he wanted. </p>
    <p>Ravana was about to ask for the precious atmalinga, when Vishnu entered his mind to play truant. Instead of asking for the atmalinga, Ravana glanced at Goddess Parvati and said, "I want . . . Parvati." </p>
    <p>Goddess Parvati was upset with the demon’s audacity, but Lord Shiva smiled and said, - "Take her if you can. You have my permission." </p>
    <p>Parvati was furious at her husband, but Shiva merely smiled and told her that she knew what to do, and that he would see her soon. </p>
    <p>Left with no choice, Parvati followed Ravana, who was ecstatic at the thought of the goddess following him. </p>
    <p>They set off towards Lanka. After some time, he turned around to see her, but she was gone. Surprised, Ravana started searching for the goddess, all the time wondering where she could have disappeared to. </p>
    <p>During his search, he met Narada, the son of Brahma and an ardent devotee of Vishnu. Befitting his unique status, Narada had the ability to travel the three realms. </p>
    <p>When Ravana asked Narada if he had seen Parvati anywhere, the sage replied that the one who had been following him was not the real Parvati anyway, and that the real Parvati was hiding in Patala Loka. Narada told Ravana that he would recognize her immediately because she was the most beautiful woman, and told him to go there quickly before she ran back to Shiva. </p>
    <p>Patala was also the abode of Mayasura, the great architect of the asuras. He had a daughter named Mandodari whose beauty was famous and unparalled. </p>
    <p>Meanwhile, Ravana went to Patala in search of Goddess Parvati, but when he saw Mandodari, he fell utterly and completely in love with her - he thought that she was the real Parvati. Taking advantage of the confusion, Parvati headed back to Mount Kailasa. </p>
    <p>Ravana requested Mayasura that he would like to marry this maiden, so a lavish wedding was arranged, and Mandodari and Ravana were married to each other. </p>
    <p>After some time, Ravana returned to Lanka with his new bride and introduced her to his mother as Parvati. When Kaikesi saw Mandodari, she instantly recognized the daughter of Mayasura, and told him that she wasn't Parvati, but the daughter of the great architect Mayasura. </p>
    <p>In a flash, Vishnu’s illusion reached its conclusion and Ravana recalled his goal with clarity. He realized how he had been duped twice—once by Vishnu and once by Narada. </p>
    <p>His mother chided him for asking for Parvati, and said that Mandodari would be a good wife to him. She instructed him to go back and redo his penance, this time, without making a mistake. </p>
    <p>So Ravana spent some time in Lanka with his new bride, whom he became very fond of, and then started another tapasya, this time determined not to be outwitted. </p>
    <p>Once more Shiva appeared in front of his devotee and said, "I am impressed by your devotion, Ravana. What do you want?" </p>
    <p>This time, Ravana was focused and prepared. He requested the Lord to give him the atmalinga. </p>
    <p>Lord Shiva was taken aback. He had not expected this. But he had given his word. So he handed the atmalinga over to Ravana, but with the condition that the linga must never be placed on the ground. If it was, the linga would remain there permanently. </p>
    <p>Ravana accepted the atmalinga and, thanking the lord, left. </p>
    <p>Word travelled fast to all the realms about the atmalinga’s new owner. It caused great concern, and the gods became worried. A powerful asura like Ravana would inevitably misuse the atmalinga. </p>
    <p>The gods approached Lord Ganesha and pleaded with him to help them. Ganesha told them not to worry and promised to bring it back. </p>
    <p>Ganesha knew that Ravana offered prayers to the sun god every evening, no matter where he was. As soon as it was time for Ravana’s prayers, Ganesha took the form of a young cowherd and wandered near Ravana. </p>
    <p>Seeing the boy idling around, Ravana called out to him and requested him to hold it until he finished his prayers. He assured the cowherd that he would pay him well, but he must not put the linga down no matter what. </p>
    <p>Ravana held out the atmalinga. Ganesha smiled and agreed. He said that he could only hold it for a while since he had to keep an eye on his cows. If Ravana took too long, he would put it down and go to look after his cows. </p>
    <p>Ravana assured him that he wouldn't take long and went to the water and began his evening prayers. </p>
    <p>After some time, Ganesha called him loudly. </p>
    <p>"Wait a minute." replied Ravana. </p>
    <p>After a few minutes, Ganesha called out to him again, saying that he could not hold on any longer, and that he had to go. </p>
    <p>Ravana left his prayers and ran towards the boy. But before he could reach him and take the atmalinga from his hands, the boy put the atmalinga down on the ground and walked away in a huff. </p>
    <p>Ravana was furious! He wanted to kill the young boy and looked around for him. But the boy had disappeared along with his cows. </p>
    <p>Ravana turned back to the atmalinga and focused all his anger and energy into picking up the linga. But it was of no use. After some time, with Ravana’s pulling and tugging, the linga changed shape and began to look like a cow’s ear. </p>
    <p>Unhappily, Ravana gave up and went back to Lanka, cursing the little cowherd. </p>
    <p>The atmalinga remained on earth in the holy town of Gokarna (which itself means ‘cow’s ear’) in northern Karnataka, and today, a small statue of Ganesha stands beside the linga on the spot where the lord is believed to have met Ravana. </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Sudha Murthy - Unusual Stories about Rama and Krishna</em></p>
    `
  },
  {
    title: "Markandeya & Shiva",
    content: `<p>Sage Mrikandu observed severe penances to please Lord Shiva. When Shiva finally appeared before him, Mrikandu requested him to bless him with a son. </p>
    <p>Shiva gave him a choice - he asked him if he wanted a son who would live long, though lacking in virtues, or a son who would be wise and virtuous but would live for only sixteen years. Sage Mrikandu chose to have a virtuous son. Granting the wish of the sage, Lord Shiva vanished. </p>
    <p>In due course, Marudvati, Mrikandu’s wife, gave birth to a son. They named him Markandeya. At a very young age, Markandeya had mastered the Vedas. </p>
    <p>Rishis would frequently be visiting Mrikandu’s ashrama. Whenever a rishi came, Mrikandu would make his child prostrate before them and seek their blessings. Typically, when one did that, the elder would bless the person with a long life, saying “Dirghayuṣmān bhava”. However, no rishi said this, because they were aware of what had been destined. </p>
    <p>One day, the Saptarishis along with Arundhati arrived at Mrikandu’s ashrama. When Markandeya prostrated before them, all of them in one voice, uttered “Dirghayuṣmān bhava”. Mrikandu was thrilled, because this was what he had wanted to hear. Meanwhile Narada also had been present there and was watching all this. </p>
    <p>Suddenly, he laughed. When the Saptarishis asked him why he was laughing, Narada said that for the first time in the history of this world, Veda Vak was about to be proven wrong. According to Veda Vak, if a rishi said something, it would have to come true. Narada then explained that Markandeya was destined to live for only sixteen years, so either Parameshwara would be proven wrong, or the rishis would be proven wrong. </p>
    <p>Even before Narada finished saying this, the Saptarishis vanished, taking Markandeya with them to Satya Loka. There, Brahma was surprised to see them and asked them why they had come. </p>
    <p>The Saptarishis replied that they had come to protect the spirit of the Vedas. Vedas said that whatever a rishi says has to come true. Now unknowingly, the Saptarishis had blessed the boy to have a very long life, and now there was this caveat. </p>
    <p>Lord Brahma instructed them to leave the boy with him, and that he would take care of what to do. Once they left, Brahma told the boy that all the people around him were so worried about him. Brahma was curious to know how Markandeya himself was feeling. </p>
    <p>Markandeya replied that he was not worried, however he said that his father was unhappy. Markandeya did not want to go, leaving his father in that state. He requested Brahma to give Mrikandu peace of mind. </p>
    <p>Lord Brahma smiled and said that the only way the boy’s father could have peace of mind, was if Markandeya had a long life. Brahma then said that he would show him how he could go beyond time. (This does not mean defying time but going beyond it.) </p>
    <p>Markandeya then innocently asked Brahma how he could do this. Brahma explained that there was one who ruled over time – Mahakaleshwara, and then proceeded to instruct him on how to worship this deity who was beyond time. </p>
    <p>Markandeya, after his initiation, went and sat down in deep tapas. While he was sitting in his dhyanam, suddenly, his time came to an end. Yama arrived before Markandeya to take him away, while the latter had been deep in his prayers to Lord Shiva. </p>
    <p>Markandeya said that his worship was not yet over, and told Yama that he would finish it and come. Yama said that he could not wait, and released his noose, starting to drag the boy away. </p>
    <p>At that moment, Markandeya hugged the Lingam, and composed a Stotram to Lord Shiva. Shiva suddenly sprang from the Lingam and struck Yama with his left leg. While Yama was appointed to bring people after their time was up, Markandeya had gone into a state beyond time, where time could not hurt him anymore. Thus, Markandeya became a <em>Chiranjeevi</em> and Yama had also been taught a lesson. </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference:</em> and <a href="https://www.youtube.com/watch?v=qVYsREdP98w " target="_blank" style="color:var(--accent-color);"> <em>The Puranic Concept Of Time</em></a></p>`
  },
  {
    title: "Satyavrata & Vishnu",
    content: `<p>Brahma, once, happened to lose the Vedas, which were stolen by an asura named Hayagriva. Hayagriva resided in the bottom of the ocean – and Shri Vishnu took the form of a fish to get back the Vedas.</p>
    <p>There was a King named Satyavrata who was a great devotee of Sri Vishnu. He performed a penance by living only on water. One day, he was doing his daily ablutions, when a tiny fish came out of his <em>kamandalu</em> on to the palm of his hand. The King, being large-hearted and generous, placed it back in the river.</p>
    <p>To his surprise, the fish cried out and said not to leave it in the great big river where other creatures were bound to swallow it up.</p>
    <p>So, Satyavrata put the fish back into his <em>kamandalu</em>, which was full of water. Next morning, he saw that the fish had grown in size and had occupied the whole vessel. It was crying out for more space – so he put it in a bigger vessel. The size of the fish kept on increasing and he kept putting it in bigger and bigger vessels. At last he had to put it in the lake – but the fish filled that too with its increasing size.</p>
    <p>Satyavrata finally put the fish in the ocean, thinking that was the only place big enough for it. But the fish was not happy here either, for it was scared that alligators and other animals of the water would kill it.</p>
    <p>This was too much for the King, and he was completely perplexed. It then suddenly occurred to him that the fish was none other than Sri Narayana, incarnated for a specific purpose.</p>
    <p>The Lord then answered that on the seventh day from that day, the three worlds would be plunged into the waters of <em>pralaya.</em> A large boat would then come to him. He instructs him to collect all the herbs, plants, seeds and trees and all the different species of animals. He tells Satyavrata to take all of those, and the seven Rishis with him, and enter the boat.</p>
    <p>Sure enough, on the seventh day, the deluge started and Satyavrata did as he was instructed.</p>
    <p>At the end of <em>pralaya,</em> the Lord killed the demon Hayagriva and returned the Vedas to Brahma.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>`
  },
  {
    title: "Kannappa & Shiva",
    content: `<p>There was an area that was covered with forests, and no one knew about the existence of a Linga there. Only one devout Brahmin used to go there once a fortnight to worship the Lord. </p>
    <p>One day, a tribal boy happened to pass through that part of the forest while hunting in the jungle. The moment he saw the Linga, he was intensely attracted to it. The boy’s name was Kannappa. From that day, he started visiting the place, spending time with the Lord and innocently prattling to him. </p>
    <p>Every day he hunted animals and brought their meat for the Lord to eat. He would offer it with love and the Lord would eat it. Then he would return the next day for the same purpose. It struck him one day that the Lord would need a bath too. There was water in the nearby river but how to get it here? </p>
    <p>So, when he had prepared the meat of the animals, he started putting it in two leaf plates. Carrying them in both his hands, he would go to the river and fill up his mouth with water and come to the Linga. </p>
    <p>There he would puff the water out of his mouth and wash the Linga. Then he would offer the meat that he had brought. He derived great pleasure out of this worship. </p>
    <p>After a fortnight, the Brahmin from the village came to do his regular puja. He was an educated man and knew the method of puja according to the Shastras. When he saw the dried-up meat offerings and the Linga full of the spit of some unknown forester, he shuddered with revulsion. </p>
    <p>He could not leave the Lord in such a condition. He cleaned the whole place and brought plenty of water from the river and washed the Linga again and again. Then he chanted mantras and concluded his puja for the day. He hoped that such a thing would not happen again. </p>
    <p>But his hope was in vain. Kannappa was so devoted to the Lord that he could not remain without doing his puja for even a single day. Thus, when the Brahmin returned after another fortnight, he was pained to see the polluted condition of the Lord. Again, he patiently cleaned up the whole mess, did his puja and went back. Thus, it happened a number of times. </p>
    <p>The Brahmin was greatly saddened to see this unholy pollution every time he came for his worship. He prayed to the Lord to protect himself from all of this. </p>
    <p>When the Brahmin prayed sincerely out of true devotion, the Lord spoke to him and told him not to grieve. He explained that the devotee who offered this puja was pure at heart, though he was ignorant of the sacred ways of the Shastras. The Lord was therefore bound to him by his pure love, and accepted his puja. </p>
    <p>It was now time for him to come. He told the Brahmin to hide himself behind the tree and see how devoted the boy was, then he would understand why the Lord could not refuse his offerings. </p>
    <p>The Brahmin hid himself behind a tree, from where he could see the Linga and the surrounding area clearly. </p>
    <p>After some time, Kannappa came, with his mouth full of water, carrying two leaves containing the meat. He puffed the water from his mouth over the Linga and offered the meat as usual. But that day the Lord didn’t eat it. Kannappa was surprised and begged the Lord, but still the Lord did not oblige. </p>
    <p>Kannappa was baffled. Why wasn’t He taking His food as usual? As he looked intently, he found that the right eye of the Lord was red and that water was oozing from it. Then Kannappa knew that the Lord’s eye was hurting, which is why He did not eat the food. </p>
    <p>Kannappa ran into the forest and brought all the roots and leaves used to cure eye complaints. He applied them one by one. Instead of getting cured, the eye became worse and blood started streaming from it. </p>
    <p>Now the boy did not know what to do. So, he plucked out his right eye with the sharp end of an arrow and similarly plucked out the sick eye of the Lord. Then he inserted his own eye in the eye socket of the Lord. The eye was now cured. </p>
    <p>The happy Kannappa offered the meat and asked the Lord to eat. But then the left eye of the Lord started dripping blood. This time Kannappa did not run about. He plucked out the left eye of the Lord. Before taking out his own left eye which was the only eye he had now, he lifted his foot and put it near the Lord’s left eye, so that he would know where to put it in the Lord’s face. Then he took out the arrow to pluck out his left eye. </p>
    <p>At that moment the Lord came out of the Linga and gave Kanappa darshan in His real form, preventing him from plucking out his eye. With a glance the Lord restored Kannappa’s right eye. He called the Brahmin from his hiding place. </p>
    <p>The Brahmin, lost in admiration for the absolute devotion of the boy, came singing the Lord’s praises. Thus, the Brahmin and the tribal boy both came to be blessed by Lord Shiva. It was not the manner of their worship that brought them the benefit of the Lord’s grace, but the devotion behind it. </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Tarangini - Central Chinmaya Mission Trust</em></p>
    `
  },
  {
    title: "Sudama & Krishna",
    content: `
    <p>Krishna had a childhood friend named Sudama. The two were class-mates and fellow students in the ashrama of the Rishi Sandeepani. Sudama was very poor. He lived on charity, and as a result, did not have enough to eat.</p>
    <p>Sudama who had perfect knowledge of the atman, was not frustrated. He led a contented life and his wife served him with devotion. </p>
    <p>However, day by day, they became thinner and thinner till a time came when the wife approached Sudama and said that - "Krishna, the Lord of Lakshmi, the goddess of wealth, is your dear friend. To those who love and worship Him sincerely, He gives His very own self. If you approach Him, will He not give you a few things to keep you out of this misery of starvation?” </p>
    <p>Sudama heard but paid no heed. Every now and then his wife would remind him of the glories of the Lord and would ask him to approach Him for help. After many such reminders, Sudama decided to go and pay a visit to Krishna. </p>
    <p>He thought that if nothing else, he would at least enjoy meeting his old friend again. He asked his wife to give him some gift to take to his friend. She got a handful of rice from the neighbours, prepared beaten rice out of it, and with this bundled in an old torn piece of cloth, Sudama started off on his journey to Dwaraka. </p>
    <p>All along the way he thought of Sri Krishna and felt what a blessing it would be to meet him again. He passed through the city gates and came before Rukmini’s palace. Krishna saw him from afar and ran down the steps to greet him. </p>
    <p>Then Krishna and Sudama talked of their good old days when they were students together with the Rishi Sandeepany. They recalled the happy times they had spent together. Then Krishna said, “Dear friend, I learnt of the hard times you and your good wife have gone through. But he who does his duty with his mind fixed on God knows no grief or misery.” </p>
    <p>Sudama answered that he did not desire anything in the world, because he had had the good fortune of living in his heart with the Lord of the Universe. Then Krishna teasingly asked him if he had brought him any gift. Krishna was well aware of the small packet of beaten rice that Sudama had brought for him, and also knew that he felt shy to give it to him. </p>
    <p>Yet Sudama felt shy. So Krishna searched him and from his upper garment drew out the humble gift. He opened the packet and ate a mouthful of the beaten rice. With great appreciation, He said, “This is indeed the tastiest thing I have ever eaten. And you hid it from Me? Truly it will please the three worlds!” And he took another mouthful. Just then Rukmini took it away, saying that he had eaten the tamas and rajas of his devotee with the the two mouthful - and not to eat up the sattva with the third. </p>
    <p>That night Sudama slept like a king in Krishna’s palace. All through, he had been treated as a most honoured guest. Next morning, he bade his friend an affectionate farewell. Krishna went with him part of the way. </p>
    <p>Sudama proceeded on his journey home. When he got there, to his very great surprise, saw that his little hut had been transformed into a magnificent mansion! </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Bhagavatam - Central Chinmaya Mission Trust</em></p>
    `
  },
  {
    title: "Gajendra & Vishnu",
    content: `<p>In a forest on Mount Trikoota, lived an elephant King. In this forest, was the garden of Varuna - where celestial trees and plants grew. They had lovely flowers and juicy fruits, and this garden was often visited by apsaras because of its exquisite charm and beauty.</p>
    <p>One day, Gajendra (the elephant King), entered the garden with his entire family. Since it was hot, he entered one of the cool lakes to refresh himself. Suddenly, he felt his feet attacked by a powerful crocodile. It started dragging him into the water, and he struggled to free himself from its clutches. The other elephants also tried to pull their leader out of the water, but none of them could. Gajendra fought with the crocodile for a long long time, and tried every means of escape, but it all failed miserably.</p>
    <p>At last, he turned his thoughts to the Lord and prayed ardently for help.</p>
    <p>Sri Hari heard the desperate cry of the royal elephant and immediately mounted his Garuda. He pulled the crocodile out of the water, and split open its mouth with his divine Chakra.</p>
    <p><em>"Each individual Jiva in this world is like Gajendra, forgetful of the Lord, and extremely attached to the family. To cool off his desires for sense-enjoyments, he plunges straightway into the pleasures of the world. Before he even knows it, he is caught up in the net of samsara from which he cannot escape. It is then, by the Lord's grace, he remembers the one Lord who will never forsake him in his hour of need. He appeals to him piteously, and Bhagavan, in His infinite kindness, rushes to the rescue of His sincere devotee."</em></p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Bhagavatam - Central Chinmaya Mission Trust</em></p>
    `
  },
  {
    title: "Mirabai & Krishna",
    content: `<p>Rana Ratansingh, who ruled over Kurkhi in Rajasthan, was a good ruler and was loved by his people. He had a beautiful daughter named Mira. </p>
    <p>One day when Mira was about five years old, a wedding procession passed by the palace. Watching this, Mira asked her mother where <em>her</em> bridegroom was. Her mother led her to an image of Lord Krishna kept in the corner of the room, and said that this was her husband. </p>
    <p>Mira loved this image. She took the words of her mother seriously, and from that day on, considered herself his bride. She left all other play and spent all her time worshipping Krishna. The years passed and Mira was steadfast in her love of her divine husband. </p>
    <p>Eventually, Mira was married to prince Bhojaraj of Chittor who was known for his valor and deep hatred of the Mughals. Mira was the ideal wife, and was loved by her husband. However, as soon as her household duties were over, she would turn to Krishna, whom she had brought with her. </p>
    <p>Her mother-in-law and Bhoja’s sister did not approve of this and tried to appeal her to worship Durga instead, as she was the family goddess. They felt that Durga may get offended and lay a curse on the household if she continued to worship Krishna. However, Mira was adamant and did not stop her worship. </p>
    <p>In a fit of anger, the sister of Bhoja, Uda, decided to take revenge. Since Mira went to the temple every evening, she decided to complain to her brother about his wife’s conduct, by saying that Mira had a lover that she was visiting. </p>
    <p>Bhoja could not believe this would be possible, and decided to go see for himself. That night, he stood outside the temple door, listening carefully. </p>
    <p>Inside, Mira was talking to Lord Krishna, pleading him to take her and that she was yearning to be with him. She asked him why he kept her waiting. </p>
    <p>Drawing his sword, Bhoja rushed into the temple, and then realised that she was talking to Krishna. He was convinced that his wife had lost her wits, but decided to humor her. He built her a temple where she could worship Krishna to her heart’s content. </p>
    <p>Soon devotees flocked around her, and Mira could often be found at the temple, singing and dancing in ecstasy. </p>
    <p>Unfortunately, Bhoja lost his life while fighting in a battle. He was the one who would usually protect her from his family’s criticism, and after his death, there were several attempts were made to get rid of Mira. </p>
    <p>She was sent a basket with a cobra snake inside a basket and was told that the basket contained a garland of flowers. When Mira opened it, it had miraculously turned into an idol of Lord Krishna. </p>
    <p>Her bed was filled with poisonous nails, and yet when she slept on it, it turned into a bed of roses. She was given a cup of poison to drink, but when she sipped it, it turned into nectar. </p>
    <p>Thus, with Krishna’s blessings, she overcame every obstacle. Years later, she set out on a pilgrimage to Mathura, Vrindavan, and Dwaraka. She became oblivious to the world and was now singing hymns all the time. </p>
    <p>One day, in the middle of a prayer, Krishna called out to her, and Mirabai fell into a trance and fainted. </p>
    <p>Thus, at last, Mirabai had become one with the Lord she had worshipped and yearned for, since she had taken him for her bridegroom at the tender age of five! </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Mirabai - Amar Chitra Katha</em></p>
`
  },
  {
    title: "Shabari & Rama",
    content: `<p>On the west banks of the river Pampa was the ashrama of Shabari, an old tapasvini. She was a disciple of the sage Matanga. Before he had departed from his life, he had told her that she would one day experience the supreme bliss of the darshan of Sri Rama, an incarnation of Lord Vishnu. </p>
    <p>So Shabari waited, spending her days in prayer and austerity, till at last Rama and Lakshmana reached her ashrama on the banks of the Pampa. </p>
    <p>She welcomed Rama into her ashrama and praise burst forth from her lips. She then offered him some forest fruits, and told them that he wouldn't find any of them to be bitter or sour, since she had tasted each one before placing it before him. </p>
    <p>Her devotion to Rama was so simple, so innocent, so high and so pure. </p>
    <p>Lakshmana frowned as she placed before them the tasted fruits. He did not want Rama to eat something which had already been bitten into by someone else. But Rama smiled gently and ate the fruits with great relish. The Lord always accepts whatever little we offer unto Him, provided we offer it with pure, untainted love. </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Ramayana - Central Chinmaya Mission Trust</em></p>
    `
  },
  {
    title: "Jatayu & Rama",
    content: `<p>As they walked on searching for Sita, Rama saw some flowers scattered on the ground. He pointed them out to Lakshmana - they were the very flowers that he had plucked for her that morning. </p>
    <p>A few yards ahead, they saw the small footprints of Sita and large footprints alongside, presumably those of a powerful rakshasa. There were definite signs of a struggle. They then saw a bow, broken and lying in bits. It was studded with many precious stones. There was a crown, a broken chariot, and a dead charioteer. </p>
    <p>They realised that Sita was definitely pursued by a rakshasa. </p>
    <p>Then Rama looked around again. He found a few broken beads from Sita’s jewels. His sorrow dropped off like a cloak and was replaced by a blazing anger. Which shameless creature had assaulted his Sita? His eyes sparkled, red and angry as he told Lakshmana that here and now, he would destroy this wicked world where there was no goodness and morality left. This world did not deserve to live if it kept within itself such a snake as this rakshasa. Rama began preparing his divine astras to dry up the oceans, douse all fires, stop all winds and darken the sun. The world would be no more. </p>
    <p>But Lakshmana stopped him, saying that because of one wicked rakshasa he was out to destroy the world. Rama had already killed hundreds of rakshasas. Lakshmana told him confidently that they would go after this one and finish him off too. Why punish the innocent ones in the world for the crime of a single rakshasa? </p>
    <p>Rama was calmed. He put away his astras. A few yards away from them lay a huge form. On coming closer they found it was the old bird-king Jatayu. His wings and legs were cut off and he lay there in a pool of blood, gasping for breath. Rama and Lakshmana quickly knelt by his side. They washed his wounds and asked him what had happened. Jatayu in a feeble voice and with great difficulty, narrated how Sita had been carried off by Ravana. </p>
    <p>He asked Rama to forgive him and that he was unable to prevent him from carrying Sita away. He had done his best to stop him, but he was far too powerful. Jatayu told them to travel south as that had been the way Ravana flew. </p>
    <p>His eyes closed gently, as his life escaped from his much battered old body. The brave old King of Vultures was no more. </p>
    <p>Rama and Lakshmana were sad beyond measure. They lit a funeral pure and performed his last rites. </p>
    <p>Jatayu is famous in the Ramayana as one of the bhaktas of Sri Rama. He laid down his life for the sake of his Lord. </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Ramayana - Central Chinmaya Mission Trust</em></p>
    `
  },
  {
    title: "Ambarisha & Narayana",
    content: `<p>Ambarisha was a kind and noble king. Although he was the ruler of the whole earth and had all the wealth and enjoyments that could make one content, he didn't care for them. He knew that earthly enjoyments are never lasting and that only the ignorant take delight in them. He was a great bhakta of Sri Narayana. </p>
    <p>He spoke of nothing but the glories of Vaikuntha. He used his hands to clean Sri Narayana's temple; his ears heard only the praises of Sri Narayana. Everywhere his eyes saw expressions of His divinity; everything he touched reminded him of His divine Presence. His nose smelt only the holy fragrance of Tulasi which proceeds from the feet of Sri Vishnu. His tongue tasted only the food that had been offered to Lord Narayana. </p>
    <p>Thus, by constantly dedicating himself to Him, he gradually came to give up all his desires. Sri Vishnu was very pleased with him and gave him His chakra for his protection. </p>
    <p>Once, King Ambarisha and his wife undertook a special fast called the Dvadasi Vrata. He practised special disciplines for a whole year. Towards the end, he fasted for three days, and on the fourth day, the twelfth day of the moon, he was to break the fast. On this occasion, he bathed in the waters of the Yamuna and worshipped Sri Narayana at Mathura. </p>
    <p>At that very moment Rishi Durvasa came there. The king invited him to be his guest. The sage accepted the invitation and then went to the river to bathe and to perform his daily rites. </p>
    <p>When he had finished bathing, the Rishi sat down for meditation and soon became absorbed in it. Thus, the time slipped by. Ambarisha grew anxious. For if the auspicious hour to break his fast passed away, his vrata would be of no avail. Yet if he ate, it would be an insult to an invited guest. </p>
    <p>So he decided to compromise by sipping a little water which the Shastras say is both eating and non-eating. This way he broke his fast without meaning any offence to the sage. </p>
    <p>When Durvasa came back and learnt that the king had taken water, he was furious, and he thought that Ambarisha had done this purposely in his pride as a king. </p>
    <p>He tore up a tuft of hair which turned into a demon, and commanded the demon to devour him. </p>
    <p>Ambarisha remained calm and was not at all afraid. The chakra of Sri Vishnu, however, sprang up for the protection of the king. It moved menacingly towards Durvasa, from whom the curse had come. The demon lost all his power and because Ambarisha stood absolutely unmoved. </p>
    <p>Durvasa ran in all directions in a desperate attempt to save himself. But the weapon followed him steadily. At last he ran to Brahma and implored him to save him. Brahma told him that since he had offended a <em>Vishnu-bhakta</em>, he could honestly do nothing to save him. </p>
    <p>Then Durvasa went to Shiva and asked for his help. Shiva looked at him compassionately and replied that he was powerless to do anything as the weapon was too much for him - he would have to ask Sri Vishnu himself to help him. </p>
    <p>The chakra was now getting closer and closer to him. In a last bid to escape from the deadly weapon, he appealed to Sri Vishnu for help. Vishnu smiled at him ruefully and said that he was a slave of his devotees, therefore he was powerless against the weapon that had been released by his devotee. There was only one way out of this - Durvasa had to go to him and seek his pardon. </p>
    <p>Durvasa hurried back to where Ambarisha was and apologized to him. Ambarisha asked the chakra to desist from its round of destruction. He showed the Rishi due respect and requested him to come and have his meal. Then Durvasa and Ambarisha had their meal which had been waiting for so long. </p>
    <p>Soon after, Ambarisha made over his kingdom to his eldest son and retired to the forest, there to plunge his mind into meditation upon the Lord. </p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Story Referred From: Bala Ramayana - Central Chinmaya Mission Trust</em></p>
`
  }
],
  rowHeight: 290,

  nodes: [
    // Row 1
    { id: 1, pattern: "P______A", clue: "Staunch devotee of Lord Vishnu, despite being born to a Daitya family. When his father repeatedly tried to kill him with poison, elephants, fire and venomous snakes, he remained unharmed due to his devotion.", answer: "PRAHLADA" },
    { id: 2, pattern: "N___S__H_", clue: "The fierce avatara who emerged from a pillar to protect his devotee.", answer: "NARASIMHA", size:"wide" },

    // Row 2
    { id: 3, pattern: "_R____", clue: "Pandava prince guided in battle and life by the Lord.", answer: "ARJUNA" },
    { id: 4, pattern: "__I__N_", clue: "Charioteer, strategist, and a divine guide.", answer: "KRISHNA" },

    // Row 3
    { id: 5, pattern: "_H__V_", clue: "Undertook a very severe penance in the forest at a young age, using the Mantra - Om Namo Bhagavate Vasudevaya'", answer: "DHRUVA" },
    { id: 6, pattern: "N_R_Y___", clue: "The sustainer of the universe, holding in his four arms the lotus, conch, mace and discus.", answer: "NARAYANA" },

    // Row 4
    { id: 7, pattern: "R_____", clue: "A ten-headed Rakshasa.", answer: "RAVANA" },
    { id: 8, pattern: "__I__", clue: "The ascetic god worshipped by the King on the left.", answer: "SHIVA" },

    // Row 5
    { id: 9, pattern: "D___P_D_", clue: "Queen of Indraprastha.", answer: "DRAUPADI" },
    { id: 10, pattern: "K_____A", clue: "Protector who answered her desperate prayer during her hour of need.", answer: "KRISHNA" },

    // Row 6
    { id: 11, pattern: "M____N___A", clue: "Son of a Rishi, who was destined to die very young.", answer: "MARKANDEYA", size:"wide" },
    { id: 12, pattern: "S____", clue: "The God who taught Yama a lesson and protected his devotee. He grants him immortality.", answer: "SHIVA" },

    // Row 7
    { id: 13, pattern: "__T__V__T_", clue: "The king who became a devotee of the Lord who manifested himself as the Matsya Avatara. He was instructed by him to collect and safeguard all the plants and animals before Pralaya.", size:"wide", answer: "SATYAVRATA" },
    { id: 14, pattern: "V____U", clue: "The deity worshipped by him.", answer: "VISHNU" },

    // Row 8
    { id: 15, pattern: "____A__A", clue: "A hunter who with unwavering and deep devotion, worshipped a Lingam with whatever he could offer - like water from his mouth, and meat from his hunts. One time when he saw the Lingam's eye bleeding, he plucked out his own eye and placed it on the Lingam.", size:"wide", answer: "KANNAPPA" },
    { id: 16, pattern: "__IV_", clue: "The God worshipped by him. (Hint - The river Ganga flows from his matted locks).", answer: "SHIVA" },

    // Row 9
    { id: 17, pattern: "S___M_", clue: "Visited his friend from his childhood days to ask for help, as he was in poverty. He brought parched rice to offer him.", answer: "SUDAMA" },
    { id: 18, pattern: "K_____A", clue: "Welcomed his old friend with great affection. When the friend returned to his house, he found that it has turned into a palace!", answer: "KRISHNA" },

    // Row 10
    { id: 19, pattern: "G_______", clue: "King of elephants who was attacked by a crocodile, and surrendered to the Lord.", answer: "GAJENDRA" },
    { id: 20, pattern: "V____U", clue: "Responded instantly to the cry for help, and killed the crocodile with his Sudarshana Chakra.", answer: "VISHNU" },

    // Row 11
    { id: 21, pattern: "M_R_B__", clue: "Rajput princess and poet who composed songs on the Lord.", answer: "MIRABAI" },
    { id: 22, pattern: "___SH__", clue: "The God who plays the flute.", answer: "KRISHNA" },

    // Row 12
    { id: 23, pattern: "S____R_", clue: "Elderly devotee who waited for several years to meet the Lord. She collected berries to give him, and tasted each one to keep only the sweet ones and discard the bitter ones.", answer: "SHABARI" },
    { id: 24, pattern: "R___", clue: "He and his brother visited her hermitage while in search of Sita. He accepts the offerings and blessed her.", answer: "RAMA" },

    //Row 13
    { id: 25, pattern: "J___Y_", clue: "A vulture who was very old, but fought very valiantly and gave up his life trying to rescue the princess of Mithila.", answer: "JATAYU" },
    { id: 26, pattern: "R___", clue: "Prince of Ayodhya, who revered him as a father.", answer: "RAMA" },

    //Row 14
    { id: 27, pattern: "A___R___A", clue: "King of Ikshavaku Dynasty, who was following a fast called 'Dvadasi Vrata'. When he broke the fast by sipping water, Durvasa became furious and cursed him.", answer: "AMBARISHA", size:"wide" },
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
      { from: 1, to: 2, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 3, to: 4, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 5, to: 6, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 7, to: 8, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 9, to: 10, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 11, to: 12, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 13, to: 14, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 15, to: 16, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 17, to: 18, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 19, to: 20, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 21, to: 22, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 23, to: 24, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 25, to: 26, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" },
      { from: 27, to: 28, straight: true, label: ["devotee of"], sideOrigin:"right", sideTarget:"left" }
    ]
  }
},

{
  id: 14,
  slug: "the-boons-that-changed-a-kingdom",
  title: "The Boons That Changed a Kingdom",
  description: "It all started with a promise made in gratitude. However, things took an unexpected turn when one of the queens of Ayodhya was blinded by jealousy and a desire for power. Trace the chain of events that led to fourteen years of exile in the forest.",
  accent: "#c4b6e4",
  congratsMessage: "Well done. On to the next puzzle!",
  nextSlug: "the-lineage-of-strength",
  rowHeight: 300,
  trivia: `
    <p>Kaikeyi had a personal maid called Manthara who was a hunchback. One day, while standing on the palace terraces, she saw that the entire city was filled with festivity and celebrations. She asked a passing maid if she knew what was going on, and the maid happily said that Rama was about to be crowned the King.</p>
    <p>Manthara became alarmed and hobbled down to Kaikeyi's apartment and relayed the news. Kaikeyi's face lit up with happiness, and she removed her necklace and gave it to Manthara, saying that this was the best news that she had received in many years, and told her that she could ask her for anything that she wanted.</p>
    <p>Manthara threw down the necklace in contempt, saying that she was being foolish. She said that now, she would become a slave to Kausalya, and that Bharatha would always live in fear of Rama. She told her to fight for Bharatha's right to become King.</p>
    <p>The poisonous seed was sown, and the weed grew in Kaikeyi's mind, clouding her understanding. Kaikeyi then asked Manthara to show her a way out of it, saying that she was right and that Bharatha had to be the King.</p>
    <p>Manthara then reminded her of the two boons Dasharatha had granted Kaikeyi a long time ago when she had saved his life. At that time, Kaikeyi had said that she would ask for them later. Manthara pointed out that now was the time, and told her that the first boon should be that Bharatha should be crowned King, and that the second should be for Rama to be sent to the forest for fourteen years.</p>
    <p>Meanwhile, after Dasharatha had seen to all the arrangements for Rama's coronation, he went to Kaikeyi's apartment to relax. But a strange sight met his eyes – Kaikeyi had thrown away all her ornaments, her hair was open and she was rolling on the ground as though in great pain.</p>
    <p>Dasharatha was distressed to see her that way and immediately asked her what the matter was. She then asked him if he remembered that, once when she had saved his life in the battle against Rakshasas, he had granted her two boons. Dasharatha said that he would never go back on his word, and told her to ask for them.</p>
    <p>Kaikeyi asked for her two boons as suggested by Manthara, and Dasharatha looked at her, thunderstruck. He implored her repeatedly that he could not live without Rama, but she remained adamant.</p>
    <p>Dasharatha was in a state of supreme mental agony, having to choose between his love for Rama and his love for Dharma. In the end, his passion for truth won and he relented. He said that he would grant her the two boons, and told her that she could reign as a happy widow, and then fainted.</p>
    <p>Rama was called to Kaikeyi's palace the next day. There, he was alarmed to see his father lying on the ground, eyes vacant, and swooning repeatedly.</p>
    <p>Kaikeyi then told Rama that only he had the power to remove his agony, and asked him if he would promise to do as she said. Rama gave her his word, and then Kaikeyi explained the two boons she had asked for.</p>
    <p>Rama received this order with the utmost calm, and after touching the feet of Dasharatha and Kaikeyi, came out. Lakshmana, who had heard everything that had happened, was furious. Rama then made his way to Kausalya's palace, where she had been offering a pooja. As he related to her everything that had happened, Kausalya was speechless with shock.</p>
    <p>She told him not to go, and to take her with him if he had to go. Rama told her gently that it was her duty to stay and look after the King in his time of grief.</p>
    <p>At this point, Lakshmana's anger burst out, and he said that the King had lost his mind, and that he would see that no one but Rama would sit on the throne. He said that he would kill anyone who stood in the way. But Rama pacified him, saying that it was their foremost duty to obey their parents, and to follow the path of Dharma.</p>
    <p>Next, he went to Sita's palace to take leave of her. Rama told her all that had happened, and told her to look after his parents' needs and obey their commands.</p>
    <p>Sita said that a wife's place was by her husband's side, through pleasure and pain, through good days and bad. She said that she would not stay away from him even for a moment.</p>
    <p>Rama tried to tell her the hardships of life in the forest, but she said that she did not care about those things while he was with her. Rama finally agreed to let her come, and Lakshmana asked for permission to accompany him as well. Rama nodded his assent.</p>
    <p>Rama, Lakshmana and Sita then touched the feet of the King and Queens, and then got into a chariot which had been prepared to take them up to the frontier of the Kingdom. As the chariot moved on, people came closer and closer for a last look at Rama.</p>
    <p>Finally, Rama asked Sumantra to stop the chariot and spoke to them. He told them that he was deeply touched by their devotion and that all their love and loyalty must now be transferred to Bharatha. He was now their King, and it was their duty to obey him.</p>
    <p>Towards dusk, they reached the banks of the river Tamasa where they decided to camp for the night. The citizens of Ayodhya, who had continued following them all this way, fell asleep. Rama woke up before dawn and asked Sumantra to drive them on while the people were still sleeping. The chariot finally reached the banks of the Ganga.</p>
    <p>The chieftain of the tribes of that district, named Guha, came running to greet them. He ordered a big feast for Rama, and then told him to spend the fourteen years of exile with his tribe.</p>
    <p>Rama then said that he had renounced his Kingdom, and chosen to lead the life of a <em>Tapasvi.</em> Therefore he could not partake of dainty dishes, and also could not accept his hospitality, as it would be going against his father's wishes.</p>
    <p>They ate simple food that night, and Rama and Sita slept on the grass. Lakshmana, Guha and Sumantra spent the night talking about Ayodhya and the qualities of Sri Rama.</p>
    <p>The next morning, Rama asked Guha to get a raft ready for them to cross the Ganga.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  nodes: [
    // Row 1
    {
      id: 1,
      pattern: "K__K_Y_",
      clue: "One of the queens of Ayodhya whose mind became clouded by malicious advice given by her maid. With her guidance, this queen plotted to send the crown prince away to the forests for 14 years.",
      answer: "KAIKEYI"
    },

    {
      id: 2,
      pattern: "D____R____",
      clue: "The King of Ayodhya. Many years in the past, when he had been fighting Rakshasas, his life was saved by the queen on the left. Because of this, he offered her two boons, which she chose to claim later.",
      answer: "DASHARATHA"
    },

    // Row 2
    {
      id: 4,
      pattern: "S_T_",
      clue: "The princess of Mithila, who followed her husband into exile.",
      answer: "SITA"
    },

    {
      id: 3,
      pattern: "R_M_",
      clue: "The crown prince of Ayodhya. On the day he was to be coronated, he was told to leave for the forests for 14 years.",
      answer: "RAMA"
    },

    {
      id: 5,
      pattern: "L_K____N_",
      clue: "His younger brother, who followed him to the forest. He did not sleep for 14 years, to serve and protect them.",
      answer: "LAKSHMANA"
    },

    // Row 3
    {
      id: 6,
      pattern: "G___",
      clue: "The Nishada king who welcomed the prince of Ayodhya during his exile and became his devoted ally. He helped him cross the Ganga river.",
      answer: "GUHA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Kaikeyi
      2: { x: 1, y: 0 }, //Dasharatha
      4: { x: 0, y: 1 }, //Sita
      3: { x: 1, y: 1 }, //Rama
      5: { x: 2, y: 1 }, //Lakshmana
      6: { x: 1, y: 2 } //Guha
    },

    connections: [
      // Kaikeyi ↔ Dasharatha 
      { from: 1, to: 2, noArrow: true, sideOrigin:"right", sideTarget:"left"},

      // Dasharatha → Rama 
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top" },

      // Kaikeyi → Rama 
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top"},

      // Rama ↔ Sita
      { from: 3, to: 4, straight: true, noArrow: true, sideOrigin: "left", sideTarget: "right" },

      // Rama ↔ Lakshmana
      { from: 3, to: 5, straight: true, noArrow: true, sideOrigin:"right", sideTarget:"left" },

      // Rama → Guha
      { from: 3, to: 6, sideOrigin:"bottom", sideTarget:"top" }
    ]
  }
},
{
    id: 15,
    slug: "the-lineage-of-strength",
    title: "The Lineage of Strength",
    description: "This puzzle is related to the family of one of the Pandavas. Find out how well you know the stories from the Mahabharatha!",
    accent: "#d3a42c",
    congratsMessage: "Congratulations on mapping the lineage of Bhima! Onward to the next puranic puzzle!",
    nextSlug: "the-kings-of-suryavamsha",
    trivia: `
    <p>After the Pandavas and Kunti had escaped Varnavata, they decided that it was safer to remain in disguise for a while. One day, when they were laying asleep in the forest, a rakshasa named Hidimb could smell the scent of human flesh. He asked his sister Hidimba to look for the humans in his territory and kill them.</p>
    <p>Hidimba too could smell human beings and followed the direction of the scent. She was about to attack the sleeping Pandavas and their mother Kunti, when she suddenly noticed Bhima. She was instantly enamored by the handsome Pandava and promptly dismissed her brother's command. She transformed herself into a beautiful damsel and then she walked up to Bhima and bowed to him. She asked him who he was, and who the sleeping people were - she explained that her brother had sent her to kill them all, and offered to take them to safety.</p>
    <p>Bhima, however, was never one to feel threatened by a rakshasa. He also did not want to disturb the sleep of his mother and brothers.</p>
    <p>Soon a monstrous form charged out of the bushes. Hidimb was furious when he saw his sister in a human form, in conversation with Bhima. He decided to kill all of them.</p>
    <p>Soon, Bhima and Hidimb were wrestling with each other. The thud of blows and muffled grunts woke up Kunti.</p>
    <p>Kunti was surprised to see a beautiful young woman there and asked her who she was. Hidimba introduced herself and explained what had happened, and their conversation woke up the rest of the Pandavas.</p>
    <p>The combat went on for quite a long time, and Arjuna finally shouted at Bhima to stop playing around and finish him off, as the rakshasa's powers would double after twilight. At the command of Arjuna, Bhima lifted the giant, whirled him around and then with a mighty roar flung him down. The rakshasa died.</p>
    <p>From there, they decided to move ahead to a small town nearby, so that they could lie low without the fear of being detected by Duryodhana.</p>
    <p>Yudhishthira and Kunti then encouraged Bhima to go with Hidimba. Bhima was reluctant at first but finally agreed.</p>
    <p>Hidimba leaped into the sky with Bhima and came to a mountain glade of impeccable natural beauty. The two spent some time there. In time Hidimba gave birth to a son. Within moments, the child became a full-grown youth with the strength of a rakshasa and the power to change into any form at will. The young man bowed and touched his parents' feet.</p>
    <p>Hidimba was very pleased to see her son. Since his head was as smooth as a clay pot, they fondly named him Ghatotkacha. The mighty son soon mastered the secrets of wielding weapons of all kinds.</p>
    <p>Hidimba had promised to return Bhima to his family. She kept her promise. The Pandavas were overwhelmed with joy on receiving Bhima and his son Ghatotkacha. Finally, taking leave of his father, uncles and grandmother, Ghatotkacha said that he was leaving now but would appear whenever they remembered him.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>Barbarika was the grandson of Bhima and Hidimba. He learnt the arts of war from his mother, and archery from a great guru, and thus grew up into a skilled warrior. He was an ardent devotee of Lord Shiva and had received an extraordinary gift from him – three infallible arrows that would stay with him for as long as he was alive.</p>
    <p>When his guru learnt of the arrows, he realized that it was impossible for Barbarika's side to ever be defeated in a war. He asked him which side of the war he would choose.</p>
    <p>Barbarika then made a promise that he would take the side of the weaker opponent, which most people would hesitate to do. The guru nodded and blessed the disciple.</p>
    <p>When the great war of Mahabharatha was announced, Hidimba told Ghatotkacha and Barbarika that they must both participate in the war.</p>
    <p>Taking the blessings of his parents and grandparents, Barbarika went to the camp of Pandavas. Later, one day, Krishna sought him out and then asked him why he wanted to join the Pandavas.</p>
    <p>Barbarika replied that there were two reasons. The first was that they were his family. The second reason was that the Pandavas only had seven <em>akshauhinis</em>, while the Kauravas had eleven. That made the Pandavas the weaker opponent, and he had made a promise to his guru to always fight for the weaker opponent.</p>
    <p>Krishna was silent for a moment, and then asked Barbarika to tell him about the special arrows.</p>
    <p>Barbarika said that his arrows were not ordinary. The first one would mark his enemies and return to him. The second one would kill those that were marked by the first arrow and then come back to him. The third one was just a spare.</p>
    <p>Krishna recalled a conversation that he had had with different warriors about the number of days they thought the war could last. Bhishma had told him that he could end the war in twenty days, while Drona gave the estimate of twenty-six days. Karna gave it twenty-seven days, while Arjuna had specified twenty-eight days.</p>
    <p>Now Krishna asked Barbarika the same question – to which Barbarika replied that it would take <em>no more than three days!</em></p>
    <p>Krishna said that in that case, Barbarika was possibly the greatest warrior of the time, maybe even better than Bhishma himself.</p>
    <p>Then, Krishna pointed to a tree and asked Barbarika to imagine that each leaf was a soldier, and show him what he could do with his arrows. Barbarika took out his bow and the first arrow. Quickly, Krishna hid a leaf under his foot.</p>
    <p>Barbarika shot the first arrow, which begin touching all the leaves and marking them. Once that was done, he took out the second arrow and shot it. One by one, it began destroying the leaves and it finally pierced Krishna's foot. Blood started to ooze out of it.</p>
    <p>Barbarika was distressed by this and apologized, and Krishna replied that he had placed a leaf below his foot to test his arrows.</p>
    <p>Barbarika told him that the area of the wound would always be vulnerable, and requested him to take care of his foot.</p>
    <p>Krishna's mind, however, was on something else. He told Barbarika – "You have joined the Pandavas now because they have a smaller army. But once the Kauravas lose more people, they will become weak. Then, whose side will you be on?"</p>
    <p>Barbarika replied that he would have to switch sides and support the Kauravas.</p>
    <p>Krishna pointed out that once he did that, the Pandavas army would again become weaker. What would he do then?</p>
    <p>Barbarika realised he would have to join the Pandavas again. Krishna asked what would happen if he hid all the Pandavas, and Barbarika said that his arrows would still find them.</p>
    <p>Krishna was annoyed. He chided him that because of the foolish promise that he had made to his guru, he would have to be oscillating between the two armies, and at the end, everyone would die and only he would remain.</p>
    <p>Barbarika realized to his shock that this was true. Further, he had also promised his family that he <em>would</em> fight in the war. He was very confused with his predicament and asked Krishna what he should do now.</p>
    <p>Krishna replied that he could guide him and be his guru, but he would have to give him a gurudakshina – his head.</p>
    <p>Barbarika agreed to this, but said that he had one last desire – he wanted to witness the war. Krishna promised him that he would be able to see and hear the war till the end.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>After the deed was done, Krishna instructed for Barbarika's head to be placed on top of a hill so that he could view the unfolding of the Kurukshetra. He had become the first warrior to give up his life for this war.</p>
    <p>Soon after the war, everybody from the Pandavas side gathered together and talked about how each one had contributed to the victory.</p>
    <p>Bhima declared that he had killed many Kauravas because of his skill with the mace, and Arjuna put in that it was his powerful Gandiva that had helped slay Drona, Karna and Bhishma.</p>
    <p>Just then, Sage Vyasa also joined the conversation and said that none of them really knew who had contributed the most to the victory because they hadn't seen the whole picture. Only Barbarika could tell them the answer – he was the true witness.</p>
    <p>So they all went to meet Barbarika, who was still at the top of the hill. He replied that he had seen a fascinating war with many nuances – but his opinion was that the war was won because of the Sudarshana Chakra. He had seen the Chakra circle the person who was destined to die that particular day – whether it was Bhishma, Karna or Dushasana. By that, it was clear that death is predestined and everything is just a means or an instrument to that end. Barbarika concluded that according to him - Krishna was the only one responsible for the victory.</p>
    <p>Krishna then joined Barbarika's body to his head and he came back to life. He wished to spend the remainder of his days as a sage.</p>
    <p>Krishna smiled and told him that in time, people would remember him and the sacrifice that he had made, and for his unconditional love towards Him. Therefore, his name would forever be called by Krishna's name – Shyam.</p>
    <p>Today, Barbarika is worshipped in the state of Rajasthan as Khatushyam.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International & Unusual tales from the Mahabharatha – Sudha Murthy</em></p>
`,
    rowHeight: 300,
    nodes: [
      { id: 1, pattern: "__I__", clue: "The warrior who killed Keechaka.", answer: "BHIMA" },
      { id: 2, pattern: "H__I___", clue: "Wife of the character on the left, was originally sent by her brother to kill him.", answer: "HIDIMBA" },
      { id: 3, pattern: "__A_O____H_", clue: "Son of the above couple, who caused massive destruction among the Kauravas in the Kurukshetra war.", answer: "GHATOTKACHA", size: "large"},
      { id: 4, pattern: "M__R_VI", clue: "Wife of the character on the left. She tried to defeat Krishna for revenge as her father was killed by him.", answer: "MAURAVI" },
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
    { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top" },
    { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top" },
    { from: 3, to: 5, sideOrigin:"bottom", sideTarget:"top" },
    { from: 4, to: 5, sideOrigin:"bottom", sideTarget:"top" }
  ]
}
},

{
  id: 16,
  slug: "the-kings-of-suryavamsha",
  title: "The Kings of Suryavamsha",
  description: "A forgotten gesture leads to a curse, a divine test, and the rise of one of the most celebrated royal lineages. Identify the characters of this powerful dynasty.",
  accent: "#fba7ff",
  congratsMessage: "Nicely solved! Onto the next puzzle.",
  nextSlug: "the-abduction-and-the-search",
  trivia: `
    <p>Once, there was a king named Dilipa from the Ikshvaku dynasty, he was handsome and brave.</p>
    <p>One day, when Dilipa ran into the divine cow Kamadhenu, he forgot to pay his respects to her. Kamadhenu, because of her gentle nature, did not notice, but the gods were offended and thought the king must learnt a lesson. Until he did, they decreed that he would not have any children of his own.</p>
    <p>Thus, Dilipa remained childless for a long time, and it bothered him no end. He often wondered who would succeed him as the King.</p>
    <p>So one day, Dilip went up to his guru, Sage Vashistha, and asked him if he would be blessed with children. The sage did not answer this question directly and instead told him that he would be giving him his precious cow, Nandini. Dilipa had to take care of her and protect her, and she must be fed only by him or his wife.</p>
    <p>The sage also instructed that he must not delegate this task to his servants, and hence, Dilipa had to live away from his palace for a while, since his kingly responsibilities would not allow him to take care of her. If his devotion to Nandini was pure and complete, and he succeeded in taking good care of her, his desire may be fulfilled.</p>
    <p>Dilipa accepted the sage's advice and moved with his wife Sudakshana, to a small hut in a forest, where he devoted himself to the cow. He bathed her every day and took her to graze, while his wife cleaned her shed, milked her and looked after Nandini's other needs. As time passed, Dilipa and Nandini became inseparable.</p>
    <p>One day, Nandini strolled ahead of Dilip to graze in grounds they hadn't been to before. Out of nowhere, a fierce lion appeared, ready to attack Nandini. Immediately, Dilip took out his bow and arrow and stood in front of Nandini to protect her.</p>
    <p>The lion then told the king that he ate cows to survive, it was a part of nature's cycle. One animal is food for another, and that is how the universe works. Therefore, he requested the king to move aside and let him eat.</p>
    <p>Dilipa refused to budge and replied that the lion was right about the balance of life. However, he had given his word to his teacher that he would protect Nandini - he intended to fulfil that duty under all circumstances.</p>
    <p>The discussion continued for a long time, but they couldn't reach an agreement.</p>
    <p>Dilipa finally said that if the lion's hunger was uncontrollable, he could eat him. But Nandini must be allowed to go, unharmed.</p>
    <p>The lion roared with impatience, asking him not to be foolish. Dilipa was a great warrior and an asset to your kingdom. His subjects depended upon him. The lion pointed out that if his cow died, he could always get another one. But if <em>he</em> died without an heir, it would be tough for his kingdom to survive.</p>
    <p>Dilip understood the weight of the lion's words, but he had promised to be devoted to Nandini. He remained firm in his decision and did not budge.</p>
    <p>Suddenly, the lion vanished, lightning flashed across the sky and a voice said from the heavens - "May you be blessed with all the good things life has to offer."</p>
    <p>Stunned by this turn of events, Dilipa returned to his hut with Nandini, where Sage Vasisththa was already waiting for him.</p>
    <p>The Sage beamed at him and told him that he had passed the test. In the past, he had insulted a cow by ignoring her, and today, he was willing to lay down his life for one. He could now return to his capital.</p>
    <p>Dilip bid goodbye to Nandini with sadness and affection, and returned with Sudakshana to his capital. The following year, the royal couple was blessed with a son, whom they named Raghu.</p>
    <p>Raghu was an extraordinary boy, blessed with striking looks, bravery and a good disposition. When he grew up and succeeded his father to the throne, he conquered many lands and became such a famous king that Suryavamsha also came to be known as Raghuvamsha.</p>
    <p>Time passed and Raghu had a son named Aja, who grew up to be a kind-hearted man.</p>
    <p>One day, a letter arrived, inviting the prince to attend the swayamvara of the princess of the Vidarbha kingdom, Indumati. The moment Indumati saw Aja, she garlanded him, thereby declaring her choice. The two were wed, and soon after, Aja returned with his bride to rule his kingdom.</p>
    <p>In time, Aja and Indumati had a son named Dasharatha. One day, Indumati and Aja were taking a stroll in the royal gardens, when suddenly a flower fell from the heavens and landed on Indumati. Instantly, she dropped to the ground, dead. Aja was heartbroken— and just then, the travelling sage Narada appeared. He told Aja that the flower was from his tambura.</p>
    <p>He told him that his wife was no ordinary woman, but an apsara who was cursed to take human form. She could only return to her former state when a flower from his tambura touched her head. Now that her curse had been lifted, she had gone back to the heavens.</p>
    <p>Aja understood the sage's words, but he still missed his wife terribly. Grief-stricken, he gave up his kingdom, handed over the crown to his son, Dasharatha, and left the palace to live out the rest of his days in the forest.</p>
    
    <img src="assets/images/Suryavamsha.png" 
         alt="Lineage chart of Yayati" 
         style="width:100%; margin-top:20px; border-radius:8px; display:block;">

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy – Unusual Tales about Rama and Krishna</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "D_L___",
      clue: "A powerful ruler from the Ikshavaku dynasty. One day, when he ran into the divine cow Kamadhenu, he forgot to pay his respects to her and was therefore cursed by the gods.",
      answer: "DILIPA"
    },

    {
      id: 2,
      pattern: "V___SH__",
      clue: "The Guru of the character on the left. When approached by the king, this character gave him his cow and instructed him and his wife to take care of her.",
      answer: "VASISHTA"
    },

    {
      id: 3,
      pattern: "S___K___N_",
      clue: "The wife of the character above, she helped the king diligently in taking care of the cow.",
      answer: "SUDAKSHINA",
      size: "wide"
    },

    {
      id: 4,
      pattern: "N__D___",
      clue: "The name of the divine cow, that belonged to the Sage. She is the daughter of Kamadhenu. One day, the King of Ikshavaku saved her life from a lion, asking the lion to eat him instead, thus passing the test and atoning for his past mistake.",
      answer: "NANDINI"
    },

    {
      id: 5,
      pattern: "R_G__",
      clue: "Son of the above couple, an extraodinary boy who had performed so many wonderous feats that the Suryavamsha also came to be known with his name.",
      answer: "RAGHU"
    },

    {
      id: 6,
      pattern: "_J_",
      clue: "The son of the above king, who was invited to a Swayamvara of the princess of Vidharbha.",
      answer: "AJA"
    },

    {
      id: 7,
      pattern: "__D_M___",
      clue: "The princess who garlanded him at the Swayamvara. Years later, while she was on a stroll with the king, a flower fell on her from the skies and she instantly dropped dead.",
      answer: "INDUMATI",
    },

    {
      id: 8,
      pattern: "_A___R____",
      clue: "The son of the above couple, father of Rama.",
      answer: "DASHARATHA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Dilipa
      2: { x: 2, y: 0 }, //Vasishta
      3: { x: 0, y: 1 }, //Sudakshina
      4: { x: 2, y: 2 }, //Nandini
      5: { x: 1, y: 3 }, //Raghu
      6: { x: 1, y: 4 }, //Aja
      7: { x: 2, y: 4 }, //Indumati
      8: { x: 1, y: 5 } //Dasharatha
    },

    connections: [
      { from: 1, to: 3, straight: true, noArrow: true, sideOrigin:"bottom", sideTarget:"top" },

      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", label:["advised","him"] },

      {
        from: 1,
        to: 4,
        label: ["Saved", "her life"]
      },

      {
        from: 2,
        to: 4,
        label: ["His cow"], sideOrigin:"bottom", 
        sideTarget:"top"
      },

      { from: 1, to: 5, sideOrigin:"bottom", sideTarget:"top" },
      { from: 3, to: 5, sideOrigin:"bottom", sideTarget:"top" },

      {
        from: 5,
        to: 6,
        label: ["Son"]
      },

      { from: 6, to: 7, sideOrigin:"right", sideTarget:"left", noArrow:true },

      { from: 6, to: 8, sideOrigin:"bottom", sideTarget:"top" },
      { from: 7, to: 8, sideOrigin:"bottom", sideTarget:"top" }
    ]
  }
},

{
  id: 17,
  slug: "the-abduction-and-the-search",
  title: "The Abduction and the Search",
  description: "A wicked king who disguised himself as an ascetic, a desperate cry for help, and a wounded bird falling to the earth. Follow the trail of courage and sacrifice that sets the stage for a great alliance.",
  accent: "#7fcfe3",
  congratsMessage: "You've successfully identified the significant events in the Ramayana! On to the next puzzle!",
  nextSlug: "the-rajasuya-yagna",
  trivia: `
    <p>Maricha did not like the scheme, and kept trying to convince Ravana that what he was planning was wrong. He told Ravana not to bring ruin upon himself, and that there was none in the world that was equal to Rama in virtue, truth and nobility. Maricha said that trying to take Sita from Rama would be like trying to steal the light from the sun.</p>
    <p>Instead, if he was angry with Rama, he could directly challenge him and fight him, instead of stooping so low as to abduct his wife.</p>
    <p>Ravana's eyes blazed with anger – he was driven by the lustful desire to possess Sita and nothing could stop him now. He turned to Maricha saying that he hadn't asked for his advice – he was his king and it was Maricha's duty to obey him. If he did not, Ravana would kill him. He told Maricha to come with him to Dandaka, transform himself into a golden deer, enchant Sita, and run far away from the cottage once Rama started coming after him.</p>
    <p>Maricha had no choice, and he decided that he would be happier to die a death at Rama's hands rather than Ravana's.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>In the early spring, Sita was out among trees and creepers, plucking some flowers to make a garland. Suddenly, the sun's rays flashed something golden among the green leaves. Sita saw a beautiful golden deer, nibbling on tender leaves. She was fascinated by the deer's unusual beauty, and longed to play with it. But the moment she came nearer, the deer would run away. Rama was sitting in front of the ashrama and watching the fun with a smile.</p>
    <p>Sita then ran up to him and requested Rama to get it for her. She wanted to have it as a pet and take it back to Ayodhya too.</p>
    <p>Lakshmana, who was standing nearby, warned his brother. He felt sure that it was a rakshasa in disguise – ever since he had cut off Surpanakha's ears and nose, they had been trying to trap them in some way or the other, and it would be best to leave it alone.</p>
    <p>Rama finally thought – if it really was a deer, Sita could have it. If it was a rakshasa, he could kill and get rid of it. In either case, there was nothing to lose by going after the deer. He asked Lakshmana to bring his bows and arrows, and declared that he would bring that deer, dead or alive.</p>
    <p>Rama clutched his bow, strapped the quiver to his back, and said that he would soon be back. He instructed Lakshmana to look after Sita and not to leave her side even for a moment.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>The deer continued running and led Rama deeper and deeper into the forest. Just when Rama thought he had got it, it would jump nimbly out of reach and disappear behind some trees. Then it would appear again and Rama would chase after it again. This game of hide-and-seek went on for a long time till at last Rama's patience came to an end. He decided to shoot the deer so that he could at least get the skin for Sita. So, he strung his bow and fixed an arrow to it. As the arrow pierced the deer, it regained its true form – that of Maricha, the rakshasa! He fell to the ground, and in a voice exactly like Rama's, he cried out loudly — "Lakshmana! Sita!".</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>While Sita and Lakshmana had been waiting for Rama to come back, a sudden cry rose in the air in Rama's voice, calling out to them. Sita turned to Lakshmana quickly, saying that Rama was in trouble, and that Lakshmana had to go help him now.</p>
    <p>But Lakshmana did not budge – he stood where he was. He said that this was one of the rakshasa's tricks. He told Sita that Rama had left him behind to look after her, and he would never die in the hands of a rakshasa. He reassured her that Rama was alright.</p>
    <p>But Sita wasn't pacified, and then turned her fury on Lakshmana. She asked him if this was what he had been waiting for all these years, for Rama to die so that he could take her. She then said that she would never look at a man other than Rama, and insisted that if he did not go after him this instant, she would prepare a pyre and burn herself to death.</p>
    <p>Lakshmana was unable to bear these words anymore, and finally agreed to go.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>A while after Lakshmana left, a mendicant arrived near the hut with a begging bowl in his hands. He was tall and stately and wore the orange garments of a Sadhu. She bowed down to him and was about to turn inside to bring him <em>Bhiksha.</em></p>
    <p>Ravana was struck by how beautiful she was — she looked like a delicate creeper, and her tresses looked like dark rain-bearing clouds. He could not keep these thoughts in his mind, and they came out of his tongue – he began praising her beauty in many different ways.</p>
    <p>Sita did not like it and turned to go inside again. This time, Ravana took a step forward and caught her wrist. He told Sita not to go, and that he was no hermit, but Ravana – the greatest king in the three worlds. He told Sita to come with him and be his wife – and turned into his real form, a rakshasa with burning eyes, clad in red silk, and a crown of diamonds on his head.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Now, Ravana threw off all praise and gentleness, quickly realizing that he would never win her over that way. So, he caught her hair with one hand, and with the other held her wrist. Like this, he dragged her to his waiting aerial chariot behind the trees. Sita cried out to Rama and Lakshmana, but in vain.</p>
    <p>The chariot rose in the air. Sita struggled hard, but Ravana kept her pinned down. Finally, she cried out to the trees, birds and animals to tell Rama what had happened. They all looked at her sadly, not being able to do anything against the terrible rakshasa.</p>
    <p>Now, Jatayu happened to be sleeping atop one of the trees. He woke up at the sound of a woman in distress and soon recognized the voice to be Sita's. He flew up in the air and tried to reason with Ravana. He introduced himself as Jatayu, the king of eagles – and told him that as a king, it was his duty to protect women. Instead, Ravana was doing this shameful act. He told him to stop this <em>adharma,</em> and that if he left her now, he might be able to escape Rama's wrath.</p>
    <p>Jatayu was completely unarmed, but he attacked Ravana's chariot with all the strength he could muster. He fought bravely, and Sita asked him to stop fighting and to go back and tell Rama and Lakshmana what had happened. But Jatayu could not bear to see Sita's plight and attacked Ravana even more fiercely than before. He killed the mules of the chariot and smashed his vehicle to bits, and Ravana – still clutching Sita — fell to the earth. Jatayu attacked him again and again from all sides, but his strength and vigour was starting to fail him. After all, he was very, very old.</p>
    <p>Ravana took advantage of this fact, and with a swift motion, he drew out his sword and cut off Jatayu's wings. Jatayu fell down – he had tried his best to keep his promise to Rama. Sita rushed to his side, but Ravana once again caught her and dragged her along, speeding across the sky.</p>
    <p>They flew over mountains, rivers and forests. In one place, Sita saw some people standing below. She took off her jewels, tied them in a sash, and threw them down.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>These were the Vanaras. Later on, Rama would meet them, and see the bundle and come to know the direction in which she had been taken.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "R_V___",
      clue: "The Rakshasa who disguised himself as a Rishi asking for alms, and abducted a princess.",
      answer: "RAVANA"
    },

    {
      id: 2,
      pattern: "S_T_",
      clue: "The princess of Mithila who was kidnapped by the Rakshasa. In desperation, she threw down some of her jewels to indicate to Rama the direction in which she had been taken.",
      answer: "SITA"
    },

    {
      id: 3,
      pattern: "J_T___",
      clue: "The son of Aruna, an aged but brave vulture who did his best to rescue the woman. However, his wings were chopped off by the Rakshasa.",
      answer: "JATAYU"
    },

    {
      id: 4,
      pattern: "S_M____",
      clue: "The vulture’s brother, who in childhood had challenged him to fly toward the sun. Later, he shielded his brother with his wings.",
      answer: "SAMPATI"
    },

    {
      id: 5,
      pattern: "V_N____",
      clue: "The people who saw the jewels thrown by the princess and helped the prince of Ayodhya in his search for his wife.",
      answer: "VANARAS",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Ravana
      2: { x: 1, y: 1 }, //Sita
      3: { x: 1, y: 2 }, //Jatayu
      4: { x: 0, y: 3 }, //Sampati
      5: { x: 2, y: 3 } //Vanaras
    },

    connections: [
      // Ravana → Sita (abduction)
      { from: 1, to: 2, label: ["abducted her"], sideOrigin:"bottom", sideTarget:"top" },

      // Sita → Jatayu (tries to save her)
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top" },

      // Jatayu ↔ Sampati (brothers)
      { from: 3, to: 4, straight: true, noArrow: true, label: ["brothers"], sideOrigin:"bottom", sideTarget:"top" },

      // Sita → Vanaras (jewels guide them)
      { from: 2, to: 5, noArrow: true, sideOrigin:"bottom", sideTarget:"top", label: ["dropped jewels"], avoidNode:3 }
    ]
  }
},

{
  id: 18,
  slug: "the-rajasuya-yagna",
  title: "The Rajasuya Yagna",
  description: "Before the grand Rajasuya could be performed, an obstacle had to be removed. A conquest had to be completed. During the final Yagna, there was an expected incident. Identify all the characters involved in this chain of events.",
  accent: "#f7fb08",
  congratsMessage: "Congratulations on identifying all the major characters of The Rajasuya Yagna.",
  nextSlug: "when-brothers-become-enemies",
  trivia: `
  <p>Brihadratha, the ruler of the Kingdom of Magadha, was married to twin princesses. A long time passed and yet Brihadratha was not blessed with any children.</p>
  <p>One day, he met a Sage named Chandakaushika. After learning the cause of his misery, the Sage gave the King a magical fruit and asked him to give it to his wife and that she would bear a child in due course.</p>
  <p>Feeling that it was unfair to prefer one wife over the other – he cut the fruit into two halves and gave one half to each of his wives.</p>
  <p>Eventually, they gave birth to two dead and incomplete half-babies – it was almost as if one baby had been split into two vertical halves. The King was shocked at this horrific sight and ordered his men to leave the half-newborns in a forest.</p>
  <p>The forest where they had left the babies was home to a demoness named Jara. She brought the two halves close together, and suddenly – it became a live baby!</p>
  <p>Jara returned the baby to the King and told him about how the two lifeless bodies had fused into one. The King, pleased by this, named the baby Jarasandha.</p>
  <p>Jarasandha grew up to be a powerful King. He had an ambitious and merciless nature, and had also developed powerful allies such as Shishupala of Chedi.</p>
  <p>The royal astrologers advised Jarasandha that if he imprisoned and killed a hundred kings, it would help him conquer and occupy many more lands and elevate his status to that of an Emperor.</p>
  <p>When Yudhishtira was planning to perform the Rajasuya Yagna, Lord Krishna advised him that he could certainly do it, but that there was a big thorn in his way.</p>
  <p>He said that – to perform the Rajasuya, he had to defeat every king on the land, which would be difficult as long as Jarasandha was alive. He had powerful allies – Shishupala of Chedi, powerful generals – Hansa and Dimbhaka, Bhagadatta of Pragjyotishas, the Bhojas, the southern Panchalas and Kulinds.</p>
  <p>He also had several monarchs imprisoned whom he had vowed to sacrifice to Shiva. Therefore, Krishna said that before performing the Rajasuya he must kill Jarasandha and rescue the kings.</p>
  <p>As per the plan, Krishna, Bhima and Arjuna journeyed to Rajagriha, which was the capital of Jarasandha's Kingdom. Jarasandha was an ardent devotee of Lord Shiva and performed a puja for him every day. He was known to grant his subjects whatever they asked for at that time.</p>
  <p>Krishna, Bhima and Arjuna disguised themselves as poor men and approached the king after the puja. They requested that they would like to have a wrestling match with him. Jarasandha found the request unusual, but agreed, and said that a wrestling match must be among equals.</p>
  <p>He chose Bhima as his opponent, seeing that he was the only one who had the physique of a wrestler. However, he had also seen through the disguises.</p>
  <p>Finally, the wrestling match began and went on for fourteen days from sunrise to sunset. It was unclear who would emerge the winner since both Bhima and Jarasandha were equally strong.</p>
  <p>As the opponents were wrestling on the fourteenth day, Krishna picked up a twig and split it vertically into two. Bhima understood, and he grabbed Jarasandha and split his body into two vertical halves. However, to his surprise – the body snapped back again and Jarasandha stood up.</p>
  <p>Krishna signaled to Bhima again – he indicated that Bhima must split Jarasandha into two but then make the two halves face away from each other. Bhima followed Krishna's advice and just as the latter had predicted, Jarasandha's body remained in two halves, thus killing him.</p>
  <p>Then, Krishna released all the imprisoned kings and crowned Jarasandha's son, Sahadeva as the king of Magadha.</p>
  <p>Later on, Sahadeva along with the released kings, became the Pandavas allies in the war.</p>
  <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
  <p>After Jarasandha's death, the campaigns began. Arjuna was sent to conquer the northern rulers, Bheema to the east, Sahadeva to the south and Nakula to the west. Thus, Yudhishthira’s brothers, who rode out in all four directions, brought all kingdoms under their authority. </p>
  <p>The four brothers returned to Indraprastha, laden with tributes and promises of allegiance. Indraprastha became a prosperous land of the virtuous people. </p>
  <p>Friends and counsellors advised Yudhishthira to begin the auspicious Rajasuya Yajna. At around the same time, Lord Krishna too reached Indraprastha and advised the same. </p>
  <p>Everyone set about the task of making preparations for the Yagna. Sahadeva was entrusted the task of extending invitations to learned brahmins and saints. Nakula was sent to Hastinapur to personally invite the Kuru elders and his cousins. </p>
  <p>The Sabha was full, lively and thriving. All arrangements having been completed, Yudhishthira inaugurated the Yajna amidst chanting of the sacred mantras and oblations of sacrificial butter into the fire. Finally, the Yagna was concluded, and according to the ritual, arghya was to be offered to the participants. </p>
  <p>Bhishma then told the emperor that he must now offer arghya to all the guests there, and to begin with the most deserving one. </p>
  <p>Then Sahadeva stood up to propose the name of Lord Krishna as the most deserving one amongst the guests. Bhishma, Dronacharya and a large number of other kings seconded the proposal. </p>
  <p>Yudhishthira solemnly walked up to Krishna with all due humility and grace. Suddenly, someone in the crowd laughed loudly. It was Shishupala, the king of Chedi and Lord Krishna’s cousin. </p>
  <p>He loudly questioned Yudhishtira's decision to offer arghya to a cowherd, when there were many elders and powerful warriors around. </p>
  <p>The others around him tried to calm him down, but Shishupala only grew more enraged. He began throwing insult after insult at everyone, and did not spare Bhishma either. Reason had completely forsaken him. </p>
  <p>Finally, Krishna stood up, saying that he had pardoned innumerable mistakes of Shishupala in the past, but today, he had gone too far. In an instant, the Sudarshana Chakra appeared on his hand. He launched the discus and cut off the head of Shishupala in one stroke. From the slain body of the king of Chedi, a divine light rose and merged with Krishna. </p>
  <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
  <p>Duryodhana stayed back even after the yagna, admiring the grandeur of everything around him. His wonder turned into jealousy as he explored the Mayasabha. Angry and humiliated after an incident near a pool, he determined to get back at the Pandavas, and began conspiring the dice game. </p>
  <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "J_R_",
      clue: "This character was a Rakshasi who found two lifeless halves of a child that had been abandoned by a King. She joined the two halves together, which resulted in the child coming to life.",
      answer: "JARA"
    },

    {
      id: 2,
      pattern: "J___S_____",
      clue: "King of Magadha, who conquered numerous kings and held them captive. He attacked Mathura seventeen times, and was a very powerful ruler. For Yudhishtira to perform his Rajasuya Yagna, this King had to be eliminated first.",
      answer: "JARASANDHA",
      size:"wide"
    },

    {
      id: 3,
      pattern: "B_I__",
      clue: "The Pandava who ultimately killed the Emperor of Magadha in a gruelling wrestling match which lasted 14 days.",
      answer: "BHIMA"
    },

    {
      id: 4,
      pattern: "K_____A",
      clue: "Strategist who guided the Pandava on how to defeat the Emperor. He split a leaf and demonstrated throwing away the two halves in opposite directions to prevent them from rejoining.",
      answer: "KRISHNA"
    },

    {
      id: 5,
      pattern: "__J_N_",
      clue: "The prince who conquered the northern regions including Anarta, Kalakuta, Pragjyotisha etc.",
      answer: "ARJUNA"
    },

    {
      id: 6,
      pattern: "__K___",
      clue: "The prince who conquered kingdoms in the west.",
      answer: "NAKULA"
    },

    {
      id: 7,
      image: "assets/images/ancient_compass.png",
      clue: "",
      answer: "",
      size: "small"
    },

    {
      id: 8,
      pattern: "__I__",
      clue: "The prince who conquered kingdoms in the eastern direction - such as Videha, Kasi, Pundra etc.",
      answer: "BHIMA"
    },

    {
      id: 9,
      pattern: "__H_D___",
      clue: "The prince who conquered the southern kingdoms including Kosala, Avanti, etc.",
      answer: "SAHADEVA"
    },

    {
      id: 10,
      pattern: "K_____A",
      clue: "Honored with the Arghya first at the Rajasuya.",
      answer: "KRISHNA"
    },

    {
      id: 11,
      pattern: "S__SH_P___",
      clue: "The prince who insulted Krishna repeatedly during the Rajasuya ceremony and was slain after exceeding hundred crimes commited.",
      answer: "SHISHUPALA"
    },

    {
      id: 12,
      pattern: "D__Y______",
      clue: "In the Mayasabha, he mistook an illusion for real water and lifted his garnments. He felt humiliated by this and also jealous of the Pandavas, and started plotting against them.",
      answer: "DURYODHANA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1:  { x: 1, y: 0 }, //Jara
      2:  { x: 1, y: 1 }, //Jarasandha
      3:  { x: 0, y: 2 }, //Bhima
      4:  { x: 2, y: 2 }, //Krishna
      5:  { x: 1, y: 3 }, //Arjuna
      6:  { x: 0, y: 4 }, //Nakula
      7:  { x: 1, y: 4 }, //compass image
      8:  { x: 2, y: 4 }, //Bhima
      9:  { x: 1, y: 5 }, //Sahadeva
      10: { x: 1, y: 6 }, //Krishna
      11: { x: 0, y: 7 }, //Shishupala
      12: { x: 2, y: 7 } //Duryodhana
    },

    connections: [
      {
        from: 1,
        to: 2,
        label: "joined his two halves",
        sideOrigin: "bottom",
        sideTarget:"top"
      },

      {
        from: 3,
        to: 2,
        straight: true,
        sideOrigin: "top",
        sideTarget:"left",
        label: "killed him"
      },

      {
        from: 4,
        to: 3,
        straight: true,
         sideOrigin: "left",
        sideTarget:"right",
        label: "guided him"
      },

      {
        from: 7,
        to: 5,
        straight: true,
        sideTarget:"bottom",
      },

      {
        from: 7,
        to: 6,
        straight: true,
        sideTarget:"right",
      },

      {
        from: 7,
        to: 8,
        sideTarget:"left",
        straight: true
      },

      {
        from: 7,
        to: 9,
        sideTarget:"top",
        straight: true
      },

      {
        from: 10,
        to: 11,
         sideOrigin: "bottom",
        sideTarget:"right",
        straight: true,
        label: "killed with Sudarshana Chakra"
      },

      {
        from: 11,
        to: 10,
        sideOrigin: "top",
        sideTarget:"left",
        straight: true,
        label: "insulted repeatedly"
      }
    ]
  }
},

{
  id: 19,
  slug: "when-brothers-become-enemies",
  title: "When Brothers Become Enemies",
  description: "A misunderstanding between brothers led to an exile, a new alliance, and eventually a search that would cross oceans.",
  accent: "#12f0d6",
  congratsMessage: "Brilliant! On to the next puzzle.",
  nextSlug: "a-night-in-the-dance-hall",
  trivia: `
    <p>Vali was the King of Vanaras. So great was his strength that he could lift a mountain from its very base, toss it up in the air and catch it again as though it were a ball!</p>
    <p>There once lived a Rakshasa called Dundubhi, who was a living terror to all creatures. He went to Kishkindha and started uprooting trees and smashing walls and ramparts. Vali heard the challenge and came out to find Dundubhi engrossed in his round of destruction.</p>
    <p>The two then had a terrible fight, and finally, Vali killed the Rakshasa. Vali triumphantly lifted his battered body and hurled it many miles away. But on the way, a few drops of blood fell on the ashrama of Matanga Rishi. Angered by this, he cursed Vali that he would not be able to step on Rishyamukha without meeting his death.</p>
    <p>Sometime later, Dundubhi's younger brother — Mayavi — challenged Vali to a fight to avenge his brother's death. This was in the middle of the night. Vali rushed out, enraged at being disturbed, his eyes big and red with anger. He was followed swiftly by Sugreeva. Mayavi was frightened and bolted into the darkness, but Vali and Sugreeva were fast on his heels. They saw him disappear inside a cave. Vali told Sugreeva to stay there and guard the entrance, while he would go inside and kill the Rakshasa.</p>
    <p>For some time, Sugreeva heard nothing, and then heard a yell and saw a stream of blood come out of the cave. He thought that if Vali had won, he would have given the familiar cry of triumph — so Mayavi must have killed him. Sugreeva thought that it was now up to him to prevent Mayavi from coming out and destroying Kishkindha. He then took a huge boulder and blocked the entrance of the cave.</p>
    <p>Back in Kishkindha, he gave everyone the news of Vali's death, and they installed Sugreeva on the throne. To everyone's surprise, Vali returned a few days later, tired and wounded. He was furious to see Sugreeva on the throne. He would not listen to his pleadings that it had all been a misunderstanding, and banished Sugreeva from Kishkindha along with a few of his faithful followers.</p>
    <p>Sugreeva resided on the Rishyamukha mountain, since Vali could not come there due to Matanga Rishi's curse.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Rama and Sugreeva told each other their stories and pledged their word to help each other. However, Sugreeva was slightly doubtful about Rama's prowess, because so far, no one had been able to defeat Vali.</p>
    <p>Then, Rama fixed an arrow to his bow and aimed it at the Sal tree Sugreeva pointed out. The arrow went through the tree after striking it, and in quick succession, pierced six other trees behind it. Then it touched the earth and in a reverent attitude, came back of its own accord to Rama's quiver.</p>
    <p>Sugreeva was now confident, and felt sure of victory over Vali.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>After Vali had been defeated and Sugreeva installed on the throne, the monsoons began. Rain fell down in great torrents and flooded the paths. It was impossible to travel, and Rama and Lakshmana spent those months in a cave on Rishyamukha.</p>
    <p>However, even after the rains were over, Sugreeva was intoxicated by the pleasures of being a King. Rama was beginning to lose his patience and told Lakshmana to go to Sugreeva and remind him that he had to keep his promise, as Rama had kept his.</p>
    <p>Sugreeva then realised his folly and told Lakshmana that the Vanara forces all over the earth had been alerted and asked to assemble in Kishkindha within a day.</p>
    <p>Sugreeva then divided the Vanaras into groups. Satabal led his group north, Vinata went east, Sushena's group travelled west. Hanuman, Jambavan, Neela and Angada led their Vanaras south.</p>
    <p>Just before the Vanaras set out south, Rama called Hanuman to him. Something told him that it would be Hanuman who would bring him news of Sita. He removed the signet ring from his finger and placed it in Hanuman's hand. He told him that when Sita saw that ring, she would know that he was Rama's messenger.</p>
    <p>Eventually, the Vanaras who had gone north, east and west returned within a month's time and reported their failure — all hope now rested on the party that had gone south.</p>
    <p>Hanuman, Angada, Jambavan and the Vanaras with them searched every forest, cave and desert they came across. Finally, they came to the seashore. For miles ahead they could see nothing but the deep ocean — fear struck their hearts. Would they have to cross the ocean to find Sita? If so, how? Most of them wanted to give up and return to Sugreeva.</p>
    <p>Angada said that he would not return to Kishkindha, fearing that Sugreeva would punish him the way he had punished his father.</p>
    <p>Hanuman wisely told them that even though the month was up, they should intensify their search. If they found some positive news about Sita, the delay would still be worth it.</p>
    <p>But they did not know what else they could do, and in despair and gloom, they sat down to discuss and work out a plan.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>While they were sitting thus, a vulture was closely watching them. It was hungry and had not had a meal in many days, and was waiting for a chance to eat up these Vanaras.</p>
    <p>Meanwhile, the Vanaras were discussing the story of Rama — how he had been banished from his kingdom and had lived all those years in the forest with his wife and brother, how he had killed many Rakshasas, and how cruel it was that Sita had been kidnapped by the vile Ravana, and how unfortunate it was that Jatayu could not rescue her.</p>
    <p>Suddenly, the vulture called out to them when he heard the name Jatayu. He asked them who they were and what they were talking about. The Vanaras told him everything that had happened.</p>
    <p>Sampati said that while he had been sitting on the hill, he had seen a huge Rakshasa like a dark black cloud speeding across the sky, clutching a wailing lady, flying across the ocean. Sampati, although very old, had keen eyesight and looked across the ocean. He said that he could see Sita sitting in a garden, sad and forlorn, surrounded by hideous Rakshasis.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "V_L_",
      clue: "The King of the Vaanaras. He chased a Rakshasa named Mayavi into a cave and asked his brother to guard the entrance. When he didn't emerge for a long, the entrance was sealed. Name this character who entered the cave.",
      answer: "VALI"
    },

    {
      id: 2,
      pattern: "S_G_I__",
      clue: "The Vaanara prince who had sealed the entrance, thinking that his brother had died. He was exiled by the King when he returned. He took refuge in the Rishyamukha mountains.",
      answer: "SUGRIVA"
    },

    {
      id: 3,
      pattern: "H_N_M_N",
      clue: "The minister of the exiled prince. Seeing two ascetics near the river Pampa, he approached them to find out what they had come for. Realising their purpose, he carried both brothers on his shoulders to meet the prince.",
      answer: "HANUMAN"
    },

    {
      id: 4,
      pattern: "R_M_",
      clue: "When asked to demonstrate his prowess, this prince shot an arrow through one Sal tree — and it pierced six more behind it.",
      answer: "RAMA"
    },

    {
      id: 5,
      pattern: "A_G_D_",
      clue: "The son of the Vaanara king. Along with the son of Vayu and others, he traveled southward in search of Sita.",
      answer: "ANGADA"
    },

    {
      id: 6,
      pattern: "S_M____",
      clue: "A vulture who overheard the Vaanaras discussing their dilemma at the seashore. Upon hearing his brother's name mentioned, he revealed that he saw a Rakshasa flying over the ocean with a woman.",
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
      { from: 1, to: 2, straight: true, noArrow: true, label: ["brothers"], sideOrigin:"left", sideTarget:"top" },

      // Sugriva → Hanuman
      { from: 2, to: 3, label: ["minister"], sideOrigin:"bottom", sideTarget:"top" },

      // Rama → Vali 
      { from: 4, to: 1, label: ["killed him"], sideOrigin:"top", sideTarget:"right", straight: true },

      // Vali → Angada 
      { from: 1, to: 5, sideOrigin:"bottom", sideTarget:"top", label:"son" },

    ]
  }
}, 

{
  id: 20,
  slug: "a-night-in-the-dance-hall",
  title: "A Night in the Dance Hall",
  description: "During the Pandavas’ incognito year in the Matsya kingdom, a powerful commander becomes infatuated with the princess of Panchala. His malicious actions lead to a brutal end.",
  accent: "#4da9ff",
  congratsMessage: "Congratulations on identifying all the major characters of A Night in the Dance Hall.",
  nextSlug: "the-messenger-of-rama",
  trivia: `
    <p>The Pandavas had spent ten months in Virata's court during their incognito year, without any incident. But one day, Queen Sudeshana's brother, Keechaka, who was also the commander of the King's forces – happened to see Draupadi while visiting his sister.</p>
    <p>Keechaka immediately went up to her and asked her whether she was a goddess or an apsara. He said that she didn't deserve to be a maid, and that he would rather have her as his queen.</p>
    <p>Draupadi controlled her temper, and told him politely that she was the wife of Gandharva husbands.</p>
    <p>Keechaka persisted that he was the commander of Virata's army, and was responsible for the safety of his commander – if she accepted him, she could rule over his kingdom.</p>
    <p>Draupadi sternly refused his offer, warning him to stay away from her, or her husbands – the five powerful Gandharvas would not think twice before killing him.</p>
    <p>Keechaka went straight to Sudeshana and pleaded with her to send Malini to his palace on some pretext. The queen didn't dare refuse – not only was Keechaka her brother, but because he was also responsible for the safety of Virata, the king and his kingdom.</p>
    <p>Soon, an opportunity presented itself – a royal festival was to be held, for which the necessary articles had to be collected. The queen needed them for Lord Shiva's worship. She summoned Malini and asked her to retrieve the necessary items from Keechaka's palace.</p>
    <p>Draupadi hesitated at this, but Sudeshana asked her to do as commanded, and that her brother knew how to conduct himself.</p>
    <p>When Draupadi entered Keechaka's palace, he stared at her and smiled, his evil intentions were written clearly across his face. He tried to grab her by her clothes, and she wrenched herself free, telling him that her husbands would now be satisfied with nothing other than his death.</p>
    <p>She ran without stopping to the court where Yudhishtira and Bheema were playing dice with the king. They looked up at her in surprise and found Keechaka chasing her. He grabbed at her again, and Bhima was wild with fury. He was about to advance towards Keechaka, but Yudhishtira indicated him to stop.</p>
    <hr/>
    <p>Later that night, Bhima, who couldn't bear Draupadi's misery, promised that he would do away with Keechaka secretly. He asked Draupadi to lure him to the dancing hall next night, where Bhima would end his story once and for all.</p>
    <p>The next day - Draupadi approached Keechaka as planned. She apologized for the previous day's incident and told him to meet her in the dancing hall tonight, when there would be no one.</p>
    <p>Keechaka agreed to be there.</p>
    <p>Bhima then draped himself in a women's garment, and then laid down on the couch, covering himself. Keechaka mistook him for Malini. Bhima then stood up, caught him by his hands and flung him on the floor. Although Keechaka was a strong warrior himself, he could not resist the might of the furious Bhima. He thrashed Keechaka mercilessly to death.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "S___SH__",
      clue: "The queen of Matsya who was served by a Sairandhri, who was actually an empress in disguise.",
      answer: "SUDESHNA"
    },

    {
      id: 2,
      pattern: "M___N_",
      clue: "The name under which Draupadi served in the court of Matsya during the Pandavas’ incognito year.",
      answer: "MALINI"
    },

    {
      id: 3,
      pattern: "K__C____",
      clue: "Brother of the queen, and the powerful commander of Matsya who fell in love with the Sairandhri. His repeated attempts to harass her resulted in his downfall.",
      answer: "KEECHAKA"
    },

    {
      id: 4,
      pattern: "B_I__",
      clue: "The Pandava who was disguised as a cook in Matsya. He dressed himself like the Sairandhri and waited in the dance hall where the commander of Matsya was lured to, and killed him in that night.",
      answer: "BHIMA"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Sudeshna
      2: { x: 1, y: 1 }, //Malini
      3: { x: 0, y: 2 }, //Keechaka
      4: { x: 2, y: 2 } //Bhima
    },

    connections: [
      {
        from: 4,
        to: 3,
        straight: true,
        label: "killed him",
        sideOrigin: "left",
        sideTarget:"right"
      }
    ]
  }
},

{
  id: 21,
  slug: "the-messenger-of-rama",
  title: "The Messenger of Rama",
  description: "The son of Vayu had to perform the insurmountable task of crossing a mighty ocean. From forgetting his own strength, to successfully finding the princess of Mithila, see if you can identify the characters in his journey.",
  accent: "#ff6b35",
  congratsMessage: "Well done! Try your luck with the next puzzle!",
  nextSlug: "seven-days-of-rain",
  trivia: `
    <p>Due to Sampati, the Vanaras finally knew that Sita was in the Ashoka Vanam in Lanka, and the only question now was how to get there. Angada then told each Vanara to give an estimate of how far they could leap.</p>
    <p>The Vanaras all gave accounts of their leaps — some could leap ten <em>yojanas</em>, some twenty, some fifty, and some even seventy. Angada said that he could do a hundred yojanas in one leap, but was not sure whether he would have the strength left for the return leap.</p>
    <p>Jambavan looked at Hanuman, who had been quiet all this time. He told Hanuman that he was their only hope — he was the son of the wind god, and he had his speed in everything. His shoulders had the power of Garuda's wings. Crossing the ocean would be an easy task for him, and he asked him to use his divine strength for this great cause.</p>
    <p>When Hanuman heard Jambavan praise him in this way, he felt a hidden strength swell up within him, and his body expanded. He grew and grew until he was as enormous as a huge mountain. His body shone like molten gold and the Vanaras covered their eyes as they could not face the brilliance of his form.</p>
    <p>In this huge, magnificent form, Hanuman went to the top of the Mahendra hill. He offered prayers to Surya, Indra and Brahma and, turning east, did an obeisance to his father, Vayu.</p>
    <p>Then, turning south, he increased his stature even further and pressed his foot down hard on the hill. It trembled under the pressure. Then, with a mighty roar that rent the heavens, he sped across the sky like a blazing comet.</p>
    <p>At some point, a monster emerged from the ocean and asked him to enter its mouth. Hanuman told the monster not to stop him, as he was going on a very important mission.</p>
    <p>But the monster said that it was very hungry and quite determined that he must enter its mouth. Hanuman thought quickly and increased his body to a size bigger than the monster's mouth. The monster was actually a Naga maiden named Surasa, who was trying to test Hanuman. As his size increased, so did the size of Surasa's mouth. Suddenly, Hanuman shrank his body to a speck and darted into her mouth and out again. He laughed and said that he had fulfilled her wish, and asked her to let him go. Surasa blessed him and told him that she had only been testing him, and that she was sure his mission would be successful.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "H___M_N",
      clue: "The son of Vayu who leapt across the ocean in search of Sita.",
      answer: "HANUMAN"
    },

    {
      id: 2,
      pattern: "S___S_",
      clue: "The Rakshasi near the ocean who tried to swallow him, testing his wit and agility.",
      answer: "SURASA"
    },

    {
      id: 3,
      pattern: "J_MB_V_N",
      clue: "The wise Vaanara who reminded the son of Vayu about his forgotten strength before the leap.",
      answer: "JAMBAVAN"
    },

    {
      id: 4,
      pattern: "A_____ VANAM",
      clue: "The garden in Lanka where Sita was kept under guard.",
      answer: ["ASHOKA", "ASHOKA VANAM"],
      size: "wide"
    },

    {
      id: 5,
      pattern: "R_V___",
      clue: "The king of Lanka who was holding Sita captive.",
      answer: "RAVANA"
    }
  ],

  layout: {
    positions: {
      3: { x: 1, y: 0 },   // Jambavan 
      1: { x: 1, y: 1 },   // Hanuman
      2: { x: 0, y: 2 },   // Surasa
      4: { x: 2, y: 2 },   // Ashoka Vanam
      5: { x: 1, y: 3 }    // Ravana
    },

    connections: [
      // Jambavan to Hanuman
      { from: 3, to: 1, label: ["reminded him of his strength"], sideOrigin:"bottom", sideTarget:"top" },

      // Hanuman to Surasa
      { from: 1, to: 2, label: ["outwitted her"], sideOrigin:"bottom", sideTarget:"top" },

      // Hanuman to Ashoka Vanam
      { from: 1, to: 4, sideOrigin:"bottom", sideTarget:"top" },

      // Ravana to Ashoka Vanam
      { from: 5, to: 4, label: ["kept Sita here"], sideOrigin:"right", sideTarget:"bottom", straight:true }
    ]
  }
}, 
{
  id: 22,
  slug: "seven-days-of-rain",
  title: "Seven Days of Rain",
  description: "What happened when the age old practice of offering worship to the God of rain was suddenly stopped? Identify the characters involved in the story of challenging the pride of a God, a terrible storm, and a wonderous feat.",
  accent: "#70e000",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "at-the-edge-of-sixteen",
  trivia: `
    <p>The rainy season was drawing near, and in Vraja, there were great preparations for a Yagna going on. Krishna approached his father and asked him what the Yagna was about, and in whose honour the sacrifice was happening.</p>
    <p>Nanda then told him that Indra was the god of clouds and rain, and since rain gives life to all beings, Indra was to be worshipped.</p>
    <p>Krishna then asked him why they were talking about thanking Indra — since the birth and death of men were pre-ordained according to their karma. And since they lived in the forests, the cows were their means of livelihood and their wealth. Therefore, he suggested worshipping them and the Govardhana Mountain instead.</p>
    <p>Nanda and the others thought that this was an excellent suggestion — so Indra did not get his usual worship. It was the cows and the Govardhana which received the adoration of the people of Vraja.</p>
    <p>Indra became terribly jealous and angry, and decided to take revenge. He sent forth clouds and winds which were generally kept in reserve for <em>mahapralaya</em>. He instructed them to wreak havoc on Vrindavan, and destroy the land and people completely.</p>
    <p>The clouds were released and there was thunder and lightning the like of which had never been seen on earth. Rain poured down in continuous sheets and there were hailstorms. Water flooded into every house and cow-shed. People were in great distress.</p>
    <p>At last, the gopis took their babies to Krishna and pleaded with him to save them from the anger of Indra. Krishna was moved when he saw their plight, and lifted Govardhana with one hand, and called all the people to take shelter under it.</p>
    <p>For seven days it rained without stopping, and for seven days Krishna held the mountain aloft while the people took refuge under it.</p>
    <p>Indra eventually realised how futile his anger and jealousy were, and became ashamed. He withdrew the clouds and the wind. He approached the Lord and prostrated before him. He touched his feet and begged his pardon.</p>
    <p>Krishna then told him that all this had been done to break his pride, and that he takes away the powers of those whom he wants to favour. He instructed him to go forth and perform his duties faithfully.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "K_____A",
      clue: "The young cowherd who questioned the ritual worship of the God of rain and asked the people to offer their worship and devotion toward the nature around them.",
      answer: "KRISHNA"
    },

    {
      id: 2,
      pattern: "I____",
      clue: "The king of the Devas who sent torrential rains in anger.",
      answer: "INDRA"
    },

    {
      id: 3,
      pattern: "V____A___A",
      clue: "The village which was protected during the great storm.",
      answer: "VRINDAVANA",
      size: "wide"
    },

    {
      id: 4,
      pattern: "G_V_R____A",
      clue: "The mountain lifted by the cowherd effortlessly, to shelter his people from the storm.",
      answer: "GOVARDHANA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      2: { x: 1, y: 0 },   // Indra 
      1: { x: 1, y: 1 },   // Krishna
      3: { x: 0, y: 2 },   // Vrindavan
      4: { x: 2, y: 2 }    // Govardhana
    },

    connections: [
      // Indra to Vrindavan
      { from: 2, to: 3, label: ["sent torrential rains"], sideOrigin:"left", sideTarget:"top", straight:true },

      // Krishna to Govardhana
      { from: 1, to: 4, label: ["lifted"], sideOrigin:"bottom", sideTarget: "top" },

      // Govardhana to Vrindavan
      { from: 4, to: 3, label: ["sheltered"], sideOrigin: "left", sideTarget:"right" },

      // Krishna to Indra
      { from: 1, to: 2, noArrow:true, sideOrigin:"top", sideTarget: "bottom" }
    ]
  }
}, 
{
  id: 23,
  slug: "at-the-edge-of-sixteen",
  title: "At the Edge of Sixteen",
  description: "A child born with a short lifespan, a father’s devotion, divine witnesses, and the moment when fate itself is challenged.",
  accent: "#ea96d8",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-year-in-disguise",
  
trivia:`
<p>Sage Mrikandu observed severe penances to please Lord Shiva. When Shiva finally appeared before him, Mrikandu requested him to bless him with a son. </p>
<p>Shiva gave him a choice - he asked him if he wanted a son who would live long, though lacking in virtues, or a son who would be wise and virtuous but would live for only sixteen years. Sage Mrikandu chose to have a virtuous son. Granting the wish of the sage, Lord Shiva vanished. </p>
<p>In due course, Marudvati, Mrikandu’s wife, gave birth to a son. They named him Markandeya. At a very young age, Markandeya had mastered the Vedas. </p>
<p>Rishis would frequently be visiting Mrikandu’s ashrama. Whenever a rishi came, Mrikandu would make his child prostrate before them and seek their blessings. Typically, when one did that, the elder would bless the person with a long life, saying “Dirghayuṣmān bhava”. However, no rishi said this, because they were aware of what had been destined. </p>
<p>One day, the Saptarishis along with Arundhati arrived at Mrikandu’s ashrama. When Markandeya prostrated before them, all of them in one voice, uttered “Dirghayuṣmān bhava”. Mrikandu was thrilled, because this was what he had wanted to hear. Meanwhile Narada also had been present there and was watching all this. </p>
<p>Suddenly, he laughed. When the Saptarishis asked him why he was laughing, Narada said that for the first time in the history of this world, Veda Vak was about to be proven wrong. According to Veda Vak, if a rishi said something, it would have to come true. Narada then explained that Markandeya was destined to live for only sixteen years, so either Parameshwara would be proven wrong, or the rishis would be proven wrong. </p>
<p>Even before Narada finished saying this, the Saptarishis vanished, taking Markandeya with them to Satya Loka. There, Brahma was surprised to see them and asked them why they had come. </p>
<p>The Saptarishis replied that they had come to protect the spirit of the Vedas. Vedas said that whatever a rishi says has to come true. Now unknowingly, the Saptarishis had blessed the boy to have a very long life, and now there was this caveat. </p>
<p>Lord Brahma instructed them to leave the boy with him, and that he would take care of what to do. Once they left, Brahma told the boy that all the people around him were so worried about him. Brahma was curious to know how Markandeya himself was feeling. </p>
<p>Markandeya replied that he was not worried, however he said that his father was unhappy. Markandeya did not want to go, leaving his father in that state. He requested Brahma to give Mrikandu peace of mind. </p>
<p>Lord Brahma smiled and said that the only way the boy’s father could have peace of mind, was if Markandeya had a long life. Brahma then said that he would show him how he could go beyond time. (This does not mean defying time but going beyond it.) </p>
<p>Markandeya then innocently asked Brahma how he could do this. Brahma explained that there was one who ruled over time – Mahakaleshwara, and then proceeded to instruct him on how to worship this deity who was beyond time. </p>
<p>Markandeya, after his initiation, went and sat down in deep tapas. While he was sitting in his dhyanam, suddenly, his time came to an end. Yama arrived before Markandeya to take him away, while the latter had been deep in his prayers to Lord Shiva. </p>
<p>Markandeya said that his worship was not yet over, and told Yama that he would finish it and come. Yama said that he could not wait, and released his noose, starting to drag the boy away. </p>
<p>At that moment, Markandeya hugged the Lingam, and composed a Stotram to Lord Shiva. Shiva suddenly sprang from the Lingam and struck Yama with his left leg. While Yama was appointed to bring people after their time was up, Markandeya had gone into a state beyond time, where time could not hurt him anymore. Thus, Markandeya became a <em>Chiranjeevi</em> and Yama had also been taught a lesson. </p>
<p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference:</em> <a href="https://www.youtube.com/watch?v=qVYsREdP98w " target="_blank" style="color:var(--accent-color);"> <em>The Puranic Concept Of Time
</em></a></p>
`,
rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "M__K_N__Y_",
      clue: "The son of the above sage, who was destined to live only for sixteen years.",
      answer: "MARKANDEYA",
      size: "wide"
    },

    {
      id: 2,
      pattern: "M__K__DU",
      clue: "The sage who performed a penance to be blessed with children. He was given two choices - a son without virtues who would live long, and a virtuous son who would live only sixteen years.",
      answer: "MRIKANDU"
    },

    {
      id: 3,
      pattern: "__I__",
      clue: "The deity to whom the young sage prayed with unwavering devotion.",
      answer: "SHIVA"
    },

    {
      id: 4,
      pattern: "___T___S_I_",
      clue: "The seven great sages who witness many cosmic events. At one point, when this boy bowed down to them, they blessed him with a long life.",
      answer: "SAPTARISHIS",
      size: "wide"
    },

    {
      id: 5,
      pattern: "_R____",
      clue: "The creator who granted the boon to the father.",
      answer: "BRAHMA"
    },

    {
      id: 6,
      pattern: "____D_",
      clue: "The wandering sage who often appears at pivotal moments in divine stories. When the Rishis granted long life to the boy, he laughed, saying their words would be proven wrong for the first time.",
      answer: "NARADA"
    },

    {
      id: 7,
      pattern: "___A",
      clue: "The god of death who arrived to claim the young sage.",
      answer: "YAMA"
    }
  ],

  layout: {
    positions: {
      5: { x: 2, y: 0 },   // Brahma 
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
      { from: 2, to: 1, label: ["son"], sideOrigin:"bottom", sideTarget: "top" },

      // Markandeya → Shiva (devotion)
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top" },

      // Yama → Markandeya
      { from: 7, to: 1, sideOrigin: "top", sideTarget: "left", straight: true,label: ["arrived to claim him"] },

      // Shiva → Yama
      { from: 3, to: 7, sideOrigin: "left", sideTarget: "right", straight: true, label: ["taught him", "a lesson"] }
    ]
  }
}, 

{
  id: 24,
  slug: "the-year-in-disguise",
  title: "The Year in Disguise",
  description: "During the thirteenth year of exile, the Pandavas concealed their identities in the kingdom of Matsya. Identify the disguises they took up and the events that followed.",
  accent: "#b6c3ff",
  congratsMessage: "From hidden identities to revealed strength, you identified the major characters involved during the incognito year. Try your luck with the next puzzle!",
  nextSlug: "the-golden-deception",
  trivia: `
    <p>As the thirteenth year drew near, Dhaumya left for Panchala kingdom along with Yudhishtira's attendants, and the Pandavas set out for Matsya where King Virata ruled. On reaching the outskirts of the city, they split – so as to not appear connected.</p>
    <p>The Pandavas decided to first hide their weapons before approaching the king. They spotted a huge tree in some cremation grounds, and decided that it was the best place. They wrapped their weapons in animal skin and hung it from a high branch in the tree. They also hung a corpse on the branch to dissuade people from coming there.</p>
    <p>Yudhishtira went to Virata's court and introduced himself as Kanaka, a brahmin and an expert in the game of dice. Virata was impressed by his noble bearing and instantly appointed him as his personal advisor.</p>
    <p>A few days later, Bhima walked in, while Virata wondered who the powerful, tall young man was. He introduced himself as Vallabha – King Yudhishtira's former cook. Virata was sympathetic to the Pandavas and hired Bhima.</p>
    <p>The next day, Draupadi arrived as a <em>Sairandhri</em> - she introduced herself as a maid who waited on Draupadi and Satyabhama. Before joining, she had a condition – that she would never eat leftovers or wash anyone's utensils.</p>
    <p>Next, King Virata hired a horse trainer by the name Granthika – he was Nakula. Sahadeva joined under the name Tautipala, and took up service as the royal cowherd. Arjuna, as a eunuch, was appointed as a dance and music teacher for princess Uttara and her friends. He was called Brihannala.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 280,

  nodes: [

    // ===== PANDAVAS (LEFT) =====
    { id: 1, pattern: "Y_____H____", clue: "Eldest of the Pandavas.", answer: "YUDHISHTIRA", size: "wide" },
    { id: 2, pattern: "B_I__", clue: "Second of the Pandavas, known for his immense strength.", answer: "BHIMA" },
    { id: 3, pattern: "__J___", clue: "Master archer among the Pandavas.", answer: "ARJUNA" },
    { id: 4, pattern: "__K___", clue: "Fourth of the Pandavas.", answer: "NAKULA" },
    { id: 5, pattern: "____D___", clue: "Youngest of the Pandavas.", answer: "SAHADEVA" },

    // ===== DISGUISE NAMES (RIGHT) =====
    { id: 6, pattern: "K_N__A", clue: "Courtier and dice companion in Matsya.", answer: "KANAKA" },
    { id: 7, pattern: "__LL_B__", clue: "Royal cook with extraordinary strength.", answer: "VALLABHA" },
    { id: 8, pattern: "B__H_NN___", clue: "Dance and music teacher in the royal court of Matsya.", answer: "BRIHANNALA", size: "wide" },
    { id: 9, pattern: "____TH_K_", clue: "Keeper of horses in Matsya.", answer: "GRANTHIKA" },
    { id: 10, pattern: "T_U__P__A", clue: "Supervisor of cattle in the Matsya kingdom.", answer: "TAUTIPALA", size: "wide" },

    // ===== VIRATA CONTEXT =====
    { id: 11, pattern: "_TTH___", clue: "Princess of Matsya, student of dance.", answer: "UTTHARA" },
    { id: 12, pattern: "__U__J__NY_", clue: "Prince of Matsya who initially boasted about his prowess but was scared to fight the battle.", answer: "BHUMIJANYA", size: "wide" },

    // ===== ANTAGONISTS =====
    { id: 13, pattern: "___Y_D__N_", clue: "Kaurava prince who attempted to expose the Pandavas.", answer: "DURYODHANA", size: "wide" },
    { id: 14, pattern: "__R__", clue: "Ally of the Kaurava prince, and a famed archer.", answer: "KARNA" },
    { id: 15, pattern: "__SH__M_", clue: "King of Trigarta who attacked Matsya from another side.", answer: "SUSHARMA" }
  ],

  layout: {
    positions: {

      
      1: { x: 0, y: 1 }, //Yudhishtira
      2: { x: 0, y: 3 }, //Bhima
      3: { x: 0, y: 4 }, //Arjuna
      4: { x: 0, y: 2 }, //Nakula
      5: { x: 0, y: 0 }, //Sahadeva

     
      6: { x: 2, y: 1 }, //Kanaka
      7: { x: 2, y: 3 }, //Vallabha
      8: { x: 2, y: 4 }, //Brihannala
      9: { x: 2, y: 2 }, //Granthika
      10:{ x: 2, y: 0 }, //Tautipala

    
      11:{ x: 0, y: 5 }, //Utthara
      12:{ x: 2, y: 5 }, //Bhumijanya

     
      13:{ x: 0, y: 6 }, //Duryodhana
      14:{ x: 2, y: 6 }, //Karna
      15:{ x: 1, y: 7 } //Susharma
    },

    connections: [

      // Identity swaps
      { from: 1, to: 6, straight: true, sideOrigin:"right", sideTarget: "left", label:["disguised","himself as"] },
      { from: 2, to: 7, straight: true, sideOrigin:"right", sideTarget: "left", label:["disguised","himself as"] },
      { from: 3, to: 8, straight: true, sideOrigin:"right", sideTarget: "left", label:["disguised","himself as"] },
      { from: 4, to: 9, straight: true, sideOrigin:"right", sideTarget: "left", label:["disguised","himself as"] },
      { from: 5, to: 10, straight: true, sideOrigin:"right", sideTarget: "left", label:["disguised","himself as"] },

      // Brihannala → Uttara
      { from: 8, to: 11, label: ["his student"], sideOrigin:"bottom", sideTarget: "top" },

      // Brihannala → Bhumijanya 
      { from: 8, to: 12, label: ["became his charioteer"],sideOrigin:"bottom", sideTarget: "top" },
    ]
  }
}, 

{
  id: 25,
  slug: "the-golden-deception",
  title: "The Golden Deception",
  description: "A Rakshasi encounters the prince of Ayodhya in the forest during his exile, and this sets of a chain of events, ultimately leading to Sita's abduction. Identify the characters involved.",
  accent: "#ff8fab",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-bow-of-rudra",
  trivia: `
    <p>Ravana had appointed Khara and Dushana, his cousin brothers, to guard the Dandakaranya region. The two had set up their base in Janasthana. In those days, Ravana's sister Surpanakha was also in Janasthana. One day, while wandering around the jungle, Surpanakha saw Rama in his hut. Surpanakha instantly fell in love with him.</p>
    <p>She approached him and asked him who he was, why he was dressed as a tapasvi, and what he was doing here in the forest frequented by Rakshasas.</p>
    <p>Rama politely gave her his introduction and asked for hers. She replied that she was Surpanakha, the sister of the mighty Ravana, Kumbhakarna and Vibhishana. She said that in prowess and valour, she was even better than them. She added that since she had seen him, her heart had started yearning for him, and that she had come to seek him as a husband.</p>
    <p>Rama was amused, and said that he was already married, and said that his wife was right there.</p>
    <p>Surpanakha took a good look at Sita, and commented that his wife was ugly and not worthy of him. She said that she would eat her, and then she and Rama could then live happily in Dandakaranya.</p>
    <p>Rama, in jest, said that he could suggest a better option - for her to consider his brother Lakshmana.</p>
    <p>Surpanakha observed Lakshmana - he was as good looking as Rama. She made the same offer to him—to become her husband.</p>
    <p>Lakshmana replied that he was just a servant of Rama, and why she would want to become a servant too, by marrying him. He said that his brother was a man of many virtues, she should marry him.</p>
    <p>Surpanakha was angry and thought that they were rejecting her overtures because of Sita. She then attacked Sita, attempting to kill her.</p>
    <p>Rama quickly saved Sita - he was now very angry. Lakshmana took the cue and cut off Surpanakha's nose and ears with his sword.</p>
    <p>Surpanakha fled from their hut and stormed into the room where her cousins Khara and Dushana were sitting. When they heard about what had happened, Khara and Dushana assembled a force of 14,000 rakshasas and attacked the brothers. Rama single-handedly killed all of them, along with both Khara and Dushana.</p>
    <p>Surpanakha escaped to Lanka to get help from her brother Ravana, the king of Lanka. She told him about the fight between Khara's forces and Rama, and how Rama eliminated the entire rakshasa army all by himself.</p>
    <p>Surpanakha informed Ravana about Janasthana to incite him to take revenge. But she knew what would get Ravana on his feet right away and make him go to Janasthana - therefore, she began describing Sita's beauty.</p>
    <p>Surpanakha's words had their effect, and an intense desire for Sita rose in Ravana's heart. Shurphanakha then added that she wanted to get Sita for Ravana, but when she got close, Lakshmana attacked her.</p>
    <p>Ravana decided that he would have Sita at any cost. His crooked brain was at work already. He had a plan. He soon left Lanka to seek help from Maricha, who lived in Dandakaranya.</p>
    <p>Ravana told Maricha about the killing of Khara and Dushana, and the disfiguring of Surpanakha at the hands of Rama and Lakshmana. He then revealed to Maricha his intention of kidnapping Sita.</p>
    <p>When Mareecha heard the name of Rama, he was startled. Surely, Ravana didn't have a clue who Rama was. Rama was no ordinary human, he believed. Maricha had barely survived Rama's onslaught in Siddhashrama when the prince of Ayodhya was just sixteen. After that, Maricha had found shelter in the forests of Dandaka.</p>
    <p>Maricha advised him that it was in their best interest not to infuriate Rama. He said that Ravana abducting Sita would result in the destruction of rakshasas. He also described Rama as the embodiment of Dharma, and shared his own past encounter with Rama.</p>
    <p>Ravana was furious at Maricha's speech and the high praise he bestowed on Rama. He said that if Maricha refused to help him, he would kill him. Maricha was left with no choice. He could advise and object, but he could not disobey his king. He agreed to be an accomplice in Ravana's abduction plan.</p>
    <p>As planned, Maricha took the form of a uniquely resplendent, multi-hued deer with sapphire-blue tipped horns, spotted red face, blue ears, bluish stomach and rainbow coloured tail, hooves and limbs that appeared to be studded with pearls and gemstones, and began sauntering near Rama's ashrama, trying to get Sita's attention.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Ramayana Unravelled – Ami Ganatra</em></p>
`,
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
      clue: "The demoness who spotted the person on the left, and fell in love with him. She asked the prince to marry her.",
      answer: "SURPANAKHA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "L_K____N_",
      clue: "The brother of the prince, and the one who cut off the demoness's nose and ears when she tried to kill Sita.",
      answer: "LAKSHMANA",
      size:"wide"
    },

    {
      id: 4,
      pattern: "R_V___",
      clue: "The King of Lanka. He was informed by Akampana about what happened to his sister, and about how his brothers Khara and Dooshana were defeated by the prince of Ayodhya. In retaliation, he planned to take revenge.",
      answer: "RAVANA"
    },

    {
      id: 5,
      pattern: "M_R__H_",
      clue: "The Rakshasa who was approached by the king of Lanka, and asked to disguise himself as a golden deer to lure the two sons of Dasharatha away, so that he could abduct Sita. He was reluctant to do this, as he knew about their prowess which he had witnessed at Vishwamitra's Yagna. But having no choice, he finally agreed.",
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
      // Surpanakha to Rama
      { from: 2, to: 1, sideOrigin: "left", sideTarget: "right", straight: true, },

      // Lakshmana to Surpanakha
      { from: 3, to: 2, sideOrigin: "top", sideTarget: "bottom", straight: true,label: ["cut off her", " nose and ears"] },

      // Surpanakha → Ravana 
      { from: 2, to: 4, label: ["brother"], sideOrigin:"bottom", sideTarget: "top" },

      // Ravana to Maricha
      { from: 4, to: 5, sideOrigin: "bottom", sideTarget: "right", straight: true,label: ["asked him to", "disguise himself", "as a golden deer"] }
    ]
  }
},

{
  id: 26,
  slug: "the-bow-of-rudra",
  title: "The Bow of Rudra",
  description: "There was once a divine bow that not even the strongest of kings could lift. One day, the prince of Ayodhya arrived, successfully completing the challenge and winning the hand of Mithila's princess. Identify the names of the characters involved.",
  accent: "#b9fc8f",
  congratsMessage: "Well solved! On to the next puzzle!",
  nextSlug: "the-sleeping-king",
  trivia: `
    <p>King Janaka was the ruler of Mithila, and was the pupil of sage Yagnavalkya, from whom he had received <em>Brahma-jnaana</em>, the knowledge of the Self. In the Bhagavad Gita, Krishna refers to him as the perfect Karma Yogi.</p>
    <p>Janaka once decided to perform a Yagna, and was ploughing the land for it. Among the shrubs and bushes he found a divinely beautiful baby, which he accepted as a gift from Mother Earth and took her home. This baby girl was named Sita.</p>
    <p>When Sita reached the age of marriage, her father was worried as he could not find a prince who was good enough for her. Long ago, Rudra's bow had been presented to Janaka's ancestors by the God Varuna. After much thought, he proclaimed that whoever could lift, string and bend the bow would receive Sita's hand in marriage. He felt that anyone who could accomplish this feat would indeed be worthy of Sita.</p>
    <p>Many princes came from many distant lands, but they all returned disappointed.</p>
    <p>When Vishwamitra, along with the two princes, arrived at Mithila – King Janaka himself, along with his retinue of ministers and priests, hurried to welcome him. Then he saw Rama and Lakshmana and was struck by the lustre on their faces. He asked them who they were, and was extremely pleased when he was told that they were the sons of his old friend Dasharatha.</p>
    <p>All arrangements for the Yagna had been made, sounds of conches filled the air, and hymns were being sung.</p>
    <p>As Vishwamitra and the two princes of Ayodhya walked into the hall, there rose enquiries from all quarters as to the identity of those majestic looking boys. Vishwamitra then told Janaka that Rama was keen on seeing Rudra's bow.</p>
    <p>Janaka then ordered for the bow to be brought into the court. It was brought by five thousand mighty warriors, on an eight wheeled chariot. The bow was placed, and Rama's hands itched to lift it. He looked at Vishwamitra for permission, and the sage nodded, silently blessing the young prince.</p>
    <p>Then Rama stepped forward, and with an easy grace lifted the mighty bow as though it were a garland of flowers! Janaka was speechless with joy and wonder.</p>
    <p>Rama transferred the bow from his right hand to his left, pinned it down with his toe, and drew the string to his ear. The bow snapped into two with a thunderous clap.</p>
    <p>Janaka then said that Rama had fulfilled the conditions of the bow, and that he would give his daughter Sita in marriage to him.</p>
    <p>Janaka sent swift messages to convey the events to Dasharatha, and to invite him for the wedding. Dasharatha was overjoyed to get news of Rama, and arrived at Mithila as fast as he could.</p>
    <p>Then, with all pomp and splendour, Rama and Sita were married. At the same time, Janaka had given in marriage his other daughter Urmila to Lakshmana, and his brother Kushadhvaja's daughters — Mandavi to Bharatha and Shruthakirti to Shatrughna.</p>
    <p>After the wedding, as Dasharatha and his retinue were proceeding to Ayodhya, they saw a few signs of ill-omen. Dasharatha asked Vasishtha what they meant. Suddenly, the sky became dark and cloudy, the earth trembled, and the trees shook. Before them stood a figure with matted locks, with a bow slung over one shoulder and a battle axe on the other.</p>
    <p>It was Parashurama, the sworn enemy of the Kshatriyas. His father, sage Jamadagni, had been killed by a Kshatriya, and he had sworn to kill them all. He then spoke to Rama, saying that he had heard all about his deeds, and that he had broken Rudra's bow.</p>
    <p>He then gave him Vishnu's bow, saying that if he was able to bend it, he would honour him by fighting with him. Rama stepped forward, and very easily lifted the bow. He then said that — once he fixed an arrow to his bow, he could not take it back.</p>
    <p>Parashurama then realized that Rama was none other than Lord Vishnu. He bowed down and asked Rama to aim the arrow at the fruit of all his penance. Then, he did a <em>Pradakshina</em> around Sri Rama and went back to the Himalayas.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "J_N___",
      clue: "The King of Mithila, who proclaimed that whoever was able to lift and string his divine bow would receive his daughter's hand in marriage.",
      answer: "JANAKA"
    },

    {
      id: 2,
      pattern: "S___",
      clue: "The baby who was found by the King near some bushes and shrubs, while he was ploughing the land to perform a Yagna.",
      answer: "SITA"
    },

    {
      id: 3,
      pattern: "__M_",
      clue: "The prince of Ayodhya, who was brought by Vishwamitra to Mithila. He lifted the mighty bow with ease, and drew the string to his ear. At that moment, the bow snapped into two with a thunderous clap.",
      answer: "RAMA"
    },

    {
      id: 4,
      pattern: "P_R____R_M_",
      clue: "The son of Jamadagni, and the sworn enemy of Kshatriya's who arrived in anger when the bow of Rudra was broken.",
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
      { from: 1, to: 2, label:["daughter"], sideOrigin:"bottom", sideTarget: "top"},

      // Rama → Sita 
      { from: 3, to: 2, sideOrigin: "left", sideTarget: "right", straight: true, label:["won her hand"] },

    ]
  }
}, 
{
  id: 27,
  slug: "the-sleeping-king",
  title: "The Sleeping King",
  description: "When Mathura was threatened by powerful enemies, the son of Vasudeva devised a strategy that would lead one invincible warrior straight into the gaze of a long-sleeping king. Identify the characters involved in this story.",
  accent: "#ffb703",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "when-rama-walked-into-the-hermitage",
  trivia: `
    <p>Jarasandha was the king of Magadha, and the father-in-law of Kamsa, since two of his daughters were married to him. When Kamsa was killed, Jarasandha swore to take revenge, and collected an army of 23 <em>akshauhinis</em> (each <em>akshauhini</em> consisted of 21,870 chariots, 21,870 elephants, 65,610 horses, and 1,09,350 foot soldiers), and marched to Mathura to wipe out the Yadava race.</p>
    <p>Balarama and Krishna then led a small army of soldiers out of the city gates and rode out, challenging the enemy forces. Jarasandha's army surrounded Krishna's army on all sides. Krishna twanged his mighty bow, Sharanga, and let go of his arrows with such speed and in such great numbers that they destroyed the enemy in thousands at a time. Men, horses and elephants were scorched by their mighty power.</p>
    <p>Balarama wielded his celestial mace and completed the destruction of Jarasandha's army. Then Jarasandha returned to Magadha, collected another 23 <em>akshauhinis</em> and marched to Mathura again! Like this, Jarasandha was defeated by Krishna seventeen times, and each time had lost an entire army. Yet, Jarasandha prepared to lead another 23 <em>akshauhinis</em> for the eighteenth attempt.</p>
    <p><em>(The reason that Krishna destroyed his army but spared Jarasandha's life each time was that after every defeat, Jarasandha would gather his <em>adharmic</em> forces again and again — and that would give the Lord a chance to do away with as many wicked people as possible. For the purpose of an incarnation is to remove the evil and the wicked from the face of the earth.)</em></p>
    <p>At the same time, Mathura's might was challenged by a warrior named Kalayavana, followed by an army of thirty <em>adharmic</em> mlechhas. Krishna and Balarama discussed the situation. Krishna said that Jarasandha would be upon them in a day or two with his forces. If at that time they were engaged in fighting Kalayavana, Jarasandha would capture the city and kill or capture the citizens. He suggested that their best course of action was to build an inaccessible fortress and transfer the people and cattle of Mathura there. Then, by the time they were through with Kalayavana, they would also be ready for Jarasandha.</p>
    <p>Then, a magnificent fortress rose from the bottom of the sea in the west. Within it, there was a town with buildings of golden towers, broad roads, lovely gardens and groves. Indra presented Krishna with the famous hall of assembly called Sudharma, and the Parijata tree. Varuna presented Krishna with fast horses, and Kubera presented him with eight kinds of wealth.</p>
    <p>Then, Krishna used his yogic powers and transferred the entire population of Mathura to this new town — which was called Dwaraka.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Then, Krishna revealed to Kalayavana his four-armed form. Kalayavana dismounted from his chariot and discarded his weapons. As he approached the Lord, Krishna suddenly turned around and walked away rapidly. Kalayavana could not keep pace, although the Lord seemed just within reach. After some time, Krishna entered a mountain cave. However, when Kalayavana followed him inside, he found no trace of Krishna. On the floor, he saw a man who seemed to be sleeping. Thinking that it was Krishna pretending to be unconscious, he tried to wake him with a rude kick. The sleeping man woke up, and the moment he looked up, the Yavana was reduced to ashes.</p>
    <p>The name of the sleeping man was Muchukunda, and he was a descendant of Ikshavaku. Once, Indra had become afraid of the asuras and had asked Muchukunda to keep guard over the Devas. The pious king did this with sincere vigilance, and finally, the Devas asked him to name any boon. Muchukunda was tired after his long vigil, and asked for the boon of continuous and uninterrupted sleep. The Devas granted him this, along with the curse that whoever woke him up would be reduced to ashes. Thus, Muchukunda had retired to a mountain cave and promptly went to sleep — until he was rudely awakened by Kalayavana.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "J_R_S___H_",
      clue: "The King of Magadha and the father-in-law of Kamsa. When Kamsa was slain by the son of Vasudeva, he decided to take his revenge and came to Mathura with an army of 23 Akshauhinis.",
      answer: "JARASANDHA",
      size: "wide"
    },

    {
      id: 2,
      pattern: "K_L_Y____A",
      clue: "A warrior who was an ally of the Magadha King, and joined in attacking Mathura. Due to a boon from Shiva, he was invincible and could not be defeated by any King.",
      answer: "KALAYAVANA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "D____K_",
      clue: "The city into which the sons of Vasudeva transferred the population of Mathura into, in order to protect them from the attack.",
      answer: "DWARAKA"
    },

    {
      id: 4,
      pattern: "___SH__",
      clue: "The character who entered the cave where a King was sleeping. The ally of the Magadha king followed this character inside, and mistaking the sleeping King for him, the warrior rudely kicked the king.",
      answer: "KRISHNA"
    },

    {
      id: 5,
      pattern: "M____K___A",
      clue: "Name this King, who was the descendant of Ikshavaku, and had a boon of continuous and uninterrupted sleep, after he had kept a long guard for the Devas against the Asura's. He looked up at the man who had so rudely awoken him, reducing him to ashes.",
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
      { from: 4, to: 2, sideOrigin: "right", sideTarget: "bottom", straight: true, label: ["lured him to the cave"] },

      // Kalayavana → Muchukunda
      { from: 2, to: 5, sideOrigin:"bottom", sideTarget: "top", label: ["kicked the sleeping king"] }
    ]
  }
},
{
  id: 28,
  slug: "when-rama-walked-into-the-hermitage",
  title: "When Rama Walked into the Hermitage",
  description: "While travelling to Mithila, Vishwamitra brought the princes of Ayodhya to a deserted hermitage. The story behind its silence was a grave mistake and a curse, and finally leads to redemption. Identify the characters involved in this story.",
  accent: "#90dbf4",
  congratsMessage: "Well done! Try your luck with the next puzzle!",
  nextSlug: "the-digestion-of-a-demon",
  trivia: `
    <p>After defeating the Rakshasas Maricha and Subahu, Rama and Lakshmana, along with Vishwamitra, proceeded towards Mithila.</p>
    <p>Outside the city there was a forest with a deserted ashrama, overgrown with bushes and creepers. Vishwamitra explained that this was the ashrama of Sage Gautama. He had a very beautiful wife named Ahalya.</p>
    <p>Once, when Gautama was away at his evening ablutions, Indra came and tempted her, and she yielded to his unholy desire. When Gautama came back, he got into a fiery temper and cursed them both – Indra to lead the life of a eunuch and Ahalya to lead the hidden life of penance and regret. Then, he withdrew to the Himalayas to perform austerities, telling her before he went that she would be released from the curse only by the purifying touch of Rama's feet.</p>
    <p>So when the young princes and Vishwamitra entered the ashrama, the flowers bloomed, the birds started singing, and Ahalya came out of hiding. Poets sing that – "She came like the moon emerging from behind the clouds, like the flame shooting out of smoke, like the sun's reflection in water."</p>
    <p>Rama and Lakshmana touched the feet of the sage's wife. At that moment, Gautama returned and took his wife back into the folds of his affections.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "G____M_",
      clue: "Vishwamitra, while taking the two princes of Ayodhya with him to Mithila, stopped at a deserted Ashrama of a Rishi. Name this Rishi.",
      answer: "GAUTAMA"
    },

    {
      id: 2,
      pattern: "A___Y_",
      clue: "The wife of this Rishi, who had been cursed. The curse would only be released upon Rama's arrival.",
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
      { from: 3, to: 2, sideOrigin: "right", sideTarget: "bottom", straight: true,label: ["tempted her"] },
      // Gautama curses Ahalya
      { from: 1, to: 2, sideOrigin: "right", sideTarget: "left", straight: true, label: ["cursed her"] }
    ]
  }
},

{
  id: 29,
  slug: "the-digestion-of-a-demon",
  title: "The Digestion of a Demon",
  description: "Two Rakshasa brothers devised a cruel trick to kill sages and travellers. But one day, a powerful Rishi visited them, and their scheme came to an end.",
  accent: "#f28482",
  congratsMessage: "The wicked scheme of the Rakshasa brothers meets its end. Well solved. On to the next puzzle.",
  nextSlug: "the-last-seven-days",
  trivia: `
    <p>Once, there lived two rakshasa brothers – Vaatapi and Ilvala. Vaatapi had a boon from Lord Brahma that no matter how many pieces his body was cut into, it would always be joined together again. The Rakshasas decided to use this boon to destroy as many rishis as possible.</p>
    <p>So, Ilvala would dress up as a Brahmin boy and go to some or other ashrama, telling the Rishi there that he would like him to come and eat the food he had prepared for his <em>manes</em> (ancestors). Under no condition could such an invitation be refused, so the Rishi would have to go.</p>
    <p>Then, Ilvala would serve his brother Vaatapi cut up into small pieces and prepared in a most delicious manner. The poor unsuspecting Rishi would eat it, and then Ilvala would cry out – "Vaatapi, come out!"</p>
    <p>Vaatapi would tear open the Rishi's body from inside and come out in his true form. In this way, many holy men had been disturbed in their penance and been so cruelly killed.</p>
    <p>One day, Ilvala invited the sage Agastya, and Agastya accepted the invitation. When the meal was over, Ilvala asked him if he was satisfied, and Agastya replied that he was. Then Ilvala, as usual, cried out in a loud voice for Vaatapi to come out. But nothing happened. He called out once more, and yet, no Vaatapi came out.</p>
    <p>Agastya laughed in amusement and asked where Vaatapi could come out from – he had already been digested!</p>
    <p>Ilvala screamed in fury and rushed at Agastya with his teeth bared, with the awful rage of a Rakshasa. Then Agastya opened his eyes and Ilvala lay in an unrecognizable heap of ashes.</p>
    <p style="margin-top:20px; font-size:13px; font-style:italic; color:#aaa;">✦ Some more interesting facts about Agastya ✦</p>
    <p>1) When all the Rishis and Munis had gone to Kailasa to attend the wedding of Shiva and Parvati, Agastya remained behind and maintained the balance on the earth.</p>
    <p>2) The Vindhya mountains once became very powerful and started rising upwards steadily. They threatened to obstruct the passage of the sun from the northern to the southern hemisphere. The Rishis and Devas were alarmed by this, and approached Agastya for help. Agastya went and stood before Vindhya. Vindhya, seeing the great sage before him, bowed down low. Agastya then blessed him and said – "May you ever remain like this." From then onwards, the Vindhya mountains have remained low and humble, stretching across the land.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "The brother of the Rakshasa on the left. He would offer food (containing his brother cut up into small pieces) to unsuspecting travellers and sages. Once the Rishi would finish his meal, this character would call out to his brother, who would tear open the Rishi's body from inside and come out in his true form.",
      answer: "VATAPI"
    },

    {
      id: 3,
      pattern: "_G___Y_",
      clue: "The Rishi who visited him one day. When he ate the food offered, he digested the Rakshasa. This time, he was killed once and for all, and could not come out. The Rakshasa's brother was also reduced into a heap of ashes by him. This sage was also visited by Rama, Lakshmana and Sita near the Dandaka forest, and he advised them to spend the rest of their exile in Panchavati.",
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
      { from: 1, to: 2, sideOrigin:"right", sideTarget: "left", straight: true, noArrow: true, label: ["brothers"] },

      // Agastya defeats them
      { from: 3, to: 2, sideOrigin: "right", sideTarget: "bottom", straight: true, label: ["digested him"] },
      { from: 3, to: 1, sideOrigin: "left", sideTarget: "bottom", straight: true, label: ["reduced him to ashes"] }
    ]
  }
},
{
  id: 30,
  slug: "the-last-seven-days",
  title: "The Last Seven Days",
  description: "A moment of disrespect toward a silent sage resulted in a curse that would end a king’s life in seven days — and would give rise to the narration of the Bhagavatam. Identify the characters if you can.",
  accent: "#a0c4ff",
  congratsMessage: "You followed the complete story of Parikshit’s curse. On to the next puzzle.",
  nextSlug: "the-young-princes-first-battle",
  trivia: `
    <p>One day, King Parikshit had gone hunting, deep into the forest. At some point, he felt hungry and thirsty, and kept searching for water. He finally came across the hermitage of Rishi Samika, and he requested the sage for some water.</p>
    <p>This Rishi was actually in a state of deep meditation, and did not hear him. Parikshit, thinking that the Rishi was only pretending not to hear him, picked up a dead snake from nearby and placed it around the Rishi's neck.</p>
    <p>Later, when the Rishi's son – Sringi, came back, he saw what had happened and was very angry. He cursed that on the seventh day from now, a powerful serpent called Takshaka would bite to death whoever had insulted his father in this manner.</p>
    <p>When Rishi Samika came back into consciousness and found about what had happened, he scolded his son, saying that he should not have been so harsh and that Kings carry large burdens on their shoulders. He also said that it is difficult to find a King as good as Parikshit.</p>
    <p>When King Parikshit came back to his palace, he felt sorry for his actions, and welcomed the curse given to him. He decided to spend his last days listening to the stories of the Lord, and handed over the Kingdom to his son – Janamejaya.</p>
    <p>He went to the banks of Ganga, where he was visited by a number of holy sages. A young sage named Shuka, who was the son of Vyasa also arrived there.</p>
    <p>Parikshit requested the Sage to teach him how to obtain freedom from the cycle of birth and death. Shuka advised him on how to meditate, and proceeded to tell him the story of the Lord's divine play in the universe, which is the Bhagavatam.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__R__S___",
      clue: "A King who had gone deep into a jungle to hunt. After a while, he felt thirsty and wandered in search of water. He reached the ashrama of a sage called Samika, and asked him for water. But the sage had gone into a deep state of Samadhi and did not reply. The King placed a dead snake from nearby around the Rishi's neck - name this King.",
      answer: "PARIKSHIT",
      size: "wide"
    },

    {
      id: 2,
      pattern: "__I_G_",
      clue: "The son of this Rishi. When he returned and saw what had happened, he became furious and cursed the King that - seven days from now, a powerful serpent would bite him.",
      answer: "SRINGI"
    },

    {
      id: 3,
      pattern: "__K___K_",
      clue: "Name the serpent that bit the King after seven days.",
      answer: "TAKSHAKA"
    },

    {
      id: 4,
      pattern: "S___A",
      clue: "The Rishi who narrated the entire Bhagavatam to this emperor in his last 7 days.",
      answer: "SHUKA"
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
      { from: 2, to: 1, sideOrigin: "top", sideTarget: "left", straight: true, label: ["cursed him"] },

      // Takshaka kills Parikshit
      { from: 3, to: 1, sideOrigin: "top", sideTarget: "right", straight: true, label: ["bit him"] },

      // Suka narrates Bhagavatam
      { from: 4, to: 1, sideOrigin: "top", sideTarget: "bottom", straight: true, label: ["narrated Bhagavatam", "to him"] }
    ]
  }
}, 

{
  id: 31,
  slug: "the-young-princes-first-battle",
  title: "The Young Princes’ First Battle",
  description: "A sage sought help from the king of Ayodhya to protect his sacred Yagna. What follows is the first great test of the young princes of Ayodhya. See if you can identify the characters in this story.",
  accent: "#ffd6a5",
  congratsMessage: "From Ayodhya to Mithila — you followed the young princes’ first great mission. Try your luck with the next puzzle!",
  nextSlug: "three-steps-that-measured-the-worlds",
  trivia: `
    <p>One day, Vishwamitra arrived at the court of King Dasharatha. Dasharatha, knowing Vishwamitra's great powers, prostrated to him with deep reverence, and said that he was very fortunate that he had graced his court. He said that if there was anything he could do for him, he would do so gladly.</p>
    <p>Vishwamitra rejoiced at this, and then said that it was the Dharma of a king to protect the sages. He explained that he was performing a sacrifice with his disciples, but they were being troubled by Rakshasas – in particular, Maricha and Subahu, who were very powerful.</p>
    <p>Vishwamitra said that they could curse them and reduce them to ashes, but it would be a waste of their tapas. He requested him to send his son Rama to protect his Yagna.</p>
    <p>Dasharatha was stunned into silence for a moment, then told Vishwamitra that Rama was only a boy, and not yet sixteen. How could he fight Rakshasas ten times mightier than him? Dasharatha then said that he and his entire army were at his disposal, and that they could fight the Rakshasas instead.</p>
    <p>Vishwamitra, upon hearing these words, became wrathful.</p>
    <p>Vasishtha, who was the guru of Dasharatha, advised him to do as Vishwamitra said, and to send Lakshmana along too. He said that Vishwamitra was a powerful sage who could look into the future, and that there was a purpose to his visit. There would only be added glory and fame for Rama, and he advised Dasharatha to let him bring back fresh laurels to the line of Ikshavaku.</p>
    <p>Dasharatha finally saw the reason in this, and Rama and Lakshmana were sent for. They touched the feet of their elders as they received the royal command, and with the blessings of the King, the queens and the entire court, the princes set out with Vishwamitra.</p>
    <p>They passed the city gates and towards evening they reached the banks of the Sarayu, where they camped for the night. Before retiring, Vishwamitra gave them two mantras which would protect them from fatigue and harm.</p>
    <p>They came across a beautiful ashrama named "Kaamashrama", which was the place where Lord Shiva had performed great austerities, and where the God of Love, Manmatha, had aimed his dart at Shiva, who in his anger had reduced him to ashes.</p>
    <p>Offering their prayers the next morning, Rama and Lakshmana along with Vishwamitra crossed the Ganga on a raft, and came to the Dandaka Forest. It was dark, deep and infested with snakes, scorpions and wild animals – the abode of the dreadful Taataka.</p>
    <p>Taataka was actually a beautiful maiden born to a Yaksha named Suketu, and was married to Sunda. She had a son named Maricha, and she had the strength of one score elephants. Once, in a fit of anger, she and Maricha had assaulted the sage Agastya, and he had cursed them to lead the ugly lives of demons.</p>
    <p>Vishwamitra told Rama not to hesitate to slay her because she was evil, and that it was the Dharma of a Kshatriya to protect good and destroy evil.</p>
    <p>Rama then twanged his bow, and Taataka raged at the sound. She advanced upon Rama with huge boulders to shower upon him. Rama shot arrows and cut off her limbs one by one. It was growing late, and knowing that Rakshasas become more powerful at night, Rama pierced her chest with a well-aimed arrow.</p>
    <p>Taataka fell with a mighty crash that shook the earth. The Devas cheered from heaven, and Vishwamitra blessed him – Dandaka had become beautiful again.</p>
    <p>Finally, they reached Siddhashrama, which was the ashrama of Vishwamitra. (This was the same place where Narayana was born as Vamana.)</p>
    <p>The Yagna was to be conducted the next day, and Vishwamitra took the vows of silence that very night. The Rishis instructed Rama and Lakshmana to keep a strict vigil for six days and six nights. For five days and five nights, nothing happened. On the sixth day, the sky was suddenly rent by an awful roar, and the Rakshasa army covered the sky like a great black cloud. Rama looked up and saw the two fierce demons – Maricha and Subahu, getting ready to shower unclean flesh and blood into the sacrificial fire. Rama pulled back the string of his bow and let go of the Maanavastra. It tied up Maricha in a bundle and hurled him a hundred <em>yojanas</em> near the sea. (Maricha was not killed, for he still had an important part to play in the life of Rama.) Next, Rama aimed his Agneyastra at Subahu and killed him.</p>
    <p>Thus, Vishwamitra was able to complete his Yagna without a hitch.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "_A__A__T__",
      clue: "King of Ayodhya who was approached by a sage and was asked to send his son to help protect a Yagna. The King was very reluctant to do so and offered that he would himself come and fight the Rakshasas.",
      answer: "DASHARATHA",
      size:"wide"
    },

    {
      id: 2,
      pattern: "__SH__M_T__",
      clue: "The Sage whose Yagna kept getting disturbed by Rakshasa's which was why he had come to the King's court to ask for his son to come and fight the Rakshasas.",
      answer: "VISHWAMITRA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "__S_S___",
      clue: "The Guru of the princes of Ayodhya. He also advised the King to do as the sage asks, and to send his son, saying that there was no one equal to him in spiritual or martial powers.",
      answer: "VASISTHA"
    },

    {
      id: 4,
      pattern: "__M_",
      clue: "The eldest prince, who was sent to the Ashrama of this sage.",
      answer: "RAMA"
    },

    {
      id: 5,
      pattern: "_A___M__A",
      clue: "The younger brother of the prince, who also accompanied him.",
      answer: "LAKSHMANA"
    },

    {
      id: 6,
      pattern: "T_T___",
      clue: "A demoness encountered by the two brothers and the Rishi when they come near the Dandaka forest. The sage advised the prince to slay her as she was evil, and to not hesitate because she was a woman. The prince did as he is told, and killed the demoness with his arrows.",
      answer: "TATAKA"
    },

    {
      id: 7,
      pattern: "M____H_",
      clue: "The son of the above demoness who was one of the Rakshasas trying to ruin the Yagna. The prince of Ayodhya then used his Maanavastra on this rakshasa, which tied him in a bundle and hurled him far away. (But he did not get killed, and later shows up in the story as a golden deer)",
      answer: "MARICHA"
    },

    {
      id: 8,
      pattern: "S_B___",
      clue: "The other Rakshasa who was trying to impede the Yagna. The prince used Agneyastra on him and him and killed him.",
      answer: "SUBAHU"
    },

    {
      id: 9,
      pattern: "M_____A",
      clue: "The Kingdom to the which the sage took the young princes, after the Yagna was finished.",
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
      { from: 2, to: 1, sideOrigin: "left", sideTarget: "right", straight: true,label: ["asked for his son"] },
      { from: 3, to: 1, sideOrigin: "top", sideTarget: "bottom", straight: true, label: ["advised him"] },

      { from: 2, to: 4, sideOrigin:"bottom", sideTarget: "top" },
      { from: 2, to: 5, sideOrigin:"bottom", sideTarget: "top" },

      { from: 4, to: 6, label: ["killed her"], sideOrigin:"bottom", sideTarget: "top" },

      { from: 4, to: 7, label: ["defeated him"], sideOrigin:"bottom", sideTarget: "top" },
      { from: 4, to: 8, label: ["killed him"], sideOrigin:"bottom", sideTarget: "top" }
    ]
  }
},

{
  id: 32,
  slug: "three-steps-that-measured-the-worlds",
  title: "Three Steps That Measured the Worlds",
  description: "A powerful Asura king was performing a grand sacrifice, but a young Brahmin boy arrived with a humble request that would change the fate of the three worlds.",
  accent: "#cdb4db",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-letter-to-krishna",
  trivia: `
    <p>Bali was the grandson of Prahlada and the King of Daityas. He had been defeated in battle several times by Indra. Wanting to take revenge, he decided to perform the "Viswajit Yagna", on the advice of his Guru Shukracharya.</p>
    <p>From this sacrificial fire, Bali received a golden chariot, some horses, a golden bow, two quivers with an inexhaustible supply of arrows, and also a divine protective armor.</p>
    <p>Using these, he attacked Indra, seized his Kingdom, and made himself the King of the three worlds. For this success of his, he performed one hundred Ashwamedha Yagnas as his thanks to the Lord.</p>
    <p>Aditi, the mother of Indra was troubled at the defeat of her son. Upon the advice of her husband, Kashyapa, she meditated upon Lord Vishnu.</p>
    <p>Lord Vishnu appeared before her and told her that her desire would be fulfilled, and that he would soon be born as her son. So, when the time came, the Lord was born to Aditi as an adult dwarf (Vamana). All the celestial beings rejoiced and the Devas and Rishis gathered at Kashyapa's ashrama.</p>
    <p>The child was named Vamana, which means "dwarf". At the time, Bali was performing an Ashwamedha Yagna on the banks of river Narmada. He had invited all the Brahmins of the land, and Vamana also went there. Bali and all the priests rose to receive him.</p>
    <p>Bali then asked him what he wished for, and promised to give him anything that he asked — be it land, gold, houses, cows, or horses.</p>
    <p>Vamana then said that he wanted three paces of ground that were covered by his own feet. Bali looked at the small dwarf feet of Vamana and laughed, telling him to ask for a greater boon.</p>
    <p>But Vamana replied that he only wanted the three paces of land. Bali agreed, and asked him to measure his three paces.</p>
    <p>At that point, Shukracharya realized that something was amiss and told Bali that he suspected the young dwarf to be none other than Vishnu. He warned him that he would cover the three worlds with just two steps of his. He asked him how he would be able to give him the third, and suggested that he take back his promise before it was too late.</p>
    <p>But Bali insisted that once he gave his word, he could not take it back. Angered by this, Shukracharya cursed Bali that he would lose his wealth and splendor because he had brushed aside the words of his Guru.</p>
    <p>As Bali read out the formal mantra of gifting the three paces of land, and was washing Vamana's feet with a golden pitcher of water, he looked up, and saw to his shock that Vamana's form was increasing in size. He kept growing bigger and bigger.</p>
    <p>With his first step, Vamana covered the entire earth. With his second, he covered the heavens and the rest of the universe. Bali and his priests were stunned to see the entire creation in him. Then, Vamana looked at Bali and laughed gently, asking the King where to place the foot for the third pace.</p>
    <p>Bali bowed his head and told him to place his foot on his head for the third pace. He said that he had become blinded by pride and power, and that he was blessed that although he had lost his Kingdom, he had gained Him instead.</p>
    <p>With all the majesty of his divine glory, Vamana placed his foot on the head of Bali for his third pace of ground.</p>
    <p>Bali became one of the seven immortals of the world, for his head was purified by the touch of the Lord's feet!</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__L_",
      clue: "The King of Rakshasas and the grandson of Prahlada, who defeated Indra. He performed the Ashwamedha Yagna.",
      answer: "BALI"
    },

    {
      id: 2,
      pattern: "_D__I",
      clue: "The mother of Indra. She was advised by her husband, Kashyapa, to meditate upon Lord Vishnu. After this, Lord Vishnu appeared before her and told her that he would be born as her son.",
      answer: "ADITI"
    },

    {
      id: 3,
      pattern: "V_M___",
      clue: "Lord Vishnu was born to the person above as a dwarf. He went to the Ashwamedha Yagna being performed by the King, and asked him to provide three paces of ground covered by his own feet. Name this Avatara of Lord Vishnu.",
      answer: "VAMANA"
    },

    {
      id: 4,
      pattern: "S__K___H___A",
      clue: "The guru of Rakshasas, who realised that there was something afoot, and warned the King to retract the promise.",
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
      { from: 2, to: 3, label: ["son"], sideOrigin:"bottom", sideTarget: "top" },

      // Vamana → Bali
      { from: 3, to: 1, sideOrigin: "right", sideTarget: "left", straight: true, label: ["asked for three paces"] },

      // Shukracharya warns Bali
      { from: 4, to: 1, sideOrigin: "top", sideTarget: "bottom", straight: true,label: ["warned him"] }
    ]
  }
},
{
  id: 33,
  slug: "the-letter-to-krishna",
  title: "The Letter to Krishna",
  description: "A princess of Vidarbha sends a desperate message to the one she truly wishes to marry, setting the stage for one of the most famous abductions. Identify the characters involved in the story.",
  accent: "#ffcad4",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-accusation",
  trivia: `
    <p>The king of Vidarbha was BhisHmaka. His eldest son, Rukmi, hated Krishna and resolved to give his lovely sister in marriage to Shishupala, the prince of Chedi. But the king and all the other members of the royal family wanted Rukmini to marry Krishna. Rukmini too - had set her heart on marrying Krishna and was very disturbed to know that Rukmi would never let her do so.</p>
    <p>She called to her a trusted Brahmin called Sunanda, and with a message, sent him to the Lord. Sunanda was very well received by Krishna. After offering him rest and refreshment, Krishna asked him the purpose of his visit.</p>
    <p>Sunanda told Krishna everything that had happened in Vidarbha and said that he was carrying for him a message from the princess Rukmini. She had asked him to tell Krishna that she had set her heart on him, that she would rather die than marry anybody else. She wanted him to come to Kundinapura during the days of the marriage festivities, and carry her off in the rakshasa-form-of-marriage.</p>
    <p>On the day of her marriage, she would be taken to the Ambika temple for worship, and had vowed to lay down her life by fasting if she did not see Krishna then. Sunanda then concluded that it was all up to Krishna as to what should be done.</p>
    <p>Krishna was the incarnation of Lord Vishnu and Rukmini was the incarnation of His divine Consort, Lakshmi. So it was but natural that they would be life partners on earth too. Krishna laughed heartily when he heard the message of Sunanda, and said that he too was determined to marry Rukmini. He asked Sunanda to tell Rukmini that he would not fail her.</p>
    <p>Krishna then summoned his celestial chariot drawn by four celestial horses and driven by his charioteer, Daruka.</p>
    <p>Kundinapura was a hub of activity. Shishupala's father, King Damaghosha of Chedi, had come along with his entire army to Kundinapura. He brought Shalva, Jarasandha, Dantavakra, Vidhuratha, Paundraka, and all his other friends along. This vast retinue was brought as he expected Krishna to cause trouble during the marriage festivities.</p>
    <p>Balarama did not like the idea that Krishna had gone alone, so he too went to Kundinapura with the Yadava army.</p>
    <p>In the royal palace, Rukmini was getting extremely anxious as there was no sign yet of either Krishna or the messenger she had sent. It was now the eve of her wedding day and as the hours sped by, she became more and more agitated.</p>
    <p>Just then Sunanda arrived and gave her a detailed account of what had happened at Dwaraka. He told her that the Lord was already in the city. Rukmini, in deep gratitude, bowed before him.</p>
    <p>Bhishmaka also learnt that Krishna and Balarama had arrived in the city. He hastened to welcome them and presented them with many gifts.</p>
    <p>Soon, the procession started for the temple of the goddess Ambika. Rukmini, decked in her finery, stepped into her chariot, which had also been decorated elaborately with gold and gems. The chariot proceeded towards the temple.</p>
    <p>When the worship was over, she emerged from the temple and slowly made her way back to the chariot. She looked so beautiful that the princes who had come from far-off lands to attend the wedding, climbed down from their own vehicles to take a closer look at her.</p>
    <p>Then, as she was about to enter her chariot, Krishna stepped forward and holding her by the waist, drew her into his own chariot and seated her by his side. Before the astounded eyes of Shishupala, Jarasandha and others, he drove away towards Dwaraka. Balarama and the Yadavas followed them. By now Jarasandha and the other kings had regained their senses. As soon as they were able, they gave chase to Krishna and Balarama. The Yadavas used some special weapons and defeated the combined forces of the enemy.</p><br>
    <p>Here's a great lecture that goes into more detail about the story: <a href="https://www.youtube.com/watch?v=vgpA6eVsP5Y" target="_blank" style="color:var(--accent-color);">Rukmini Kalyanam</a></p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam – Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "B____M__A",
      clue: "The King of Vidharba, who had five sons and a daughter (who was the incarnation of Goddess Lakshmi).",
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
      clue: "The princess of Vidharba, who sent a message to Krishna.",
      answer: "RUKMINI"
    },

    {
      id: 5,
      pattern: "S_N___A",
      clue: "The person who carried the message to Krishna.",
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

      // Rukmi → Shishupala 
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["planned to marry","his sister", "to him"] },

      // Rukmini → messenger
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget: "top", label: ["sent letter","through"] }
    ]
  }
}, 
{
  id: 34,
  slug: "the-accusation",
  title: "The Accusation",
  description: "A divine jewel gifted by Surya leads to an accusation, a search, and a legendary duel before the jewel is finally returned to its rightful place.",
  accent: "#f9c74f",
  congratsMessage: "Well done! On to the next puzzle!",
  nextSlug: "the-vow-and-the-exile",
  trivia: `
    <p>There was an honoured citizen in Dwaraka whose name was Satrajit, who was a great devotee of the Sun-god. As a result of his great devotion, the Sun-god was very pleased and presented him with a gem of matchless brilliancy called the Syamantaka. This brilliancy became part of whoever wore it, and it produced a lot of gold everyday.</p>
    <p>One day, Satrajit's brother, Prasenajit, wore the jewel and went out hunting. In the forest, he was attacked by a lion who killed him and his horse and took away the jewel. But the lion in its turn was attacked by Jambavan, who killed him and brought the gem home as a plaything for his little son.</p>
    <p>When Satrajit realised that his brother was missing, he spread a rumour that Krishna had killed him in order to secure the gem for himself. When Krishna heard this accusation, he gathered his men and horses, and in order to prove himself innocent, he set out with them in search of Prasenajit. In the forest they found his remains and also the dead horse and the dead lion.</p>
    <p>Then, following Jambavan's footprints, they reached his cave in the mountainside. Krishna entered it and grappled with the fierce bear for twenty-eight days. At last Jambavan realised who it was he was fighting with. He prostrated before him and begged his forgiveness for not having recognised him earlier. He gladly gave the jewel to him.</p>
    <p>Krishna now returned to Dwaraka and gave the Syamantaka gem back to Satrajit. Satrajit felt truly sorry for having spread such false rumours about Krishna and asked to be forgiven. And to show his repentance, he presented Krishna with the gem and his beautiful and talented daughter, Satyabhama. Satyabhama became Krishna's wife, but the jewel was returned back to him.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam – Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "Pleased by his devotion, Surya appeared before him and presented him with a gem which would produce a lot of gold everyday. Name this gem.",
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
      clue: "The Bear-chief, who killed the lion and took the jewel for his son to play with. (Hint - he is a character in Ramayana too.) When Krishna came for the jewel, they fought for 28 days, after which he recognized who he was fighting with and asked for forgiveness.",
      answer: "JAMBAVAN"
    },

    {
      id: 5,
      pattern: "J____V_T_",
      clue: "The daughter of the bear-chief, who was given in marriage to Krishna after he brought back the gem.",
      answer: "JAMBAVATI"
    },
    {
      id: 6,
      pattern: "__I__N_",
      clue: "The one accused of stealing the jewel, because of which he had to go in search for it.",
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
      // Surya to Satrajit
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top", label: ["received the jewel"] },

      // Syamantaka to Prasena
      { from: 2, to: 3, sideOrigin:"left", sideTarget: "top", label: ["worn by him"], straight:true },

      // Syamantaka to Jambavan
      { from: 4, to: 2,  sideOrigin: "top", sideTarget: "right", straight: true, label: ["took the jewel","after killing lion"] },

      // Jambavan → Jambavati
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget: "top", label: ["daughter"] },

      // Krishna → Jambavan
       { from: 6, to: 4, sideOrigin: "right", sideTarget: "left", straight: true, label: ["fought with"] },

      // Krishna → Jambavati
       { from: 6, to: 5, sideOrigin: "right", sideTarget: "left", straight: true, label: ["married"] }
      
    ]
  }
}, 

{
  id: 35,
  slug: "the-vow-and-the-exile",
  title: "The Vow and the Exile",
  description: "A vow meant to preserve harmony eventually lead to the exile of a Pandava prince. This exile lead to an unexpected encounter beneath the waters of a river.",
  accent: "#6ec6ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-boar-who-lifted-the-earth",
  trivia: `
    <p>One day, when the Pandavas had been ruling Indraprastha – a man approached Arjuna. He told him that some wild animals were troubling his cattle, and pleaded with him for help.</p>
    <p>Arjuna promised immediately, but then realized that his bow and arrows were in Yudhishtira's room. He was resting there with Draupadi, and the Pandavas had an unwritten rule that they each had their assigned separate timings with Draupadi. Anyone who encroached on the other's time had to go into exile for a year.</p>
    <p>Arjuna was in a quandary, but finally decided that the man who needed his help took priority over the danger of a one-year exile.</p>
    <p>So Arjuna entered the room, silently took his bow and arrows, and chased away the wild animals that had been attacking the man's cattle.</p>
    <p>When Arjuna returned, he told Yudhishtira and Draupadi what he had done, and not wanting to escape the consequences of having broken the rule, he decided to leave.</p>
    <p>Yudhishtira tried to convince Arjuna that there was no need for him to go into exile, saying that he had a valid reason for entering the room. It had been his duty to help the man. However, Arjuna was adamant.</p>
    <p>Arjuna spent his self-imposed exile wandering around the neighbouring kingdoms in disguise. One day, while he was bathing in the river Ganga, he felt some underwater creature tugging at his leg and drawing him deep into the water. Before he could say anything, he found himself in a beautiful underwater palace.</p>
    <p>Then, a beautiful maiden appeared before him and introduced herself as Ulupi, the daughter of the Naga King. She had fallen in love with him, and asked him to marry her.</p>
    <p>Arjuna agreed, and stayed there for the night, but the next day – expressed his desire to leave. Ulupi helped Arjuna come to the bank, and gave him a boon that no underwater creature would harm him.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "Y_____H____",
      clue: "The Pandava who was with Draupadi when a Brahmin whose cows were stolen, came for help.",
      answer: "YUDHISHTIRA",
      size: "wide"
    },

    {
      id: 2,
      pattern: "__J___",
      clue: "The Pandava prince who assured the Brahmin that he would bring back the cows. However, he was in a quandary because his brother and Draupadi were in the weapons chamber. After retrieving his weapons and rescuing the cows, he volunteered to go into exile, as he had broken the rule.",
      answer: "ARJUNA"
    },

    {
      id: 3,
      pattern: "__U__",
      clue: "The Naga king's daughter, that the Pandava prince met during his exile and married.",
      answer: "ULUPI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Yudhishtira 
      2: { x: 2, y: 0 }, //Arjuna
      3: { x: 1, y: 1 } //Ulupi
    },

    connections: [
      { from: 2, to: 3, sideOrigin: "bottom", sideTarget: "right", straight: true, label:["married"] }
    ]
  }
}, 

{
  id: 36,
  slug: "the-boar-who-lifted-the-earth",
  title: "The Boar Who Lifted the Earth",
  description: "When the earth had sunk into the cosmic ocean, Lord Vishnu took up an Avatara to restore balance. Identify the characters involved in the story.",
  accent: "#90be6d",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-abduction-from-dwaraka",
  trivia: `
    <p>Brahma, the creator of the entire universe, had created the first man and woman. The man was Swayambhuva Manu, and the woman was Satarupa. He commanded them to go forth and multiply. Manu told his father that he would obey his command, but asked him where he was supposed to keep them, since the earth was buried deep in the oceans of Pralaya.</p>
    <p>While Brahma sat, wondering what to do, from his right nostril emerged a Boar that was no bigger than the size of a thumb. It began growing in size until it became really huge. This boar was an incarnation of Sri Narayana.</p>
    <p>The Boar then gave a great roar and leaped down into the oceans. Boars have a very good sense of smell, and using this, he was able to make out where the Earth was. As he began to lift her up, he was attacked by the Rakshasa – Hiranyaksha. The boar pierced and killed the Rakshasa, and brought the Earth above the surface of water.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "B____A",
      clue: "The creator of the universe.",
      answer: "BRAHMA"
    },
    {
      id: 2,
      pattern: "S__________ M___",
      clue: "The first man created by the creator. He and his wife were instructed to go forth and multiply. However, he couldn't do so yet, since the earth was buried deep in the oceans, and there would be no place to keep the offspring.",
      answer: "SWAYAMBHUVA MANU",
      size: "large"
    },
    {
      id: 3,
      pattern: "S_T_R__A",
      clue: "The first woman created by the creator.",
      answer: "SATARUPA"
    },
    {
      id: 4,
      pattern: "V_____ A_____A",
      clue: "While the creator sat contemplating about the issue of the earth being submerged, a being sprung out of his right nostril, and began to grow in size. Name this Avatara of Lord Vishnu, who dived deep into the oceans to bring out the earth.",
      answer: "VARAHA AVATARA",
      size: "wide"
    },
    {
      id: 5,
      pattern: "H___N__K___",
      clue: "The Rakshasa that attacked Lord Vishnu while he was bringing Bhu Devi out of the water.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top" },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top" },
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget: "top", label: ["fought him"] }
    ]
  }
}, 
{
  id: 37,
  slug: "the-abduction-from-dwaraka",
  title: "The Abduction from Dwaraka",
  description: "This is the story of how the Pandava prince got the princess of Dwaraka. Identify the characters in this daring abduction that would reshape alliances.",
  accent: "#fcd4b4",
  congratsMessage: "Well solved. On to the next puzzle!",
  nextSlug: "the-bet-and-the-births",
  trivia: `
    <p>Krishna had a sister called Subhadra. She was lovely, virtuous and talented. When she reached the marriageable age, Balarama decided to give her in marriage to Duryodhana. At this time, Arjuna was under his self-imposed exile for having intruded upon Yudhishtira and Draupadi, and had travelled across many places. He went eastwards to the Naimisha forest, and from there to Kalinga, and then to Manipura.</p>
    <p>He continued journeying northwards along the sea coast and came to Prabhasa, which was near Dwaraka. There he learnt about Subhadra's forthcoming marriage, and was determined to marry her himself.</p>
    <p>So he arrived at Dwaraka disguised as a <em>sanyasi</em>. He lived on the food that people gave him. One day, Balarama came to know that an ascetic of great merit was in the city. So he sent him an invitation for <em>bhiksha</em>. Arjuna went, and he was served by Subhadra. Both Arjuna and Subhadra loved each other. Luckily, no one in the palace recognised him. Arjuna then sought out Krishna and told him of his desire to marry his sister.</p>
    <p>Krishna heartily approved of the proposal and also told him to inform Yudhishtira first, but Balarama would never have listened. So Arjuna decided to carry her off but had to wait for a suitable opportunity to carry out his plan.</p>
    <p>One day, Subhadra asked the permission of her parents to go and offer worship at a temple outside the fort. Having secured it, she set out in her chariot along with a number of attendants. Arjuna who was waiting for just such an opportunity, took everybody by surprise by carrying away Subhadra. He drove the chariot to Hastinapura fighting and defeating anyone who tried to stop him.</p>
    <p>Balarama was very angry by this behaviour of Arjuna's, and it was difficult to pacify him. But Krishna succeeded in doing so. In his heart of hearts, he was extremely pleased that his sister had married Arjuna and not the vile Duryodhana.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam – Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "___A__M_",
      clue: "The son of Rohini - who was planning to give his sister in marriage to Duryodhana.",
      answer: "BALARAMA"
    },
    {
      id: 2,
      pattern: "___U__",
      clue: "The Pandava prince who was enchanted by the princess and wished to marry her.",
      answer: "ARJUNA",
      size:"small"
    },
    {
      id: 3,
      pattern: "___SH__",
      clue: "The younger brother, who advised the prince (his friend), to abduct her.",
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
      { from: 3, to: 2, sideOrigin:"bottom", sideTarget: "top",  label: ["advised him"] },
      { from: 2, to: 4, sideOrigin: "left", sideTarget: "right", straight: true, label: ["abducted her"] }
    ]
  }
},
{
  id: 38,
  slug: "the-bet-and-the-births",
  title: "The Bet and the Births",
  description: "The wager about the color of a celestial horse's tail led to a chain of events, finally ending with the birth of beings who would shape the heavens. Identify the characters involved in this story.",
  accent: "#ffafcc",
  congratsMessage: "Well done! Onward to the next puzzle!.",
  nextSlug: "the-invitation-to-the-dice-game",
  trivia:`
<p>Sage Kashyapa, who had married thirteen of Daksha’s daughters, was the father of the devas and the asuras, and much of the animal kingdom as well. </p>
<p>One day, as he was performing a yagna, he decided to confer a boon on two of his wives – Vinata and Kadru, that they would be mothers. </p>
<p>Kadru said that she would like to be the mother of a thousand mighty snakes, while Vinata said that she wanted to have two sons who would surpass Kadru’s thousand snakes in strength and valour. Kashyapa granted them the boons and left to prepare for the yagna. His son Indra, along with many other rishis and celestial beings came to assist him. They were all instructed to fetch fuel for the sacrificial fire. </p>
<p>A little later, Indra flew back carrying a heavy log single handedly, and mocked some rishis who were struggling to carry a smaller log. They decided that his pride must be humbled. </p>
<p>While the sacrificial fire was blazing, the rishis uttered that by the fruit of their penance, a mighty Indra would be born, who would be mightier than the present Indra. He would be capable of going anywhere at will, mustering any amount of strength, and assuming any form at will. </p>
<p>Indra, upon hearing this, decided to go to his father and ask him to intercede with the rishis on his behalf. </p>
<p>After hearing the whole story Kashyapa spoke to the rishis. He told them that Indra was remorseful of what had happened. Since he was appointed by Brahma to be the lord of the heavens, Kashyapa declared that the new Indra being created by them would be the lord of the winged creatures. Thus, the rishis relented. </p>
<p>When the yagna was over, Kashyapa returned to Vinata and Kadru and told them that they would soon be mothers. </p>
<p>Months later, Vinata brought forth two eggs, and Kadru, a thousand. They had them incubated in warm vessels. </p>
<p>The years rolled by, and the mothers waited anxiously for the eggs to hatch. One day, Kadrus sons burst open their shells and emerged. However, Vinata’s eggs didn’t hatch for a long time. </p>
<p>She began to grow impatient. Thinking that maybe her sons needed her help, she broke open one of the eggs. To her horror, the child was only half formed. The lower half of the child was a lump of flesh. Vinata was horrified and remorseful of what she had done. </p>
<p>The child pointed an accusing finger at her and declared that she would pay for her impatience with slavery. However, if she managed to be more patient with the other egg, the child born from it would deliver her from her bondage. </p>
<p>With that, the child (Aruna) ascended to the skies to become the charioteer of Surya, the sun god. A few days later, when Vinata and Kadru were out one evening, they saw the celestial horse, Ucchaishrava, fly past. </p>
<p>Kadru suddenly asked her to tell her the color on the tail of the horse. Vinata saw that it was white all over, and said so. Kadru though, thought that the tail was black. She decided to wager on it, she said that whoever was wrong would have to become the other person’s slave. They decided to come back the next day and look at the horse’s tail. </p>
<p>After they went back home, Kadru began to have second thoughts. She could not become Vinata’s slave! She decided to make the horse’s tail appear black even if it wasn’t. She then sent for her thousand sons. </p>
<p>Kadru instructed them to cover the tail of the horse and make it appear black. So, wanting to earn her favor, they all slithered out to do their mother’s bidding. </p>
<p>The next day, Vinata and Kadru set out to see the horse. They travelled across the mighty ocean to the abode of Ucchaishrava. There stood the horse, looking spotlessly white, but its tail was black. Vinata could not believe her eyes. </p>
<p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
<p>Vinata’s second son broke his shell and emerged into the world. Capable of changing his form at will, he increased his size, and soaring into the skies, he flew across the ocean to his mother’s side. Vinata was filled with joy when she saw him. </p>
<p>He came to know about how his mother had been the victim of Kadru’s deception, and that she had become her slave when she lost the wager. </p>
<p>The mighty son of Vinata went to the nagas, and said that he wanted to buy his and his mother’s freedom. The snakes responded that they desired Amrit. If he brought them Amrit, they could be free. </p>
<p>When Vinata heard of the bargain, she told her son to go forth and that success would be his. He then spread out his wings and rose to the skies. As he flew towards the abode of the devas, he heard a voice calling out to him. It as Sage Kashyapa. The son of Vinata greeted him and told him that he was on his way to get Amrit and buy their freedom. </p>
<p>He then asked his father where he could find enough food to increase his energy. Kashyapa pointed to a lake in the distance, and said that he would find an elephant and a tortoise down there bent on killing each other. He instructed his son to eat them and proceed on his mission. </p>
<p>The son of Vinata did as he was told and found the elephant and the tortoise. He decided to find a strong tree on which he could perch and devour his prey. At last, he saw an old banyan tree – it requested him to sit on his arm and enjoy his meal. </p>
<p>But the moment he alighted on the branch, it trembled and broke. The mighty son of Vinata looked down, and realised to his surprise that there were rishis hanging from it. Not wanting them to be harmed, he quickly caught the branch with his beak before it could come crashing down. </p>
<p>The rishis were amazed by his speed and strength, and declared that this great bird would be called Garuda. </p>
<p>Garuda flew on until he reached the peaks of the Gandhamadana mountains, and gently placed the branch down so that the rishis could alight. At last, Garuda was able to eat his prey in peace. </p>
<p>After his meal, Garuda resumed his flight to the abode of the devas. Meanwhile, various evil omens began to appear in Indra’s heaven. Worried, Indra and a few devas went to their guru, Brihaspati, to ask him what these omens could mean. Brihaspati said that Garuda, the son of Vinata and Kashyapa, was on his way to rob Indra of the nectar of immortality. And he was quite capable of doing it. </p>
<p>Indra then took Brihaspati’s leave to warn those who guarded the nectar. The devas with their king, fully prepared, awaited Garuda’s arrival, ready to fight him back. </p>
<p>A few minutes later, Garuda arrived. The skies were dark with the dust raised by his flapping wings. The devas were blinded by the dust and couldn’t see anything. Indra turned to the god of winds, Vayu, and asked him to dispel the shower of dust. Vayu drew in his breath, and with one large puff, blew away the dust. Now, they could see Garuda. </p>
<p>The devas hurled at him all the weapons they had – double edged swords, spiked iron maces, lances and many a discus. </p>
<p>For a while, Garuda humoured the devas and let their weapons graze his body. Then, with a mighty roar, he began a terrible attack. Overcome by the onslaught, the devas began to flee in all directions. </p>
<p>Having tackled them, Garuda now had to cross the wall of fire that was around the Amrit. Capable of changing his form at will, Garuda assumed several thousand mouths, and filled each mouth with the waters of several rivers, with which he subdued the wall of fire. </p>
<p>Then with a roar of triumph, he rushed forward. Now, a revolving wheel with a sharp edge stood between him and the pot of Amrit. Below the wheel were two poisonous serpents, with their tongues darting in fury, standing guard over it. </p>
<p>Garuda was unperturbed. In an instant, he reduced his size and slid under the wheel. He began flapping his wings incessantly, throwing up dust. Before the blinded serpents could realise what was happening, they were killed. Garuda then retrieved the pot of Amrit and suddenly began to grow, shattering the wheel into a million pieces with the force of his action. </p>
<p>With a cry of triumph, he rose into the sky, and as he flew along, Lord Vishnu saw him. He realised that Garuda had the nectar of immortality with him, but hadn’t touched a drop of it. Pleased with his intentions, Vishnu offered to grant him two boons. </p>
<p>Garuda requested to be above him, and also to be immortal and free from disease. Vishnu then asked him to go on perch on his flagstaff. Thus, he had fulfilled his wish. </p>
<p>Garuda in turn offered him a boon, and Vishnu asked him to be his vehicle. Garuda said that he would, as soon as he fulfilled his mission. </p>
<p>After taking leave of Vishnu, Garuda flew on. Indra, who had now caught up with him, hurled his thunderbolt at him. To his surprise, the mighty weapon did not harm even one of his feathers. </p> 
<p>Indra was amazed, and asked the mighty bird that he wanted to know the limit of his strength, and also an eternal friendship with him. </p>
<p>Garuda then proceeded to explain his strength. On each of his feathers, Garuda could bear the earth with all her mountains, forests, and oceans. His strength was such that he could carry without fatigue, all the worlds put together with their animate and inanimate objects. </p>
<p>Indra was impressed, and requested him to return the nectar. He added that those to whom Garuda wished to give it would always oppose him. Garuda said that he could not return the nectar, but told him how he could retrieve it. </p>
<p>Indra was pleased, and asked him to ask for a boon. Garuda was thoughtful for a moment. His mother’s slavery was caused by the deception of the sons of Kadru. He asked for snakes to henceforth become his natural food, and Indra granted the boon. </p>
<p>Garuda flew home and showed the nagas the Amrit. He said that he would be placing it on the kusha grass, and they could have it after their ablutions. Since he had done their bidding, he asked for his mother to become free from this moment. </p>
<p>The snakes replied that Vinata was free, and that they would soon be back. They then went for their ritualistic ablutions, and as planned, Indra came there and took away the pot of Amrit. Thus, Vinata was freed from her bondage. </p>
<p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Garuda - Amar Chitra Katha</em></p>
`,

  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__SH__P_",
      clue: "A sage who is the son of Marichi (who is the son of Brahma). He was married to the many daughters of Daksha.",
      answer: "KASHYAPA"
    },
    {
      id: 2,
      pattern: "__D__",
      clue: "One of the daughters of Daksha, who was married to this sage. She asked her husband for a boon that she wanted a thousand powerful sons (Nagas) to be born to her.",
      answer: "KADRU"
    },
    {
      id: 3,
      pattern: "__N___",
      clue: "One of the daughters of Daksha, married to this sage. She asked for a boon to have two sons who would surpass those thousand, in strength and brilliance.",
      answer: "VINATA"
    },
    {
      id: 4,
      pattern: "__U__",
      clue: "One of the two sons. When he was inside the egg, his mother became impatient and tried to open it. The son, to her horror, was only half-formed. Enraged at his mother's impatience, he cursed her to slavery for years, promising that her other son would free her. He later became the charioteer of Surya.",
      answer: "ARUNA"
    },
    {
      id: 5,
      pattern: "___U__",
      clue: "The mighty eagle who was born from the other egg. He vowed to free his mother from slavery, and did so by bringing Amrita.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top", label:["wife"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top", label:["wife"] },

      { 
        from: 3, 
        to: 2, 
        sideOrigin: "left", sideTarget: "right", 
        straight: true,
        label: [
          "became her slave when she lost the bet",
          "where she had to identify the color",
          "of the tail of a horse"
        ]
      },

      { from: 3, to: 4, straight:true, sideOrigin: "bottom", sideTarget: "right", straight: true, label:["son"] },
      { from: 3, to: 5, straight:true, sideOrigin:"bottom", sideTarget: "top", label:["son"] }
    ]
  }
},
{
  id: 39,
  slug: "the-invitation-to-the-dice-game",
  title: "The Invitation to the Dice Game",
  description: "An invitation to Hastinapura for a game alters the fate of a dynasty. Identify the characters involved.",
  accent: "#f39b02",
  congratsMessage: "Well solved and onto the next puzzle!",
  nextSlug: "from-king-to-deer-to-sage",
  trivia: `
    <p>The Kingdom was divided for the Pandavas and the Kauravas. Duryodhana kept Hastinapur and the Pandavas were given Khandavaprastha, a barren land, which, through sheer effort, they transformed into a prosperous city of Indraprastha. In a very short time, Yudhishtira conducted the Rajasuya Yagna and became a sovereign king of Bharatavarsha with the help of his brothers. The progress and grandeur of the Pandavas was unbearable for Duryodhana. A game of dice was thus planned to trap them.</p>
    <p>The occasion turned into an abhorrent display of malice where even the dignity of the daughter-in-law of Hastinapur was not spared. Shakuni provoked Yudhishthira to stake Draupadi. Yudhishthira did and lost; he had already staked his brothers and himself before and lost. Duryodhana ordered Dushasana to drag Draupadi into the assembly. Dushasana pulled Draupadi by her hair and dragged her into the assembly full of men. Every single person in the audience was appalled but said nothing. Vikarna, Duryodhana's younger brother, rose in protest against such unjust and shameful treatment of Draupadi. Karna silenced him, calling him a destroyer of the Kauravas.</p>
    <p>Shakuni, Duryodhana and Dushasana had already crossed the line of decency by their words and actions. But Karna surpassed them all, and justified Draupadi being pulled by her hair and brought into the hall in just one piece of garment.</p>
    <p>He turned to Dushasana and asked him to disrobe Draupadi. Dushasana began pulling Draupadi's garment, but all his efforts were in vain. He collapsed, embarrassed. Karna, however, was not done yet.</p>
    <p>He told Draupadi that she could choose a new husband, and Duryodhana, unable to hide his pleasure, laughed aloud and flashed his left thigh to Draupadi, inviting her to sit on it.</p>
    <p>Bheema had already pledged to rip apart Dushasana's chest for laying his hands on Draupadi. Seeing Duryodhana's gesture, he roared even louder - "If I do not break that thigh of yours in the war, may I never get the heavens." Every cell of Bheema's body was burning with anger. He could have punished Duryodhana right there but was held back by Yudhishthira's restraint.</p>
    <p>Dhritarashtra intervened and annulled that game. But Duryodhana wanted yet another game to be played and convinced Dhritarashtra to invite Yudhishthira for another round. Yudhishthira had no option but to respect his uncle's invitation. He lost again and accepted the thirteen years of exile as per the condition set out for losing the second game of dice. The brothers and Draupadi followed Yudhishthira. Before leaving, Arjuna, like Bheema, took the vow to kill Karna and Sahadeva pledged to kill Shakuni if a war was mandated after their exile.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "D_____R___T__",
      clue: "A King who invited his nephew to Hastinapura to play a game of dice.",
      answer: "DHRITARASHTRA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "__D___",
      clue: "The uncle of the Pandavas who warned them against accepting the game.",
      answer: "VIDURA"
    },
    {
      id: 3,
      pattern: "Y_____H____",
      clue: "The prince who was made to play the game and manipulated.",
      answer: "YUDHISHTIRA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "___K___",
      clue: "The evil brother of Gandhari, who was skilled at tricks in the game of dice.",
      answer: "SHAKUNI"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Yudhishtira
      2: { x: 0, y: 1 }, //Vidura
      4: { x: 2, y: 1 }, //Shakuni
      3: { x: 1, y: 2 } //Yudhishtira
    },

    connections: [
      { from: 1, to: 3, label: ["invited him"], sideOrigin:"bottom", sideTarget: "top" },

      { from: 2, to: 3, straight:true, label: ["warned him"], sideOrigin:"bottom", sideTarget: "left" },

      { from: 4, to: 3, label: ["manipulated him"], sideOrigin:"bottom", sideTarget: "top" }
    ]
  }
},

{
  id: 40,
  slug: "from-king-to-deer-to-sage",
  title: "From King to Deer to Sage",
  description: "This story reveals how attachment can shape rebirth and how wisdom can appear in unexpected forms.",
  accent: "#7ffc90",
  congratsMessage: "You followed the strange journey from king to deer to an enlightened sage. Well solved - try your luck with the next puzzle.",
  nextSlug: "the-bridge-across-the-ocean",
  trivia: `
    <p>Rishabha was an avatara of Lord Vishnu, who was a descendent of Priyavrata. His rule was a happy one, and he always engaged in activities for the welfare of his subjects.</p>
    <p>Later on, he handed over his Kingdom to his eldest son Bharata, and left the Kingdom. He took the vow of <em>Ajagara</em>, i.e. staying in one place, eating whatever food came his way.</p>
    <p>Bharata, meanwhile was a mighty monarch, and after he had finished his duties to his people and his country, he left his palace, gave up his wealth, and withdrew into the forest.</p>
    <p>He went to the lands of the river Gandaki, and built himself a small hut of reeds thatched with leaves. He meditated on the Gayatri Mantra, and thus passed many days, months, and years.</p>
    <p>One day, while he was preparing for his meditation, he saw a baby deer being slowly swept down by the river current. Seeing the urgency of the situation, he got up at once from his seat of meditation and jumped into the river to rescue the little animal.</p>
    <p>He carried it back to his hermitage and lit up a fire to warm it. While this was a beautiful act, it also proved to be his spiritual downfall. He became very fond of this baby, and fed it soft grass and juicy fruits and looked after it. Eventually, it grew into a deer. What was happening was that instead of turning more and more towards God during his final days, his mind was always on the deer. In the evenings, when he usually would have been meditating, he was now anxiously waiting for the deer to come back from the forest.</p>
    <p>Thus passed a few years. The King who had given up wealth, power, and the rule of his country, who had made his mind pure and free from attachments, had now become so attached to this little deer that he stopped all his spiritual practices.</p>
    <p>When at last came his moment to die, the deer came and stood next to him faithfully. His last thought, instead of being about God, was that of the deer.</p>
    <p>Since a man's last thought determines his next life, he was born again as a deer. But since no devotion or prayers ever go waste, he was born with the memory of his past life. He came to an ashrama to listen to the talks of Rishis and readings of Upanishads. He was waiting for a time where he could give up his deer body as it made meditation impossible for him.</p>
    <p>In his next birth, Bharata was born as the youngest son of a wealthy family, and he still had his memories of his past two births. He remembered the pains and pangs caused by attachment. In this life, he would not even talk, and people took him to be a mad man.</p>
    <p>One time, a robber chief wanted to offer a sacrifice to the Goddess Bhadrakali. He and his band of robbers came across Bharata, who was sitting under a tree, keeping guard over a field. They decided to use him for the sacrifice. He was tied to a post, fires were lit, and as the mantras were being chanted, the chieftain drew out his sword and raised it to cut off Bharata's head. At this moment, Goddess Bhadrakali, unable to bear it any longer, emerged out of her statue and grabbed the sword from the hand of the chief. She chopped off his head as well as all those of his kinsmen.</p>
    <p>Bharata was then set free, but his mind was so absorbed in God that he did not even know that he had been saved from a terrible death.</p>
    <p>Another day, the palanquin of King Rahugana was passing, and one of the bearers of the palanquin fainted, and Bharata was forced to take his place. But his step was so unsteady, because he was so careful about not stepping on an ant or a beetle.</p>
    <p>King Rahugana, feeling uncomfortable in the jolting palanquin, looked out and saw that his new bearer, although strong and sturdy, was constantly hopping and jerking. He called out to him and scolded him, but also said that he could put down the pole and rest awhile if he was tired.</p>
    <p>Bharata laid down the pole, and spoke up for the first time in his life. He told him that his mind was steadily fixed on the Lord, and that he did not want to trample poor and innocent crawling worms, and therefore went slow. He also said that the true self never wearies, for it has nothing to do with the body. The self knows no command because it is neither master nor slave.</p>
    <p>King Rahugana was astonished to hear these words of wisdom, and got down from the palanquin and prostrated to him. He apologised for having insulting him, and said that he wanted to learn more about the Self from him, and that from then on, he considered himself as his disciple.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 350,

  nodes: [
    {
      id: 1,
      pattern: "R____B_A",
      clue: "A descendent of Priyavrata (who is the son of Manu). He was an Avatara of Lord Vishnu.",
      answer: "RISHABHA"
    },
    {
      id: 2,
      pattern: "J_____I",
      clue: "The person he married (she is the daughter of Indra)",
      answer: "JAYANTI"
    },
    {
      id: 3,
      pattern: "B_____A",
      clue: "Their son, who was crowned as the King. After the King became old, he retired to the forest. In the forest, he rescued a baby deer. But unfortunately, this act resulted in his spiritual downfall, since he grew more and more attached to it and began neglecting his spiritual practices. Even in his final moments, his thoughts were not on god, but on the deer, and as a result - he was born as a deer in his next life. Name this King.",
      answer: "BHARATA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "R_____NA",
      clue: "The King above, in his next life (after the deer one), was born as the youngest son of a wealthy Brahmin. When he was made to carry the palanquin of a King, his step was very unsteady (as he was trying not to tread on any creatures like ants) The King became angry at how slowly the palanquin was moving and yelled at him, but later realised how learnt he was, and became his disciple. Name this King.",
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
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top" },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget: "top" },

      { from: 3, to: 4, label: ["later teaches him"], sideOrigin:"bottom", sideTarget: "top" }
    ]
  }
}, 
{
  id: 41,
  slug: "the-bridge-across-the-ocean",
  title: "The Bridge Across the Ocean",
  description: "This is the story of how a massive bridge was built across the ocean within five days. Identify the characters in this story.",
  accent: "#48cae4",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-vessel-that-never-emptied",
  trivia: `
    <p>Vibheeshana, the brother of Ravana, gave Rama a true picture of the preparations going on in Lanka. However, their first and immediate hurdle was crossing the sea.</p>
    <p>Under the request of elders, Rama undertook a fast to request the sea god to help him. He spread Darba grass on the seashore and sat down on it. He prayed to the sea god and requested his help. Three days passed and no help seemed forthcoming.</p>
    <p>Finally, Rama got up in a rage and asked Lakshmana to fetch his bows and arrows so that he could dry up the ocean.</p>
    <p>He began to shoot snake-like darts, which struck the ocean. The waves were in a state of turmoil and the animals in the sea started perishing. Then the ocean god himself emerged from the deep depths of the sea. He offered Rama the treasures of the ocean on a golden platter, and pleaded for mercy, asking how he could go against his very nature, which was to be deep and infinite.</p>
    <p>He suggested a course of action — he told Rama that there was a mighty Vanara in his army named Nala, the son of Vishwakarma and an excellent engineer. He told Rama to ask him to lead the construction of a bridge across the ocean to Lanka. The ocean god said that he would also do his part by bearing the entire weight upon his chest.</p>
    <p>Rama then smiled and forgave him. Nala was appointed the chief engineer, and the Vanaras began working. They brought huge boulders, uprooted massive trees, and even lifted big hills and flung them into the ocean. With every step, they shouted — "Jai Rama! Victory, victory to Rama!"</p>
    <p>The waters of the ocean rose high as it received the heavy bridge. Nobody rested — they worked continuously as though their life depended upon it. The first day, the bridge was fourteen leagues long; by the second day, another twenty leagues had been added. By the fifth day, the entire bridge was ready, stretching from the southernmost tip of Bharat to the very shores of Lanka!</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "V_____S___A",
      clue: "The younger brother of Ravana, who repeatedly advised him to give up his evil ways and to return Sita, but his advise was rejected, so he came to Rama.",
      answer: "VIBHEESHANA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "V_R___",
      clue: "The God with whom Rama lost his temper, for not helping him create a way to Lanka, and was prepared to shoot his arrows at him. Who was this god?",
      answer: "VARUNA"
    },
    {
      id: 3,
      pattern: "N___",
      clue: "The mighty Vanara who was told to assist with building the bridge.",
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
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget: "top", straight:true, label: ["suggested building","the bridge","with his help"] },
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget: "top", label:["son of"]}
    ]
  }
},
{
  id: 42,
  slug: "the-vessel-that-never-emptied",
  title: "The Vessel That Never Emptied",
  description: "This is the story of a divine vessel that could feed countless guests, but one unexpected visit tests the Pandavas’ fortune. Identify the characters involved.",
  accent: "#ffd166",
  congratsMessage: "You've successfully identified the events related to the Akshaya Patra. On to the next puzzle!",
  nextSlug: "the-elephants-last-desperate-prayer",
  trivia: `
    <p>When the Pandavas were in exile, numerous people visited them – from sages and kings to ordinary folk – all of whom were stunned and horrified by their plight.</p>
    <p>When Draupadi was the queen of Indraprastha, she would enjoy entertaining guests and was known for her generosity. But of course, she couldn't do the same while in the forest. So, upon Sage Dhaumya's advice, Yudhishtira prayed to Surya – who gave them a vessel saying that it was known as the Akshaya Patra. It would produce as much food as was necessary. However, there was a condition – after Draupadi had her meal and washed the vessel, it wouldn't produce anything more until the next day.</p>
    <p>Thus, Draupadi was now able to provide delicious food for all their guests, and in great quantities. She washed the vessel only after she finished eating.</p>
    <p>As the news of the Pandavas' generous hospitality travelled to Hastinapura, Duryodhana was surprised about how it was possible. Then he heard about the vessel and devised a cunning plan along with his uncle Shakuni.</p>
    <p>One day, the famous short-tempered sage – Durvasa, came to visit the King in Hastinapur. Duryodhana welcomed the sage with great pomp and treated him and his group to a fantastic meal.</p>
    <p>Durvasa was very pleased with his hospitality, and said that he could ask for a boon. Duryodhana then said that he wished for the Pandavas also to have the chance to welcome him as their guest, and be blessed by him too. He also added that they would probably be more comfortable if the sage arrived a little later after mid-day, so that they would have enough time to make all the arrangements.</p>
    <p>Sage Durvasa smiled and agreed, and then left for the forest with his students. They reached the Pandavas' home late in the afternoon, as Duryodhana had advised.</p>
    <p>When the Pandavas saw the number of people accompanying the Sage, they were alarmed. Durvasa said that he and his students would go to the river for a bath first and then come back for a meal, and left.</p>
    <p>Everyone was at a loss for what to do. Draupadi then meditated upon Lord Krishna for help. Suddenly, the Pandavas heard the sound of horses outside – Krishna had already arrived at their doorstep!</p>
    <p>The Pandavas and Draupadi then explained the situation. Krishna said that he would take care of it, but first asked to be fed as he had travelled a long distance.</p>
    <p>Draupadi repeated in exasperation that there was nothing left to eat. Krishna insisted that he was really hungry, and asked Draupadi to bring him the vessel.</p>
    <p>Draupadi did as she was told and brought him the vessel. However, it wasn't really empty. At the bottom of the vessel was a single grain of cooked rice.</p>
    <p>Krishna picked up that single grain and as he ate it, said – "May Hari, the soul of universe, be fed to satisfaction." He then told Draupadi not to worry about Sage Durvasa or his students, and left.</p>
    <p>Meanwhile, Durvasa and his students had finished their bath and came out of the river. To their surprise, none of them were feeling hungry in the slightest. They felt like they couldn't eat anything. Durvasa then thought that they couldn't ask the Pandavas to be ready for meals for all of them, and then decline their hospitality. They decided that the best thing would be to quietly slip away from there.</p>
    <p>Thus, the Sage and his disciples quickly changed their clothes and retreated hastily out of there. Thus, Duryodhana's plan failed miserably.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy – Unusual Tales from the Mahabharatha</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D___M__",
      clue: "The priest who taught the Pandavas a mantra to invoke a god. This resulted in being able to feed any number of people for a meal. The vessel would never exhaust until Draupadi had her meal.",
      answer: "DHAUMYA"
    },
    {
      id: 2,
      pattern: "__R__",
      clue: "Who is the god that they had been invoked by the Pandavas?",
      answer: "SURYA"
    },
    {
      id: 3,
      pattern: "__R___A",
      clue: "The short tempered Rishi who visited the Pandavas one day after Draupadi had finished eating. The Pandavas were struck with confusion as to how to feed their guest.",
      answer: "DURVASA"
    },
    {
      id: 4,
      pattern: "__I__N_",
      clue: "The character who helped them out of this scrape, by eating the last grain in the vessel, and satisfying the hunger of the whole world with it.",
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
      { from: 1, to: 2, sideOrigin: "right", sideTarget: "left", straight: true, label: ["invoked him"] },
    ]
  }
},
{
  id: 43,
  slug: "the-elephants-last-desperate-prayer",
  title: "The Elephant’s Last Desperate Prayer",
  description: "This is the story of the king of elephants, whose foot was trapped by a crocodile. He was unable to escape no matter how hard he tried, which led to him finally calling out to the Lord for help.",
  accent: "#80ed99",
  congratsMessage: "Well done on identifying all the events related to the Gajendra Moksha - onto the next puzzle!",
  nextSlug: "before-the-war-in-lanka",
  trivia: `
    <p>In a forest on Mount Trikoota, lived an elephant King. In this forest, was the garden of Varuna - where celestial trees and plants grew. They had lovely flowers and juicy fruits, and this garden was often visited by apsaras because of its exquisite charm and beauty.</p>
    <p>One day, Gajendra (the elephant King), entered the garden with his entire family. Since it was hot, he entered one of the cool lakes to refresh himself. Suddenly, he felt his feet attacked by a powerful crocodile. It started dragging him into the water, and he struggled to free himself from its clutches. The other elephants also tried to pull their leader out of the water, but none of them could. Gajendra fought with the crocodile for a long long time, and tried every means of escape, but it all failed miserably.</p>
    <p>At last, he turned his thoughts to the Lord and prayed ardently for help.</p>
    <p>Sri Hari heard the desperate cry of the royal elephant and immediately mounted his Garuda. He pulled the crocodile out of the water, and split open its mouth with his divine Chakra.</p>
    <p><em>"Each individual Jiva in this world is like Gajendra, forgetful of the Lord, and extremely attached to the family. To cool off his desires for sense-enjoyments, he plunges straightway into the pleasures of the world. Before he even knows it, he is caught up in the net of samsara from which he cannot escape. It is then, by the Lord's grace, he remembers the one Lord who will never forsake him in his hour of need. He appeals to him piteously, and Bhagavan, in His infinite kindness, rushes to the rescue of His sincere devotee."</em></p>
    <p>This Crocodile was actually a Gandharva named Huhu. One day, while he was bathing in a tank, Rishi Devala also went there to bathe. Huhu played tricks on the Rishi, and Devala cursed him to be born as a crocodile. He was released from his curse by the touch of the Lord's divine discus.</p>
    <p>And Gajendra - in his previous birth was a Pandya King named Indradyumna. He was a great devotee of Sri Hari, and had taken a vow of silence. He sat deep in the mountains, meditating. One day, Rishi Agastya, along with his disciples, came to his ashram. The King did not rise to receive him, being lost in deep meditation. Agastya cursed him, saying that he appeared to be dull-witted like an elephant, and would be born as an elephant himself.</p>
    <p>Even as an elephant, he retained to some extent his devotion to the Lord from his previous birth. He remembered this when he was absolutely desperate, and saw no other means to escape.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "I____D_U_N_",
      clue: "A Pandya King, who was a great devotee of Sri Hari. He had taken a vow of silence, and sat in the mountains in deep meditation. One day, Rishi Agastya came along with his disciples to his ashrama, but the King was lost in his meditation. Agastya cursed him that he would be born as an elephant.",
      answer: "INDRADYUMNA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "H_H_",
      clue: "A Gandharva who was bathing in a tank. When Rishi Devala also arrived there to bathe, the Gandharva played tricks on the Rishi. Devala cursed him, saying that he would be born as a crocodile. Name this Gandharva.",
      answer: "HUHU"
    },
    {
      id: 3,
      pattern: "G_J_N___",
      clue: "This character is the reincarnation of the Pandya king as the king of elephants. One day, he went to bath in a lake to refresh himself. Suddenly, a powerful crocodile attacked his feet, and started dragging him into the water. He struggled and fought with the crocodile for a long long time, and then finally, when his last moment drew near, he turns his thoughts to the Lord and prayed to him for help. Name this elephant.",
      answer: "GAJENDRA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "__R_",
      clue: "Name the God to whom the king of elephants had called out.",
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
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "left", label: ["reborn as"], straight:true },
      {from: 2, to: 3, sideOrigin: "bottom", sideTarget: "right", straight: true, label: ["in his next life,", "he attacked him"]},
      { from: 3, to: 4,sideOrigin:"bottom", sideTarget: "top", label: ["prayed to him"] }
    ]
  }
},
{
  id: 44,
  slug: "before-the-war-in-lanka",
  title: "Before the war in Lanka",
  description: "Before the war, the King of Lanka was warned repeatedly to return Sita and avoid the bloodshed. However, he paid no heed to the advise and infact tried to deceive Sita into thinking that Rama was killed. Try to unfold the various events that took place in Lanka before the great battle began.",
  accent: "#ff758f",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-hunter-in-the-forest",
  trivia: `
    <p>Ravana's grandfather was a wise old Rakshasa called Malyavan. He advised Ravana to think again, and look at the terrible Vanara force that had landed on the shores of Lanka. He told Ravana to make peace with his enemy, and not to underestimate him.</p>
    <p>Ravana told him that he was ashamed to hear such talk, and that his grandfather could simply not bear to see his victory.</p>
    <p>The King of Lanka then chose the warriors to guard the city gates — Prahasta was posted at the eastern entrance, Mahashrava and Mahodara at the southern entrance, Indrajit at the west, and Virupaksha at the centre of the city. Ravana himself took the northern gate.</p>
    <p>The Vanaras observed this position from their vantage point on Mount Suvela. Rama then stationed Neela at the east gate, Angada to the south, Hanuman to the west, and Sugreeva, Jambavan and Vibheeshana at the centre of the army, while Lakshmana and he himself faced Ravana at the northern gate.</p>
    <p>Before the war could begin, Rama called Angada and told him to go to Ravana with a message. There were two choices open to him — either he could return Sita and escape with his life, or meet his death at Rama's hands.</p>
    <p>Angada did as he was told, and Ravana seethed with rage. He ordered his Rakshasas to seize and kill him. Two Rakshasas quickly seized Angada, but Angada rose into the air with the two demons still clinging on. When they were quite high up, Angada kicked them and they fell to the ground.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Ravana thought that if he could persuade Sita to yield to him, even at this late stage, Rama would be dejected and heartbroken and would leave Lanka without fighting. He sent for a skilled sorcerer called Vidyut-Jihva, and asked him to prepare a model head resembling Rama's.</p>
    <p>He then went to Ashoka Vana and told Sita that he had slain Rama and his entire Vanara army, and asked her to be his queen consort.</p>
    <p>He then asked the sorcerer to bring the head, which he placed before Sita. It was so lifelike that even Sita was fooled by its illusion and became distraught.</p>
    <p>Just then, some of Ravana's generals came and asked him to come to the council hall as the Vanara army was attacking the city. Ravana could not ignore this and left immediately.</p>
    <p>The illusory head of Rama then went up in smoke, as Ravana's presence was necessary to maintain its appearance. Sita was bewildered and could make nothing of these strange happenings. Then a good Rakshasi called Samara told her about Ravana's wicked plan to deceive her.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "M_L_A___",
      clue: "The grandfather of Ravana, who advised him right before the battle to make peace with his enemy, and to return Sita.",
      answer: "MALYAVAN"
    },
    {
      id: 2,
      pattern: "_N__D_",
      clue: "The Vanara, who went to the King of Lanka, with a final message from Rama to return Sita to him and escape with his life.",
      answer: "ANGADA"
    },
    {
      id: 3,
      pattern: "V_DY_T J_H_A",
      clue: "A skilled sorcerer that Ravana used to build a life like head of Rama, in an attempt to convince Sita that he had been defeated.",
      answer: "VIDYUT JIHVA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "_A_A_A",
      clue: "A Rakshasi who consoled Sita by saying that this was all Ravana's plan to deceive her.",
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
  description: "During deep meditation in the forest, a Pandava prince faces a charging boar and an unexpected challenger as part of a divine test.",
  accent: "#bfdbf7",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-charioteers-in-mahabharatha",
  trivia:`
<p>Krishna, being a great friend of the Pandavas, would visit their home frequently while they were in exile. </p>
<p>During one such visit, Krishna advised Arjuna that he could foresee a great war at the end of the thirteen years. Duryodhana might never give him the kingdom back or even a small share of it. He advised Arjuna to prepare for the worst. </p>
<p>Krishna continued that Arjuna would need powerful weapons to survive the war - since he would be facing the world’s best warriors, like Bhishma, Drona, his son, Ashwatthama, as well as Karna. Each of them would be an obstacle. </p>
<p>As per Krishna's advise, Arjuna went to a dense forest in the Indraneela mountain, and began meditating to Lord Shiva. Years went by. Lord Shiva was aware of Arjuna’s meditation, but he made no move to appear in front of his devotee. </p>
<p>Finally, his consort, Parvati, could resist no further and asked Shiva why he was not going to Arjuna and bestowing his weapon upon him. </p>
<p>"What he asks for is no ordinary weapon." explained Shiva. "I once owned two powerful weapons—the first was the bow Pinaka, which I gave away to King Nimi after I had finished using it, and now all I have is the Pashupatastra—the weapon that Arjuna seeks. If he wants it, he has to prove that he is worthy of it." </p>
<p>Finally, Lord Shiva went down to Earth disguised as a hunter. A wild boar was sent to Arjuna to disturb his meditation. Annoyed with the boar, Arjuna pushed his bow and arrows, took aim and shot the animal dead at the first attempt. When he went near the boar, he was surprised to see another arrow in its body. He had been living alone for a long time and had never seen any sign of a human for the longest time - he wondered if there someone else around there. </p>
<p>Just then, a hunter, who was really Shiva in disguise, appeared and claimed the boar as his kill, saying that he had shot him first. </p>
<p>Arjuna was annoyed. He said that he was one of the best archers in the world - he could shoot arrows blindfolded, and with either hand. How dare this hunter tell him that he shot the boar first? </p>
<p>The exchange of words continued between Arjuna and the hunter, neither of them willing to relent. At last, they decided to fight each other without the use of the bow and arrow. </p>
<p>Eventually, Arjuna understood who he was fighting with. He asked the god for forgiveness. Pleased with Arjuna, Shiva presented him with the Pashupatastra and warned him that it was the most dangerous weapon in the world. He had to use it only if there was no other way out. It must never be used against lesser enemies. </p>
<p>Arjuna took Shiva’s advice and never actually used this weapon. </p>
<p><em>This story is frequently referred to as "Pashupatastra Prapti","Shabarashankara Vilasa", or "Kiratarjuniya".</em></p>
<p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy – Unusual Tales From the Mahabharatha</em></p>
`,

  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__J_N_",
      clue: "The Pandava who was deep in meditation, and got attacked by a great boar that charged at him ferociously.",
      answer: "ARJUNA"
    },
    {
      id: 2,
      pattern: "__K_",
      clue: "The Boar was actually an asura in disguise - what was the name of the asura?",
      answer: "MUKA"
    },
    {
      id: 3,
      pattern: "__I__",
      clue: "At the same time that the Pandava shot his arrow at the boar, so did a hunter. This hunter was actually a god in disguise, and the Pandava challenged him. After finally realising who he was, he bowed down to him. This god gifted him deadly weapons, making him invincible. Who is this god?",
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
      { from: 2, to: 1, sideOrigin: "left", sideTarget: "right", straight: true, label: ["attacked him"] },
      { from: 3, to: 2, sideOrigin: "right", sideTarget: "bottom", straight: true, label: ["shot his arrow","at the boar","at the same time","as the Pandava"] },
      { from: 3, to: 1, sideOrigin: "left", sideTarget: "bottom", straight: true, label: ["tested him"] }
    ]
  }
},
{
  id: 46,
  slug: "the-charioteers-in-mahabharatha",
  title: "The Charioteers in Mahabharatha",
  description: "Below are some of the prominent and notable charioteers from Mahabharatha who have held the reins during the most crucial moments of the epic and saved the day. See if you can identify them.",
  accent: "#47eaff",
  congratsMessage: "Nicely solved! Onto the next puzzle.",
  nextSlug: "the-serpent-darts",
  triviaHeader: "Want to read more about this?",
trivia: `<p>The stories of these charioteers are brilliantly detailed in this thread — highly recommend giving it a read!</p>
<p><a href="https://x.com/i/status/1997712532052869369" target="_blank" style="color:var(--accent-color);">Read the thread here →</a></p>`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "_____N_",
      clue: "The charioteer of Arjuna during the Kurukshetra war. When Arjuna saw Bhishma, Dronacharya, Kripacharya, Shalya, and other familiar faces of his relatives and gurus, his grip on the Gandiva loosened, and he lost his will to fight. His charioteer then commanded him to fulfill his dharma as a warrior by fighting for righteousness, and imparted to him the Bhagavad Gita, clearing all his doubts. His strategic guidance throughout the war was instrumental for the Pandavas success.",
      answer: "KRISHNA",
      size: "wide"
    },

    {
      id: 2,
      pattern: "__A___",
      clue: "The King of Madra who was the charioteer of Karna. When Bhima was about to kill Karna, he reminded him that Karna was Arjuna's target and hence could not be killed by Bhima, thus saving Karna's life. Even after Dushasana's death, he was the one to console Karna and motivate him that he was now Duryodhana's best hope.",
      answer: "SHALYA",
      size: "wide"
    },

    {
      id: 3,
      pattern: "__SH___",
      clue: "The charioteer of Bhima. On the 17th day of war, Bhima came to know that Yudhishthira was defeated by Karna and was wounded so badly that he had to leave the battlefield, and he also couldn't find Arjuna anywhere. He realised that if the worst had happened to them both, the weight of the war, protecting the twins, and avenging Draupadi was all on his shoulders. He suddenly faced a rare but intense low moment, doubting if he could do it. His charioteer then reassured him, first about the absurdity of Yudhishtira and Arjuna dying, and also spoke about Bhima's valour, exploits, and his archery prowess. He listed out the count and range of the number of arrows and weapons they had left, and assured Bhima that they would not run out of arrows even if he were to continously shoot till sunset.",
      answer: "VISHOKA",
      size: "wide"
    },

    {
      id: 4,
      pattern: "___J___",
      clue: "The charioteer and the best friend of King Dhritarashtra. He was blessed with divine vision by Vyasa, and narrated the entire Kurukshetra war to the king in real time. He was also a great counsellor to Dhritarashtra, had repeatedly told him that he was on the side of adharma and was bound to lose.",
      answer: "SANJAYA",
      size: "wide"
    },

    {
      id: 5,
      pattern: "__T_L_",
      clue: "The celestial charioteer of the god Indra, who drove Arjuna's chariot when Arjuna ascended to heaven to obtain divine weapons.",
      answer: "MATALI"
    },

    {
      id: 6,
      pattern: "_R____",
      clue: "The Pandava prince who became the charioteer for Bhumijanya, the prince of Matsya, who had gone to fight the Kauravas. While the young prince was confident about defeating them initially, he felt frightened when he saw the vast army with the mighty warriors - Bhishma, Drona, Duryodhana and Karna, and jumped out of the chariot. The prince caught him and motivated him to fight, and they emerged victorious in the end.",
      answer: "ARJUNA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Krishna 
      2: { x: 2, y: 1 }, //Shalya
      3: { x: 0, y: 2 }, //Vishoka
      4: { x: 2, y: 3 }, //Sanjaya
      5: { x: 0, y: 4 }, //Matali
      6: { x: 2, y: 5 } //Arjuna
    },

    connections: []
  }
},
{
  id: 47,
  slug: "the-serpent-darts",
  title: "The Serpent Darts",
  description: "In the battle of Lanka, fury, illusion, and divine intervention shaped the events that followed. Try to identify the characters involved.",
  accent: "#fda3a6",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-teacher-of-sankhya",
  trivia: `
    <p>In the battle of Lanka, when Angada killed Indrajit's charioteer and horses, and smashed his chariot – Indrajit lost his temper and began showering poisonous darts upon Rama and Lakshmana.</p>
    <p>These magic darts bound Rama and Lakshmana and rendered them quite helpless. They could not move or even talk. The Vanaras were distraught and confused and gathered around them.</p>
    <p>Meanwhile, Indrajit had gone to Ravana and reported that he had killed Rama and Lakshmana. Ravana was extremely happy, and sent for some rakshasis and told them to inform Sita of the matter. He ordered them to take her in the Pushpaka Vimana and show her their bodies, so that she would have no choice but to become his wife.</p>
    <p>As per his instructions, they took Sita in the aerial chariot over the battlefield. When she saw Rama and Lakshmana lying helpless with arrows sticking out from all over their bodies, she buried her face in her hands and wept.</p>
    <p>Then the rakshasi Trijata patted her on the back and told her to take a closer look at Rama and Lakshmana. Their faces were still glowing divinely — they were not dead. Trijata told her not to lose hope, and that they would definitely bring death to Ravana.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>While Rama and Lakshmana were lying helpless, the ocean suddenly rose with a deafening roar. The winds were stirred up. In the midst of the battlefield, alighted Garuda — the King of birds. As soon as he arrived, the serpent darts left Rama and Lakshmana and fled. They stood no chance against their sworn enemy.</p>
    <p>Garuda then gently stroked the unconscious brothers, and they soon sat up with renewed strength and vigour in their bodies. Rama was unaware that he was Lord Vishnu and that Garuda was his vehicle. Garuda smiled slightly and told him that he was an old friend of his, and that they would meet again when the war was over.</p>
    <p>With one graceful movement, Garuda rose up into the sky.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "A___D_",
      clue: "Name the Vanara who killed the charioteer, horses and smashed the chariot of the son of Lanka's king.",
      answer: "ANGADA"
    },
    {
      id: 2,
      pattern: "__D__J__",
      clue: "Losing his temper because of this, the prince of Lanka started shooting poisonous darts on the two princes of Ayodhya. Who was this prince?",
      answer: "INDRAJIT"
    },
    {
      id: 3,
      pattern: "___J___",
      clue: "When the two princes lost their consciousness, Sita was taken on the Pushpaka Vimana to see them. A Rakshasi assured her that they were not really dead - who is she?",
      answer: "TRIJATA"
    },
    {
      id: 4,
      pattern: "___U__",
      clue: "The King of birds, who came to the princes aid. With his arrival, the serpent darts fled as they stood no chance against their sworn enemy.",
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
      { from: 1, to: 2, sideOrigin:"right", sideTarget: "left", label: ["attacked his chariot"] }
    ]
  }
},
{
  id: 48,
  slug: "the-teacher-of-sankhya",
  title: "The Teacher of Sankhya",
  description: "This is the story of one of the greatest teachers of philosophy. Identify the characters if you can.",
  accent: "#8ecae6",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-mother-of-devas-and-daityas",
  trivia: `
    <p>Kardama was a great sage who did penance on the banks of River Saraswati for many years. After many years, Lord Vishnu appeared to him and granted him a boon that, on the third day from that day – Manu would come there and offer his daughter in marriage. And that he would have nine daughters, and finally one son – who would be none other than Vishnu. And then he would finally spend the rest of his days in meditation, till he finally saw <em>him</em> alone in the entire universe and the entire universe in <em>him.</em></p>
    <p>As predicted, on that day – Manu passed by his hermitage, alighted his chariot, and said that he had come to offer him his daughter, Devahuti in marriage as directed by sage Narada.</p>
    <p>Kardama was charmed by Devahuti, and she too, liked the sage at the very first sight. He accepted her on the condition that once a son was born to them, he would go away and perform penance for self-realization.</p>
    <p>For a number of years, they lived a hard life of penance and sacrifice. After many years of penance, nine girls were born to them, and eventually, the Lord himself was born in the world as Kapila.</p>
    <p>Amidst the rejoicing, Kardama gave his nine daughters in marriage to the nine Prajapatis, and then left the ashrama and became a monk.</p>
    <p>Kapila soon became a divine teacher and sage, and is the founder of the Sankhya philosophy. One day, Devahuti approached her son and asked him to teach her how to gain freedom from birth and death.</p>
    <p>Kapila told her that first and foremost, one must have a pure heart and a loving devotion for God. He told her about God's play in the universe as Purusha and Prakriti, the three modes of the mind, and yoga and meditation.</p>
    <p>While teaching her about divine love, he told her about <em>tamasic</em> devotion, <em>rajasic</em> devotion, and <em>sattwik</em> devotion.</p>
    <p>He told her about the duties of life, and that one must see the Lord in all creatures, and about how one could reach <em>him.</em></p>
    <p>Devahuti followed her son's teachings faithfully, and eventually discovered the Lord of the universe – seated within her own heart.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "One of the daughters of the above characters who was married to a Rishi named Kardama.",
      answer: "DEVAHUTI",
      size: "wide"
    },
    {
      id: 3,
      pattern: "K___L_",
      clue: "Lord Vishnu's incarnation, born to the above couple. He became famous as a divine teacher and is the founder as the Sankhya philosophy. When he is born, Kardama departed the ashrama to do greater penance. This boy, also taught his mother how to gain freedom from the cycle of birth and death. It is said that he went to the Himalayas, and still meditates there and prays for the world. Name this incarnation of Lord Vishnu.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top", label: ["daughter"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["son"] }
    ]
  }
},
{
  id: 49,
  slug: "the-mother-of-devas-and-daityas",
  title: "The Mothers of Devas and Daityas",
  description: "From the daughters of Daksha come two lineages - the devas and the daitya. Identify the characters if you can.",
  accent: "#cdb4db",
  congratsMessage: "You identified the lineage from Kashyapa to the mighty Daityas. Well done and try your luck with the next puzzle!",
  nextSlug: "the-fall-of-ravanas-generals",
  trivia: `
    <p>During Sandhya time, Rishi Kashyapa had been finishing his worship. At that moment, Diti (the daughter of Daksha), approached him and asked him to satisfy her desire. He requested her to wait for an hour, as that was the time of the day when Rudra roamed about with his retinue of Pisachas. He said that that was the hour where they must keep their minds pure and show him due respect by meditating on him.</p>
    <p>But Diti would not listen to him, and Kashyapa obliged her.</p>
    <p>Later on, Kashyapa said that two sons would be born to her – both of whom would be extremely wicked – and when the three worlds could no longer bear their deeds, the Lord himself would come and destroy them.</p>
    <p>Diti, struck with remorse, keeps her sons in her womb for a hundred years, knowing that they would be a trouble to everyone.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "K___Y___",
      clue: "A sage, who is the son of Marichi (who is the son of Brahma). He was married to the many daughters of Daksha.",
      answer: "KASHYAPA"
    },
    {
      id: 2,
      pattern: "A_I__",
      clue: "One of the daughters of Daksha who is married to him. She became the mother of Devas - including Surya and Indra. Name her.",
      answer: "ADITI"
    },
    {
      id: 3,
      pattern: "D_T_",
      clue: "One of the daughters of Daksha who was married to him. Once, during Sandhya time, when her husband was about to sit down and meditate, she became consumed by desire and asked him to satisfy it. Subsequently, she gave birth to two sons who were both extremely wicked (to prevent this, she kept them in her womb for a hundred years, knowing that they would be a trouble to the Devas and the Rishis). She is the mother of Daityas.",
      answer: "DITI",
      size: "wide"
    },
    {
      id: 4,
      pattern: "H___N______",
      clue: "Name the son of the above who tried to submerge the earth into the ocean.",
      answer: "HIRANYAKSHA",
      size: "wide"
    },
    {
      id: 5,
      pattern: "H___N____S___",
      clue: "Name the son of the above who sought a boon from Brahma that he cannot die at the hands of a man or a god, neither during day nor night, neither indoors and outdoors, neither in the earth nor in the sky.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top" },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top" },
      { from: 3, to: 4, sideOrigin: "bottom", sideTarget: "top", straight: true, label:["son"] },
      { from: 3, to: 5, sideOrigin: "bottom", sideTarget: "top", straight: true, label:["son"] }
    ]
  }
},

{
  id: 50,
  slug: "the-fall-of-ravanas-generals",
  title: "The Fall of Ravana's Generals",
  description: "One by one, Ravana sent his commanders into battle — and one by one they fell to the Vanara warriors. Try to identify the warriors in this story.",
  accent: "#ff686b",
  congratsMessage: "You followed the fall of each of Ravana’s commanders. On to the next puzzle!",
  nextSlug: "the-sage-who-regained-his-youth",
  trivia: `
    <p>Ravana called to him a very fierce Rakshasa called Dhoomaraksha. He told him to lead his army against the Vanaras and kill them. Dhoomaraksha was happy to be chosen by his King, and led the army to the western gate and fought a grim battle with Hanuman and his Vanaras. Many were slain on either side. Then finally, Hanuman uprooted a huge tree and swinging it around, brought it crashing down on the head of Dhoomaraksha.</p>
    <p>Ravana was extremely agitated and next sent for Vajradumshtra, ordering him to lead the battle on the Rakshasa side. Vajradumshtra, who was huge and terrible to look at, led the ugliest and strongest Rakshasas towards the southern entrance. Here, the Vanaras were led by Angada. A terrible fight followed, where the Vanaras' rocks, boulders and trees were met by the Rakshasas' spears, clubs and maces. Finally, Angada killed the Rakshasa general.</p>
    <p>Ravana began to grow alarmed as each of his brave warriors fell, but was still stubborn and determined not to bow down before Rama. His commander-in-chief, Prahasta, told him that all this trouble could have been avoided if they had returned Sita to Rama at the very beginning.</p>
    <p>Nevertheless, Prahasta himself led the Rakshasas in battle and marched out of the southern gate. The Vanaras were eager for the fight, and a terrible battle ensued. Prahasta and Neela fought a deadly duel. Prahasta raised an iron mace to strike Neela, and Neela lifted a massive boulder and brought it crashing down, shattering Prahasta's head.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "The Vanara who killed him by uprooting a tree and crashing it on the head of the Rakshasa.",
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
      clue: "The Vaanara who killed him.",
      answer: "ANGADA"
    },
    {
      id: 5,
      pattern: "_R_H___A",
      clue: "The commander-in-chief of Ravana. He told Ravana that all this could have been avoided if they had returned Sita to Rama, nevertheless - he marched out of the southern gate to fight.",
      answer: "PRAHASTA"
    },
    {
      id: 6,
      pattern: "_EE__",
      clue: "The Vanara who killed him by smashing a boulder on his head.",
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
      { from: 1, to: 2, sideOrigin:"right", sideTarget: "left", straight: true, label: ["killed by"] },
      { from: 3, to: 4, sideOrigin:"right", sideTarget: "left", straight: true, label: ["killed by"] },
      { from: 5, to: 6, sideOrigin:"right", sideTarget: "left", straight: true, label: ["killed by"] }
    ]
  }
},
{
  id: 51,
  slug: "the-sage-who-regained-his-youth",
  title: "The Sage Who Regained His Youth",
  description: "A mistake in the forest leads to a marriage, divine intervention, and a confrontation with the king of the gods. Identify the characters involved.",
  accent: "#84ff00",
  congratsMessage: "From Sukanya’s devotion to Chyavana’s restored youth — well solved. On to the next puzzle!",
  nextSlug: "the-many-names-of-the-archer",
  trivia: `
    <p>Once, King Sharyati and his daughter Sukanya went into the forest for an outing along with their attendants. There, they came across the ashrama of Rishi Chyavana. There was a peaceful atmosphere all around them, and everyone wandered about, enjoying themselves.</p>
    <p>While Sukanya and her friends were playing in the forest garden, she suddenly spotted two streaks of light emerging from within an ant-hill. Childishly, she picked up a thorn and poked at it, thinking that they were glow worms. But she was alarmed beyond measure when blood started oozing out. (These were actually the eyes of the Rishi.)</p>
    <p>At the same time, ill omens began appearing, and the King immediately guessed that some harm had been done to the Rishi. His daughter came up and admitted what she had done. The King was very agitated and went in search of the Rishi, and finally found him under the mound of earth.</p>
    <p>He touched the feet of Chyavana, and begged his pardon for his daughter's childish conduct. He also offered to give him Sukanya in marriage.</p>
    <p>Now Sukanya was extremely sorry for what she had done, and had learnt the lesson to never again be so extremely playful. She served the sage very faithfully.</p>
    <p>One day, the Ashwini Kumaras arrived at Chyavana's hermitage. They were celestial physicians who knew the secret of eternal youth. Chyavana – who was old, bent, and wrinkled, requested the Ashwini Kumaras to give him back his youth and strength, and offered to give them in return – a cup of <em>soma</em> juice at the sacrificial offerings. The Ashwini Kumaras agreed, because so far – they had been denied a share of these offerings.</p>
    <p>They took the sage to a tank, and then all three of them plunged in. When they came out, they all looked identical – youthful with extraordinary vigor and beauty. When she saw them, Princess Sukanya was utterly confused. Since she could not call out to her husband by name, she appealed to the Ashwini Kumaras to reveal themselves to her. Pleased, they pointed out the Rishi to her, and then sped back to the heavens on their aerial chariot.</p>
    <p>Later, when Chyavana offered some of the <em>soma</em> juice to the Ashwini Kumaras, Indra was so angered by this that he picked up his Vajra to hurl it down at the Rishi. But Chyavana had gained much ascetic power and merit through his rigorous penance, and he paralyzed the hands of Indra. The Devas pleaded with him to restore the hands of their King, and promised that the Ashwini Kumaras would get their share of offerings in all sacrifices, for all times to come.</p>
    <p>And that is how it came about that both the Ashwini Kumaras and Rishi Chyavana were able to fulfil their parts in the agreement.</p>
    <p style="margin-top:20px;  font-style:italic;">✦ Fun Fact — The Ashwini Kumaras had also given a herbal mix to the sage to make him regain his youth – and this led to the coining of the word "Chyavanaprash", which is a concoction of herbs, spices, jams and oils that is eaten by many people even today.✦</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "C______A",
      clue: "A King called Sharyati, along with his daughter and their attendants, went into the forest for an outing and came across the ashrama of a Rishi. Name this Rishi.",
      answer: "CHYAVANA"
    },
    {
      id: 2,
      pattern: "S_K___A",
      clue: "The daughter of this King. She spotted two glowing lights from an ant-hill and childishly poked them. After this, some bad omens occured, by which her father realised that some harm must have been done to the Rishi. He realised that his daughter had unknowingly harmed the Rishi and asked him for forgiveness. He also offered his daughter in marriage to the Rishi. After that, she served the sage very sincerely - name this princess.",
      answer: "SUKANYA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "A_____I K_____S",
      clue: "Two twin gods, the divine physicians, who visited this Ashrama. The Rishi asked them to give him back his youth and strength, and in return offered to give them soma juice at the sacrificial offerings.",
      answer: "ASHWINI KUMARAS",
      size: "wide"
    },
    {
      id: 4,
      pattern: "I____",
      clue: "When these offerings were made, one god was very angry and picked up his Vajra to hurl it at the Rishi. However, his hands got paralysed. Name this god.",
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
      { from: 2, to: 1, sideOrigin: "top", sideTarget: "bottom", straight: true,label: ["married him"] },
      { from: 3, to: 1, sideOrigin: "top", sideTarget: "left", straight: true, label: ["restored","his youth"] },
      { from: 4, to: 1, sideOrigin: "top", sideTarget: "right", straight: true, label: ["tried to", "strike him"] }
    ]
  }
}, 
{
  id: 52,
  slug: "the-many-names-of-the-archer",
  title: "The Many Names of the Archer",
  description: "A legendary warrior who was known by many names — each earned through birth, virtue, skill, or deed. Find out how many of them you know.",
  accent: "#9bf6ff",
  congratsMessage: "You identified the many names of the great archer. Well done! Onward to the next puzzle!",
  nextSlug: "a-glimpse-of-creation",
  trivia: `
    <p>Arjuna was the third of the Pandava brothers, and a supremely talented archer. Even as a child, Arjuna was an excellent archer compared to the others – including the Kauravas and his own brothers. His teacher, Drona was very fond of him.</p>
    <p>One night in the gurukula, the candles went out because of heavy winds. Suddenly, Arjuna woke up, hearing a noise in the kitchen. He went to check the source of disturbance, and found his brother Bhima gobbling up some food.</p>
    <p>Arjuna was baffled and asked him how he was eating there when there was no light.</p>
    <p>Bhima replied that if he practiced anything hard enough, it could be done at any time – be it dark or light. Bhima added that he practiced eating everyday and could therefore eat at any time he wanted.</p>
    <p>Realizing that there was great truth in Bhima's words, Arjuna started practicing archery even at night – until he became perfect at shooting in the dark. He also trained both his hands to handle the bow and arrow with equal ease and dexterity, and hence came to be known as <em>Savyasachi</em>, the ambidextrous one.</p>
    <p>He was given the name <em>Phalguna</em>, as he was born on a Himalayan peak in the Uttara Phalguni nakshatra.</p>
    <p>Being the son of Indra and difficult to be conquered, he came to be known as <em>Jishnu</em> (vanquishing) in the world of men and gods.</p>
    <p>While fighting the danavas, Indra placed a crown as radiant as the sun on Arjuna's head, making him known as <em>Kiriti</em>.</p>
    <p>When he fought on the battlefield, his chariot was yoked with white horses covered in golden armour, because of which he got called <em>Shwetavahana</em>.</p>
    <p>Never did he indulge in any loathsome or cruel action, not even on the battlefield. Thus, he came to be known as <em>Bibhatsu</em>. (Bhibhatsa means loathsome/cruel)</p>
    <p>Having never returned from a battlefield without defeating the enemy, he was called <em>Vijaya</em>.</p>
    <p><em>Krishna</em> was the name given by his father Pandu, out of love for this son with a resplendent dark complexion, and a heart that attracted one towards him.</p>
    <p>Having won over various janapadas, during the campaigns for Rajasuya, he acquired a lot of treasure from them, and hence the name <em>Dhananjaya</em> was given to him. (Dhana refers to wealth, and jaya indicates the one who had won)</p>
    <p><em>Partha</em> and <em>Kaunteya</em> were two other names that he was known by, as he was the son of Kunti (Pritha), who was the sister of Vasudeva. He was also known as <em>Gudakesha</em> - the one with thick and lovely hair.</p>
    <p>Because of his dynamic and superior persona, Arjuna was popularly referred to as <em>Bharata</em>, because his subjects often felt that they got a glimpse of his ancestor Bharata when they looked at him.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
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
      clue: "This name was given to him as he was the son of Indra and difficult to conquer.",
      answer: "JISHNU"
    },
    {
      id: 4,
      pattern: "__R_T_",
      clue: "While fighting the Danavas, Indra placed a crown as radiant as the sun on his head, because of which he received this name.",
      answer: "KIRITI"
    },
    {
      id: 5,
      pattern: "SH__T_V_____",
      clue: "The name he got because his chariot was yoked by white horses on the battlefield.",
      answer: "SHWETAVAHANA",
      size: "wide"
    },
    {
      id: 6,
      pattern: "__B__T__",
      clue: "The name he received because he had never indulged in any loathsome or cruel action, not even on the battlefield.",
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
    }
  }
}, 
{
  id: 53,
  slug: "a-glimpse-of-creation",
  title: "A Glimpse of Creation",
  description: "The complaint of a child reveals a cosmic truth hidden within a playful moment. Identify the characters in this story.",
  accent: "#ffd6a5",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "awakening-of-the-rakshasa",
  trivia: `
    <p>One day, Balarama and a few other little boys complained to Yashoda that Krishna had swallowed handfuls of mud, so she scolded him for it. But he only looked at her innocently with his big black eyes and said — "Mother, I? Swallow mud? That's not true. You may examine my mouth, if you think I am lying."</p>
    <p>Yashoda instructed him to open it, and he opened his mouth wide. Yashoda was dazed – in it, she saw the whole of creation!</p>
    <p>She bowed her head before the Lord and said — "If you are indeed the absolute Brahman, then my salutations to you. For it is only by Your <em>maya</em>, that I appear as Yashoda, and this child as my son."</p>
    <p>Then slowly, her mind came back from this supreme revelation to her world in Gokula. She picked up Krishna and kissed him tenderly.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__L_R___",
      clue: "A young boy who complained to his mother that his younger brother was eating mud.",
      answer: "BALARAMA"
    },
    {
      id: 2,
      pattern: "__I____",
      clue: "The younger brother who denied that he had done such a thing. He told his mother that she could look into his mouth and see for herself if he was lying.",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "__S__D_",
      clue: "The boys mother, who looked into his mouth, and saw the whole creation in it.",
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
      { from: 1, to: 2, sideOrigin:"right", sideTarget: "left", label: ["complained about him"] },
      { from: 3, to: 2, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["looked into his mouth"] }
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
  trivia: `
    <p>When Rama and Ravana came face to face with each other for the first time in Lanka, they fought a very fierce duel. Rama was placed by Hanuman on his shoulder.</p>
    <p>The Devas watched the battle anxiously. At the end of the day, Rama had knocked off Ravana's crown, broken his chariot, and destroyed all his weapons. Bedraggled and harassed, Ravana stood before Rama.</p>
    <p>Rama looked at him kindly and told him to come back the next day with fresh weapons, and that he had fought well that day. He was always just and fair, even to his deadliest enemy.</p>
    <p>Ravana went back to his palace, ashamed and anxious. Nobody until then had ever defeated him in battle. He sat down and thought dejectedly of the events of the war, and finally decided to wake up his sleeping brother — Kumbhakarna.</p>
    <p>Kumbhakarna was a giant among giants and dreadful to behold. He was under a curse to sleep for six months of the year, and was now in one of his periods of sleep. But Ravana knew that only Kumbhakarna's strength could now save Lanka from utter ruin.</p>
    <p>He gave orders for Kumbhakarna to be woken up, and the Rakshasas stood near him and beat loud drums and sounded trumpets in his ears. But Kumbhakarna continued snoring.</p>
    <p>Elephants were then brought to tread upon him. After a long time, he yawned and woke up. As soon as he got up, he began gobbling up whatever he could find.</p>
    <p>When he was satisfied to some extent, he roared at the Rakshasas about why he had been woken up from his slumber. One of Ravana's ministers gave him a picture of the war that was taking place, and told him that Ravana had ordered for him to be woken up.</p>
    <p>Kumbhakarna then rose like a huge mountain and walked towards Ravana's assembly. The earth trembled with every step, and the Rakshasas felt encouraged when they saw his mighty form.</p>
    <p>Ravana told Kumbhakarna about how grave the situation had become. Kumbhakarna, after listening to the story, rebuked his brother for his shameful act of stealing Rama's wife, but nevertheless agreed to help him.</p>
    <p>Ravana blessed him and decked him with the finest garments and jewels. Kumbhakarna strode out like a gigantic mountain, with the gems sparkling on him like many little torches.</p>
    <p>He marched upon the Vanaras and kept picking them up and swallowing them. The Vanaras hurled huge hills and uprooted trees at him, but he merely laughed. Angada, Sugreeva and Neela were knocked unconscious.</p>
    <p>Upon seeing the Vanara king fall, Kumbhakarna was so happy that he lifted him upon his head and paraded through the streets of Lanka. Sugreeva soon regained consciousness, and tore Kumbhakarna's ears and nose with his sharp nails.</p>
    <p>Kumbhakarna was annoyed beyond measure and wounded Hanuman next. Then Lakshmana came forward to fight him. Kumbhakarna brushed him aside and said that he would only fight Rama. He somehow sensed that his end was near and wanted to meet his death at Rama's hand.</p>
    <p>Rama and Kumbhakarna fought for a long time, and Rama used his divine astras one by one to cut off the Rakshasa's hands and legs. But he fought on bravely. Finally, Rama aimed a powerful arrow and severed his head.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 220,

  nodes: [
    {
      id: 1,
      pattern: "___B__K____",
      clue: "The younger brother of the king of Lanka. Upon the kings orders, he was woken up with loud drums and trumpets being blown near his ears and elephants which were brought to tread on him. (He had a curse because of which he slept for six months a year)",
      answer: "KUMBHAKARNA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "__G____",
      clue: "The Vanara king, who tore off this Rakshasa's ears and nose with his sharp nails.",
      answer: "SUGRIVA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Kumbhakarna
      2: { x: 2, y: 0 } //Sugriva
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true,label: ["tore off his ears and nose"] }
    ]
  }
}, 
{
  id: 55,
  slug: "the-twin-trees",
  title: "The Twin Trees",
  description: "A mischievous child tied to a mortar dragged it between two trees, which resulted in the liberation of some divine beings who were under a curse. Try to identify the characters involved.",
  accent: "#d1ff99",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-chariot-from-the-heavens",
  trivia: `
    <p>One day, little Krishna, tired and hungry from his deeds of mischief, toddled up to his mother. He climbed on to her lap and asked to be fed. Yashoda smiled at him and gave him his feed, but at that moment – the milk on the fire caught her eye, as it was about to boil over.</p>
    <p>She put the baby down hastily and hurried over to the fire. Krishna, annoyed at this, broke the mud-pot containing the curds. Then he ran to a quiet corner and feasted on the butter.</p>
    <p>Yashoda came back a few minutes later to find the pot broken. She looked around for the culprit, and finally found him in the courtyard, feeding monkeys.</p>
    <p>She then decided to punish him by tying him to the mortar. But the rope she got fell short by two inches. So she ran into the house to get another length of rope. This time it looked long enough, but again fell short. Exasperated, she went and borrowed some rope from her neighbours, but no matter how many pieces she joined together, it always fell short by two inches.</p>
    <p>She could not understand what was happening, and looked at him in utter despair. Then Krishna, who knew her thoughts, and knowing that she could not take any more teasing, allowed himself to be bound.</p>
    <p><em>This is the way the Lord plays with those who love Him. It is an endless game of "catch me if you can". Nobody can, but ultimately, He yields to the will of the sincere devotee and allows Himself to be bound, not by ropes and chains, but by the very nature of their all-consuming, overpowering love for Him!</em></p>
    <p>Meanwhile, while Krishna was tied up to the mortar, he was itching to do something naughty. Suddenly, his eye caught sight of two <em>arjuna</em> trees, standing side by side. So he stood up and waddled up to them with the mortar dragging heavily behind.</p>
    <p>Then, the mortar got wedged between the trees and Krishna gave a hard pull to get himself free. Both trees came crashing down!</p>
    <p>Then, two shining beings flew out. They bowed before Krishna and sang hymns in his praise. These two heavenly beings were the sons of Kubera, the god of wealth. They had been cursed by Narada, who had told them that they would remain imprisoned in the <em>arjuna</em> trees until a time when Krishna would come and liberate them.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_R_____",
      clue: "A baby boy who constantly performed deeds of mischief and loves milk, curds, and butter.",
      answer: "KRISHNA"
    },
    {
      id: 2,
      pattern: "__S____",
      clue: "The mother of this boy. One day, she found her pot of butter broken, and to punish her son, tied him to a mortar.",
      answer: "YASHODA"
    },
    {
      id: 3,
      pattern: "__J_N_ TREES",
      clue: "The boy caught sight of two trees side by side. He waddled up to them, with the mortar dragging heavily behind. The mortar got wedged between the trees, so he gave a hard pull, which resulted in both the trees crashing down. Name these trees.",
      answer: ["ARJUNA", "ARJUNA TREES"],
      size: "wide"
    },
    {
      id: 4,
      pattern: "__B___",
      clue: "From these trees,two heavenly beings emerged. They were the sons of a god. Who is this God? (hint: the god of wealth)",
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
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["tied him to a mortar"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["pulled them down"] },
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["were the sons of"] }
    ]
  }
},
{
  id: 56,
  slug: "the-chariot-from-the-heavens",
  title: "The Chariot from the Heavens",
  description: "When the battle against the king of Lanka reached its fiercest moment, help arrived from the heavens.",
  accent: "#f0ff19",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "divine-play-divine-lessons",
  trivia: `
    <p>On the final day, a terrible battle ensued between Rama and Ravana – never before had such equals met. The Devas and Gandharvas watched with bated breath. Ravana looked extremely fearsome and his eyes were bloodshot.</p>
    <p>Admiration, mingled with wrath for each other, grew as Rama and Ravana let go of divine astras, each of which was more potent than the previous.</p>
    <p>The waters of the seven seas were stilled, the wind stopped and the sun became dark. Ill omens for Ravana sounded everywhere — he did not heed them and fought on.</p>
    <p>Rama cut off one of Ravana's heads after the other — but the strangest thing happened. As he cut off one head, another came up in its place. Each head became more fearsome than the previous one. Rama was baffled and Ravana laughed hideously as he watched Rama's growing confusion.</p>
    <p>Indra sensed Rama's distress and sent down his own divine chariot and charioteer, Maatali, to help him. Rama bowed gratefully to the gods and ascended the chariot. The battle grew thick and fierce. Rama and Ravana were both wounded. Rama wounded every limb of Ravana's, but the Rakshasa still fought bravely. Streams of blood flowed from his body, and Ravana's hour was fast approaching.</p>
    <p>Maatali then whispered in Rama's ear that the time had come to use Agastya's astra. Ravana's time was up.</p>
    <p>Rama fixed the divine astra that Agastya had presented to him, and took aim at Ravana's chest. With a snake-like hiss, the astra darted forth and pierced Ravana's chest. Ravana's bow slid from his hand, and with a crash that shook the three worlds, he fell.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "The prince who was trying to defeat this Rakshasa, but everytime he severed one of his heads, another would takes its place, to his bewilderment.",
      answer: "RAMA"
    },
    {
      id: 3,
      pattern: "I____",
      clue: "The King of Gods, who sensed this prince's distress and sent down his own divine chariot to him.",
      answer: "INDRA"
    },
    {
      id: 4,
      pattern: "M____I",
      clue: "The charioteer of this God, who was now steering the prince.",
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
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["severed his heads"] },
      { from: 3, to: 2, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["sent his chariot"] },
      { from: 3, to: 4, sideOrigin:"right", sideTarget:"left", straight:true, label: ["his charioteer"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true,label: ["steered his chariot"] }
    ]
  }
},
{
  id: 57,
  slug: "divine-play-divine-lessons",
  title: "Divine play, Divine Lessons",
  description: "A variety of events unfolded during Krishna's childhood with lessons being taught to various characters. See if you can identify them.",
  accent: "#a0e7e5",
  congratsMessage: "You've identified some of the major events connected to Vrindavana. Well done! Onward to the next puzzle!",
  nextSlug: "the-vision-of-the-war",
  trivia: `
    <p style="margin-top:20px; font-size:20px; font-style:italic; color:#aaa;">✦ Brahma's Moha Bhangam ✦</p>

    <p>Lord Brahma, who had witnessed Krishna's tricks and his extraordinary prowess, felt a longing to experience Krishna's powers for himself. Therefore, in a moment of mischief, he hid all the calves in a mountain cave. Krishna searched high and low, in the forests, hills and the valleys. But he could not find any trace of the calves.</p>
    <p>He returned to the river bank to report the matter to the gopas, and to his utter astonishment, found the gopas missing too! He meditated deeply and then came to know that it was all the trick of Lord Brahma to test his divinity. He smiled and decided to please Brahma, while also give an infinite experience of bliss to the mothers of the gopas and to the cows.</p>
    <p>So he multiplied himself and assumed the forms of the gopas and their calves. He assumed their exact size, the exact number of hands and feet, holding an equal number of staves, horns and flutes, wearing the same clothes — and then, He, in his different forms, copied to the last detail their individual behaviours, qualities, names, appearances, ages, voices, and even their characteristic movements.</p>
    <p>When it was dusk, Krishna and all the Krishna-gopas and the Krishna-calves made their way back to their homes. When the mothers heard the sound of the flutes and the horns, they came running out to embrace their children. They hugged the boys and fed them with tremendous joy. The cows too showed more tenderness towards their calves. Vrindavana was bathed in ecstatic love.</p>
    <p>And thus passed the days till almost a year was over. Meanwhile, Lord Brahma became curious to see how Krishna had met the tricky situation he had put him into. He mounted his swan and went to see. He was puzzled to see two sets of gopas and calves – one set which he had imprisoned, and another set which were carrying on as usual in the forest.</p>
    <p>Brahma was dazed and confused. Suddenly, the haze before his eyes lifted, and he saw the gopas and the calves assuming the dark complexion of Lord Krishna. He saw all of them in the form of Sri Vishnu — four-armed, and holding the divine conch, discus, mace and lotus.</p>
    <p>Brahma alighted from his swan and prostrated before Krishna. He rose and offered praise to the Lord. Brahma went thrice around Krishna, and mounted his swan and disappeared. Along with him also disappeared the Krishna-gopas and the Krishna-calves.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p style="margin-top:20px; font-size:20px; font-style:italic; color:#aaa;">✦ Indra Yagna Bhangam ✦</p>

    <p>The rainy season was drawing near, and in Vraja, there were great preparations for a Yagna going on. Krishna approached his father and asked him what the Yagna was about, and in whose honour the sacrifice was happening.</p>
    <p>Nanda then told him that Indra was the god of clouds and rain, and since rain gives life to all beings, Indra was to be worshipped.</p>
    <p>Krishna then asked him why they were talking about thanking Indra — since the birth and death of men were pre-ordained according to their karma. And since they lived in the forests, the cows were their means of livelihood and their wealth. Therefore, he suggested worshipping them and the Govardhana Mountain instead.</p>
    <p>Nanda and the others thought that this was an excellent suggestion — so Indra did not get his usual worship. It was the cows and the Govardhana which received the adoration of the people of Vraja.</p>
    <p>Indra became terribly jealous and angry, and decided to take revenge. He sent forth clouds and winds which were generally kept in reserve for <em>mahapralaya.</em> He instructed them to wreak havoc on Vrindavana, and destroy the land and people completely.</p>
    <p>The clouds were released and there was thunder and lightning the like of which had never been seen on earth. Rain poured down in continuous sheets and there were hailstorms. Water flooded into every house and cow-shed. People were in great distress.</p>
    <p>At last, the gopis took their babies to Krishna and pleaded with him to save them from the anger of Indra. Krishna was moved when he saw their plight, and lifted Govardhana with one hand, and called all the people to take shelter under it.</p>
    <p>For seven days it rained without stopping, and for seven days Krishna held the mountain aloft while the people took refuge under it.</p>
    <p>Indra eventually realised how futile his anger and jealousy were, and became ashamed. He withdrew the clouds and the wind. He approached the Lord and prostrated before him. He touched his feet and begged his pardon.</p>
    <p>Krishna then told him that all this had been done to break his pride, and that he takes away the powers of those whom he wants to favour. He instructed him to go forth and perform his duties faithfully.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "V_I___V___",
      clue: "Since a multitude of Rakshasa's kept coming to Gokula to attack Krishna, the village elders decided that they would all move to a different place. Name the forest which they moved into.",
      answer: "VRINDAVANA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "__M___",
      clue: "Name the river which flowed by close to this forest.",
      answer: "YAMUNA"
    },
    {
      id: 3,
      pattern: "_R__M_",
      clue: "A God who decided to witness Krishna's tricks and extraordinary strength. He hid all the calves and the gopa boys in a mountain cave to see what Krishna would do. In response, Krishna multiplied himself and took the forms of each of them. Name the God who played this trick.",
      answer: "BRAHMA"
    },
    {
      id: 4,
      pattern: "_N___",
      clue: "A God who was taught a lesson and his pride was broken when Krishna told the people of Vrindavan to worship the Govardhana mountain instead of him.",
      answer: "INDRA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Vrindavana
      2: { x: 2, y: 0 }, //Yamuna
      3: { x: 0, y: 1 }, //Brahma
      4: { x: 2, y: 1 } //Indra
    }
  }
},
{
  id: 58,
  slug: "the-vision-of-the-war",
  title: "The Vision of the War",
  description: "The king of Hastinapura refuses divine sight but still wishes to hear every moment of the great battle. Go ahead and identify the characters below.",
  accent: "#caffbf",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-curse-of-the-hermit-boys-parents",
  trivia: `
    <p>Before the war began, Vyasa went to see Dhritarashtra and offered him <em>Divya Drishti</em>—the divine sight, to see the war. But Dhritarashtra declined as he didn't wish to see the war - but he still wanted to know all that had transpired on the battlefield. So, Veda Vyasa gave the vision to Sanjaya instead. Sanjaya would be able to see and hear everything that was happening. Vyasa said that Sanjaya would also be able to know the thoughts of the warriors, and no weapon would kill him, nor would exhaustion take over him.</p>
    <p>The first verse of the Bhagavad Gita is a question from Dhritarashtra. He asked – "What did my and Pandu's sons, who had gathered in Kurukshetra, there desirous of the war, do?"</p>
    <p>On the seventeenth day of war, Sanjaya fell into the hands of the opponents and would have died if Veda Vyasa had not intervened and ensured his release. That day, the Pandava army was in high spirits and thrashed everyone and everything that came in its way. Sanjaya was out in the field along with Kripacharya, when Dhrishtadyumna attacked them. Sanjaya managed to escape Dhrishtadyumna but fell into the hands of Satyaki. The Yadava warrior captured him alive and was planning to kill him, but Vyasa appeared and stopped him.</p>
    <p>On the eighteenth morning, Sanjaya saw Duryodhana just before he entered the Dwaipayana pool, and the two even had a conversation. Then again, Sanjaya met Duryodhana one last time after he was defeated by Bheema. With the death of Duryodhana, Sanjay lost the <em>Divya Drishti</em>.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
  rowHeight: 330,

  nodes: [
    {
      id: 1,
      pattern: "V_A_A",
      clue: "A sage who offered divine vision of the battle, to the King.",
      answer: "VYASA"
    },
    {
      id: 2,
      pattern: "__R_T_R_S_T__",
      clue: "The King who refused this vision, saying that he had no desire to view the death of his own sons. But he wanted to hear every detail of the war.",
      answer: "DHRITARASHTRA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "__N__Y_",
      clue: "The person who was blessed with a divine vision for the duration of the war. He narrated everything that he saw and heard to the King.",
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
      { from: 1, to: 2, sideOrigin:"right", sideTarget:"left", straight:true, label: ["offered divine vision"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"left", straight:true, label: ["granted divine vision"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["narrated the war"] }
    ]
  }
},
{
  id: 59,
  slug: "the-curse-of-the-hermit-boys-parents",
  title: "The Curse of the Hermit Boy's Parents",
  description: "A tragic mistake in the forest resulted in a curse. This curse took effect many years later when the prince of Ayodhya was exiled to the forest. Identify the characters of the story.",
  accent: "#ffd670",
  congratsMessage: "Well done! Try your luck with the next puzzle!",
  nextSlug: "the-lie-that-wasnt-a-lie",
  trivia: `
    <p>When he was a young prince, Dasharatha had gone out hunting in the dark forest on the banks of river Sarayu. He was a very good marksman and had trained himself to shoot in the direction of any sound without looking. Presently, he heard a sound like an elephant drawing in water through its trunk.</p>
    <p>His arrow shot forth and suddenly, a human voice called out – "O dear God, who had shot this arrow at me? I have never harmed a single creature. I am an innocent hermit boy. Who can be my enemy?"</p>
    <p>Dasharatha trembled with an unknown fear, and he stumbled towards the direction from which the voice had come. He saw a young ascetic named Shravana lying in a pool of blood.</p>
    <p>Shravana looked at Dasharatha in pain and demanded why he had done this. He had been filling his pitcher with water for his parents who were old and blind. He asked who would look after his parents in their old age.</p>
    <p>Dasharatha looked at him speechlessly, and the young boy continued. He told him to go and beg for their forgiveness, else their curse on him would be terrible. He also instructed him to fill the pitcher with water and take it to them. He then breathed his last.</p>
    <p>Dasharatha then filled the pitcher with water and went to the ashrama where the boy's parents were.</p>
    <p>The old couple had been sitting and discussing their son's delay. When they heard approaching footsteps, they called out to him and asked why he had taken so long.</p>
    <p>Dasharatha then caught their feet and asked them to forgive him. He told them that he was not their son, and explained what had happened. The mother fainted and fell.</p>
    <p>The father then said that his sin was very grave, but since it had been committed unknowingly, he would not be reduced to ashes by their curse. But he said that one thing was certain – that he too would suffer the pangs of separation from his son, and would die of grief.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D_S__R_T__",
      clue: "A young prince from Ayodhya who went for hunting in a dark forest on the banks of the Sarayu. He heard what sounded like an elephant drawing in water through its trunk, and shot his arrow at it.",
      answer: "DASHARATHA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "S___V___",
      clue: "The innocent hermit boy that this arrow actually ended up hitting. He had been drawing water for his parents who were old and blind.",
      answer: "SHRAVANA"
    },
    {
      id: 3,
      pattern: "__M_",
      clue: "The curse by the boys parents came true, where the prince mentioned above eventually died due to the grief of separation from his son. What is the name of his son?",
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
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: [" his parents cursed him"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["son"] }
    ]
  }
},
{
  id: 60,
  slug: "the-lie-that-wasnt-a-lie",
  title: "The Lie that wasn't a Lie",
  description: "A master warrior falls when a tragic misunderstanding spreads across the battlefield. Name the characters involved in this story.",
  accent: "#bdb2ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-rakshasi-in-gokula",
  trivia: `
    <p>When Dhristadyumna learnt about his father's death in the hands of Drona, he vowed to kill him before the nightfall. Arjuna and Bheema joined Panchala against Drona and broke his ranks. Guru and disciple fought like mortal enemies, and the others stood amazed, watching the combat in wonder.</p>
    <p>Thousands lost their lives, but the two warriors showed no signs of exhaustion. The Pandava troops shuddered at the sight of the massacre of their men, and some of them began to say that Arjuna was capable of killing Drona, but wouldn't because he was his guru.</p>
    <p>Krishna then suggested that if Drona was given the news that his son Ashwatthama had died, he would lose heart in the war.</p>
    <p>As per the strategy, Bhima killed an elephant which coincidentally had the same name, and loudly announced that Ashwatthama was no more.</p>
    <p>Drona heard the shout, and couldn't believe the words. He launched a fresh attack on Dhrishtadyumna, but couldn't put himself whole-heartedly in the war. He grew more worried and was determined to verify whether it was his son that had been killed. He decided to ask Yudhishtira, who never lied.</p>
    <p>Yudhishtira had already been instructed by Krishna on what to say. He truthfully said that Ashwatthama was dead, but added in a low voice that it was the elephant, not his son. However, during the second part of his sentence, Bhima blew a conch loudly.</p>
    <p>But Drona only heard that Ashwatthama had died. Overwhelmed by sadness, he sat down on the ground, not willing to fight.</p>
    <p>Taking ruthless advantage of Drona's vulnerability, Dhrishtadyumna cut off the teacher's head, thus fulfilling his father's vow of vengeance.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
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
      clue: "This charioteer realised that the only way to defeat him was by using his weakness (his son).",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "Y_____H____",
      clue: "This prince was asked to say that a certain elephant is dead.",
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
      clue: "Once the warrior thought that his son was no more, he was slain by the prince of Panchala. Name this prince of Panchala?",
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
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["advised him"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true,  label: ["said that his 'son' is dead"] },
      { from: 5, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["killed him"] },
      { from: 1, to: 4, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["son"] }
    ]
  }
},
{
  id: 61,
  slug: "the-rakshasi-in-gokula",
  title: "The Rakshasi in Gokula",
  description: "A tyrant’s plot sends a dangerous Rakshasi into Gokula, but the child reveals his divinity and power. Identify the characters of this story.",
  accent: "#ffc6ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-curse-that-became-a-disguise",
  trivia: `
    <p>When Kamsa came to know that a baby boy had been born in the house of Nanda at Gokula, he had a sneaking suspicion that it was his dreaded enemy. His mind worked out a variety of schemes to put the infant to death.</p>
    <p>There was a frightful rakshasi named Poothana, who was treacherous and villainous to the very core of her being. She knew various magical tricks and spells which helped her in the asuric work that she did for Kamsa.</p>
    <p>At Kamsa's behest, she entered Gokula and transformed herself into a lovely lady. She wore silk garments with gorgeous jewels. She made her way to Nanda's house, to where Yashoda was sitting with her little baby.</p>
    <p>Nobody even thought about stopping her because she was so well dressed and seemed important. Sweetly, she asked Yashoda if she could plant a little kiss on the child's forehead.</p>
    <p>Yashoda agreed, and then the wicked demoness suckled the child to her breast, which was full of deadly poison. By this time, she had already gone out of the courtyard of the house under the pretext of entertaining the baby. What she did not know was that he was the Lord Himself — he clutched at her breast and sucked hard. He sucked and sucked until he had drawn out not only all the poison but also the very life-breath of the rakshasi!</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__M__",
      clue: "The tyrant ruler of Mathura who sat on the throne after imprisoning his own father.",
      answer: "KAMSA"
    },
    {
      id: 2,
      pattern: "_OO__A__",
      clue: "A frightful and dreaded Rakshasi who knew many magic tricks and spells that she used to do asuric work for the King. She entered Gokula at the behest of this King, and transformed herself into a beautiful woman. Name this Rakshasi.",
      answer: "POOTHANA"
    },
    {
      id: 3,
      pattern: "____O__",
      clue: "A woman who had just recently given birth. Many people from the village arrived to look at the divine baby boy. She was visited by the above woman who asked her if she could hold and feed her son. Name the mother.",
      answer: "YASHODA"
    },
    {
      id: 4,
      pattern: "__I___A",
      clue: "When the Rakshasi held this baby and tried to feed him milk from her breast which she had poisoned - the baby kept on sucking harder and harder until he sucked the life from her. Who was this baby?",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top", label: ["sent her"] },
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"left", straight:true,  label: ["visited her"] },
      { from: 4, to: 2, sideOrigin:"left", sideTarget:"bottom", straight:true, label: ["killed her"] }
    ]
  }
},
{
  id: 62,
  slug: "the-curse-that-became-a-disguise",
  title: "The Curse That Became a Disguise",
  description: "A visit to Amaravati led the Pandava prince to acquire the knowledge of many useful divine weapons, but he was also cursed by an apsara. Identify the characters and events if you can.",
  accent: "#a8dadc",
  congratsMessage: "A terrible curse indeed turned into the perfect disguise. Well done! Onward to the next puzzle!",
  nextSlug: "curses-across-births",
  trivia:`
<p>Matali, the charioteer of Indra, arrived before Arjuna and said that he had come to take him to Amaravati on Indra’s request. </p>
<p>Arjuna happily got into the chariot, and as it rose swiftly in the sky, he noticed to his amazement that the stars were growing enormous. The sky appeared endlessly black, and Arjuna was wonder-struck at the lamp-like stars which appeared so small and twinkling from the earth. Streaming past skies, he finally arrived at Indra’s heaven. </p>
<p>A large number of gods, demi-gods, apsaras and saints were waiting at the gates of heaven to welcome Arjuna. He was taken for a tour of Indra’s palace, and then led to his court. There, the Gandharvas played melodious tunes to honor him, while the apsaras danced. </p>
<p>Finally, Arjuna was escorted to his resting chamber, and was taught the use of divine weapons obtained from the gods. He was quick to learn the use of Vajrastra, the weapon that produced mighty thunder accompanied by dark, swollen clouds. </p>
<p>When Arjuna expressed his desire to go back, Indra insisted on him spending some more time in his abode. Indra added that the Gandharva chief - Chitrasena, would teach him music and dance, which would be useful to him later. </p>
<p>One day, Urvashi was dancing in Indra's court. Arjuna stared at her wide-eyed, mesmerised by her beauty, or so it appeared to Indra, who noticed Arjuna staring at her. </p>
<p>Indra called Chitrasena aside and instructed him to arrange a meeting of his son with Urvashi. Urvashi was only too happy to oblige, and entered Arjuna's chamber. </p>
<p>Arjuna stood up and bowed to her as he would do to an elderly lady. </p>
<p>When Urvashi informed him that Indra had commanded her to be with him for the night, Arjuna was embarrassed and replied that she was like his mother Kunti, Madri or Sachi. The reason he had stared at her earlier was because he had seen the mother of his ancestors in her. Her sons with Pururava were his ancestors. </p>
<p>Urvashi then explained that since she was an apsara, she was unfettered by laws of worldly men. Arjuna bowed again, touched her feet, and said that he was like her son. </p>
<p>Urvashi was furious at being spurned. Without a moment's thought, she inflicted a terrible curse on Arjuna - that he would become a eunuch, and left his chamber after pronouncing the curse. </p>
<p>Arjuna panicked at this and told Chitrasena all that that happened. Chitrasena reassured Arjuna and brought the incident to the notice of Indra. </p>
<p>When Indra came to know about the curse, he rejoiced, saying that it was a blessing in disguise. During his thirteenth year of exile, Arjuna wouldn't be recognized, because no one would expect him to a eunuch. </p>
<p>Indra pronounced that the curse would last for exactly a year, after which he would regain his original form. </p>
<p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,

  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "I____",
      clue: "The King of Gods and the father of a Pandava prince, who brought his son to Amaravati. There, his son learnt how to use various divine weapons.",
      answer: "INDRA"
    },
    {
      id: 2,
      pattern: "U_____I",
      clue: "An Apsara who cursed the Pandava to live the life of an eunuch. (She was also his ancestor, as she is the wife of Pururava)",
      answer: "URVASHI"
    },
    {
      id: 3,
      pattern: "B________A",
      clue: "This curse proved to be a perfect disguise for this Pandava during his thirteenth year of exile. What was the name that he took during this year?",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top", label: ["his court"], straight:true },
      { from: 2, to: 3, sideOrigin:"right", sideTarget: "left", label: ["her curse led to this disguise"], straight:true }
    ]
  }
},
{
  id: 63,
  slug: "curses-across-births",
  title: "Curses Across Births",
  description: "This is the story of a hundred hooded serpent in the river Yamuna that had been poisoning and harming everyone around him until the arrival of the son of Vasudeva. Identify the characters from this story.",
  accent: "#90dbf4",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "swayamvara-of-the-fire-born-princess",
  trivia:`
<p>In one part of the river Kalindi, there was a pool which was contaminated by the presence of a hundred-hooded serpent called Kaliya. The monster had been living in the pool with his family for many yugas. He constantly breathed poisonous fumes which kept the water at boiling point. All the birds that flew over that area were instantly killed, as was any other life that even came near it. </p>
<p>One day, the gopas with their cattle strayed to that very same part of the river Kalindi. The boys and the cattle were both thirsty. So they bent over the banks of the river to refresh themselves. No sooner had they drunk the water, than they fell down dead. Krishna, with his divine look, gazed upon them. They soon revived, but Krishna decided that once and for all he would do away with this poisonous serpent. </p>
<p>So while the gopas watched aghast, Krishna climbed a kadamba tree nearby. He removed his yellow pitambara, his peacock crown, his garland of wild flowers and placed them with his stick on a branch of the tree. Then he tightened his loin cloth and plunged into the boiling water. </p>
<p>The impact of his jump was so great that the water rose many yards high. Kaliya was surprised and angered to see that someone had actually dared disturb his privacy. In his uncontrollable rage and fury Kaliya attacked Krishna fiercely and stung him with his fangs. Then he twined himself around <p>Krishna’s body in order to cut him into small pieces. The gopa boys couldn’t bear to watch anymore, since they felt that Krishna's death was now certain. </p>
<p>At the same time, there were evil omens in Vraja, and Nanda was very alarmed. The elders somehow connected that this had something to do with Krishna, and they became even more worried as that day Balarama had not accompanied him. </p>
<p>Nanda and Yasoda, along with a large number of men, women and children went out in search of him, following the hoof-marks of the cows. On arriving at the spot where the struggle was going on, they saw the gopa boys lying in a swoon and Krishna in the throes of death. </p>
<p>It was now an hour since Krishna had been in the grip of the awful demon. When he saw the distress of the people on the banks of the river, Krishna inflated himself to such a huge size that Kaliya lost his grip and could no longer hold him. Krishna now danced around him and, a little fatigued, the serpent also moved with him. Krishna then leaped onto the outspread hoods of Kaliya and broke them one by one. Kaliya was furious and hissed loudly. Fire and poison issued from his mouth and nostrils, and he twisted and twirled to free himself of Krishna. </p>
<p>But Krishna continued dancing on his head and breaking the hoods. The sight was indeed very beautiful. The devas sang in joy and showered flowers from heaven. </p>
<p>Soon, Kaliya was exhausted by his own struggles. He vomited black blood and then swooned away, his body completely broken. For Krishna had danced on him with the weight of the three worlds! </p>
<p>The wives of Kaliya then approached Krishna and earnestly prayed for his life. Krishna spared Kaliya's life and when he had fully regained consciousness, Krishna instructed him to go with his wife and children and live on <em> Ramanaka Dvipa </em>. Garuda would not harm him, because his hoods were bearing Krishna’s foot marks. </p>
<p>Kaliya, with his entire family, left for Ramanaka Dvipa as commanded by Krishna. Ever since then the waters of the Yamuna remained pure and sweet. </p>
<p>When Krishna came out of the water, he was wearing rare gems and jewels and his body was smeared with sandal paste. These gifts were given to him by the wives of Kaliya. The people of Vraja embraced Krishna, and the cows and their calves were seen frisking about instinctively in their inexplicable delight. </p>
   <p style="margin-top:20px; font-size:20px; font-style:italic; color:#aaa;">✦ A Bonus story about the past life of Kaliya✦</p>
<p>Once upon a time, there was a rishi named Vedashiramuni, who was performing a rigorous penance for Lord Vishnu. However, with the tapas that he was doing, he began growing arrogant. At some point, another rishi named Ashwashiramuni arrived to his ashrama, also wanting to do tapas for Narayana. </p>
<p>Vedashiramuni didn’t like the other rishi coming there to do his tapas, and his arrogance, said that he didn’t have what it takes for the tapas. The other rishi grew furious and said that his head and heart were filled with poison, and therefore cursed Vedashiramuni to be born as a poisonous snake. </p>
<p>Vedashiramuni also lost his temper and cursed Ashwashiramuni to be reborn as a crow. </p>
<p>At that moment, Narayana appeared before them and said that both their curses would come true, because the words of his bhaktas could never be false. Narayana also told Vedashiramuni that he would come in one of his Avataras and dance atop his head, removing all the poisonous thoughts in them, and finally absorb him into himself. </p>
<p>Ashwashiramuni, on the other hand, was blessed by Vishnu that he would tell His story to Garuda. Thus, in his next life, he became known in the three worlds as Kaka Bhushundi, and was the one to narrate the story of Rama to Garuda which got captured in the Ramcharitmanas. </p>
  <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>References: Mahabharatha Unravelled – Ami Ganatra</em> and <a href="https://www.youtube.com/watch?v=80R5DOCIDDQ" target="_blank" style="color:var(--accent-color);"> <em>Unknown layers of a known story</em></a></p>
`,

  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "V_D____R_M__I",
      clue: "A Rishi who was performing penance for Narayana.",
      answer: "VEDASHIRAMUNI",
      size: "wide"
    },
    {
      id: 2,
      pattern: "A__W____R_M__I",
      clue: "Another Rishi who arrived into this Rishi's ashrama, wanting to do tapas. In his arrogance, the other Rishi refused, because of which this Rishi cursed him to be born as a poisonous snake.",
      answer: "ASHWASHIRAMUNI",
      size: "wide"
    },
    {
      id: 3,
      pattern: "K_K_ B_______I",
      clue: "The crow which would tell the story of Rama to Garuda, which was captured in Ramcharitmanas",
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
      clue: "Name the god who jumped into this pool from the top of a Kadamba tree. He danced on top of the snake, breaking each of its hoods.",
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
      { from: 1, to: 2, sideOrigin:"right", sideTarget: "left", label: ["cursed him to be born as a crow"] },
      { from: 1, to: 4, sideOrigin:"bottom", sideTarget: "top", label: ["reincarnation"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["reincarnation"] },
      { from: 5, to: 4, sideOrigin:"top", sideTarget:"right", straight:true, label: ["danced atop of"] }
      
    ]
  }
},
{
  id: 64,
  slug: "swayamvara-of-the-fire-born-princess",
  title: "Swayamvara of the Fire-Born Princess",
  description: "From a sacrificial fire emerged a princess whose marriage would shape the events of Mahabharatha. Identify the characters of the story.",
  accent: "#f29b18",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "rakshasas-sent-to-vrindavan",
  trivia:`
<p>After escaping from Varnavata, the Pandavas decided to remain in disguise for a while. On arriving at Panchala, the Pandavas took shelter at a humble potter’s house. The unsuspecting potter family thought them to be what they appeared – poor brahmins living on alms. </p>
<p>Drupada, the king of Panchala, was not quite happy. He had always wanted his daughter to marry Arjuna because with Arjuna as his son-in-law, Drona's bitter enmity could be contained. However, Drupada determined that the man who married his daughter should be as formidable a warrior as Arjuna. </p>
<p>Therefore, he got a mighty bow made, which only Arjuna could have strung with ease. On the ceiling was a revolving ring to which was attached a toy fish, while a pan full of oil was placed below. </p>
<p>The condition of the Swayamvara was announced. The archer participating in the Swayamvara had to aim at the eye of the revolving fish while looking at its reflection in the pan full of oil. The archer who could shoot at its eye would win Draupadi's hand. </p>
<p>Among the kings present there, were Duryodhana, Dushasana, Karna, Shakuni, Krishna and Balarama, cousins of the Pandavas, and Jarasandha, the king of Magadh. </p>
<p>The Pandavas, although very much present in the hall, remained unnoticed. Krishna and Balarama immediately recognized them, but nobody else could notice the presence of the Pandava warriors, as they were completely absorbed in the events in the arena. </p>
<p>Soon, the princess of Panchala entered the hall. She looked like a heavenly nymph. Drums and other instruments started playing as the announcement of her arrival was made. The gathering, including kings, princes, saints and sages, cheered the announcement. </p>
<p>The event began, and a number of princes came forward. As Duryodhana, Dushasana, Karna, and a number of powerful warriors tried their luck and failed, Drupada and Dhrishtadyumna started to get worried. </p>
<p>Finally, Arjuna rose up. As everyone looked on in surprise and shock, Arjuna raised the bow and strung it. King Drupada, Dhrishtadyumna and Draupadi watched him intently, hoping that the despair of the unsuccessful Swayamvara would turn into a happy ending. </p>
<p>Arjuna took a deep look into the pan of oil. He finally shot his arrow taking an aim at the eye of the fish. In a flash, the arrow hit the target. The Panchala princess was overjoyed. Arjuna then shot another arrow pierced the eye of the target and hit the fish. </p>
<p>Draupadi looked up into the eyes of the young Brahmin. Shyly, she placed the garland around his neck. She had made her choice. </p>
<p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,

  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_R_____",
      clue: "A powerful king who performed a Yagna to be blessed with a son who would slay his former best friend, after being humiliated by him.",
      answer: "DRUPADA"
    },
    {
      id: 2,
      pattern: "_R______",
      clue: "The girl who emerged from this sacrificial fire, having dark complexion.",
      answer: "DRAUPADI"
    },
    {
      id: 3,
      pattern: "___U__",
      clue: "The prince who successfully shot his arrow at the eye of a rotating fish, while only looking at its reflection - thus fulfilling the conditions of the Swayamwara and marrying her.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top", label: ["daughter"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["won her hand"] }
    ]
  }
},
{
  id: 65,
  slug: "rakshasas-sent-to-vrindavan",
  title: "Rakshasas Sent to Vrindavana",
  description: "The tyrant of Mathura sent many fearsome Rakshasas to destroy the boy of Vrindavan. This puzzle explores how two of them were defeated, identify them if you can.",
  accent: "#6ffd52",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "one-cart-each-day",
  trivia: `
    <p>Kamsa, knowing about the prophecy that indicated that Krishna would eventually kill him, hatched multiple plots to kill him — both at Gokula and Vrindavana.</p>
    <p>One day in Vrindavana, Krishna and the gopas had gone to a tank to quench their thirst and to have a cool wash. When they came out, they saw before them what looked like a huge white mountain. It was in fact an asura in the form of a monstrous crane. The asura then rushed at Krishna and held him fast in his beak. This crane was none other than Bakasura.</p>
    <p>The gopas panicked at the sight and some of them fainted. Meanwhile, Krishna generated so much heat in his body that it began to scorch the throat of the asura. It spat Krishna out and made another attack on him with its sharp beak. Krishna pressed down the beak of the giant bird with his foot, and with his hands he tore it apart. The asura fell down dead, and from the skies, the Devas who were watching the fight beat their celestial drums, blew their conches, and showered heavenly flowers on Krishna.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>One day, Krishna desired to have breakfast in the forest, and he rose early and played on his flute. The gopas heard the sweet melody and woke up too. They came out of their houses and made their way to the forest, with their calves following them.</p>
    <p>There was a demon called Aghasura who was the younger brother of Poothana and Bakasura. He was determined to avenge their deaths, and he swore to himself to kill Krishna and all the gopas. He stretched himself in the form of a huge python, and opened his mouth wide. His lower jaw rested on earth, while his upper jaw touched the clouds. He lay still and waited patiently.</p>
    <p>When the gopas came near the waiting asura, they playfully speculated what it could be, and walked straight into the mouth of the serpent, thinking that the tongue was a smooth road. However, Aghasura did not immediately close his mouth, for his main aim was to kill Krishna.</p>
    <p>Krishna had no time to warn his companions. Finally, he himself entered Aghasura's mouth, and then wedged himself in his throat to prevent him from breathing. Aghasura choked and breathed his last. With great speed, Krishna brought his friends out and saved them. The Devas once again burst forth into songs in praise of the Lord, and Kamsa found his plans foiled again.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "A young boy who lived in Vrindavan and played the flute.",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "__K_S_R_",
      clue: "A Rakshasa sent by the King to kill the boy. He took up the form of a monstrous crane and held the boy in his beak. The boy then tore it apart and the asura fell down, dead. Name this Rakshasa.",
      answer: "BAKASURA"
    },
    {
      id: 4,
      pattern: "_GH_S_R_",
      clue: "He was the younger brother of Poothana and the Rakshasa on the left, and was determined to avenge both their deaths. He took the form of a huge python and sat down with his mouth wide open. The Gopas unknowingly ventured into its giant mouth, and the cowherd followed them. He wedged himself in the Rakshasa's throat and prevented him from breathing, with which he died. Name this Rakshasa.",
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
      { from: 1, to: 3, sideOrigin:"left", sideTarget:"top", straight:true,  label: ["sent him"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top", straight:true,  label: ["killed him"] },
      { from: 2, to: 4, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["killed him"] }
    ]
  }
},
{
  id: 66,
  slug: "one-cart-each-day",
  title: "One Cart Each Day",
  description: "While living in disguise, one of the Pandava princes confronted a terrible Rakshasa that plagued a town. Identify the events if this story if you can.",
  accent: "#efef33",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-rakshasas-garden",
  trivia: `
    <p>After the Pandavas and Kunti had escaped the Lakshagriha in Varnavata, they decided that it was better to remain in disguise for a while. One day, they came across Sage Vyasa, who advised them to go to a nearby town called Ekachakra and stay there until he comes, keeping their disguises.</p>
    <p>The Pandavas reached Ekachakra and started living there with a brahmin family. They were disguised as brahmins. They led a quiet life, doing nothing to draw attention to themselves. During the day, they would go begging in the town and come back at dusk with alms and food to hand over to Kunti. She would divide the food into two halves, one part was given to Bhima, and the other part would be equally divided amongst the rest of them. A little portion would go to her.</p>
    <p>One day, when the brothers had gone out on their morning rounds, Kunti heard the wife of the brahmin crying.</p>
    <p>The brahmin was saying to his wife that they should have left this town a long time ago. Now, a terrible thing had happened, and one member of their family had to die. The discussion went on for sometime with the whole family, where each person was volunteering that they would give up their life.</p>
    <p>Kunti judged that it was time to interrupt and entered the room. She asked the brahmin what was the matter, why all this talk of death and grief?</p>
    <p>The man then explained that there was an asura by the name of Vakasura, who lived near their city. He had made a habit of coming into the city, indiscriminately killing and eating people, whenever he happened to be hungry. The town elders, driven to desperation, entered into a pact with the asura. According to this, they would be spared of his attacks, but this truce came at a high price. Every day, they had to provide him with a cart-load of food, driven by someone from the city. The asura would the eat all the food, the bullocks drawing the cart and the driver. It was decided that each family would provide that unfortunate victim, by turns - and tomorrow, it was the turn of their family.</p>
    <p>Kunti thought for a while and said that she could suggest a way out of this. Since they had been kind enough to offer their hospitality to us, she said that she would repay the favour by sending one of her five sons to drive the cart.</p>
    <p>The Brahmin was aghast and said that he could not allow her to do such a thing.</p>
    <p>But Kunti confidently assured him that her mighty son, Bhima, could kill great and might rakshasas effortlessly. She also added not to tell this to anyone.</p>
    <p>The brahmin and his family felt reassured on hearing the words of Kunti. Then Kunti went to Bhima and told him about the menace of Vakasura and that he was expected to deal with him.</p>
    <p>Yudhishthira felt deeply concerned for his brother, and looked at his mother Kunti in exasperation, and asked her how she could do something so thoughtless.</p>
    <p>Bhima reassured him that he was confident about slaying the wicked asura.</p>
    <p>The next day Bhima marched ahead to meet the challenge of Vakasura, riding a cart full of rice and two buffaloes following behind. He found the rakshasa's den but no one responded to his calls. He settled down to eat whatever there was in the cart, shouting and yelling the rakshasa's name continously.</p>
    <p>When he was almost finished, he heard the sound of gigantic footsteps. Vakasura had arrived and was furious when he saw Bhima eating the food. He charged at him, uprooting a tree in one hand.</p>
    <p>Bhima then casually got out of the cart to take on the might of Vakasura. The earth shook as the two giants grappled with each other and hurled uprooted trees at each other. Finally, Bhima pinned down the rakshasa to the ground and finished him off.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference – Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "E_A___K__",
      clue: "The town where the Pandavas stayed in disguise after escaping from Lakshagriha.",
      answer: "EKACHAKRA"
    },
    {
      id: 2,
      pattern: "V_K____A",
      clue: "The Rakshasa who lived nearby and demanded for one person from the town each day to drive a cart of food to him. He would eat all the food, the bulls, and the rider.",
      answer: "VAKASURA"
    },
    {
      id: 3,
      pattern: "____A",
      clue: "The Pandava prince who drove the cart and finished off the Rakshasa.",
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
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["terrorized the town"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["killed him"] }
    ]
  }
},
{
  id: 67,
  slug: "the-rakshasas-garden",
  title: "The Rakshasa's Garden",
  description: "Two brothers from Vrindavan enter a forbidden grove guarded by a fearsome Rakshasa. Unravel the events that follow in the below puzzle.",
  accent: "#a0c4ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "lakshagriha-escape",
  trivia: `
    <p>At a little distance from where Krishna and his friends usually played, there was a beautiful garden filled with juicy fruits. They did not dare go and pick the fruit, because in the garden lived a ferocious herd of donkeys led by an asura named Dhenukasura. He and his herd would never allow a human to enter the garden. But the boys longed to eat the fruits and pleaded with Krishna and Balarama to help them.</p>
    <p>Krishna and Balarama entered the garden. Balarama went up to the trees and shook them mightily, till the ground was covered with fruits. Dhenukasura heard the noise and was incensed with anger. He charged at Balarama and struck his chest with his hind legs. Then he turned and brayed, getting ready for a second attack. In the meanwhile, Balarama seized his hind legs and whirled him round and round in the air and hurled him against a tree. The asura fell against the tree with such force that it crashed into another. The second tree crashed into the third, until there was a heap of trees lying on the ground.</p>
    <p>The other donkeys charged at the two brothers. But one by one, they were all killed by Krishna and Balarama.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__I____",
      clue: "A cowherd from Vrindavan who loved to play pranks and his flute.",
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
      clue: "There was a beautiful garden nearby filled with juicy fruits. However, no one dared to go there, as a ferocious Rakshasa lived there. When the two brothers went to this garden to get fruits, this Rakshasa became angry and attacks them. He was eventually slain by them - name this Rakshasa.",
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
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["killed him"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["killed him"] }
    ]
  }
}, 
{
  id: 68,
  slug: "lakshagriha-escape",
  title: "Lakshagriha",
  description: "Duryodhana devised a deadly plot to kill the Pandavas in a fire. Identify the characters involved in this story.",
  accent: "#ffd6a5",
  congratsMessage: " Well done! Onward to the next puzzle!",
  nextSlug: "a-walk-with-death",
  trivia: `
    <p>The Pandavas grew up and finished their training with Dronacharya. Considering Yudhishthira's wisdom and virtues, the elders advised Dhritarashtra to declare him as the crown prince of Hastinapur. Dhritarashtra agreed, although he wasn't happy with the idea. He could not find a valid reason to refuse. The Pandavas were becoming increasingly popular with the citizens of Hastinapur, and the people couldn't stop talking about Yudhishthira's sense of justice, Bheema's strength, Arjuna's humility and their conquests of the kingdoms around.</p>
    <p>Duryodhana had already begun plotting to get the Pandavas out of his way with the help of Shakuni, Dushasana and Karna. Stating his concern regarding the growing popularity of the Pandavas, he asked Dhritarashtra to get them out of sight by sending them away to a faraway town of Varnavata under some pretext. Dhritarashtra liked the idea.</p>
    <p>What Duryodhana had not told his father was the plot of killing the Pandavas once they reached Varanavata. He had engaged a person named Purochana to construct an inflammable palace for the Pandavas. Once Purochana had won the brothers over with his sweet talk, he was to set the palace on fire and burn them alive.</p>
    <p>Dhritarashtra instructed Yudhishthira to visit Varnavata along with his brothers. The Pandavas, unaware of the schemings, obeyed and left for Varnavata with their mother. Vidura learnt of this devious plan from his spies. When the Pandavas were leaving, he forewarned Yudhishthira of the danger that awaited them. He said it in a language of Mlecchas, which only Yudhishtira could understand.</p>
    <p>At an opportune time, before Purochana could realise what was happening, they set the palace on fire and escaped. People believed the Pandavas were burnt dead along with Purochana in the palace. The news of their death reached Hastinapur. Everyone mourned the death of their favourite princes. Dhritarashtra expressed his despair in public and quickly declared Duryodhana the crown prince of Hastinapur.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "V_R__V_T_",
      clue: "The place where Duryodhana and Dhritarashtra sent the Pandavas to murder them in a fire.",
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
      clue: "The uncle of the Pandavas who accompanied the Pandavas.",
      answer: "VIDURA"
    },
    {
      id: 4,
      pattern: "Y_____H____",
      clue: "The only Pandava who knew the language of the Mlechhas and therefore understood Vidura's cryptic warning. Due to this, the Pandavas managed to escape in time.",
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
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["built the palace"] },
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget:"top", straight:true,  label: ["warned him"] }
    ]
  }
}, 
{
  id: 69,
  slug: "a-walk-with-death",
  title: "A Walk with Death",
  description: "The wisdom, and resolve of a young princess impresses the God of death in this popular story. Identify the characters if you can.",
  accent: "#ffc8dd",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "yaksha-prashna",
  trivia: `
    <p>There lived a noble king named Ashwapati in Madra. The king had no children of his own even after years of marriage. Hence, with the hope to beget a child, he and his wife undertook rigorous austerities to appease Goddess Savitri. After eighteen years, a daughter was born to the couple, and they named her Savitri after the Goddess.</p>
    <p>The girl grew up to become a divinely beautiful young lady. She was wise and well versed in scriptures.</p>
    <p>When she grew up to be of marriageable age, Ashwapati asked Savitri to find a suitable match for herself. She went with some old ministers of her father, to search for a worthy partner, travelling through various cities and towns.</p>
    <p>While passing through a forest, she met a young man named Satyavan and was instantly besotted.</p>
    <p>Satyavan was a prince of Shalva, and when he was still a child, his father Dyumatsena had been banished from his kingdom. Since then, Dyutmatsena along with his wife and son, started living in the forest. Satyavan had thus grown up in the forest – he was brave, humble and well-mannered. Savitri made up her mind to marry no one other than Satyavan. She returned to her kingdom and told this to her father.</p>
    <p>However, there was a problem. Narada, who was visiting the King Ashwapati, did not approve of the wedding. The King asked if Satyavan was not virtuous.</p>
    <p>Narada replied that Satyavan was as bright as the sun, as wise as Brihaspati – the teacher of the Devas, as courageous as Indra, and as firm and composed as the earth. He was generous, truthful, soft-spoken, restrained and very handsome. Savitri and her father were perplexed and asked him what the problem was.</p>
    <p>Narada revealed that Satyavan had a very short life, and he had only one year left. Ashwapati, as expected, did not wish to marry Savitri to a person who was destined to die so soon. He asked Savitri to find someone else, but she was adamant that she would marry no one else. Ashwapati gave in and approached Dyumatsena to discuss the marriage of their children.</p>
    <p>Dyumatsena was hesitant about the proposal. He said that Savitri would have grown up in the luxuries of the palace, while they lived in an ashrama devoid of all comforts. If she married Satyavan, she would have to live an austere life. Did she deserve those hardships?</p>
    <p>To this Ashwapati responded that happiness and sadness were ephemeral and that he and Savitri had already thought through this. Hence, Ashwapati had approached them out of a genuine desire to have Satyavan marry his daughter.</p>
    <p>After the marriage happened, Savitri went to live in the ashrama with Satyavan and his family. She adjusted to the forest life very soon, but was also acutely aware that her bliss was going to be short-lived. She kept a mental note of the days that passed and the days that remained.</p>
    <p>When there were only four days left in Satyavan's life, Savitri undertook a three day fast. In addition to not eating, she had decided to stand all day and night for those three days. Her parents-in-law were surprised and worried, and tried to dissuade her, but Savitri reassured them that she was doing this to fulfil her mental resolve. She did not, however, reveal what the resolve was.</p>
    <p>The fourth day arrived, and Satyavan got up to leave for the forest to get some wood and fruits for the ashrama, and Savitri requested him to take her along. Satyavan told her that it was not a good idea as the path was uneven, and she hadn't eaten for the past three days. He reassured her that he would be back soon.</p>
    <p>But Savitri insisted, and Satyavan finally relented. As they walked through the lush green forest, Satyavan was in a very happy mood and pointed out to the flowers, birds and fruits on the way.</p>
    <p>After collecting the fruits and wood, Satyavan sat down for a bit. His head had begun to spin and he was profusely sweating. Savitri then took Satyavan's head in her lap so that he could lie down and rest. His body had become cold, and then suddenly, he was breathing no more.</p>
    <p>Immediately, a man with blazing red eyes and a bright aura appeared out of nowhere. Savitri stood up to greet the stranger and asked him who he was and why he was here. The stranger introduced himself as Yama, the lord of death. Mortals did not have the ability to see him, but she could, because she was virtuous and pious. He informed her that Satyavan's prescribed life had come to an end, and he had come to take him away.</p>
    <p>He then pulled out a thumb-like flame of light from Satyavan's body, and headed away towards the west. Savitri followed him, saying that she had to go wherever Satyavan went. Having walked a little further, she struck a conversation with Yama. It was said that walking seven steps with a stranger, establishes a bond of friendship between them. Now that friendship was established between them, Savitri said that she wanted to tell him something.</p>
    <p>Yama was intrigued and asked her to continue.</p>
    <p>Savitri began expounding on the concept of dharma and the importance of controlling one's mind and senses to lead a fruitful life. Yama was pleased with her wisdom as well her speech and offered her a boon. He told her to ask for anything other than Satyavan's life.</p>
    <p>She requested for her father-in-law to get back his kingdom and his health. Yama said that it would happen and to go back to her ashrama.</p>
    <p>Savitri, however, continued to walk behind him. Then, she began to talk about the importance of <em>Satsang</em> - association with the wise and the learned to improve one's own life. Impressed with Savitri's knowledge, Yama offered her another boon – she could ask for anything except her husband's life.</p>
    <p>This time, she requested Yama to bless her father with brave and capable sons who could carry forward his lineage and expand his kingdom. Yama agreed and told her to return. Once again, she continued to follow him.</p>
    <p>Savitri continued her conversation, and this time, she explained the qualities of sages and saints. Yama was charmed, and he asked her to ask for another boon. She then asked that she wanted her and Satyavan to have a hundred children who were valiant and virtuous and would carry the reputation of the family forward.</p>
    <p>Yama granted her the boon without thinking, and told her to go back. Savitri then asked him how she could go back without Satyavan. The boon would only come true if she could live with Satyavan as his wife.</p>
    <p>Yama laughed aloud, and said that she had won him over with her wisdom, speech and sincerity. Satyavan would regain his life, and together they would have a hundred children. Saying thus, Yama blessed her and went away.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D__M_TS_N_",
      clue: "The King of Shalva who was ousted from his kingdom and went to live in the forest with his wife and child.",
      answer: "DYUMATSENA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "S_T_____",
      clue: "The child who grew up in this forest. He was destined to live a very short life.",
      answer: "SATYAVAN"
    },
    {
      id: 3,
      pattern: "__V___I",
      clue: "The princess from Madra, who wished to marry this prince in the forest. When there were only four days left in his life, she undertook a rigorous fast.",
      answer: "SAVITRI"
    },
    {
      id: 4,
      pattern: "__R__A",
      clue: "The sage who warned King Ashwapati of Madra against letting his daughter marry this prince, saying that he only had one year left to live.",
      answer: "NARADA"
    },
    {
      id: 5,
      pattern: "_A__",
      clue: "The God who arrived on the stipulated day to take the prince away. However, impressed by the princess's wisdom, speech and knowledge in Dharma, he granted her husbands life and Kingdom.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top", label: ["son"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["married him"] },
      { from: 5, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["came to take his life"] },
      { from: 5, to: 3, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["asked to ask for a boon"] }
    ]
  }
},
{
  id: 70,
  slug: "yaksha-prashna",
  title: "Yaksha Prashna",
  description: "A prince had to correctly answer many questions to restore life to his fallen brothers. Identify the events in this story from the Mahabharatha.",
  accent: "#bde0fe",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-python",
  trivia: `
    <p>Towards the end of the twelfth year, the Pandavas came back to Dwaitavana, this time living only on a diet of fruits. One day, a priest came running to seek their help – a wild animal had taken away his wood and churning stick. Without those – the priest couldn't do his ritual yagna. The brothers immediately took off to find the animal and retrieve the wood and churning stick.</p>
    <p>However, their efforts were in vain. They reached deep within the forest looking for the animal, and finding none – they rested for a bit hoping to get some water.</p>
    <p>Yudhishtira sent Nakula to fetch some water for them. Nakula approached the lake nearby and was about to drink some water from it, when a voice stopped him. The voice said that the lake belonged to him, and to drink water from there, Nakula first had to answer some questions. Nakula looked around, but didn't see anyone.</p>
    <p>His thirst was making him desperate, and he shrugged off the warning and drank the water. In an instant, he fell unconscious.</p>
    <p>Yudhishtira wondered what was taking Nakula so long, and sent Sahadeva to look for Nakula and get water. Sahadeva met the same fate, and so did Arjuna and Bhima.</p>
    <p>Eventually, Yudhishtira himself went looking. He was shocked to see his brothers lying unconscious on the ground. He could not believe it was possible – they were invincible. Moreover, there were no marks of injuries on their bodies – it seemed to be the work of some power. Yudhishtira thought as he tried to make sense of the strange happening.</p>
    <p>His eyes fell on the water, and he got up to parch his thirst. The voice roared again – to not drink the water before answering his questions. It also added that his brothers had done that, and hence he killed them.</p>
    <p>Yudhishtira then asked the voice to reveal himself, because no ordinary being could kill his brothers. The voice then said that he was a Yaksha, and he ruled over the lake. He told Yudhishtira that he must answer his questions to drink the water. The Yaksha began his volley of questions, and Yudhishtira politely answered each of them.</p>
    <p>Some of the questions and answers are mentioned below:</p>
    <p><em>What kind of a person who breathes has intelligence and is also well known, but is really as good as dead?</em><br>The one who does not serve the devas, guests, ancestors, family members and his atma is as good as dead even if alive.</p> <hr/>
    <p><em>Who is the friend of a traveller? Who is the friend of a householder? Who is the friend of the unwell and who is the friend of the one who is about to die?</em><br>Co-travellers are friends of a traveller. A wife is the friend of a householder. A doctor is a friend of the unwell and charity is the friend of the one who is about to die.</p><hr/>
    <p><em>What is the footing of dharma? What does fame stand on? What is the basis of heaven? What is happiness based on?</em><br>Enterprise is the footing of dharma. Charity brings fame. Truth is the basis of heaven and virtuous character brings happiness.</p><hr/>
    <p><em>Who is the best amongst the wealthy? What is the best among wealth? What is worth gaining? Who is the happiest amongst all?</em><br>Amongst the wealthy, those who are enterprising are the best. Knowledge of the Vedas is the best wealth. Good health is worth gaining. A content person is the happiest.</p><hr/>
    <p><em>When is a person considered to be dead? When is a country considered to be dead?</em><br>A man in extreme poverty is as good as dead. A country in anarchy is considered to be dead.</p><hr/>
    <p><em>Giving up what makes a person agreeable? Renouncing what does a person not grieve? Giving up what makes a person prosperous? Giving up what makes a person happy?</em><br>Giving up pride endears a person. Renouncing anger, he does not grieve. Giving up unwanted desires makes a person prosperous. Giving up greed makes a person happy.</p><hr/>
    <p><em>What is real knowledge? What is equanimity? What is compassion? What is forthrightness?</em><br>The knowledge of the essence of God is real knowledge. Equanimity is tranquility of mind. Desiring well-being of all is compassion. Even-mindedness towards all is forthrightness.</p><hr/>
    <p><em>Who is the biggest enemy of man? What disease has no cure? Who is a noble man? And who isn't?</em><br>Anger is a man's biggest enemy. Greed has no cure. One who desires the well-being of all is a noble man. One who has no mercy or compassion is not.</p><hr/>
    <p><em>What is ignorance? What is pride? What is lethargy? What is grief?</em><br>Not knowing one's dharma is ignorance. Self-conceit is pride. Not doing one's duty is lethargy. Ignorance of true knowledge is grief.</p><hr/>
    <p><em>When is a person to be considered a Brahmin—by birth, action, education or listening to scriptures?</em><br>Not by birth, not by education, not by listening to scriptures does one become a Brahmin. Only by action can a person be considered a Brahmin.</p><hr/>
    <p><em>What does a person who has a sweet speech gain? What does a person who acts with discretion gain? What is the gain for him who has many friends? What does a man who is engrossed in his duty gain?</em><br>A person with sweet speech endears all. A person who acts with discretion increases his chances of success. A person with many friends lives with joy. A man engrossed in his duty achieves bliss in this world and next.</p><hr/>
    <p><em>Who is truly happy? What is most astonishing? What is the right path? What information is worth having?</em><br>One who is not indebted to anyone, not away in a foreign land and eats food in the fifth or sixth part of the day cooked in his own house even if with scanty vegetables is truly happy. Every day in the world umpteen creatures die, but those who are alive desire to live forever. What can be more astonishing than this? Wise men have differing opinions; logic can also lead to multiple conclusions and the scriptures sometimes have contradictory indications. Hence, the right path is that which was taken by noble people. The only information worth having is this—time is cooking us all in the pan of this delusional world, with a ladle of months and seasons on the fire of the sun fuelled by night and day.</p><hr/>
    <p><em>Define Purusha—the one who is truly known to exist? Who is Sarvadhani—one who has all kinds of wealth?</em><br>As long as a man's virtuous actions are known in the world, he is known to truly exist. One who is free of dualities and maintains his equanimity in all situations—happiness and sorrow, pleasure and pain—truly has all kinds of wealth.</p><hr/>
    <p>The Yaksha was pleased and convinced that Yudhishtira was indeed a man of wisdom. He said that he would grant the life of one of his brothers, as Yudhishtira had answered all of his questions.</p>
    <p>Yudhishtira, without a moment's hesitation, requested for Nakula to be resurrected. The Yaksha was surprised – he said that he knew Bhima was the dearest to Yudhishtira, and to win the war, he would most definitely need Arjuna. Therefore, why had he picked Nakula?</p>
    <p>Yudhishtira explained that Dharma destroys those who destroy it, and protects those who protect it. Hence, he would never rescind Dharma. He then explained that his father had two wives, Kunti and Madri. He regarded both of them as his mothers, and he said that it was only fair that both of them have at least one of their sons alive.</p>
    <p>Yaksha was extremely happy to see Yudhishtira not lose sight of dharma even in the face of sorrow. He resurrected all the Pandavas and revealed his real identity.</p>
    <p>He was Yudhishtira's father – Yama, the Lord of Dharma. He was happy to see his son steadfast in his virtues, and granted the Pandavas a boon that they would remain unidentified in their disguise during the thirteenth year of exile.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_____A",
      clue: "A prince who set out to a lake to bring water for himself and his brothers. But the moment he sipped water, he dropped dead.",
      answer: "NAKULA"
    },
    {
      id: 2,
      pattern: "Y_____H____",
      clue: "The eldest prince who came to the lake and found all his brothers dead. He answered all the questions posed to him by the Yaksha, and as a boon, the Yaksha offered him to ask for the life of one of his brothers.",
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
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "left", straight:true, label: ["killed by the Yaksha"] },
      { from: 2, to: 3, label: ["answered his questions"] },
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["chose for his life to be restored"] }
    ]
  }
},
{
  id: 71,
  slug: "the-python",
  title: "The Python",
  description: "A night near a temple turned unexpected when a python seized the cowherd chieftain.",
  accent: "#caffbf",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-challenge-in-the-arena",
  trivia: `
    <p>Nanda had taken a vow that when Krishna became twelve years of age, he would offer a special worship to the family goddess – Ambika. Along with neighbours and friends, Nanda went to the temple of the goddess with gifts of milk, curd, butter and milk-sweets. At the temple, Nanda performed the sacred ritual. By the time the worship and prayers were over, it had become dark. So they decided to spend the night in the temple courtyard.</p>
    <p>Nanda and his followers lay down to rest. Soon, night fell. Suddenly, everyone was woken up by a disturbed shout from Nanda and they re-lit their torches to see that Nanda's foot was trapped in the mouth of a huge python. They beat the snake with sticks, but it would not budge. It held on even more firmly.</p>
    <p>Nanda shouted to Krishna for help, and Krishna rushed to his father's rescue. He touched the back of the snake with his foot, and at once – the ugly python changed into a handsome and shining celestial being.</p>
    <p>He then bowed low before Krishna. When Krishna asked him who he was, he replied that he was Sudarshana – a celestial magician. He had become very proud of his skill and beauty. One day, he had gone to the forest in his chariot, where Rishi Angira was sitting in deep meditation. He flew over him in his chariot a hundred times. Aroused from his meditation, the Rishi cursed him to turn into a python, saying that he would be released from it by the grace of Krishna. That was the reason he had seized Nanda's foot. He then mounted his chariot and sped away to Suraloka.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__N__",
      clue: "The chief of the cowhered community in Vrindavan. One day, he performed a ritual to a goddess, and decided to spend the night along with the other villagers, near the temple courtyard. In the middle of the night, he suddenly found his foot in the hold of a large python. Name this man.",
      answer: "NANDA"
    },
    {
      id: 2,
      pattern: "_R___N_",
      clue: "His son rushed to help him and touched the snake with his foot. Name this boy.",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "S_D_R__AN_",
      clue: "When the boy touched him, the snake instantly turned into a shining celestial magician, and explained that he had been cursed by a Rishi to be born as a python. Name this celestial being.",
      answer: "SUDARSHANA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "A_G__A",
      clue: "The Rishi who had cursed him because the magician had disrupted his meditation by flying over him in his chariot a hundred times.",
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
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget: "top", straight:true, label: ["freed him"] },
      { from: 4, to: 3, sideOrigin:"left", sideTarget:"right", straight:true, label: ["cursed him"] }
    ]
  }
},
{
  id: 72,
  slug: "the-challenge-in-the-arena",
  title: "The Challenge in the Arena",
  description: "A display of martial skill turns dramatic when a mysterious stranger enters the arena. Identify the events from the Mahabharata.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-warrior-who-could-not-return",
  trivia: `
    <p>Karna wanted to learn the Brahmastra from Dronacharya to be able to fight with Arjuna. Drona refused his request, as he did not consider Karna to be capable of responsibly handling such a deadly weapon. Moreover, he was aware of Karna's ill will towards Arjuna.</p>
    <p>Karna then went to Parashurama, and lied about being a Brahmin. He implored Parashurama to become his guru. Unaware of the falsehood, Parashurama agreed. Karna was a dedicated student. He pleased Parashurama with his hard work and skills. In return, Parashurama gave Karna the knowledge of the Brahmastra. When Parashurama got to know of the lie, he warned Karna that the weapon acquired through falsehood would be of no use for him. Nevertheless, Karna was happy as he thought that he was well equipped to face Arjuna.</p>
    <p>By the time Karna finished his training with Parashurama, the Kauravas and the Pandavas too had finished their training. A ceremony was held to celebrate the completion of education of the princes and allow the subjects of Hastinapura to witness their skills.</p>
    <p>After Arjuna had left the audience mesmerised with his display of awe-inspiring weapons, Karna walked into the pavilion, uninvited and unexpected. Looking at Arjuna, he declared that he would display even more extraordinary acts than what he had shown. He sought Drona's permission, who allowed him to take the stage. Karna proceeded to exhibit his skills leaving the audience agape.</p>
    <p>Duryodhana was very happy to see Karna, and even more to see him challenge Arjuna. He welcomed him with open arms and offered to him his kingdom and luxuries. Karna thanked him for his generous gesture and said that all he sought was Duryodhana's friendship and a duel with Arjuna. Arjuna accepted the challenge.</p>
    <p>However, the function was to felicitate the princes of Hastinapura and watch them demonstrate their skills. It was not a battleground. Kripacharya, the royal priest of Hastinapur, handled the situation smartly by saying that only a prince could challenge a prince to a duel, to ensure that the fight was on equal grounds. He then gave Arjuna's introduction, and asked him to introduce himself. Karna stood there unable to speak - he was from a community of Sutas (A mixed community of Brahmins and Kshatriyas). More importantly, he was not a prince.</p>
    <p>Angered by Karna's unjustified aggression towards Arjuna, Bheema taunted that why a Suta was challenging his warrior brother, and told him to instead pick up the reins of a chariot.</p>
    <p>Duryodhana hit back by saying that a warrior's identity was by their valor, and not by birth. And since he needed to be a prince to challenge Arjuna, Duryodhana pronounced him the king of Anga.</p>
    <p>Anga was the <em>janapada</em> of Karna's father, Adhiratha. It was under allegiance to Hastinapur. He crowned Karna there and then. No one objected to the coronation—not then, not later. By the time all this discussion was done, the sun had gone down, and thus the duel was averted much to the relief of the elders.</p>
    <p>Arjuna's superior warfare skills had been a source of constant worry for Duryodhana. With the arrival of Karna, Duryodhana was relieved; he had found a warrior who could match Arjuna. Karna, on his end, felt indebted to Duryodhana. Standing with him would give Karna a chance to fight Arjuna and show the world he was the greatest warrior. Thus was laid the foundation of a lifelong partnership.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_____A",
      clue: "The prince who was best known for his skills in archery - he displayed these skills on his final day after all the lessons (along with the other Pandavas and Kauravas).",
      answer: "ARJUNA"
    },
    {
      id: 2,
      pattern: "__R__",
      clue: "A young man who suddenly entered the arena and challenged this prince.",
      answer: "KARNA"
    },
    {
      id: 3,
      pattern: "__R_______",
      clue: "The prince who offered him the Kingdom of Anga. With that, began a friendship of doom.",
      answer: "DURYODHANA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Arjuna
      2: { x: 0, y: 1 }, //Karna
      3: { x: 2, y: 1 } //Duryodhana
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["challenged him"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["made him king of Anga"] }
    ]
  }
},
{
  id: 73,
  slug: "the-warrior-who-could-not-return",
  title: "The Warrior who Could Not Return",
  description: "A young warrior enters a deadly battle formation, while a powerful king blocks those who could have followed him.",
  accent: "#f4a261",
  congratsMessage: "You followed the tragic story of a warrior trapped inside the Chakravyuha. Try your luck with the next puzzle!",
  nextSlug: "those-who-stayed-away-from-the-war",
  trivia: `
    <p>After the fall of Bhishma, Duryodhana appointed Dronacharya as the commander of the Kaurava forces and requested him to capture Yudhishtira alive.</p>
    <p>Duryodhana's reasoning was that if Yudhishtira was captured alive, he could be cajoled into playing the dice again, and the Pandavas could be packed off to the jungle for another thirteen years.</p>
    <p>Dronacharya agreed and said that he could capture Yudhishtira, but on a condition. Arjuna had to be kept away from Yudhishtira – not even Indra could defeat a raging Arjuna in a war.</p>
    <p>A horrific battle played out - however, Yudhishtira was not captured because the Kaurava warriors couldn't keep Arjuna at bay. The next morning, Susharma, the king of Trigarta, with his brothers and his army, dared Arjuna to a battle. This was part of their strategy - to keep Arjuna engaged in combat away from Yudhishtira. Unaware of Drona's plan, Arjuna took Susharma's bait.</p>
    <p>He appointed Satyajeet, a Panchala prince, to protect Yudhishtira, and headed southwards where Susharma and his forces were waiting.</p>
    <p>While Arjuna was away fighting them, Drona and Bhagadatta (the King of Pragjyotisha), rampaged through the Pandava army. Satyajeet fought till his last breath but was finally killed by Drona. On the other side, Bheema was struggling to contain the advances of Bhagadatta.</p>
    <p>After some time, Arjuna managed to return, and joined Bhima's defense against Bhagadatta, who released the deadly <em>Vaishnavastra</em> on Arjuna. But Krishna's astute manoeuvring of the chariot saved him – Krishna took the blow of the weapon on himself. He was endowed with the power to withstand the shakti of the weapon.</p>
    <p>Thus, another day ended without Yudhishtira getting captured. Duryodhana was indignant and blamed Drona, who in turn reiterated that defeating Arjuna was impossible. Arjuna had to be led far enough away, to ensure that he didn't come back before the day ended.</p>
    <p>Susharma again volunteered to face Arjuna, and Drona decided to organize the army in a Chakra Vyuha to trap Yudhishtira. Drona was aware that no one except Arjuna could successfully penetrate the formation and get out of it alive. But what he didn't know was that Abhimanyu – Arjuna's young son, knew how to enter the formation too. (But he did not know how to get out)</p>
    <p>As planned, when Susharma led Arjuna much further away this time, Drona unveiled the Chakra Vyuha. Yudhishtira entrusted the task of entering the Vyuha to Abhimanyu, assuring the young warrior that once he made his way inside, others would follow. However, once Abhimanyu entered the Vyuha, Jayadratha held back the rest of the Pandava warriors single-handedly. He was able to do this because of a boon he had obtained from Lord Shiva – that made him invincible for a day, and gave him the power to keep all the Pandavas (except Arjuna) in check, on that day.</p>
    <p>Abhimanyu was trapped inside the formation, but nonetheless, fought like Kartikeya himself. No Kaurava warrior could match him in a duel. Eventually, the young warrior was killed unethically by a simultaneous attack of six warriors, including Drona and Karna, even though he was weaponless and on the ground.</p>
    <p>Arjuna was devastated when he heard about the ruthless killing of Abhimanyu. Yudhishtira was even more repentant since he had assured Abhimanyu that they would all protect him. He explained the details of the encounter to Arjuna, stating his helplessness and that of the others in moving past Jayadratha.</p>
    <p>Arjuna enquired how Jayadratha was able to hold back such indomitable Pandava warriors, and was told about the boon granted to Jayadratha by Shiva that could be used once. Incensed, Arjuna vowed to kill Jayadratha the very next day, and made a vow that if he didn't, he would jump into the fire.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>This was quite a reckless vow, and Krishna was not pleased. He said that Arjuna should have consulted either him or his brothers before taking such a vow – now his opponents were forewarned and would do their very best to protect Jayadratha.</p>
    <p>Meanwhile, the Kauravas planned their strategy. Drona had planned a three-layered fortification to guard Jayadratha. Six warriors, namely, Karna, Bhurishrava, Ashwatthama, Vrishasena, Kripacharya, and Shalya were assigned to protect Jayadratha in the innermost formation. Drona was going to protect the mouth of the outermost ellipse. To get to Jayadratha, Arjuna would have to break the layers and defeat each of the six warriors.</p>
    <p>While Arjuna expressed confidence that with Krishna's help, he would be able to overpower the opponents, Krishna was worried. All the Kaurava resources would be employed in protecting Jayadratha – Arjuna would need divine power to break through the protective ring that Drona would create.</p>
    <p>Krishna made Arjuna meditate on Shiva that evening and seek protection. He also called for Daruka and asked him to keep the chariot and weapons ready. Krishna was willing to risk the violation of his pledge and take up weapons to fight the Kauravas if such a need were to arise, to save Arjuna. Nevertheless, the need to break the vow did not arise.</p>
    <p>The next morning, Arjuna entrusted Satyaki with Yudhishtira's security and proceeded for his mission with the blessings of the elders. Blowing his conch, Arjuna announced his entry and intention loud and clear. Within minutes he had vanquished the opposing armies of Durmarshana and Dushasana.</p>
    <p>Dronacharya tried to impede Arjuna's march towards Jayadratha. But Drona was not the target that day, Krishna suggested that they leave Dronacharya and move forward – they had a great task to accomplish that day and not enough time.</p>
    <p>After a few shots, Arjuna bowed to Drona, took his blessings and moved forward. Like a raging forest fire, Arjuna started slaughtering Kaurava warriors one after the other. Getting anxious, Duryodhana once again started accusing Drona of going soft on the Pandavas and reminded him where his loyalties lay.</p>
    <p>Drona calmly said that he couldn't leave his position, and with Arjuna gone, he had a chance of capturing Yudhishtira. He asked Duryodhana to himself go and stop Arjuna, and gave him an impenetrable armour to shield him from Arjuna's incisive arrows.</p>
    <p>The sun had begun to move westwards. Arjuna realised that his horses were exhausted and injured. He requested Krishna to feed the horses and remove the arrows struck in their bodies. Krishna loosened the reins and stopped. Seeing Arjuna stranded, the Kaurava army attacked him. But Arjuna was more than a match for all of them, and fought with them standing on the ground. Once the horses were fed, Arjuna and Krishna mounted the chariot and embarked towards Jayadratha.</p>
    <p>Duryodhana did his best to halt Arjuna, but it was in vain. Drona's armour could not protect Duryodhana from being pierced by Arjuna's exceptional archery. He was finally forced to retreat.</p>
    <p>Jayadratha was now in Arjuna's line of sight, but he was still surrounded by six mighty warriors. As Arjuna came close, the six of them, along with Jayadratha, attacked him all at once. Bheema and Satyaki also arrived there to bolster Arjuna's attack. Bheema duelled with Karna and Satyaki with Bhurishrava. Finding a gap, Arjuna launched an attack on Jayadratha.</p>
    <p>Karna, Ashwatthama and the other warriors attempted to check Arjuna's assault and fought valiantly. But Arjuna's focus and determination were impregnable.</p>
    <p>Jayadratha was within reach but still kept secure by other Kaurava warriors. Just then, it seemed as if the sun had suddenly disappeared. Light had faded.</p>
    <p>The warriors dropped their guard for a moment, and Jayadratha was perplexed. Again and again, he looked around in the sky to check if the sun had really set.</p>
    <p>Krishna pointed out to Arjuna that the King of Sindhu had lost his vigil, and he was looking for the sun instead of focusing. This was his chance.</p>
    <p>On cue, Arjuna began to demolish Jayadratha's protective guard. Karna, Kripa, Ashwatthama, Vrishasena, Duryodhana, Shalya were left aghast at the aggression and precision of Arjuna's attack. Other soldiers who had been assigned to protect Jayadratha, were unable to take the sheer force, and ran away to save their lives.</p>
    <p>Jayadratha was now fully exposed, and Krishna instructed Arjuna to take Jayadratha down immediately as the sun was about to set. He also cautioned him not to let his head fall down on the earth. Arjuna had to strike him in such a way that the head would fall in his father's lap.</p>
    <p>Jayadratha had a boon from his father that whoever causes his severed head to fall on the ground would himself explode.</p>
    <p>Heeding Krishna's advice, Arjuna employed a mantra-infused missile and severed Jayadratha's head, and then speedily shot successive arrows to keep the head in flight, and led it towards Vriddhakshatra (Jayadratha's father), who was meditating in the forest outside Kurukshetra.</p>
    <p>The severed head fell on Vriddhakshatra's lap. Taken aback, Vriddhakshatra reflexively stood up, dropping the head on the ground. He exploded as per his boon to Jayadratha. It was one of the most extraordinary feats performed during the war.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "A__U_A",
      clue: "A powerful archer and one of the few people who knew how to enter and exit the Chakravyuha.",
      answer: "ARJUNA"
    },
    {
      id: 2,
      pattern: "S__H__R_",
      clue: "The wife of this warrior. She had fallen asleep after her husband told her about how to enter the formation, and didn't hear about how to exit it.",
      answer: "SUBHADRA"
    },
    {
      id: 3,
      pattern: "A__I__N__",
      clue: "Son of the above couple who was a powerful warior. He was killed unfairly on the 13th day of war.",
      answer: "ABHIMANYU"
    },
    {
      id: 4,
      pattern: "J_Y____T__",
      clue: "The King of Sindhu who used his boon obtained from Lord Shiva to block the other four Pandavas from entering the formation.",
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
      { from: 4, to: 3, sideOrigin: "left", sideTarget: "right", label: ["trapped him in the formation"] }
    ]
  }
}
,
{
  id: 74,
  slug: "those-who-stayed-away-from-the-war",
  title: "Those Who Stayed Away from the War",
  description: "A few powerful warriors chose not to take part in the great war of Kurukshetra. See if you can identify them.",
  accent: "#f38a12",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-guru-dakshina",
  trivia: `
    <p>Rukmi offered the Pandavas his assistance pompously, saying that he had an <em>akshauhini</em> of mighty warriors, who would conquer the earth for them.</p>
    <p>The Pandavas declined his assistance, and Rukmi left the Pandava camp humiliated, only to offer his assistance to Duryodhana. But Duryodhana too turned him away as he considered it below his dignity to accept a warrior, who had been rejected by the Pandavas, as an ally. Rukmi left Kurukshetra along with his men.</p>
    <p>On the day of the battle, every kshatriya, with the exception of Rukmi, Pradyumna and Balarama, was present in Kurukshetra, ready to pounce upon the enemy at the sound of the conch.</p>
    <p>Also, according to folklore – there is a legend about the king of Udupi not participating in the war, but providing food to both armies throughout.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 220,

  nodes: [
    {
      id: 1,
      pattern: "____R___",
      clue: "The elder brother of Krishna, who decided not to take either side in the battle and instead went on a pilgrimage until the war was over.",
      answer: "BALARAMA"
    },
    {
      id: 2,
      pattern: "_R____M__",
      clue: "The son of Krishna and Rukmini who accompanied his uncle and some other Yadavas in their pilgrimage. He was the one who had trained Abhimanyu and the Upapandavas in warfare.",
      answer: "PRADYUMNA"
    },
    {
      id: 3,
      pattern: "__K__",
      clue: "The son of Bhishmaka who first offered himself and his akshauhini for the Pandavas. They rejected his offer, and so did the Kauravas whom he approached next. He therefore did not participate in the battle.",
      answer: "RUKMI"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Balarama
      2: { x: 2, y: 0 }, //Pradyumna
      3: { x: 1, y: 1 } //Rukmi
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
  trivia: `
    <p>After Krishna had slain Kamsa in Mathura, Vasudeva felt that it was time for Krishna and Balarama to be initiated into <em>brahmacharya ashrama</em> — for them to be invested with the sacred thread and to learn the scriptures from a learned Guru. After the Upanayana ceremony, the boys were taken to their teacher – Rishi Sandeepani. They were required to live in the ashrama of their Guru during their entire period of studies.</p>
    <p>The boys were diligent and quick to learn. Under the guidance of Guru Sandeepani, they had mastered the Vedas, Vedangas, phonetics, grammar, astronomy, logic, the different systems of philosophy and the economic sciences — all within the span of sixty-four days!</p>
    <p>Then they approached the Guru and asked him to name his <em>Guru Dakshina.</em> The teacher consulted his wife, and finally told them they desired no material fees. But their son had been drowned in the sea at Prabhasa, and they requested the brothers to restore him to the couple.</p>
    <p>Balarama and Krishna set out for the seashore. The sea brought forth many precious gifts for them and welcomed them. But on being questioned, it denied having swallowed the Rishi's son. Then they went to Yama, the lord of death, and demanded the restoration of their Guru's son. The Guru and the <em>Guru-patni</em> were overjoyed to receive their lost son back, and blessed them.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam — Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 250,

  nodes: [
    {
      id: 1,
      pattern: "__I____",
      clue: "The eight son of Vasudeva and the slayer of Kamsa.",
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
      clue: "The Guru of the two boys. When they finished their studies in his ashrama and asked him to name his Gurudakshina, he asked the boys to restore his son who had drowned at Prabhasa.",
      answer: "SANDEEPANI",
      size: "wide"
    },
    {
      id: 4,
      pattern: "Y___",
      clue: "The God from whom the two brothers brought the lost son back.",
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
  description: "A treacherous picnic turns deadly, but fate leads a Pandava to unexpected strength beneath the waters. Identify these events from the Mahabharatha.",
  accent: "#d2dd38",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-sindhu-kings-revenge",
  trivia: `
  <p>One day, Duryodhana had a great pavilion constructed near the bank of river Ganga, and invited the Pandavas for a picnic.</p>
  <p>Knowing Bhima's fondness for food, Duryodhana made a deadly plan. He made sure that a delicious meal was prepared with a wide variety of dishes. He then took special care to personally serve Bhima more and more helpings. The other Pandavas had finished their meal and went out on a stroll, while Bhima continued eating.</p>
  <p>Finally finishing his meal, Bhima felt sleepy and dozed off on the sandy banks of Ganga. Duryodhana emerged from his hiding place and noticed Bhima lying unconscious. He realized to his satisfaction that the poison was working, and threw Bhima into the river with his brothers.</p>
  <p>Everyone returned to Hastinapura, including the Pandavas, who were concerned about Bhima but thought that he had left before them, unnoticed.</p>
  <p>Meanwhile, Bhima sank into the kingdom of the Nagas. A group of snakes pierced their fangs into his body. But to their surprise, he remained not only unaffected but regained his consciousness. Bhima disentangled the snakes around his body and killed some of them.</p>
  <p>The other snakes were panic stricken and slithered away quickly to their King – Vasuki, and related to him the events that they had just witnessed.</p>
  <p>Vasuki, along with a group of his ministers, came to see the boy. Aryaka (the great grandfather of Kunti), was also one of the ministers – he immediately realized who Bhima was and told Vasuki about him.</p>
  <p>Vasuki realized that the young Pandava prince had been met with treachery and was pleased with his bravery. Upon Aryaka's suggestion, he decided to reward the boy. He offered him bowls of <em>rasakunda</em>, the nectar of strength, telling him that each bowl he drank would give him the strength of a thousand elephants.</p>
  <p>Bhima drank eight bowls of the nectar, and the Nagas watched him in awe. He remained with the Nagas for eight days, and then finally expressed his desire to go back. The Nagas escorted him to the surface of the river, and after that, Bhima rushed straight to Kunti in the palace and told her all that had happened to him.</p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D_R__D____",
      clue: "The eldest son of Dhritarashtra who invited his cousins, the Pandavas, for a picnic.",
      answer: "DURYODHANA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "B_I__",
      clue: "One of the Pandavas, who loved food a lot. Not realising that his cousin had poisoned it, he ate many helpings during the picnic and fell unconscious. He was then thrown by his cousin into a lake.",
      answer: "BHIMA"
    },
    {
      id: 3,
      pattern: "__S__I",
      clue: "The King of serpents at the bottom of the lake, who was pleased with the boys bravery. At the behest of Aryaka, this King offered him bowls of rasakunda, each of which would offer him the strength of a thousand elephants. Who is this King of serpents?",
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
      { from: 1, to: 2, sideOrigin:"right", sideTarget: "left", label: ["threw him into the lake"] },
      { from: 3, to: 2, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["gave him nectar"] }
    ]
  }
},
{
  id: 77,
  slug: "the-sindhu-kings-revenge",
  title: "The Sindhu King's Revenge",
  description: "Humiliation led to a penance, and this penance led to a boon that would change the course of a terrible day in the Mahabharatha war.",
  accent: "#ffcad4",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-arena-of-mathura",
  trivia: `
    <p>One day during the exile, the Pandavas were not at their hermitage. They had gone for hunting, leaving Draupadi and Dhaumya alone. The king of Sindhu, Jayadratha, was riding through the forest on his way to Shalva's kingdom. Draupadi was picking up fruits dropped from the trees outside her hut. As Jayadratha passed by, he accidentally glanced at her. He was awe-struck by her beauty.</p>
    <p>He stopped and asked one of his men to find about her. Jayadratha's attendant approached her and asked her who she was.</p>
    <p>Draupadi said that she was the daughter of Drupada and the wife of the Pandavas. The Pandavas were not here as they had gone out for hunting, but since his king was her brother-in-law, she told him that he was a welcome guest at their hermitage.</p>
    <p>The messenger went back to Jayadratha and conveyed the message to him. The king of Sindhu was a vain man. He was attracted to Draupadi, and determined to make her his wife. He completely overlooked the fact that Draupadi was already wedded to the Pandavas and decided to go into the hermitage.</p>
    <p>Draupadi greeted him, had him seated and offered water to wash his feet. She told him that the Pandavas would be coming soon, and that Yudhishthira would be happy to see him here.</p>
    <p>Jayadratha was, no doubt, happy at the absence of the Pandavas. He asked her how a woman brought up in royal fortunes live this way in the forest - he told her to come with him and that he would make her the queen of Sindhu.</p>
    <p>Draupadi was stunned, but she took care to maintain her poise and told him not to repeat those words again. Dushala was already his queen. Draupadi also reminded him that Bhima and Arjuna were not only strong enough to protect her but also to be able to send Jayadratha to his heavenly abode.</p>
    <p>Jayadratha then forcibly dragged her to his chariot. Draupadi screamed and Dhaumya came running out and tried to protect Draupadi but Jayadratha thrust him aside and raced off on his chariot.</p>
    <p>The Pandavas were returning to the hermitage. When they found out what had happened, they rushed after Jayadratha. Jayadratha ordered his men to attack and stop the Pandavas. But none of them could face their might, and all of them succumbed.</p>
    <p>Jayadratha, now scared for his life, quickly dropped Draupadi out of the chariot and rode away fast.</p>
    <p>Yudhishthira returned to the hermitage with Draupadi and Dhaumya while the other Pandavas raced after Jayadratha. A bunch of arrows shot by Arjuna killed his horses and his chariot tumbled as the horses fell. The king of Sindhu jumped out and ran.</p>
    <p>Bhima ran after him and caught the king. He threw aside his mace and held him by his hair. He would have killed him in that moment, but Arjuna stopped him saying that Yudhishtira wouldn't approve of them killing Jayadratha, since he was their sister Dushala's husband.</p>
    <p>Bhima then unsheathed his sword and shaved off Jayadratha's hair with it, leaving five protruding tufts on his head.</p>
    <p>Jayadratha felt terribly humiliated and disgraced by this whole incident, and vowed vengeance. He meditated hard to appease Lord Shiva to grant him the boon of being the instrument of Pandavas' destruction. After several months, Shiva appeared before him saying that he was pleased with his devotion and he could ask for any boon that he wanted.</p>
    <p>Jayadratha requested that he wanted to defeat and kill the Pandavas and their soldiers in the battlefield.</p>
    <p>Lord Shiva replied that that would be impossible as the Pandavas were invincible. Jayadratha would never be able to slay them, but he instead granted him the boon that he would be able to keep all the Pandavas (except Arjuna) in check during battle for a day.</p>
    <p>Jayadratha was happy with what he could get. This boon turned out to be fatal on the thirteenth day of the Kurukshetra war, when Arjuna was away fighting Susharma. Jayadratha used his boon to stop the other four Pandavas from following Abhimanyu into the Chakravyuha, which ultimately resulted in Abhimanyu being trapped alone inside, and killed unethically.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference – Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "J_Y____T__",
      clue: "The King of Sindhu and the husband of a Kaurava princess. On his way to Shalva's kingdom, he passed by a hut and was awestruck by the beauty of the woman he saw there.",
      answer: "JAYADRATHA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "D___P___",
      clue: "Who was the woman mentioned here? The King forcibly dragged her to his chariot.",
      answer: "DRAUPADI"
    },
    {
      id: 3,
      pattern: "B_I__",
      clue: "Name the prince who captured this king and shaved off his hair to humiliate him.",
      answer: "BHIMA"
    },
    {
      id: 4,
      pattern: "__I__",
      clue: "The God that this King meditated to in order to take his revenge against the Pandavas. This god gave him the boon to be able to hold off the Pandavas for one day of battle.",
      answer: "SHIVA"
    },
    {
      id: 5,
      pattern: "_____A",
      clue: "The only Pandava who was an exception to his boon as he had celestial weapons.",
      answer: "ARJUNA"
    },
    {
      id: 6,
      pattern: "A__I___Y_",
      clue: "The King used this boon on one of the days of the battle, to withstand the Pandavas and prevent them from entering a battle formation. As a result, they were unable to rescue a young prince who was trapped inside the formation, and this prince was then unfairly killed. Name the prince.",
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
      { from: 1, to: 2, sideOrigin:"left", sideTarget:"top", straight:true, label: ["abducted her"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["humiliated"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["granted him a boon"] },
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget: "top", straight:true, label: ["exception to the boon"] },
      { from: 1, to: 6, sideOrigin:"bottom", sideTarget: "top", straight:true, label: ["prevented rescue of"] }
    ]
  }
},
{
  id: 78,
  slug: "the-arena-of-mathura",
  title: "The Arena of Mathura",
  description: "This story is about the death of the tyrant ruler of Mathura, was slain by the eighth child of Vasudeva and Devaki. Identify the characters in this story.",
  accent: "#ffd6a5",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-cursed-ancestor",
  trivia: `
    <p>The sun rose over the eastern horizon - it was the day of the festival in Mathura when the wrestling match was to take place. The vast arena was decorated with flowers and garlands, and spectators had started gathering.</p>
    <p>The wrestlers Chanura, Mustika, Kuta, Sala and Tosala, who were renowned for their strength, prowess and skill in wrestling – had gathered, and were waiting for the matches to begin. At last, Kamsa arrived and took his seat on a raised platform. The trumpets blared forth, the drums sounded and the people cheered their king.</p>
    <p>After their morning bath, Krishna and Balarama went towards the amphitheatre. At the very entrance they were obstructed by the mighty elephant, Kuvalayapida. Krishna asked the mahout to remove the elephant, from their path. Instead, he urged the mighty beast to trample upon the two boys. The elephant moved forward and tried to coil its trunk around Krishna. Krishna, however, caught its tail with both hands, then whirled it round and round. Then he leapt forward and seized the animal's trunk. It fell down with a mighty thud. Krishna ripped out the elephant's tusks and with one blow killed both the animal and its mahout.</p>
    <p>The brothers finally entered the arena, and the people were at once attracted by the divine glow on their faces. Among themselves, they started talking about the deeds and glories of Balarama and Krishna. Kamsa too, awed by their feat, looked helplessly upon their magnificence, and trembled violently within.</p>
    <p>At last the trumpets sounded and the signal was given for the games to start. Chanura, the chief wrestler, approached Krishna and said that on the king's order, he was inviting him and Balarama for a wrestling match.</p>
    <p>The brothers accepted the challenge. Soon, they were locked in fight with the two mighty wrestlers - Krishna with Chanura, and Balarama with Mushtika.</p>
    <p>The people who were watching protested that the fight was unequal and cried out to put a stop to it. However, Krishna managed to kill Chanura, and Balarama killed Mushtika as well. All the other wrestlers fled from the arena in great terror.</p>
    <p>Kamsa's eyes were now red with anger and his body trembled violently with the force of uncontrolled emotions. He ordered for the boys to be driven out of Mathura, for the possessions of the gopas to be seized, to imprison Nanda, and to kill Vasudeva and Ugrasena.</p>
    <p>But before he could even finish giving his orders, Krishna jumped onto his platform. Kamsa immediately drew forth his sword. But Krishna caught hold of Kamsa by his hair from which the royal crown had tumbled down. He swung him around and threw him down into the arena. He was dead. Then he dragged the tyrant all around the arena so that everybody could see him.</p>
    <p>But in spite of his disgraceful end, Kamsa was rewarded in his last moment with a blissful vision of the Lord in all His divine splendour. For Kamsa, although in a negative way, with constant fear and dread in his heart, had never spent even a single moment without thinking about Him!</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference – Bala Bhagavatam – Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "N_R_D_",
      clue: "A divine sage who usually acted as the instrument to carry out the Lord's wishes. He went to the King of Mathura and informed him that he had been tricked, and that Devaki's eighth son still lived.",
      answer: "NARADA"
    },
    {
      id: 2,
      pattern: "A__U_A",
      clue: "One of the chiefs of the Yadava clan who was sent by the King to bring the two sons of Vasudeva to Mathura under the pretext of being invited to see a Yagna.",
      answer: "AKRURA"
    },
    {
      id: 3,
      pattern: "C__NU__",
      clue: "One of the wrestlers in Mathura who challenged Krishna to a match of wrestling.",
      answer: "CHANURA"
    },
    {
      id: 4,
      pattern: "M___TI__",
      clue: "Another wrestler from Mathura who challenged Balarama.",
      answer: "MUSHTIKA"
    },
    {
      id: 5,
      pattern: "K_M__",
      clue: "At the end of the match, Krishna jumped up and caught hold of the King of Mathura by his hair, swung him around, and killed him. Name this King.",
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
      { from: 1, to: 5, sideOrigin:"right", sideTarget: "left", straight:true, label: ["warned him"] },
      { from: 5, to: 2, sideOrigin:"bottom", sideTarget: "top", straight:true, label: ["sent him"] }
    ]
  }
},
{
  id: 79,
  slug: "the-cursed-ancestor",
  title: "The Cursed Ancestor",
  description: "A Pandava trapped by a python discovers that the creature is actually his ancestor who was cursed.",
  accent: "#caffbf",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-stags-curse",
  trivia:`
<p>One day, during the course of their pilgrimage, Bhima entered a mountain cave looking for food. A huge, ferocious python sitting at the mouth of the cave attacked Bhima and held him in its powerful coils. Bhima found himself completely helpless. “Who are you and why have you gripped me in your coils?” Bhima asked and introduced himself, “I am Bhima, son of Pandu.” </p>
<p>The python introduced himself as King Nahusha, one of Bhima’s ancestors. He said that he was under the curse uttered by sage Agastya, who had changed him into a python. Nahusha threatened to swallow Bhima unless he answered all his questions correctly. </p>
<p>When Bhima did not come back after a long time, Yudhishthira became worried. He went along with Dhaumya looking for him. Finally, they arrived at the cave where Bhima was still in the deadly grip of the python. Yudhishthira answered all the questions of the python and got Bhima freed. The python too, was relieved of its curse. It assumed its divine form and proceeded to heaven. </p>
<p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,

  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "____A",
      clue: "A Pandava, who entered a mountain cave and got trapped by a ferocious python.",
      answer: "BHIMA"
    },
    {
      id: 2,
      pattern: "N_H____",
      clue: "What is the name of this python? He was an ancestor to the Pandavas who had been cursed.",
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
      clue: "The elder brother of the Pandava prince, who came in search for him. He answered all the questions posed by the python, and got his brother freed. The python too, assumed its divine form and proceeded to heaven.",
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
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["trapped him"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["cursed him"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true, noArrow:true,label: ["brothers"] }

    ]
  }
},
{
  id: 80,
  slug: "the-stags-curse",
  title: "The Stag's Curse",
  description: "A king’s fatal mistake in the forest leads to a terrible curse. Identify the characters from this story.",
  accent: "#ffadad",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-visit-to-the-kuru-court",
  trivia: `
  <p>Pandu, after his marriage, set out on an expedition of conquest with the blessings of Bhishma. Heading a large army, he easily defeated various kings and princes. The kingdoms of Magadha and Mithila were vanquished, and Pandu came back to Hastinapura.</p>
  <p>Pandu received a rousing welcome from all the Kuru elders upon his return. The hard campaign and years of war left Pandu with the desire to relax in the calm surroundings of a forest retreat. Bhisma consented to Pandu's wishes, and Pandu retired to the forest with his wives Kunti and Madri.</p>
  <p>Suddenly, a mishap occurred. One day, Pandu noticed a large stag which was with its mate, while roaming in the forest one day. He shot arrows at them, fatally wounding the stag couple. The stag and his mate were actually a sage king and his wife. As they fell, they transformed into their human forms and cried out that he had committed a great sin – and even a hunter wouldn't attack an animal at such a moment. This act was unbecoming of a Bharata king.</p>
  <p>The sage died with a curse on his lips, that – he would die in the first passionate embrace that he makes with his wife and that she too would follow him to the abode of his ancestors.</p>
  <p>Pandu regretted his folly, and did not see any wisdom in going back to Hastinapura. He decided to lead the life of a recluse and live on alms. The queens too insisted on following him, although he wanted them to go back to Hastinapura.</p>
  <p>The king and queens discarded their royal clothes, jewelry and silks, and went deep into the forest. They arrived at Shatashringa, the mountain of a hundred peaks.</p>
  <p>Eventually, Kunti disclosed her secret to Pandu – the boon that she had received from Durvasa.</p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "__N__",
      clue: "A king who noticed a large stag roaming in the forest with its mate and shot his arrows at them. They were actually a sage and his wife. As they fell, they cursed him that he would die in the first passionate embrace with his wife.",
      answer: "PANDU"
    },
    {
      id: 2,
      pattern: "____I",
      clue: "The wife of this King whose presence made him forget the warning and made him go into a spell of uncontrollable desire. This ultimately resulted in his death. Name the wife of this king.",
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
  description: "After the fall of Kamsa, a Yadava is sent to Hastinapura by Krishna to enquire after the welfare of the Pandavas. Identify the characters.",
  accent: "#ffd6a5",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-return-from-the-celestial-realms",
  trivia: `
    <p>Akroora, as instructed by Krishna, set out on his mission to Hastinapura. He met king Dhritarashtra and the members of the court and family: Bhishma, Vidura, Drona, his son Ashwatthama, the eldest of the Kauravas, Duryodhana, and Karna, all the five Pandavas and their mother Kunti.</p>
    <p>Akroora stayed in Hastinapura for a few days. During that time, he learnt that the sons of Dhritarashtra were very jealous of their cousins who were more popular with the people because of their intelligence, bravery, skill in the arts and sciences and their great modesty.</p>
    <p>Several times, Dhritarashtra's sons, the Kauravas, tried to do away with the Pandavas, but invariably their plans failed. When the time for Akroora's departure drew near, he requested the old king to be impartial in the treatment of his nephews.</p>
    <p>But Dhritarashtra confessed that he was much too attached to his sons for his decisions to be impartial. Akroora, saddened by what he had seen and heard, hastened back to Mathura and detailed his report to Krishna.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam – Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "T__V___A",
      clue: "While on his way to Mathura to defeat Kamsa, Krishna came across a girl who had a hunchback. She was carrying a pot of fragrant sandalpaste to give to Kamsa, which he asked for, and she obliged. Pleased with the devotion of this maid, he blessed her. What is the name of this girl?",
      answer: "TRIVAKRA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "A_R_R_",
      clue: "After killing Kamsa, Krishna asked the Yadava chief (who had brought him to Mathura), to now go to Hastinapura to enquire after the welfare of the Pandavas. Name this Yadava chief.",
      answer: "AKRURA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "D___T________",
      clue: "When the character above visited Hastinapur, he noticed that the sons of the King were very jealous of their cousins. He requested the King to be impartial in the treatment of both his sons and nephews, but the King, to his disappointment, confessed that he is much too attached to his sons to be impartial. Who is this King?",
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
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget: "top", straight:true, label: ["visited him"] }
    ]
  }
},
{
  id: 82,
  slug: "the-return-from-the-celestial-realms",
  title: "The Return from the Celestial Realms",
  description: "After visiting the celestial realms, the Pandava prince reunited with his brothers near the mountain peaks.",
  accent: "#bde0fe",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-princes-of-hastinapura",
  trivia:`
<p>Arjuna’s return from the celestial realms was imminent. The other four Pandavas had promised to meet him at Mount Gandhamadana. They began their journey, but the trek was difficult. Bhima took upon himself the responsibility to carry Panchali on his shoulders. On their way to the mountain, there was a raging storm. When the storm subsided, they began their journey once again. Suddenly, Draupadi collapsed with exhaustion and lay unconscious. </p>
<p>Bhima called Ghatotkacha. The mighty son of Bhima offered to carry not just Draupadi but all of them to the mountain peak. In an instant, he flew upwards carrying them all to the mountain top, alighting at the hermitage of sage Narada and Narayana. He set them down gently. They waited for Arjuna there. </p>
<p>A few days later, they saw a radiant chariot zoom past in the sky. The glowing chariot driven by a hundred divine horses landed at the mountain top. They discovered to their joy, Arjuna, crowned, jewelled and in princely clothes, alighting from the chariot. </p>
<p>Arjuna touched Dhaumya’s feet first, followed by those of his elder brothers. Everyone rejoiced his arrival, and Arjuna was quite enthusiastic about the celestial weapons he had brought. He showed them to Yudhishthira and was about to demonstrate their use out of excitement when Narada appeared. </p>
<p>He rushed to Arjuna and held his hand. The Rishi told him not to use the weapons unless absolutely necessary - his one wrong move could destroy the three worlds. </p>
<p>After Narada’s warning, Arjuna always remained careful in using his weapons. </p>
<p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,

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
      clue: "The mountain where the other Pandava brothers trekked to, to meet him upon his return.",
      answer: "GANDHAMADANA",
      size: "wide"
    },
    {
      id: 3,
      pattern: "___T_T_____",
      clue: "The young Rakshasa boy who carried Draupadi and the Pandavas to the mountain peak.",
      answer: "GHATOTKACHA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "N_R___",
      clue: "The sage who stopped the Pandava prince from demonstrating the use of his weapons to his brothers and warned him against using them unless absolutely needed.",
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
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["carried them to"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["warned him"] }
    ]
  }
},
{
  id: 83,
  slug: "the-princes-of-hastinapura",
  title: "The Princes of Hastinapura",
  description: "The princes born from the queens of Vichitravirya would shape the fate of the Kuru kingdom. Identify their stories in the puzzle below.",
  accent: "#e9c46a",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-solar-household",
  trivia: `
    <p>Dhritarashtra, Pandu and Vidura had finished their education and training. It was time to get them married. Bhishma had heard many good things about the daughter of the king of Gandhar, Subala, and thought that she could be a worthy wifr to Dhritarashtra. Gandhari was a virtuous young lady, well versed in economics and administration. An ardent devotee of Shiva, she had received a boon from Him to beget a hundred sons.</p>
    <p>Bhishma visited Subala with the proposal for Gandhari's marriage to Dhritarashtra. On being told about the lack of eyesight of the prince, Subala hesitated. But then, the Kuru kingdom of Hastinapur protected by Bhishma was mighty, renowned and prosperous. Hence, giving the proposal some serious thought, Subala agreed to marry his daughter to Dhritarashtra.</p>
    <p>When Gandhari learnt about the blind prince and that her parents were in favour of the marriage, she did not object. Instead, she took a silken cloth, made many folds and tied that sash around her own eyes. This was Gandhari's way of indicating her acceptance of her husband and her future life. The marriage was solemnised. Gandhari was received by Bhishma and the Kaurava family with a lot of respect. On her part, Gandhari, with her devotion and affectionate conduct, quickly won over the hearts - Veda Vyasa was so impressed by Gandhari's service that he conferred upon her the boon of begetting hundred sons, once again.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>To everyone's surprise, when Gandhari was giving birth, a lump of flesh came out. Vyasa instructed her to soak the lump in cold water, and get him a hundred and one pots filled with ghee and make arrangements to store these pots in a dark and cool place, where they cannot be easily accessed. He then put the lumps in the pots, covered their mouths and asked them to be hidden in the appropriate location.</p>
    <p>He asked for the pots to be hidden for a length of time, and only after that, the lids were to be opened. Saying thus, he left.</p>
    <p>At the stipulated time, the pots were opened one by one. The first one to be taken out was Duryodhana. As soon as he was brought out, he started crying loudly. His cry sounded like the braying of a donkey. As if responding to his cry, donkeys, jackals, crows and other such creatures started croaking loudly, creating a hideous commotion. A sudden thunderstorm struck the city. These omens were inauspicious.</p>
    <p>However, Dhritarashtra was too elated to bother about the omens, and excitedly asked Vidura and Bhishma if this boy would become the king of Hastinapura.</p>
    <p>Vidura said that the boy seemed to be a harbinger of destruction. He said that it was a better idea to give up this baby and save the larger family. Dhritarashtra would still have ninety-nine other sons.</p>
    <p>Wise sages have said, "If need arises, for the sake of the family, one should sacrifice the son. For the sake of the town, a family should be sacrificed and for the sake of the country, the town should be sacrificed."</p>
    <p>Dhritarashtra was already enamoured by his eldest son and did not heed Vidura's advice, not this time, and nor in the future. A father who was naturally blind had further been blinded by ambition and a mother who had made a conscious choice to not see—neither of them could see the man their eldest son was growing up to be. When they did see, it was already very late.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>Pritha was born as the eldest daughter of Yadava chieftain Surasena. She was given away by her parents in the care of her father's friend, Kuntibhoja, who had no kids of his own then, and thus given the name Kunti.</p>
    <p>Growing up in Kuntibhoja's household, Pritha was a very disciplined, soft-spoken and responsible girl. Once, a rishi named Durvasa visited Kuntibhoja and expressed a desire to spend a few days in the king's palace. Durvasa was known to be a very short-tempered rishi who had a reputation of being offended easily. Kuntibhoja assigned Kunti to his service. Kunti served Durvasa with complete sincerety and patience. Once in a while, to test her, Rishi Durvasa would throw tantrums and make difficult requests, but Kunti kept her calm and fulfilled all the demands to the best of her abilities. Impressed with her dedication, Durvasa blessed her with a mantra, one that would allow her to call upon any deity and beget a child from him.</p>
    <p>The boon was to play a big role in Kunti's future, about which she had little clue then.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled – Ami Ganatra</em></p>
`,
  rowHeight: 260,

  nodes: [
    {
      id: 1,
      pattern: "D_R_______T__",
      clue: "The son of Ambika. Although he was the eldest prince, he was not given the throne due to his visual disability.",
      answer: "DHRITARASHTRA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "______R_",
      clue: "A princess who married him. In order to share her husbands fate, she covered her eyes with a dark cloth, never to remove it again. (except once)",
      answer: "GANDHARI"
    },
    {
      id: 3,
      pattern: "__N__",
      clue: "The son of Ambalika who was unrivalled in archery, and made the King of Hastinapura.",
      answer: "PANDU"
    },
    {
      id: 4,
      pattern: "__N__",
      clue: "The princess who was married to this King.",
      answer: "KUNTI"
    },
    {
      id: 5,
      pattern: "M_D__",
      clue: "The sister of King Shalya, who was also married to this King.",
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
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, noArrow:true },
      { from: 4, to: 3, sideOrigin:"left", sideTarget:"right", straight:true, noArrow:true },
      { from: 5, to: 3, sideOrigin:"left", sideTarget:"right", straight:true, noArrow:true }
    ]
  }
},
{
  id: 84,
  slug: "the-solar-household",
  title: "The Solar Household",
  description: "From this family emerge children who rule over death, time, justice, and the sacred rivers of the earth. Identify the characters from the solar household.",
  accent: "#daf90e",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-child-with-the-golden-armour-and-earrings",
  trivia: `
    <p>Sanjana was the daughter of Tvashtadeva, the architect of Devas. He wanted Sanjana to marry a powerful God and advised her that there were only three suitable contenders — Vidyut, the god of lightning; Agni, the god of fire; and Surya, the sun god.</p>
    <p>Sanjana thought for a while. Lightning was temporary, and even fire only arrived when it was intentionally lit. However, the sun held a constant place in the world and was helpful to mankind. She concluded that Surya was the most powerful and decided to marry him.</p>
    <p>Soon, the two were wed. Sanjana quickly realised that she had not accounted for one thing — the immense heat he emanated! Surya's intensity was so fierce that Sanjana found it very difficult to live with him.</p>
    <p>One day, she explained the situation to her father. Tvashtadeva used his expertise to reduce the sun's energy. With the unused energy, he created three divine objects.</p>
    <p>The first was the <em>Pushpaka Vimana</em> — the vehicle that could traverse all the realms, and was given to Kubera. (However, Ravana later snatched it away from Kubera and used it to kidnap Sita. After his death, the vehicle was given to Vibhishana.)</p>
    <p>The second object was a <em>trishula</em>, which was given to Shiva. And the last object was the <em>Sudarshana Chakra</em>, which was given to Vishnu. This weapon had 108 sharp edges in two rows that move in a circular manner and in opposite directions.</p>
    <p>Once Tvashtadeva finished making these objects, Sanjana felt an obvious reduction in Surya's energy. However, she still could not bear it.</p>
    <p>But if she went back to her father's home again, Surya would eventually call her back, and her father too would send her back.</p>
    <p>Finally, she thought of a solution. She decided to make a clone of herself — one that would be able to withstand the sun's warmth. She named the clone Chaya and instructed her to behave exactly like her and stay with Surya.</p>
    <p>After creating the clone, she went back to her father's home, at ease with the knowledge that Surya would not call her back.</p>
    <p>In time, Chaya gave birth to a son and named him Shani. When this news reached Tvashtadeva's abode, he was furious and confronted his daughter. Sanjana finally admitted to creating the clone.</p>
    <p>Tvashtadeva was aghast at this and told her that cloning disturbs the balance of nature, and instructed her never to do it again. He told her to go back to Surya's home.</p>
    <p>Sanjana returned, and destroyed the clone. She somehow managed to live with her husband in spite of the terrible heat. Time passed, and Sanjana gave birth to Yama and Yami.</p>
    <p>However, Shani constantly reminded Sanjana of Chaya, and she gradually became resentful towards him, constantly neglecting him. Shani, who did not know that his mother was no more, kept thinking that Sanjana was his mother, and was bewildered by her behaviour.</p>
    <p>Surya, on the other hand, was too busy with his godly duties to notice any of this. Sometimes, when Shani became lazy, Sanjana would exaggerate his behaviour when talking to her husband. This gradually created a rift between Surya and Shani.</p>
    <p>When the children grew up, Surya called them to his chambers and told them that they had become old enough to handle more responsibilities.</p>
    <p>To Yami, he instructed her to go and flow on the earth as river Yamuna. He also told her that Lord Vishnu, in the form of Krishna, would grow up around her for a period of time. People who took a dip in her waters would wash away their sins, and that she would be represented in temples as a lady with a tortoise, because of the number of tortoises that would reside in her waters. Yami accepted her responsibility and departed to the Earth.</p>
    <p>Then Surya turned to Yama and told him that he would be placed in charge of the protection of Dharma. He was supposed to keep a count of every being's good karma and bad karma, and at their death, dole out punishment and reward accordingly. Yama too accepted his responsibility, and departed to Mrityuloka.</p>
    <p>Finally, Surya turned to Shani and told him that he would not be given any responsibility as he was completely useless. Shani was taken aback and then turned to his mother. But she did not say anything.</p>
    <p>At this, Shani lost his temper and lashed out about the way she had been treating him all those years. Sanjana was furious, and cursed him for his legs to be paralysed from that moment on. Immediately, Shani fell to the ground as his legs gave way.</p>
    <p>Surya was startled by Sanjana's ferocity, and wondered how a mother could curse her own child that way. Finally, Sanjana could not hold the secret any longer, and told the story of Chaya and her son Shani. Surya, upon hearing this, took pity on Shani. He told him that he would reverse Sanjana's curse, but that a small limp would always remain on his leg.</p>
    <p>Then Surya added that he would give him the responsibility of doling out judgements, punishments and rewards — but this would be during people's <em>life</em> (unlike his brother, who gave punishments and rewards after <em>death</em>).</p>
    <p>He told him that he would have an indispensable place in the planetary system as Saturn, and instructed him to do his duty without any favour or fear, and not to spare anyone from the consequences of their actions, irrespective of whether they were humans, gods or demons.</p>
    <p>Shani was surprised, and glad that the truth had been disclosed. He told his father that he would follow his orders and would appear in each person's life a maximum of three times. Each time, he would stay for seven and a half years. That period would be called <em>Sade Sati</em>, and during that time, the person would feel a pain as intense as his own suffering — but they would emerge stronger and purer from the experience, and he would be very compassionate with them.</p>
    <p>And since he and Surya had a history of conflict, he told him that he would not occupy the same house in an astrological horoscope, to avoid difficulties. Surya nodded in agreement and Shani departed.</p>
    <p>Surya then turned his focus towards his wife. He was furious with her, and increased the intensity of his heat until she was forced to leave their home.</p>
    <p>She then went to the Himalayas, and not wanting anyone to recognise her, changed her form to that of a mare.</p>
    <p>As time went on, Surya's anger dissipated and he became calm. Thoughts of Sanjana flooded his mind. He realised that his heat was unbearable for her as he maintained his intensity all day. He then decided that he would be gentle in the morning, attain his maximum temperature gradually by noon, and reduce it towards the evening. Surely, Sanjana would be able to live with him comfortably then.</p>
    <p>Convinced that it was the right move, Surya went in search of her, but could not find her anywhere. But since he was the sun god, he could see everything in the world. Eventually, he learnt that she had transformed into a mare living in the Himalayas. He went to find her, disguised as a horse.</p>
    <p>When Sanjana laid eyes on the horse, she saw through the disguise and knew who he was. They finally came to an understanding and decided to live in the Himalayas for some time.</p>
    <p>Soon, Sanjana had twin horses called the Ashwini Kumaras ("Ashwa" refers to a horse in Sanskrit), and the couple returned to their home.</p>
    <p>These twins grew up to be physicians in the heavens, and were the main controllers of the horses yoked to Surya's golden chariot. The Ashwini Kumaras arrive in the morning as rays and go to work, and it is believed that they are the early sun rays that help in curing skin diseases.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales About Women in Mythology</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "S_N____",
      clue: "The daughter of the architect of gods who created a clone of herself and made it take her place, as she was unable to bear the lustre of her husband.",
      answer: "SANJANA"
    },
    {
      id: 2,
      pattern: "S_R__",
      clue: "The celestial god who is the luminous one.",
      answer: "SURYA"
    },
    {
      id: 3,
      pattern: "C__A__",
      clue: "The clone who took her place as his wife. In time, she gave birth to a son.",
      answer: "CHHAYA"
    },
    {
      id: 4,
      pattern: "S____",
      clue: "Name the son of the clone who was given the responsibility of doling out judgements, punishments and rewards to people in their lifetimes. He is the planet Saturn.",
      answer: "SHANI"
    },
    {
      id: 5,
      pattern: "Y___",
      clue: "One of the sons who was placed in charge of the protection of Dharma.",
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
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"right", straight:true, label: ["became his wife(clone)"] },
      { from: 3, to: 4, label: ["son"], sideOrigin:"bottom", sideTarget: "top" },
      { from: 1, to: 5, label: ["son"], sideOrigin:"bottom", sideTarget: "top" },
      { from: 1, to: 6, label: ["daughter"], sideOrigin:"bottom", sideTarget: "top" }
    ]
  }
},
{
  id: 85,
  slug: "the-child-with-the-golden-armour-and-earrings",
  title: "The Child With the Golden Armour and Earrings",
  description: "This is the story of the boy born due to a born given to his mother by a fiery tempered sage. Identify the characters from this Mahabharatha story.",
  accent: "#fb8005",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-fall-of-a-heavenly-dancer",
  trivia: `
    <p>Kunti was born as the eldest daughter of the Yadava chieftain, Surasena. She was named Pritha, and was given away by her parents in the care of her father's friend, Kuntibhoja, who had no children of his own.</p>
    <p>Growing up in Kuntibhoja's household, Pritha was a very disciplined, soft-spoken and responsible girl. She was well mannered and disciplined with one and all. Once, a rishi named Durvasa visited Kuntibhoja and expressed a desire to spend a few days in the king's palace. He had a reputation for being offended easily and Kuntibhoja assigned Kunti to his service. Kunti served Durvasa with extreme care and patience. Once in a while, to test her, Durvasa would make difficult requests, but she always kept her calm and fulfilled all the demands to the best of her abilities.</p>
    <p>Impressed with her dedication, Durvasa blessed her with a mantra – one that would allow her to call upon any deity and beget a child from him.</p>
    <p>At the time, she was just a young girl. She wondered if it was really possible to call a deity using the mantra, and curiosity got the better of her. She called upon Surya Deva. Much to her astonishment, he came intending to bless her with a son. Scared, Kunti asked for forgiveness and requested him to go away.</p>
    <p>However, Surya Deva was bound by the power of the mantra and couldn't return without fulfilling the deed for which he was called.</p>
    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>
    <p>Kunti was blessed with a son with a natural kavacha and kundala that gave him a divine aura. But the reputation of her father, who was also the King of Kunti Desha, was paramount. How could she have a child when she wasn't even married? She did not want to do anything that would bring her parents shame.</p>
    <p>Kunti wrapped the baby and put him in a basket, letting it float away. She prayed to Surya Deva to take care of his child. The basket was retrieved in the kingdom of Anga, by Adhiratha and Radha of the Suta community. They adopted the baby as their own child, and named him Vasusena. Kunti confirmed through her spies that the child was safe and growing up in Adhiratha's household.</p>
    <p style="margin-top:20px; font-size:20px; font-style:italic; color:#aaa;">✦ A Bonus story!✦</p>
    <p>In a previous lifetime, Arjuna was known as Nara. Nara and Narayana were born to Dharma and Murti Devi. In their time lived a demon known as <em>Sahasra Kavacha</em>, whose body was protected by a thousand armours.</p>
    <p>He had a boon that each armour could only be destroyed by an opponent who had done a thousand years of penance and who could fight the demon for a thousand years. But whoever destroyed the armour would immediately fall to the ground and die.</p>
    <p>First, Nara meditated for a thousand years, and then fought <em>Sahasra Kavacha</em> for a thousand years and destroyed one of his armors. Narayana instantly took his place and resumed fighting with the demon, while Nara was reborn and meditated for a thousand years for the strength to defeat <em>Sahasra Kavacha</em>. Thus, Nara and Narayana alternated until there was only one armour left to destroy the demon. At that point, the demon managed to escape.</p>
    <p>It is said that the same demon was later born as Karna, who was slain by Arjuna and Krishna, who were the incarnations of Nara and Narayana.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha Unravelled by Ami Ganatra and Unusual Tales from Mahabharatha by Sudha Murthy</em></p>
`,
  rowHeight: 270,

  nodes: [
    {
      id: 1,
      pattern: "K_N__",
      clue: "The young girl who had to take care of the sage who had visited Kuntibhoja, and fulfilled his every slight demand. Name this character.",
      answer: "KUNTI"
    },
    {
      id: 2,
      pattern: "D___A__",
      clue: "The Rishi who granted the girl a boon that she could invoke any God and be blessed with a son from him. This sage is usually known for losing his temper.",
      answer: "DURVASA"
    },
    {
      id: 3,
      pattern: "S_R__",
      clue: "The god who was invoked by the girl in her curiosity. Bound by the mantra, he blessed her with a child.",
      answer: "SURYA"
    },
    {
      id: 4,
      pattern: "K____",
      clue: "Name the baby who was born with golden armour and earrings.",
      answer: "KARNA"
    },
    {
      id: 5,
      pattern: "A__I_____",
      clue: "A charioteer who found this baby and adopted him.",
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
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["granted her the boon"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["invoked him"] },
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget: "top", label: ["son"] },
      { from: 1, to: 4, sideOrigin:"bottom", sideTarget: "top", label: ["son"] },
      { from: 5, to: 4, sideOrigin:"left", sideTarget:"bottom", straight:true, label: ["adopted him"] }
    ]
  }
},
{
  id: 86,
  slug: "the-fall-of-a-heavenly-dancer",
  title: "The Fall of a Heavenly Dancer",
  description: "This is the story of an apsara who fell in love with a powerful king from the Chandravamsha. Identify the characters from their story.",
  accent: "#e0aaff",
  congratsMessage: "You've followed the story of Urvashi and Pururava! Well done! Onward to the next puzzle!",
  nextSlug: "the-choice-before-the-war",
  trivia: `
    <p>A long time ago, Nara and Narayana were performing a penance for the welfare of the people on Earth, in the Badrika ashrama of the Himalayas.</p>
    <p>When the king of gods – Indra, heard about this intense penance, he became worried. He called his Apsaras — Rambha and Pushpalata, and instructed them to spoil the penance of the two meditating sages. He said that he would also send Manmatha (the god of love) to hasten the process.</p>
    <p>The Apsaras agreed and descended to earth. Manmatha created a stunning ambience of springtime around the two sages, with blooming flowers, fresh green trees, beautiful ponds and chirping birds. However, the sages did not open their eyes. Manmatha told the Apsaras that he had done his duty, and that he did not want to stand there anymore like the previous time he had done so with Shiva (who had cursed him to burn into ashes), and that the job was now all theirs.</p>
    <p>Eventually, when Narayana realised what was going on, he was furious. Both Rambha and Pushpalata became pale with fear, knowing that the accomplished sages could give powerful curses. They immediately pleaded with him that they were bound by the laws of their realm, and that their master, Indra, had ordered them to do his bidding.</p>
    <p>Angered by this, Narayana told Indra that he was performing a penance on behalf of the people on earth, but that he always assumed that any meditating sage was greedy for his throne, and would then send Apsaras to distract them.</p>
    <p>He then continued that these Apsaras could be the most stunning beings in the heavens, but that with his powers, he could easily create a more beautiful woman than all of them combined. Saying thus, he created a striking maiden, whose kind of beauty the world had never seen. When she came and touched his feet, Narayana turned to Indra and told him that she was his mortal daughter from the penance, filled with good virtues.</p>
    <p>Then, Indra requested if he could take her to his abode and make her the head of the Apsaras, and Narayana agreed. With Urvashi's consent, Indra took her to heaven.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Only the immortals could stay in the heavens — how could a human be allowed to enter the realm in her mortal body? She could enter only after she had died and lost her human form.</p>
    <p>The debate went on until the gods finally saw Urvashi, and once they did, they immediately allowed her to be in their realm. They granted her immortality, the power to transform, travel in an instant, and other powers. Though Urvashi was of human origin, she could live in the heavens forever.</p>
    <p>Meanwhile, Bharata Muni (the father of Indian Classical Dance) saw Urvashi's outstanding dancing skills, and requested Indra to let her play the lead role in his play — "Lakshmi Swayamvara" — since she resembled Lakshmi in her appearance and virtues.</p>
    <p>Indra gave his blessing, and Urvashi was thrilled too.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Kesi was the current King of Asuras, and his spies told him about Urvashi and her magnificence. Immediately, Kesi wanted to kidnap her, thinking he deserved a beautiful wife such as her.</p>
    <p>While he was discussing the plan of abduction, the wandering sage Narada came by and heard about what was going on. He laughed and told Kesi that he should drop his plans, because Urvashi lived in the heavens, and Indra had many mighty and powerful friends — he would only start a war if Kesi kidnapped her.</p>
    <p>Narada suggested a better strategy. He said that Apsaras sometimes came down to the earth to enjoy its beauty, which was unavailable in the realm above. He told him to use that chance to meet Urvashi and profess his love for her, as genuine love would attract any woman.</p>
    <p>Soon, Bharata Muni decided to stage the play "Lakshmi Swayamvara" at Kubera's court, and he sent his Pushpaka Vimana to escort the actors to the court.</p>
    <p>On the way, Urvashi and her friends looked down at the earth and saw that it was the rainy season. Misty clouds covered the sky, and the planet looked lush. Urvashi suggested that they take a break and enjoy the green beauty of the earth for a while.</p>
    <p>Everyone stepped down and began to enjoy their surroundings. At this point, Kesi saw Urvashi. She was so beautiful that he knew she would not accept him willingly. So, he returned to his previous plan of kidnapping her. He transformed himself into a whirlwind and snatched Urvashi away from her friends, who began screaming for help.</p>
    <p>King Pururava (who was from the Chandravansha, a great warrior and a friend of Indra's) heard the cries and followed Kesi. Soon, a fierce fight took place between them and Kesi lost.</p>
    <p>After the battle, Pururava looked at Urvashi clearly for the first time and fell in love with her. She was unimaginably beautiful. Urvashi also returned his feelings, but the two had to go their separate ways — Urvashi to Kubera's court in the Pushpaka Vimana, and Pururava to his kingdom.</p>
    <p>However, day and night, Urvashi thought of Pururava.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>On the day of the performance, the court was overcrowded with people excited to see the show, and even Vishnu and Lakshmi were present.</p>
    <p>When Urvashi stood up to garland Vishnu during the climax of the play, she was supposed to say — "Of all the beings in the world — sura, asura and others, I garland Vishnu."</p>
    <p>However, Urvashi, who was immersed in thoughts of Pururava, said — "I garland Pururava."</p>
    <p>Everyone was astounded, and silence filled the room. The play was brought to a halt, and Bharata Muni was furious since he had persevered and taken years to find a perfect lead — and she had spoiled it completely by uttering the name of a human. He cursed her to become human, and to live only on the earth.</p>
    <p>Within seconds, Urvashi found herself on earth as a mortal. Indra was greatly distressed, as the gem of his court had been taken away due to a small error. He pleaded with Bharata Muni to forgive Urvashi. The sage relented and modified the curse, saying that when Urvashi became pregnant, and her husband learnt about the baby, she would cease to be human, and return to the heavens.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Urvashi was very happy to find herself back with Pururava. Deeply in love, they got married and quickly became inseparable.</p>
    <p>At some point, Urvashi unknowingly wandered into a jungle that belonged to Karthikeyan, the son of Shiva. She did not know that the jungle carried a special rule — no woman was allowed to enter. Once she went in, she was not allowed to leave and became a prisoner.</p>
    <p>Meanwhile, Pururava had begun an aggressive search for his wife, and at last, a messenger came and informed him about Urvashi's situation. Quickly, Pururava departed for the forest to meet Karthikeyan and requested him to release his wife. Karthikeyan agreed and allowed Urvashi to leave.</p>
    <p>Soon, the couple went back to their happy life. After some time, Urvashi found out that she was pregnant. After days of worry and thought, she formulated a plan. She knew that Sage Chyavana and his wife Sukanya were a good and pious couple who lived in the forest nearby.</p>
    <p>When she sensed that the time was right, she told Pururava that she wanted to spend some time with them. Pururava agreed, and Urvashi went to Sage Chyavana and Sukanya and explained her situation to them. They were kind and looked after her until she had a baby boy, whom she named Ayush. With sadness in her eyes, she gave the baby to the couple and requested them to take care of him.</p>
    <p>She then left the ashrama and returned to Pururava, who remained unaware of the birth of his son. The years passed.</p>

    <p style="text-align:center; color:var(--accent-color); font-size:18px; margin: 20px 0;">— ✦ —</p>

    <p>Meanwhile in the heavens, Indra grew impatient and upset at Urvashi's absence. He had assumed that she would have returned to his court by now. He saw the way she was sacrificing a big part of her life to be with Pururava, and realised that there would be no end to this. He decided to trick them so that she could come back to the heavens quickly.</p>
    <p>Indra then called two of his spies. He instructed one of them to transform into a vulture and grab the precious necklace that Urvashi wore — a family heirloom that Pururava had given her.</p>
    <p>He told the second spy to dress up like a poor sage and go to Chyavana's ashrama, distract Ayush and make him somehow spot the vulture.</p>
    <p>Just as Indra had schemed, the magical vulture seized Urvashi's necklace while she was out on a stroll with Pururava and flew high into the sky before anyone could react.</p>
    <p>At the same time, a poor sage entered Chyavana's ashrama and saw Ayush practising with his bow and arrow. He asked him if he could shoot very far. Ayush nodded confidently.</p>
    <p>Then, the sage pointed to the vulture in the sky. He said that if Ayush was indeed as skilled as he claimed, could he bring the vulture to the ground and give him what it carried?</p>
    <p>Ayush said that was very easy, and aimed his next arrow at the vulture. Meanwhile, Pururava had been on horseback, keenly tracking the movements of the vulture in order to shoot it down. Urvashi was following him but had been left far behind.</p>
    <p>Just as Indra had planned, two arrows were shot from two bows at the same time. Both arrows touched the vulture, who released the necklace from his grip and disappeared.</p>
    <p>Both Pururava and the boy ran to the spot where the necklace had fallen. Ayush reached first and picked it up — he was fascinated by it, and decided to give it to his mother Sukanya.</p>
    <p>Pururava also arrived and told the boy to give him the necklace, saying that his arrow had shot the vulture first. He offered to give him other things in exchange, but Ayush refused.</p>
    <p>Patiently, Pururava continued to request him, but Ayush would not listen. Finally, it turned serious and both of them were about to start displaying their archery skills on each other.</p>
    <p>At that point, both Sukanya and Urvashi reached the spot. Both of them shouted at them to stop. When Urvashi saw Sukanya, she understood who the boy was, and could not resist smiling.</p>
    <p>Sukanya then decided that it was time to unveil the truth. She told them that the two of them could not fight each other, and when Pururava asked why, she told him that Ayush was his son.</p>
    <p>Urvashi then explained how Bharata Muni had modified her curse, and all the other events. Before anything more could be said, Urvashi disappeared from sight and returned to Indra's abode.</p>
    <p>It was a bittersweet moment for Pururava. He embraced his son, and together, they bade farewell to Chyavana and Sukanya and went back to the capital.</p>
    <p>In his palace, Pururava thought about Urvashi night and day — life was hard without her. In Indra's court too, Urvashi was extremely unhappy and constantly thought of her family.</p>
    <p>Finally, Pururava decided that Indra had been unfair, even though he had helped him in several wars and brought him victory. He decided that he could not take it anymore, and ordered his soldiers to prepare for war.</p>
    <p>When Indra heard about this, he felt that he would not be able to win against Pururava, and that he would lose a valuable ally too. The best way to defuse the situation was to send Urvashi back to earth.</p>
    <p>So, Indra took Urvashi to Pururava and said that he was amazed by the love between them — she had even managed to hide Ayush and her maternal feelings for a long time.</p>
    <p>He then blessed Urvashi to be able to use the powers of an apsara when she chose to, and retain her place in the heavens.</p>
    <p>Pururava thanked Indra and the gods for their blessings, and felt grateful to have a devoted wife and a bright son.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales About Women in Mythology</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "U_V_S__",
      clue: "A beautiful maiden who was created by Narayana. She was taken by Indra to his abode and made the head of apsaras.",
      answer: "URVASHI"
    },
    {
      id: 2,
      pattern: "B_______ M__I",
      clue: "The Muni who chose her as the main character for his play - Lakshmi Swayamwara. Later on, when she made a mistake in the play, she was cursed by him to become human and live on earth. (Hint - this sage is known to us as the father of Indian classical dance)",
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
      clue: "A powerful King from the Chandravamsha who fought with the Rakshasas and rescued her.",
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
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["cursed her"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["tried to abduct her"] },
      { from: 4, to: 3, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["fought him"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["rescued her"] },
      { from: 4, to: 5, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["son"] }
    ]
  }
},
{
  id: 87,
  slug: "the-choice-before-the-war",
  title: "The Choice Before the War",
  description: "Before the great battle of the Mahabharatha began, a choice was offered to the two rival princes. Identify the events that took place in this story.",
  accent: "#41d6ff",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-kings-great-penance",
  trivia: `
    <p>When it was certain that a war would happen, Arjuna left for Dwaraka to meet Krishna. When Duryodhana's spies informed him of Arjuna's intention to meet Krishna, perhaps with the aim of mobilizing his war resources, he too rushed to Dwaraka and entered Krishna's chamber.</p>
    <p>Duryodhana arrogantly brushed Arjuna aside and sat by Krishna's pillow – where his head lay. Arjuna stood humbly at Krishna's feet.</p>
    <p>Some time passed, and Krishna, who had only been pretending to be asleep, stirred and opened his eyes. He noticed Arjuna first and smiled. Next, he noticed Duryodhana who rose up from behind.</p>
    <p>Duryodhana then said that they had come to ask him for his help in the upcoming war. Krishna replied that since both of them wanted his help, he would give them a choice. One of them could have his army, the Narayana Sena, and the other one could have him. He also added that he would not be fighting or using any weapons in the war.</p>
    <p>Duryodhana wanted to choose first – he knew that the Narayana Sena hadn't lost a single battle since Krishna had established his home in Dwaraka. He reasoned that if they were to join Duryodhana's existing troops – he would have the mightiest army that the world had ever seen, and his victory would be assured.</p>
    <p>With this in mind, Duryodhana declared that he wanted to choose first.</p>
    <p>However, Krishna said that he saw Arjuna first when he opened his eyes, so he would give him the first choice. Arjuna promptly replied that he would choose Krishna, and Duryodhana was delighted.</p>
    <p>Thus, both Arjuna and Krishna left for their homes, content with their choices.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "K______",
      clue: "Before the battle of Mahabharatha began - this character gave a choice to two princes. He promised that one of them could have him on their side of the battle, and that his Narayani Sena would fight for the other side. Name this character.",
      answer: "KRISHNA"
    },
    {
      id: 2,
      pattern: "A_J___",
      clue: "The prince who chose him over his army.",
      answer: "ARJUNA"
    },
    {
      id: 3,
      pattern: "D_________",
      clue: "The other prince who got the Narayani Sena on his side",
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
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["chose him"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["chose his army"] }
    ]
  }
},
{
  id: 88,
  slug: "the-kings-great-penance",
  title: "The Kings Great Penance",
  description: "A king's penance brought a celestial river down to earth, but divine intervention was needed to control her power. Identify the events in her story.",
  accent: "#6afa31",
  congratsMessage: "You traced the story of how the Ganga descended to earth! Well done! Onward to the next puzzle!",
  nextSlug: "the-birth-of-a-great-epic",
  trivia: `
    <p>King Sagara of the Ikshvaku dynasty was a wonderful King. He had two wives. The first wife gave birth to a baby boy named Asamanjasa, while the second wife performed a dedicated penance and was blessed with 60,000 children. These children collectively dug a pond that in time turned into an ocean. That is why the ocean is also called sagara, for the sons of Sagara.</p>
    <p>However, Asamanjasa and his 60,000 stepbrothers were not very concerned about the welfare of the subjects or the protection of their kingdom. Sagara struggled to mould his children into worthy future kings.</p>
    <p>Meanwhile, King Sagara also decided to perform the Ashvamedha yagna. Lord Indra learnt of Sagara's plans and, fearful of the consequences, kidnapped the horse which was used for the yagna. The 60,000 children searched far and wide for the horse, but with no luck. After some time, they came across a meditating sage, Kapila. They stopped there, and one of them asked the sage if he had seen the horse, to which the sage did not reply because he was in deep meditation. But the children took the lack of response as an insult and began hitting the sage. Kapila finally broke his meditation and opened his eyes. They were red with anger. With one glance, all of them were reduced to ashes.</p>
    <p>When King Sagara learnt of the demise of his children, he rushed to Sage Kapila. Folding his hands, he pleaded with the sage to not deprive his sons of attaining moksha, saying that while they had made a grave mistake, they had also done good in their lives, including the creation of an ocean that sustains life.</p>
    <p>Kapila was a kind sage and replied, that for them to attain moksha, the river Ganga must flow over their ashes. Only then could they go to heaven.</p>
    <p>So the king offered penance to the gods in the hope of convincing them to let the river Ganga flow down to the earth and over his children's ashes. But Sagara died before his penance was complete, and the task remained incomplete for a long time.</p>
    <p>Many years down the line, Bhagiratha was born in the same clan and ascended the throne. He learnt of the story of Sage Kapila and his ancestors, and decided to pray for their salvation.</p>
    <p>Bhagiratha began praying to Ganga, who originated at the feet of Lord Vishnu. He was aware that it was an immense task to convince her to descend from the heavens to the earth, and he put his heart and soul into the tapasya.</p>
    <p>Finally, Ganga appeared one day. On hearing his request, she said that the force of her waters were too much for the earthly realm to sustain. She advised him to pray to Lord Shiva and ask him to reduce her intensity so that the earth would not get washed away.</p>
    <p>Thus, Bhagiratha began another tapasya until Shiva finally appeared. He offered to let Ganga flow through his hair and only then descend to the earth. As Ganga rushed down, Shiva tied up his hair, letting just one stream escape and flow down to the earth. From that day on, Shiva came to be known as Gangadhara, and Ganga came to be known as Bhagirathi because of Bhagiratha's great penance.</p>
    <p>Despite Shiva's strategy, the force of the Ganga was so strong that when she reached earth, the gush of the water flooded the ashram of the sage Jahnu. Jahnu became so angry at the destruction that he drank the river, and Ganga could not proceed further. When Bhagiratha learnt of this development, he became disheartened and prayed earnestly to the sage as well as to Lord Vishnu and Lord Shiva.</p>
    <p>Finally, the sage gave in and released Ganga through his ears. This is why Ganga is also known as Jahnavi. The river eventually flowed over the ashes of Sagara's children, and they attained salvation.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy – Unusual Tales about Rama and Krishna</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "B__G_R____",
      clue: "A king whose ancestors had been reduced to ashes. For them to attain salvation, he wanted a sacred river to descend from the heavens to the earth. Therefore, he performed a very severe penance.",
      answer: "BHAGIRATHA",
      size: "wide"
    },
    {
      id: 2,
      pattern: "G_N__",
      clue: "She finally arrived, but flowed down with such force that she nearly submerged the earth.",
      answer: "GANGA"
    },
    {
      id: 3,
      pattern: "S_I__",
      clue: "The God who decided to make only a small fraction of her flow into the earth. Therefore, he held her in his hair which gave him the name Gangadhara.",
      answer: "SHIVA"
    },
    {
      id: 4,
      pattern: "J__N_",
      clue: "The Rishi whose ashrama was flooded by this river. Angered by this, this rishi drank the river. But when the king prayed again, the river emerged from the rishis ears, earning herself the name Jahnavi.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget: "top", label: ["brought her to earth"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["controlled her descent"] },
      { from: 4, to: 2, sideOrigin:"left", sideTarget:"bottom", straight:true, label: ["drank the river"] }
    ]
  }
},
{
  id: 89,
  slug: "the-birth-of-a-great-epic",
  title: "The Birth of a Great Epic",
  description: "This is the story of a sage who was seeking help to document the story of the Kurus. This ultimately led to a divine collaboration on writing a great epic. Identify the characters involved.",
  accent: "#e9c46a",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-secret-of-the-sanjeevani",
  trivia: `
  <p>The son of saint Parashara and Satyavati, saint Vyasa was a literary genius par excellence who mastered ancient learning with perfection. He compiled and edited the four Vedas.</p>
  <p>He witnessed the tragic end of the Kurus, and thereafter, it occurred to him that the story of Kurus must be written down in the form of a grand narrative – but he didn't know of anyone skilled enough to put it down in writing, the way he had envisioned.</p>
  <p>Finding himself puzzled by this, Vyasa prayed to Lord Brahma. When the Lord appeared, Vyasa told him about the problem he was facing and asked for his guidance on how to give verbal form to the epic.</p>
  <p>Brahma said that Vyasa required the service of a master scribe who could write down the words that came out of his mouth. It would be impossible for any human to perform this daunting task, and he said that it was only Lord Ganesha who could do it successfully.</p>
  <p>Vyasa followed the words of Lord Brahma and accordingly invoked Lord Ganesha, who appeared before him. The saint disclosed to him his desire, and requested him to be the scribe for his epic, so that the grand mission he had undertaken would be brought to completion, for the welfare of the entire mankind.</p>
  <p>Lord Ganesha then said that he was willing to fulfil his desire, but he had a condition. While Vyasa dictated to him, he should not let Ganesha's pen pause even for a moment.</p>
  <p>Vyasa was momentarily taken aback, but then agreed. In return, he too put forth his condition – which was that Ganesha should not write any verse without understanding its meaning completely.</p>
  <p>The God and the Saint agreed to each other's conditions and thus began the composition of the Mahabharata.</p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "V__S_",
      clue: "The son of Parashara and Satyavati, who had compiled the Vedas. He wanted to write the story of the Kurus, but didn't know anyone skilled enough to put it down in writing. He invoked a god to help him solve this problem.",
      answer: "VYASA"
    },
    {
      id: 2,
      pattern: "B_A___",
      clue: "The creator of the three worlds who appeared before the son of Parashara. He suggested the name of the God who could write down the epic for him.",
      answer: "BRAHMA"
    },
    {
      id: 3,
      pattern: "G_N____",
      clue: "The God who agreed to write down the epic, but with a condition that the sage must not let his pen pause even for a moment.",
      answer: "GANESHA"
    },
    {
      id: 4,
      pattern: "M___________",
      clue: "Name the epic!!!",
      answer: "MAHABHARATHA",
      size: "wide"
    },
    {
      id: 100,
      image: "assets/images/ganesha_vyasa.png",
      clue: "",
      answer: "",
      size: "medium"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Vyasa
      2: { x: 2, y: 0 }, //Brahma
      3: { x: 1, y: 1 }, //Ganesha
      4: { x: 1, y: 2 }, //Mahabharatha
      100: {x: 1, y: 3 }
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"right", sideTarget: "left", label: ["invoked him"] },
      { from: 3, to: 4, sideOrigin:"bottom", sideTarget: "top", label: ["wrote the epic"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget: "top", label: ["dictated the epic"] }
    ]
  }
},
{
  id: 90,
  slug: "the-secret-of-the-sanjeevani",
  title: "The Secret of the Sanjeevani",
  description: "The Devas devise a plan to learn the powerful Sanjeevani mantra that can bring the fallen back to life. Identify the characters in this story.",
  accent: "#cdb4db",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-final-attempt-at-peace",
  trivia: `
    <p>In ancient times, battles between the Devas and Asuras were quite frequent.</p>
    <p>Whenever Asuras were killed, Shukracharya used a special mantra called <em>Sanjeevani</em> to bring them back to life.</p>
    <p>As a result, asuras started to emerge victorious in all the encounters. No matter how hard or valiantly the Devas fought, they inevitably lost because Brihaspati, the guru of Devas, did not possess the knowledge needed for the <em>Sanjeevani</em> mantra.</p>
    <p>After continued losses, the Gods became frustrated and convened a meeting. There, they made the decision to send Kacha, the son of Brihaspati, to Shukracharya's ashrama with the pretext of serving him, but with the underlying mission to learn the life-reviving mantra from him.</p>
    <p>When Kacha reached Shukracharya's ashrama, he bowed down and implored him that he had the desire to be his student and serve him.</p>
    <p>Shukracharya understood the real reason why Kacha had come to him, but he did not refuse, as in those days, it was the duty of a teacher to accept a worthy student if he sincerely desired to serve him. Shukracharya decided to teach him only what he thought was suitable for him.</p>
    <p>True to his word, Kacha served his teacher very well, and Shukracharya taught him many skills but ensured not to teach him the <em>Sanjeevani</em> mantra, being fully aware of the consequences.</p>
    <p>Shukracharya had a daughter named Devayani, who had lost her mother at a young age and often felt lonely.</p>
    <p>With the arrival of Kacha, Devayani was happy to have a friend that was close to her age. Her father was often busy with his lessons or matters of the state, and over time, Kacha became a wonderful companion to her. She began telling him everything, including her smallest desires, and Kacha would bring her whatever she wanted. If she yearned for a flower from the forest, Kacha would acquire the exact flower she described. If she wanted to go for a stroll, Kacha would ensure he was there to escort her. Gradually, she fell in love with him.</p>
    <p>The Asura students who had been keeping an eye on Kacha were displeased with this turn of events. They suspected the real reason behind Kacha's presence in the ashrama but did not have the courage to discuss it with their teacher.</p>
    <p>One day, Shukracharya sent Kacha with instructions to graze the cows. Seizing the opportunity, the asuras murdered Kacha, and the cows returned to the ashrama on their own in the evening.</p>
    <p>When Kacha did not come back to his teacher's home by nightfall, Devayani became worried about him, and asked her father to find him.</p>
    <p>Shukracharya meditated deeply and learnt about Kacha's fate at the hands of the Asuras. Unwilling to disclose this to Devayani, he used the <em>Sanjeevani</em> mantra to revive Kacha and ensured his safe return.</p>
    <p>A few days later, the Asuras devised an evil scheme — the next time they killed Kacha, they burnt his body, mixed his ashes with water and filled their guru's drinking pot with this water.</p>
    <p>That evening, Shukracharya ate dinner and drank the water from his pot. That night, since Kacha had not returned, Devayani, as usual, requested him to find him.</p>
    <p>After meditating, Shukracharya realised what had happened, amd explained it to Devayani. He told her that he could not revive Kacha as he was now in his stomach. If he brought Kacha to life, he would die.</p>
    <p>Devayani insisted that she wanted both of them to live, and finally — Shukracharya told her that there was one way it could be done, but that it was very dangerous.</p>
    <p>The plan was to teach Kacha the <em>Sanjeevani</em> mantra while he was in his stomach, and then use the mantra to revive him. Once Kacha came back to life, he would use the mantra to revive Shukracharya.</p>
    <p>But he warned her that doing this would destroy the asuras. Devayani refused to listen and kept pleading with him.</p>
    <p>Finally, Shukracharya gave in.</p>
    <p>They followed the plan, and Devayani was ecstatic to have both of them safe and sound.</p>
    <p>But with this incident, Kacha's mission was complete, and he knew that he had to leave the ashrama.</p>
    <p>When Devayani realised that Kacha was about to depart, she was taken aback. She pleaded with him to marry her.</p>
    <p>Kacha smiled gently and told her that now that he had been born out of her father, he had become a brother to her, and could not marry her.</p>
    <p>Devayani tried her best to cajole him but failed. Angry and upset, she cursed Kacha that the <em>Sanjeevani</em> mantra would never be of any use to him.</p>
    <p>The usually calm and collected Kacha became angry and cursed her back — saying that she would never marry a sage's son, and that she would marry someone of a clan with her temperament.</p>
    <p>Saying thus, Kacha departed from his teacher's home.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales About Women in Mythology</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "S_U___CH____",
      clue: "The Guru of Rakshasas. Whenever Rakshasas were slain in battles by Devas, he would revive them with the Sanjeevani Mantra. This made the gods frustrated.",
      answer: "SHUKRACHARYA",
      size:"wide"
    },
    {
      id: 2,
      pattern: "K_C__",
      clue: "The son of Brihaspati who was sent by the Devas to the ashrama of this Guru to learn the mantra.",
      answer: "KACHA"
    },
    {
      id: 3,
      pattern: "D_V__A__",
      clue: "The daughter of the Guru who gradually fell in love with the son of Brihaspati. However, he left the ashrama after learning the Mantra and she cursed him that he would never be able to revive anyone by chanting it.",
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
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["studied under him"] },
      { from: 1, to: 3, sideOrigin:"right", sideTarget:"top", straight:true, label: ["daughter"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["cursed him"]}
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
  trivia: `
    <p>Sanjaya was dispatched to Hastinapura to deliver a message to the Kauravas proposing a compromise, and peace, provided that the Kauravas gave 5 villages to the Pandavas, instead of their rightful share of the Kingdom. Duryodhana wouldn't listen to reason and adamantly refused to give them even a scrap of land. Vidura, Bhishma and even Vyasa all tried their best to convince Duryodhana to make peace with his cousins and avoid the bloodshed, but their attempts were completely futile.</p>
    <p>Meanwhile, Yudhishtira was in a dilemma because he didn't want to witness the destruction of the Kurus, but on the other hand, war was a necessity. He didn't want to cede the kingdom which was rightfully his, to his cousins.</p>
    <p>Krishna offered to go to Hastinapura and once again negotiate for peace.</p>
    <p>When he arrived in Hastinapura, he was offered the highest welcome and hospitality, but Krishna said that he had come as a messenger, and couldn't accept their hospitality. He refused to even eat, saying that one eats either because of love for the person offering the food, or hunger, and he had neither.</p>
    <p>Krishna then presented their proposal – one that required Duryodhana to relinquish his hold over five villages. Duryodhana did not listen – he hated the Pandavas too much to let go of anything.</p>
    <p>Dhritarashtra, Bhishma and Drona each pleaded with Duryodhana but he stubbornly held on to his opinion. Krishna finally stood up and addressed the court saying that they had tried their best to avert the war. It was Duryodhana alone who wanted nothing but war.</p>
    <p>Dhritarashtra then asked Vidura to call Gandhari, hoping that she would be able to restrain her son, but even her words failed to have any effect. Duryodhana simply walked out to hatch his next plan with Shakuni, Karna and Dushasana.</p>
    <p>They decided together to capture Krishna. Satyaki heard of this plot and informed Krishna, who merely laughed. Satyaki's disclosure shocked Vidura, who instantly informed Dhritarashtra about the foolhardy plan hatched by his son.</p>
    <p>Duryodhana's men surrounded Krishna. Krishna said that he neither had a beginning nor an end, and he could behold both the creation and destruction of the world, they could try all they wanted, but they would never be able to imprison him.</p>
    <p>Krishna started growing in size, and assumed his cosmic form (Virata Rupa) and his radiance and magnificence blinded everyone. Only Bhishma, Drona, Vidura and Sanjaya could look into that brightness. In this form, Krishna had multiple heads, and multiple arms holding divine weapons. They could see the universe within him, and also the vision of the war and their own deaths.</p>
    <p>Then, Krishna resumed his human form and walked out, even as the Kurus rushed after him. He went to Vidura's house and informed Kunti that his mission was not successful.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "______A",
      clue: "The person who traveled as a messenger to Hastinapur to give a message in one last attempt of peace. When the Kauravas attempted to capture him, he assumed his cosmic form",
      answer: "KRISHNA"
    },
    {
      id: 2,
      pattern: "D_R______A",
      clue: "The prince who refused to return the kingdom, or even 5 villages to his cousins although they had finished the terms of their exile.",
      answer: "DURYODHANA",
      size:"wide"

    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Krishna
      2: { x: 2, y: 0 } //Duryodhana
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["tried to capture him"] }
    ]
  }
},
{
  id: 92,
  slug: "a-fatal-game-of-dice",
  title: "A Fatal Game of Dice",
  description: "Not the one played by Yudhishtira. This is a story of royal love, a game of dice, and a strange transformation. Identify the events of this story.",
  accent: "#f1c0e8",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-wheel-in-the-mud",
  trivia: `
    <p>When the Pandavas were in exile for thirteen years, their spiritual teacher – Sage Dhoumya, used to sometimes visit and counsel them by telling stories.</p>
    <p>Frequently, Yudhishtira regretted the way the dice game had gone, and that he had caused grief to his family and subjects. One time, he asked Sage Dhoumya if there had ever been a foolish King like him who had played a game of dice, bet his wife and lost his Kingdom.</p>
    <p>Dhoumya said that good and bad times are inevitable in the circle of life, and that during tough periods, people sometimes do things that are out of their nature. History is full of such stories of Kings who had made follies, and that in all cases, people had managed to pass through the rough times, and that there could never permanently be a good or bad time in anyone's life.</p>
    <p>He then proceeded to tell him the story of Nala.</p>
    <p>There once lived a beautiful princess named Damayanti, in the Kingdom of Vidharbha. Her beauty was so renowned that even the gods could not help but admire her.</p>
    <p>The King of Nishada kingdom had two sons – Nala and Pushkara.</p>
    <p>Eventually, there was a Swayamvara held for Damayanti, to which many Kings including Nala were invited. However, four gods – Indra, Agni, Vayu and Varuna also attended the Swayamvara, disguising themselves as Nala.</p>
    <p>Damayanti, who had already given her heart to Nala, arrived with a garland of flowers in her hands, and saw to her astonishment, five Nalas sitting next to each other.</p>
    <p>She prayed to the gods that if her love for Nala was true, she would be able to see them in their real forms. The gods were touched by her plea, and instantly, Damayanti was able to differentiate between Nala and the other Gods, although outwardly they all still appeared the same.</p>
    <p>She noticed that the four gods were not batting their eyelids, while Nala was doing so like all mortals.</p>
    <p>She stepped forward and garlanded Nala. The four gods blessed the couple and gave boons to the groom.</p>
    <p>While the gods were going back home, they came across Kali (the deity of degradation and depravity), and asked him where he was going.</p>
    <p>He responded saying that he was heading to Damayanti's Swayamvara, and the gods told him that he could go back since Damayanti had already chosen Prince Nala.</p>
    <p>Kali was very disappointed and felt cheated. As he returned home, he promised himself that he would teach Nala and Damayanti a lesson sometime during their lives.</p>
    <p>Damayanti married Nala, and accompanied her husband to Nishadha. Together, they had two children.</p>
    <p>Nala was fair and just, and he took care of his subjects and formulated strict rules about hygiene and health. The subjects were happy, and Kali could not enter the Kingdom for a long time, as he could only make his way inside if there was a presence of dirt, bad habits and injustice.</p>
    <p>One day, Nala forgot to wash his feet before his evening prayers. Kali seized the opportunity and entered Nala's body – from that day on, he played games with the King's mind, causing him to begin losing his mental and physical health.</p>
    <p>Pushkara, Nala's brother, invited him for a game of dice. Nala usually refused such invitations, but this time, he accepted, with Kali's influence upon his mind. Damayanti was unhappy with this decision, and tried to make him change his mind, but he did not listen.</p>
    <p>The game began. At first, Nala bet his army. When he lost, he gambled all his wealth and lost that too, and then lost his Kingdom in the next round. Kali, happy with what he had accomplished, left his mind and body. Pushkara then told his brother that the Kingdom was now his and that he had to leave.</p>
    <p>Damayanti then wisely arranged for her two children to be sent to her parents' home. Nala told Damayanti to go as well, as she could live in comfort, but she refused. She insisted on staying with him.</p>
    <p>So, the couple left the Kingdom and went to a nearby forest. For a few days, they survived only on water.</p>
    <p>One day, Nala saw some birds hopping about on the ground, and he decided to catch and sell them – this way, he could earn some money to buy food for his wife. So, he undressed and threw his clothes over the birds like a net. To his surprise, the birds held the clothes in their beaks and flew away – now he had no clothes!</p>
    <p>Damayanti then gave him half of her sari, so that he could at least cover himself. They continued walking until they came across an intersection of three roads: one to Ujjain, one to Vidharbha, and one to Ayodhya.</p>
    <p>Nala again tried to convince his wife to go back to Vidharbha (her maternal home), so that she could be comfortable. He promised that he would find a way to get the Kingdom back, and that he would call for her then.</p>
    <p>Damayanti refused to leave him, and said that she would stay with him through hunger, thirst, worry and work.</p>
    <p>After walking for some more time, they decided to rest under the shade of a tree, and Damayanti, who was tired, soon fell asleep.</p>
    <p>Nala was overwhelmed with grief, and thought that if he took her along with him, she would suffer even more. He decided to leave her there, since they were at the juncture to Vidarbha. When she woke up, she would have no choice but to go to her parents.</p>
    <p>When Damayanti woke up, Nala was nowhere to be found. She searched for him and eventually realized what he had done. She walked deeper into the forest, looking for him, and suddenly, a python lunged at her and began to wrap itself around her.</p>
    <p>She cried out for help desperately, and a few hunters passing by heard her and rescued her from the python.</p>
    <p>She narrated her story to the hunters, hoping they would understand her plight. But to her dismay, the head of the hunters fell in love with her. She prayed that, if her love for her husband was true, the hunter should be burnt alive.</p>
    <p>Suddenly, the head of the hunters caught fire and died. The other hunters, who had witnessed the incident, sprinted away.</p>
    <p>Damayanti resumed wandering through the forest aimlessly, and lost track of time. One day, she encountered a caravan crossing the forest. The caravan stopped and a man asked her if she was alright and what she was doing in the forest. He told her that the forest was full of beasts and serpents, and that they were going to the Chedi Kingdom, and invited her to come with them.</p>
    <p>Damayanti boarded the caravan and journeyed forward with the group, but she did not reveal to anyone who she was.</p>
    <p>When they reached Chedi, she was introduced to the queen mother of the Kingdom as a lady in distress. There, she was made the <em>sairandhri.</em></p>
    <p>Meanwhile, Nala was facing some challenges of his own after leaving her under the tree. He had wandered into another forest, and came across a serpent named Karkotaka with a circle of fire around him. The serpent told him that he was stuck inside the circle and pleaded with him to help him out.</p>
    <p>Nala, being compassionate, rushed to help, and carried Karkotaka out of the ring. Suddenly, Karkotaka bit him, and Nala was immediately transformed into an ugly creature the size of a dwarf.</p>
    <p>At this, Nala became angry and demanded to know how the serpent could do that to someone who had helped him out of a difficult situation.</p>
    <p>The serpent replied that it had done this on purpose so that no one would be able to recognize him, and that he would eventually transform back into his original form at some point.</p>
    <p>Then Nala took the road to Ayodhya, where Rituparna was ruling the Kingdom. Nala changed his name to Bahuka and went to the court of Rituparna. He told him that he was an expert cook, and that he could make the most delicious food in the shortest amount of time.</p>
    <p>Nala was able to do so because cooking required fire, water and wind, and he knew that he had the blessings of Agni, Varuna and Vayu.</p>
    <p>Rituparna tasted Nala's cooking and found him to be true to his word, so Nala was employed as the head chef in Rituparna's royal kitchen.</p>
    <p>Meanwhile, Damayanti's parents were getting increasingly worried about their daughter, as they knew that the couple were in exile, and had not received any news from her. They sent messengers and soldiers in search of her.</p>
    <p>One of the members of the search party reached Chedi and saw Damayanti serving the royal princess in the palace. When he got his chance, he approached her and told her that he recognized her.</p>
    <p>Later, Damayanti was called to the court in the presence of the queen mother. She smiled at her and said that she was her niece, but that she had not recognized her since she had not seen her for a very long time. She apologized for treating her like a <em>sairandhri</em>, and told her that she could stay there for as long as she liked.</p>
    <p>This time, Damayanti preferred to go and live with her parents and children. The queen mother showered many gifts upon Damayanti, and rewarded the messenger who had found her. Soon, Damayanti reached her parents' house and was reunited with her children, but she remained unhappy. She sent messengers to search for Nala, asking the people they came across a particular question: "How can a man abandon his wife in the middle of a forest and leave without thinking of her protection? Is he not an irresponsible husband?"</p>
    <p>She received many responses, almost all of them agreeing that the husband was irresponsible. But there was one unusual response which caught her eye, from Rituparna's kingdom. It said: "It was a matter of fate. If the wife understands her husband's intentions, she will forgive him. He did it for the sake of his wife, so that she would be taken care of by her parents."</p>
    <p>Damayanti then asked the messengers what this person looked like. They said that he was a dwarf and the ugliest person they had ever seen. Damayanti was stunned.</p>
    <p>Her instincts were telling her that Bahuka was none other than Nala, but she was hesitant because of the description of his appearance.</p>
    <p>Damayanti then devised a plan – she requested her father to send a messenger to Rituparna's court to inform the King that her second swayamvara would be conducted the following day.</p>
    <p>Rituparna was ecstatic to receive the invitation and requested Bahuka to get him there quickly, taking his fastest horses and best chariot.</p>
    <p>Nala was heartbroken upon hearing the news of his wife's second marriage, but he could not refuse his master.</p>
    <p>Rituparna and Bahuka reached the Kingdom of Vidarbha that same evening. When Damayanti learnt that the King was accompanied by the ugly dwarf, she knew that no one other than her husband would have been able to reach the Kingdom that fast.</p>
    <p>To test her theory further, she sent a message instructing Bahuka to cook for her. When she tasted the dishes, she recognized his touch.</p>
    <p>Finally, she took her children and went to visit Bahuka for the first time. At that exact moment, Nala transformed back to his original form, and the family was reunited.</p>
    <p>Together, they went to Rituparna, and Damayanti apologized for the incorrect message that had been sent to him. When the King learnt about Bahuka's true identity, he felt honoured to have received Nala's friendship and honest service.</p>
    <p>After some time, Nala went back to the Kingdom of Nishadha, played another game of dice with his brother, and defeated him, finally winning back his Kingdom.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales About Women in Mythology</em></p>
`,
  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "D_M___N__",
      clue: "Princess of Vidharba, daughter of King Bhima (not the Pandava), who fell in love with a prince from the Nishadha Kingdom.",
      answer: "DAMAYANTI"
    },
    {
      id: 2,
      pattern: "N___",
      clue: "The prince from Nishadha, who was chosen by the princess of Vidharbha in her Swayamwara.",
      answer: "NALA"
    },
    {
      id: 3,
      pattern: "P_SH____",
      clue: "The brother of this prince who invited him for a game of dice. After the prince lost the game, he snatched his kingdom and sent him to exile.",
      answer: "PUSHKARA"
    },
    {
      id: 4,
      pattern: "K_RK_____",
      clue: "While in the forest, a serpent cried out to him for help. The prince helped him, but then the serpent bit him, turning him into an ugly creature the size of a dwarf. What is the name of this serpent?",
      answer: "KARKOTAKA"
    },
    {
      id: 5,
      pattern: "B_H_K_",
      clue: "The tranformed prince used this new form as a disguise and went to the court of Rituparna, where he worked as a chef in the royal kitchen. Eventually, he regained his true form and was reunited with his wife. What was his name under disguise?",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget:"top", label: ["chose him"] },
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["defeated him in dice"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"right", straight:true, label: ["bit him"] },
      { from: 2, to: 5, sideOrigin:"bottom", sideTarget:"top", label: ["disguise"] }
    ]
  }
},
{
  id: 93,
  slug: "the-wheel-in-the-mud",
  title: "The Wheel in the Mud",
  description: "This is the story of the King of Anga's final battle. When his chariot wheels sunk into mud, curses from the past begin to take effect. Identify the events that follow.",
  accent: "#fd6828",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-fall-of-a-powerful-rakshasa",
  trivia: `
    <p>On the fifteenth day of war, the two mighty warriors – Arjuna and Karna locked in combat with each other. The two were the best of warriors – tall, handsome and powerful, armed with God-given weapons.</p>
    <p>Meanwhile Karna's charioteer – Shalya, as per the promise he had given to Yudhishtira, spoke to him discouragingly. He told Karna that he was about to fight the best warrior on the planet – whom no one had ever defeated before. And he had Krishna with him too.</p>
    <p>As the fight progressed, deadly shafts of the two warriors clashed in mid-air, while their missiles killed thousands of men, horses and elephants of the two armies. Karna was furious, and without giving a second thought – he hurled the Bhargava missile, killing thousands of Panchalas and Somakas.</p>
    <p>Bhima was now roused with fury and reminded Arjuna of the misdeeds committed by Karna and asked him to show no mercy to him. Krishna was also annoyed and asked him if he wanted him to strike off Karna's head with the Sudarshana Chakra.</p>
    <p>Arjuna shook his head and then used the Brahmastra, which charged with a deafening noise, illuminating the battlefield and filling the hearts of the Kaurava men with fear. Karna knew how to save himself, but the missile annihilated a whole division of the Kaurava army when it fell.</p>
    <p>The second half of the day had begun, but neither of the two had any considerable advantage over the other. Arjuna launched his next attack on Shalya, injuring him with ten deadly arrows, and with the next seven arrows, he injured Karna.</p>
    <p>Karna, unmindful of the pain, got ready to fight once again. A naga, Ashvasena, whose mother had died in the burning of Khandava, wanted to take revenge on Arjuna. As Karna shot his next arrow, the naga perched onto it. This arrow could have killed Arjuna, but Krishna acted promptly.</p>
    <p>When he saw the deadly naga on the arrow – he forced the horses on their knees and the chariot ducked low. The deadly arrow broke Arjuna's crown and his life was saved.</p>
    <p>The naga came to his original form and appeared before Karna, explaining his grievance against Arjuna and offering to help Karna in killing him. Karna rudely rejected this offer, saying that he would not need the naga's help even if faced with a hundred Arjunas.</p>
    <p>Ashvasena decided to go alone, and as he leapt upon Arjuna, Krishna warned him to kill the Naga immediately. Arjuna released six deadly shafts, killing Ashvasena, and turned his attention back to Karna.</p>
    <p>Karna suddenly noticed that the wheels of his chariot were sinking in the muddy ground. He was reminded of two curses he had gotten in his youth – a brahmin's (whose cow he had killed) and Parashurama's (whom he had deceived by pretending to be a brahmin in order to become his disciple). Both of these curses were starting to take effect.</p>
    <p>As he tried to use Bhargava, Parashurama's missile, he realized to his consternation that he had forgotten the mantra! Karna leapt out of his chariot and struggled to free the wheel. He pleaded with Arjuna to hold his attack until then, as it was the code of war.</p>
    <p>Krishna asked him incredulously how he could invoke the rules when he forgot them completely at the time when Draupadi was dragged to the court. Where were Karna's codes when he killed Abhimanyu, who was unarmed?</p>
    <p>Krishna instructed Arjuna to not wait and kill him. Arjuna instantly obeyed Krishna's advice, and an arrow shot out of Gandiva, killing him.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "S__L__",
      clue: "The King of Madra who was manipulated into fighting for Duryadhana's side although he was the maternal uncle of the Pandavas.",
      answer: "SHALYA"
    },
    {
      id: 2,
      pattern: "K_R__",
      clue: "Name the warrior for whom the above character became a charioteer during the Mahabharatha war.",
      answer: "KARNA"
    },
    {
      id: 3,
      pattern: "Y___I__T___",
      clue: "The prince who requested his uncle to demoralise that warrior during his single combat with his brother.",
      answer: "Yudhishtira",
      size: "wide"
    },
    {
      id: 4,
      pattern: "A__U__",
      clue: "The prince who faced the warrior in his final duel. When that warrior's chariot wheel began sinking into mud, he requested the prince to wait. But with the urging from Krishna, the prince attacked the warrior.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget:"top", label: ["charioteer of"] },
      { from: 1, to: 3, sideOrigin:"left", sideTarget:"top", straight:true, label: ["nephew"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"right", straight:true, label: ["killed him"] },
      { from: 4, to: 3, sideOrigin:"left", sideTarget:"right", straight:true, noArrow:true, label: ["brothers"] }
    ]
  }
},
{
  id: 94,
  slug: "the-fall-of-a-powerful-rakshasa",
  title: "The Fall of a Powerful Rakshasa",
  description: "A powerful asura built an impregnable fortress, but destiny arrived at his gates. Identify the events from this story.",
  accent: "#ffd166",
  congratsMessage: "You followed the story of the fall of Narakasura. Well done! Onward to the next puzzle!",
  nextSlug: "the-tree-of-gold",
  trivia: `
    <p>There was a powerful demon called Narakasura, and Gods and men alike found themselves under his oppression. So Indra approached Krishna for help.</p>
    <p>Naraka's capital was a well fortified city and was surrounded by high walls and mountains on all sides. In addition to this, it was surrounded by rings of fire, wind and water. It had been designed by a great asura architect called Mura. There were self-shooting weapons of all kinds and Mura had laid traps all over which could not be escaped by even the cleverest enemy.</p>
    <p>But Krishna overcame all these obstacles. With his discus he destroyed the three rings of fire, wind and water, and with his sword he slashed the traps. Then he raised his divine conch, Panchajanya, and blew upon it. The sound produced fearful dread in the hearts of the enemies. Mura was, at this time, fast asleep, deep below in the waters. When he heard the ominous sound of the <em>Panchajanya</em>, he rose from the depths.</p>
    <p>Mura roared with all his five mouths, and the whole earth shook and many felt that the end of the world had come. The Lord sent some more shafts which tore open the monster's five mouths. Then, one by one, Mura's heads rolled down as the divine discus cleared through them. Mura was now dead.</p>
    <p>Krishna then entered the palace, and found the 16,000 young maidens who had been kept captive by Narakasura, and many other valuable treasures that the asura had plundered.</p>
    <p><em>The five-headed monster, Mura, is the ego in each one of us. The five heads are the five-sense organs. The sleeping monster (ego) when it is aroused, plays a death game with the Lord. The Lord, (the divinity in us), ruthlessly uses His divine weapon, the discus, to destroy the five-headed asura in us. When the ego is thus completely annihilated, the Lord makes a triumphant entry into the palace of our hearts. There in the temple, with prayers and worship, He becomes enshrined as the Supreme King, wedded to all the thoughts in us, the 16,000 captive maidens.</em></p>
    <p>As he was the destroyer of the asura, Mura, Lord Krishna is also known as Murari.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Bala Bhagavatam – Central Chinmaya Mission Trust</em></p>
`,
  rowHeight: 270,

  nodes: [
    {
      id: 1,
      pattern: "N_R___S___",
      clue: "A powerful Rakshasa who had captured 16,000 women. He had also stolen the divine earrings of Aditi, who is the mother of Gods.",
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
      clue: "The God who killed the above two Rakshasas.",
      answer: "KRISHNA"
    },
    {
      id: 4,
      pattern: "S_T__B____",
      clue: "The wife of the above God, who helped him in defeating this Rakshasa.",
      answer: "SATYABHAMA",
      size:"wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Narakasura
      2: { x: 0, y: 1 }, //Mura
      3: { x: 2, y: 1 }, //Krishna
      4: { x: 1, y: 2 } //Satyabhama
    },

    connections: [
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["built his fortress"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["killed him"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["killed him"] },
      { from: 4, to: 3, sideOrigin:"right", sideTarget:"bottom", straight:true, label: ["assisted him"] }
    ]
  }
},
{
  id: 95,
  slug: "the-tree-of-gold",
  title: "The Tree of Gold",
  description: "A poor student's impossible gurudakshina sends him to a generous king, whose determination compels even the Lord of Wealth to act. Piece together the story.",
  accent: "#a7ef32",
  congratsMessage: "Nicely solved! Onto the next puzzle.",
  nextSlug: "a-daughter-of-the-goddess",
  trivia: `
    <p>In the kingdom of Raghu, lived a poor boy named Koustheya. Koustheya was an excellent student, and his teacher imparted knowledge to him without any expectations of gurudakshina from a boy as poor as him.</p>
    <p>In time, Koustheya completed his education and asked his teacher what gurudakshina he could give him. The guru said that he didn't want any fees, and that he had been a wonderful disciple. He asked him to go ahead and spread his knowledge to others, and that he would consider that to be his fees.</p>
    <p>But Koustheya felt that his education was incomplete until he paid the teacher's fees. He wanted to give something.</p>
    <p>The guru resisted, but Koustheya was very insistent. Finally, the guru lost his temper and said that if was so adamant, to give him ten lakh gold coins. If he couldn't, then to admit that he couldn't pay, take his blessings and be on his way.</p>
    <p>Koustheya was caught by surprise. He had not expected his teacher to ask for such an amount. He grew worried and wondered how he could procure so much wealth.</p>
    <p>He departed and began his journey through a thick forest, thinking about the task ahead of him.</p>
    <p>Suddenly, he thought of King Raghu. He was certain that the king wouldn't turn him away empty-handed. So Koustheya made his way to Raghu's palace.</p>
    <p>Once Koustheya reached the palace, King Raghu received him respectfully with pots of water. When Koustheya saw the earthen pots, he became disappointed. A king carrying such pots must not have much to give his guests. The king, however, was hospitable and asked Koustheya the reason for his visit.</p>
    <p>Hesitantly, Koustheya said that he was seeking ten lakh gold coins.</p>
    <p>King Raghu was not perturbed. He said that he had just completed his yagna and donated all that he could. Now, he was left only with these earthen vessels. But the king said that he would fulfil his desire and that he needed some time to arrange the money for him.</p>
    <p>That night, Raghu thought about where he could get the money from. Perhaps Kubera, the lord of wealth, would be able to help. But since he was a king, he couldn't ask for alms or money, and the only choice he had was to fight Kubera and defeat him. Then he could emerge victorious and hand over the money to Koustheya.</p>
    <p>The next day, Raghu marched north with a few select soldiers to Kubera's abode. They travelled all night and halted outside Alakavati, Kubera's capital city. Kubera had many spies who observed all that was happening in his kingdom, day and night. Soon enough, a few spies ran back to the palace and warned him about Raghu and what he was planning to do because of a promise.</p>
    <p>Kubera was surprised to learn about Raghu's intentions and used his magical powers to locate Raghu, who was sleeping under a shami tree in the forest. Quickly, he transformed the leaves of the tree into gold coins.</p>
    <p>When Raghu awoke the next morning, he saw the tree covered with gold coins. He understood that it was Kubera's magic at work. He told his soldiers that their mission was already complete, and that there was no need to go to war. Raghu headed back to his kingdom after gathering ten lakh gold coins and sent word to Koustheya to come and collect the money.</p>
    <p>Meanwhile, the gods had been watching, and seeing Raghu's good intentions, they blessed him and his kingdom with prosperity.</p>
    <p>Koustheya collected the coins and handed them to his teacher, who was pleasantly surprised and blessed his student.</p>
    <p>The guru then donated all the gold coins to the poor that very day. It was the tenth day of the month of Ashwayuja, and from that day on, distributing wealth on this day became a custom. Today, if a person doesn't have gold to donate, they distribute the leaves of the shami tree instead.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy – Unusual Tales about Rama and Krishna</em></p>
`,
  rowHeight: 380,

  nodes: [
    {
      id: 1,
      pattern: "_OU_T__Y_",
      clue: "A poor boy who lived in the kingdom of Ayodhya. When he completed his education, he asked his teacher what he could give as gurudakshina. The teacher, knowing his background, didn't ask for anything, but as the boy kept insisting, he lost his patience and asked for ten lakh gold coins. If the boy couldn't pay this, he was to simply admit it and then be on his way.",
      answer: "KOUSTHEYA",
      size: "wide"
    },

    {
      id: 2,
      pattern: "__G__",
      clue: "The present ruler who was the ancestor of Rama and a popular king from Suryavamsha. The above character approached him asking for ten lakh gold coins, but he didn't have the money right then, as he had just finished a yagna and donated everything that he could.",
      answer: "RAGHU",
      size: "wide"
    },

    {
      id: 3,
      pattern: "K_B___",
      clue: "The God whose abode the king marched to. This God assumed that the king had come to wage a war against him to get the gold, in order to honor his promise to the boy. He used his magical powers to locate the king, and transformed the leaves of the tree under which he was sleeping into gold coins.",
      answer: "KUBERA",
      size: "wide"
    }
  ],

  layout: {
    positions: {
      1: { x: 1, y: 0 }, //Koustheya
      2: { x: 1, y: 1 }, //Raghu
      3: { x: 1, y: 2 } //Kubera
    },

    connections: [
      {
        from: 1,
        to: 2,
        sideOrigin:"bottom", 
        sideTarget:"top",
        label: ["Approached him"]
      },

      {
        from: 2,
        to: 3, 
        sideOrigin:"bottom", 
        sideTarget:"top",
        label: ["Marched to", "his abode"]
      }
    ]
  }
},
{
  id: 96,
  slug: "a-daughter-of-the-goddess",
  title: "A Daughter of the Goddess",
  description: "A wish made under a celestial tree leads to the birth of a daughter. Identify the events in her story in the following puzzle.",
  accent: "#f1c0e8",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "when-the-gods-forged-a-warrior",
  trivia: `
    <p>One day, Goddess Parvati asked Shiva to take her to the most beautiful garden in the world. Shiva smiled, and showed her the celestial garden of Nandana at Amaravati, the capital city of Indra's Kingdom.</p>
    <p>There, Parvati saw many beautiful trees, including Kalpavriksha (a wishing tree that had emerged during the churning of the ocean). Suddenly, she had a desire to ask for a daughter who would take away her loneliness. The wish was immediately granted, and she found herself with a beautiful baby girl. Affectionately, Parvati named her Ashokasundari.</p>
    <p>When Ashokasundari grew up and came of marriageable age, Parvati was of the opinion that only an earthly King of the stature of Indra would be an appropriate match for Ashokasundari. After much thought, Parvati decided that Prince Nahusha of the Chandravamsa would be an appropriate match for her.</p>
    <p>One day, while Ashokasundari was enjoying herself with her friends in a nearby forest, a demon named Hunda noticed her. He immediately fell in love with her and approached her, asking her to marry him.</p>
    <p>Ashokasundari told him that she was going to marry Nahusha someday. Hunda became enraged, and hatched a plan to kidnap her. He disguised himself as a widow (whose husband he had killed earlier), and approached Ashokasundari. He told her that there was a malicious asura named Hunda who roamed the area, and that it was not safe for her to stay there. Then he asked her to come to his ashram and accept his hospitality.</p>
    <p>Ashokasundari agreed and followed the widow, and soon, Hunda shed the disguise and revealed his true form. Realizing that she had been tricked, Ashokasundari cursed him to be killed by Nahusha.</p>
    <p>Ashokasundari fled from there and made her way to her parents' home in Mount Kailasa. Afraid of the curse, Hunda decided to take immediate action and kidnapped the young prince Nahusha.</p>
    <p>However, in an unexpected turn of events – a maid took pity on Nahusha, and handed him to Vasishtha and Arundhati, knowing that they would keep him in hiding and take care of him.</p>
    <p>The sage couple took great care of him and educated him. Within a few years, the prince had grown up to be a fine young man.</p>
    <p>Meanwhile, Hunda hatched another plan and kidnapped Ashokasundari again when she was alone. He locked her in a room, and told her that he had killed Prince Nahusha.</p>
    <p>Later, a Kindara couple (half-human and half-horse) happened to pass by Ashokasundari's window and heard her crying. They stopped and asked her what was the matter, to which she replied that the mighty Nahusha was dead.</p>
    <p>They smiled, amused at the thought, and told her that he was alive and well, and that he was not an ordinary mortal.</p>
    <p>A few days later, Nahusha came in search of Ashokasundari. He fought a long battle with the asura and defeated him. He married Ashokasundari and became an extremely powerful emperor — one who could even defeat the gods. For a short period of time, he even dethroned Indra.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales About Women in Mythology</em></p>
`,
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "AS____S_N____",
      clue: "The daughter of Parvati who was born when Parvati saw a Kalpavriksha (wishing tree), and desired to have a daughter.",
      answer: "ASHOKASUNDARI",
      size: "wide"
    },
    {
      id: 2,
      pattern: "H_N__",
      clue: "A Rakshasa who saw this girl and fell in love with her and kidnapped her.",
      answer: "HUNDA"
    },
    {
      id: 3,
      pattern: "N_H__H_",
      clue: "The King who was raised by Vasishta and Arundhati. He killed the Rakshasa and married the daughter of Parvati. In time, he became a very powerful emperor who could defeat gods. He even dethroned Indra for a short period of time. (Hint - this character appears briefly in the Mahabharatha as a python that attacks Bhima)",
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
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["kidnapped her"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["killed him"] },
      { from: 3, to: 1, sideOrigin:"top", sideTarget:"right", straight:true, label: ["married her"] }
    ]
  }
},
{
  id: 97,
  slug: "when-the-gods-forged-a-warrior",
  title: "When the Gods forged a Warrior",
  description: "A divine warrior was created to destroy a fearsome asura. Identify the events in this story.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-prince-and-the-monkey",
  trivia: `
    <p>There were two Asura brothers, Rambha and Karambha, who desired special powers. They began to seek these through deep meditation and prayers to Agni, the God of fire, and Varuna, the God of water.</p>
    <p>Rambha stood in a blazing fire and began praying to Agni, while Karambha stood inside a river and prayed to Varuna.</p>
    <p>When Indra heard about this penance, he grew worried, and wanted to stop the brothers from obtaining any boons which could be used against the gods.</p>
    <p>Indra disguised himself as a crocodile, and entered the waters where Karambha was standing in meditation, and killed him on the spot. He also tried to attack Rambha, but the asura managed to escape.</p>
    <p>As the years passed, Rambha was crowned the King of Asuras. Soon, he was blessed with a son whom he named Mahishasura.</p>
    <p>When Mahishasura grew up, he came to know the story behind his uncle's death, and became furious with Indra. He prayed to Brahma for the boon of immortality. Brahma could not grant him such a boon, and instead blessed him saying that his death would only occur at the hands of a woman.</p>
    <p>Mahishasura was satisfied, thinking that it was impossible for any woman to overpower a man of his strength. Eventually, he waged a war against Indra, and drove all the gods out of their abode.</p>
    <p>So, the gods devised a plan – with the blessing of the trinity and a combination of their own powers – they created the asura's nemesis – a divine form of Goddess Parvati with multiple arms and beautiful long black hair. The gods gifted this Avatara of Parvati a red sari, gold jewellery, and a magnificent crown.</p>
    <p>They presented her with a tiger as her primary vehicle, and gave her each of their characteristic weapons – the trident from Shiva, the Sudarshana Chakra from Vishnu, a <em>kamandalu</em> from Brahma, a bow from Vayu, arrows from Surya, a thunderbolt from Indra, a spear from Agni, and a conch from Varuna.</p>
    <p>This Goddess is known as Durga – the Goddess of the battlefield.</p>
    <p>Durga then went forth and battled fiercely with Mahishasura. It was on top of a hill known as Chamundi Hill that she killed him.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales About Women in Mythology</em></p>
`,
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
      clue: "His brother, who also desired powers and prayed to Lord Varuna. Worried that he might obtain any boons that could be used against gods, Indra took the form of a crocodile and killed him.",
      answer: "KARAMBHA"
    },
    {
      id: 3,
      pattern: "M_H____SU__",
      clue: "The Rakshasa born from the above King. As he grew up, he learnt the story behind his uncles death and decided to wage a war against Indra. Who was he? (Hint - his name refers to a buffalo)",
      answer: "MAHISHASURA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "D_R__",
      clue: "A divine goddess created to defeat this Rakshasa, who rides a tiger. She was also given the characteristic weapons of different gods - the trident from Shiva, the Sudarshana Chakra from Vishnu, a small water pot from Brahma, a bow from Vayu, arrows from Surya, thunderbolt from Indra, a spear from Agni, and a conch from Varuna. Name this fearsome Avatara of the Goddess.",
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
      { from: 4, to: 3, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["killed him"] }
    ]
  }
},
{
  id: 98,
  slug: "a-prince-and-the-monkey",
  title: "A Prince and the Monkey",
  description: "A quest for a rare flower led a Pandava to an unexpected encounter in the mountains.",
  accent: "#ffa5f7",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-king-who-borrowed-youth",
  trivia: `
    <p>One day, when Draupadi was taking a bath in a river near their forest home, she saw a beautiful flower in the water. The fragrance of the flower enchanted her and she wanted it desperately. She glanced at the plants and trees nearby, but didn't see a similar flower anywhere.</p>
    <p>For a long time, Draupadi thought about the flower, and her desire to possess it kept increasing. So she went to Bhima and described the flower to him, and asked him if he could bring her more such flowers.</p>
    <p>Bhima immediately went in search of them, and travelled far and wide. However, he couldn't find anything that seemed even remotely like the flower which Draupadi had described. Still, he continued in his quest.</p>
    <p>At one point, he came across an old monkey sleeping in the middle of his path. Since there wasn't enough space for him to go around the monkey, Bhima requested him to move a little. The monkey was tired. He sighed and said that he was old and weak, and requested Bhima to lift his tail and keep it aside so that he could have the space to go.</p>
    <p>Bhima then tried to move the monkey's tail by using one hand, but found that he couldn't lift it! He tried with the other hand, and then with both, but the tail wouldn't budge. No matter how much he tried, the tail just seemed to get heavier.</p>
    <p>Bhima, who had been proud of being one of the mightiest men on earth, felt humbled. He realized that the monkey before him was by no means ordinary. He then asked him who he was.</p>
    <p>The monkey replied that he was Hanuman, the son of the wind god. He explained that he wanted to teach Bhima the important lesson to never be too proud of his accomplishments, or underestimate anyone's powers.</p>
    <p>He also added that the time of the inevitable war, he would remain with them.</p>
    <p>Bhima asked him if he could help him find the special flower. Hanuman replied that it was from the garden of Kubera. Bhima then journeyed to the city of Alakavati, Kubera's city, and found the famous garden which contained flowers of many different types, shapes and smells, including the one that he was looking for.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "D___P___",
      clue: "The queen of Indraprastha. One day, during their exile, she found a very beautiful flower. She was bewitched by it and asked her husband to get her more such flowers.",
      answer: "DRAUPADI"
    },
    {
      id: 2,
      pattern: "B_I__",
      clue: "The prince who set out in search for those flowers. He searched through the Gandhamadana mountain, and finally exhausted - took a bathe in the lake. When he was coming out, his way was blocked by the tail of an old monkey. Name this prince.",
      answer: "BHIMA"
    },
    {
      id: 3,
      pattern: "H_N____",
      clue: "Who is this monkey? He asked the prince to move his tail, but the prince found that he was unable to. (Hint- in the final battle, this monkey is seated on top of Arjuna's chariot)",
      answer: "HANUMAN"
    },
    {
      id: 4,
      pattern: "K_B___",
      clue: "The prince finally reached the garden and got the flowers (after a small fight with the guards). Whicj God does this garden belong to?",
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
      { from: 3, to: 2, sideOrigin:"top", sideTarget:"left", straight:true, label: ["blocked his path"] },
      { from: 2, to: 4, sideOrigin:"bottom", sideTarget:"right", straight:true, label: ["entered his garden"] }
    ]
  }
},
{
  id: 99,
  slug: "the-king-who-borrowed-youth",
  title: "The King Who Borrowed Youth",
  description: "A king cursed with old age seeks youth from his sons, shaping the destinies of two great lineages. Identify the events in this story.",
  accent: "#e9c46a",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-cure-on-the-mountain",
  trivia: `
    <p>One day, Devayani, the daughter of Shukracharya (Guru of Asuras), received an invitation to participate in some water games.</p>
    <p>The invitation was from Sharmishta, who was her friend and the daughter of the King of the Asuras.</p>
    <p>Delighted, Devayani went to the specified location on the day of the games — where she found herself surrounded by the princess and many of her other friends.</p>
    <p>A short while later, everyone entered a water tank, and began splashing around. Finally, it was twilight and the games came to an end.</p>
    <p>The girls stepped out of the water and began to change into dry clothes. Unable to see clearly in the dark, Devayani quickly changed into the clothes she had brought.</p>
    <p>Just then, Sharmishta came by in search of her clothes. She looked up and saw Devayani wearing them!</p>
    <p>She shouted in anger — "How dare you — the daughter of a poor teacher — have the audacity to wear my clothes? They are made of silk and gold. You must only wear simple cotton outfits — give my clothes back to me right now."</p>
    <p>Sharmishta looked around for Devayani's clothes, found them and threw them at her.</p>
    <p>Devayani quickly put on her own clothes. Feeling humiliated, she shouted at the princess — "It was a mistake because of the dark, Sharmishta! How dare you speak to me this way? My father and his special <em>Sanjeevani</em> mantra are the reason for the asuras winning the wars against the gods. How can you forget that?"</p>
    <p>The argument escalated and both of them lost their tempers. The other girls witnessed the fight from a distance, and did not know what to do. One was a princess and the other was a renowned teacher's daughter — no one had the courage to stop them. When it became too dark, they quietly went back to their homes.</p>
    <p>Meanwhile, in an uncontrollable fit of rage, Sharmishta pushed Devayani into a waterless well. She was so angry that she left her friend there and headed back to the palace.</p>
    <p>Devayani, meanwhile, began yelling out in the hope that someone would help her.</p>
    <p>Finally, in the early hours of the morning, a chariot passed in the distance. The chariot belonged to Yayati, who was the son of Nahusha.</p>
    <p>He heard a cry for help, and wondering who it was, brought his chariot to a halt.</p>
    <p>He followed the sound coming from a well nearby. When he looked inside, he saw a lone maiden who was very beautiful. He extended his right hand and the maiden placed her right hand in his. With a firm tug, he pulled her out of the well.</p>
    <p>Yayati introduced himself, and asked her how she had ended up there.</p>
    <p>Devayani also introduced herself as the daughter of Shukracharya, and explained what the princess had done. Then suddenly, she said that since he had held her right hand in his, they must now get married.</p>
    <p>The King was taken aback, especially since he knew of her father's reputation and short temper. He explained that he had simply helped her, and that it was not his intention to get married to her.</p>
    <p>Devayani then insisted that it was the custom for a daughter of a sage to marry the man who held her right hand.</p>
    <p><em>(Kacha's curse was coming to fruition.)</em></p>
    <p>Yayati agreed, somewhat reluctantly.</p>
    <p>Devayani then went home, and told Shukracharya everything that had happened. Then she told him that King Yayati would be coming the next day to ask for her hand in marriage.</p>
    <p>Shukracharya agreed to the match.</p>
    <p>Devayani then requested him to give her what she would ask for when the time came, as a wedding gift. Shukracharya placated her, telling her that since he had helped the King win so many wars, he would give him whatever she desired as a gift.</p>
    <p>Then, Devayani said that she wanted to have Sharmishta as a slave, and that she should accompany her to her husband's home.</p>
    <p>Shukracharya was taken aback, and tried to convince her to change her mind. He told her to forgive Sharmishta and forget the unpleasant incident.</p>
    <p>But Devayani remained stubborn and refused to budge.</p>
    <p>Finally, the next day, Shukracharya approached the King and told him about the incident, and also asked him to ensure that Sharmishta was given as a wedding gift to Devayani.</p>
    <p>The King was in a fix. He thought that if he did not agree to the Guru's command, he might leave the court, and maybe even join the gods, which would surely result in his defeat. He knew what had to be done.</p>
    <p>Thus, Devayani got married to Yayati, and Sharmishta had to follow her as a maid to her new home.</p>
    <p>Sharmishta was made to reside in an outhouse at a considerable distance from the main palace, and over time, she was forgotten about.</p>
    <p>Meanwhile, Yayati and Devayani had two sons — Yadu and Turvasu.</p>
    <p>One day, while Yayati was wandering in the royal gardens, he saw a beautiful maiden working near an outhouse. Something about her graceful movements made him curious — she did not seem like a maid despite her clothes.</p>
    <p>He approached her and asked her who she was.</p>
    <p>Sharmishta introduced herself, and recounted her story. King Yayati took pity on her.</p>
    <p>After that first day, he met her several times, and finally asked her to marry him in secret.</p>
    <p>By then, Sharmishta had also become fond of the King, and agreed. Eventually, they had three sons — Druhyu, Anu and Puru.</p>
    <p>Years passed, and Devayani was unaware that her husband had also married Sharmishta.</p>
    <p>One day, Devayani's children, Yadu and Turvasu, were playing with a ball a little distance away from the main palace. Suddenly, the ball flew high up in the air and fell near the front door of a small house nearby. Three bright-eyed boys came out and gave the ball back to Yadu.</p>
    <p>Devayani had been observing her children from a distance. Even from there, she was drawn to these three boys — they did not seem like ordinary servants. She approached them and asked them who their parents were.</p>
    <p>One of the boys said that his mother was Sharmishta, and then Devayani recalled her forgotten friend and slave.</p>
    <p>She then asked them who their father was. At that moment, Yayati's chariot had stopped nearby, and the boy pointed at him. Devayani stood rooted to the spot, and her eyes clouded with disgust and anger.</p>
    <p>She walked up to her husband and demanded if he was the father of those three boys, and Yayati said that he was.</p>
    <p>Devayani, without a word, turned around and went back to Shukracharya's home.</p>
    <p>Shukracharya tried to console her and told her to forget the past and forgive Yayati and Sharmishta. He told her to be magnanimous and treat the children and their mother well. Since she was the first wife, the honour and the kingdom would come only to Devayani's children.</p>
    <p>But Devayani did not care and wanted to punish Yayati. She begged Shukracharya to curse him. Shukracharya warned her and told her to think of the consequences to her own children.</p>
    <p>But Devayani carried on and told him to curse Yayati so that he would lose his youthful looks and body, and turn into an old man immediately.</p>
    <p>Finally, Shukracharya relented and used his yogic powers to curse Yayati.</p>
    <p>When Yayati learnt of the curse he was to face, he came and fell at Shukracharya's feet and asked for forgiveness.</p>
    <p>Shukracharya felt sorry for him, and modified the curse. He said that Yayati would turn old immediately, but if some young man was willing to exchange his youth for Yayati's old age, he could become young again. Eventually, he would have to reverse this and give that man back his youth and accept his old age.</p>
    <p>King Yayati bowed, thankful for the leeway he had been given. He wanted to be young for a little while longer, and enjoy what life had to offer.</p>
    <p>He left Shukracharya's house with the hope that one of his sons from Devayani would be ready to temporarily give their youth to him. But to his dismay, both Yadu and Turvasu declined to do so.</p>
    <p>Yayati was furious with the two boys. He had wanted to make them his successors when the time came, but seeing that they were not ready to sacrifice even a little for their father's sake, he cursed them that neither they, nor anyone from their lineage, would ever rule a Kingdom.</p>
    <p><em>Today, it is a well-known fact that Yadu's lineage, the Yadavas, never ruled a Kingdom. Lord Krishna was born in the same dynasty, but never sat on the throne despite his eligibility.</em></p>
    <p>Disappointed with Yadu and Turvasu, Yayati approached the sons he had with Sharmishta. Puru looked to his mother for guidance, and Sharmishta told him that it was the duty of a son to help his father.</p>
    <p>Puru understood and offered his father his young body. Immediately Yayati became young again, while Puru aged and became an old man.</p>
    <p>For many, many years, Yayati lived happily and enjoyed his youth. Much later, he realised the fruitlessness of the human body and exchanged it back with Puru.</p>
    <p>Puru and his successors eventually became emperors of the dynasty. The lineage of Puru then became known as the Kurus, who ruled Hastinapur and became the originators of the great epic Mahabharatha.</p>

    <img src="assets/images/Chandravamsha.png" 
         alt="Lineage chart of Yayati" 
         style="width:100%; margin-top:20px; border-radius:8px; display:block;">

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales About Women in Mythology</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "D_V__A__",
      clue: "The Daughter of the Guru of Rakshasas who got into an argument with a princess (with regard to a mix-up with clothes) and was thrown by the her into a well.",
      answer: "DEVAYANI"
    },
    {
      id: 2,
      pattern: "Y_Y___",
      clue: "The King who found the young girl stranded in a well and rescued her. They eventually get married.",
      answer: "YAYATI"
    },
    {
      id: 3,
      pattern: "SH__M____A",
      clue: "The princess who was made a slave and made to accompany the daughter of the acharya after her marriage.",
      answer: "SHARMISHTA",
      size: "wide"
    },
    {
      id: 4,
      pattern: "_H_K__CH__Y_",
      clue: "The Guru of Rakshasa who cursed the King that he would lose his youth. But he later relented and told that the king could exchange his old age with someone's youth temporarily.",
      answer: "SHUKRACHARYA",
      size: "wide"
    },
    {
      id: 5,
      pattern: "Y_D_",
      clue: "The prince who refused his fathers request to exchange his youth with him for a while. Because of this, he was cursed that none in his lineage would ever rule a Kingdom.",
      answer: "YADU"
    },
    {
      id: 6,
      pattern: "P__U",
      clue: "The son of the second queen, who agreed to exchange his youth with his father. After his father enjoyed his youth for many, many years, he returned it back. This prince eventually became the Emperor and his lineage ruled Hastinapur. His descendants included the Pandavas and the Kauravas.",
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
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"top", straight:true, label: ["rescued"] },
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"top", straight:true, label: ["secretly married her"] },
      { from: 4, to: 2, sideOrigin:"bottom", sideTarget:"top", label: ["cursed him"] },
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
  accent: "#42f74b",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "when-the-vow-was-almost-broken",
  trivia:`<p>When Lakshmana was hit by a weapon by Ravana, he fell down unconscious. Sri Rama was worried and heartbroken, thinking that Lakshmana had died. He was prepared to die too. </p>
  <p>Then Sushena, the physician of Vanaras said Lakshmana was not dead - his countenance had not changed, nor had it become dark. </p>
  <p>Sushena was the one who prescribed the life bringing herbs and asked Hanuman to bring them quickly. He gives different herbs names for different purposes. But Hanuman could not identify those precious herbs. So, he uprooted the whole mountain, and restored it back to its original position after the mission was over. </p>
  <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: https://hinduism.stackexchange.com/questions/26104/who-prescribed-sanjivani-when-lakshmana-became-unconscious</em></p>
`,
  rowHeight: 280,

  nodes: [
    {
      id: 1,
      pattern: "L_K___A__",
      clue: "When hit by a powerful astra by the King of Lanka, he fell down unconscious.",
      answer: "LAKSHMANA"
    },
    {
      id: 2,
      pattern: "R___",
      clue: "His brother (who thought that he had died), was devastated and was prepared to die too.",
      answer: "RAMA"
    },
    {
      id: 3,
      pattern: "S_SH_N_",
      clue: "A physician who told him that his brother was merely unconscious and could be revived by a herb.",
      answer: "SUSHENA"
    },
    {
      id: 4,
      pattern: "H_N___N",
      clue: "The son of Vayu who had been sent to retrieve the herb. Unable to identify the one which are needed to revive the prince, he uprooted the entire mountain and brought it with him.",
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
      { from: 3, to: 2, sideOrigin: "left", sideTarget: "right", straight:true}
    ]
  }
},
{
  id: 101,
  slug: "when-the-vow-was-almost-broken",
  title: "When The Vow Was Almost Broken",
  description: "During a fierce battle, a vow is almost broken when a warrior hesitates to fight his grandfather.",
  accent: "#80e2f3",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-king-at-the-hermitage",
  trivia: `
    <p>On the third day of the war, Bhishma made a strategic change in the arrangement of his soldiers. Duryodhana was placed at the front, and he ensured that the Pandavas found it difficult to penetrate through the Kaurava lines. The Pandavas had arranged their soldiers in a semi-circular shape, with Bhima and Arjuna at both ends.</p>
    <p>As the sun rose, the two armies charged upon each other – and neither side could penetrate into the other. Suddenly, Shakuni appeared with a strong regiment ready to back him, but Abhimanyu stood in his way and defeated him.</p>
    <p>Bhima once again found himself face to face with Duryodhana – a second time in the last three days, and came charging at him menacingly. He threw Duryodhana down in a direct clash and he lay unconscious. Duryodhana's charioteer drove him out of the chariot. When Duryodhana revived, he was perplexed at the loss and defeat he suffered at the hands of the Pandavas, and he blamed Bhishma and Drona for holding back. He demanded why the Pandavas were still alive when great warriors like them were fighting against them.</p>
    <p>Bhishma laughed and said that the Pandavas were invincible – they couldn't be defeated even by the gods. All he could do was devastate their armies and check their advance.</p>
    <p>That afternoon, Bhishma's next charge scattered the Pandavas and injured Yudhishtira, who was forced to leave. Krishna drew Arjuna's attention to the destruction caused by the Kauravas and Bhishma.</p>
    <p>Arjuna then asked Krishna to drive the chariot towards Bhishma. Krishna wheeled his horses, charging into the Kaurava division. Bhishma began raining lethal arrows upon Arjuna, but Krishna handled the reins skillfully, dodging the deadly arrows and preventing any serious damage to Arjuna.</p>
    <p>Pandu's son, the greatest archer of his time, aimed arrows straight at Bhishma's bow and broke two of his bows in succession. Meanwhile, Bhishma's elephant division surrounded Arjuna. Satyaki rushed to his aid and killed the Kaurava soldiers and elephants.</p>
    <p>Some of the soldiers retreated, and Krishna shouted at Satyaki to go after them. He also shouted at Arjuna to kill Bhishma at that moment, or else he would do it himself.</p>
    <p>Arjuna's hand trembled as he held his Gandiva, at the thought of killing his grandfather. Krishna, losing his patience, jumped out of his chariot himself with the Sudarshana Chakra gleaming across his index finger.</p>
    <p>Bhishma looked at Krishna in wonder and welcomed him with open hands. Meanwhile, Arjuna ran behind Krishna and pleaded with him to come back and not break his vow. He promised to wipe out the Kurus.</p>
    <p>Krishna calmed down and took up the reins of the chariot once again. The Gandiva roared once again and Arjuna mercilessly killed the Kaurava men.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 340,

  nodes: [
    {
      id: 1,
      pattern: "__I___A",
      clue: "A very powerful warrior who wreaked havoc on the Pandavas side during the war. His elephant division surrounded one of the Pandavas.",
      answer: "BHISHMA"
    },
    {
      id: 2,
      pattern: "___U_A",
      clue: "The Pandava prince who fought back by breaking the great warrior's bow.",
      answer: "ARJUNA"
    },
    {
      id: 3,
      pattern: "S___A_I",
      clue: "A powerful Yadava warrior who rushed to the aid of the Pandava prince.",
      answer: "SATYAKI"
    },
    {
      id: 4,
      pattern: "K_I___A",
      clue: "The one who had taken a vow to never take up arms during the battle. However, seeing the prince hesitating to kill his grandfather, became angry and jumped out of the chariot with the Sudarshana Chakra on his finger.",
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
      { from: 1, to: 2, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["fought"] },
      { from: 3, to: 2, sideOrigin:"left", sideTarget:"right", straight:true, label: ["rushed to help him"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["charioteer of"] }
    ]
  }
},
{
  id: 102,
  slug: "a-king-at-the-hermitage",
  title: "A King at the Hermitage",
  description: "A king's visit to a quiet hermitage turns into a clash, when he desires to possess the Rishi's cow. Identify the events of this story.",
  accent: "#b7fbc6",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-weapon-meant-for-another",
  trivia: `
    <p>Arundhati was the eighth among the nine daughters of Sage Kardama and Devahuti.</p>
    <p>Even as a young girl, she was inclined towards learning and intellectual debates. When she grew up, she married Vasishtha, who was one of the Saptarishis.</p>
    <p>After marriage, Arundhati continued her lessons. She would finish her chores as soon as she could and join her husband's class to learn what Vasishtha taught his students.</p>
    <p>One day, Vasishtha was talking to his students about Dharma. Suddenly, Arundhati requested if she could take over from him and teach the class.</p>
    <p>Vasishtha was surprised by this unusual request, but he agreed. To his pleasant surprise, Arundhati explained the concept of Dharma very clearly to his students.</p>
    <p>After the class, Vasishtha told her that she truly was his equal half, and that she had understood his teachings and his mind. He told her to help him with his classes from then on.</p>
    <p>When Brahma learnt of this development, he was pleased and sent the magical cow Nandini to Vasishtha's ashrama so that she could help Arundhati with her chores, and she could devote more time to the pursuit of teaching and knowledge.</p>
    <p>One day, Vishwamitra — who was then a King — went hunting with his troop. After the hunt, he felt very thirsty. Eventually the group came across Vasishtha's ashrama.</p>
    <p>Vasishtha and Arundhati immediately invited the King in, and within minutes arranged good food, fruits and water for the King and his soldiers.</p>
    <p>The King then said that he wanted to take a bath first, and wished he had another pair of clothes as the ones he was wearing had gotten dirty.</p>
    <p>Vasishtha told him that everything would be taken care of, and after his bath, the King was given robes befitting his royal status, and the group was given a sumptuous meal.</p>
    <p>Vishwamitra was amazed at how they had managed to arrange for the royal feast and clothes in such a short time, and expressed his curiosity.</p>
    <p>Then, Arundhati pointed at the wish-fulfilling cow, Nandini, and told him that she had been given to them by Brahma to help take care of their guests and chores. She would give them whatever they desired.</p>
    <p>Vishwamitra was fascinated by this. He thought that Vasishtha was underutilising Nandini by only asking her for food and clothes. If Nandini belonged to him, he could work towards expanding the Kingdom, defeating his enemies and taking care of the welfare of his soldiers and subjects.</p>
    <p>He then requested the sage to give him Nandini, saying that he needed her more than they did. In return, he promised to give them whatever they asked for — be it land, cows, gold or silver.</p>
    <p>Vasishtha smiled and said that he did not own Nandini. She had come to him from Brahma on the condition that they would only use her for the welfare of others, and not for themselves or their personal desires. She was a great boon for him and Arundhati, and he said that he could not give her away.</p>
    <p>The King was angry and thought that he would teach the sage a lesson. He instructed his soldiers to bring Nandini to him right away, and to use force if necessary.</p>
    <p>When Nandini heard this, she turned her gaze towards Vishwamitra, and suddenly — thousands of warriors emerged from her horns. Within minutes, they had defeated all of the King's soldiers.</p>
    <p>Vishwamitra became ashamed of his behaviour, and thought — what was the use of all his strength and power when Vasishtha was stronger than him even without owning an army?</p>
    <p>He then turned to Vasishtha and told him that from that day on, he would not work on the expansion of his Kingdom or the collection of wealth, but would pursue knowledge — which was the most powerful possession of them all.</p>
    <p>Saying thus, Vishwamitra gave up everything, including his right to the throne. In time, he became a great and knowledgeable sage. However, he was always competitive with Vasishtha and had not yet attained the spirit of compassion befitting a true sage.</p>
    <p>Time and again, he wasted his tapas under the sway of one emotion or the other — either anger, love or sympathy. He finally realised that he would never achieve his goal unless he became a master of his senses. After many, many years of rigorous penance, he was blessed with the title of Brahmarshi, meaning one who had completely conquered his senses. By this time, his sense of rivalry with Vasishtha had also disappeared.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>References: Sudha Murthy — Unusual Tales About Women in Mythology &nbsp;|&nbsp; Bala Ramayana — Central Chinmaya Mission Trust</em></p>
`,
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
      clue: "The sage who was her husband, and one of the Saptarishis.",
      answer: "VASISHTA"
    },
    {
      id: 3,
      pattern: "N___I__",
      clue: "The cow given to the couple by Brahma, which fulfilled all their needs.",
      answer: "NANDINI"
    },
    {
      id: 4,
      pattern: "V___W_M____",
      clue: "The King who visited their ashrama and tried to steal the cow by force. Later on, this King became a great sage.",
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
      { from: 3, to: 2, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["belonged to"] },
      { from: 4, to: 2, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["tried to seize the cow of"] }
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
  trivia: `
    <p>On the fourteenth day of the war, after Arjuna had killed Jayadratha, the Kauravas were furious and determined for revenge. They carried the battle into darkness under lamps and torches. The battle in the night made it more deadly and ferocious. Karna in particular, was creating a lot of havoc.</p>
    <p> Yudhishtira was worried, and pleaded with Arjuna to do something about Karna. Krishna, however did not think it was appropriate for Arjuna to challenge him just yet. In the heat of the moment, Karna might use the Indrastra if Arjuna was to come in his way.</p>
    <p>Krishna suggested Ghatotkacha be tasked with checking Karna's aggression on the field. Ghatotkacha was as strong as Bhima and well versed in a variety of powerful weapons. More importantly, his strength increased manifold after sunset.</p>
    <p>When Ghatotkacha arrived, Krishna explained to him the problem, and his strengths and qualities. He also added that the hour for which he was born had come.</p>
    <p>Ghatotkacha promised to create an ugly dance of death that night. He swooped down upon the Kaurava army with his intensity magnified in the deadly hour of the night. With a blood curdling cry, he led his horde of fierce rakshasas against Karna. The severity of his attack terrified everyone in the battle.</p>
    <p>Ghatotkacha rained shafts and arrows on Kauravas, killing them in thousands. He broke Karna's bow and continued to decimate the Kauravas.</p>
    <p>Kauravas pleaded with Karna to use Indra's Vajra against the Rakshasa. They urged him to kill Ghatotkacha, otherwise, he was sure to kill them all in his rage.</p>
    <p>Karna didn't have a choice, everyone on his side was getting slaughtered. He took out the Vajra and hurled it with grim determination upon Bhima's son. The missile went straight to its target. In his dying moment, Ghatotkacha made a quick decision to bring about a gigantic destruction as a farewell to his Pandava family.</p>
    <p>He expanded his body to the size of a huge mountain, and fell to the ground as the life ebbed out of him, crushing thousands of Kaurava warriors to death.</p>
    <p>Thus, Karna's Vajra was used once, and could not be used for a second time. The only real danger to Arjuna's life was now averted.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "__R__",
      clue: "The warrior who possessed Indra's Vajra with him. He was deadly with it.",
      answer: "KARNA"
    },
    {
      id: 2,
      pattern: "__IS___",
      clue: "The character who was worried that the Vajra could be used to kill the powerful archer, and therefore devised a plan involving a young Rakshasa.",
      answer: "KRISHNA"
    },
    {
      id: 3,
      pattern: "G_____K____",
      clue: "The son of one of the Pandavas sent by this charioteer to create extreme destruction on the Kaurava's side, so that they would be forced to use the Vajra on him.",
      answer: "GHATOTKACHA",
      size:"wide"
    },
    {
      id: 4,
      pattern: "_____A",
      clue: "The warrior who was thus protected from that weapon. He was the one to finally kill the warrior having the Vajra.",
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
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["used the weapon on"] },
      { from: 2, to: 4, sideOrigin:"bottom", sideTarget:"left", straight:true, label: ["charioteer of"] },
      { from: 4, to: 1, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["finally killed"] }
    ]
  }
},
{
  id: 104,
  slug: "the-transformation-in-the-sacred-grove",
  title: "A Transformation in the Sacred Grove",
  description: "A prince wanders into a divine garden and is immediately transformed by a curse. Identify the events of this story, which lead to the origin of Chandravamsha.",
  accent: "#cdb4db",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-curse-on-the-god-of-justice",
  trivia: `
    <p>A long time ago, there lived a man named Vaivasvata Manu, (the first man on earth), and his wife, Shraddha. The couple performed a yagna in the hope of pleasing the gods, as they wished to have a child.</p>
    <p>In time, their prayers were answered and a son was born to them, whom they named Sudyumna. Years passed and Sudyumna grew up to be a fine young man. One day, he went hunting with his friends to a beautiful forest. No sooner had the group entered an enchanted portion of the forest, they were magically transformed into young women. None of them had any idea how it had happened or what they were to do.</p>
    <p>Suddenly, Goddess Parvati appeared and said that he and his friends had entered her garden. It was no ordinary place – and no men were allowed to enter. If they did, they would turn into women immediately and permanently.</p>
    <p>Seeing Sudyumna's dismayed face, Parvati smiled and said that she knew that he had come here by accident. She blessed him to lead a happy life, and from that day on, to be able to choose whether he wanted to be male or female.</p>
    <p>To everyone's surprise, Sudyumna chose to remain a girl, and called himself Ila. Meanwhile, Budha – the god of the planet Mercury and son of the moon-god, Chandra, noticed Ila's exquisite beauty and fell in love with her. The two were wed, and in due course, Ila gave birth to a son called Pururava.</p>
    <p>Time passed, and Ila chose to revert to her male form, Sudyumna. He returned to his kingdom and ruled it wisely. As was expected of a king, Sudyumna got married and had many children of his own. He continued taking care of his subjects until he was old, after which he handed over the kingdom to his first son, Pururava, and retired to the forest to live out the reminder of his days.</p>
    <p>Pururava, the grandson of Chandra, thus introduced the lunar dynasty. He ruled from his kingdom's capital, Pratishthana.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy – Unusual Tales from the Mahabharatha</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "_L_",
      clue: "The prince who had wandered deep into a forest and accidentally entered Parvati's garden. As a result of the curse, he transformed into a woman. Name this woman.",
      answer: "ILA"
    },
    {
      id: 2,
      pattern: "B__H_",
      clue: "The god of planet mercury and the son of Chandra, who fell in love with this woman and married her.",
      answer: "BUDHA"
    },
    {
      id: 3,
      pattern: "P__U___A",
      clue: "The son of these two. He became a great warrior and helped Indra in various battles. He was the man who thus introduced the Chandravamsha.",
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
      { from: 2, to: 1, sideOrigin:"left", sideTarget:"right", straight:true, label: ["married"] },
      { from: 1, to: 3, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["parent of"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"top", straight:true, label: ["parent of"] }
    ]
  }
},
{
  id: 105,
  slug: "a-curse-on-the-god-of-justice",
  title: "A Curse on the God of Justice",
  description: "A sage who suffers a terrible punishment which led him to question the nature of justice. Identify the events in his story.",
  accent: "#8ecae6",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-guardian-of-the-door",
  trivia: `
    <p>There was once a sage called "Mandavya", who had taken a vow of silence. Once, four thieves who had looted from the King's treasury had hidden in his Ashrama.</p>
    <p>When the soldiers of the King began searching the ashrama, they found the loot, and all the thieves, along with the sage, were ordered to be punished.</p>
    <p>Nails were inserted into their body, and all the four thieves died, but Sage Mandavya remained alive due to his Yogic Powers.</p>
    <p>When the King realized his mistake, he asked him for forgiveness, and immediately ordered one of the royal physicians to remove the nails. The Sage, being kind, simply blessed the King. The physicians were able to remove all the nails from the sage's body except one, and this one nail caused a lot of pain to the sage.</p>
    <p>Finally, unable to bear it anymore, he approached Yama, the Lord of Dharma and Death. He asked him why he had to carry that pain, and asked him what sin he had committed to deserve such extreme suffering.</p>
    <p>To this, Yama replied that in his past birth, Mandavya used to torture butterflies by inserting twigs into their bodies, and that sin had caught up with him.</p>
    <p>Mandavya then enquired what age he was when he had done this act, and Yama replied that he was a little child. At this, Mandavya was upset, and told Yama that when a child makes a mistake before the age of twelve, it is not made with any malicious intention, and it should be pardonable. He said that the punishment he had received had been greater than the sin he committed.</p>
    <p>He then cursed Yama to be born as a human being, where he would have great knowledge of Dharma, but it would be completely ineffective in his circumstances. Thus, Yama was born to Vyasa as Vidura.</p>
    <p>He had repeatedly advised Dhritarashtra and Duryodhana about the path of righteousness, but his advice was always ignored.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales from the Mahabharata</em></p>
`,
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
      clue: "The God of Dharma, who was approached by this sage and asked about what he has done to undergo such pain. This God revealed that in his past life - this sage used to torture butterflies by inserting twigs into their bodies, and that the sin had caught up with him. The sage was angry with the disproportionate punishment, and cursed this God to be born as a human with great knowledge of Dharma - but completely uneffective in his circumstances.",
      answer: "YAMA"
    },
    {
      id: 3,
      pattern: "V___R_",
      clue: "The reincarnation of the God above. In this life - he would be constantly advising his brother and nephew about the path of righteousness, but his advice would be continuously ignored, eventually leading to the massive war of Kurukshetra.",
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
      { from: 1, to: 2, sideOrigin:"left", sideTarget:"top", straight:true, label: ["cursed"] },
      { from: 2, to: 3, sideOrigin:"right", sideTarget:"left", straight:true, label: ["reincarnated as"] }
    ]
  }
},
{
  id: 106,
  slug: "the-guardian-of-the-door",
  title: "The Guardian of the Door",
  description: "This is the story of Parvati's son. Identify the characters in this story.",
  accent: "#ffd166",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "the-warrior-on-the-bed-of-arrows",
  trivia:`
<p>One day, Parvati, the wife of Lord Shiva, was going for her bath. As she waited for hot water, she mixed some flour for her bath. Then, she fashioned the figure of a small boy from the flour. Parvati thought it would be a pity to use the flour for her bath and destroy the figure. An idea came to her — Why not give it life? She brought it to life and was thrilled beyond words when the boy came to life. Beaming with joy, Parvati embraced the boy. </p>
<p>Smiling, the boy asked his mother what she wished him to do. She told him that she was going for a bath, and didn't want anyone to come in. He was to keep watch at the door. </p>
<p>The boy stood at the door while Parvati bathed inside. During that time Lord Shiva came unexpectedly and was about to enter the house. Unaware that the Lord was his own mother’s husband, the boy barred his way and told Shiva not to go in as his mother was bathing. </p>
<p>Shiva stared in surprise at the little boy who blocked his way. Where had he come from? And why did he call Parvati “Mother”? Shiva brushed him aside and tried to make his way in. But the boy was very firm. He came back, stood in the middle of the doorway and stretched his little hands across, obstructing the Lord. He insisted that Shiva could not go in and warned him that he would punish him if he disobeyed. </p>
<p>Shiva could not believe being stopped from entering his own house. In a fit of rage, he chopped off the boy’s head and went in. Parvati had just finished her bath. Seeing Shiva, she smiled and asked how he had come in. Hadn't her son stopped her? </p>
<p>Shiva was stunned. “Your son?" he asked. "Then, what the boy said was true. I did not believe him when he claimed to be your son.” </p>
<p>Parvati said proudly that he was indeed her son and that she had created him herself with flour and infused life into him. A sudden thought hit her - how had Shiva entered? </p>
<p>Shiva’s heart was heavy with remorse. He said in a low voice that he did not know any of this. When the boy had come in his way, he had cut off his head. </p>
<p>Parvati was horrified and distraught. Shiva, unable to see her grief, quickly went out to see whether the boy could be brought back to life. To his surprise, he found only the body lying in a pool of blood. The head was nowhere to be seen. Shiva sent his attendants everywhere to look for the missing head, but it was in vain. </p>
<p>He thought hard and sent his attendants out again, instructing them to go search for any living being who was asleep, with its head towards the north, be it human, animal or bird. They were to cut off the head and bring it to him. </p>
<p>The attendants searched everywhere but found no being. Just when they were about to give up, they found an elephant sleeping with its head towards the north. They immediately chopped off its head and brought it to Shiva. </p>
<p>The Lord joined the elephant’s head to the trunk of the body and infused him with life. The boy woke up as if from sleep. Parvati was delighted and embraced him with great joy. </p>
<p>Thus, the boy came to be elephant-headed and was named Gajanana. Lord Shiva made him the head of all his attendants, and because of this, he also came to be known as Ganapati. </p>
<p>If he is pleased, he removes all the obstacles for a person and makes sure that their work is successful. Therefore, he is also known as Vighneshwara, and is prayed to before beginning any new task. </p>
<p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Tarangini – Central Chinmaya Misson Trust</em></p>
`,

  rowHeight: 300,

  nodes: [
    {
      id: 1,
      pattern: "N___I",
      clue: "One of the Ganas of the God of Kailasa. He was asked by Parvati to be posted at her door and not let anyone in.",
      answer: "NANDI"
    },
    {
      id: 2,
      pattern: "S___A",
      clue: "The God of Kailasa who showed up, and entered his home as the gana could not stop him.",
      answer: "SHIVA"
    },
    {
      id: 3,
      pattern: "G__E___",
      clue: "Due to the above incident, Parvati decided to have a Gana who was her own. She gathered a paste and sculpted a boy, and gave him life. Who is this boy?",
      answer: "GANESHA"
    },
    {
      id: 4,
      pattern: "G___S__A",
      clue: "The Rakshasa whose head was taken, and placed on the boy's body.",
      answer: "GAJASURA"
    }
  ],

  layout: {
    positions: {
      1: { x: 0, y: 0 }, //Nandi
      2: { x: 2, y: 0 }, //Shiva
      3: { x: 1, y: 1 }, //Ganesha
      4: { x: 1, y: 2 }  //Gajasura
    },

    connections: [
      { from: 1, to: 2, sideOrigin:"right", sideTarget:"left", straight:true, label: ["let him inside"] },
      { from: 2, to: 3, sideOrigin:"bottom", sideTarget:"right", straight:true, label: ["cut off", "his head"] }
    ]
  }
},
{
  id: 107,
  slug: "the-warrior-on-the-bed-of-arrows",
  title: "The Warrior on the Bed of Arrows",
  description: "After a devastating battle, a fallen warrior lies upon a bed of arrows and continues to guide the princes who stand before him.",
  accent: "#e5989b",
  congratsMessage: "Well done! Onward to the next puzzle!",
  nextSlug: "a-princess-born-of-a-boon",
   trivia: `
    <p>On the tenth day of the war, Krishna urged Arjuna to kill Bhishma so as to win the war. Once again, Arjuna placed Shikhandi ahead of himself. Krishna raced through the army of the Kauravas, with Arjuna killing everyone in the path. A number of Pandava warriors like Satyaki, Chekitana, Drupada, Dhrishtadyumna, Abhimanyu, and Draupadi's five sons attacked Bhishma – but he easily repelled them all.</p>
    <p>Drawing a deadly weapon, he hurled it at the Pandava army, killing thousands of men. But at a point, he decided that his hour had come. As he thought this, he heard the celestial voices of rishis and vasus saying that his decision was right.</p>
    <p>Arjuna kept on raining arrows on the old warrior, and his body was riddled with arrows. As the sun set, Bhishma fell, but his body did not touch the ground. It remained suspended on a bed of arrows above the earth. He also realized that the sun was towards the south – an inauspicious period to die.</p>
    <p>The warrior decided not to give up his life until the sun returned to the north position.</p>
    <p>Dronacharya blew his conch, ordering the soldiers to lay down their weapons in honor of Ganga's son. The war came to a close – and all the warriors came there to pay their final salute to Ganga's son.</p>
    <p>The next morning, Bhishma called Arjuna and told him that he was feeling very thirsty, and asked him to give him water to drink.</p>
    <p>Arjuna knew what his grandfather wanted. Raising his Gandiva – he shot an arrow into the ground so skillfully that it plunged into the earth and a cool stream of water gushed out to fall straight into the parched mouth of Bhishma.</p>
    <p>Bhishma was highly pleased with Arjuna and declared him to be a matchless archer, who was none other than the ancient sage Nara. Then he called Duryodhana and advised him to patch up with the Pandavas to save the Kurus from extinction. But Duryodhana did not heed his grandfather's advice.</p>
    <hr/>
    <p>Even after the war was over, Bhishma was still on the bed of arrows, waiting for the sun to move into the northern horizon. Yudhishtira, along with the other Pandavas and Krishna – went to see him.</p>
    <p>Krishna said that Bhishma was the last repository of wisdom on the Vedas and the other scriptures, and therefore suggested Yudhishtira to enquire from him everything on morality, ethics and politics.</p>
    <p>So, for the next few days – Bhishma expounded on sovereignty, statecraft, truth and morality, the treatment of friends and foes, virtue and vice, justice and conduct. On the last day of his conversation with Yudhishtira, he also recited the thousand names of the Lord (Vishnu Sahasranama).</p>
    <p>At last, when the sun moved into the northern horizon, Bhishma decided to depart from the world. Fragrant flowers dropped from the sky. The Pandavas performed his last rites with the highest honor.</p>

    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Mahabharatha – Om Books International</em></p>
`,
  rowHeight: 320,

  nodes: [
    {
      id: 1,
      pattern: "B_I___A",
      clue: "The great warrior who was struck repetitively by a volley of arrows on the tenth day of war. The arrows were so numerous and precisely placed that they held his body above the ground, preventing him from touching the earth.",
      answer: "BHISHMA"
    },
    {
      id: 2,
      pattern: "A__U_A",
      clue: "The prince who shot an arrow into the ground, causing water to come out and quench the warrior's thirst.",
      answer: "ARJUNA"
    },
    {
      id: 3,
      pattern: "Y_____H_I__",
      clue: "The prince to whom the great warrior narrated the thousand names of Lord Vishnu. (Vishnu Sahasranamam)",
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
      { from: 2, to: 1, sideOrigin:"top", sideTarget:"left", straight:true, label: ["gave water to"] },
      { from: 1, to: 3, sideOrigin:"right", sideTarget:"top", straight:true, label: ["narrated the thousand names to"] }
    ]
  }
},
{
  id: 108,
  slug: "a-princess-born-of-a-boon",
  title: "A Princess Born of a Boon",
  description: "This is the story of a princess blessed in her previous life to be married to a powerful king. Identify the events in her story.",
  accent: "#f6bd60",
  congratsMessage: "Well done! You've reached the end of all puzzles!",
  nextSlug: "end",
  trivia: `
    <p>A long time ago, there lived a group of sages who went out every morning for their prayers and came back to their dwellings in the evening. They led a simple life, eating fruits and drinking water from a nearby well. A frog who lived in the well observed their way of life and also turned pious.</p>
    <p>One day, when the sages had gone for their prayers, a poisonous snake entered the well. The frog saw this, and realized that if the sages drank this water, they would die.</p>
    <p>In the evening, when the sages returned, the frog jumped into the well to warn them about the poisonous water. The sages saw the sudden movement of the frog and peeped inside the well. To their surprise, the frog was dead. They brought it out of the water, and realized that its body had turned bluish grey, and that the water was poisoned. They also discovered through their yogic powers that the frog had given his life to save all of theirs.</p>
    <p>They blessed the frog, and revived it, and asked it to ask for a boon. When the frog came back to life – it said – "I want to be beautiful like Parvati and marry someone who is extremely learned and is an emperor."</p>
    <p>The sages smiled and said that the frog would take birth as a very beautiful and pious woman whose name would always be associated with virtues and devotion to her husband.</p>
    <p>Thus, the frog was born as Mandodari, the daughter of Mayasura (the architect of asuras), and the celestial dancer Hema.</p>
    <p>As time progressed, Mandodari grew up to be an exquisite and pious woman. Eventually, she married Ravana, who was the greatest warrior of the time, and a highly learned man.</p>
    <p>She is remembered as one of the five great women or <em>Panchakanya</em> — Ahalya, Tara, Mandodari, Draupadi, and Sita.</p>
    <p style="margin-top:16px; font-size:13px; color:#aaa;"><em>Reference: Sudha Murthy — Unusual Tales About Women in Mythology</em></p>
`,
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
      clue: "The princess who was a frog in her previous life. This frog saved a group of Rishis from drinking poisonous water. Therefore, she was given a boon that in her next life, she would be very beautiful, and would marry a learnt man who was an emperor.",
      answer: "MANDODARI"
    },
    {
      id: 3,
      pattern: "R___N_",
      clue: "The King that was married to her. He was the greatest warrior of the time and a highly learnt man.",
      answer: "RAVANA"
    },
    {
      id: 4,
      pattern: "R__A",
      clue: "The prince who killed this King.",
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
      { from: 4, to: 3, sideOrigin:"top", sideTarget:"bottom", straight:true, label: ["killed"] }
    ]
  }
}
];