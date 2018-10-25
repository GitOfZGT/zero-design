import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./initialState";
export default function configureStore() {
	return createStore(rootReducer, initialState);
}
// export default function configureStore() {
// 	const store = createStore(rootReducer, initialState);

// 	if (module.hot) {
// 		// Enable Webpack hot module replacement for reducers
// 		module.hot.accept("./reducers", () => {
// 			const nextRootReducer = require("./reducers/index");
// 			store.replaceReducer(nextRootReducer);
// 		});
// 	}

// 	return store;
// }
