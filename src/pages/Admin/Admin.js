import React, {useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import ManagerFilm from '../../Components/Admin/ManagerFilm'
import ManagerUser from '../../Components/Admin/ManagerUser';
import { useSelector, useDispatch} from 'react-redux';
import { CLOSELOADING, LOGOUT } from '../../configs/settings';
import { history } from '../../App';
import { LogoutAction } from '../../redux/actions/UserAction';

export default function Admin() {
    let dispatch = useDispatch();
    const {taiKhoan} = useSelector(state => state.UserReducer);
    useEffect(() => {
        dispatch({ type: CLOSELOADING });
      }, []);

    if (!localStorage.getItem("taiKhoan")){
        return <Redirect to ="/login" />;
    }
    let tokenLocal = JSON.parse(localStorage.getItem("taiKhoan"));
    if (tokenLocal.maLoaiNguoiDung === "QuanTri") {


    return (
        <div className="d-flex wrapper inner-admin">
            {/* Sidebar*/}
            <div className="border-end sidebar-wrapper">
                <div className="sidebar-heading">
                    <Link className="logo-admin" to="/">
                        <img src="/images/logo_1.png" alt="Movie" />
                    </Link>
                </div>
                <div className="list-group list-group-flush nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-admin" data-toggle="pill" href="#v-pill-admin" role="tab" aria-controls="v-pills-home" aria-selected="true">Quản Lý Phim</a>
                    <a className="nav-link" id="v-pills-user" data-toggle="pill" href="#v-pill-user" role="tab" aria-controls="v-pill-user" aria-selected="false">Quản Lý Người Dùng</a>
                </div>
            </div>
            {/* Page content wrapper*/}
            <div className="page-content-wrapper">
                {/* Top navigation*/}
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-toggle" id="sidebarToggle"><i class="fas fa-bars"></i></button>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button> */}
                        <div className="header  navbar-collapse">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 navbar-collapse">
                                 <li className="nav-item user">
                                    { taiKhoan !== ''?  (<div>
                                            <span className="nav-link"> <img  src="../images/avatar.png" alt="avatar" className="img-avatar" />{taiKhoan}</span> 
                                            <div className="logout">
                                                <button className="btn btn-logout" onClick = {() => {
                                                    dispatch ({ type: LOGOUT})
                                                }} >Đăng xuất</button>
                                            </div>
                                        
                                        </div>) : (<NavLink className="nav-link" to="/login">
                                        <img  src="../images/avatar.png" alt="avatar" className="img-avatar" />
                                        Đăng nhập
                                    </NavLink>)
                                }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Page content*/}
                <div className="container-fluid tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active v-pill-admin" id="v-pill-admin" role="tabpanel" aria-labelledby="v-pills-admin">
                        <ManagerFilm />
                    </div>
                    <div className="tab-pane fade v-pill-admin" id="v-pill-user" role="tabpanel" aria-labelledby="v-pills-user">
                        <ManagerUser />
                    </div>
                </div>
            </div>
        </div>

    );
   }else {
    alert("Trang này giành cho quản trị viên.");
    return <Redirect to="/login"></Redirect>;
   }
}
