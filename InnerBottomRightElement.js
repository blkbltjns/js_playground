import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomRightElement extends CustomElementBase {

    /**
     * @param {ParentNode} rootNode
    */
    onConnected(rootNode) {
        rootNode.append(`InnerBottomRightElement`);

        return `
            :host {
                background: green;
            }
        `
    }
}