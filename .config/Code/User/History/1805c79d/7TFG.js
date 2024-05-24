import { eventBus } from "../../global.js";

export class PlaylistTracker extends HTMLElement {
    id;
  
    constructor(id) {
      super();
      this.attachShadow({ mode: "open" });
      eventBus.subscribe("albumClicked", this.render.bind(this))
      
    }
    
    connectedCallback() {
        this.render();
        // <link rel="stylesheet" href="../css/playlistTracker.css">
       
    }
    
    static get observedAttributes() {
      return ['uri', 'id'];
    }
      
    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this.render()
            console.log("rerender", newValue);

          
        
            // this.id = newValue.split(":").pop()
        }
    }
  
    render(id="5y6w2N9XrhP93lAZwfXmT8") {
      // let id ="" 
      this.shadowRoot.innerHTML = `
      <iframe class="playlist-iframe" src="https://open.spotify.com/embed/album/${id}" frameborder="0" allowtransparency="true"></iframe>
      `;
      
    }
  

  }