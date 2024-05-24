import { eventBus } from "../../global.js";

export class BentoFinded extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        eventBus.subscribe('dataReceived', this.render.bind(this));
        // eventBus.subscribe('contentFull', this.onPageLoaded.bind(this))
        this.firstAlbumCard
    }

    connectedCallback() {
        this.render();
    }

    render(data = null) {
        if (data) {
            const albums = data.albums.items;
            const fragment = document.createDocumentFragment();

            this.shadowRoot.innerHTML = /*html*/`
                <link rel="stylesheet" href="../css/bentoFinded.css">
                <div class="bento-finded">
                    <section class="bento-grid"></section>
                </div>
            `;

            albums.forEach(album => {
                const albumCard = document.createElement('album-card');
                albumCard.setAttribute('item-name', album.data.name);
                albumCard.setAttribute('item-category', album.data.artists?.items[0]?.profile.name);
                albumCard.setAttribute('img-url', album.data.coverArt?.sources[0]?.url);
                let [origin, endpoint, id] = album.data.uri.split(":");
                albumCard.id = id;

                albumCard.addEventListener('click', () => {
                    this.handleAlbumClick(id);
                });

                fragment.appendChild(albumCard);
            });

            this.shadowRoot.querySelector('.bento-grid').appendChild(fragment);

            this.onPageLoaded(this.shadowRoot.querySelector("album-card"))

        } else {
            this.shadowRoot.innerHTML = /*html*/`
                <link rel="stylesheet" href="../css/bentoFinded.css">
                <div class="bento-finded">
                    <section class="bento-grid">
                        <album-card></album-card>
                        <album-card></album-card>
                        <album-card></album-card>
                        <album-card></album-card>
                    </section>
                </div>
            `;
        }

        this.onPageLoaded()
    }

    handleAlbumClick(id) {
        eventBus.publish('albumClicked', id);
    }

    onPageLoaded(element) {
        console.log("trying click again");

        eventBus.publish('albumClicked', element.id)
        console.log(element);
        // element.click();
    
    }

}
