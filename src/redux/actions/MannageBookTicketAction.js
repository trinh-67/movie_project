import axios from "axios"
import { BOOKTICKET_MOVIE, domain } from "../../configs/settings"
import { history } from "../../App";
import { bookTicketAction } from "./ListMovieAction";

export const bookTicketsAction = (thongTinDatVe) => {
   return async (dispatch) => {
       try {
           const result = await axios({
                url :`${domain}/api/QuanLyDatVe/DatVe`,  
                method: 'POST',
                data: thongTinDatVe,//JWT
                headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')}  
           });

           if(result.status === 200){
            alert('Đặt vé thành công!');
            //load về trang đầu đặt vé
            // history.push('/');

            //Load về tại trang
            history.push(`/checkout/${thongTinDatVe.maLichChieu}`); 
            //Gọi lại action lấy thông tin phòng vé (đã xây dựng sẵn)
            dispatch(bookTicketAction(thongTinDatVe.maLichChieu));
        }
        console.log('result',result);
        
        //    dispatch({
        //        type: BOOKTICKET_MOVIE,
        //        listSeatBooks: result.data
        //    })
       } catch(error){
           console.log(error);
       }
   }
}
