import { LitElement, html, css } from 'lit';

class DemoLitComponent extends LitElement {
  static styles = css`
    /* Define your component's styles here */
  `;

  render() {
    return html`
      <!-- Define your component's template here -->
      <h1>Lit Sandbox</h1>
    `;
  }
}

customElements.define('demo-lit-component', DemoLitComponent);
export default DemoLitComponent;