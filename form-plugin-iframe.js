import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit-html/directives/style-map.js";

@customElement("form-plugin-iframe")
export class ZwcIframe extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      width: 100%;
      display: block;
    }
    .frame {
      display: inline-block;
      height: 100%;
      width: 100%;
      background-color: transparent;
      border: none;
    }
  `;

  @property()
  name = "iQProTokenizer";

  @property()
  title = "iQ Pro Tokenizer";

  @property()
  src = "https://sandbox.basysiqpro.com/tokenizer/tokenizer.js";

  @property({ type: Number })
  height = 500;

  render() {
    let styles = { height: this.height + "px" };

    return html`<iframe
      class="frame"
      style=${styleMap(styles)}
      .name=${this.name}
      allow="geolocation *; microphone; camera"
      .title=${this.title}
      src=${this.src}
    ></iframe>`;
  }
}
