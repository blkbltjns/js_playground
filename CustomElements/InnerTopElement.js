import CustomElementBase from "./CustomElementBase.js";

export default class InnerTopElement extends CustomElementBase {
    
    /**
     * @param {ParentNode} rootNode
     */
    onConnected(rootNode) {
        const cssFileLinkElement = this.createCssFileLinkElement('./InnerTopElement.css');
        rootNode.append(cssFileLinkElement);

        rootNode.append(`InnerTopElement`);

    }
}