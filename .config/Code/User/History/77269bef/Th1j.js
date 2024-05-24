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
        const itemTitle=this.getAttribute('item-title') || 'tileItem ';
        const key=this.getAttribute('key') || 'testKey';
        const value=this.getAttribute('key') || 'testvalue';
    

        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="css/dropCard.css">
        <div class="card__title">
                                <div>Hello, I’m Isaac Fayemi</div>
                            </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Welcome to my figma community file: </b>You can follow me on twitter here</p>
                                    <p><b>Welcome to my figma community file: </b>You can follow me on twitter here</p>
                                    <p><b>Welcome to my figma community file: </b>You can follow me on twitter here</p>
                                    <p><b>Welcome to my figma community file: </b>You can follow me on twitter here</p>
                                    <p><b>Welcome to my figma community file: </b>You can follow me on twitter here</p>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div>Hello, I’m Isaac Fayemi</div>
                            </div> 
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
