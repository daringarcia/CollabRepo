$(function() {

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $('#cvv');
    var confirmButton = $("#confirm-purchase");
    var mastercard = $('#mastercard');
    var visa= $("#visa");
    var amex = $("#amex");
    var errorMessage = $("#error-message");
    


cardNumber.payform('formatCardNumber');
CVV.payform('formatCardCVC');

cardNumber.keyup(function() {

    amex.removeClass('transparent');
    visa.removeClass('transparent');
    mastercard.removeClass('transparent');

if($.payform.validateCardNumber(cardNumber.val())== false){
    cardNumberField.addClass('has-error');
} else {
    cardNumberField.removeClass('has-error');
    cardNumberField.addClass('has-success');
}

if ($.payform.parseCardType(cardNumber.val())== 'visa') {
    mastercard.addClass('transparent');
    amex.addClass('transparent');
} else if ($.payform.parseCardType(cardNumber.val())== 'amex'){
    mastercard.addClass('transparent');
    visa.addClass('transparent');
} else if ($.payform.parseCardType(cardNumber.val())== 'mastercard'){
    visa.addClass('transparent');
    amex.addClass('transparent');
}

});

confirmButton.click(function(e){

    $( "#error-message").empty();
    e.preventDefault();

    var isCardValid = $.payform.validateCardNumber(cardNumber.val());
    var isCvvValid = $.payform.validateCardCVC(CVV.val());

    if(owner.val().lenght < 5) {
        $('<div> ATTENTION: Please enter valid Name </div>').appendTo('#error-message');
    } else if (!isCardValid) {
        $('<div> ATTENTION: Please enter valid Card Number </div>').appendTo('#error-message');
    }
    else if (!isCvvValid){
        $('<div> ATTENTION: Please enter valid CCV </div>').appendTo('#error-message');
    } else {
        //everything is correct start the Firebase here
        alert ("everything is correct")
    }
});

});