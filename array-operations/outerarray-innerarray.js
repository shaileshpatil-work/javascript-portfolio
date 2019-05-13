const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(multiArray);
const args = process.argv.slice(2);
const [outerArrayIndex, innerArrayIndex, userDirection] = args;
console.log(outerArrayIndex);
console.log(innerArrayIndex);
console.log(userDirection);


function outerArrayOperation(outerArrayIndex, userDirection, multiArray){
    if((outerArrayIndex >= 0) && (outerArrayIndex < multiArray.length)){
        if ((outerArrayIndex == 0 && userDirection == "up") || ((outerArrayIndex == (multiArray.length - 1)) && userDirection == "down")){
            console.log("invalid");
        }
        else if(userDirection == "up"){
            upSwitch(outerArrayIndex, multiArray);
        }
        else if(userDirection == "down"){
            downSwitch(outerArrayIndex, multiArray);
        }
        else if (userDirection == "duplicate") {
            duplicate(outerArrayIndex, multiArray);
        }
        else if (userDirection == "remove") {
            remove(outerArrayIndex, multiArray);
        }
        else{
            console.log("invalid");
        }
    }
    else{
        console.log("invalid");
    }
}

function upSwitch(outerArrayIndex, multiArray){
    let currentIndex = multiArray[outerArrayIndex];
    let prevIndex = multiArray[outerArrayIndex - 1];

    multiArray[outerArrayIndex] = prevIndex;
    multiArray[outerArrayIndex - 1] = currentIndex;
    console.log(multiArray);
}

function downSwitch(outerArrayIndex, multiArray){
    let currentIndex = multiArray[outerArrayIndex];
    let nextIndex = multiArray[Number(outerArrayIndex) + 1];

    multiArray[outerArrayIndex] = nextIndex;
    multiArray[Number(outerArrayIndex) + 1] = currentIndex;
    console.log(multiArray);
}

function duplicate(outerArrayIndex, multiArray){
    multiArray.splice(outerArrayIndex, 0, multiArray[outerArrayIndex]);
    console.log(multiArray);
}

function remove(outerArrayIndex, multiArray){
    multiArray.splice(outerArrayIndex, 1);
    console.log(multiArray);
}

function innerArrayOperation(outerArrayIndex, innerArrayIndex, userDirection, multiArray){
    if((outerArrayIndex >= 0) && (outerArrayIndex < multiArray.length)){
        if((innerArrayIndex >= 0) && (innerArrayIndex < multiArray[outerArrayIndex].length)){
            if((innerArrayIndex == 0 && userDirection == "up") || (innerArrayIndex == multiArray.length - 1 && userDirection == "down")){
                console.log("invalid");
            }
            else{
                // String(userDirection);
                if(userDirection == "up"){
                    let currentIndex = multiArray[outerArrayIndex][innerArrayIndex];
                    let prevIndex = multiArray[outerArrayIndex][Number(innerArrayIndex) - 1];
                    multiArray[outerArrayIndex][innerArrayIndex] = prevIndex;
                    multiArray[outerArrayIndex][Number(innerArrayIndex)-1] = currentIndex;
                    console.log(multiArray);
                }
                else if(userDirection == "down"){
                    let currentIndex = multiArray[outerArrayIndex][innerArrayIndex];
                    let nextIndex = multiArray[outerArrayIndex][Number(innerArrayIndex) + 1];
                    multiArray[outerArrayIndex][innerArrayIndex] = nextIndex;
                    multiArray[outerArrayIndex][Number(innerArrayIndex) + 1] = currentIndex;
                    console.log(multiArray);
                }
                else if (userDirection == "duplicate") {
                    multiArray[outerArrayIndex].splice(innerArrayIndex, 0, multiArray[outerArrayIndex][innerArrayIndex]);
                    console.log(multiArray);
                }
                else if (userDirection == "remove") {
                    multiArray[outerArrayIndex].splice(innerArrayIndex, 1);
                    console.log(multiArray);
                }
                else{
                    console.log("invalid");
                }
            }
        }
        else{
            console.log("invalid");
        }
    }
    else{
        console.log("invalid");
    }
}

function checkParams(outerArrayIndex, innerArrayIndex){
    if (outerArrayIndex == 0) {
        outerArrayIndex = "zero";
    }
    if (innerArrayIndex == 0) {
        innerArrayIndex = "zero";
    }
}

function convertParams(outerArrayIndex, innerArrayIndex){
    if (outerArrayIndex == "zero") {
        outerArrayIndex = 0;
    }
    if (innerArrayIndex == "zero") {
        innerArrayIndex = 0;
    }
}

function allOperation(outerArrayIndex, innerArrayIndex, userDirection, multiArray){
   checkParams(outerArrayIndex, innerArrayIndex);
   if(outerArrayIndex && innerArrayIndex && userDirection && multiArray){
        convertParams(outerArrayIndex, innerArrayIndex);
       innerArrayOperation(outerArrayIndex, innerArrayIndex, userDirection, multiArray)
   }
   else{
        convertParams(outerArrayIndex, innerArrayIndex);
       outerArrayOperation(outerArrayIndex, userDirection, multiArray);
   }
}

allOperation(outerArrayIndex, innerArrayIndex, userDirection, multiArray);
// allOperation(2,null,"up", multiArray);


// Pass second parameter as null if you don't want to work on innerArray.