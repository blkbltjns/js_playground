import CustomElementBase from "./CustomElementBase.js";
import InnerBottomLeftElement from "./InnerBottomLeftElement.js";
import InnerBottomRightElement from "./InnerBottomRightElement.js";

export default class InnerBottomElement extends CustomElementBase {
    onConnected(rootElement) {
        rootElement.append(document.createCustomElement(InnerBottomLeftElement));
        rootElement.append(document.createCustomElement(InnerBottomRightElement));

        return `
            :host {
                background: var(--main-bg-color);
                grid-auto-flow: column;
            }
        `;
    }
}