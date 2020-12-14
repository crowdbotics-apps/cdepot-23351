import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView184939Reducer from '../features/CalendarView184939/redux/reducers';
import Dashboard1184927Reducer from '../features/Dashboard1184927/redux/reducers'
import EmailAuth184923Reducer from '../features/EmailAuth184923/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView184939: CalendarView184939Reducer,
Dashboard1184927: Dashboard1184927Reducer,
EmailAuth184923: EmailAuth184923Reducer,

});