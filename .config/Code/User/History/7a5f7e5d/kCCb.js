import {formatTime, eventBus} from "../../global.js"

export class MusicPlayer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.isPlaying = false;
        this.isRandom = false;
        this.isRepeated = false;
        this.audioElement;
        this.playListElements = []
        // eventBus.subscribe('trackClicked', this.render.bind(this));
    }

    static get observedAttributes() {
        return ['track-name', 'track-artist', 'img-url', 'audio-url']
    }

    connectedCallback() {
        this.render()

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const trackName = this.getAttribute('track-name') || "";
        const trackArtist = this.getAttribute('track-artist') || "";
        const imgUrl = this.getAttribute('img-url');
        const trackAudio = this.getAttribute('audio-url');

        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="../css/musicPlayer.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />

        <div class="music-player">
            <div class="img-container skeleton">
                <img loading="lazy" src="${imgUrl}" alt="">
            </div>

            <div class="player-track-info">
                <strong >${trackName}</strong>
                <small>${trackArtist}</small>
            </div>

            <div class="progress-container">
                <span id="progress-min">-:--</span>
                <input id="progress" class="progress" type="range" value="0" step="0.1" min="0" max="100" />
                <audio id="audio" src=${trackAudio}></audio>
                <span id="progress-max">-:--</span>
            </div>
                
            
            <div class="control">
				<div class="btn btn-repeat">
					<i class="fas fa-redo"></i>
				</div>
				<div class="btn btn-prev">
					<i class="fas fa-step-backward"></i>
				</div>
				<div class="btn btn-toggle-play">
					<i class="fas fa-pause icon-pause"></i>
					<i class="fas fa-play icon-play"></i>
				</div>
				<div class="btn btn-new">
					<i class="fas fa-step-forward"></i>
				</div>
				<div class="btn btn-random">
					<i class="fas fa-random"></i>
				</div>
			</div>
        </div>
       `;

       const imageContainer = this.shadowRoot.querySelector('.img-container');

        imageContainer.querySelector('img').addEventListener('load', ()=>{
         imageContainer.classList.remove('skeleton');
        })

        this.managAddEvent();
        this.shadowRoot.querySelector('.btn.btn-toggle-play').click()
        this.isRandom?this.shadowRoot.querySelector('.btn.btn-random').click(): null;
    }

    managAddEvent() {
        const btnPlay = this.shadowRoot.querySelector('.btn.btn-toggle-play')
        const progress = this.shadowRoot.querySelector(".progress");
        const audio = this.shadowRoot.querySelector('audio');
        const progressMin = this.shadowRoot.querySelector("#progress-min");
        const progressMax = this.shadowRoot.querySelector("#progress-max");
        const btnLoop = this.shadowRoot.querySelector(".btn.btn-repeat");
        const btnRand = this.shadowRoot.querySelector(".btn.btn-random");
        const btnPrev = this.shadowRoot.querySelector(".btn.btn-prev");
        const btnNext = this.shadowRoot.querySelector(".btn.btn-new");

       

        progress.addEventListener("input", () => {
            const seekTime = audio.duration * (progress.value / 100);
            audio.currentTime = seekTime;
        });
        
        audio.ontimeupdate = function () {
            const progressPercent = Math.floor(
                (this.currentTime / audio.duration) * 100
            );
    
            progress.value = progressPercent;
            progressMin.textContent = formatTime(this.currentTime)
        };

        audio.addEventListener("ended", ()=>{
            if(this.isRandom){
                eventBus.publish('randTrack', null)
            }
            else{
                btnNext.click()
            }

        })

        audio.addEventListener('loadedmetadata', () => {
           progressMin.textContent = "0:00"
           progressMax.textContent = formatTime(audio.duration)
           console.log("laod new data");
        });

        
        btnPlay.addEventListener('click', () => {

            this.isPlaying = !this.isPlaying
            if (this.isPlaying) {
                btnPlay.classList.add('playing')
                audio.play()
            } else {
                btnPlay.classList.remove('playing')
                audio.pause()
            }

            console.log("isPlaying", this.isPlaying);
        })

        btnLoop.addEventListener('click', () => {

            this.isRepeated = !this.isRepeated
            if (this.isRepeated) {
                btnLoop.classList.add('active')
                audio.loop = this.isRepeated;
            } else {
                btnLoop.classList.remove('active')
                audio.loop = this.isRepeated;
            }

            console.log("isLoop", this.isRepeated);
        })

        btnRand.addEventListener('click', ()=>{
            this.isRandom = !this.isRandom
            if (this.isRandom) {
                btnRand.classList.add('active')
            } else {
                btnRand.classList.remove('active')
            }

            console.log("isLoop", this.isRandom);
        })

        btnPrev.addEventListener('click', ()=>{
            eventBus.publish('prevTrack', null)
            console.log("clcikPrev");
        })

        btnNext.addEventListener('click', ()=>{
            eventBus.publish('nextTrack', null)
            console.log("clcikNext");
        })
    }

}

