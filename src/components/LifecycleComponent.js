import { LitElement, html, css } from "lit";

class LifecycleComponent extends LitElement {
  static properties = {
    counter: { type: Number },
  };

  static styles = css`
    * {
    } 

    div.container {
        border-style: solid;
        border-width: 5px;
        border-color: red;
    }
  `;

  constructor() {
    super();
    console.log("Constructor called");
    this.counter = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("Connected callback called");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log("Disconnected callback called");
  }

  firstUpdated() {
    super.firstUpdated();
    console.log("First updated callback called");
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    console.log("Updated callback called", changedProperties);
  }

  handleClick() {
    console.log("Button clicked");
    this.counter++;
  }

  render() {
    return html`
        <div class="container">
            <p>This is a Lifecycle Component</p>
            <p>You have clicked the button ${this.counter} times</p>
            <button @click="${this.handleClick}">Click Me</button>
        </div>
      
    `;
  }
}

customElements.define("lifecycle-component", LifecycleComponent);
export default LifecycleComponent;
