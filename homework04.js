alert(`Кухнята на Митко`);
alert(`Задаване на задължителни въпроси`);

let panNumberInKitchen = prompt(`Колко тигана има в кухнята?`);
let panNumberInKitchenCorrectAnswer = 12;
let potNumberInKitchen = prompt(`Колко тенджери има в кухнята?`);
let potNumberInKitchenCorrectAnswer = 4;
let wideOfTheKitchen = prompt(`Колко сантиметра е широка кухнята?`);
let wideOfTheKitchenCorrectAnswer = 1500;
let lenghtOfTheKitchen = prompt(`Колко сантиметра е дълга кухнята?`);
let lenghtOfTheKitchenCorrectAnswer = 6500;
let highOfTheKitchen = prompt(`Колко сантиметра е висока кухнята?`);
let highOfTheKitchenCorrectAnswer = 3500;
let squareSurface = prompt(`Каква е квадратурата на кухнята ви?`);
let chefFirstName = prompt(`Как се казва главният готвач?`);
let chefFirstNameCorrectAnswer = `Иван`;
let assistantChefsNumberInTheKitchen = prompt(`Колко готвачи работят в кухнята?`);
let assistantChefsNumberInTheKitchenCorrectAnswer = 8;
let waitersNumberInTheRestaurant = prompt(`Колко сервитьори работят в ресторанта?`);
let waitersNumberInTheRestaurantCorrectAnswer = 16;
let minimalTemperatureInTheKitchen = prompt(`Каква е минималната температура в кухнята?`);
let minimalTemperatureInTheKitchenCorrectAnswer = 36;
let maximalTemperatureInTheKitchen = prompt(`Каква е максималната температура в кухнята?`);
let maximalTemperatureInTheKitchenCorrectAnswer = 48;
let cashInYourBankAccount = prompt(`Колко пари имате в банковата си сметка?`);
let cashInYourBankAccountCorrectAnswer = 80000;
let dailyTurnover = prompt(`Колко пари е дневният оборот на ресторанта ви?`);
let dailyTurnoverCorrectAnswer = 150;
let openTimeOfTheRestaurant = prompt(`В колко часа отваряте?`);
let openTimeOfTheRestaurantCorrectAnswer = 8;
let closeTimeOfTheRestaurant = prompt(`В колко часа затваряте?`);
let closeTimeOfTheRestaurantCorrectAnswer = 20;
let temperatureOfTheAir = `температура на въздуха`;
let firstOptionalQuestion;
let secondOptionalQuestion;
let thirdOptionalQuestion;
let fourthOptionalQuestion;
let fifthOptionalQuestion;
let userChoiceOfVegetarian;
let methodOfPreparation;
let userPortionOption;
let userDesertChoice;
let iceCreamStrawberryTaste = `ягода`;
let iceCreamBananaTaste = `банан`;
let iceCreamVanillaTaste = `ванилия`;

console.log(`Брой тигани в кухнята ${panNumberInKitchen}`);
console.log(`Брой тенджери в кухнята ${potNumberInKitchen}`);
console.log(`Кухнята е широка ${wideOfTheKitchen}`);
console.log(`Дължината на кухнята е ${lenghtOfTheKitchen}`);
console.log(`Височината на кухнята е ${highOfTheKitchen}`);
console.log(`Главният готвач се казва ${chefFirstName}`);
console.log(`В кухнята работят ${assistantChefsNumberInTheKitchen} бр готвачи`);
console.log(`В ресторанта работят ${waitersNumberInTheRestaurant} бр сервитьори`);
console.log(`Минималната температура в кухнята е ${minimalTemperatureInTheKitchen} градуса`);
console.log(`Максималната температура в кухнята е ${maximalTemperatureInTheKitchen} градуса`);
console.log(`В банковата сметка имам ${cashInYourBankAccount} лева`);
console.log(`Дневен оборот е ${dailyTurnover} лева`);
console.log(`Ресторантът отваря в ${openTimeOfTheRestaurant}`);
console.log(`Ресторантът затваря в ${closeTimeOfTheRestaurant}`);

