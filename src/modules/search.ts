import { createAction, createReducer } from "typesafe-actions";

//액션 타입 선언
const SET_SEARCH = 'search/SET_SEARCH' as const;

//액션 생성 함수
export const setSearch = createAction(SET_SEARCH)<string|undefined>();

type SearchAction = ReturnType<typeof setSearch>;

export type SearchInputState = {
    input_text: string | undefined;
}

const initialState: SearchInputState = {
    input_text: "",
}

const search = createReducer<SearchInputState, SearchAction>(initialState, {
    [SET_SEARCH]: (state, action) => ({
        ...state,
        input_text: action.payload
    })
})

export default search;