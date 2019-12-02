import Program from '../Program.js';
import CustomElementBase from './CustomElementBase.js';
import InnerTopElement from './InnerTopElement.js';
import InnerBottomElement from './InnerBottomElement.js';

export default class OuterElement extends CustomElementBase{

    /**
     * @param {ParentNode} rootNode
    */
    onConnected(rootNode) {
        rootNode.append(Program.createCustomElement(InnerTopElement));
        rootNode.append(Program.createCustomElement(InnerBottomElement));
    }
}