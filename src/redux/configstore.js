import {applyMiddleware, combineReducers,createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import ListMovieReducer from './reducers/ListMovieReducer';
import ShowTimeMovieReducer from './reducers/ShowTimeMovieReducer';
import UserReducer from './reducers/UserReducer';
import MannageBookTicketReducer from './reducers/MannageBookTicketReducer';
import LoadingReducer from './reducers/LoadingReducer';   


//State tổng của ứng dụng
const rootReducer = combineReducers({
    ListMovieReducer,
    ShowTimeMovieReducer,
    UserReducer,
    MannageBookTicketReducer,
    LoadingReducer
});

//apply thunk để xử lý dispatch api
export const store = createStore(rootReducer,applyMiddleware(reduxThunk));