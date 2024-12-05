//  generic webcomponent

class Webcomponent
{
    // HTML node this object is bound to and generates.
    htmlNode;
    
    /*
    * typeOfHtmlTag: type of node to generate (div, p, nav, h1...) 
    */
    constructor(typeOfHtmlTag)
    {
        this.htmlNode = document.createElement(typeOfHtmlTag);
    }

    // Binds this element to an actual HTML node
    Bind(parent) 
    {
        parent.appendChild(this.htmlNode);
    }
    
    // Binds this element to an actual HTML node as its first child
    PrependBind(parent)
    {
        parent.prepend(this.htmlNode);
    }

    AddEventListener(event, callback)
    {
        this.htmlNode.AddEventListener(event, e => callback);
    }
}

export { Webcomponent }