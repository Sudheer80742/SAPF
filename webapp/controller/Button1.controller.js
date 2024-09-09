sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(Controller,MessageToast){
        "use strict";

        return Controller.extend("project2.controller.Button1",{
        onClic: function(){
            var oVal=this.getView().byId("text1").setText("sudheer");
            MessageToast.show(this.getView().byId("text1").getText());
        }
});
});
