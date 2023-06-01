import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit-html/directives/style-map.js";

@customElement("iqpro-tokenizer-plugin")
export class IQProTokenizerPlugin extends LitElement {
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
  apiKey = "pub_2IXtdLBw3FIawhtxJrsUYmzaTGr";

  @property()
  url = "https://sandbox.basysiqpro.com/tokenizer/tokenizer.js";

  @property({ type: Number })
  height = 500;

  render() {
    const styles = { height: this.height + "px" };

    return html`
      <iframe
        class="frame"
        style=${styleMap(styles)}
        src=${this.url}
        data-api-key=${this.apiKey}
      ></iframe>
    `;
  }
}
