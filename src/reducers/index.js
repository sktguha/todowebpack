import {
  configureStore,
  getDefaultMiddleware,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

const addTodo = createAction("ADD_TODO")
const toggleTodo = createAction("TOGGLE_TODO");
let state = {
	todos: [
				{
					id: 0,
					text : "hi",
					done: true
				},
				{
					id: 1,
					text : "let's go",
					done: false
				},
				{
					id: 2,
					text : "test todo",
					done: false
				},
			]
		};
const toggle = val => !val;
let id = 3;
const reducer = createReducer(state, {
	[addTodo] : (state, action) => {
		state.todos.push({
			id : id++,
			text : action.payload.text,
			done:false
		})
	},
	[toggleTodo] : (state, action) => {
		let idx = state.todos.findIndex(todo => todo.id === action.payload.id*1)
		state.todos[idx].done = toggle(state.todos[idx].done);
	}
})
export default reducer;