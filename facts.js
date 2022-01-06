Module.register("facts",{

	// edit these
	defaults: {
		updateInterval: 30,	// how long a fact stays up in seconds
		fadeSpeed: 2,			// fade out of text in seconds
		category: 'random',		// pick a category below, or use 'random'
		facts: { 
			art: [
				"Purple is the color for epilepsy awareness because of its association with lavender, which is a traditional herbal treatment for the disease.",
                "Vincent Van Gogh painted The Starry Night during his stay at a psychiatric facility.",
			],
			food: [
				"Do not eat polar bear liver. The human body can not handle that much vitamin A.",
				"Honey does not spoil, due to it's low moisture content.",
			],
			health: [
				"There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms.",
                "The flashes of colored light you see when you rub your eyes are called “phosphenes”.",
				"On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.",
			],
            history: [
				"Pepsi, the soft drink company, once became the 6th largest military in the world after the Soviets exchanged 17 submarines, one frigate, one cruiser, and one destroyer for three billion dollars' worth of Pepsi.",
                "The shortest war, fought between Britain and Zanzibar, lasted 38 minutes and ended with a British victory.",
                "Nobody knows who invented the fire hydrant because the patent for the hydrant was lost in a fire.",
				"It took humanity 4 times longer to switch from bronze swords to steel swords than it took humanity to switch from steel swords to nuclear bombs.",
				"Canadians said “sorry” so much that a law was passed in 2009 declaring that an apology could not be used as evidence of admission to guilt.",
				"Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
			],
			language: [
				"A single strand of Spaghetti is called a “Spaghetto”.",
				"pneumonoultramicroscopicsilicovolcanoconiosis, a lung disease caused by inhaling silicate, is the longest word in english.",
                "To leave a party without telling anyone is called in English, a “French Exit”. In French, it is called a “partir à l’anglaise”, to leave like the English.",
			],
            nature: [
				"Armadillos are bulletproof.",
                "At over 2,000 kilometers long, The Great Barrier Reef is the largest living structure on Earth.",
                "Cows don’t actually have four stomachs; they have one stomach with four compartments.",
                "It's illegal to own just one guinea pig in Switzerland because they get lonely.",
			],
            nerd: [
				"The Firefox logo is a red panda.",
                "A million seconds is 12 days. A billion seconds is 31 years. A trillion seconds is 31,688 years.",
				"Every 60 seconds in Africa, a minute passes.",
			],
            space: [
                "There are more trees on Earth than stars in the Milky Way.",
                "Uranus used to be named George."
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
		fact.style.maxWidth = '50%';
		fact.innerHTML = text;

		wrapper.appendChild(fact);

		return wrapper;
	}

});
