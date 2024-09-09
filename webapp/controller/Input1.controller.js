sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project2.controller.Input1", {
        onInit: function () {
            const sData = {"res": {"name": "sudheer" } };
            const oData = new JSONModel(sData);
            this.getView().setModel(oData);
        }
    });
});
