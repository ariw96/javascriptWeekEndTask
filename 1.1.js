const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    let candy;
    candyStore.candies.forEach(element => {
        element.id === id ? candy = element.name : console.log('');

    });
    return candy;
}

function getPrice(candyStore, id) {
    let candy;
    candyStore.candies.forEach(element => {
        element.id === id ? candy = element.price : console.log('');

    });
    return candy;
}

function addCandy(candyStore, name, price, id) {
    candyStore.candies.push({ name: name, price: price, id: id });
    return candyStore
}

function buy(candyStore, id) {
    return candyStore.cashRegister -= getPrice(candyStore, id)
}
console.log(buy(candyStore, "5hd7y"))