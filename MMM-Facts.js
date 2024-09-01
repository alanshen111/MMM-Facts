Module.register("MMM-Facts",{

	// edit these
	defaults: {
		updateInterval: 30,		// how long a fact stays up in seconds
		fadeSpeed: 2,			// fade out of text in seconds
		category: 'random',		// pick a category below, or use 'random'
		facts: { 
			art: [
				"Purple is the color for epilepsy awareness because of its association with lavender, which is a traditional herbal treatment for the disease.",
				"Vincent Van Gogh painted The Starry Night during his stay at a psychiatric facility.",
				"Research has shown practicing art correlates with higher achievement in reading and maths.",
				"Art used to be an Olympic event.",
				"Da Vinci took 12 years to paint the Mona Lisa's lips.",
				"The Last Supper originally included Jesus' feet, but they were cut off to make room for a door.",
				"Van Gogh only sold one painting during his lifetime for 400 francs (2000 USD), only a few months before his death.",
				"The Easter Island heads have bodies, but they are buried underground for stability.",
				"The largest art theft in history was the Isabella Stewart Gardner Museum heist in 1990, where 13 pieces of art valued at $500 million were stolen.",
				"Monet's father disapproved of his art and wanted him to be a grocer.",
				"Salvador Dali designed the Chupa Chups logo.",
				"Picasso's full name is Pablo Diego José Francisco de Paula Juan Nepomuceno Crispín Crispiniano María de los Remedios de la Santísima Trinidad Ruiz Picasso.",
				"The Statue of Liberty was a gift from France to the United States during the American Revolution.",
			],
			food: [
				"Honey does not spoil, due to low moisture content.",
				"Strawberries are not berries, but bananas and avocados are.",
				"Cucumbers are 95% water.",
				"Rotten eggs float.",
				"Carrots were originally black until the late 16th century when Dutch growers cultivated the orange carrot",
				"Ketchup was sold as medicine in the 1830s, claiming to cure ailments like diarrhea, indigestion, and jaundice.",
				"Most supermarket wasabi is actually horseradish with green food coloring.",
				"Ranch dressing is dyed white using titanium dioxide.",
				"Carnauba wax is used in both car wax and glossy candies.",
				"Crackers have tiny holes to prevent air bubbles from ruining the texture during baking.",
				"White chocolate is not actually chocolate because it doesn't contain cocoa solids.",
				"Farmed raised salmon is dyed pink to look more like wild salmon.",
				"Red food dye is made from crushed bugs.",
				"Crackers are worse for your teeth than candy, as they are more likely to get stuck in your teeth.",
				"American cheese, or processed cheese, was invented in Switzerland.",
				"Beer was not considered an alcoholic beverage in Russia until 2013. It was previously classified as a soft drink.",
				"Casu marzu is a Sardinian cheese that contains live maggots. Being illegal, it is only available on the black market.",
				"Cucumbers used to be called cowcumbers, as they were a common food for cows.",
			],
			health: [
				"There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms.",
				"On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.",
				"The average person spends more time on the toilet than they do exercising.",
				"Your height differs depending on the time of day.",
				"Hyponatremia occurs when you overdose on water.",
				"More than half of your bones are located in your hands and feet.",
				"Your brain uses 20% of your body's energy.",
				"Your nose can remember 50,000 different scents.",
				"The fastest muscle in your body is the one that closes your eyelids.",
				"Your blood vessels alone could circle the Earth twice.",
				"Only 2% of humans have green eyes.",
				"All humans are over 99% genetically identical.",
				"Eyes remain the same size throughout your life, which is why babies have such large eyes.",
				"You are taller in the morning than in the evening.",
				"You can not breathe and swallow at the same time.",
				"You create 25 million new cells each second.",
				"Half of all teenagers are sleep deprived.",
				"Your heartbeat changes and mimics the music you listen to.",
			],
			history: [
				"Pepsi, the soft drink company, once became the 6th largest military in the world after the Soviets exchanged 17 submarines, one frigate, one cruiser, and one destroyer for three billion dollars worth of Pepsi.",
				"The shortest war fought between Britain and Zanzibar, lasted 38 minutes and ended with a British victory.",
				"Nobody knows who invented the fire hydrant because the patent was lost in a fire.",
				"Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
				"Oxford University is older than the Aztec Empire.",
				"Harvard University was founded before calculus was discovered.",
				"Abraham Lincoln was a licensed bartender.",
				"Anne Frank and Martin Luther King Jr. were born in the same year.",
				"The last guillotine execution in France occurred the same year Star Wars: A New Hope was released.",
				"Thailand was the only country in Southeast Asia to avoid colonization by Europeans.",
			],
			language: [
				"A single strand of Spaghetti is called a “Spaghetto”.",
				"The flashes of colored light you see when you rub your eyes are called “phosphenes”.",
				"To leave a party without telling anyone is called a “French Exit”. In French, it is called “partir à l’anglaise” - to leave like the English.",
				"The word “bookkeeper” (along with its associate “bookkeeping”) is the only unhyphenated English word with three consecutive double letters.",
				"The U.S. has no official language (not even English).",
				"English is the official language of the sky and sea.",
				"Japanese is the fastest spoken language.",
				"Hawaiians have over 200 words for rain.",
				"Cryptophasia is the phenomenon of twins developing their own private language.",
				"The letter E appears in 11% of all English words.",
				"Shakespeare invented 1700 words, including critic, bandit, and lonely.",
			],
			nature: [
				"Armadillos are bulletproof.",
				"At over 2,000 kilometers long, The Great Barrier Reef is the largest living structure on Earth.",
				"It's illegal to own just one guinea pig in Switzerland because they get lonely.",
				"If it is raining and the birds are still loud outside, the rain is going to continue for a long time (8-10+ hours).",
				"Dragonflies can not walk.",
				"Rats laugh when tickled.",
				"Dogs can smell your feelings.",
				"Wombats poop cubes.",
				"Quokkas have no natural predators, so they are always friendly.",
				"Dolphins don't sleep. They rest one hemisphere of their brain at a time.",
				"The blue whale is the largest animal ever known to have existed, even larger than the dinosaurs.",
				"Hummingbirds are the only birds that can fly backwards.",
				"Many sloths fall to their death when they mistake their own arms for tree branches.",
				"The ocean contains more squids than fish.",
				"Owls are silent hunters due to their specialized feathers.",
				"The smallest insect is the fairyfly, which is smaller than a grain of salt.",
				"Turritopsis dohrnii is a biological immortal jellyfish.",
				"A mountain chicken is a frog.",
			],
			nerd: [
				"A million seconds is 12 days. A billion seconds is 31 years.",
				"Every 60 seconds in Africa, a minute passes.",
				"(6 × 9) + (6 + 9) = 69",
				"In a room of just 23 people, there’s a 50% chance that two people have the same birthday. The probability of two people out of 70 having the same birthday is 99.9%.",
				"There are 80,658,175,170,943,878,571,660,636,856,403,766,975,289,505,440,883,277,824,000,000,000,000 ways to arrange a pack of cards. So, if you shuffle a pack of cards yourself, you are likely to have a deck never seen before in the history of the universe.",
			],
			space: [
				"There are more trees on Earth than stars in the Milky Way.",
				"Uranus used to be named George.",
				"A teaspoon of a neutron star weighs over a trillion kilograms.",
				"One light-year is about 9 trillion kilometers (6 trillion miles).",
				"Russia has a larger surface area than Pluto.",
				"There were active volcanoes on the Moon when dinosaurs were alive.",
			],
			tips: [
				"If your bathroom mirrors fog up all the time after a hot shower, rub a cucumber slice along the mirror. It will eliminate the mist and provide a soothing, spa-like fragrance.",
				"The more you say, the more you are responsible for.",
				"Remember to turn your phone ringer back on. Someone you love may be calling.",
				"Go outside in the morning to get natural light. It sets your circadian rhythm for the day. You can combine this practice with a short jog, bike ride, or walk. Lateral eye movement caused by self-propelled motion is shown to reduce stress.",
				"When you don't have all the facts, try to give people the most generous reason you can for their behavior. Annoyingly slow driver? Maybe it's a mom with a birthday cake in the back. This mindset will gradually make you less reactive, more compassionate, and more forgiving of your bad days.",
				"Don't try to be the man your father would want you to be. Be the man you'd like your son to be.",
				"Avoid being the bearer of bad news.",
				"Inhale twice, exhale once. This will help you intake some more oxygen.",
				"Try to get your work done in the morning. The mind clutters over time.",
				"Divide the day into quarters. Instead of saying “I'll do it tomorrow”, say “I'll do it next quarter”.",
				"De-focus your eyes and look out the window. Your brain will release stress-relieving chemicals.",
				"If your boss promises you something, ask them to put it in writing.",
				"Money can be exchanged for goods or services.",
				"Sleep more than you study, study more than you party, and party hard.",
				"Honest people are bad liars.",
				"Unmotivated to exercise? Think about your favorite superheroes/characters",
				"It is important to know when to stop arguing with people, and simply let them be wrong.",
				"If you’re stuck on an annoying call, put your phone on airplane mode instead of just hanging up. The other person will see “call failed” instead of “call ended”. To make it less obvious, disconnect while you're the one talking.",
				"Ask yourself “What does it matter to me” the next time you find yourself judging someone for their clothing, interests, or hobbies. The more you train yourself to not care about the personal preferences of other people, the more relaxed and nicer you become as a person.",
				"Pay attention when people talk. Face them and make relaxed eye contact. They will appreciate you listening.",
				"You have the right to discuss your salary with others.",
				"Be amused. There are few things in life to take seriously.",
				"Smile. Not only will you seem more charismatic, but your body will release chemicals that make you happy.",
				"Under-promise, but over-deliver.",
				"Practice positive self-talk. You will manifest what you say, believe it or not.",
				"Exercise before interviews or stressful situations. This is a great way to improve blood flow, clear your mind, and burn up nervous energy. Don't forget to shower!",
				"Thank people by name. It will impact them much more.",
				"Fix your posture.",
				"Stretch.",
				"After accomplishing a goal, look around to see whether you lost something or someone in the process.",
				"If you are in a bad mood, clean your house. Reducing visual noise and releasing energy is an easy way to reduce stress.",
				"If someone insults you during a meeting, pretend you didn't hear them and politely ask them to repeat themselves. They will look unprofessional no matter how they respond.",
				"Just because you did something wrong in the past, doesn’t mean you can’t advocate against it now. Don’t let people use your past to invalidate your current mindset.",
				"Prioritize your own well-being over the opinions of others.",
				"You don't owe anyone an explanation for protecting yourself.",
				"Never give personal information to someone calling you. Offer to call them back using the number on their website.",
				"Just because you are good at something doesn't mean you have to do it.",
			]
		},
	},


	// executes on start 
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastFactIndex = -1;

		// update timer
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed * 1000);
		}, this.config.updateInterval * 1000);
	},

	// generate fact
	randomIndex: function(facts) {
		if (facts.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * facts.length);
		};

		var factIndex = generate();

		while (factIndex === this.lastFactIndex) {
			factIndex = generate();
		}

		this.lastFactIndex = factIndex;

		return factIndex;
	},

	// create an array of facts
	factArray: function() {
		if (this.config.category == 'random') {
			return this.config.facts[Object.keys(this.config.facts)[Math.floor(Math.random() * Object.keys(this.config.facts).length)]];
		} else {
			return this.config.facts[this.config.category];
		}
	},

    	// return a fact from array of facts
	randomFact: function() {
		var facts = this.factArray();
		var index = this.randomIndex(facts);
		return facts[index];
	},

	// override getDom to display fact
	getDom: function() {
		var factText = this.randomFact();

		var text = factText;

		var wrapper = document.createElement("div");

		var fact = document.createElement("div");
		fact.className = "bright medium light";
		fact.style.textAlign = 'center';
		fact.style.margin = '0 auto';
		fact.style.maxWidth = '80%';
		fact.innerHTML = text;

		wrapper.appendChild(fact);

		return wrapper;
	}

});
