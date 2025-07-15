let playlist = []; // tableau global pour les musiques
let currentIndex = null;

let vShuffle = true;

document.addEventListener("DOMContentLoaded", function () {
    fetch('music.json')
        .then(response => response.json())
        .then(data => {
            let vIndex = 0;
            while (vIndex < data.length) {

                //On crée un objet que l'on pourra mettre dans notre tableau (structure en C)
                let musicItem = {
                    title: data[vIndex].title,
                    author: data[vIndex].author,
                    duration: data[vIndex].duration,
                    path: data[vIndex].path
                };

                playlist.push(musicItem); // On l'ajoute l'élement
                //console.log(playlist[vIndex]); // Pour le débugage
                vIndex++; // N'oubliez pas d'incrémenter vIndex !
            }
            console.log("Playlist chargée et construite :", playlist);
        })
        .catch(error => {
            console.error("Erreur lors du chargement de la musique :", error);
        });
});


const audioPlayer = document.getElementById("audioPlayer");
const vynilElement = document.querySelector(".vinyl");
const shuffleElement = document.getElementById("shuffle");
const progressBar = document.querySelector('.progressBar');
const progress = document.querySelector('.progress');
updateShuffle();
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;

}



audioPlayer.addEventListener("timeupdate", function () {
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = percentage + "%";

    // Mise à jour du temps
    const current = formatTime(audioPlayer.currentTime);
    const total = isNaN(audioPlayer.duration) ? "00:00" : formatTime(audioPlayer.duration);

    const timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.textContent = `${current} / ${total}`;
});
vynilElement.addEventListener("click", function () {
   play(currentIndex);
});
progressBar.addEventListener("click", function (e) {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const ratio = clickX / width;
    audioPlayer.currentTime = ratio * audioPlayer.duration;
});

audioPlayer.addEventListener("ended", function (e) {
    playNext();
})
function play(index) {
    if (!playlist[index]) {
        console.warn("No music at index:", index);
        return;
    }

    console.log(currentIndex)
    if (currentIndex === index) {
        // toggle pause/play
        if (audioPlayer.paused) {
            updateVinylColorWithIndex(currentIndex);
            audioPlayer.play();
        } else {
            updateVinylColorWithIndex(-1);
            audioPlayer.pause();
        }
    } else {
        currentIndex = index;
        audioPlayer.src = playlist[index].path;
        updateAudioDisplayInfo();
        audioPlayer.play();
    }
}

function updateVinylColorWithIndex(index) {
    const vinyl = document.querySelector('.vinyl');
    if (index === -1) {
        vinyl.style.backgroundColor = `hsl(0, 89%, 35%)`;
    } else {
        const hue = (index * 137.508) % 360;
        vinyl.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
    }
}

function updateAudioDisplayInfo() {
    let vATHAudio = document.getElementById("audioInfo");

    vATHAudio.innerHTML = '';

    let vAudioTitle = document.createElement('h1');
    vAudioTitle.textContent = "Titre: " + playlist[currentIndex].title;

    let vAudioAuthor = document.createElement('p');
    vAudioAuthor.textContent = "Auteur: " + playlist[currentIndex].author;


    vATHAudio.appendChild(vAudioTitle);
    vATHAudio.appendChild(vAudioAuthor);

    updateVinylColorWithIndex(currentIndex);
}

function getRandomInt() {
    const max = playlist.length;
    let vResult;
    do {
        vResult = Math.floor(Math.random() * max);
    } while (vResult === currentIndex);
    return vResult;
}



function playPrevious() {
    if (currentIndex === null) {
        play(0);
    } else {
        if (currentIndex === 0) {
            play(playlist.length - 1);
        } else {
            play(currentIndex - 1);
        }
    }
}

function playNext() {
    if (currentIndex === null || currentIndex >= playlist.length - 1) {
        play(0); // Loop back to start
    } else {
        if (vShuffle) {
            play(getRandomInt())
        } else {
            play(currentIndex + 1);
        }
    }
}

function updateShuffle() {
    vShuffle = !vShuffle;
    if(vShuffle){
        shuffleElement.style.border="none";
    }
    else{
        shuffleElement.style.border="3px solid red";
    }
}