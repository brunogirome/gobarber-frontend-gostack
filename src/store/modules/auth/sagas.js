import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

// Exporting the functions makes it easier to test then after
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    // Call returns a promise, like an async function. The yield is KIND OF
    // equivalent to an await statement
    // On call as well, you should pass the function without "()", then pass
    // the parammeters separated. In this case, 'sessions' is the rout to
    // session controller URL, and { email, password } is an object to
    // authenticate to the application, the json body
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('The user is not a service provider.');
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Sign-in faluire, verify your credencials.');
    yield put(signFailure());
  }
}

// TakeLatest listen the latest action call, then execute the function of the
// second parammeter
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
