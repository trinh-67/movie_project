import axios from "axios";
import { domain, LIST_CINEMA_SHOWTIME, LIST_LOGO, LIST_MOVIE_SHOW_TIME, LIST_THEATER_SYSTEM_LOGO } from "../../configs/settings";

export const ListLogoAction = () => {
   return async (dispatch) => {
       try{
         const result = await axios({
             url: `${domain}/api/QuanLyRap/LayThongTinHeThongRap`,
             method: 'GET'
         });
         dispatch({
             type: LIST_LOGO,
             listLogoMovie: result.data, 
         })
       }catch(error){
           console.log(error);
       }
   }
}

export const ListCenemaShowAction = (maHeThongRap) => {
    return async (dispatch) => {
        try{
            const result = await axios({
                url: `${domain}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`, 
                method: "GET"
            })
            dispatch({
                type: LIST_CINEMA_SHOWTIME,
                listCinema: result.data,
            })
        }catch(error){
            console.log(error);
        }
    }
}
// export const listLogoShowTimeTabAction = (maHT) => {
//     return {
//         type: LIST_THEATER_SYSTEM_LOGO,
//         maHT
//     }
// }

export const ListMovieShowTimeAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios ({
                url: `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02`, 
                method: "GET"
            });
            dispatch ({
                type: LIST_MOVIE_SHOW_TIME,
                listMovie: result.data
            })
        }catch(error){
            console.log(error);
        }
    }
}


// export const ListMovieCumRapAction = (maHeThongRap) => {
//     return async (dispatch) => {
//         try {
//             const result = await axios ({
//                 url: `${domain}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
//                 method: "GET"
//             });
//             dispatch ({
//                 type: "LIST_CUM_RAP",
//                 listCumRap: result.data

//             })
//         }catch(error){}
//     }
// }





