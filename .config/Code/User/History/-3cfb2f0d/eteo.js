export class TrackCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return ['track-name', 'track-name', 'img-url']
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(){
        this.render();
    }


    
    connectedCallback(){
        
        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="../css/trackCard.css">
        <div class="track-container">
            <div class="track-item">
                <img src="https://i.scdn.co/image/ab67616d00001e02fa258529452f4ed34cc961b1" alt="">
                <div class="track-info">
                    <p>Track Name</p>
                    <small>owner</small>
                </div>
            </div>
        </div>
       `
    }
    // static get observedAttributes(){
    //     return ["uri"];
    // }
    // attributeChangedCallback(name,old,now){
    //     let[nameUri, album, id] = now.split(":")
    //     this.id = id;
    // }
}



