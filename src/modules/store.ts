import { AxiosError } from "axios";
import { ThunkAction } from "redux-thunk";
import { createAction, createReducer } from "typesafe-actions";
import { RootState } from ".";
import { getStoreFile, StoreListPage } from "../api/pet";

//액션 타입 선언
const GET_STORE = "store/GET_STORE" as const;
const GET_STORE_SUCCESS = "store/GET_STORE_SUCCESS" as const;
const GET_STORE_ERROR = "store/GET_STORE_ERROR" as const;

//액션 생성 함수
export const getStore = createAction(GET_STORE)();
export const getStoreSuccess = createAction(GET_STORE_SUCCESS)<StoreListPage>();
export const getStoreError = createAction(GET_STORE_ERROR)<unknown>();

export function getStoreThunk(offset: number, limit: number = 12, table:string): ThunkAction<void, RootState, null, StoreAction> {
    return async (dispatch) => {
        dispatch(getStore());
        try {
            const storePage = await getStoreFile(offset, limit, table);
            dispatch(getStoreSuccess(storePage));
        } catch (e) {
            dispatch(getStoreError(e));
        }
    };
}

type StoreAction = ReturnType<typeof getStore | typeof getStoreSuccess | typeof getStoreError>;

export type StorePageState = {
    storeFile: {
        loading: boolean;
        error: unknown | null;
        data: StoreListPage | null;
    };
};

const initialState: StorePageState = {
    storeFile: {
        loading: false,
        error: null,
        data: null,
    },
};

const store = createReducer<StorePageState, StoreAction>(initialState, {
    [GET_STORE]: (state) => ({
        ...state,
        storeFile: {
            loading: true,
            error: null,
            data: null,
        },
    }),
    [GET_STORE_SUCCESS]: (state, action) => ({
        ...state,
        storeFile: {
            loading: false,
            error: null,
            data: action.payload,
        },
    }),
    [GET_STORE_ERROR]: (state, action) => ({
        ...state,
        storeFile: {
            loading: false,
            error: action.payload,
            data: null,
        },
    }),
});

export default store;
