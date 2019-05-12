const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(multiArray);
const args = process.argv.slice(2);
const [outerArrayIndex, userDirection] = args;
console.log(outerArrayIndex);
console.log(userDirection);


function multiArraySwap(outerArrayIndex, userDirection, multiArray) {
    if (outerArrayIndex >= 0 && outerArrayIndex < multiArray.length) {
        if (((outerArrayIndex == 0) && (userDirection == "up")) || ((outerArrayIndex == (multiArray.length - 1)) && (userDirection == "down"))) {
            console.log("invalid");
        }
        else {
            multiArrayIncDec(outerArrayIndex, userDirection, multiArray);
        }
    }
    else {
        console.log("invalid");
    }
}

function multiArrayIncDec(outerArrayIndex, userDirection, multiArray) {
    if (userDirection == "up") {
        let currentIndex = multiArray[outerArrayIndex];
        let previndex = multiArray[outerArrayIndex - 1];
        multiArray[outerArrayIndex] = previndex;
        multiArray[outerArrayIndex - 1] = currentIndex;
        console.log(multiArray);
    }
    else {
        let currentIndex = multiArray[outerArrayIndex];
        let nextIndex = multiArray[Number(outerArrayIndex) + 1];
        multiArray[outerArrayIndex] = nextIndex;
        multiArray[Number(outerArrayIndex) + 1] = currentIndex;
        console.log(multiArray);
    }
}

function CreateDuplicate(outerArrayIndex, multiArray) {
    if ((outerArrayIndex < multiArray.length) && (outerArrayIndex >= 0)) {
        multiArray.splice(outerArrayIndex, 0, multiArray[outerArrayIndex]);
        console.log(multiArray);
    }
    else {
        console.log("invalid");
    }
}

function removeItem(outerArrayIndex, multiArray) {
    if ((outerArrayIndex < multiArray.length) && (outerArrayIndex >= 0)) {
        multiArray.splice(outerArrayIndex, 1);
        console.log(multiArray);
    }
    else {
        console.log("invalid");
    }
}


// removeItem(outerArrayIndex, multiArray);
// CreateDuplicate(outerArrayIndex, multiArray);
// multiArraySwap(outerArrayIndex, userDirection, multiArray);

function opAll(outerArrayIndex, userDirection = null, multiArray){
    if (outerArrayIndex && userDirection && multiArray){
        console.log("first");
        multiArraySwap(outerArrayIndex, userDirection, multiArray);
    }
    else{
        console.log("second");
        console.log(userDirection);
        removeItem(outerArrayIndex, multiArray);
        CreateDuplicate(outerArrayIndex, multiArray);
    }
}

opAll(outerArrayIndex, userDirection, multiArray);