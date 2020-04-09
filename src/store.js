import {createStore } from 'redux';
import todo from './reducers/index'
const store=createStore(todo);



export default store;