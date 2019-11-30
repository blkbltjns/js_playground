import Program from './Program.js';

export default class CustomElementBase extends HTMLElement {

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});       
        let shadowRootStyleElement = this._createShadowRootStyleElement();
        if (this.onConnected) {
            this.onConnected(shadowRoot);
        }
        shadowRoot.append(shadowRootStyleElement);
    }

    /** 
     * @abstract 
     * @param {ParentNode} rootNode
     * @private
    */
    onConnected(rootNode) { };

    /**
     * @param {ParentNode} rootNode 
     */
    onDisconnected(rootNode) { }

    /**
    * @param {string} cssString
    * @returns {HTMLStyleElement}
    */    
    createStyleElement(cssString) {
        let styleElement = document.createElement('style');
        styleElement.textContent = cssString;
    return styleElement;
    }

    /**
     * @returns {HTMLStyleElement}
     */
    _createShadowRootStyleElement() {
        return this.createStyleElement(`
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
     * @param {string} cssFilePath 
     * @returns {HTMLLinkElement}
     */
    createCssFileLinkElement(cssFilePath) {
        let cssFileLink = document.createElement('link');
        cssFileLink.rel = "stylesheet";
        cssFileLink.type="text/css";
        cssFileLink.href = cssFilePath;
        return cssFileLink;
    }
}