// Leave comments on my gameplay, such as: "Wow, what a fun tame this is."

subtractCounter();
addCounter();
clickHeart();
pauseEverything();
clickSubmit();


let counter = document.querySelector('h1#counter');
let numCounter = parseInt(counter.innerHTML);

function timerIncrease() {
  numCounter += 1;
  counter.innerHTML = numCounter;
}

let increaseTime;
function countUp() {
  increaseTime = setInterval(timerIncrease, 1000);
}

countUp();

function subtractCounter() {
  const minus = document.getElementById('minus');
  minus.addEventListener('click', subtract);
}

function subtract() {
  numCounter -= 1;
  counter.innerHTML = numCounter;
}

function addCounter() {
  const plus = document.getElementById('plus');
  plus.addEventListener('click', add);
}

function add() {
  numCounter += 1;
  counter.innerHTML = numCounter;
}

function clickHeart() {
  const heart = document.getElementById('heart');
  heart.addEventListener('click', handleLike);
}

const likesObj = {};
const likes = document.querySelector('ul.likes');
let keys = Object.keys(likesObj);

function handleLike() {
  const li = document.createElement('li');
  const count = counter.innerHTML;
  if (likesObj[count] === undefined) {
    likesObj[count] = 1;
  } else {
    likesObj[count] = likesObj[count] + 1;
  }
  let keys = Object.keys(likesObj);
  // console.log('keys', keys);
  //console.log('object', likesObj)
  // for (var i = 0; i < keys.length; i++) {
  //   console.log('keys', keys[i]);
  // }
  let liId = document.getElementById(count);
  // console.log('id', liId);
  li.innerHTML = `${count} has been liked ${likesObj[count]}`;
  if (liId === null) {
    li.id = count;
    likes.append(li);
  } else {
    let newLike = document.getElementById(count);
    newLike.innerHTML = `${count} has been liked ${likesObj[count]}`;
    // console.log('newlike', newLike);
  }
  // console.log('new id', liId);
  // if the count doesn't exist
    // create new list item
  // if count already exists
    // just add the current count in the object to the already listed item  
  // console.log('li inner', li.innerHTML);
  // likes.append(li);
}


function pauseEverything() {
  const pause = document.getElementById('pause');
  pause.addEventListener('click', clickPause);
}

function clickPause() {
  const pause = document.getElementById('pause');
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  const heart = document.getElementById('heart');
  const submit = document.getElementById('submit');
  if (pause.innerHTML === ' pause ') {
    clearInterval(increaseTime);
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    pause.innerHTML = ' resume ';
  } else {
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    pause.innerHTML = ' pause ';
    increaseTime = setInterval(timerIncrease, 1000);
  }
}

function clickSubmit() {
  const submitBox = document.getElementById('comment-input');
  const submitButton = document.getElementById('submit');
  const submitForm = document.getElementById('comment-form');
  const list = document.getElementById('list');
  // console.log(submitForm);
  // console.log(submitBox);
  // console.log(submitButton);
  submitForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.children[0].value);
    const comment = e.target.children[0];
    // console.log(comment);
    // console.log('comment', comment.value);
    const p = document.createElement('p');
    p.textContent = comment.value;
    list.append(p);
    submitForm.reset();
  })
}