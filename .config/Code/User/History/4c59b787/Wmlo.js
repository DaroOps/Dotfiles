let discover 
lets player 
let tracklist  

export const initMobile = ()=>{

    document.addEventListener("load", ()=>{
        const buttonDiscover  = document.querySelector('.discover-view')
        const buttonPlayer = document.querySelector('.player-view')
        const buttonList = document.querySelector('.tracklist-view')

        discover  = document.querySelector('.discover')
        player = document.querySelector('.player')
        tracklist = document.querySelector('.tracklist')
    });
}


const activeListener = (elementReference, callback)=>{
    elementReference.addEventListener("click", callback())    
}

const activeDiscoverView = ()=>{
    

    discover.classList.add('active')
    player.classList.remove('active')
    tracklist.classList.remove('active')
}


