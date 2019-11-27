import CustomElementBase from './CustomElementBase.js';
import MikesInnerElementOne from './InnerTopElement.js';
import MikesInnerElementTwo from './InnerBottomElement.js';

export default class OuterElement extends CustomElementBase{
    onConnected(rootElement) {
        rootElement.appendChild(document.createCustomElement(MikesInnerElementOne));
        rootElement.appendChild(document.createCustomElement(MikesInnerElementTwo));
    }
}