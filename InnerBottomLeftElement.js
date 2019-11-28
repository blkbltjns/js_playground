import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomLeftElement extends CustomElementBase {
    onConnected(rootElement) {
        rootElement.append(`InnerBottomLeftElement`);
        return `
            :host {
                background: pink;
            }
        `
    }
}