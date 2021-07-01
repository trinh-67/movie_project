import { BOOKTICKET_MOVIE } from "../../configs/settings"

const stateDefault = {
    danhSachGheDangDat: []
}

export default (state = stateDefault, action) => {
    switch (action.type) {
        case BOOKTICKET_MOVIE: {

           //Kiểm tra ghế có trong mảng danhSachGheDangDat => có thì xóa, không có thì thêm vào
        let index = state.danhSachGheDangDat.findIndex(gheDD =>gheDD.maGhe === action.seat.maGhe);
        if(index !== -1){
            state.danhSachGheDangDat.splice(index,1);
        }else {
            state.danhSachGheDangDat.push(action.seat);
        }
        //Cập nhật lại state
        state.danhSachGheDangDat = [...state.danhSachGheDangDat] 
        return { ...state }
        }
            

        default: return {...state}
    }
}
