function AllocateRooms(choices) {

    function checkTaken(val) {
        for (let room of taken) {
            if (val === room.room){
                return true
            }
        }
        return false
    }

    function checkSorted(person){
        for (let room = 0; room <taken.length; room++) {
            if (taken[room].name === person){
                return true
            }
        }
        return false
    }

    function resetConflict(rooms){
        var holder = {}
        for (let room of rooms) {
            holder[room] = [];
        }
        return holder
    }

    // Object containing conflicts for rooms
    var conflict;

    // Variable to track if there is a conflict
    var isConflict;

     // Array of taken rooms, {name: name, room: room}
    var taken = []

    var length = choices[0].rooms.length
    var rooms = choices[0].rooms

    for (let i = 0; i < length; i++){
        conflict = resetConflict(rooms)
        for (let person=0; person < choices.length; person++){
            if (!checkTaken(choices[person].rooms[i]) && !checkSorted(choices[person].name)){
                isConflict = false
                for (let other=0; other< choices.length; other++){
                    if (choices[person].rooms[i] === choices[other].rooms[i] && choices[person] !== choices[other] && !checkSorted(choices[other].name) && !isConflict){
                        isConflict = true
                        conflict[choices[person].rooms[i]].push(choices[person].name)
                    }
                }
            }

            if (!isConflict && !checkTaken(choices[person].rooms[i])){
                taken.push({room: choices[person].rooms[i], name: choices[person].name})
            }
        }
        for (var room in conflict) {
            if (!checkTaken(room) && conflict[room].length > 0){
                let rand = Math.floor(Math.random() * Math.floor(conflict[room].length))
                let person = conflict[room][rand]
                taken.push({name: person, room: room})
            }
        }

    }

    return taken
}

export default AllocateRooms