var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elResult = document.querySelector(".js-result")



elForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    var elInputVal = elInput.value;
    var elSelectVal = elSelect.value;
    
    var totalResult = elInputVal / elSelectVal;
    
    elResult.textContent = totalResult.toFixed(2);
    

    if (elInputVal <= 0 ){
        elResult.textContent = ("Warning !!!")
    }
})