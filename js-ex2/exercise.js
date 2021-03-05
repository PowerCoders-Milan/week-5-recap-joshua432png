array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
array2 = [21, 19, 12, 'sebastian', 'will', 23, 20];


var score = {};

function arrayConcat(arrayA, arrayB){
    var array = arrayA.concat(arrayB);

    var arrayString = array.filter(element => typeof element === 'string');
    var arrayNumber = array.filter(element => typeof element === 'number');

    for(var i = 0; i < arrayString.length; i++){
        Object.defineProperty(score, `${arrayString[i]}`,{
            value: arrayNumber[i],
            enumerable: true,

        });
    }
    

}

arrayConcat(array1, array2);
console.log(score);




