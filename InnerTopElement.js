import CustomElementBase from "./CustomElementBase.js";

export default class InnerTopElement extends CustomElementBase {
    onConnected(rootElement) {
        rootElement.append(`InnerTopElement`);
        return './InnerTopElement.css';
    }
}