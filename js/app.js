var initialCats = [
	{
		clickCount : 0, 
		name: "Jesse", 
		imgSrc: "img/cat1.jpg", 
		imgAttribution: 'https://www.flickr.com/photos/',
		nickNames: [{ name: "Bungle"},{ name: "George"},{ name: "Zippy"}]
	},
	{
		clickCount : 0, 
		name: "Marc", 
		imgSrc: "img/cat2.jpg", 
		imgAttribution: 'https://www.flickr.com/photos/',
		nickNames: [{ name: "Bungle"},{ name: "George"},{ name: "Zippy"}]
	},
	{
		clickCount : 0, 
		name: "Tinky", 
		imgSrc: "img/cat3.jpg", 
		imgAttribution: 'https://www.flickr.com/photos/',
		nickNames: [{ name: "Bungle"},{ name: "George"},{ name: "Zippy"}]
	},
	{
		clickCount : 0, 
		name: "Brownie", 
		imgSrc: "img/cat4.jpg", 
		imgAttribution: 'https://www.flickr.com/photos/',
		nickNames: [{ name: "Bungle"},{ name: "George"},{ name: "Zippy"}]
	},
	{
		clickCount : 0, 
		name: "Saul", 
		imgSrc: "img/cat5.jpg", 
		imgAttribution: 'https://www.flickr.com/photos/',
		nickNames: [{ name: "Bungle"},{ name: "George"},{ name: "Zippy"}]
	}
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observableArray(data.nickNames);

	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();
		if (clicks < 10) {
			level = 'Newborn';
		} else if (clicks < 20) {
			level = 'Infant';
		} else if (clicks < 40) {
			level = 'Child';
		} else if (clicks < 70) {
			level = 'Teen';
		} else if (clicks < 100) {
			level = 'Adult';
		} else {
			level = 'Grandmaster';
		}
		return level;
	}, this);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.setCurrentCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());