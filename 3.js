// n a small town the population is p0 = 1000 at the beginning of a year. The population regularly 
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the 
// town. How many years does the town need to see its population greater or equal to p = 1200 
// inhabitants? 

// At the end of the first year there will be:  
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants 

// At the end of the 2nd year there will be:  
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer) 

// At the end of the 3rd year there will be: 
// 1141 + 1141 * 0.02 + 50 => 1213 

// It will need 3 entire years. 

// More generally given parameters: 
// - p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass) 
// - the function nb_year should return n number of entire years needed to get a population 
// greater or equal to p. 
// - aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0) 

// Examples: 
// nb_year(1500, 5, 100, 5000) -> 15 
// nb_year(1500000, 2.5, 10000, 2000000) -> 10 

// Note: Don't forget to convert the percent parameter as a percentage in the body of your 
// function: if the parameter percent is 2 you have to convert it to 0.02.
function growthPopulation(startPopulation, percentage, comingPopulation, termialPopulation) {
    let countYears = 0;
    let currentPopulation = startPopulation
    while (currentPopulation < termialPopulation) {
        currentPopulation = currentPopulation * (1 + percentage) + comingPopulation
        countYears += 1
    }
    return countYears
}
console.log(growthPopulation(1500, 0.05, 100, 5000))
    // Number of people in the bus 
    // There is a bus moving in the city, and it takes and drop some people in each bus stop. 
    // You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two 
    // items which represent number of people get into bus (The first item) and number of people get 
    // off the bus (The second item) in a bus stop. 
    // Your task is to return number of people who are still in the bus after the last bus station (after 
    // the last array). Even though it is the last bus stop, the bus is not empty and some people are still 
    // in the bus, and they are probably sleeping there :D 
    // Take a look on the test cases. 
    // Please keep in mind that the test cases ensure that the number of people in the bus is always 
    // >= 0. So the return integer can't be negative. 
    // The second value in the first integer array is 0, since the bus is empty in the first bus stop.
function peopleOnBusStop(busStops) {
    let x = 0
    busStops.forEach(element => {
        x = x + element[0] - element[1]
    });
    return x
}