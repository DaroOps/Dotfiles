export const initMobile = ()=>{

    document.addEventListener("load", ()=>{
        const buttonDiscover  = document.querySelector('.discover-view')
        const buttonPlayer = document.querySelector('.player-view')
        const buttonList = document.querySelector('.tracklist-view')




    });
}


const activeListener = (elementReference, callback)=>{
    elementReference.addEventListener("click", callback())    
}

const activeDiscoverView = ()=>{
    const discover  = document.querySelector('.discover')
    const player = document.querySelector('.player')
    const tracklist = document.querySelector('.tracklist')

    discover.classList.add('active')
    player.classList.remove('active')
    tracklist.classList.remove('active')
}


