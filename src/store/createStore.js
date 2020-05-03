import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  // If the application is running on development environment, the enhancer
  // will connect to reactotron for monitoring/debug of saga middlewares, and
  // then, apply the middlewares on the redux store variable
  // If not, the enhancer should only apply the middlewares on store variable,
  // returning the function 'applyMiddleware'
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
