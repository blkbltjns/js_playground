import Program from './Program.js';

export default class CustomElementBase extends HTMLElement {

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});       
        let shadowRootStyleElement = this._createShadowRootStyleElement();

        shadowRoot.append(shadowRootStyleElement);

        if (this.onConnected) {
            let customElementCssString = this.onConnected(shadowRoot);
            if (customElementCssString) {              
                if (customElementCssString.endsWith('.css')) {
                    let cssFileLink = this._createCssFileLinkFromCssFilePath(customElementCssString)
                    shadowRoot.append(cssFileLink);
                }
                else {
                    let customElementStyle = this._createStyleElementFromCssString(customElementCssString);
                    shadowRoot.append(customElementStyle);
                }                
            }            
        }
    }

    /** 
     * @abstract 
     * @param {ParentNode} rootElement
     * @returns {string | void}
     * @private
    */
    onConnected(rootElement) { };

    /**
     * @param {ShadowRoot} rootElement 
     */
    onDisconnected(rootElement) { }

    /**
     * @returns {HTMLStyleElement}
     */
    _createShadowRootStyleElement() {
        return this._createStyleElementFromCssString(`
        :host {
            display: grid;
            grid-auto-rows: minmax(min-content, 1fr);
            grid-auto-columns: minmax(min-content, 1fr);
            margin: 0;
            padding: 0;
            box-sizing: border-box;    
            overflow: auto;        
        }
        `);
    }

    /**
    * @param {string} cssString
    * @returns {HTMLStyleElement}
    */
    _createStyleElementFromCssString(cssString) {
        let styleElement = document.createElement('style');
        styleElement.textContent = cssString;
        return styleElement;
    }

    /**
     * @param {string} cssFilePath 
     * @returns {HTMLLinkElement}
     */
    _createCssFileLinkFromCssFilePath(cssFilePath) {
        let cssFileLink = document.createElement('link');
        cssFileLink.rel = "stylesheet";
        cssFileLink.type="text/css";
        cssFileLink.href = cssFilePath;
        return cssFileLink;
    }
}