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
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../css/playlistTracker.css">
        <iframe class="playlist-iframe" src="https://open.spotify.com/embed/album/${this.id}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      `;
    }
  
    static get observedAttributes() {
      return ['uri'];
    }

  }