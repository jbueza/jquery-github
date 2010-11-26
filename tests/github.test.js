module("omniture");
test("view(route, fn)", function() {
  var omniture = $(document).Omniture();
  
  equal( omniture.view(), false, "should return false if the Omniture library is not loaded" );
  equal( omniture.view({}, {}), false, "should return false if the 'route' parameter is not a string" );
  equal( omniture.view("index.html", "foobaz"), false, "should return false if the 'fn' parameter is not a function or object" );
  
  var wipe = function() { window.s = { tl: function() {}, t: function() {} }; };

  wipe(); 
  omniture.view("^", { pageName: "home" });
  equal( window.s.pageName, "home", "should set the pageName to 'home'" );
      
});

test("link(element, event, fn)", function() {
  var omniture = $(document).Omniture();
  
  equal( omniture.link(), false, "should return false if the Omniture library is not loaded" );
  equal( omniture.link('test', 'click', {}), false, "should return false if the element parameter is not an object" );
  equal( omniture.link({}, {}, {}), false, "should return false if the event parameter is not a string" );
  equal( omniture.link({}, 'click', 'wrong value'), false, "should return false if the 'fn' parameter is not a function or an object" );
});

(function() {
	var reset = QUnit.reset;
	function afterTest() {
		ok( false, "reset should not modify test status" );
	}
	module("reset");
	test("reset runs assertions", function() {
		QUnit.reset = function() {
			afterTest();
			reset.apply( this, arguments );
		};
	});
	test("reset runs assertions2", function() {
		QUnit.reset = reset;
	});
})();
