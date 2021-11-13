import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dadosReducer from "./dadosReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, dadosReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
