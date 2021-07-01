import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useForm, Controller } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ListLogoAction, ListCenemaShowAction, ListMovieShowTimeAction} from '../../redux/actions/ShowTimeMovieAction';

export default function ModalShowCalendar() {

    const {accessToken} = useSelector(state => state.UserReducer);
    const {listLogoMovie, listMovie, listCinema} = useSelector(state => state.ShowTimeMovieReducer);

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: {errors}, control,} = useForm();
    
    //   const onSubmit = (data) => {
    //     dispatch((data, accessToken));
    //   };
    
    useEffect(() => {
        dispatch(ListLogoAction())
        // dispatch(detailsMoviesAction())
    },[])
    // useEffect(() => {
    //     dispatch(ListCenemaShowAction())
    // },[])

    // Lấy tên hệ thống rạp
    const renderHeThongRap = () => {
        return listLogoMovie?.map((item,index)=>{
            return (
                <option key={index} value={item.maHeThongRap}>{item.tenHeThongRap}</option>
            )
        })
    }
    //Lấy cụm rạp
    const renderCumRap = () => {
            return listCinema?.map((item,index)=>{
                return (
                    <option key={index} value={item.maCumRap}>{item.tenCumRap}</option>
                )
            })
      
    }
    //rap
    // const renderRap = () => {
    //     return listCinema?.map((item1,index)=>{
    //         return item1.danhSachRap?.map((item,index)=>{
    //             return (
    //                 <option key={index} value={item.maRap}>{item.tenRap}</option>
    //             )
    //         })
    //     })
    // }
      
    return (
        <div className="modal fade modal-calendar" id="showcalendar" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Lịch chiếu</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row form-group">
                                        <div className="item-label col-md-3">
                                            <label for="">Hệ thống rạp</label>
                                        </div>
                                        <div className="select-setion col-md-9">
                                            <select className="form-control" placeholder="Chọn hệ thống rạp">
                                                {renderHeThongRap()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="item-label col-md-3">
                                            <label for="">Cụm rạp</label>
                                        </div>
                                        <div className="select-setion col-md-9">
                                            <select className="form-control" placeholder="Chọn cụm rạp">
                                                {renderCumRap()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="item-label col-md-3">
                                            <label for="">Rạp</label>
                                        </div>
                                        <div className="select-setion col-md-9">
                                            <select className="form-control" placeholder="Chọn rạp">
                                                {/* {renderRap()} */}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row form-group">
                                        <div className="item-label col-md-3">
                                            <label for="ngayChieuGioChieu">Ngày Chiếu</label>
                                        </div>
                                        <div className="select-setion col-md-9">
                                            <Controller name="ngayChieuGioChieu"  control={control} defaultValue={null}  render={({ field }) => (
                                                <DatePicker onChange={(e) => field.onChange(e)} selected={field.value} placeholderText = "Vui lòng chọn" dateFormat="dd/MM/yyyy" isClearable />
                                            )} className="form-control" type="text" placeholder="Chọn ngày chiếu" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="item-label col-md-3">
                                            <label for="">Thời lượng</label>
                                        </div>
                                        <div className="select-setion col-md-9">
                                            <select className="form-control" placeholder="Chọn thời lượng">
                                                <option value={120}>120 phút</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="item-label col-md-3">
                                            <label for="">Mã nhóm</label>
                                        </div>
                                        <div className="select-setion col-md-9">
                                            <input className="form-control" type="text" disabled name="" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="item-label col-md-3">
                                            <label for="">Giá vé</label>
                                        </div>
                                        <div className="select-setion col-md-9">
                                            <select className="form-control" placeholder="Chọn giá vé">
                                                <option value={75000}>75000</option>
                                                <option value={90000}>90000</option>
                                                <option value={120000}>120000</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-item">
                                    <button type="submit" className="btn btn-add">Tạo lịch chiếu</button>
                                    <a href="#" className="btn btn-back">Trở về trang trước</a>
                                </div>
                            </div>
                            {/* show infor calendar */}
                            <div className="select-infor">
                                <h2 className="ttl-2">Chọn thông tin hiển thị lịch chiếu của phim</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row form-group">
                                            <div className="item-label col-md-3">
                                                <label for="">Hệ thống rạp</label>
                                            </div>
                                            <div className="select-setion col-md-9">
                                                <select className="form-control">
                                                    <option>Chọn hệ thống rạp</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row form-group">
                                            <div className="item-label col-md-3">
                                                <label for="">Cụm rạp</label>
                                            </div>
                                            <div className="select-setion col-md-9">
                                                <select className="form-control">
                                                    <option>Chọn cụm rạp</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-show-infor">
                                    <thead>
                                        <tr>
                                            <th>Mã lịch chiếu</th>
                                            <th>Ngày chiếu giờ chiếu</th>
                                            <th>Giá vé</th>
                                            <th>Thời lượng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* end show infor calendar */}
                        </form>
                    </div>
                </div>
            </div>
    </div>
    )
}
