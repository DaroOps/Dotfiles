import { eventBus } from "../../global.js";

export class DropCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.manageClickCard = this.manageClickCard.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.dataEventName = null;
  }

  static get observedAttributes() {
    return ['owner', 'title', 'data-event-name'];
  }

  connectedCallback() {
    this.render();
    this.dataEventName = this.getAttribute('data-event-name');
    eventBus.subscribe(this.dataEventName+"-d", this.handleData.bind(this));
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

    if (isEmpty && this.dataEventName) {
        eventBus.publish(this.dataEventName, null);
        console.log(`Evento ${this.dataEventName} emitido`);
    }
  }

  isEmpty() {
    const [, reportContainer] = this.shadowRoot.querySelector("#queryDetails").children;
    return !reportContainer.innerHTML;
  }

  handleData(data) {

    // <droped-item item-title="Example Title"
    // data='[{"key":"Name","value":"John Doe"},{"key":"Age","value":"30"},{"key":"Occupation","value":"Developer"}]'></droped-item>
    console.log(`Datos recibidos para el evento ${this.dataEventName}:`, data);
  }
}