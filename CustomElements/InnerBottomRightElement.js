import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomRightElement extends CustomElementBase {

    /**
     * @param {ParentNode} rootNode
    */
    onConnected(rootNode) {
        const styleElement = this.createStyleElement(`
            :host {
                background: green;
            }
        `);
        rootNode.append(styleElement);

        rootNode.append(`InnerBottomRightElement`);
    }
}