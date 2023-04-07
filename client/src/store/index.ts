import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {AnyAction, applyMiddleware, compose, createStore, Store} from "redux";
import {reducer, RootState} from "@/store/reducers";
import thunk, {ThunkDispatch} from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';



const makeStore = (context: Context) => createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
