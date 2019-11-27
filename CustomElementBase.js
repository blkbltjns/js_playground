import Program from './Program.js';

export default class CustomElementBase extends HTMLElement {
    connectedCallback() {
        let rootNode = document.createElement('div');
        rootNode.id = 'rootElement';
        let rootNodeStyleElement = this._createRootNodeStyleElement();
        rootNode.append(rootNodeStyleElement);

        let shadowRoot = rootNode.attachShadow({mode: 'open'});
        let shadowRootStyleElement = this._createShadowRootStyleElement();        
        shadowRoot.append(shadowRootStyleElement);
        


        if (this.onConnected) {
            let customElementCssString = this.onConnected(shadowRoot);
            if (customElementCssString) {              
                if (customElementCssString.endsWith('.css')) {
                    let cssFileLink = this._createCssFileLinkFromCssFilePath(customElementCssString)
                    shadowRoot.prepend(cssFileLink);
                }
                else {
                    let customElementStyle = this._createStyleElementFromCssString(customElementCssString);
                    shadowRoot.prepend(customElementStyle);
                }                
            }            
        }

        let shadowRootThemeCssFileLink = this._createCssFileLinkFromCssFilePath(Program.cssThemePath);
        shadowRoot.prepend(shadowRootThemeCssFileLink);

        // append the rootNode last so that style sheets are all in place before trying to render
        this.append(rootNode);
    }

    disconnectedCallback() {
        if (this.onDisconnected) {
            this.onDisconnected(rootDiv);
        }
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

    _createStyleElementFromCssString(cssString) {
        let styleElement = document.createElement('style');
        styleElement.textContent = cssString;
        return styleElement;
    }

    _createCssFileLinkFromCssFilePath(cssFilePath) {
        let cssFileLink = document.createElement('link');
        cssFileLink.rel = "stylesheet";
        cssFileLink.type="text/css";
        cssFileLink.href = cssFilePath;
        return cssFileLink;
    }
}