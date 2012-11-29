function ViewModel(ko) {
	var self = this;
	this.images = ko.observableArray();

	this.getImages = function() {
		$.ajax({
			url: "/get_images",
			dataType: "json",
			success: function(images) {
				for(var i = 0; i < images.length; i++) {
					self.images.push({ src: "/img/" + images[i] });
					console.log(images[i]);
				}
			}
		})
	}

	this.getImages();
}

require(['js/knockout.js', 'js/jquery.js'], function(ko) {
	ko.applyBindings(new ViewModel(ko));
})