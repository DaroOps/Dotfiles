import { eventBus } from "../../global.js";

export class DropCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.manageClickCard = this.manageClickCard.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.listenSignal
        eventBus.subscribe(this.listenSignal, this.signalResult.bind(this))
    }

    static get observedAttributes(){
        return ['owner', 'title', 'emit-signal', 'listen-signal']
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
        const ownerGroup=this.getAttribute('owner') || 'TEST';
        const titleDescription=this.getAttribute('title') || 'testing';
        const emitSignal = this.getAttribute('emit-signal') || 'test-signal';
        const listenSignal = this.getAttribute('listen-signal') || 'test-listen-signal';

        this.listenSignal = listenSignal

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

       this.shadowRoot.addEventListener('click', this.manageClickCard(emitSignal))
    }

    manageClickCard(emitSignal){
        console.log("isEmpty",this.isEmpty());
        eventBus.publish(emitSignal, null)
        console.log('senial emitida');
    }

    isEmpty(){
        let [, report__container] = this.shadowRoot.querySelector("#queryDetails").children
        return !report__container.innerHTML?true:false
    }

    signalResult(data){
        console.log(data);
    }

}
