let currentSong = null;
// let pauseBtn=document.querySelector(".play_bar_center");
let playIcon='<img class="cursor play_bar_center center" src="pause_btn.svg" alt="">';
let pauseIcon='<img class="cursor play_bar_center center" src="music_button.svg" alt="">';
const profileHoverElements = document.querySelectorAll('.profile_hover');
profileHoverElements.forEach(profileHoverElement => {
    const playButton = profileHoverElement.querySelector('.play_btn');
    profileHoverElement.addEventListener('mouseenter', () => {
        playButton.style.opacity = '1';
        playButton.style.bottom = '70px';
        const className = profileHoverElement.classList[0];
        play(className);
    });

    profileHoverElement.addEventListener('mouseleave', () => {
        playButton.style.opacity = '0';
        playButton.style.bottom = '50px';
    });
});

const play = (singerName) => {
    const coman_play_btn=document.querySelector(".play_bar #play");
    const playButton = document.querySelector(`.${singerName} .play_btn`);
    const singerArr = ["karan_aujla", "sidhu_moosewala", "Divine", "Badsha", "Ap_dhillon", "Arijit_singh", "khan_bhaini", "Prem_dhillon", "sunny_malton", "bhoemia", "tarsem_jasar", "shub", "diljit", "parmish", "dilpreet_dillhon"];
    const singerId = singerArr.includes(singerName) ? `#${singerName}` : null;
    const songName = document.querySelector(singerId);
    let playing_song;
    playButton.addEventListener('click', () => {
        if (currentSong) {
            currentSong.pause();
            currentSong=null;
        }
        songName.currentTime=0;
        songName.play();
        currentSong = songName;
        playing_song=songName;
    });
    coman_play_btn.addEventListener('click',()=>{
        if (currentSong) {
            currentSong.pause();
            currentSong=null;
        }
        if(currentSong==null){
            playing_song.play();
            currentSong=playing_song;
        }
    })
}

