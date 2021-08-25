/* eslint-disable linebreak-style */

$('body').on('updateAddToCartFormData', function (e, form) {
var maxPersLines = 20;
var elementName = "#engravingline";

for (var index=1; index <= maxPersLines; index++) {

    var elementId = elementName + index;
    if ($(elementId).length) {
       
        form[elementId.replace('#','')] = $(elementId).val();
        console.log(form);
    }
}
//form.engravingline1 = $('#engravingline').val();
//form.engravingline2 = $('#engravingline2').val();
//form.engravingline3 = $('#engravingline3').val();
//form.engravingline4 = $('#engravingline4').val();
//form.engravingline5 = $('#engravingline5').val();

});

//create system object engravingJson and also assign to grouping custom

module.exports = function () {

    };