export default class CustomElementBase extends HTMLElement {
    connectedCallback() {
        let rootNode = document.createElement('div');
        rootNode.id = 'rootElement';
        let rootNodeStyleElement = this._createRootNodeStyleElement();
        rootNode.append(rootNodeStyleElement);

        let shadowRoot = rootNode.attachShadow({mode: 'open'});
        let shadowRootStyleElement = this._createShadowRootStyleElement();        
        shadowRoot.prepend(shadowRootStyleElement);
        
        if (this.onConnected) {
            let customElementCssString = this.onConnected(shadowRoot);
            if (customElementCssString) {
                
                if (customElementCssString.endsWith('.css')) {
                    let cssFileLink = this._createCssFileLinkFromCssString(customElementCssString)
                    shadowRoot.prepend(cssFileLink);
                }
                else {
                    let customElementStyle = this._createStyleElementFromCssString(customElementCssString);
                    shadowRoot.prepend(customElementStyle);
                }                
            }            
        }

        this.append(rootNode);
    }

    _createShadowRootStyleElement() {
        return this._createStyleElementFromCssString(`
        :root * {
            height: 100%;
            width: 100%;
            display: grid;
            margin: 0;
            padding: 0;
            box-sizing: border-box;                
        }
        `);
    }

    _createRootNodeStyleElement() {
        return this._createStyleElementFromCssString(`
        #rootElement {
            height: 100%;
            width: 100%;
            display: grid;
            margin: 0;
            padding: 0;
            box-sizing: border-box;                
        }
        `);
    }

    disconnectedCallback() {
        if (this.onDisconnected) {
            this.onDisconnected(rootDiv);
        }
    }

    _createStyleElementFromCssString(cssString) {
        let styleElement = document.createElement('style');
        styleElement.textContent = cssString;
        return styleElement;
    }

    _createCssFileLinkFromCssString(cssString) {
        let cssFileLink = document.createElement('link');
        cssFileLink.rel = "stylesheet";
        cssFileLink.type="text/css";
        cssFileLink.href = cssString;
        return cssFileLink;
    }
}