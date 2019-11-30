import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomLeftElement extends CustomElementBase {

    /** 
     * @param {ParentNode} rootNode
    */
    onConnected(rootNode) {
        rootNode.append(`InnerBottomLeftElement`);
        return `
            :host {
                background: pink;
            }
        `
    }
}