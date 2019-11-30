import Program from './program';
import CustomElementBase from './CustomElementBase.js';
import MikesInnerElementOne from './InnerTopElement.js';
import MikesInnerElementTwo from './InnerBottomElement.js';

export default class OuterElement extends CustomElementBase{
    onConnected(rootElement) {
        rootElement.appendChild(Program.createCustomElement(MikesInnerElementOne));
        rootElement.appendChild(Program.createCustomElement(MikesInnerElementTwo));
        return '';
    }
}