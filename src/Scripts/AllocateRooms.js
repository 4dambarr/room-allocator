function AllocateRooms(choices) {

    function checkTaken(val) {
        console.log("----")
        console.log(val, taken)
        for (let room of taken) {
            if (val === room.room){
                console.log("Sorted")
                return true
            }
        }
        console.log("not sorted")
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
            holder[room.name] = [];
        }
        return holder
    }

    // Object containing conflicts for rooms
    var conflict;

    // Variable to track if there is a conflict
    var isConflict;

     // Array of taken rooms, {name: name, room: room}
    var taken = []
    console.log("choices", choices)
    var length = choices[0].preferences.length
    var rooms = choices[0].preferences

    for (let i = 0; i < length; i++){
        conflict = resetConflict(rooms)

        for (let person=0; person < choices.length; person++){
            if (!checkTaken(choices[person].preferences[i].name) && !checkSorted(choices[person].name)){
                isConflict = false
                for (let other=0; other< choices.length; other++){
                    if (choices[person].preferences[i] === choices[other].preferences[i] && choices[person] !== choices[other] && !checkSorted(choices[other].name) && !isConflict){
                        isConflict = true
                        conflict[choices[person].preferences[i].name].push(choices[person].name)
                    }
                }
            }

            if (!isConflict && !checkTaken(choices[person].preferences[i].name)){
                taken.push({room: choices[person].preferences[i].name, name: choices[person].name})
            }
        }

        for (var room of Object.keys(conflict)) {
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