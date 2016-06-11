'use strict'
var addressBook = (function(){

	var contacts = ko.observableArray();
	var contact = {
		name: ko.observable(),
		phoneNumber: ko.observable()
	};

	var addContact = function () {
		console.log("Adding new contact with name: " + contact.name() +" and phone number: " + contact.phoneNumber());
		contacts.push({name : contact.name(), phoneNumber : contact.phoneNumber()});
		clearContact();
	};

	var clearContact = function(){
		contact.name(null);
		contact.phoneNumber(null);
	};

	var init = function(){
		ko.applyBindings(addressBook);
	};

	$(init);

	return {
		contact: contact,
		contacts: contacts,
		addContact:addContact
	};
})();