import { SEARCH_COINS } from '../actions/SearchActions';

const initialState = {
    search: '',
};

export function searchReducer(state = initialState, action) {
    swith(action);
}
