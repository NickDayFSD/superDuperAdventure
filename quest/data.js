import { getUser } from '../local-storage-utils.js';
import { rollGenerator } from '../utils.js';

const user = getUser();

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
            message: 'You whooped his ass and tied him up. Take his weapon and the cash he had on him.'
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
        description: 'Take him dead',
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
            message: 'You manage to catch him offguard and gun him down. You pick up his laser blaster and 500 credits.'
        },
        negativeResult: {
            reward: {
                equipment: null,
                friend: null,
                credits: -3000,
            },
            message: 'You shoot erratically and hit a nearby pedestrian but manage to slay your target. Pay for the passerby\'s hospital bills',
        },
    }, {
        id: 'convince',
        description: 'Talk Him out of it',
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
            message: 'You are mistaken as a friend of the fugitive. Get arrested alongside him.'
        },
    }],
    credits: 5000,
};

export const quests = [fugitive];