function ViewModel() {
	this.value = "Hello World!";
}

require(['js/knockout.js'], function(ko) {
	ko.applyBindings(new ViewModel());
})