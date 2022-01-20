Module.register("facts",{

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
			],
			food: [
				"Do not eat polar bear liver. The human body can not handle that much vitamin A.",
				"Honey does not spoil, due to its low moisture content.",
				"Strawberries are not berries, but bananas and avocados are."
			],
			health: [
				"There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms.",
				"The flashes of colored light you see when you rub your eyes are called “phosphenes”.",
				"On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.",
			],
			history: [
				"Pepsi, the soft drink company, once became the 6th largest military in the world after the Soviets exchanged 17 submarines, one frigate, one cruiser, and one destroyer for three billion dollars' worth of Pepsi.",
				"The shortest war, fought between Britain and Zanzibar, lasted 38 minutes and ended with a British victory.",
				"Nobody knows who invented the fire hydrant because the patent was lost in a fire.",
				"Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
			],
			language: [
				"A single strand of Spaghetti is called a “Spaghetto”.",
				"pneumonoultramicroscopicsilicovolcanoconiosis, a lung disease caused by inhaling silicate, is the longest word in english.",
				"To leave a party without telling anyone is called a “French Exit”. In French, it is called “partir à l’anglaise”, to leave like the English.",
			],
			nature: [
				"Armadillos are bulletproof.",
				"At over 2,000 kilometers long, The Great Barrier Reef is the largest living structure on Earth.",
				"It's illegal to own just one guinea pig in Switzerland because they get lonely.",
				"If it is raining and the birds are still loud outside, the rain is going to continue for a long time (8-10+ hours). They're basically panicking and trying to solve the problem of running out of food soon.",
			],
			nerd: [
				"A million seconds is 12 days. A billion seconds is 31 years.",
				"Every 60 seconds in Africa, a minute passes.",
			],
			space: [
				"There are more trees on Earth than stars in the Milky Way.",
				"Uranus used to be named George.",
				"A teaspoon of a neutron star weighs over a trillion kilograms.",
				"One light-year is about 9 trillion kilometres (6 trillion miles).",
			],
			tips: [
				"If your bathroom mirrors fog up all the time after a hot shower, rub a cucumber slice along the mirror. It will eliminate the mist and provide a soothing, spa-like fragrance.",
				"The more you say, the more you are responsible for.",
				"Remember to turn your phone ringer back on. Someone you love may be calling.",
				"Go outside in the morning to get natural light. It sets your circadian rhythm for the day. You can combine this practice with a short jog, bike ride, or walk. Lateral eye movement caused by self-propelled motion is shown to reduce stress.",
				"When you don't have all the facts, try to give people the most generous reason you can for their behaviour. Annoyingly slow driver? Maybe it's a mom with a birthday cake in the back. This mindset will gradually make you less reactive, more compassionate and more forgiving of your own bad days.",
				"Do not try to be the man your father would want you to be. Be the man you would like your son to be be.",
				"Avoid being the bearer of bad news.",
				"Inale twice, exhale once. This will help you intake some more oxygen.",
				"Try to get your work done in the morning. The mind clutters over time.",
				"Divide the day into quarters. Instead of saying “I'll do it tommorow”, say “I'll do next quarter”.",
				"Defocus your eyes and look out the window. Your brain will release stress-relieving chemicals.",
				"If your boss promises you something, ask them to put it in writing.",
				"Put a bar of soap in your dresser. It will make it smell nice.",
				"What are you grateful about?",
				"Breathe.",
				"Money can be exchanged for goods or services.",
				"Sleep more than you study, study more than you party, and party hard.",
				"Honest people are bad liars.",
				"Unmotivated to excercise? Think about becoming like your favourite overpowered superheroes/characters",
				"It is important to know when to stop arguing with people, and simply let them be wrong.",
				"If you’re stuck on an annoying call, put your phone on airplane mode instead of just hanging up. The other person will see “call failed” instead of “call ended”. To make it less obvious, disconnect while you're the one talking.",
				"Ask yourself “what does it matter to me” the next time you find yourself judging someone for their clothing, interests or hobbies. The more you train yourself to not care about the personal preferences of other people, the more relaxed and nicer you become as a person.",
				"Pay attention when people talk. Face them and make relaxed eye contact. They will appreciate you listening.",
				"You have the right to discuss your salary with others.",
				"Be amused. See the light in things, and you will be constantly having fun.",
				"Smile. Not only will you seem more charismatic, your body releases chemicals that make you happy.",
				"If you can do a job in one hour, say you will need three hours but finish in two.",
				"Practice positive selftalk. You will manifest what you say, believe it or not.",
				"Excercise before interviews or stressful situations. It will work the nerves away.",
				"Thank people by name. It will impact them much more.",
				"If you are in a bad mood, clean. Reducing visual noise is an easy way to reduce stress.",
				"If someone insults you during a meeting, pretend you didn't hear them and politely ask them to repeat themself. They will look unprofessional no matter how they respond.",
				"Just because you did something wrong in the past, doesn’t mean you can’t advocate against it now. Don’t let people use your past to invalidate your current mindset.",
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
