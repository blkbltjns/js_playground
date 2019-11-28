import CustomElementBase from "./CustomElementBase.js";
import InnerBottomLeftElement from "./InnerBottomLeftElement.js";
import InnerBottomMiddleElement from "./InnerBottomMiddleElement.js";
import InnerBottomRightElement from "./InnerBottomRightElement.js";

export default class InnerBottomElement extends CustomElementBase {
    onConnected(rootElement) {

        let divElement = document.createElement('div');
        divElement.innerText = 'therandomdiv';
        divElement.id = 'therandomdiv';
        rootElement.append(divElement);

        rootElement.append(document.createCustomElement(InnerBottomLeftElement));
        rootElement.append(document.createCustomElement(InnerBottomMiddleElement));
        rootElement.append(document.createCustomElement(InnerBottomRightElement));

        return `
            :host {
                background: var(--main-bg-color);                
                grid-auto-flow: column;
            }

            #therandomdiv {
                background: var(--secondary-bg-color);
            }
        `;
    }
}