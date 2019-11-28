import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomRightElement extends CustomElementBase {
    onConnected(rootElement) {
        rootElement.append(`InnerBottomRightElement`);

        return `
            :host {
                background: green;
            }
        `
    }
}