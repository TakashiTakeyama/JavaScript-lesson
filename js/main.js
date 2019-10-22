$(function() {
  var calcTax = function() {
    var price =$("#price").val() * 1;
    var taxRate = $("#taxRate").val() * 1;

    var taxAmount = Math.floor(price * taxRate / 100):
    var taxIncude = price + taxAmount;

    $("#taxAmount").val(taxAmount);
    $("#taxInclude").val(taxIncluded);
  };

  $("#btnExec").click(calTax);
});

