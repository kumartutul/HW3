function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(1000);
console.log(result);

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount+ bedCount;
    return totalWood;
}
var woodResult = woodCalculator(50, 70, 100);
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