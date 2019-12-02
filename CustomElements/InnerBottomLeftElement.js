import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomLeftElement extends CustomElementBase {

    /** 
     * @param {ParentNode} rootNode
    */
    onConnected(rootNode) {
        const styleElement = this.createStyleElement(`
            :host {
                background: pink;
            }
        `)
        rootNode.append(styleElement);

        rootNode.append(`InnerBottomLeftElement`);

    }
}