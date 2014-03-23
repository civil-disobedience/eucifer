(function() {

    function walk(node) 
    {
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText (node);
                break;
        }
    }
    
    function handleText(textNode)
    {
       textNode.nodeValue= replaceAll(textNode.nodeValue);
       return;
    }

    function replaceAll (text) {
      var translate = {
        "cat":"dog",
        "dog":"goat",
        "goat":"cat"
      };
      var re= new RegExpr(Object.keys(translate).join("|"),"gi"); 
      text = text.replace (re, function (i) {return translate[i]});
      return text;
    }


    function windowLoadHandler()
    {
        window.removeEventListener('load', windowLoadHandler);
        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
//          replaceAll(e.originalTarget.body); 
          walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
