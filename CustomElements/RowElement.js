import CustomElementBase from "./CustomElementBase.js";

export default class RowElement extends CustomElementBase {

    static get observedAttributes() {
        return ['row'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'row') {
            this._row = newValue;
        }
    }

    /**
     * @param {ParentNode} rootNode
     */
    onConnected(rootNode) {
        const styleElement = this.createStyleElement(`
            root: {
                background: yellow;
            }
        `);
        rootNode.append(styleElement);

        const divElement = document.createElement('div');
        divElement.innerText = `row ${this.getAttribute('row')}`;
        rootNode.append(divElement);
    }    

    /**
     * @param {number} value
     */
    set row(value) {
        this.setAttribute('row', value.toString());
    }

    /**
     * @returns {number}
     */
    get row() {
        return this._row;
    }
}