import CustomElementBase from "./CustomElementBase.js";

export default class InnerTopElement extends CustomElementBase {
    onConnected(rootElement) {
        rootElement.innerText = `InnerTopElement`;
        return './InnerTopElement.css';
    }
}