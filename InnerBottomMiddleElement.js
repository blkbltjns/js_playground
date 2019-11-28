import CustomElementBase from "./CustomElementBase.js";

export default class InnerBottomMiddleElement extends CustomElementBase {
    onConnected(rootElement) {
        let table = document.createElement('div');
        table.style.gridAutoRows = 'minmax(min-content, min-content);';
        table.style.height = '0';
        table.style.gridAutoFlow = 'row';

        for (let i = 0; i < 30; i++) {
            let row = document.createElement('div');
            row.className = 'row';
            row.innerText = `row number ${i}`;
            table.append(row);
        }

        rootElement.append(table);

        return `
            :host {
                background: orange;                                
            }
        `
    }
}