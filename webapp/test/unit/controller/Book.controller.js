/*global QUnit*/

sap.ui.define([
	"project2/controller/Book.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Book Controller");

	QUnit.test("I should test the Book controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
