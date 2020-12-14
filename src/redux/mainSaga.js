import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView184939Saga from '../features/CalendarView184939/redux/sagas';
import EmailAuth184923Saga from '../features/EmailAuth184923/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView184939Saga,
EmailAuth184923Saga,
    
  ]);
}