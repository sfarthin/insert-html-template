!function (name, definition) {
  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()
}('insertHTML', function (insertHTML) {
	return function(url, elements, async) {
		
		// Make sure element is iterable
		if(typeof elements == "string")
			elements = document.querySelectorAll(elements);
		else if(!elements.length)
			elements = [elements];

		// Use xhr to pull template and insert it into the elements
		var oReq = new XMLHttpRequest();
		oReq.onload = function() {
			// Lets update each element
			for(var i in elements) {
				if(typeof elements[i].innerHTML != undefined)
					elements[i].innerHTML = this.responseText;
			}
			
			if(typeof async == "function") async(this.responseText);
		};
		
		// Lets do it.
		oReq.open("get", url, async);
		oReq.send();
		
	};
});