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
        const imgUrl = this.getAttribute();

        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/albumCard.css">
            <div class="item-playable-container">
                    <img src="https://i.scdn.co/image/ab67616d00001e02fa258529452f4ed34cc961b1" alt="img">
                    <p>Item Name</p>
                    <small>item-category</small>
            </div>
       `;
    }

}



