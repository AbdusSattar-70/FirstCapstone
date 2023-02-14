/* eslint-disable linebreak-style */

/* mobile menu open close js */
const openBtn = document.querySelector('.open_btn');
const closeBtn = document.querySelector('.close_btn');
const mobMenu = document.querySelector('.mob-menu');
const mobItems = document.querySelectorAll('.mob-items');
openBtn.addEventListener('click', () => {
  mobMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
});

mobItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobMenu.style.display = 'none';
  });
});

// time countdown

const countDownDate = new Date('apr 26, 2023 15:37:25').getTime();
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML = `${days}Days ${hours}Hours ${
    minutes}Mins ${seconds}Sec `;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

/* dynamicaly load data here */

const speakersInfo = [
  {
    img: 'images/speakers/speaker1.jpg',
    name: 'Akhil Puddder',
    skills:
      'Music Producer/ Composer/ Arranger and songwriter/ Associate Music Professor at Harvard.',
    description: 'Very Talented and Versatile producer. Recieved the Best Gospel Music Producer and Mix Engineer (GMA) Award in 2022.',
  },
  {
    img: 'images/speakers/speaker2.png',
    name: 'Lata Mengeskar',
    skills:
      'Music Producer/ Percussionist/ Arranger and songwriter/ Bassist/ Music Director At Oakwood University.',
    description: 'Very Talented, an elite Keyboardist and Bassist. Renowned for his tastful bass lines.',
  },
  {
    img: 'images/speakers/speaker3.jpg',
    name: 'Alia Buttacharia',
    skills:
      'Music Producer/ Choir Director/ Arranger and songwriter/ Saxophonist/ Vocal and Choral Director Berklee.',
    description: 'Recieved Singer and Artist of the year Award in GMA Awards 2020,his success and talent is very refreshing!',
  },
  {
    img: 'images/speakers/speaker4.jpg',
    name: 'Amir Khan Ali',
    skills:
      'Music Producer/ Composer/ Arranger and songwriter/ Music Director at Sydney University.',
    description: 'Enjoys Music and Perfecting his craft. Widely known for his choral Arrangements and Reharms!',
  },
  {
    img: 'images/speakers/speaker6.jpg',
    name: 'Ayub Bachhu',
    skills:
      'Business Man/ Fender,Ibanez and Nord Brand Ambassador/ Agent for HARMONIX MUSIC SYSTEMS.',
    description: 'A natural businessperson, and brilliant business mind, Yonathan is known for his progressive attitude toward licensing songs and spotting musical talents.',
  },
  {
    img: 'images/speakers/speaker8.jpg',
    name: 'Toyoshri Malhutra',
    skills:
      'Youtube Streamer / Gamer/ Graphics Designer/ Produces Music for Games/ Visual FX Expert',
    description: 'Known for his Problem solving mind, an Elite Gamer, Visual Effects and Graphics design expert and Produced some interesting beats and music Tracks for GTA-V: Roleplay.',
  },
];

function loadData() {
  const speakers = document.querySelector('.musicians');
  speakers.innerHTML = '';
  speakersInfo.forEach((info) => {
    speakers.innerHTML += `
     <div class="speakers">
            <div>
            <img class="speakerImg" src="${info.img}" alt="speakers list image">
            </div>
            <div class="speakerCont">
            <h2>${info.name}</h2>
            <h3 class="skills">${info.skills}</h3>
            <span class="lineSpeaker"></span>
           <p class="descripText">${info.description}</p>
            </div>
       </div> `;
  });
}
loadData();

const moreView = document.querySelector('#more');
const lessView = document.querySelector('#less');
const musicians = document.querySelector('.musicians');
moreView.addEventListener('click', () => {
  musicians.style.display = 'block';
  moreView.style.display = 'none';
  lessView.style.display = 'block';
});
lessView.addEventListener('click', () => {
  musicians.style.display = 'none';
  moreView.style.display = 'block';
  lessView.style.display = 'none';
});