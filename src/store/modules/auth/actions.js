export function signInRequest(email, password) {
  return {
    // The type is a kind of name or id to the action. The Redux
    // will read this key value to execute the appropriate
    // function
    // Payload is a Rocketseat deafult to variable name of parammeters
    // of the action
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
