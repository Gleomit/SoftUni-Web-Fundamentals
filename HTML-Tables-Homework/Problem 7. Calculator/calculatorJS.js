function doTheMagic(buttonPressed)
{
    var theTextbox = document.getElementById("textbox");
    var valueToAdd = theTextbox.value;

    if(buttonPressed == '=')
    {
        valueToAdd = eval(valueToAdd);
    }
    else if(buttonPressed == 'C')
    {
        valueToAdd = valueToAdd.substring(0,valueToAdd.length - 1);
    }
    else
    {
        valueToAdd = valueToAdd + buttonPressed;
    }
    theTextbox.value = valueToAdd;
}