import axios from "axios";
import { history } from "../../App";
import {  accessToken, CLOSELOADING, domain, EDIT_USER, INFOR_ALL_USER, LOGIN, LOGOUT, maNhom, OPENlOADING, PROFILE_USER, REGISTER } from "../../configs/settings"


export const UserAction = (nguoiDung) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: nguoiDung
            });

            //lấy gía trị api gửi về lưu vào localstorage
            localStorage.setItem("accessToken",result.data.accessToken);
            localStorage.setItem("taiKhoan",JSON.stringify(result.data));

            //Đăng nhập thành công chuyển hướng về trang home
            history.push('/');
            dispatch({
                type: LOGIN,
                taiKhoan: result.data.taiKhoan
            })
        }catch(errors) {
            console.log(errors);
        }
    }
}

export const RegisterAction = (user) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${domain}/api/QuanLyNguoiDung/DangKy`,
                method: 'POST',
                data: user
            });
            //Lấy giá trị api gửi về lưu vào localstorage
            if (result.status === 200) {
                // localStorage.setItem("accessToken",result.data.accessToken);
                // localStorage.setItem("taiKhoan",JSON.stringify(result.data)); 
                alert("Đăng ký thành công");
            }

            //Đăng nhập thành công chuyển hướng về trang home
            history.push('/login');
            dispatch({
                type: REGISTER,
                taiKhoan: result.data.taiKhoan
            })
        }catch(errors){
            console.log(errors);
        }
    }
}



//export const LogoutAction = () => {
    //return  (dispatch) => {
        //localStorage.removeItem(accessToken);
        // localStorage.setItem(taiKhoan,JSON.stringify()); 
        // setAuthorizationToken(false)
       // dispatch({type: LOGOUT});
        //history.push('/')
    //}
//}
export const profileUserAction = (user) => {
    return async (dispatch) => {
        dispatch({
            type: OPENlOADING
        });
        setTimeout(async() => {
            try {
                let result = await axios({
                    url: `${domain}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                    method: "POST",
                    data: user,
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem(accessToken),
                    }
                })
                // if(result.status === 200) {
                //     alert("Demo")
                // }
                dispatch({
                    type: PROFILE_USER,
                    thongTinUser: result.data
                })
            }catch(errors){
                console.log(errors);
            }
            dispatch({
                type: CLOSELOADING 
            })
        },700)
        
    }
}

/**Edit user */

export const editUserAction =(user) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `${domain}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: "PUT",
                data: user,
            });
            dispatch({
                type: EDIT_USER,
                taiKhoan: result.data.taiKhoan,
            })
        }catch(errors){
            console.log(errors);
        }
    }
}

/**Get all infor user */
export const inforUserAllAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`,
                method: 'GET',
            });
            dispatch({
                type: INFOR_ALL_USER,
                thongTinUserAll: result.data
            })
        }catch(errors){
            console.log(errors);
        }
    }
}

/**Add user */
export const addUserAction = (value, token) => {
   return async () => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/ThemNguoiDung`,
        method: "POST",
        data: value,
        headers: { Authorization: "Bearer " + token },
      });
      window.location.reload();
      if (result.status === 200) {
        alert("Tạo Tài Khoản Thành Công");
      }
    } catch (err) {
      alert(err.response?.data);
    }
  };
  };

  /**Delete user */
  export const deleteUserAction = (taiKhoan, token) => {
    return async () => {
        try {
          const result = await axios({
            url: `${domain}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method: "DELETE",
            data: taiKhoan,
            headers: {
              Authorization: "Bearer  " + token,
            },
          });
    
          if (result.status === 200) {
            alert("Xóa thành công");
            window.location.reload();
          }
          
        } catch (err) {
          alert(err.response?.data);
        }
      };
  }

  





