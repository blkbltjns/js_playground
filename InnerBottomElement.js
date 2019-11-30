import Program from './program';
import CustomElementBase from "./CustomElementBase.js";
import InnerBottomLeftElement from "./InnerBottomLeftElement.js";
import InnerBottomMiddleElement from "./InnerBottomMiddleElement.js";
import InnerBottomRightElement from "./InnerBottomRightElement.js";

/**
 * @extends CustomElementBase
 */
export default class InnerBottomElement extends CustomElementBase {

    /**
     * @param {ParentNode} rootNode
     */
    onConnected(rootNode) {
        let divElement = document.createElement('div');
        divElement.innerText = 'therandomdiv';
        divElement.id = 'therandomdiv';
        rootNode.append(divElement);

        rootNode.append(Program.createCustomElement(InnerBottomLeftElement));
        rootNode.append(Program.createCustomElement(InnerBottomMiddleElement));
        rootNode.append(Program.createCustomElement(InnerBottomRightElement));

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