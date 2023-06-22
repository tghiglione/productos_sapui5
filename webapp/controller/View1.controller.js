sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "../utils/formatter",
    "../utils/constants"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment, formatter, constants) {
        "use strict";

        return Controller.extend("curso.productos.productos.controller.View1", {
            
            formatter: formatter,

            onInit: function () {

            },
            onOpenDialog: function(){
                var oView= this.getView();
                if(!this.openDialog){
                    this.openDialog=sap.ui.xmlfragment(constants.model.ids.FRAGMENTS.ListaDialog,constants.model.routes.FRAGMENTS.ListaDialog, this);
                    oView.addDependent(this.openDialog);
                }
                this.openDialog.open();
            },
            onCloseDialog: function(){
                this.openDialog.close();
            }
        });
    });
