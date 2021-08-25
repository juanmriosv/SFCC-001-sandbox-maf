
/* eslint-disable linebreak-style */
//alert("test");
$('body').on('product:updateAddToCart', function (e, form) {
    alert("engraving update cart");
var maxPersLines = 20;
var elementName = "#engravingline";

for (var index=1; index <= maxPersLines; index++) {

    var elementId = elementName + index;
    if ($(elementId).length) {
       
        form[elementId.replace('#','')] = $(elementId).val();
       // alert(form[elementId.replace('#','')]);
        console.log(form);
    }
}


});



//$('body').on('change', '#engravingline1', function (e) {
//    debugger;
//    $('.update-cart-url').data('engravingline1', $(this).val());
//    });
//create system object engravingJson and also assign to grouping custom

//module.exports = function () {
//
//    };