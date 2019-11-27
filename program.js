export default class Program {
    takeOver() {
        
        document.createCustomElement = (tag, attributes) => {
            let tagName = tag.name.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
            let existingCustomElement = window.customElements.get(tagName);
            if (!existingCustomElement) {
                window.customElements.define(tagName, tag);
            }
            return document.createElement(tagName, attributes);
        };

        let style = document.createElement('style');
        style.textContent = `
            html, body {
                height: 100%;
                width: 100%;
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                display: grid;
            }
        `
        document.head.appendChild(style);
    }

}