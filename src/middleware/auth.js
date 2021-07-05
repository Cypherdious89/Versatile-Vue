/* jshint esversion: 6 */

export default function(next, store) {
  if (!store.state.isLoggedIn) {
    next("/");
    store.commit("setLoginModal", true);
  } else {
    next();
  }
}
