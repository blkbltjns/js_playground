import Program from './Program.js';

export default class CustomElementBase extends HTMLElement {
    connectedCallback() {

        let shadowRoot = this.attachShadow({mode: 'open'});
        let shadowRootStyleElement = this._createShadowRootStyleElement();        
        let hostStyleElement = this._createHostStyleElement();

        shadowRoot.append(hostStyleElement);

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

        let shadowRootThemeCssFileLink = this._createCssFileLinkFromCssFilePath(Program.cssThemePath);
        shadowRoot.prepend(shadowRootThemeCssFileLink);
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
            max-height: 100%;
            max-width: 100%;        
            display: grid;
            grid-auto-rows: minmax(1fr, 1fr);
            grid-auto-columns: minmax(1fr, 1fr);
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow: auto;              
        }
        `);
    }

    _createHostStyleElement() {
        return this._createStyleElementFromCssString(`
        :host {
            height: 100%;
            width: 100%;
            max-height: 100%;
            max-width: 100%;       
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