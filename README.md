## Usage

Simply insert the contents of a file (via ajax) into the DOM
  
    <script src="insertHTML.js"></script>
    <script>
      insertHTML("path/to/file.html", ".dom_selector");
    </script>


	insertHTML(url, element, [async=false])
	
+ **url** is the url to the external file
+ **element** is the selector or DOM element in which to fill the contents from the given **url**
+ **async** makes this action asynchronous. By default, this method is is set to false (synchronous).


## Test

npm test