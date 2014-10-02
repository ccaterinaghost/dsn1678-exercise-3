var salesLeft = $('.sales_left');
var salesDetailsLeft = $('.sales__details_left');

var buttonClickHandler = function () {
	var currentState = salesDetailsLeft.attr('data-state');

	if (currentState == 'active') {
	salesDetailsLeft.attr('data-state','inactive');
	} else {
	salesDetailsLeft.attr('data-state','active');
	}
};
salesLeft.on('click', buttonClickHandler);

var salesRight = $('.sales_right');
var salesDetailsRight = $('.sales__details_right');

var buttonClickHandler = function () {
	var currentState = salesDetailsRight.attr('data-state');

	if (currentState == 'active') {
	salesDetailsRight.attr('data-state','inactive');
	} else {
	salesDetailsRight.attr('data-state','active');
	}
};
salesRight.on('click', buttonClickHandler);