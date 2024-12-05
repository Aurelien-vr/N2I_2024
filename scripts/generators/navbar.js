// Navigation bar generation

import { WebComponent } from './webcomponent';

class Navbar extends WebComponent
{
    /*
    *   links: array of links to all the webpages
    */
    constructor(links)
    {
        super("nav");
        this.htmlNode.classList.add("navbar");
        links.forEach(_link => 
        {
            let _htmlLink = document.createElement("a");
            _htmlLink.classList.add("navbar-link");
            _htmlLink.setAttribute("href", _link);
            _htmlLink.textContent = Navbar.TrimLinkName(_link);
            this.htmlNode.appendChild(_htmlLink);
        });
    }

    static TrimLinkName(link)
    {
        let _link = `${link}`.trim(); // forces JS to interpret link as a String
        if(_link.includes("/index.php"))
            _link = _link.replace("/index.php", "");
        _link = _link.split('/')[_link.split('/').length - 1];
        _link = _link[0].toUpperCase() + _link.slice(1, _link.length);
        return _link;
    }
}

export { Navbar };