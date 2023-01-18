import { type } from "os";
import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { YieldExpression } from "typescript";
import { getPolyline } from "../slices/polyline";
import { sagaActions } from "./sagaActions/sagaActions";

const apiPolyline = async (args: Array<string>) => {
  const resp = await fetch(
    `http://router.project-osrm.org/route/v1/driving/${args[0]};${args[1]}`
  );

  return resp.json();
};

interface IPayload {
  payload: Array<string>;
  type: String;
}

interface ILocation {
  location: string;
}

export function* fetchPolylineAsync({ payload }: IPayload): SagaIterator<void> {

  try {
    let result = yield call(() => apiPolyline(payload));

    const waypoints = result["waypoints"].map(
      ({ location }: ILocation) => location
    );

    yield put(getPolyline(waypoints));
  } catch (e) {
    yield put({ type: "FETCH_POLYLINE_FAILED" });
  }
}

function* watchCommonSaga() {
  yield takeEvery(sagaActions.FETCH_POLYLINE_SAGA, fetchPolylineAsync);
}

export default watchCommonSaga;
