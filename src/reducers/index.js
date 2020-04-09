import { combineReducers } from 'redux';
import Showmovies from './Showmovies';
import signupreducer from './Signupreducer';
import signinreducer from './Loginreducer'
import addmovies from './Addmoviereducer'
import addactor from './AddActor'
import addactress from './AddActress'
import addproducer from './AddProducer'
import adddirector from './AddDirector'

export default combineReducers({
   Showmovies,
   signupreducer,
   signinreducer,
   addmovies,
   addactor,
   addactress,
   addproducer,
   adddirector,


})