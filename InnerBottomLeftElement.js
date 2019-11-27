import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomLeftElement extends CustomElementBase {
    onConnected(rootElement) {
        rootElement.innerHTML = `InnerBottomLeftElement`;
        return './MikesInnerElementOne.css';
    }
}