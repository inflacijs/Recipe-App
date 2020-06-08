

function TimeConvert({timeInMinutes}) {
    var num = timeInMinutes;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    
    if(rhours > 0) {
        return rhours + " h " + rminutes + " min."
    }else{
        return rminutes + " min."
    }
    
    }

export default TimeConvert