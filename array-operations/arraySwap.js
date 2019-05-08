const a = [20, 30, 40, 70, 80];
console.log(a);
const args = process.argv.slice(2);
const [userIndex, userDirection] = args;
console.log(userIndex);
console.log(userDirection);

function swap(userIndex, userDirection, a) {
  if ((userIndex >= 0) && (userIndex < a.length)) {
    if (((userIndex == 0) && (userDirection == "up")) || ((userIndex == (a.length - 1)) && (userDirection == "down"))) {
      console.log("invalid");
    } else {
      incDec(userIndex, userDirection, a);
    }
  }
  else{
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

function CreateDuplicate(userIndex, a){
  if ((userIndex < a.length) && (userIndex >= 0)){
    a.splice(userIndex, 1, a[userIndex], a[userIndex]);
    console.log(a);
  }
  else{
    console.log("invalid");
  }
}

function removeItem(userIndex, a){
  if ((userIndex < a.length) && (userIndex >= 0)) {
    a.splice(userIndex, 1);
    console.log(a);
  }
  else {
    console.log("invalid");
  }
}

removeItem(userIndex, a)
CreateDuplicate(userIndex, a)
swap(userIndex, userDirection, a)