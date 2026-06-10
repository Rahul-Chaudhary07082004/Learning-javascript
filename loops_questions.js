// Loops :- 
/*while, do while, for, for/in, for/of, for each */

// sum of 1 to 5 using while loop 
let sum = 0;
let i = 1;
while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);

// count down from 5 to 1 using while loop and store number in an array (countdown)
let countdown = [];
let j = 5;
while (j > 0) {
    countdown.push(j);
    j--;
}
console.log(countdown);

//use do while loop, prompt user to enter their fav tea type until they enter stop and store each tea type in array (TeaCollection) this code will only run on browser coz of prompt()
let TeaCollection = [];
let tea;
do {
    tea = prompt("Enter your fav tea type (type stop to finish)");
    if (tea !== "stop") {
        TeaCollection.push(tea);
    }
} while (tea !== "stop");
console.log(TeaCollection);

// use for loop , multiplies each element [2,4,6] by 2 and store result in new array (Multiplied numbers)
let MultipliedNumbers = [];
let Numbers = [2,4,6];

for (let i = 0; i < Numbers.length; i++) {
    let takeNumbers = Numbers[i] * 2;
    MultipliedNumbers.push(takeNumbers);
}
console.log(MultipliedNumbers);

// use for loop , Lists all cities in the array ["Paris","New York","Tokyo","London"] and store each city in new array (Citylist)
let cities = ["Paris", "New York", "Tokyo", "London"];
let CityList = [];

for (let i = 0; i < cities.length; i++) {
    const element = cities[i];
    CityList.push(element)
}
console.log(CityList);

// use for loop , Loop through array ["green tea","black tea","chai","oolong tea"] and stop loop when it finds chai. Store elements before chai in array (SelectedTeas)
let tea = ["green tea", "black tea", "chai", "oolong tea"];
let SelectedTeas = [];

for (let i = 0; i < tea.length; i++) {
    if (tea[i] === "chai") {
        break ;
    }
    SelectedTeas.push(tea[i]);
}
console.log(SelectedTeas);

// use for loop , skip Paris from the array ["London","New York","Paris","Berlin"] and store rest elements in new array (visitedCities)
let city = ["London", "New York", "Paris", "Berlin"];
let visitesCities = [];

for (let i = 0; i < city.length; i++) {
    if(city[i] === "Paris") {
        continue;
    }
    visitesCities.push(city[i]);
}
console.log(visitesCities);

// use for of loop , iterate through array [1,2,3,4,5] and stop when 4 found. store the numbers before 4 in array (smallNumbers)
let number = [1,2,3,4,5];
let smallNumbers = [];

for (const num of number) {
    if(num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

// use for in loop, iterate through array contain city population. Stop when found Berlin population and store previous cities populations in new object (cityNewPopulations)
let citiesPopulations = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
};
let cityNewPopulations = {};
for (const city in citiesPopulations) {
    if(city === "Berlin") {
        break;
    }
    cityNewPopulations[city] = citiesPopulations[city];
}
console.log(cityNewPopulations);

// use for each loop, iterate through array and stop when found "chai", and store all previous tea types in new array (availableTeas)
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
let isChaiFound = false;

teaCollection.forEach(tea => {
    if(tea === "chai") {
        isChaiFound = true;
    }
    if(!isChaiFound) {
        availableTeas.push(tea);
    }
});
console.log(availableTeas);
