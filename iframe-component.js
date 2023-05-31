import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';


@customElement('form-plugin-iframe')
export class FormPluginIframe extends LitElement {
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
  name = 'Hello';
  
  @property()
  title = 'Hello';
  
  @property()
  src = 'https://stackoverflow.com/';
  
  @property({ type: Number })
  height = 500;
  
  render() {
    console.log("Props", {
      name: this.name,
      title: this.title,
      src: this.src,
      height: this.height,
    });

    let styles = { height: this.height + 'px' };
  
    return html`
      <iframe
        class="frame"
        style=${styleMap(styles)}
        .name=${this.name}
        allow="geolocation *; microphone; camera"
        .title=${this.title}
        src=${this.src}
      ></iframe>
    `;
  }
  
}
