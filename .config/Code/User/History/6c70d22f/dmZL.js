import { eventBus } from "../../global.js";

export class DropCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.manageClickCard = this.manageClickCard.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.listenSignal = null;
    this.emitSignal = null;
  }

  static get observedAttributes() {
    return ['owner', 'title', 'emit-signal', 'listen-signal'];
  }

  connectedCallback() {
    this.render();
    this.listenSignal = this.getAttribute('signal-identifier')
    eventBus.subscribe(this.listenSignal, this.signalResult.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const ownerGroup = this.getAttribute('owner') || 'TEST';
    const titleDescription = this.getAttribute('title') || 'testing';

    this.shadowRoot.innerHTML = /*html*/`
      <link rel="stylesheet" href="css/dropCard.css">
      <details id="queryDetails">
        <summary>
          <div class="details__description">${ownerGroup}: </div>
          <div class="details__container">
            <p class="moving-text">${titleDescription}</p>
          </div>
        </summary>
        <div class="report__container"></div>
      </details>
    `;

    this.shadowRoot.querySelector("#queryDetails").addEventListener('click', this.manageClickCard);
  }

  manageClickCard() {
    const isEmpty = this.isEmpty();
    console.log("isEmpty", isEmpty);

    if (isEmpty) {
      eventBus.publish(this.emitSignal, null);
      console.log('señal emitida');
    }
  }

  isEmpty() {
    const [, reportContainer] = this.shadowRoot.querySelector("#queryDetails").children;
    return !reportContainer.innerHTML;
  }

  signalResult(data) {
    console.log(data);
   
  }
}