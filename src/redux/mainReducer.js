import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard1184927Reducer from '../features/Dashboard1184927/redux/reducers'
import EmailAuth184923Reducer from '../features/EmailAuth184923/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard1184927: Dashboard1184927Reducer,
EmailAuth184923: EmailAuth184923Reducer,

});