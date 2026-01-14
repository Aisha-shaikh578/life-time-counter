let isDOB = false;
const icon = document.querySelector('.icon');
const btn = document.querySelector('.btn');
const date = document.querySelector('.date');
const DOB = document.querySelector('.DOB');
const mainDiv = document.querySelector('.main-div');
const afterDOBText = document.querySelector('.afterDOBText');

const years = document.querySelector('.years');
const months = document.querySelector('.months');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


function toggleDOB () {
  if (isDOB) {
    date.classList.add('hide');
  } else {
    date.classList.remove('hide');
  }
  isDOB = !isDOB;
};

function updateAge() {
  const currentDate = new Date();
  const dateDiff = currentDate - new Date(DOB.value);
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30.44)) % 12;
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;
  
  years.innerHTML = year;
  months.innerHTML = month;
  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
}

function handleDOB() {
  if (isDOB) {
    mainDiv.classList.add('hide');
    afterDOBText.classList.remove('hide');
    date.classList.add('hide');
    setInterval(updateAge,1000);
  } else {
    mainDiv.classList.remove('hide');
    afterDOBText.classList.add('hide');
  }
}

handleDOB();

icon.addEventListener('click', toggleDOB);
btn.addEventListener('click', handleDOB);