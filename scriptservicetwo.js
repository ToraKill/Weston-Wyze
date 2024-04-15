function calculateCameras1() {// this is the start of the function to begin the estimation of how many calculators you need
    const squareFootage = parseFloat(window.prompt("Enter the square footage of your house:"));//this is the question at the top popping up asking square footage
    if (isNaN(squareFootage) || squareFootage <= 0) {//this is the if statment for if the entry is invalid
        document.getElementById('resultstwo').innerHTML = "Please enter correct square footage.";//this is the answer from the calculator if you put in an invaid entry
        return;
    }
    
    const location = window.prompt("Enter your location (rural or suburban):");//prompt for the second parameter for the calculator for an answer
    if (location.toLowerCase() !== 'rural' && location.toLowerCase() !== 'suburban') {//recieving the answer to location
        document.getElementById('resultstwo').innerHTML = "Please choose from 'rural' or 'suburban'.";//this is the answer from the calculator if you put in an invalid entry
        return;
    }
    
    let factor;
    if (location.toLowerCase() === 'rural') {//if  for rural choice for calculation
        factor = 0.19; //ratio for how many cameras you need in a rural house
    } else {
        factor = 0.22; //same but suburban
    }
    
    const coveragePerCamera = 1860; //average vision of a camera in good view(done through calculations from data from stats canada on homes)
    const camerasNeeded = Math.round(squareFootage / (coveragePerCamera * factor));// Multipying the average camera coverage to the average of cameras per area in rural or suburban needed 
    //to almost entirely cover the home which is factor then applying that to square footage then rounding the answer
    document.getElementById('resultstwo').innerHTML = 'This Number is How many Cameras You Need: ' + camerasNeeded;//answer for number of cameras needed
}
document.write('<p id="resultstwo">' + 'This Number is How many Cameras You Need:  ' + camerasNeeded + '</p>')//making a small premtive message to go along with the answer

