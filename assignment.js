function feetToMile(feet){
    if (feet < 0){
        return "Distance can't be negative.";
    }
    else{
        var mile = feet / 5280;
    }
    return mile;
    
}
var result = feetToMile(85);
console.log(result);


function woodCalculator(chair, table, bed){
    if ((chair | table | bed) < 0){
        return 'Invalid input.';
    }
    else{
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount = bed * 5;
        var totalWood = chairCount + tableCount+ bedCount;
    }
    return totalWood;
}
var woodResult = woodCalculator(10, 25, 8);
console.log(woodResult);


function brickCalculator(number){
    if (number >= 0 && number <= 10){
        number *= 15000;
        return number;
    }
    else if (number >= 11 && number <= 20){
        number2 = number - 10;
        number2 = number2 * 12000 + 150000;
        return number2;
    }
    else if (number >= 21){
        number3 = number - 20;
        number3 = number3 * 10000 + 270000;
        return number3;
    }
    else{
        return "Invalid Number."
    }
}
var brickCount = brickCalculator(45);
console.log(brickCount);


function tinyFriend( words ) {
    var min = words[0];
   for ( i = 0; i < words.length; i++ ){
        var currentName = words[i];
        if( currentName.length < min.length){
            min = currentName;
        }
    }
    return min;
}
var name = tinyFriend(['abdul', 'adu', 'henry', 'shah']);
console.log(name);