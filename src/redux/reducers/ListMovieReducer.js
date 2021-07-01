import { BOOK_TICKET, COMMENT_MOVIE, DETAIL_MOVIES, LIST_MOVIE_COMING_SOON, LIST_MOVIE_NOW_SHOW } from "../../configs/settings";
import DataComment from '../../pages/Details/dataComment.json';

const stateDefault = {
    listMovieShow: [],
    listMovieComingSoon: [],
    detailsMovies: {},
    bookTicket: {},

    rating: 0,
    listComment: DataComment,
}

export default (state = stateDefault, action) => {
    switch (action.type) {
        case LIST_MOVIE_NOW_SHOW: {
            state.listMovieShow = [...action.listMovieShow];
            return { ...state }
        }
        case LIST_MOVIE_COMING_SOON: {
            state.listMovieComingSoon = [...action.listMovieComingSoon];  
            return {...state}
        }

        case DETAIL_MOVIES: {
            state.detailsMovies = action.detailsMovies;
            return { ...state }
        }

        case BOOK_TICKET: {
            state.bookTicket = action.bookTicket;
            return { ...state }
        }
        case COMMENT_MOVIE: {
            if (localStorage.getItem("userHome")){
                let info = JSON.parse(localStorage.getItem("userHome"));
                state.listComment = [{ user: info.hoTen, comment: action.cmt, rating: state.rating}, ...state.listComment];
            }
            return {...state}
        }

        default: {
            return { ...state}
        }
        
    }
}
