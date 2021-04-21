
const intro = {
    id: 'intro',
    title: 'You are a Bounty Hunter',
    image: 'intro-1.jpg',
    audio: 'The Mandalorian.mp3',
    description: `Are you ready? You are a bounty hunter trekking across the galaxy ready to bring justice to those who need it. Throughout your journey, you will face a plethora of twisted foes and your occasional helping hand. Make wise choices, because everything you do affects future outcomes. Prepare yourself. Oh, and remember: If ever you find yourself doubting, know that This Is The Way.`,

    // number required for success
    difficulty: 0,
    choices: [{
        id: 'begin',
        description: 'Let\'s do this!',
        required: {},

        // add bonus to roll
        attribute: null,
        morality: 0,
        positiveResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: null,
            },
            message: null
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: null,
            },
            message: null,
        },
    }],
    credits: 0,
};

const wigmolesia = {
    id: 'wigmolesia',
    title: 'Town of Wigmolesia',
    image: 'wigmolesia-2.webp',
    audio: 'The good the bad and the ugly - Theme.mp3',
    description: `You've begin your adventure at the town of Wigmolesia. This place has built a reputation for itself that keeps good do-ers away. The people need someone that will offer their hand. Where would you like to go next?`,

    // number required for success
    difficulty: 0,
    choices: [{
        id: 'saloon',
        description: 'Visit the saloon',
        required: {},

        // add bonus to roll
        attribute: null,
        morality: 0,
        positiveResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: null,
            },
            message: null
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: null,
            },
            message: null,
        },
    }, {
        id: 'sheriff',
        description: 'Visit the Sheriff\'s',
        required: {},

        // add bonus to roll
        attribute:  null,
        morality: 0,
        positiveResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: null,
            },
            message: null
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: 0,
            },
            message: null

        },
    }, {
        id: 'hotel',
        description: 'Visit the Hotel',
        required: {},

        // add bonus to roll
        attribute: null,
        morality: 0,
        positiveResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: null,
            },
            message: null
        },
        negativeResult: {
            reward: null,
            message: null
        },
    }],
    credits: null,
};

const sheriff = {
    id: 'sheriff',
    title: 'Sheriff of Wigmolesia',
    image: 'sheriffJail.jpg',
    audio: '',
    description: `The sheriff's sitting at his desk and a single convict in the cell behind him. You notice the case of rifles on the wall.`,

    // number required for success
    difficulty: 0,
    choices: [{
        id: 'steal',
        description: 'Take a rifle when sheriff isn\'t looking',
        required: {},

        // add bonus to roll
        attribute: 'luck',
        morality: -1,
        positiveResult: {
            reward: {
                equipment: {
                    id: 'laser rifle'
                },
                friend: null,
                credits: null,
            },
            message: 'You succed in taking the rifle. You\'ve seen better but this\'ll do.'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: null,
            },
            message: null,
        },
    }, {
        id: 'talkWithConvict',
        description: 'Talk with the jailed convict',
        required: {},

        // add bonus to roll
        attribute: 'charisma',
        morality: 0,
        positiveResult: {
            reward: {
                equipment: null,
                friend: {
                    id: 'fugitive'
                },
                credits: null,
            },
            message: `All they're saying is how innocent they are. You sympathize with the convict and make friends.`
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: 0,
            },
            message: null

        },
    }, {
        id: 'talkWithSheriff',
        description: 'Talk with the sheriff',
        required: {},

        // add bonus to roll
        attribute: 'charisma',
        morality: 0,
        positiveResult: {
            reward: {
                equipment: null,
                friend: {
                    id: 'sheriff',
                    name: 'Sheriff Tucker'
                },
                credits: null,
            },
            message: `Sheriff tells you things have been rough around town. He could use a hand every now and then. You agree to do what you can. You form a friendship with Sheriff Tucker.`
        },
        negativeResult: {
            reward: null,
            message: null
        },
    }],
    credits: null,
};

