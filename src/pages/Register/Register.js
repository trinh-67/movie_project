import React from 'react';
import {widthFormik, useFormik} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux'
import { RegisterAction } from '../../redux/actions/UserAction';

export default function Register(props) {

    const dispatch = useDispatch();
    const {handleBlur, handleChange, handleSubmit, touched, errors, isValid} = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: '',
            hoTen: '',
            // maNhom: '',
        },
        
        validationSchema: yup.object().shape({
            taiKhoan: yup.string().required("Tài khoản không được bỏ trống!"),
            matKhau: yup.string().required("Mật khẩu không được bỏ trống!").min(6,"Tài khoản tối thiểu phải 6 ký tự"),
            hoTen: yup.string().required("Họ tên không được bỏ trống!"),
            soDt: yup.string().required("Số điện thoại không được bỏ trống").matches(/^[0-9]+$/,"Số điện thoại bắt buộc phải là số"),
            email: yup.string().required("Email không được bỏ trống!").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email không hợp lệ"),
            // maNhom: yup.string().required("Mã nhóm không được để trông")
        }),

        onSubmit: (values) => {
            values.maNhom = "GP01";
            values.maLoaiNguoiDung = "KhachHang";
            // values.maNhom = "GP05";
            dispatch(RegisterAction(values))
        }
    })
    return (
        <div className="inner-bg-user">
             <form className="form-user" onSubmit={handleSubmit}>
                 <h1 className="ttl">Đăng ký</h1>
                 <div className="form-group">
                    <label className="form-label">Tài khoản</label>
                    <input type="text" className="form-control" name="taiKhoan" onChange={handleChange} onBlur={handleBlur} />
                    {errors.taiKhoan && touched.taiKhoan ? (<p className="text-danger">{errors.taiKhoan}</p>) : ("")}
                 </div>
                 <div className="form-group">
                     <label className="form-label">Mật khẩu</label>
                     <input type="password" className="form-control" name="matKhau" onChange={handleChange} onBlur={handleBlur} />
                     {errors.matKhau && touched.matKhau ? (<p className="text-danger">{errors.matKhau}</p>) : ("")}
                 </div>
                 <div className="form-group">
                     <label className="form-label">Họ tên</label>
                     <input type="text" className="form-control" name="hoTen" onChange={handleChange} onBlur={handleBlur} />
                     {errors.hoTen && touched.hoTen ? (<p className="text-danger">{errors.hoTen}</p>) : ("")}
                 </div>
                 <div className="form-group">
                     <label className="form-label">Số điện thoại</label>
                     <input type="text" className="form-control" name="soDt" onChange={handleChange} onBlur={handleBlur} />
                     {errors.soDt && touched.soDt ? (<p className="text-danger">{errors.soDt}</p>) : ("")}
                 </div>
                 <div className="form-group">
                     <label className="form-label">Email</label>
                     <input type="email" className="form-control" name="email" onChange={handleChange} onBlur={handleBlur} />
                     {errors.email && touched.email ? (<p className="text-danger">{errors.email}</p>) : ("")}
                 </div>
                 <div className="form-group">
                     <button type="submit" className="btn btnsubmit">Đăng ký</button>
                 </div>
             </form>
        </div>
    )
}
