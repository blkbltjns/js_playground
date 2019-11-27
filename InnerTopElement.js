import CustomElementBase from "./CustomElementBase.js";

export default class InnerTopElement extends CustomElementBase {
    onConnected(rootElement) {
        rootElement.innerHTML = `InnerTopElement`;
        return './InnerTopElement.css';
    }
}