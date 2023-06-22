sap.ui.define([], function () {
    "use strict";
    return {

    statusText: function (sShipperName, sShippedDate, sStatus)
    {
        var resourceBundle = this.getView().getModel("i18n").getResourceBundle(); //recupero el i18n
        var finalText = sShipperName + " " + sShippedDate + " "; //concateno la frase final
        switch (sStatus) {
        case "A":
        return finalText + resourceBundle.getText("StatusA"); //le agrego a la frase final lo que tiene STATUS A en el i18n
        case "B":
        return finalText + resourceBundle.getText("StatusB"); //le agrego a la frase final lo que tiene STATUS B en el i18n
        case "C":
        return finalText + resourceBundle.getText("StatusC"); //le agrego a la frase final lo que tiene STATUS C en el i18n
        default:
            return finalText + sStatus;
        }
    },

    numberState: function (sPrice) {
        if (sPrice > 7) {
        return "Error";
        } else {
        return "Success";
        }
    },

    quantityState: function(sQuantity){
        if(sQuantity<=4){
            return "Poco stock";
        }else if(sQuantity>4 && sQuantity<=10){
            return "Medio stock";
        }else if(sQuantity>10){
            return "Mucho stock";
        }
    }
};
});
