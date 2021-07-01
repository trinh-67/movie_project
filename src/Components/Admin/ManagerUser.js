import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { deleteUserAction, inforUserAllAction } from '../../redux/actions/UserAction';
import AddUser from './AddUser';
import { Switch, Table } from "antd";
import "antd/dist/antd.css";
import EditUser from './EditUser';

export default function ManagerUser(props) {
    const dispatch = useDispatch();

    const {thongTinUserAll}  = useSelector(state => state.UserReducer);
    const {accessToken} = useSelector(state => state.UserReducer);

    const [dsUser, setDSUser] = useState(null);

    useEffect(() => {
        dispatch(inforUserAllAction())
     }, [])

     
    const handleChangeSwitch = (checked) => {
    if (checked) {
      let user1 = thongTinUserAll?.filter((item) => {
        return item.maLoaiNguoiDung === "KhachHang";
      })
      setDSUser(user1);
      console.log(user1);
    } else {
      let admin1 = thongTinUserAll?.filter((item) => {
        return item.maLoaiNguoiDung === "QuanTri";
      })
      setDSUser(admin1);
    }
   
  }


  const columns = [
        {
            title: "Tài khoản",
            dataIndex: "taiKhoan",
        },
        {
            title: "Họ tên",
            dataIndex: "hoTen",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "SĐT",
            dataIndex: "soDt",
        },
        {
            title: "Mật khẩu",
            dataIndex: "matKhau",
        },
        {
            title: "Mã loại người dùng",
            dataIndex: "maLoaiNguoiDung",
        },
        {
            title: "",
            dataIndex: "taiKhoan",
            render:  (taiKhoan) => (
                <div className="inner-button">
                    <div className="block">
                        <button className="btn btn-edit" type="button" data-toggle="modal" data-target="#edituser"><i class="far fa-edit"></i></button>
                        {/* <div className="modal fade" id="showedit1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <EditUser />
                    </div>
                    <button className="btn-delete btn" type="button" onClick={() => {
                        dispatch(deleteUserAction(taiKhoan, accessToken));
                    }}><i class="far fa-trash-alt"></i></button>
                </div>    
            )
        }
    ]
    
    // const renderDanhSachUser = () => {
    //     return thongTinUserAll.map((item,index) => {
    //         return (
    //             <tr key={index}>
    //                 <td>{item.taiKhoan}</td>
    //                 <td>{item.hoTen}</td>
    //                 <td>{item.email}</td>
    //                 <td>{item.soDt}</td>
    //                 <td>{item.matKhau}</td>
    //                 <td>{item.maLoaiNguoiDung}</td>
    //                 <td>
    //                     <div className="inner-button">
    //                         <div className="block">
    //                             <button className="btn btn-edit" type="button" data-toggle="modal" data-target="#showedit1">Sửa</button>
    //                             <div className="modal fade" id="showedit1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //                                 <div className="modal-dialog modal-dialog-centered">
    //                                     <div className="modal-content">
    //                                         <div className="modal-header">
    //                                             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
    //                                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                                             <span aria-hidden="true">×</span>
    //                                             </button>
    //                                         </div>
    //                                         <div className="modal-body">
    //                                             ...
    //                                         </div>
    //                                         <div className="modal-footer">
    //                                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                                             <button type="button" className="btn btn-primary">Save changes</button>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <button className="btn-delete btn" type="button" onClick={() => {
    //                             dispatch(deleteUserAction(item.taiKhoan, accessToken));
    //                         }}>Xóa</button>
    //                     </div>
    //                 </td>
    //             </tr>
    //         )
    //     })
    // }
    return (
        <div>
          <div className="user-header inner-button">
            <div className="inner-add row">
                 <div className="col-md-6 col-6">
                    <button className="btn btn-add" type="button" data-toggle="modal" data-target="#adduser">Thêm User</button>
                 </div>
                 <div className="col-md-6 col-6 text-right">
                    <Switch checkedChildren="User" unCheckedChildren="Admin" defaultChecked onChange={handleChangeSwitch} />
                </div>
            </div>
            <AddUser/>
          </div> 
          <div className="manageruser">
            <Table columns={columns} className="table table-manageruser" dataSource={dsUser ? dsUser : thongTinUserAll} />
          </div>
        </div>
    )
}