const FIRST_OPTIONAL_QUESTION_POSITIVE_ANSWER = `Y`;
const FIRST_OPTIONAL_QUESTION_NEGATIVE_ANSWER = `N`;
const SECOND_OPTIONAL_QUESTION_POSITIVE_ANSWER = `Y`;
const SECOND_OPTIONAL_QUESTION_NEGATIVE_ANSWER = `N`;
const THIRD_OPTIONAL_QUESTION_POSITIVE_ANSWER = `Y`;
const THIRD_OPTIONAL_QUESTION_NEGATIVE_ANSWER = `N`;
const FOURTH_OPTIONAL_QUESTION_POSITIVE_ANSWER = `Y`;
const FOURTH_OPTIONAL_QUESTION_NEGATIVE_ANSWER = `N`;
const FIFTH_OPTIONAL_QUESTION_POSITIVE_ANSWER = `Y`;
const FIFTH_OPTIONAL_QUESTION_NEGATIVE_ANSWER = `N`;
const USER_MEAT_DISH = `местно ястие`;
const USER_VEGETARIAN_DISH = `вегетарианско ястие`;
const USER_DESERT_DISH = `десерт`;
const SMALL_PORTION_OPTION = `малка порция`;
const MEDIUM_PORTION_OPTION = `средна порция`;
const LARGE_PORTION_OPTION = `голяма порция`;
const RARE_METHOD_OF_PREPARATION = `rare`;
const MEDIUM_METHOD_OF_PREPARATION = `medium`;
const WELLDONE_METHOD_OF_PREPARATION = `well done`;
const USER_VEGETARIAN_CHOICE = `Вегетарианско`;
const USER_VEGAN_CHOICE = `Веганско`;
const USER_PESTERIAN_CHOICE = `Пескатерианско`;
const USER_CAKE_CHOICE = `Торта`;
const USER_ICE_CREAM_CHOICE = `Сладолед`;
const OPTIONAL_QUESTION = prompt(`Желаете ли да отговорите на опционалните въпроси?`);
const OPTIONAL_QUESTION_POSITIVE_ANSWER = `да`;

if (OPTIONAL_QUESTION == OPTIONAL_QUESTION_POSITIVE_ANSWER) {
    alert(`Пригответе се за въпросите`);
    firstOptionalQuestion = prompt(`Разполагате ли с хладилник?`);
    secondOptionalQuestion = prompt(`Разполагате ли с газов котлон?`);
    thirdOptionalQuestion = prompt(`Разполагате ли с конвектомат?`);
    fourthOptionalQuestion = prompt(`Разполагате ли с електрическа скара?`);
    fifthOptionalQuestion = prompt(`Разполагате ли с аспиратор?`);
    alert(`Отговорихте на опционалните въпроси`);
} else {
    alert(`Всички въпроси са зададени`);
}

let userDishChoice = prompt(`Моля въведете предпочитано ястие Опциите са: местно ястие, вегетарианско ястие или десерт`);

while (true) {
    if (userDishChoice !== USER_MEAT_DISH &&
        userDishChoice !== USER_VEGETARIAN_DISH &&
        userDishChoice !== USER_DESERT_DISH) {
        alert(`Въведохте некоректно ястие. Моля опитайте отново!`);
        userDishChoice = prompt(`Моля въведете предпочитано ястие Опциите са: местно ястие, вегетарианско ястие или десерт`);
    } else {
        alert(`Избрахте ${userDishChoice}`);
        break;
    }
}

