export class TrackCard extends HTMLElement{
    id
    constructor(id){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        
        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="../css/trackCard.css">
       
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



