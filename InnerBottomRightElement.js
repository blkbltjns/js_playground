import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomRightElement extends CustomElementBase {
    onConnected(rootElement) {
        rootElement.innerHTML = `InnerBottomRightElement`;

        return `
            :host {
                background: green;
            }
        `
    }
}