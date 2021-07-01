import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { deleteMovieAction, listMovieShowAction } from '../../redux/actions/ListMovieAction';
import moment from "moment";
import ModalShowCalendar from './ModalShowCalendar';
import AddMovie from './AddMovie';
import { Image, Table } from "antd";
import "antd/dist/antd.css";

export default function ManagerFilm(props) {
    const {listMovieShow}  = useSelector(state => state.ListMovieReducer) 
    const dispatch = useDispatch();
    const {accessToken} = useSelector(state => state.UserReducer);

     /**seach movie */
    // const [keyWord, setKeyWord] = useState('');



     const [dsFilm, setDSFilm] = useState([]);
     const [keyWord, setKeyWord] = useState(null);
     const [temp, setTemp] = useState(-1);

     useEffect(() => {
        if (listMovieShow?.length > 0) {
          if (temp > 0) {
            setDSFilm(dsFilm);
          } else
            setDSFilm(listMovieShow);
        }
      })
      useEffect(() => {
        if (keyWord) {
          if (keyWord.length > 0) {
    
            let dsPhim = listMovieShow?.filter((item) => {
              return item.tenPhim.toLowerCase().indexOf(keyWord.toLowerCase()) >= 0;
            })
    
            setDSFilm(dsPhim);
            setTemp(temp + 1);
          }
    
        }
        // console.log(keyWord);
      }, [keyWord])


    useEffect(() => {
        dispatch(listMovieShowAction())
    }, [])


    const handleChangeSearch = (e) => {
        // console.log(keyWord);
        // console.log(event.target.value);
        setKeyWord(e.target.value);
    }

    const columns = [
        { 
            title: "Mã phim",
            dataIndex: "maPhim",
        },
        { 
            title: "Tên phim",
            dataIndex: "tenPhim",
        },
        {
            title: "Hình ảnh",
            dataIndex: "hinhAnh",
            render: (item) => {
                return (
                    <Image key={item} width={35} src={item} />
                )
            }
        }, 
        {
            title: "Đánh giá",
            dataIndex: "danhGia",
        },
        {
            title: "Ngày khởi chiếu",
            dataIndex: "ngayKhoiChieu"
        },
        {
            title: "",
            dataIndex: "maPhim",
            render: (maPhim) => (
                <div className="inner-button">
                    <div className="block">
                        <button className="btn" type="button" data-toggle="modal" data-target="#showcalendar"><i class="far fa-plus-square"></i></button>
                        <ModalShowCalendar/>
                    </div>
                    <div className="block">
                        <button className="btn btn-edit" type="button" data-toggle="modal" data-target="#showedit"><i class="far fa-edit"></i></button>
                        <div className="modal fade" id="showedit" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-delete btn" type="submit" onClick={()=>{
                        dispatch(deleteMovieAction(maPhim, accessToken));
                    }}><i class="far fa-trash-alt"></i></button>
                </div>
            )
        }
    ]


    const listFilm = () => {
        return listMovieShow?.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{item.maPhim}</td>
                    <td>{item.tenPhim}</td>
                    <td>
                        <img src={item.hinhAnh} alt={item.tenPhim} width="25px" />
                    </td>
                    <td>{item.danhGia}</td>
                    <td>{moment(item.ngayKhoiChieu).format("ddd-mm-yyyy hh:mm A")}</td>
                    <td>
                        <div className="inner-button">
                            <div className="block">
                                <button className="btn btn-add" type="button" data-toggle="modal" data-target="#showcalendar">Tạo Lịch Chiếu</button>
                                <ModalShowCalendar/>
                            </div>
                            <div className="block">
                                <button className="btn btn-edit" type="button" data-toggle="modal" data-target="#showedit">Sửa</button>
                                <div className="modal fade" id="showedit" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn-delete btn" type="submit" onClick={()=>{
                                dispatch(deleteMovieAction(item.maPhim, accessToken));
                            }}>Xóa</button>
                        </div>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
             <div className="inner-add row">
                <div className="col-md-6">
                    <button className="btn btn-add" type="button" data-toggle="modal" data-target="#addmovie">Thêm phim</button>
                </div>
                <div className="col-md-6">
                    <div className="form-group search-form d-flex">
                    <input className="form-control" type="text" placeholder="Search for name film ..." aria-label="Search" aria-describedby="basic-addon2" onChange={handleChangeSearch} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button"><i className="fas fa-search" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-header inner-button ad-movie">
                <AddMovie/>
            </div> 
            <Table className="table table-manageruser" columns={columns} dataSource={dsFilm}>
                {/* <thead>
                <tr>
                    <th>Mã phim</th>
                    <th>Tên phim</th>
                    <th>Hinh ảnh</th>
                    <th>Đánh giá</th>
                    <th>Ngày khởi chiếu</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {listFilm()}
                </tbody> */}
            </Table>
        </div>
    )
}
