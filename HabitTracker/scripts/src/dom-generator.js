import {HTML_PROPERTY} from "./html-properties.js";

function DomGenerator() {}

DomGenerator.generateDOMWithChildren = function(domProperties, children) {
    let dom = document.createElement(domProperties[HTML_PROPERTY.tagName]);
    
    let keys = Object.keys(domProperties);
    keys.filter(item => item != HTML_PROPERTY.tagName)
        .forEach(item => dom[item] = domProperties[item]);
    
    children.forEach(child => dom.appendChild(child));
    
    return dom;
};

export {
    DomGenerator
};