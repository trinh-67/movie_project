import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { editUserAction, profileUserAction } from '../../redux/actions/UserAction';
import moment from "moment";
import { taiKhoan } from '../../configs/settings';
import { Redirect } from 'react-router';
import { useFormik } from 'formik';


export default function Profile(props) {
    const {thongTinUser} = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.getItem(taiKhoan)){
            return <Redirect to="/login"/>;
        }
        let userLogin = JSON.parse(localStorage.getItem(taiKhoan));
        let profileUser = {
            taiKhoan: userLogin.taiKhoan,
        };

        dispatch(profileUserAction(profileUser))
    }, []);

    let updateUser = JSON.parse(localStorage.getItem("taiKhoan"));
    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            soDt: "",
            matKhau: "",
            maLoaiNguoiDung: "KhachHang",
        },
        onSubmit: (values) => {
            values.hoTen = `${updateUser.hoTen}`;
            values.maNhom = "GP06";
            values.taiKhoan = `${updateUser.taiKhoan}`;
            values.email = `${updateUser.email}`;
            dispatch(editUserAction(values));
        }
    })


    return (
        <div className="main-height admin-main profile-admin">
            <div className="container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Lịch Sử Đặt Vé</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Thông Tin Cá Nhân</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active history-tab" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <table className="table table-hover">
                            <thead>
                                <th>STT</th>
                                <th>Tên Phim</th>
                                <th>Tên Cụm Rạp</th>
                                <th>Ngày Đặt</th>
                                {/* <th>Tổng Tiền</th> */}
                            </thead>
                            <tbody>
                                {thongTinUser.thongTinDatVe?.map((user,index) => {
                                    return (
                                        <Fragment key={index}>
                                            {user.danhSachGhe?.map((ghe,index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td></td>
                                                        <td>{user.tenPhim}</td>
                                                        <td>{ghe.tenRap} - {ghe.tenGhe}</td>
                                                        <td>{moment(user.ngayDat).format("DD/MM/YYYY")}</td>
                                                        {/* <td>{ghe.tongTien}</td> */}
                                                    </tr>
                                                )
                                            })}
                                        </Fragment>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <form className="form-profile" onSubmit={handleSubmit}>
                           <div className="row">
                               <div className="form-left col-md-6">
                                    <div className="form-group">
                                        <label className="label">Email</label>
                                        <input type="text" name="email" className="form-control" value = {thongTinUser.email} onChange={handleChange} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Họ Tên</label>
                                        <input type="text" name="hoTen" className="form-control" value = {thongTinUser.hoTen} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Số Điện Thoại</label>
                                        <input type="text" name="soDt" className="form-control" value={thongTinUser.soDT} onChange={handleChange} />
                                    </div>
                               </div>
                               <div className="form-right col-md-6">
                                    <div className="form-group">
                                        <label className="label">Tài Khoản</label>
                                        <input type="text" name="taiKhoan" className="form-control" value = {thongTinUser.taiKhoan} onChange={handleChange} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Mật Khẩu</label>
                                        <input type="password" name="matKhau" className="form-control" value={thongTinUser.matKhau} onChange={handleChange} />
                                    </div>
                               </div>
                               {/* <div className="form-group inner-btn">
                                   <button type="submit" className="btn btn-submit btn-all-form">Cập Nhật</button>
                               </div> */}
                           </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
