export class AlbumCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return ['item-name', 'item-category', 'img-url'];
    }

    connectedCallback(){
        this.render();    
    }

    atrributeChangeCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this.render()
        }
    }

    render(){
        const itemName = this.getAttribute('item-name' )|| 'Item Name';
        const itemCategory = this.getAttribute('item-category') || 'Item Category'; 
        const imgUrl = this.getAttribute('img-url') ;
        
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/albumCard.css">
            <div class="item-playable-container">
                    <div class="">
                        <img src="${imgUrl}" alt="img">
                    </div>
                    <p>${itemName}</p>
                    <small>${itemCategory}</small>
            </div>
       `;
    }

}



