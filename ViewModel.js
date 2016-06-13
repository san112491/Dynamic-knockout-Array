$(document).ready(function () {

	var DataViewModel = {
		defineDataItems: ko.observableArray([]),

		loadDataItems: function() {


			$.getJSON("http://localhost/Service/Service1.svc/GetData", function (data) {//Get Request

				DataViewModel.defineDataItems.removeAll();//Removes all previous data
				$.each(data.GetDataResult, function (index, item) {
				    DataViewModel.defineDataItems.push(new DataModel(item));

				});
			});
		}


	};

	ko.applyBindings(DataViewModel);
	DataViewModel.loadDataItems();
	setInterval(DataViewModel.loadDataItems, 60000);//How often you want this array to refresh the data
});

//This is where the data we want to be observed.
function DataModel(item) {
	this.item1 = ko.observable(item.item1),
	this.item2 = ko.observable(item.item2),
	this.item3 = ko.observable(item.item3),
	this.item4 = ko.observable(item.item4),
	this.item5 = ko.observable(item.item5),
    this.item6 = ko.observable(item.item6)

};
