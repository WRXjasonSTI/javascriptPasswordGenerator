# Introduction

Hello and thank you for viewing my Password Generator! The website can be viewed here: https://wrxjasonsti.github.io/javascriptPasswordGenerator/

The criteria provided for this activity included uses of alerts for the user to specify the format of the requested password. I decided to use the alert functions as soon as the website was opened. Until it can be revisited, the user can refresh the browser to re-enter parameters rather than re-entering the parameters every time the user wanted to generate a password with the button.

Upon visiting the page, you will be prompted for the desired password criteria:

![First Alert Screenshot](/Assets/alert1.PNG)
![Second Alert Screenshot](/Assets/alert2.PNG)
![Third Alert Screenshot](/Assets/alert3.PNG)

Once all the parameters have been set, the GENERATE PASSWORD button will populate a password in the text area that can then be copied to the clipboard with the COPY TEXT button.

![Result Screenshot](/Assets/Result.PNG)

# Code walkthrough:

The alert system serves as the user variable collector. The variables are then fed into the function that is initiated with the Generate Password button click. The parameters are then fed into the main password generating function.

The generatePassword function uses a pair of For loops that takes into account the user's parameters. The user-input character count sets the loop frequency, and the character selection parameters select the Array that the password generator will use. Combining a frequency For loop and using ASCII Character codes cleans up the code a lot.

I hope this program can be useful to you! Although this is a final submission, I will be revisiting this program once I have acquired more JS knowledge. Regards.

- - -
© 2020 Jason Cruz.
