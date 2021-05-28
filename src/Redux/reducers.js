const initialRooms = []

export const roomReducer = function (state = initialRooms, action) {
    let tmp = []
    switch (action.type) {
        case "ADD_ROOM":
            var id;
            if (state.length === 0) {
                id = 0
            } else {
                id = state[state.length - 1].id + 1
            }
            return [...state, {id: id, name: action.name}]
        case "REMOVE_ROOM":
            for (let room of state) {
                if (room.id != action.id) {
                    tmp.push(room)
                }
            }
            return tmp;
        case "UPDATE_NAME":
            for (let room of state) {
                if (room.id === action.id) {
                    tmp.push({id: room.id, name: action.name})
                } else {
                    tmp.push(room)
                }
            }
            return tmp;
        default:
            return state;
    }
}

const initialPeople = []

export const personReducer = function (state = initialPeople, action) {
    let tmp = []
    switch (action.type) {
        case "ADD_PERSON":
            var id;
            if (state.length === 0) {
                id = 0
            } else {
                id = state[state.length - 1] + 1
            }
            console.log(state)
            return [...state, {id: id, name: action.name, preferences: action.preferences, allocated_room: false}];
        case "ADD_ROOM":
            if (state[0]) {
                var roomID;
                if (state[0].preferences.length > 0) {
                    roomID = state[0].preferences[state[0].preferences.length - 1].id + 1;
                } else {
                    roomID = 0;
                }
                for (let person of state) {
                    tmp.push({id: person.id, name: person.name, preferences: [...person.preferences, {id: roomID, name: action.name}], allocated_room: person.allocated_room})
                }
                return tmp
            } else {
                return state
            }
        default:
            return state;
    }
}