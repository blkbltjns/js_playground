import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomMiddleElement extends CustomElementBase {

    /**
     * @param {ParentNode} rootNode      
     */
    onConnected(rootNode) {
        let table = document.createElement('div');
        table.style.gridAutoRows = 'minmax(max-content, max-content);';
        table.style.height = '0';
        table.style.gridAutoFlow = 'row';

        for (let i = 0; i < 10000; i++) {
            let row = document.createElement('div');
            row.className = 'row';
            row.innerText = `row number ${i}`;
            table.append(row);
        }

        rootNode.append(table);

        return `
            :host {
                background: orange;                                
            }
        `
    }
}