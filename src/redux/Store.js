import {combineReducers, configureStore} from "@reduxjs/toolkit"
import AllProducts from "./Reducers/Products"
import Auth from "./Reducers/Auth"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/es/storage"


const persistConfig = {
    key: "root",
    storage,
}

const reducer = combineReducers({
    AllProducts,
    Auth,
})


const persistedReducer = persistReducer(persistConfig, reducer)

const Store = configureStore({
    reducer: persistedReducer,
})

export default Store;