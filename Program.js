import CustomElementBase from "./CustomElements/CustomElementBase";

export default class Program {

    static takeOver(outerElementClass) {           
        Program._addHtmlAndBodyStyle();
        Program._addOuterElementToBody(outerElementClass);       
    }

    static _addOuterElementToBody(outerElementClass) {
        const newOuterElement = this.createCustomElement(outerElementClass);
        document.body.innerHTML = '';
        document.body.appendChild(newOuterElement);
    }

    static _addHtmlAndBodyStyle() {
        const style = document.createElement('style');
        style.textContent = `
            html, body {
                height: 100%;
                width: 100%;
                max-height: 100%;
                max-width: 100%;
                
                display: grid;
                grid-auto-columns: minmax(min-content, 1fr);
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * @template {CustomElementBase} T
     * @param {new() => T} className
     * @returns {T}
     **/
    static createCustomElement(className) {
        const tagName = className.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const existingCustomElement = window.customElements.get(tagName);
        if (!existingCustomElement) {
            window.customElements.define(tagName, className);
        }

        const toReturn = document.createElement(tagName);
        return /** @type {T} */(toReturn);
    }    
}