const saloon = {
    id: 'saloon',
    title: 'Wigmolesia Saloon',
    image: 'space_saloon.jpg',
    audio: '',
    description: `The smell of Ragnook, the planetary drink of Terran, fills the air. Scowls from across the room darken the mood. You approach the bar and ask for a glass of Ragnook. Someone approaches from behind. "You've come to wrong place, stranger." What do you do?`,

    // number required for success
    difficulty: 0,
    choices: [{
        id: 'punch',
        description: 'Knock him out',
        required: {},

        // add bonus to roll
        attribute: 'strength',
        morality: -1,
        positiveResult: {
            reward: {
                equipment: {
                    id: 'blaster',
                    name: 'blaster',
                    value: 1000
                },
                friend: null,
                credits: null,
            },
            message: 'You whollop this guy and he falls to the floor with a thud. His buddies in the corner stare in disbelief before vacating the bar. You reach into the sorry fellow\'s waistband and take his blaster for the trouble he caused you.'
        },
    }, {
        id: 'talk',
        description: 'Talk your way out',
        required: {},

        // add bonus to roll
        attribute: 'charisma',
        morality: 1,
        positiveResult: {
            reward: {
                equipment: null,
                friend: {
                    id: 'barDude',
                    name: 'Glork'
                },
                credits: 0,
            },
            message: `"I'm not here to cause trouble and I advise you step away if you don't want any either." Glork pauses and lets out a chuckle. "You're alright, cowboy. How 'bout a Ragnook on me." Glork becomes your friend.`
        },
    }],
    credits: 100,
};

// needs to be written
const hotel = {
    id: 'hotel',
    title: 'Wigmolesia Hotel',
    image: '',
    audio: '',
    description: `This is the Hotel description. Change Thursday.`,

    // number required for success
    difficulty: 0,
    choices: [{
        id: 'replace1',
        description: 'Do stuff?',
        required: {},

        // add bonus to roll
        attribute: 'strength',
        morality: -1,
        positiveResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: null,
            },
            message: 'Things happened. Change me Thursday.'
        },
    }, {
        id: 'replace2',
        description: 'Do other stuff',
        required: {},

        // add bonus to roll
        attribute: 'charisma',
        morality: 1,
        positiveResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: 0,
            },
            message: `Other things happened. Change me Thursday.`
        },
    }],
    credits: 100,
};





const beast = {
    id: 'beast',
    title: 'Save the Town from the Beast',
    image: 'beast.jpg',
    description: 'The town is being terrorized by a violent beast and the sheriff has asked for your help in subduing the monster.',

    // number required for success
    difficulty: 5,
    choices: [{
        id: 'shoot',
        description: 'Aim for the head',
        required: {
        },

        // add bonus to roll
        attribute: 'marksmanship',
        morality: -1,
        positiveResult: {
            reward: {
                equipment: {
                    id: 'horn',
                    name: 'Monster Horn',
                    strength: 1,
                    value: 1000,
                },
                friend: null,
                credits: 1000,
            },
            message: 'You succeeded in taking down the beast! The town is saved and they cheer your name. You keep the beast\'s horn as a souvenir and the sheriff thanks you with 2000 credits. Great job!'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: -1500,
            },
            message: 'You subdued the beast, however the beast caused secer damage to the town. '
        },
    }, {
        id: 'trap',
        description: 'Set a trap',
        required: {},

        // add bonus to roll
        attribute: 'intelligence',
        morality: 1,
        positiveResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: 2000,
            },
            message: 'Your swift thinking saved the town from collateral damage. You ensnared the beast in a trap and it quickly exhausted itself. The town is so impressed with your abilities they all pitch in to give you 4000 credits. Nice work!'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: -500,
            },
            message: 'An innocent bystander was caught in your trap and ruined your plan. You have to pay for more equipment to devise another trap. You lose 500 credits.'

        },
    }, {
        id: 'strength',
        description: 'Punch the beast in it\'s stupid head',
        required: {},

        // add bonus to roll
        attribute: 'strength',
        morality: 0,
        positiveResult: {
            reward: {
                equipment: {
                    id: 'tooth',
                    name: 'Monster Tooth',
                    strength: 1,
                    value: 1000,
                },
                friend: {
                    id: 'Sally',
                    name: 'Sally'
                },
                credits: 1000,
            },
            message: 'You deliver a whopping blow to the monster\'s ugly face and knock out it\'s tooth. A bystander by the name of Sally Wiggins is so impressed by your feat of strength and courageousness that she decides to befiredn you forever. You pick up the tooth of the beast and stow it away, and the sheriff rewards you 1500 credits.'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: -1500,
            },
            message: 'You wind up a heckin\' good blow but the beast beats you to the punch. You\'re dragged around the town in embarrassment. Bystanders escort you to the nearest hospital and your fees come out to 1500 credits. You walk away in shame.'
        },
    }],
    credits: 3000,
};

