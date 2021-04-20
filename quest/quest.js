const fugitive = {
    id: 'fugitive',
    title: 'Catch the Escaped Fugitive',
    image: '',
    description: '',

    // number required for success
    difficulty: '1 to 10',
    choices: [{
        id: 'alive',
        description: 'Take him alive',
        required: {},

        // add bonus to roll
        strength: '1 to 10',
        result: '',
        reward: {
            equipment: '',
            friend: '',
            credits: 0,
        },
    }, {
        id: 'dead',
        description: 'Take him dead',
        result: '',
        required: {},

        // add bonus to roll
        marksmanship: '1 to 10',
        reward: {
            equipment: '',
            friend: '',
            credits: 0,
        },
    }, {
        id: 'convince',
        description: 'Talk Him out of it',
        result: '',
        required: {},

        // add bonus to roll
        charisma: '1 to 10',
        reward: {
            equipment: '',
            friend: '',
            credits: 0,
        },
    }],
    credits: 50000,
};
