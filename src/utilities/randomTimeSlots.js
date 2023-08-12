
export function randomTimeSlots(day) {
    let possibleSlots;
    if ( day > 0 && day < 6) {
        possibleSlots = [ '15:00', '16:00'];
    }
    else if (day > 5 && day < 8) {
        possibleSlots = [ '10:00', '11:00', '12:00', "13:00", "14:00", '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
    }
    
    let random = Math.floor(Math.random() * possibleSlots.length) + 1;
    let slots = [];
    let newArray = possibleSlots;
    for (let i = random; i > 0; i--) {
    slots.push(newArray[i])
    }
    return slots.reverse()
}

