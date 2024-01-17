import { call, put, all, takeLatest } from 'redux-saga/effects'
import taskSlice from '../../slices/task-slice'
import taskService from '../../services/task-service'

const {
    getReferralData,
    getReferralDataSuccess,
    getReferralDataFailed,
    addReferral,
    addReferralSuccess,
    addReferralFailed,
    editReferral,
    editReferralSuccess,
    editReferralFailed,
    deleteReferral,
    deleteReferralSuccess,
    deleteReferralFailed
} = taskSlice.actions

function* getReferral(action: any) {
    try {
        const { data } = yield call(taskService.getTask, action.payload);
        yield put(getReferralDataSuccess(data));
    } catch (e) {
        yield put(getReferralDataFailed(e));
    }
}

function* addReferralSaga(action : any) {
    try {
      const { data } = yield call(taskService.addTaskname, action.payload)
      yield put(addReferralSuccess(data))
    } catch (error) {
      yield put(addReferralFailed(error))
    }
  }
  function* editReferralSaga(action : any) {
    try {
      const { data } = yield call(taskService.editTaskname, action.payload)
      yield put(editReferralSuccess(data))
    } catch (error) {
      yield put(editReferralFailed(error))
    }
  }

  function* deleteReferralSaga(action : any) {
    try {
      yield call(taskService.deleteTask, action.payload)
      yield put(deleteReferralSuccess())
    } catch (error) {
      yield put(deleteReferralFailed(error))
    }
  }

export default function* root() {
    yield all([
        takeLatest(getReferralData, getReferral),
        takeLatest(addReferral, addReferralSaga),
        takeLatest(editReferral, editReferralSaga),
        takeLatest(deleteReferral, deleteReferralSaga)
    ])
}