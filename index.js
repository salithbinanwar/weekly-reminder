const today = new Date();

const numbers = today.getDate();

if(today.getHours() < 17 && numbers === 0){
    document.getElementById('gotIct').innerHTML = 'Physics private will satrt at 05:00 PM'
}else if( today.getHours() > 17 && numbers === 0) {
    document.getElementById('gotIct').innerHTML = 'Physics private is over'
    document.getElementById('reminder').innerHTML = 'ICT private tommorrow 05:00 PM'
}


else if(today.getHours() < 17 && numbers === 1){
    document.getElementById('gotIct').innerHTML = 'ICT private will satrt at 05:00 PM'
}else if ( today.getHours() > 17 && numbers === 1) {
    document.getElementById('gotIct').innerHTML = 'ICT private is over'
    document.getElementById('reminder').innerHTML = 'Physics private tommorrow 06:30 PM'
}


if(today.getHours() < 17 && numbers === 2){
    document.getElementById('gotIct').innerHTML = 'Physics private will satrt at 05:00 PM'
}else if( today.getHours() > 17 && numbers === 2) {
    document.getElementById('gotIct').innerHTML = 'Physics private is over'
    document.getElementById('reminder').innerHTML = 'ICT private tommorrow 05:00 PM'
}


else if(today.getHours() < 17 && numbers === 3){
    document.getElementById('gotIct').innerHTML = 'ICT private will satrt at 05:00 PM'
}else if ( today.getHours() > 17 && numbers === 3) {
    document.getElementById('gotIct').innerHTML = 'ICT private is over'
    document.getElementById('reminder').innerHTML = 'Physics private tommorrow 06:30 PM'
}


if(today.getHours() < 17 && numbers === 4){
    document.getElementById('gotIct').innerHTML = 'Physics private will satrt at 05:00 PM'
}else if( today.getHours() > 17 && numbers === 4) {
    document.getElementById('gotIct').innerHTML = 'Physics private is over'
    document.getElementById('reminder').innerHTML = 'ICT private tommorrow 05:00 PM'
}

else if(today.getHours() < 17 && numbers === 5){
    document.getElementById('gotIct').innerHTML = 'Bhai ajk chuti'
}else if ( today.getHours() > 17 && numbers === 5) {
    document.getElementById('gotIct').innerHTML = ''
    document.getElementById('reminder').innerHTML = 'Bhai ajk chuti'
}


else if(today.getHours() < 17 && numbers === 6){
    document.getElementById('gotIct').innerHTML = 'ICT private will satrt at 05:00 PM'
}else if ( today.getHours() > 17 && numbers === 6) {
    document.getElementById('gotIct').innerHTML = 'ICT private is over'
    document.getElementById('reminder').innerHTML = 'Physics private tommorrow 06:30 PM'
}