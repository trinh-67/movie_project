import React from 'react'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux'
import { UserAction } from '../../redux/actions/UserAction';


export default function Login(props) {

    const dispatch = useDispatch();
    const {handleChange, handleSubmit, errors,handleBlur,touched,isValid} = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },

        validationSchema: yup.object().shape({
            taiKhoan: yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: yup.string().required('Mật khâu không được bỏ trống!').min(6,'Mật khẩu tối đa phải 6 ký tự!')
        }),

        onSubmit: (values) => {
            dispatch(UserAction(values))
        }
    })
    return (
        <div className="inner-bg-user">
            <form className="form-user" onSubmit={handleSubmit}>
                <h1 className="ttl">Đăng nhập</h1>
                <div className="form-group">
                    <label className="form-label">Tài khoản</label>
                    <i class="far fa-user user"></i><input type="text" className="form-control" name="taiKhoan" onChange={handleChange} onBlur={handleBlur} />
                    {errors.taiKhoan && touched.taiKhoan ? <p className="text-danger">{errors.taiKhoan}</p>: '' }
                </div>
                <div className="form-group">
                    <label className="form-label">Mật khẩu</label>
                    <i class="fas fa-lock user"></i><input type="password" className="form-control" name="matKhau" onChange={handleChange} onBlur={handleBlur} />
                    {errors.matKhau && touched.matKhau ? <p className="text-danger">{errors.matKhau}</p>: '' }
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btnsubmit" disabled={!isValid}>Login</button>
                </div>
                <div className="registernow">
                    <p>
                        Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
                    </p>
                    <Link className="backhome" to="/">Quay về trang chủ</Link>
                </div>
            </form>
        </div>
    )
}
