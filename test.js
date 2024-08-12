console.log("Welcome to Spotify")
let audioelement= new Audio('1.mp3');
let audioelement1= new Audio('2.mp3');
let audioelement2= new Audio('3.mp3');
let master= document.getElementById('master')
let probar= document.getElementById('probar')


document.addEventListener('DOMContentLoaded', function() {
    const master = document.getElementById("master");
    master.addEventListener('click', () => {
      if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        master.classList.remove('fa-circle-play');
        master.classList.add('fa-circle-pause')
      }
      else if (audioelement.play || audioelement.currentTime >= 0) {
        audioelement.pause();
        master.classList.add('fa-circle-play');
        master.classList.remove('fa-circle-pause')
      }
    });


    audioelement.addEventListener('timeupdate', () => {
        console.log('timeupdate');
        let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
        console.log(progress);
       let probar = document.getElementById("probar");
        probar.value = progress;
      });
      
  
let jag = document.getElementById('jag')
jag.addEventListener('click', () =>{
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        master.classList.remove('fa-circle-play');
        master.classList.add('fa-circle-pause')
      }
      else if (audioelement.play || audioelement.currentTime >= 0) {
        audioelement.pause();
        master.classList.add('fa-circle-play');
        master.classList.remove('fa-circle-pause')
      }
})
audioelement1.addEventListener('timeupdate', () => {
  console.log('timeupdate');
  let progress = parseInt((audioelement1.currentTime / audioelement1.duration) * 100);
  console.log(progress);
 let probar = document.getElementById("probar");
  probar.value = progress;
});

let jag1 = document.getElementById('jag1')
jag1.addEventListener('click', () =>{
    if (audioelement1.paused || audioelement1.currentTime <= 0) {
        audioelement1.play();
        master.classList.remove('fa-circle-play');
        master.classList.add('fa-circle-pause')
      }
      else if (audioelement1.play || audioelement1.currentTime >= 0) {
        audioelement1.pause();
        master.classList.add('fa-circle-play');
        master.classList.remove('fa-circle-pause')
      }
})
audioelement2.addEventListener('timeupdate', () => {
  console.log('timeupdate');
  let progress = parseInt((audioelement2.currentTime / audioelement2.duration) * 100);
  console.log(progress);
 let probar = document.getElementById("probar");
  probar.value = progress;
});
let jag2 = document.getElementById('jag2')
jag2.addEventListener('click', () =>{
    if (audioelement2.paused || audioelement2.currentTime <= 0) {
        audioelement2.play();
        master.classList.remove('fa-circle-play');
        master.classList.add('fa-circle-pause')
      }
      else if (audioelement2.play || audioelement2.currentTime >= 0) {
        audioelement2.pause();
        master.classList.add('fa-circle-play');
        master.classList.remove('fa-circle-pause')
      }
})
    });
