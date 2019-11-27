export default class CustomElementBase extends HTMLElement {
    connectedCallback() {
        let rootNode = document.createElement('div');
        let shadowRoot = rootNode.attachShadow({mode: 'open'});
        
        rootNode.style.height = '100%';
        rootNode.style.width = '100%';
        rootNode.style.display = 'grid';
        rootNode.id = 'rootElement';
        
        if (this.onConnected) {
            let customElementCssString = this.onConnected(shadowRoot);
            let customElementStyle;
            if (customElementCssString) {
                
                if (customElementCssString.endsWith('.css')) {
                    let cssFileLink = document.createElement('link');
                    cssFileLink.rel = "stylesheet";
                    cssFileLink.type="text/css";
                    cssFileLink.href = customElementCssString;
                    shadowRoot.prepend(cssFileLink);
                }
                else {
                    let customElementStyle = document.createElement('style');
                    customElementStyle.textContent = customElementCssString;
                    shadowRoot.prepend(customElementStyle);
                }
                
            }            
        }

        this.append(rootNode);
    }

    disconnectedCallback() {
        if (this.onDisconnected) {
            this.onDisconnected(rootDiv);
        }
    }
}