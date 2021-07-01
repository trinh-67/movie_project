import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useFormik} from 'formik';
import * as yup from 'yup';
import { addUserAction } from '../../redux/actions/UserAction';
import { maNhom } from '../../configs/settings';

export default function EditUser(props) {

    // const [dsUser, setDSUser] = useState(null);
    const dispatch = useDispatch();
    const {accessToken} = useSelector(state => state.UserReducer);

     
    const {handleChange, handleSubmit, errors, handleBlur, touched, isValid} = useFormik({
        initialValues: {
            maNhom: "GP06",
            taiKhoan: "",
            matKhau: "",
            email: "",
            hoTen: "",
            soDt: "",
            maLoaiNguoiDung: "",
        },
        validationSchema: yup.object().shape({
           maNhom: yup.string().required("Tài khoản không được bỏ trống!"),
           taiKhoan: yup.string().required("Tài khoản không được bỏ trống!"),
           matKhau: yup.string().required("Mật khẩu không được bỏ trống!").min(6, "Tài khoản tối thiểu phải 6 ký tự"),
           email: yup.string().required("Email không được bỏ trống!").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Email không hợp lệ"),
           hoTen: yup.string().required("Họ tên không được bỏ trống!").matches( /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +"ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +"ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/, "Họ tên phải nhập chữ"),
           soDt: yup.string().required("Số điện thoại không được bỏ trống!").matches(/^[0-9]+$/, "Số điện thoại bắt buộc phải là số "),
           maLoaiNguoiDung: yup.string().required("Mã loại người dùng không được bỏ trống!"),
        }),
        onSubmit: (value) => {
           dispatch(addUserAction(value,accessToken))
           console.log(value);
        }
    })

    


    return (
        <div className="block">
            <div className="modal fade" id="edituser" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sửa người dùng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-add-user"onSubmit={handleSubmit}>
                                <div className="row form-group">
                                    <label for="" className="col-md-2">Mã nhóm</label>
                                    <div className="col-md-10">
                                        <input type="text" name="maNhom" className="form-control" value={maNhom} disabled onChange={handleChange} onBlur={handleBlur} />
                                        {errors.maNhom && touched.maNhom ? (<p className="text-danger">{errors.maNhom}</p>) : ("")}
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <label for="" className="col-md-2">Tài Khoản</label>
                                    <div className="col-md-10">
                                        <input type="text" name="taiKhoan" className="form-control" placeholder="Nhập tài khoản" onChange={handleChange} onBlur={handleBlur} />
                                        {errors.taiKhoan && touched.taiKhoan ? (<p className="text-danger">{errors.taiKhoan}</p>) : ("")}
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <label for="" className="col-md-2">Mật Khẩu</label>
                                    <div className="col-md-10">
                                        <input type="password" name="matKhau" className="form-control" placeholder="Nhập mật khẩu" onChange={handleChange} onBlur={handleBlur} />
                                        {errors.matKhau && touched.matKhau ? (<p className="text-danger">{errors.matKhau}</p>) : ("")}
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <label for="" className="col-md-2">Email</label>
                                    <div className="col-md-10">
                                        <input type="text" name="email" className="form-control" placeholder="Nhập email" onChange={handleChange} onBlur={handleBlur} />
                                        {errors.email && touched.email ? (<p className="text-danger">{errors.email}</p>) : ("")}
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <label for="" className="col-md-2">Họ tên</label>
                                    <div className="col-md-10">
                                        <input type="text" name="hoTen" className="form-control" placeholder="Nhập họ tên" onChange={handleChange} onBlur={handleBlur} />
                                        {errors.hoTen && touched.hoTen ? (<p className="text-danger">{errors.hoTen}</p>) : ("")}
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <label for="" className="col-md-2">Số điện thoại</label>
                                    <div className="col-md-10">
                                        <input type="text" name="soDt" className="form-control" placeholder="Nhập số điện thoại" onChange={handleChange} onBlur={handleBlur} />
                                        {errors.soDt && touched.soDt ? (<p className="text-danger">{errors.soDt}</p>) : ("")}
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <label for="" className="col-md-2">Mã loại người dùng</label>
                                    <div className="col-md-10">
                                        <select name="maLoaiNguoiDung" className="form-control" onChange={handleChange} onBlur={handleBlur}>
                                            <option value="ChonLoaiNguoiDung">Chọn loại người dùng</option>
                                            <option value="QuanTri">Quản Trị</option>
                                            <option value="KhachHang">Khách Hàng</option>
                                        </select>
                                        {errors.maLoaiNguoiDung && errors.maLoaiNguoiDung ? (<p className="text-danger">{errors.maLoaiNguoiDung}</p>) : ("")}
                                    </div>
                                </div>
                                <button className="btn btn-submit" type="submit">Thêm Người Dùng</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
