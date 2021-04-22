const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function createUser(name, tagline, formArray) {
    const user = {
        name,
        hp: 30 + 3 * formArray[1],
        credits: 0,
        equipment: [],
        friends: [],
        completedQuests: {},
        tagline,
        intelligence: Number(formArray[0]),
        strength: Number(formArray[1]),
        marksmanship: Number(formArray[2]),
        charisma: Number(formArray[3]),
        luck: Number(formArray[4]),
        morality: 0,
<<<<<<< HEAD

=======
>>>>>>> 55cf427a8c394c1ed6e9967f09e1b3c897ee9689
    };

    return user;
}

export function areQuestsCompleted(user) {
    const gangbusters = 'gangbusters';
    const fugitive = 'fugitive';
    const beast = 'beast';

    if (!user.completedQuests[fugitive, beast, gangbusters]) {
        return false;
    } else {
        return true;
    }
}

export function positiveUserUpdate(choice, quest) {
    const user = getUser();

    user.credits += choice.positiveResult.reward.credits;
    user.credits += quest.credits;

    if (choice.positiveResult.reward.equipment) {
        user.equipment.push(choice.positiveResult.reward.equipment);
    }
    if (choice.positiveResult.reward.friend) {
        user.friends.push(choice.positiveResult.reward.friend);
    }

    user.morality += choice.morality;

    user.completedQuests[quest.id] = true;

    setUser(user);
}

export function negativeUserUpdate(choice, quest) {
    const user = getUser();

    user.credits += choice.negativeResult.reward.credits;
    user.credits += quest.credits;
    user.hp += choice.negativeResult.reward.hp;

    if (choice.negativeResult.reward.equipment) {
        user.equipment.push(choice.negativeResult.reward.equipment);
    }
    if (choice.negativeResult.reward.friend) {
        user.friends.push(choice.negativeResult.reward.friend);
    }

    user.morality += choice.morality;

    user.completedQuests[quest.id] = true;

    setUser(user);
}

export function sellItem(item) {
    const user = getUser();

    const matchingItem = user.equipment.find(object => object.id === item.id);

    const index = user.equipment.indexOf(matchingItem);

    if (index > -1) {
        user.equipment.splice(index, 1);
    }

    user.credits += (item.value * .8);

    setUser(user);
}

export function buyItem(item) {
    const user = getUser();

    if (user.credits <= 0) {
        return false;
    }

    user.equipment.push(item);

    user.credits -= (item.value * 1.2);

    setUser(user);
export function findHighestStat(user) {
    const userStats = {
        intelligence: user.intelligence,
        strength: user.strength,
        marksmanship: user.marksmanship,
        charisma: user.charisma,
        luck: user.luck
    };

    // voodoo magic
    return (Object.entries(userStats).sort((a, b) => a[1] - b[1])[Object.entries(userStats).length - 1][0]);
}
