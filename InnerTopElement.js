import CustomElementBase from "./CustomElementBase.js";

export default class InnerTopElement extends CustomElementBase {
    
    /**
     * @param {ParentNode} rootNode
     */
    onConnected(rootNode) {
        rootNode.append(`InnerTopElement`);
        return './InnerTopElement.css';
    }
}