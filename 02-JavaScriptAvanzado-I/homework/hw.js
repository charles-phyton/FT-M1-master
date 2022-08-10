var snack = 'Meow Mix';

function getFood(food) {
    //var Snack
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; //undefined
}

console.log(getFood(false)); // Undefined