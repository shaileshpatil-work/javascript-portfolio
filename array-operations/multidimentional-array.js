const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(multiArray);
const args = process.argv.slice(2);
const [outerArrayIndex, innerArrayIndex, userDirection] = args;
console.log(outerArrayIndex);
console.log(innerArrayIndex);
console.log(userDirection);


function swap(userIndex, userDirection, a) {
    if ((userIndex > 0) && (userIndex < a.length)) {
        if (((userIndex == 0) && (userDirection == "up")) || ((userIndex == (a.length - 1)) && (userDirection == "down"))) {
            console.log("invalid");
        } else {
            incDec(userIndex, userDirection, a);
        }
    }
    else {
        console.log("invalid");
    }
}

function incDec(userIndex, userDirection, userArray) {
    if (userDirection == "up") {
        const index = userArray[userIndex];
        const previndex = userArray[userIndex - 1];
        userArray[userIndex] = previndex;
        userArray[userIndex - 1] = index;
        console.log(userArray);
    } else {
        const nextIndex = parseInt(userIndex) + 1;
        const currentValue = userArray[userIndex];
        const nextValue = userArray[nextIndex];
        userArray[userIndex] = nextValue;
        a[nextIndex] = currentValue;
        console.log(a);
    }
}

function multiArraySwap(outerArrayIndex, innerArrayIndex, userDirection, multiArray) {
    if (innerArrayIndex > 0 && innerArrayIndex < multiArray[innerArrayIndex].length) {
        if (((innerArrayIndex == 0) && (userDirection == "up")) || ((innerArrayIndex == (multiArray.length - 1)) && (userDirection == "down"))) {
            console.log("invalid");
        }
        else {
            multiArrayIncDec(outerArrayIndex, innerArrayIndex, userDirection, multiArray);
        }
    }
    else {
        console.log("invalid");
    }
}

function multiArrayIncDec(outerArrayIndex, innerArrayIndex, userDirection, multiArray) {
    if (userDirection == "up") {
        let currentIndex = multiArray[outerArrayIndex][innerArrayIndex];
        let previndex = multiArray[outerArrayIndex][Number(innerArrayIndex) - 1];
        multiArray[outerArrayIndex][Number(innerArrayIndex)] = previndex;
        multiArray[outerArrayIndex][Number(innerArrayIndex) - 1] = currentIndex;
        console.log(multiArray);
    }
    else {
        let currentIndex = multiArray[outerArrayIndex][innerArrayIndex];
        let nextIndex = multiArray[outerArrayIndex][Number(innerArrayIndex) + 1];
        multiArray[outerArrayIndex][Number(innerArrayIndex)] = nextIndex;
        multiArray[outerArrayIndex][Number(innerArrayIndex) + 1] = currentIndex;
        console.log(multiArray);
    }
}

function CreateDuplicate(outerArrayIndex, innerArrayIndex, multiArray) {
    if ((innerArrayIndex < multiArray[outerArrayIndex].length) && (innerArrayIndex > 0)) {
        multiArray[outerArrayIndex].splice(innerArrayIndex, 0, multiArray[outerArrayIndex][innerArrayIndex]);
        console.log(multiArray);
    }
    else {
        console.log("invalid");
    }
}

function removeItem(outerArrayIndex, innerArrayIndex, multiArray) {
    if ((innerArrayIndex < multiArray[outerArrayIndex].length) && (innerArrayIndex > 0)) {
        multiArray[outerArrayIndex].splice(innerArrayIndex, 1);
        console.log(multiArray);
    }
    else {
        console.log("invalid");
    }
}


removeItem(outerArrayIndex, innerArrayIndex, multiArray);
CreateDuplicate(outerArrayIndex, innerArrayIndex, multiArray);
multiArraySwap(outerArrayIndex, innerArrayIndex, userDirection, multiArray);