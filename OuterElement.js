import Program from './program';
import CustomElementBase from './CustomElementBase.js';
import MikesInnerElementOne from './InnerTopElement.js';
import MikesInnerElementTwo from './InnerBottomElement.js';

export default class OuterElement extends CustomElementBase{

    /**
     * @param {ParentNode} rootNode
    */
    onConnected(rootNode) {
        rootNode.append(Program.createCustomElement(MikesInnerElementOne));
        rootNode.append(Program.createCustomElement(MikesInnerElementTwo));
    }
}