if (userDishChoice == USER_MEAT_DISH) {
    let userPortionOption = prompt(`Моля изберете порция. Вариантите са малка, средна или голяма`);
    alert(`Избрахте ${userPortionOption}`);
    methodOfPreparation = prompt(`Как да бъде приготвено месото ви?`);
    alert(`Избрахте ${methodOfPreparation}`);

    if ((USER_MEAT_DISH == RARE_METHOD_OF_PREPARATION &&
        SECOND_OPTIONAL_QUESTION_NEGATIVE_ANSWER == secondOptionalQuestion &&
        fourthOptionalQuestion == FOURTH_OPTIONAL_QUESTION_POSITIVE_ANSWER &&
        fifthOptionalQuestion == FIFTH_OPTIONAL_QUESTION_POSITIVE_ANSWER &&
        userPortionOption == SMALL_PORTION_OPTION) ||
        (USER_MEAT_DISH == MEDIUM_METHOD_OF_PREPARATION ||
            thirdOptionalQuestion == THIRD_OPTIONAL_QUESTION_POSITIVE_ANSWER ||
            assistantChefsNumberInTheKitchen == 5 ||
            userPortionOption == MEDIUM_PORTION_OPTION ||
            chefFirstName == `Иван`) ||
        (USER_MEAT_DISH == WELLDONE_METHOD_OF_PREPARATION &&
            closeTimeOfTheRestaurant == 22 || squareSurface == 45 &&
            panNumberInKitchen == 3 || potNumberInKitchen == 2)) {
        alert(`Вашата поръчка е изпълнена успешно. Благодаря ви, че хапнахте при нас`);
    } else {
        alert(`Ресторантът не може да изпълни вашата поръчка. Започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.`);
    }
} if (userDishChoice == USER_VEGETARIAN_DISH) {
    userChoiceOfVegetarian = prompt(`Моля изберете едно от следните ястия - 1 Вегетарианско, 2 Веганско и 3 Пескатерианско`);
    alert(`Избрахте ${userChoiceOfVegetarian}`);
}

if ((USER_VEGETARIAN_DISH == userChoiceOfVegetarian &&
    thirdOptionalQuestion == THIRD_OPTIONAL_QUESTION_NEGATIVE_ANSWER ||
    fourthOptionalQuestion == FOURTH_OPTIONAL_QUESTION_NEGATIVE_ANSWER ||
    fifthOptionalQuestion == FIFTH_OPTIONAL_QUESTION_NEGATIVE_ANSWER) ||
    (USER_VEGETARIAN_DISH == USER_VEGAN_CHOICE &&
        firstOptionalQuestion == FIRST_OPTIONAL_QUESTION_POSITIVE_ANSWER &&
        chefFirstName == `Манол` &&
        assistantChefsNumberInTheKitchen >= 3 &&
        assistantChefsNumberInTheKitchen < 11) ||
    (USER_VEGETARIAN_DISH == USER_PESTERIAN_CHOICE &&
        fourthOptionalQuestion == FOURTH_OPTIONAL_QUESTION_POSITIVE_ANSWER &&
        OPTIONAL_QUESTION == OPTIONAL_QUESTION_POSITIVE_ANSWER ||
        cashInYourBankAccount < 158000)) {
    alert(`Вашата поръчка е изпълнена успешно. Благодаря ви, че хапнахте при нас`);
} else {
    alert(`Ресторантът не може да изпълни вашата поръчка. Започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.`);
}
if (userDishChoice == USER_DESERT_DISH) {
    alert(`Избрахте десерт`);
    let userDesertChoice = prompt(`Имате следните опции - сладолед или торта. Моля направете вашия избор.`);
    alert(`Избрахте ${userDesertChoice}`);
}

if (USER_DESERT_DISH == USER_CAKE_CHOICE &&
    firstOptionalQuestion == FIRST_OPTIONAL_QUESTION_POSITIVE_ANSWER &&
    closeTimeOfTheRestaurant == 19 &&
    fifthOptionalQuestion == FIFTH_OPTIONAL_QUESTION_NEGATIVE_ANSWER &&
    cashInYourBankAccount > 14999 &&
    cashInYourBankAccount < 50001 ||
    chefFirstName == `Румен`) {
    alert(`Вашата поръчка е изпълнена успешно. Благодаря ви, че хапнахте при нас`);
} else {
    alert(`Ресторантът не може да изпълни вашата поръчка. Започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.`);
}

if (USER_DESERT_DISH == USER_ICE_CREAM_CHOICE) {
    let iceCreamTaste = prompt(`Избрахте сладолед. Опциите са ягодов, бананов и ванилия`);
    alert(`Избрахте ${iceCreamTaste}`);
}

if (iceCreamTastes == iceCreamStrawberryTaste) {
    alert(`Вашата поръчка е изпълнена успешно. Благодаря ви, че хапнахте при нас`);
} else {
    alert(`Ресторантът не може да изпълни вашата поръчка. Започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас.`);
}