document.addEventListener('DOMContentLoaded', function(){
    // Select Eleements
    const colorChangeButton = document.getElementById('colorChangeButton');
    const incrementButton = document.getElementById('incrementButton');
    const usernameField = document.getElementById('username');
    const valueDisplay = document.getElementById('valueDisplay');

    // Inititalize value
    let value = 0;

    // Hovereffect for color change button
    colorChangeButton.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'lightgreen';

    });

    colorChangeButton.addEventListener('mouseout', function(){
        this.style.backgroundColor= '' ; // revert color on mouseout
    });

    // Increment value on increament button click
    incrementButton.addEventListener('click', function(){
        value++ ; // increase the value
        valueDisplay.textContent = value;
    });

    // Change input field color when value is entered
    usernameField.addEventListener('input', function(){
        if (this.value){
            this.style.backgroundColor = 'lightpink'; // this will change color on input
        } else {
            this.style.backgroundColor= ''; // revert color if input is removed
        }
    });
});