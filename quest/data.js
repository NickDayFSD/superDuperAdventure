
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


// const murderMystery = {
//     id: 'murder-mystery',
//     title: 'Find the Mayor\'s murderer',
//     image: '',
//     description: 'You come upon a small town called Pancake. The mayor, Annie Syrup, has been slain! The bounty board has a posting for identifying the murderer with a bonus for bringing them in alive.',

//     // number required for success
//     difficulty: 5,
//     choices: [{
//         id: 'crimescene',
//         description: 'Go back to the scene of the crime and collect evidence to deduce the events.',
//         required: {},

//         // add bonus to roll
//         attribute: 'intelligence',
//         positiveResult: {
//             reward: {
//                 equipment: 'murder weapon',
//                 friend: '',
//                 credits: 0,
//             },
//             message: 'You find the murder weapon! It is an ornate dagger with a bejeweled hilt and enscription that says "Orcut". Whoever did this is part of the Orcut clan.'
//         },
//         negativeResult: {
//             reward: {
//                 equipment: 'tax writ',
//                 friend: '',
//                 credits: 0,
//             },
//             message: 'At the scene of the crime, you find a writ awaiting the mayor\'s signature declaring a new tax on spacecraft fuel cells. Whoever did this, could have been trying to prevent this cost.'
//         },
//     }, {
//         id: 'tavern',
//         description: 'Go to the tavern called Zebra and gather information.',

//         required: {},

//         // add bonus to roll
//         attribute: '',
//         positiveResult: {
//             reward: {
//                 equipment: '',
//                 friend: '',
//                 credits: 0,
//             },
//             message: ''
//         },
//         negativeResult: {
//             reward: {
//                 equipment: '',
//                 friend: '',
//                 credits: 0,
//             },
//             message: ''

//         },
//     }, {
//         id: 'convince',
//         description: 'Talk Him out of it',
//         result: '',
//         required: {},

//         // add bonus to roll
//         attribute: '',
//         positiveResult: {
//             reward: {
//                 equipment: '',
//                 friend: '',
//                 credits: 0,
//             },
//             message: ''
//         },
//         negativeResult: {
//             reward: {
//                 equipment: '',
//                 friend: '',
//                 credits: 0,
//             },
//             message: ''
//         },
//     }],
//     credits: 10000,
// };

export const quests = 
[   
    intro,
    fugitive, 
    beast,
    wigmolesia,
];
