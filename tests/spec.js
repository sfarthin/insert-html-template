describe("insertHTML", function() {

	it("Library is defined", function() {
		expect(insertHTML).not.to.be.undefined;
	});
	
	it("HTML can be copied given an element", function() {
		
		var div = document.createElement("div");
		
		insertHTML("example/template1.html", div);

		expect(div.innerHTML).not.to.equal("");
		expect(div.children.length).to.equal(1);
		
		if(div.children.length) {
			expect(div.children[0].children.length).to.equal(2);
			expect(div.children[0].children[1].innerHTML).to.equal("x");
		}
	});
	
	it("HTML can be copied given a selector", function() {
		
		document.body.innerHTML = document.body.innerHTML + "<div id='qwerty'></div>";
		
		insertHTML("example/template1.html", "#qwerty");
		
		var div = document.getElementById("qwerty");
	
		expect(div.innerHTML).not.to.equal("");
		expect(div.children.length).to.equal(1);
		
		if(div.children.length) {
			expect(div.children[0].children.length).to.equal(2);
			expect(div.children[0].children[1].innerHTML).to.equal("x");
		}
		
	});
	
	it("HTML can be copied with a callback", function(done) {
		
		var div = document.createElement("div");
		
		// Lets use a different URL so the browser does not cache it.
		insertHTML("example/template2.html", div, function() {
		
			expect(div.innerHTML).to.equal("Hello");
			
			done();
			
		});

		expect(div.innerHTML).to.equal("");
		
	});
	
});