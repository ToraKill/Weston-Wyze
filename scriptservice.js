

function calculateCamerasNeeded() {
    const location = prompt("Please let us know if you're (rural or suburban):").toLowerCase();// prompt for browser to ask rural or suburban
    const numberOfRooms = parseInt(prompt("How many rooms are in your home?:"));// window prompt for how many rooms

    let camerasPerRoom;

    //one in 6 rooms lead to entrances or exits so one camera per 6 rooms
    if (location === 'rural') {//choice if rural
        camerasPerRoom = 0.16;//ratio per rooms
    } else if (location === 'suburban') {//choice suburban
        camerasPerRoom = 0.25; // 180sqr feet average per room and an average of 2480 sqr feet per suburban home for an average 13.7 rooms per house and 1 in 4 rooms of a suburban house lead to a door or entrace/exit 
    } else {
        return "Please type the correct answers to the prompts";//the invalid answer promppt
    }

    const totalCamerasNeeded = Math.round(camerasPerRoom * numberOfRooms); //making the totalcamerasneeded variable camerasperroom times number of rooms where cameras perroom is the ratio and number of rooms the changing variable then rounding to nearest whole number

    return totalCamerasNeeded;
}

const camerasNeeded = calculateCamerasNeeded();// get the answer
console.log("Total cameras needed:", camerasNeeded);//printing answer
/*===================*/
document.write('<p id="ccc">' + 'This Number is How many Cameras You Need:  ' + camerasNeeded + '</p>')//making a small premtive message to go along with the answer




