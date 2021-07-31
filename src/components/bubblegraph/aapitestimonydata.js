const testimonies = [
    {
        "Text": "Someone drove up to me, rolled down their window, shouted “I used to beat up your kind of people when I was in high school!” And drove off laughing maniacally. I was terrified. I was alone, I was just going to pick up dinner, I was scared they were going to double back to physically attack me. I cried hysterically in my car after the incident.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Mental-Health-Report-210527.pdf"
    },
    {
        "Text": "I was walking with a female friend, and a man walked past us and said \"Chinese go back to China.\" He then turned around and walked past us again and repeatedly yelled at us and said \"Go back to China.\" We were very scared and tried to get away from him but he followed us for about three minutes, one block. Once we crossed the street to where more people were then he stopped following us. My friend and I were shaken by the incident.",
        "State": "DC",
        "City": "Annadale",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Mental-Health-Report-210527.pdf"
    },
    {
        "Text": "[My] 8th grade daughter [was] being teased & humiliated by schoolmates to run away from “Kung-flu / Coronavirus”. Immediately [my] daughter felt ashamed to be Asian & scared to go back to school [after] this humiliation.",
        "State": "California",
        "City": "Concord",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Mental-Health-Report-210527.pdf"
    },
    {
        "Text": "Three boys circled my friend, spat on her, and called her slurs etc. She was about to burst into tears. She is scared to go to school now.",
        "State": "New York",
        "City": "Amsterdam",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Mental-Health-Report-210527.pdf"
    },
    {
        "Text": "We have been terrorized by a racist offender who lives next door to us. We feel afraid for our safety, emotionally traumatized, elder abuse by yelling, shouting, videotaping, and spitting at our elderly mother when she is in her own backyard. We are on edge, constantly fear intrusion into our home, cannot sleep well at night, unable to walk outside due to fear for our safety",
        "State": "California",
        "City": "Villa Park",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Mental-Health-Report-210527.pdf"
    },
    {
        "Text": "My new coworkers keep asking me whether or not I'm Chinese. After an initial high from being offered a job during the \"China Virus'', I am now feeling anxious and having trouble hiding my severe anxiety. This leaves me in a precarious position. If I fail my probation, who will hire me?",
        "State": "Maryland",
        "City": "Gaithersburg",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Mental-Health-Report-210527.pdf"
    },
    {
        "Text": "I went to a store a block away from my building. On my way back, at a red light, a man in a car rolled down his window to scream at me, “China did this to us, to Americans, f*** you, f*** China, yeah I’m talking to you, b****’ with slurs and acted as though he was going to get out of his car before he sped off.",
        "State": "Massachusetts",
        "City": "Boston",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "During my mom’s morning walk, she came across a man walking his dog. Immediately, he started to harass her by yelling and insulting her with the following statements: “Get out of here!” “You don’t belong in this neighborhood!” “You b****!” “You’re ugly!” He proceeded to mock her accent and also by impersonating an elderly person as she was walking away. Moreover, he stated, “The next time I see you, I’m going to run you over with my car!”",
        "State": "California",
        "City": "Gardena",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "A group of men in a car slowed down next to me when I was walking back to my dorm from the grocery store, then started making racist and sexual remarks. “I like them chi*ky” and “This all happened because of bat-eaters, but I still love you long time!” I had to start running between buildings so they couldn’t follow me.",
        "State": "Maine",
        "City": "Brunswick",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "I was with my two young children at [store name] to buy strawberries. I opened the container to check for mold when two men shouted that I was spreading COVID, getting everyone sick, called me a f*** b**** and said they should punch me. It scared my children and they said the men kept following us around the store.",
        "State": "New York",
        "City": "Mount Kisco",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "I was standing in line buying food and a woman not wearing a mask told me to pay for her food. When I said no, I was punched and yelled at. I was called an Asian b***h!” I called the police but after 10 minutes I left because I felt unsafe.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "Came out from an Asian take out restaurant in New York and came across a guy in front of me. After one eye contact, he yelled out “f**king Asian b***h,” then he started attacking with his fist. He knocked me down on the floor and started kicking me. Thank God my husband came to my rescue and he ran away",
        "State": "New York",
        "City": "New York City",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "I received 30+ comments from some account on Instagram attacking me using hateful, racist, and perverted language. A lot of the comments attacked me for being Asian, calling me “G**k” or likening me and other Asian people in my posts to coronavirus, e.g. “corona girl”, “achooooo”, which one of you can cough the furthest distance”, etc. a lot of the comments were also sexual, e.g. “flat boobs girl”, “white fetish assley”, etc.",
        "State": "California",
        "City": "Dublin",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "Former friends have continuously harassed me by adding me to online chats, then calling me racist names like f**king chink b***h, and telling me and my family to go back to Hong Kong although I was born in the US. My father is Hmong and I am half Hmong and half white.",
        "State": "Minnesota",
        "City": "Blaine",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "This lady spat in my direction and I literally walked in front of a car to avoid it and she was like “What the f*** you looking at you Chinese b**** wearing a f***ing mask bringing the coronavirus.",
        "State": "New York",
        "City": "New York City",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "Man harassed elderly Chinese woman on the train, then started to harass me, spat at my feet, told me I brought the virus to the US, made sexual comments about my visible fear and anxiety. Followed and chased me off the train.",
        "State": "Illinois",
        "City": "Chicago",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "I was walking on the middle level of the subway station in NYC when out of nowhere, a maskless man approached me and got very close to me, spitting at me, making incoherent sounds that are supposed to sound like some Asian language (I presume), blaming me directly for the pandemic, and telling me to go back to China.",
        "State": "New York",
        "City": "New York City",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "I was at an auto repair shop and the guy at the desk really didn’t seem to want to help me. He kept making excuses for why they couldn’t fix my car: telling me it would be too expensive for me to fix my tail light, telling me that it could take a really long time to order and get my taillight in stock. But as I was leaving, I heard one of the mechanics say to the guy at the desk, “Oh, I’m glad you got rid of her. I’m not working on a coronavirus car.”",
        "State": "Texas",
        "City": "Dallas",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "Refused entry onto transit train. Transit employee raised voice and said to me and another young Asian woman, “the Asian girls are the most ignorant bitches out of everyone” as he blocked the entrance to an open door to board the train.",
        "State": "New York",
        "City": "New York City",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "I received a racist email at work from a colleague. The framing of the email implied I was “Socialist and Leftist” and a COVID-19 carrier — as indicated by a masked emoji included in the email. I reported this internally in my company to managers, and received no action in response.",
        "State": "California",
        "City": "San Francisco",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "I was at work and a customer told me that Asians are awful and should all die. That the only thing good about us is our food.",
        "State": "Colorado",
        "City": "Grand Junction",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "I was at work and a customer said he would sue the place if he got sick. He proceeded to point at me and say “everything was my fault.”",
        "State": "South Carolina",
        "City": "Taylors",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate_NAPAWF_Whitepaper.pdf"
    },
    {
        "Text": "While shopping at a local grocery, [I walked] past a gentleman who said, \"Chinese Motherf***er.\" I continued shopping, then ran into him again in another aisle, when he said the same slur. I told him I am not from there and never been to China, and he said, \"Doesn't matter — you are all the same and you are a virus.",
        "State": "Arizona",
        "City": "Gilbert",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was at the park with a friend and our young children. A large man was jogging by, lunged off the path toward me and yelled “F****** ch***!” in my face before jogging away. We were with our children and too scared to confront him, but he appeared unashamed as he jogged by again.",
        "State": "California",
        "City": "Riverside",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was in class, the professor was having hoarse cough symptoms. She emphasized at the time that she did not have COVID-19 because she had never been to China. I was the only Chinese student in class, and she knew that I was from China. The students began to discuss the Chinese eating bats, snakes, and dogs. The teacher didn't stop it. [Reported in Chinese]",
        "State": "Illinois",
        "City": "Chicago",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "A little kid and kid’s dad yelled “Ching Chang Chong”, made the slanted-eye mockery, then stuck their tongue out to me, my husband and my friend; then ran away. [Reported in Korean]",
        "State": "Wisconsin",
        "City": "Madison",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "After COVID cases were announced…my kids told me that they have been getting picked on for being Asian at school. Students would comment out loud that my kids had the coronavirus and that everyone should stay away from them. It continued until schools were officially closed. When we would go out, we were knowingly shunned where parents would pull their kids away from us if they got close.",
        "State": "Texas",
        "City": "The Woodlands",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I entered the public bathroom at [a] grocery store. A white man and his son were at the bathroom [and] when [the] white man saw me, he said “Sh*t, there is an Asian coming!\" He called his son, and quickly escaped the bathroom.",
        "State": "Indiana",
        "City": "West Lafayette",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I'm Chinese American. During this pandemic, at the mall, I was asked [by a person] to take the next following elevator because I was making her mother “uncomfortable” just by my presence, yet they allowed another Caucasian man into the elevator. Maximum capacity of the elevator was four people, yet I was excluded because of their fear of my race.",
        "State": "California",
        "City": "West Hollywood",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "My mother was ordering food at a [restaurant] when a man tried to hit her in the face. She was able to avoid him, but he yelled a bunch of slurs — “Go back to China!” and “Corona!” — at her before he ran out.",
        "State": "California",
        "City": "Northridge",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "My elderly mother (65 years old) was waiting for the subway. Someone tried to push her off the platform down into the train tracks. She screamed and a fellow bystander chased off the perpetrator. The good samaritan stood nearby my mom until she boarded the train safely.",
        "State": "Massachusetts",
        "City": "Boston",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was at lunch and an Asian kid was spit at and called names, “Ching Chong, slant, ch***.” Another kid came and slapped him on the back of the head.",
        "State": "Louisiana",
        "City": "Scott",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "My boyfriend and I were walking back home through the back alleyway attached to our complex. Two white men, who park back there and live nearby, tried to hit us with their car. We jumped out of the way and they missed us by inches. They then stopped and yelled out of the window at us “Go back to China!” three times along with profanity",
        "State": "California",
        "City": "Beverly Hills",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was playing League of Legends with some friends on a call. One of my friends kept yelling racial slurs at my friend who is Chinese and me. He kept saying things like \"You f***ing ch***!\" or \"dog eater!\" and asking if we have the virus.",
        "State": "California",
        "City": "Stockton",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "A random person messaged me on Facebook. They used slurs against me and against my Asian husband calling him \"an almost Black ch***\" and saying we should both be hung.",
        "State": "Minnesota",
        "City": "Dilworth",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was in the middle of a Zoom presentation at [an event] when two people hacked into the Zoom room and started disrupting my presentation with barely intelligible remarks. They were kicked out but not before entering into the Zoom Chat: \"CHING CHONG. ASIANS DESERVES TO BE KILLED.\" And then: “lol.\"",
        "State": "California",
        "City": "Culver City",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was at work, minding my own business and using the restroom, when one customer came up to me. As I turned around, he caught a glimpse of my eyes and began with the racial slurs. Eventually, as I was leaving, the customer spat on me. He even said things such as “Go home and take the COVID with you.”",
        "State": "Michigan",
        "City": "Muskegon",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "[I was] crossing the street in San Francisco when a man crossing from the opposite direction approached me, pulled down his mask, yelled at me, \"Go back to your country!\" and spit on my face before taking off.",
        "State": "California",
        "City": "San Francisco",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was eating and talking on the phone in Chinese when a man came up to me, called me a “Ch***\" and spit on me.",
        "State": "Oklahoma",
        "City": "Oklahoma City",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was at a gas station with my father. I was trying to buy some gum until a person told me, “Kid, you’re a virus, go back to Asia, you Asian b****.”",
        "State": "Alaska",
        "City": "Fayetteville",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "The worker at the store called out Asian people and refused to ring them up. Any item I grabbed he said he was reserving for himself. He also called me “Yellow ch***.”",
        "State": "California",
        "City": "Alhambra",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "We received discriminatory, targeted poor service at [a restaurant]. We were the only Asian party there. The server mocked us by imitating an Asian language, purposefully grated a pile of parmesan cheese over my friend's lap, and hovered over her when delivering her check, invading her personal space when she was sitting alone and vulnerable. The other parties in the restaurant were treated warmly and with welcoming attention. We were explicitly ignored throughout the duration of our lunch.",
        "State": "New York",
        "City": "New York City",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "[I] arrived early for a group fitness class, waited and was [among] the first ten to enter the room. The instructor kicked me out and said “not for ch***y eyes.”",
        "State": "New York",
        "City": "New York City",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "Two physicians [were] discussing the origin of the virus and calling it the “China virus” in front of the rest of the staff in the hospital. Also, there is harassment/discrimination against Asian healthcare workers in certain departments of the same hospital.",
        "State": "California",
        "City": "Carmel",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was discriminated against by my own bosses and coworkers, along with customers. I was being told to \"go back to my country,\" or that I would \"give them\" COVID. I would even get death threats from customers, and they would tell me to kill myself and/or they would kill me.",
        "State": "California",
        "City": "Santa Maria",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "While working as a cashier, without provocation, a customer told me to, \"Go back to your country.\" He did so in a nasty way. I was afraid for my safety and job. I reported it to my supervisor. He did nothing and did not know what to do. This was the 6th time this happened to me where customers were harassing me for just being an Asian.",
        "State": "Rhode Island",
        "City": "Cranston",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I've lived in the [neighborhood] over a decade and never seen any graffiti targeting Asians. I have shopped at this [drug store] since the opening of the location, but in my recent trip last week I found the offensive graffiti, “NO ASIAN PARKING” in the parking garage. I notified the drug store management too.",
        "State": "Washington",
        "City": "Seattle",
        "Type": "Vandalism",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "“GTFO my state pedophilia asian b****” was written on a convenience store wall on my street multiple times.",
        "State": "California",
        "City": "San Jose",
        "Type": "Vandalism",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210506.pdf"
    },
    {
        "Text": "I was shopping at [store] in Milpitas when an older man started making faces at me. I asked him what was wrong and he said, \"What's wrong? You are out here shopping!\" I was confused, and he followed up with, \"We delisted your companies, shipped back your international students…when do you ship out? When do you ship out? We are going to take away your citizenship!\"",
        "State": "California",
        "City": "Milpitas",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "A white man catcalled me, then aggressively followed me down the block, and got inches from my face and yelled “Ch*nk!” and “C*nt!” after realizing I was Asian. Lots of neighbors were standing outside their homes and no one intervened.",
        "State": "New York",
        "City": "Brooklyn",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "As I was shopping, a white woman and what I am assuming was her husband came into the aisle I was in. They gave me dirty looks and just looked me up and down like they were disgusted with me. I tried to ignore it the best I could so I just walked away. To add to the story, I am a part of the LGBTQ+ community so I was wearing a mask that showed love and support for the community. As I walked away, the woman proceeded to walk up to me and stop me. She looked me up and down and said these exact words: “Oh so you’re one of them?” And I was of course confused but then I remembered I had on the LGBTQ+ mask. I politely responded “Excuse me?” She proceeded to say slurs that were both directed towards Asians and the LGBTQ+ community",
        "State": "Kentucky",
        "City": "Jefferson",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "Two white, middle-aged men, who have been my neighbors for over fifteen years, approached me threateningly on the street, pulled down the corners of their eyes and said, “Go back to Wuhan, b*tch and take the virus with you!” When I called them vile, they then called me a “Thai wh*re” and threatened to beat up my husband.",
        "State": "Canada",
        "City": "Vancouver",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "This specific incident was in a NYC grocery store where a man started screaming at me and called me a \"disgusting f*cking animal,\" told me to \"get the f*ck out of the store,\" asked if I was crazy, and told me to \"go back home\" and \"get out of the f*cking country.\" He followed me around the store screaming at me and nobody did anything.",
        "State": "New York",
        "City": "New York City",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "My boyfriend and I were riding the metro into DC. When on the escalator in the transfer station, a man repeatedly punched my back and pushed past us. At the top, he circled back toward us, followed us, repeatedly shouted \"Chinese b**ch\" at me, fake coughed at, and physically threatened us. A few days later, we saw a news story about how the owner of Valley Brook Tea in DC was harassed and pepper sprayed by the same man, calling him \"Covid-19\" repeatedly.",
        "State": "Virginia",
        "City": "Annandale",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "During an Asian American protest, a white man driving a silver Mercedes drove past the first wave of Asian protesters yelling out of his window at them, \"Stupid f*cking Asians!\" Afterwards, he drove to where the remaining Asian protesters stood and was witnessed by multiple protesters aggressively driving onto the walkway where several protesters were gathered. Several elderly Hmong women jumped out of the way. An 8-year-old boy, who stood in the path of the oncoming vehicle, was startled into action and quickly moved out of the way towards safety",
        "State": "California",
        "City": "Elk Grove",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "I came into the coffee shop at Mercato and people started leaving the area where I sat one by one. People started coming in and they sat on the other side of the coffee shop away from me. I became isolated on one side of the coffee shop.",
        "State": "Florida",
        "City": "Naples",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "A [ride hailing service] driver said to me after I got into his car, \"Damn, another Asian riding with me today, I hope you don't have any COVID.\" He was leaning as much as he could against the driver's door with his head tilted toward the window implying he doesn't want to be close to me while I am sitting diagonally behind him as a rider. After I told him, \"Have a good day,\" he replied back, \"You shouldn't be requesting anymore rides from anybody.\"",
        "State": "Nevada",
        "City": "Las Vegas",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "I am a Pacific Islander. I was at the mall with a friend. I was wearing a plumeria clip and was speaking Chamorro when a woman coughed and said, “You and your people are the reason why we have corona.” She then said, “Go sail a boat back to your island.”",
        "State": "Texas",
        "City": "Dallas",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "These white males were walking toward me, moved into the street when they saw me, yelled, “Hey ch*nk!” and then spit at me.",
        "State": "Texas",
        "City": "College Station",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "I was trying to enroll my daughter in a gymnastics class and had left several messages to call back. I was finally able to speak with the owner of the business and asked why he had not returned my phone calls, and was told that he did not like my name which is obviously Asian and he would not accept our daughter into his gym. I was so shocked at his blatant statement and hung up the phone.",
        "State": "California",
        "City": "Tustin",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "I was shouted at and harassed by [business name] cashier, workers, as well as customers at the store to get out of the store. They said, “You Chinese bring the virus here and you dare ask people to keep social distance guidelines.”",
        "State": "California",
        "City": "Cupertino",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "There was graffiti in front of a supermarket that said “CHINA OFF MY FACE.” It was written quite large for pedestrians to read as they walked by.",
        "State": "New York",
        "City": "Astoria",
        "Type": "Vandalism",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "At the street intersection, “Chink” was written four times in very large characters for three of the signs.",
        "State": "California",
        "City": "Westminster",
        "Type": "Vandalism",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "I received a random email message from someone I don't know telling me to go back to China, blaming me for Chinese politics, calling Chinese \"heartless robots\" and telling me America doesn't need me to be part of the workforce.",
        "State": "Massachusetts",
        "City": "Boston",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "A man sent me these messages: “Well, go die in Wuhan, China, the origin of the coronavirus and take Trump with you! B*TCH!”",
        "State": "New Jersey",
        "City": "Randolph",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "One of my professors was talking about the public health response to COVID-19 and explicitly called it the \"China Virus\" and that \"we've gotta be very careful about that country and what they'd do to us.\"",
        "State": "Maryland",
        "City": "College Park",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/05/Stop-AAPI-Hate-Report-National-210316.pdf"
    },
    {
        "Text": "A man cut in front of me in the check-out line and I shook my head at him. He waited for me outside the store and confronted me and said “F**king lying b*tch Who the f**k are you? You’re not better than me. You weren’t in front. That’s why you’re spreading this shit. F**king nasty dirty conspiracy Chinese! You’re why we gotta wear masks, you disease-spreading, b!tch. F**k your people!” Then he drove off.",
        "State": "Georgia",
        "City": null,
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "My 14-year-old Chinese-born daughter was racially and verbally attacked and felt threatened at a [retail store]. She was called the “Chinese virus” and laughed at by two white men in their late twenties. She is so shaken up she is afraid to leave the house again and go into the public. This was her first time going out since the quarantine.",
        "State": "Georgia",
        "City": null,
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "At the hospital for a bone marrow donor screening (I'm the donor) and was asked to wear a facemask by the nurse. Man sitting next to me said loudly into his cell phone, \"I'm going to get sick because of all these Chinese with face masks on.\" I was the only non-white person in the room.",
        "State": "Georgia",
        "City": null,
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "A young white girl told her parents she was going to “die” and her parents asked why? And she said of the coronavirus and pointed in my direction.",
        "State": "Georgia",
        "City": null,
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "My neighbor came to our yard uninvited to tell us how happy she was for the protests in Michigan. When I mentioned that Taiwan and South Korea did a good job on controlling the COVID-19 by testing and contact tracing, my neighbor got angry and accused me of being obnoxious and yelled at me, \"If you like Taiwan so much, you should go back to Taiwan!\"",
        "State": "Georgia",
        "City": null,
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "I was in line at the pharmacy when a woman approached me and sprayed Lysol all over me. She was yelling out, “You’re the infection. Go home. We don’t want you here.” I was in shock and cried and left the building. No one came to my help. I was never even diagnosed with COVID-19.",
        "State": "Georgia",
        "City": null,
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "I want to report a disturbing coughing incident experienced by my niece at the Atlanta airport on 3/17/2020. A Caucasian adult male walked up to her in an empty hallway and deliberately coughed on her repeatedly. She had no idea why he would do that as he had plenty of space to distance himself from her.",
        "State": "Georgia",
        "City": null,
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "My partner and I were walking on the sidewalk. Two men across the street mumbled something about me being the reason for coronavirus. After that one of them spat in my direction. The other man said \"you missed\" to him.",
        "State": "Georgia",
        "City": null,
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "Someone in Atlanta is posting “Wuhan Plague” plaques on private property. https://www.ajc.com/news/local/wuhan-plague-plaques-found-atlanta-businesses-streets /b9takSWmtKqfqai7wAk8iL/",
        "State": "Georgia",
        "City": null,
        "Type": "Vandalism",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "In a workplace team meeting, I found myself being a target of snarky remarks about being linked to the source and the spread of the coronavirus. I'm not Chinese and I haven't traveled internationally in years.",
        "State": "Georgia",
        "City": null,
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "I was told to self quarantine for a week after going out of town and was the only one told to leave when others traveled as well. I am the only Asian working there. Since returning to work, my neighboring co-workers were allowed to work from home while I am in the office alone. My co-workers have been whispering amongst themselves about me and it has made me insecure and unsafe since then.",
        "State": "Georgia",
        "City": null,
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Georgia-201228.pdf"
    },
    {
        "Text": "I was at our local park with my mom, taking our daily walk. We both, of course, had our masks on. When we started walking up and down the flight of stairs we always do reps on, this lady that was on the opposite side of us with her husband, she kept making racist remarks to both me and my mom, for example, “Get off these steps, do you know about the Chinese disease\", and she even referred to me as \"Asian boy.\"",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "I was walking with my Chinese American boyfriend in our neighborhood on a street we have never been to, wearing masks and holding a box of donuts. We passed a man, probably between 40-50, who was also wearing a mask and sunglasses, who stared at us for a solid ten minutes while we walked around the block. When we crossed to the side of the street opposite him, he began yelling, \"Who are these Chinese people walking around, taking pictures of our houses? F--k off, stay out of Highland Park!\"",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "I was in the grass with my puppy when a lady started screaming at me to “get off the sidewalk” and “move” out of her way. She kept yelling “f****** Asian!” “G--damn Asians!” “Go back to your country you f****** Asian!” And she also went on a tirade on how I was going to “eat my dog.” I was so shocked because we weren’t even on the sidewalk or in her way but she came up and got in my face with her Doberman Pinscher.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "As my friend and I were walking out of a spa, a man across the street at a bus stop screamed slurs at us and blamed us for the outbreak. He then proceeded to chase us and attempt to throw his basket at us. We ran down Peck Road to, a Mexican food place and he went back to the bus stop.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "While I was walking up the street I live on, a White male, 20s in appearance, noticed me and picked up a cup of coffee--filled--from the street and flung it at me. The spill missed me by a few feet. He appeared angry, proceeded to give me the middle finger, and calls me a racial slur (“chink”) before walking away.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "A guy attacked me from behind and waved his fist when I sat quietly on the platform waiting for the subway. There was no one else except me and him at the time. Because I was wearing a mask, he scolded me as a \"chink\" and a communicator of COVID-19. I hid under the platform camera, He then tried to use the front wheel of his bicycle to attack me.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "I was at a grocery store in Koreatown, and the cashier who appeared to be ethnically Viet was telling the previous customers to watch out for the Koreans. She said they were bringing the virus to the USA.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "As I walked out of Eagle Rock Plaza, a woman said, \"Oh my God! China brought the virus here!\" When I crossed her path to walk toward my car and to confirm if that comment was meant for me, she jumped back and nearly yelled, \"Oh my God! Please don't give me the virus!",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "Bodega customers rolled their eyes, muttered comments (“unbelievable”) and wouldn't walk into the store until I and my partner (also Asian) left. It didn’t seem to be an issue of capacity as there were more people in the bodega after we left.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "I am a physician. I was wrapping up the end of the work day; and I was being facetious with the office staff by my remark about how I fantasized myself jumping on a plane to escape the chaos. The nurse overheard my comment and in a serious tone told me I should \"go back to China\" despite the fact that I was born in Los Angeles. My mother was born in Thailand and father was born in Vietnam. I had a somewhat similar incident with the two other physicians in the office.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "My White female and Latina coworkers sporadically mock \"Asian accents\". This isn't a one time incident. I worked with two White girls and 1 Latina who keep making “Ching Chong\" noises or accents in a mocking tone.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "The ride-hailing service driver would not let me sit in front when there was space. He stared at me the entire ride in the rear view mirror; then when he picked someone else up, he let that White man sit in front.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "I usually take my daughter to ride her scooter or roller skate in the parking lot of a church near our home. The director of an unaffiliated preschool (also shut down temporarily) on site insisted on shooing me and my daughter nearly 70 feet away to the other side of the parking lot and told me to keep my distance even though I was already 25 feet away from her. Today, she came out to the parking lot snapping photos of me and my daughter and threatening to call the police if I didn't leave immediately.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "Parked at a grocery store parking lot, I sat in my car for a few minutes before heading inside with lots of foot traffic around me. As I left my car to go inside, an older White male pulled up into the parking spot to the right of me. When I returned to my car, there was spit and phlegm all over the passenger (right) side door",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "I was crossing the street, and an unmasked Brown man was on the other side. I didn't think much of it because I live in a POC-heavy neighborhood and some of them don't wear masks, but they leave me alone. As I passed him, he spat at me from behind (so clearly he was waiting for me to cross so he could do this) and then followed me for about half a block, upon which I turned and ran across the street to hide behind a van and make sure he kept walking without following me home.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "Instagram post by a White man including the phrase \"Some dude in China eats a raw bat and starts a global pandemic.\"",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "I received an insulting text message from my client with inappropriate gender and racial terms involved, \"......have a nice day bitch ass Asian ho. That’s the f--king way I feel about the Chinese.\"",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Los-Angeles-201203.pdf"
    },
    {
        "Text": "A person followed two university employees and persistently questioned them about their race. He said, \"Are you Chinese or Japanese? If you are Chinese or Japanese, I'm going to kill you.\" He then lifted his shirt to reveal a handgun.",
        "State": "Louisiana",
        "City": "New Orleans",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "I am a physician, and last month I worked 7p-7a in a makeshift COVID unit at my hospital during the surge in the Bronx. I was about to perform the nasopharyngeal swab on a schizophrenic patient to test her for SARS CoV 2. She told me, \"GET YOUR CHINESE ASS AWAY FROM ME!\" She also raised her hand at me.",
        "State": "New York",
        "City": "Bronx",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "I got on the bus and sat next to a man. He turned to me and told me, \"Cover your f**king mouth, you Chinese b***h. How dare you yawn at me!\" He continued verbal assault until I exited the bus 20 minutes later.",
        "State": "Illinois",
        "City": "Chicago",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "A man right outside of the main Massachusetts General Hospital entrance yelled at me, “Why are you Chinese people killing everyone? What is wrong with you? Why the f**k are you killing us?” I continued walking and pretended I didn’t hear, but he did follow me for a block before he gave up. I notified security and filed a formal incident report, and they stated that this has been happening with some frequency recently around the hospital premises.",
        "State": "Massachusetts",
        "City": "Boston",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "I was on a neighborhood walk on a residential street with my 2-year-old Japanese American son. A middle-aged white man in a car pulled next to us, lowered his passenger side window and called out to me. As I approached, he called out, \"Tell your kid when he grows up that China did this all,\" and then drove off.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "A passenger on the subway platform was yelling about wanting to \"kill Chinese\" for \"creating coronavirus.\" I was with my 10 y/o biracial child, there were 3 or 4 other Asian women on the platform, at least one was wearing a face mask. I caught his eye, and then he said he should push us onto the train tracks.",
        "State": "New York",
        "City": "New York City",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "Walking to a supermarket when a man yelled, “This pandemic wouldn’t have happened if you stayed in your country where you belong, you chink. You brought the virus on purpose.”",
        "State": "Pennsylvania",
        "City": "Dickston City",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "I was crossing the street with my sister and a car came speeding down the street toward me. The driver and his friends rolled down the window to scream at me, “Go back to Wuhan, China, you stupid b***h!” and drove away while laughing at us.",
        "State": "New York",
        "City": "Brooklyn",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "My roommate told me that the Chinese are filthy people who all deserve to die of COVID- 19 and said it is no wonder all plagues spread from China. Said that the Chinese were selfish and horribly overpopulated, and they should have issued a zero-child policy so they could not proliferate.",
        "State": "Texas",
        "City": "Austin",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "Students from university created a fake restaurant called \"Ching Chong House\" featuring dishes like \"Mouse tail salad\" and \"Crispy Burnt Pug- Delicious Deep fried dog body\" and many more racist and offensive comments.",
        "State": "Colorado",
        "City": "Fort Collins",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "Provided a check-in to a client of ours, and she ranted, \"Dirty Oriental folks with their dirty habits are coming from China via boat and plane and spreading the disease all over the US and places like Chinatown are filthy and that's why I don't go out.",
        "State": "California",
        "City": "Cupertino",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "I was walking on the Riverway in Boston when a man on a bicycle sped past me and called me a “p***y.'” I was wearing a face mask. When I asked, \"What did you say?\" he said, \"Chink, go back to your country.",
        "State": "Massachusetts",
        "City": "Boston",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "As I walked home, a man I passed by and yelled \"Get the f**k out of here, Chink!\" I lived in Harlem for more than three years and had never heard racial slurs until the Coronavirus",
        "State": "New York",
        "City": "New York City",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "A man shouted at me something like- “Ching-Chong Chinkie Chinaman. Take your Coronavirus and go back to China!”",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Anti-China-201011.pdf"
    },
    {
        "Text": "In the beginning stages of COVID in the U.S., my boyfriend (a white male) and his friends were harassing me. After we had not been contacting each other for months, he was sending me snaps (on the app Snapchat) of him and his friends calling me “a chink.” It was clear that he was drunk but they went on about how I had the coronavirus. After that, they blocked me.",
        "State": "California",
        "City": "Daly City",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "My school had an online page where you could post anonymously. A post that stuck out was “Our entire year was ruined by the Chinese. Thank you, retards. From the nonChinese.”",
        "State": "New York",
        "City": "New York City",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "I was sprayed with a body spray by a white kid who commented “the Coronavirus.” Shortly thereafter, he headbutted me and caused my head to strike a wall.",
        "State": "Virginia",
        "City": "New Kent",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "I was walking from my mom's car, wearing a mask and trying to keep my distance from others. A middle-aged lady, not wearing a mask, went to the other side of the sidewalk from me and said, \"Get away from me, Asian lady!”",
        "State": "Caifornia",
        "City": "Cerritos",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "I was in the school bathroom and three white girls entered. They immediately covered their face with their shirts, even though they were with each other before. When I confronted them about it, they said they didn't want to get the coronavirus.",
        "State": "California",
        "City": "Los Altos",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "My niece was at a [grocery store] today and this lady spat on an Asian family after insulting them based on the belief that coronavirus was their fault.",
        "State": "Texas",
        "City": "Irving",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "Some guys from my high school whom I did not know followed me home in their car. They honked very loudly at me,and pulled up next to me; and when I looked up, they threw things at me from their car, pretended to cough on me, said \"Ching chong! You have Chinese virus!\" Then, they drove away, rolling up their windows.",
        "State": "Texas",
        "City": "Dallas",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "Adult judge overseeing the middle school debate enters room, walks to the opposite side of the room, away from her assigned seat next to me and my debate partner who is from Macau and states, “Coronavirus, you know?” to those around her. The teens who heard her sit with mouth agape at the comment, in pure shock.",
        "State": "New York",
        "City": "New York City",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "I was checking out at the counter with my 11-yr old son. While handling my checkout, the store associate was talking on the phone with an earphone from the beginning to the end. She was looking away from me. She sounded angry and anxious. I heard her say \"Those third world country people brought the virus here...\" Meanwhile, she was obsessively spraying disinfectants on her hands multiple times in front of me. It was so obviously inappropriate and unprofessional because when she was with the customer right before me (I was waiting in line), she was smiling and all cheerful.",
        "State": "Texas",
        "City": "Beaumont",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Youth-Incidents-200917.pdf"
    },
    {
        "Text": "My sister was shopping and wearing a mask. When she would look at certain merchandise, an employee would follow her and clean where she had touched. My mom noticed that she did not do this to any of the other customers, all white, only my sister.",
        "State": "Arizona",
        "City": "Phoenix",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "I called a [rideshare] to go to the doctor (I was undergoing IVF - nothing COVID related). I was wearing a mask. When the driver saw me, he sped away and canceled the ride.",
        "State": "New York",
        "City": "New York City",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "It was the last day I went to school before the stay at home order was put in place. I went to the bathroom during class and two girls followed me. One of them had orange juice so when I walked into a stall, I got juice thrown into my stall and it got all over me. When they threw it, they yelled, “Coronavirus.”",
        "State": "California",
        "City": "Union City",
        "Type": "Assault and Harrassment (other)",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "My friend was at school when her teacher was talking about coronavirus precautions. A few kids in the class made fun of her for having come back from Taiwan a few months prior and everyone moved away from her, making jokes that she was infected. Meanwhile, the teacher did absolutely nothing to intervene.",
        "State": "Washington",
        "City": "Seattle",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "My son (9-year old) was on a summer camp field trip to. [a pizza restaurant]. While there, a girl from his camp group told him that all Chinese people have the Coronavirus. She said that Asians brought the virus. Then, she proceeded to get the other kids to play a game called \"corona touch\" and said that he had the \"corona touch.\" The constant insults ended up making him cry. The camp counselors stepped in at that point to stop her",
        "State": "Texas",
        "City": "Austin",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "I’m a healthcare worker. I saw a mask-less man sit across from me on the subway. I moved to the other side of the train car and he followed. He spat and coughed on the subway while yelling racial slurs. No one stood up for me.",
        "State": "New York",
        "City": "New York City",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "A white man got in my face and coughed on me twice and told me to go back to my country",
        "State": "Oregon",
        "City": "Portland",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "’m reporting this on behalf of my brother who got spat on and got told to go back to where he came from because he looked Chinese to the racist attacker.",
        "State": "Illinois",
        "City": "Chicago",
        "Type": "Coughed/Spat On",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "Elderly grandparents (Korean) were taking our 1-year old daughter for a walk in her stroller. A group of young men followed them, yelling that they had Coronavirus. They were scared to engage (especially since they had a baby with them) and just kept walking until eventually the men lost interest and went away.",
        "State": "New Jersey",
        "City": "Cliffside",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "We were walking down the street, and a man was shouting at an elderly Asian couple in front of us, calling them derogatory terms and threw his cigarette at them.",
        "State": "California",
        "City": "Palo Alto",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "Reporting for my 70-year-old mother, who lives at this address. The man from a nearby apartment angrily shouted at her for several minutes in a public area of the building. He mentioned the Chinese, people dying because of them, and \"the virus,\" presumably COVID-19.",
        "State": "California",
        "City": "Oakland",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "Owner, broker and real estate agent posted on Facebook a commentary associating coronavirus with Chinese. She included a photo showing dog meat in China and stated she was disgusted.",
        "State": "Iowa",
        "City": "Des Moines",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "Students from Colorado State University created a fake restaurant called “Ching Chong House” featuring dishes like “Mouse tail salad” and “Crispy Burnt Pug- Delicious Deep-fried dog body” and many more racist and offensive comments. https://www.instagram.com/chingchonghouse/?igshid=1rq4pa nrv058m",
        "State": "Colorado",
        "City": "Fort Collins",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "My friends and I were livestreaming on an app called Yubo. People joined and asked us if we ate bat soup. They also added bat and soup emojis",
        "State": "California",
        "City": "Union City",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "A woman targeted me out of a group of people and shoulder pushed me extremely hard where my phone nearly fell out of my hands. She then said to me, “F**k you, ch**k.” Afterwards, she spat on a man who defended me and tried to spit on me as well.",
        "State": "New York",
        "City": "Manhattan",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "A white woman in an SUV mounted the curb to try and run over one of my family members, who was just out taking a walk for exercise. This woman saw that they were Asian, pulled over, started yelling and spitting at us, drove off, then turned around and tried to run them over with her car and even mounted the sidewalk to chase them.",
        "State": "California",
        "City": "Thousand Oaks",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "I was in line at the pharmacy when a woman approached me and sprayed Lysol all over me. She was yelling out, “You’re the infection. Go home. We don’t want you here!” I was in shock and cried as I left the building. No one came to my help.",
        "State": "Georgia",
        "City": "Marietta",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "My friend's Korean American sister went to [retail store]. A lady looked at her and covered her mouth before running away.",
        "State": "Washington",
        "City": "Issaquah",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "When I was at the hardware store with my mom, she started coughing and this lady started to run away and hide behind a flowerpot when my mom started getting closer to her area.",
        "State": "California",
        "City": "Union City",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "When coronavirus first hit Arizona, many white athletes would wear masks in the halls, and before lunch, the science halls are majorly empty. So, as I was walking through them, I was walking past those athletes with masks. Despite an empty hall with just me, they hugged the walls and exaggerated their intent to avoid me.",
        "State": "Arizona",
        "City": "Queen Creek",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "As soon as we walked in, there were stares from the other families. Some of them hugged their children closer to shield them away from us. I walked past a family that called us \"Ling Ling,\" and my brother overheard a woman say, \"Stay away from those Chinese people they have corona.\"",
        "State": "New Jersey",
        "City": "Trenton",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "Racist remarks \"this is now the Wuhan lane, and welcome to the Wuhan lane\" was made by an individual over and over again while looking at my family and me. My family and I were the only Chinese on the sidewalk, and it was clearly directed at my family and me.",
        "State": "New York",
        "City": "Queens",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "I got into the elevator (mask on) so I could get my mail from the lobby. The elevator opened on the 4th floor and this unmasked white woman yelled “OH HELL NO” when she saw me. The elevator door opened on the 1st floor and she gets out of the elevator and looks me up and down and goes, \"You f**king Chinese people, you're not going to get away with this, we're going to get you.\"",
        "State": "Oregon",
        "City": "Portland",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "My husband was approached by two women and t. one woman got in his face and yelled at him to \"get the f**k out of America.\"",
        "State": "Maryland",
        "City": "Timonium",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "I (wearing a mask) was waiting to pick up food from a restaurant and a group of people walked down the street (without masks) started yelling and cursing at me, saying that I'm the one who brought the virus to the U.S.",
        "State": "Pennsylvania",
        "City": "Pittsburg",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "Told to \"Go back to China.\" Spoke with the manager and he said, \"I'm not the police, I can't interrogate a customer\" He said \"we defend our associates,\" but obviously not the Asian customers. I have shopped at that [store] for 28 years.",
        "State": "Florida",
        "City": "West Palm",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "My white female and Latina coworkers at [research lab] sporadically mock \"Asian accents\". This isn't a one-time incident. I worked with two white girls and one Latina who keep making “Ching Chong noises\" or accents in a mocking tone.",
        "State": null,
        "City": null,
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "I was the only Asian American at a conference with work colleagues and I had an allergy flare up that day. One woman, seeing me sneeze, told me I couldn’t be there, that I needed to leave, and ordered me not to touch any of the coffee and cookies put out by the convention. She singled me out when other people in the conference were sneezing, sniffling and coughing.",
        "State": "California",
        "City": "Monterey",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "My HR manager, on-site nurse, and union leader were generally complaining about having to wear [masks], and ways people were dealing with them. The HR manager offered to give the union leader a mask and he said, \"I don't need one.\" The nurse responded with, \"Here, you can have this whole box. They came from China.\" to which the union leader replied, \"I don't want 'none' of those. They're probably contaminated. I'm not wearing anything from China!\"",
        "State": "Kentucky",
        "City": "Louisville",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-National-200805.pdf"
    },
    {
        "Text": "I choked on some water while waiting in line to vote and I had a lady turn around to tell me to stay home if I was sick. I explained to her that I wasn't sick and that I had choked. She then went on to say, \"Well all you Asians started this corona virus and I don't want to partake in it.\"",
        "State": "Texas",
        "City": "Irving Palace",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "While waiting in line to enter a [a warehouse retail] in Austin, TX, I heard a random person behind me shout at me “Get out of line and go back to your own country! We don’t want your chink germs!” Rather than defend me, others in line either turned away or chuckled.",
        "State": "Texas",
        "City": "Austin",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "Perpetrator said as I was running on the trail, “This is all your people’s fault, this is all your fault!” He was finger pointing and shaking at me.",
        "State": "Texas",
        "City": "Austin",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "I am a Korean International student. I saw that four of papers about coronavirus posted on my room door. I thought this is the racial discrimination clearly. Because the paper was posted a month ago, but it suddenly happened that day. Also, my room was only one like that. My roommate said his friend may have done that. I got his name at last, Shane. I knocked his room and he opened the door so we could talk for a while. During the conversation he had the same attitude that he doesn't want to talk about it, but we exchanged some words for a short minute. During the conversation, Shane suddenly punched my face and yelled me to get out.",
        "State": "Texas",
        "City": "San Angelo",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "Next door neighbor yelled “North Korean Coronavirus f**ker!” repeatedly before attempting to run me over with his Jeep. He was arrested for aggravated assault with a deadly weapon. His wife came on to my property after his arrest and threaten me with firearms.",
        "State": "Texas",
        "City": "Fort Worth",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "I was at a four way stop. As I was accelerating to go, a young Caucasian man quickly rolled down his window and spit directly towards me while glaring at me with hatred in his eyes.",
        "State": "Texas",
        "City": "Sunset Valley",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "My niece was at a grocery store on N. MacArthur today and this lady spat on an Asian family after insulting them because coronavirus was their fault. It’s unbelievable where we are. I hope Kroger is going to make sure charges are brought against this woman. That kind of behavior is completely unacceptable.",
        "State": "Texas",
        "City": null,
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "A young Hispanic couple at the store said, \"she has coronavirus\" and walked away from me.",
        "State": "Texas",
        "City": "Houston",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "Customer walked into my workplace had a conversation about virus. Mention Chinese people from China who bury their pets and takes them out and starts eating them.",
        "State": "Texas",
        "City": "Austin",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "I get jokingly accused of eating bat and get strange looks when sneezing when I've been working here at [corporation] for over 2 years and people have heard my strange repeat sneezing in past. Passive aggressive workplace bullying and lying has significantly increased. I am the strongest supply chain technical analyst at the site yet treated like dirt.",
        "State": "Texas",
        "City": "Fort Worth",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "In a full dining room (at least 30 people), server handing out samples avoided the three tables where there was at least one Asian diner. Every other table was approached.",
        "State": "Texas",
        "City": "Austin",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "The store closes at 8:30 PM CST. The greeter yelled at me in front of customers the store was closed. I came at 8:10 PM CST and only needed one item. The self-check out cash register stands were open and empty. The greeter lied and berated me, “You have to come early in the morning and stand in line! You need a number!” I had to assert myself enough to ask another customer (All were treated with pleasant smiles and a kind tone of voice.) and received confirmation there were indeed paper towels to readily purchase. Greeter lies about store being closed and purchasing paper towels required lining up early in the morning and being called by number.",
        "State": "Texas",
        "City": "Dallas",
        "Type": "Refusal Of Service",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "I was checking out at the counter with my 11-year-old son. While handling my checkout, the store associate was talking on the phone with an earphone from the beginning to the end. She was looking away from me. She sounded angry and anxious. I heard she was saying \"those 3rd world country people brought the virus here...\" Meanwhile, she was obsessively spraying disinfectants on her hands multiple times in front of me. It was so obviously inappropriate and unprofessional because when she was with the customer right before me (I was waiting in line), she was smiling and all cheerful.",
        "State": "Texas",
        "City": "Beaumont",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "I walked into a classroom (I am an education assistant professor and was observing one my students, who is a PK-12 teacher), and students started saying, “Coronavirus!” to me",
        "State": "Texas",
        "City": "San Antonio",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "Student in our medical school class is posting some disturbing memes blaming Chinese people and stereotyping them for COVID. As someone entering the medical field, this is extremely disturbing, and this student should know better. One day he will be in charge of someone’s healthcare plan and life. Imagine if he takes his bigotry one step further while he is treating any minority.",
        "State": "Texas",
        "City": "Lubbock",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-Texas-200723.pdf"
    },
    {
        "Text": "In the elevator of my apartment complex, two individuals, a male and a female without a face covering on them, started to harass us, saying \"This f--king virus came from your mother--king country\" and \"You nasty as roaches\" to me and my minor children, because I was trying to maintain social distance as much as possible from these two individuals.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "These two White ladies were moving towards me, but as they passed by me, said, \"Go back to China with your dirty diseases.\"",
        "State": "California",
        "City": "Verdugo City",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "As I was walking on the sidewalk, a car full of Black people yelled \"Go back to China.\"",
        "State": "California",
        "City": "Alameda",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "Some young men came by in a white pickup, slowed down and one of them yelled, \"Hey Ch--k! Take your virus and go back where you came from!”",
        "State": "California",
        "City": "Spreckels",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "I was in line at the pharmacy picking up my son's prescription. An African American man was in front of me. He was buying a container of antibacterial wipes. He took one look at me and proceeded to open the container and started wiping himself down thoroughly with the wipes. He moved away from me and told me we had to stay six feet apart.",
        "State": "California",
        "City": "Alameda",
        "Type": "Avoidance/Shunning",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "Someone threw a glass bottle at my friend while she was putting her baby in the car and yelled, \"Go home, chink.\"",
        "State": "California",
        "City": "San Francisco",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "I was standing in an aisle at [hardware store] when suddenly I was struck from behind. Video surveillance verified the incident in which a White male using his bent elbow struck my upper back. Subsequent verbal attacks occurred with him saying, \"Shut up, you Monkey! \"F--k you, Chinaman\" \"Go back to China,\" and \"...bringing that Chinese virus over here.\"",
        "State": "California",
        "City": "San Francisco",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "A man kicked my dog and told me to shut my dog up and then spat at me, saying “Take your disease that's ruining our country and go home.”",
        "State": "California",
        "City": "Santa Clara",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "A neighbor (previously unknown to me) screamed at us to stay out of his neighborhood and called my family and me \"f--king ch—ks.\" He came towards my children and a physical altercation ensued.",
        "State": "California",
        "City": "San Jose",
        "Type": "Physical Assault",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "Three Hispanic and two White individuals entered the store and cut in front of me. I spoke up and said, \"Hey, I've been in line and I'm next.\" This opened up all of them to start calling me names and spitting on me. They said that they didn't care and that I needed to keep waiting. The cashier spoke up and said they had stop that and asked if I wanted to call the police. I declined and left the store immediately, not wanting any more confrontation.",
        "State": "California",
        "City": "Rosemead",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "It was the first time I had gone out in one month since shelter-in-place. I walked into a grocery aisle inside of the store, looking for bread, but keeping distance from people. An African American woman yelled at me to say, “Get out of my way! You don’t speak English.”",
        "State": "California",
        "City": "Livermore",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "My wife went in to buy milk and my children and I were off to the side waiting for her outside in the parking lot area. A group of Latinos started yelling, “Look, it's a Chinese – he’s got Corona!” They made hand gestures as if they are holding a rifle pointed at me.",
        "State": "California",
        "City": "Santa Clara",
        "Type": "Verbal Harassment",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "An attorney I work with made racially discriminatory comments about the opposing party, which was a Chinese business. He said the Chinese would be getting what they deserve and made other ethnically and racially discriminatory remarks against China, couched in the context of the opposing party being a Chinese business.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "Coworker (non-Asian minority) said new COVID-19 cases are due to number of Chinese residents because it comes from China to Chinatown, spreading through the air. Asian American (Vietnamese) co-worker didn't disagree. Both have said racist things before (and since), but we work in a major healthcare system, so this is not good for patients.",
        "State": "California",
        "City": "San Diego",
        "Type": "Workplace Discrimination",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "Our Zoom feed was hacked by White Supremacists who verbally attacked our members and viewers with racial slurs and anti-immigrant remarks. They also hacked into our Zoom chat typing the Nazi salute (Seig Heil) and pro-Trump messages.",
        "State": "California",
        "City": "Los Angeles",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "A YouTube commenter/creator wanted to call the disease \"Chinese virus\" and said he hated Chinese people. When I mentioned I am an American of ethnic Chinese descent, the commenter told me to go back to China. He said that I'm not an American and that America was made for Europeans and there should be ‘no Chinese mafioso’ in the USA.",
        "State": "California",
        "City": "San Francisco",
        "Type": "Online",
        "Source": "https://stopaapihate.org/wp-content/uploads/2021/04/Stop-AAPI-Hate-Report-California-200630.pdf"
    },
    {
        "Text": "An Asian store owner was punched in the face in his own Washington, D.C., store, in an attack caught on the store's surveillance video. Chong Hu Lu, the owner of Max Trading, said the assailant grew angry after being told he could not open items in the store and attacked Lu, saying \"F--- you, Chinese people, I hate you.\" Lu was taking to the hospital and recieved 14 stitches.",
        "State": "District of Columbia",
        "City": "Washington, D.C.",
        "Type": "Physical Assault",
        "Source": "https://www.nbcwashington.com/news/asian-business-owner-attacked-in-northeast-dc/2662419/"
    },
    {
        "Text": "An Asian deliveryman was stabbed by a fellow cyclist in New York's Cypress Hills neighborhood in the middle of a summer Sunday afternoon. The victim, 53, was on his way to make a food delivery when a second cyclist rode up behind the victim with a knife clutched in his hand and stabbed him.",
        "State": "New York",
        "City": "Brooklyn",
        "Type": "Physical Assault",
        "Source": "https://www.nbcnewyork.com/news/local/crime-and-courts/nyc-food-delivery-worker-stabbed-on-way-to-dropoff-by-man-on-bike-cops/3105523/"
    },
    {
        "Text": "A Chinatown shop owner was pepper sprayed and hit in the face while attempting to stop a robber from leaving her store in San Francisco. Fanly Chen, the owner of a phone repair and accessories store, said the 16-year-old suspect was known for stealing from Chinatown businesses.",
        "State": "California",
        "City": "San Francisco",
        "Type": "Physical Assault",
        "Source": "https://www.nbcbayarea.com/news/local/teenager-arrested-after-attacking-sfs-chinatown-store-owner/2550720/"
    },
    {
        "Text": "A man has been arrested after assaulting three Asian victims in separate Brooklyn attacks. The most recent victim was checking out a stand in front of J&R NY Supermarket on Avenue U in Sheepshead Bay when a stranger walked up, pushed him to the ground and walked away without saying a word, cops say. The other attacks occured on March 22 and March 5.",
        "State": "New York",
        "City": "Brooklyn",
        "Type": "Physical Assault",
        "Source": "https://www.nbcnewyork.com/news/local/man-77-shoved-to-ground-at-nyc-market-woman-has-hair-grabbed-in-latest-possible-anti-asian-attacks/2985350/"
    },
    {
        "Text": "Two sisters who were visiting the Bay Area witnessed a violent attempted robbery in Oakland. They shot a video showing what police say is an attempted robbery. On one part of the video, a man is seen standing over and punching the victim, a man of Asian descent, who fights back in the middle of the sidewalk",
        "State": "California",
        "City": "Oakland",
        "Type": "Physical Assault",
        "Source": "https://www.nbcbayarea.com/news/local/2-witnesses-jump-into-action-to-save-man-from-oakland-brutal-attack/2515243/"
    },
    {
        "Text": "Carl Chan, a member of the Oakland Chamber of Commerce, was on his way to visit an elderly victim of anti-Asian discrimination when he himself was attacked from behind. Chan said his attacker called him slurs and hit him on the back. The assaliant was arrested after Chan took a photo and called police.",
        "State": "California",
        "City": "Oakland",
        "Type": "Physical Assault",
        "Source": "https://www.nbcbayarea.com/news/local/east-bay/president-of-chinatown-chamber-of-commerce-attacked-in-oakland/2532427/"
    },
    {
        "Text": "A 37-year-old Asian mom with her daughter was on her way to protest violence and discrimination against the AAPI community when she herself was punched by a man on the subway. Police said he approached the woman, tried to throw her protest sign into the garbage, then punched her twice. Katie Hou, 37, said a man punched her face twice after she left a rally in Union Square with her 7-year-old daughter.",
        "State": "New York",
        "City": "New York City",
        "Type": "Physical Assault",
        "Source": "http://nbcnewyork.com/news/national-international/assault-suspect-punches-woman-on-her-way-to-anti-asian-violence-protest-police/2750681/"
    },
    {
        "Text": "A 53-year-old man was robbed and stabbed multiple times in San Francisco's Bayview neighborhood over the weekend while walking home with his son. Chi Ling Lee's wife said her husband was stabbed five times, including once in the head, once in the chest and twice in the stomach. Lee was left with a punctured lung and a broken rib during the attack.",
        "State": "California",
        "City": "San Francisco",
        "Type": "Physical Assault",
        "Source": "https://abc7news.com/exclusive-asian-man-recalls-stabbing-attack-in-sfs-bayview/10513398/"
    },
    {
        "Text": "A 75-year-old Asian woman is recovering from fractures and injuries to her face after she was punched in an unprovoked attack in Queens, according to the NYPD. Pictures released by the woman's family showed the fractures and bruises. She had been shopping for groceries when she was sucker punched by a suspect walking down the street. Her son said she was in the hospital for eight hours after the attack.",
        "State": " New York",
        "City": "Queens",
        "Type": "Physical Assault",
        "Source": "https://www.nbcnewyork.com/news/local/75-year-old-asian-woman-suffers-facial-fracture-in-unprovoked-nyc-attack/3078716/"
    }
]

export default testimonies;