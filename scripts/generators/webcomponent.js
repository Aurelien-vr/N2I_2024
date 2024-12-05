//  generic webcomponent

class WebComponent
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
    
    AddStyleClass(_class)
    {
        this.htmlNode.classList.add(_class);
    }

    RemoveStyleClass(_class)
    {
        this.htmlNode.classList.remove(_class);
    }
}

export { WebComponent }