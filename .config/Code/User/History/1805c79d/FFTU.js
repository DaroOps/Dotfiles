import { eventBus } from "../../global.js";

export class PlaylistTracker extends HTMLElement {
    id;
  
    constructor(id) {
      super();
      this.attachShadow({ mode: "open" });
      eventBus.subscribe("albumClicked", this.render.bind(this))
      this.id = id;
    }
    
    connectedCallback() {
        this.render();
        // <link rel="stylesheet" href="../css/playlistTracker.css">
        let id ="5y6w2N9XrhP93lAZwfXmT8" 
        this.shadowRoot.innerHTML = `
        <iframe class="playlist-iframe" src="https://open.spotify.com/embed/album/${id}" frameborder="0" allowtransparency="true"></iframe>
      `;
    }
    
    static get observedAttributes() {
      return ['uri', 'id'];
    }
      
    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this.render()
            console.log("rerender", customId);

          
        
            // this.id = newValue.split(":").pop()
        }
    }
  
    render() {
      
      
    }
  

  }