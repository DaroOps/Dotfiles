const discover  = document.querySelector('.discover')
const player = document.querySelector('.player')
const tracklist = document.querySelector('.tracklist')

export const initMobile = ()=>{
    const buttonDiscover  = document.querySelector('.discover-view')
    const buttonPlayer = document.querySelector('.player-view')
    const buttonList = document.querySelector('.tracklist-view')


    document.addEventListener("load", ()=>{
      

        buttonList.addEventListener('click', activeTracklistView)
        activeListener(buttonDiscover, activeDiscoverView);
        activeListener(buttonPlayer, activePlayerView())
        activeListener(buttonList, activeTracklistView)

    });
    console.log('init M<OBILE', butt);

    activeDiscoverView()
}


const activeListener = (elementReference, callback)=>{
    elementReference.addEventListener("click", callback)    
}

const activeDiscoverView = ()=>{
    discover.classList.add('active')
    player.classList.remove('active')
    tracklist.classList.remove('active')
}

const activePlayerView = ()=>{
    discover.classList.remove('active')
    player.classList.add('active')
    tracklist.classList.remove('active')
}

const activeTracklistView = ()=>{
    discover.classList.remove('active')
    player.classList.remove('active')
    tracklist.classList.add('active')
}



