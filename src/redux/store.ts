import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./slices/appSlice";

// Remember add new reducer to here

interface RootStateCustom {
    app: AppState;
    user: UserState;
    cart: CartState;
}

const persistedState = loadFromLocalStorage();

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import rootReducer from "./rootReducer";
import { loadFromLocalStorage, saveToLocalStorage } from "./store/middleware";
import { UserState } from "./slices/userSlice";
import { CartState } from "./slices/cartSlice";
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
