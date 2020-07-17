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

function tinyFriend(name){
    var smallest = name[0];
    var indexNumber = 1;
    while (indexNumber < name.length){
        var currentName = name[indexNumber];
        if(currentName < smallest){
            smallest = currentName;
        }
        indexNumber++;
    }
    return smallest;
}
var nameResult = tinyFriend([89, 21, 47, 8, 21, 4, 587]);
console.log(nameResult);