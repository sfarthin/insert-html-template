#insertHTML

Simply insert the contents of a file (via ajax) into the DOM. 

## Install

    bower install insertHTML

## Example
  
    <script src="bower_components/insertHTML.js"></script>
    <script>
      insertHTML("path/to/file.html", ".dom_selector");
    </script>

See [tests/spec](https://github.com/sfarthin/insert-html-template/blob/master/tests/spec.js) for more examples.

## Usage

	insertHTML(url, element, [async=false])
	
+ **url** to the external file with html
+ **element** is the selector or DOM element in which to fill the contents from the given **url**
+ **async** makes this action asynchronous. By default, it is synchronous (false).


## Running Unit Tests

    npm install
    npm test
