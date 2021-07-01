import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { BOOKTICKET_MOVIE } from '../../configs/settings';
import { bookTicketAction } from '../../redux/actions/ListMovieAction';
import { bookTicketsAction } from '../../redux/actions/MannageBookTicketAction';
import { taiKhoan } from '../../configs/settings';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';
import { history } from '../../App';
import { NavLink } from 'react-router-dom';
import {widthFormik, useFormik} from 'formik';
import * as yup from 'yup';


export default function Checkout(props) {

     //validate form checkout 
     const {handleBlur, handleSubmit, handleChange, touched, errors, isValid} = useFormik ({
        initialValues: {
            email: "",
            phone: '',
            discount: '',
        },

        validationSchema: yup.object().shape({
            email: yup.string().required("Email không được bỏ trống!").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email không hợp lệ"),
            phone:yup.string().required("Số điện thoại không được bỏ trống !").matches(/^[0-9]+$/,"Số điện thoại bắt buộc phải là số"),
            discount:yup.string().required("Discount code không được bỏ trống !")
        }),

        onSubmit: (values) => {
            
        }
    })


    const [timeM, setTimeM] = useState(5);
    const [timeS, setTimeS] = useState(0);
    const [temp, setTemp] = useState(0);


    const {bookTicket} = useSelector(state => state.ListMovieReducer);
    const {danhSachGheDangDat} = useSelector(state => state.MannageBookTicketReducer); 
  
   

    const dispatch = useDispatch();

    let {id} = props.match.params;
    useEffect (() => {
        
        dispatch(bookTicketAction(id))
    }, [])



    useEffect(() => {
        handleTime();
      }, [temp]);
      const handleTime = () => {
        let tempTime = timeS;
        let time = setInterval(() => {
          tempTime = tempTime - 1;
          if (tempTime === -1) {
            setTimeM(a => a - 1);
            tempTime = 59
          }
          setTimeS(tempTime);
          if (document.getElementById("timephut")) {
            var timeM1 = document.getElementById("timephut").innerText;
          }
          if (Number(timeM1) === 0 && tempTime === 0) {
            clearInterval(time);
          }
          if (Number(timeM1) === 0 && tempTime === 0) {
            Swal.fire({
              title: 'Bạn có muốn tiếp tục ?',
              text: "Đã hết thời gian",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Có'
            }).then((result) => {
              if (result.isConfirmed) {
                setTimeM(5);
                setTemp(temp + 1);
              } else {
                history.push({ pathname: "/" });
              }
            })
          }
    
        }, 1000);
      };



   

    const renderSeat = () => {

        return bookTicket.danhSachGhe?.map((seat,index) => {
           //Xác định ghế đang đặt
           let indexGheDD = danhSachGheDangDat.findIndex(ghedd => ghedd.maGhe === seat.maGhe);
           let classGheDangDat = indexGheDD !== -1 ? 'status-choose': '';

           //Xác định ghế đã đặt và ghế chưa đặt
           let classGheDaDat = seat.daDat ? 'status-someone': '';

           let classGheVip = seat.loaiGhe === 'Vip' ? 'seatvip':'';


           return <Fragment key={index}>
               <button className={`seat ${classGheDaDat} ${classGheVip} ${classGheDangDat}`} disabled={seat.daDat} onClick={()=>{
                   dispatch({
                       type: BOOKTICKET_MOVIE,
                       seat
                   })
               }}>{seat.daDat === true ? 'X': seat.stt} 
               </button>
               {(index + 1) % 16 === 0 ? <br/>: ''}
           </Fragment>
            
        })
    }

    // const renderSeatBooks = () => {
    //     return listSeatBooks.map((seatBook,index)=>{
    //         return <Fragment key={index}>
    //             <span className="text-success font-weight-bold" style={{fontSize:23}}>{seatBook.stt}</span>
    //         </Fragment>
    //     })
    // }

    const toTal = () => {
        return danhSachGheDangDat.reduce((toTals,gheDangD,index) => {
            return toTals += gheDangD.giaVe;
        },0)
    }

  
    let reloadPage = (event) => {
       history.push('/')
    }

    if(!localStorage.getItem(taiKhoan)){
        return <Redirect to ='/login' />
    }


    
    return (
        <div>
            <section className="chooseseat">
                <div className="row">
                    <div className="seatnumber col-md-9">
                        <div className="seattitle">
                            <div className="row" style={{justifyContent:"space-between"}}>
                                <div className="titleleft">
                                    <h2 className="ttl2"> 01 CHỌN GHẾ & THANH TOÁN</h2>
                                    <h3 className="ttl3"> 02 KẾT QUẢ ĐẶT VÉ</h3>
                                </div>
                                <div className="titleright">
                                    Xin chào <span className="user">, </span><NavLink  to = {'/'} onclick = {() => {reloadPage()}} className="out">Thoát</NavLink> 
                                </div>
                            </div>
                        </div>
                        <div className="chooseseat-infor">
                            <div className="container">
                                <div className="infor-theater">
                                    <div className="infor-left">
                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" class="img-fluid logoimg" />
                                        <div className="infor-theater-it">
                                            <p>{bookTicket.thongTinPhim?.tenCumRap}</p>
                                            <span>{bookTicket.thongTinPhim?.ngayChieu} - <span>{bookTicket.thongTinPhim?.gioChieu} - </span> <span>{bookTicket.thongTinPhim?.tenRap}</span></span>
                                        </div>
                                    </div>
                                    <div className="chooseseat-time">
                                        <p className="title">Thời gian giữ ghế</p>
                                        <div className="chooseseat-seat">
                                            <span className="time" id="timephut">0{timeM}</span> : <span>{timeS}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="chooseseat-screen">
                                    <img src="../images/screen.jpg" alt="" className="img-fluid" width="100%"/>
                                </div>
                                <div className="bookseat">
                                    {renderSeat()}
                                </div>
                            </div>
                            <div className="chooseseat-note">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 infor-seat">
                                            Ghế trống 
                                            <span className="status-seat status"></span>
                                        </div>
                                        <div className="col-md-3 infor-seat">
                                            Đang chọn 
                                            <span className="status-choose status"></span>
                                        </div>
                                        <div className="col-md-3 infor-seat">
                                            Ghế đã có người chọn 
                                            <span className="status-someone status"></span>
                                        </div>
                                        <div className="col-md-3 infor-seat">
                                            Ghế Vip
                                            <span className="seatvip status"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 chooseseat-buy">
                        <div className="container">
                            <h4 className="ttl-4">{toTal().toLocaleString()}VNĐ</h4>
                            <div className="informovie">
                                <p className="name">{bookTicket.thongTinPhim?.tenPhim}</p>
                                <p className="theater">{bookTicket.thongTinPhim?.tenCumRap}</p>
                                <p className="time-theater">{bookTicket.thongTinPhim?.ngayChieu} - <span>{bookTicket.thongTinPhim?.gioChieu} - </span> <span>{bookTicket.thongTinPhim?.tenRap}</span></p>
                            </div>
                            <form className="form-buy" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Your Email..." onChange={handleChange} onBlur={handleBlur} />
                                    {errors.email && touched.email ? (<p className="text-danger">{errors.email}</p>) : ("")}
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="phone" placeholder="Your Phone Number ..." onChange={handleChange} onBlur={handleBlur} />
                                    {errors.phone && touched.phone ? (<p className="text-danger">{errors.phone}</p>) : ("")}
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="discount" placeholder="Discount Code ..." onChange={handleChange} onBlur={handleBlur} />
                                    {errors.discount && touched.discount ? (<p className="text-danger">{errors.discount}</p>) : ("")}
                                </div>
                                <button  className="btn btn-buy" onClick={() => {

                                    let userLogin = JSON.parse(localStorage.getItem(taiKhoan));

                                    let thongTinDatVe = {
                                        "maLichChieu": props.match.params.id,
                                        "danhSachVe": danhSachGheDangDat,
                                        "taiKhoanNguoiDung":userLogin.taiKhoan
                                    }
                                     dispatch(bookTicketsAction(thongTinDatVe));

                                }}>Đặt vé</button>
                                <p className="notification">Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