const fugitive = {
    id: 'fugitive',
    title: 'Catch the Escaped Fugitive',
    image: 'mando.jpg',
    description: 'You approach a bulletin board with the photo of a recently escaped convict. You learn that he was in prison for stealing.',

    // number required for success
    difficulty: 5,
    choices: [{
        id: 'alive',
        description: 'Take him alive',
        required: {},

        // add bonus to roll
        attribute: 'strength',
        morality: 0,
        positiveResult: {
            reward: {
                equipment: {
                    id: 'baton',
                    name: "The fugitive's baton",
                    strength: 1,
                    value: 500,
                },
                friend: null,
                credits: 500,
            },
            message: 'You whooped his ass and tied him up. Take his weapon and the 500 credits he had on him'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: -1000,
            },
            message: 'You wrestle around the street causing damage to a nearby bar, pay 1000 credits to fix their tables.'
        },
    }, {
        id: 'dead',
        description: 'Take him out with your laser rifle.',
        required: {},

        // add bonus to roll
        attribute: 'marksmanship',
        morality: -1,
        positiveResult: {
            reward: {
                equipment: {
                    id: 'pistol',
                    name: 'laser blaster',
                    marksmanship: 1,
                    value: 1000,
                },
                friend: null,
                credits: 0,
            },
            message: 'You manage to catch him offguard and gun him down. You pick up his laser blaster and 1000 credits.'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: -3000,
            },
            message: 'You shoot erratically and hit a nearby pedestrian but manage to slay your target. Pay for the passerby\'s hospital bills totaling 3000 credits.',
        },
    }, {
        id: 'convince',
        description: 'Talk to the fugitive to calm him down.',
        required: {},

        // add bonus to roll
        attribute: 'charisma',
        morality: 1,
        positiveResult: {
            reward: {
                equipment: null,
                friend: {
                    id: 'fugitive',
                    name: 'Markov',
                },
                credits: 1000,
            },
            message: 'You talk him into leaving his life of crime. Markov gives you the key to his deposit box. Gain 1000 credits.'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: {
                    id: 'fugitive',
                    name: 'Markov',
                },
                credits: -2000,
            },
            message: 'You are mistaken as a friend of the fugitive. Get arrested alongside him. Pay 2000 credits to get out of jail.'
        },
    }],
    credits: 5000,
};

// needs to be written
const gangbusters = {
    id: 'gangbusters',
    title: 'Help the Old Man',
    image: 'mando.jpg',
    description: 'There\'s an old man that needs help. A gang took his cane. Do the right thing and help.',

    // number required for success
    difficulty: 5,
    choices: [{
        id: 'alive',
        description: 'Fight the gang in a good ol 1v5 brawl',
        required: {},

        // add bonus to roll
        attribute: 'strength',
        morality: 0,
        positiveResult: {
            reward: {
                equipment: {
                    id: 'baton',
                    name: "The fugitive's baton",
                    strength: 1,
                    value: 500,
                },
                friend: null,
                credits: 500,
            },
            message: 'TBD'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: -1000,
            },
            message: 'TBD'
        },
    }, {
        id: 'dead',
        description: 'Take the high ground and murder everyone.',
        required: {},

        // add bonus to roll
        attribute: 'marksmanship',
        morality: -1,
        positiveResult: {
            reward: {
                equipment: {
                    id: 'pistol',
                    name: 'laser blaster',
                    marksmanship: 1,
                    value: 1000,
                },
                friend: null,
                credits: 0,
            },
            message: 'TBD'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: -3000,
            },
            message: 'TBD',
        },
    }, {
        id: 'convince',
        description: 'Observe them and make a plan.',
        required: {},

        // add bonus to roll
        attribute: 'intelligence',
        morality: 1,
        positiveResult: {
            reward: {
                equipment: null,
                friend: {
                    id: 'fugitive',
                    name: 'Markov',
                },
                credits: 1000,
            },
            message: 'TBD.'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: {
                    id: 'fugitive',
                    name: 'Markov',
                },
                credits: -2000,
            },
            message: 'TBD.'
        },
    }],
    credits: 5000,
};

export const quests = 
[   
    intro,
    fugitive, 
    beast,
    wigmolesia,
    saloon,
    sheriff,
    hotel,
    gangbusters
];
