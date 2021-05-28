import { combineReducers, createStore } from "redux"
import { personReducer, roomReducer } from "./reducers"

export const store = createStore(combineReducers({people: personReducer, rooms: roomReducer}))