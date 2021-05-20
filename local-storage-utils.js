const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    return JSON.parse(localStorage.getItem(USER));
}

export function createUser(name, tagline, formArray) {
    // you can destructure from an array like so
    const [
        intelligence, 
        strength, 
        marksmanship, 
        charisma, 
        luck
    ] = formArray;

    const user = {
        name,
        hp: 30 + 3 * strength,
        credits: 0,
        equipment: [],
        friends: [],
        completedQuests: {},
        tagline,
        intelligence,
        strength,
        marksmanship,
        charisma,
        luck,
        morality: 0,
    };

    return user;
}

export function areQuestsCompleted(user) {
    const gangbusters = 'gangbusters';
    const fugitive = 'fugitive';
    const beast = 'beast';

    return user.completedQuests[fugitive, beast, gangbusters];
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

        // destructuring should work here
    const {
        morality,
        negativeResult: {
            reward: {
                equipment,
                friend,
                credits,
                hp
            }
        }
    } = choice;

        
    user.credits += credits;
    user.credits += quest.credits;
    user.hp += hp;


    if (equipment) {
        user.equipment.push(equipment);
    }

    if (friend) {
        user.friends.push(friend);
    }

    user.morality += morality;

    user.completedQuests[quest.id] = true;

    setUser(user);
}

export function sellItem(item) {
    const user = getUser();

    const matchingItem = user.equipment.find(object => object.id === item.id);

    // does this work if matchingItem is an object? I thought you'd have to use findIndex for complex data types
    const index = user.equipment.indexOf(matchingItem);

    if (index > -1) {
        user.equipment.splice(index, 1);
    }

    user.credits += (item.value * .8);

    setUser(user);

}

export function buyItem(item) {
    const user = getUser();

    // 1.2 should be a named const for maintainability
    if (user.credits < ((item.value) * 1.2)) {
        return false;
    }

    user.equipment.push(item);

    user.credits -= (item.value * 1.2);

    setUser(user);

    return true;
}

export function findHighestStat(user) {

    const userStats = {
        intelligence: user.intelligence,
        strength: user.strength,
        marksmanship: user.marksmanship,
        charisma: user.charisma,
        luck: user.luck
    };

    // i was about to criticize this code as unreadable, but then i remembered that i was responsible for it...:grimacing:
    // voodoo magic
    return (Object.entries(userStats).sort((a, b) => a[1] - b[1])[Object.entries(userStats).length - 1][0]);
}
