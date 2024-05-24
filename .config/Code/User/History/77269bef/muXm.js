export class DropItem extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return ['item-title', 'key', 'value']
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this.render();
        }
    }

    render(){
        const ownerGroup=this.getAttribute('item-title') || 'TEST';
        const titleDescription=this.getAttribute('title') || 'testing';
    

        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="css/dropCard.css">
        <details id="queryDetails">
                <summary>
                    <div class="details__description">${ownerGroup}: </div>
                        <div class="details__container">
                            <p class= "moving-text">${titleDescription}</p>
                        </div>
                </summary>
                <div class="report__container"></div>
        </details>
       `;

       this.shadowRoot.addEventListener('click', this.manageClickCard)
    }

    manageClickCard(){
        console.log("isEmpty",this.isEmpty());
        
    }

    isEmpty(){
        let [, report__container] = this.shadowRoot.querySelector("#queryDetails").children
        return !report__container.innerHTML?true:false
    }
}

