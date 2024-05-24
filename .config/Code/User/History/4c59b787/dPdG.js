const discover  = document.querySelector('.discover')
const player = document.querySelector('.player')
const tracklist = document.querySelector('.tracklist')

export const initMobile = ()=>{
    const buttonDiscover  = document.querySelector('.discover-view')
    const buttonPlayer = document.querySelector('.player-view')
    const buttonList = document.querySelector('.tracklist-view')

    console.log('init M<OBILE', buttonPlayer);
    
    activeListener(buttonDiscover, activeDiscoverView);
    activeListener(buttonPlayer, activePlayerView())
    activeListener(buttonList, activeTracklistView)
   
    activeDiscoverView()
   
}


const activeListener = (elementReference, callback)=>{
    elementReference.addEventListener("click", ()=>{callback})    
}

const activeDiscoverView = ()=>{
    discover.classList.add('active')
    player.classList.remove('active')
    tracklist.classList.remove('active')

    console.log('performclik');
}

const activePlayerView = ()=>{
    discover.classList.remove('active')
    player.classList.add('active')
    tracklist.classList.remove('active')

    console.log('performclik');

}

const activeTracklistView = ()=>{
    discover.classList.remove('active')
    player.classList.remove('active')
    tracklist.classList.add('active')

    console.log('performclik');

}



