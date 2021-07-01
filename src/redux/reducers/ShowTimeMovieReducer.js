import { LIST_CINEMA_SHOWTIME, LIST_LOGO, LIST_MOVIE_SHOW_TIME, LIST_THEATER_SYSTEM_LOGO } from "../../configs/settings"

const stateDefault = {
 listLogoMovie: [],
 listMovie: [],
 listCinema: [],
//  listCumRap: [],
}

export default (state = stateDefault, action) => {
    switch (action.type) {
    case LIST_LOGO: {
        state.listLogoMovie = [...action.listLogoMovie];  
        return { ...state}
    }
    case LIST_CINEMA_SHOWTIME: {
        state.listCinema = [...action.listCinema];
        // state.maCumRap = action.maCumRap;
        return {...state}
    }  
    // case LIST_THEATER_SYSTEM_LOGO: {
    //     state.maHeThongRap = action.maHeThongRap;
    //     return {...state}
    // }
    case LIST_MOVIE_SHOW_TIME: {
        state.listMovie = [...action.listMovie];
        return {...state}
    }

    // case "LIST_CUM_RAP": {
    //     state.listCumRap = [...action.listCumRap];
    //     return {...state}
    // }




    default: {
        return state
    }
       
    }
}
