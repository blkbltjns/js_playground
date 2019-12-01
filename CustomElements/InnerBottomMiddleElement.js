import CustomElementBase from "./CustomElementBase.js";
import RowElement from "./RowElement.js";
import Program from "../Program.js";

export default class InnerBottomMiddleElement extends CustomElementBase {

    /**
     * @param {ParentNode} rootNode      
     */
    onConnected(rootNode) {
        const styleElement = this.createStyleElement(`
            :host {
                background: var(--main-bd-color);                                
            }
        `);
        rootNode.append(styleElement);

        let tableDiv = document.createElement('div');
        tableDiv.style.gridAutoRows = 'minmax(max-content, max-content);';
        tableDiv.style.height = '0';
        tableDiv.style.gridAutoFlow = 'row';

        for (let i = 0; i < 1000; i++) {
            let row = Program.createCustomElement(RowElement);
            row.row = i
            tableDiv.append(row);
        }

        rootNode.append(tableDiv);
    }
}