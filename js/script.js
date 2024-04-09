function init(){
    //add your javascrip between these two lines of code

    document.getElementById("entrybutton").addEventListener("click", function(){
        var userInput = document.getElementById("entryinput").value;
        var alertMessage = "Oluwadamilola Folayemi " + userInput;
        alert(alertMessage);
    
        // Access the textoutput element and update its text content
        var textoutput = document.getElementById("textoutput");
        textoutput.textContent = userInput;
    });
    
  
}
    
    
 window.addEventListener('load', init);