import React, {useEffect, useState} from 'react';

import {useFormik} from 'formik';
import * as yup from 'yup';
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from 'react-redux';

import { addMovieAction } from '../../redux/actions/ListMovieAction';
import axios from "axios";
import { domain, maNhom } from '../../configs/settings';


export default function EditMovie(props) {
    const { formState: {}, control,} = useForm();
    const dispatch = useDispatch();
    // useEffect(() => {
    //    dispatch({type})
    // }, [])

   

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        // console.log(data);
        var form_data = new FormData();
        for (var key in data) {
          if (key === "hinhAnh") {
            form_data.append(key, data[key][0]);
            console.log(data[key]);
          } else {
            form_data.append(key, data[key]);
          }
        }
        // console.log(form_data.get("hinhAnh"));
        axios({
          url: `${domain}/api/quanlyphim/ThemPhimUploadHinh`,
          method: "POST",
          data: form_data,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      };


    // let tokenLocal = JSON.parse(localStorage.getItem("taiKhoan"));

    return (
        <div>
           
            {/* Modal */}
            <div className="modal fade" id="addmovie" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thêm Phim</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group row">
                                    <label for="maPhim" className="col-md-2">Mã phim</label>
                                    <div className="col-md-10">
                                        <input value="maPhim"
                                            type="text" 
                                            placeholder="Nhập số"
                                            {...register("maPhim", {
                                            // required: true,
                                            // maxLength: 20,
                                            // pattern: /^(0|[1-9][0-9]*)$/,
                                            })}
                                            className="form-control"
                                        />
                                        {/* {errors?.maPhim?.type === "required" && (
                                            <p className="text-danger">
                                            Không được để trống
                                            </p>
                                        )}
                                        {errors?.maPhim?.type === "maxLength" && (
                                            <p className="text-danger">
                                            Mã Phim dưới 20 ký tự
                                            </p>
                                        )}
                                        {errors?.maPhim?.type === "pattern" && (
                                            <p className="text-danger">Nhập số</p>
                                        )} */}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="tenPhim" className="col-md-2">Tên phim</label>
                                    <div className="col-md-10">
                                        <input
                                            placeholder="Nhập Tên Phim"
                                            type="text"
                                            {...register("tenPhim", {
                                            required: true,
                                            })}
                                            className="form-control"
                                        />
                                        {errors?.tenPhim?.type === "required" && (
                                            <p className="text-danger">
                                            Không được để trống
                                            </p>
                                        )}   
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="biDanh" className="col-md-2">Bí danh</label>
                                    <div className="col-md-10">
                                        <input
                                            type="text"
                                            placeholder="nhap-bi-danh"
                                            {...register("biDanh", {
                                            required: true,
                                            })}
                                            className="form-control"
                                        />
                                        {errors?.biDanh?.type === "required" && (
                                            <p className="text-danger">
                                            Không được để trống
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="trailer" className="col-md-2">Trailer</label>
                                    <div className="col-md-10">
                                        <input
                                        placeholder="https://youtube.com/"
                                        type="text"
                                        {...register("trailer", {
                                        required: true,
                                        })}
                                        className="form-control"
                                    />
                                    {errors?.trailer?.type === "required" && (
                                        <p className="text-danger">
                                        Không được để trống
                                        </p>
                                    )}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="trailer" className="col-md-2">Hình ảnh</label>
                                    <div className="col-md-10">
                                        <input
                                        type="file"
                                        {...register("hinhAnh", {
                                        required: true,
                                        })}
                                        className="form-control"
                                    />
                                    {errors?.hinhAnh?.type === "required" && (
                                        <p className="text-danger">
                                        Không được để trống
                                        </p>
                                    )}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="maNhom" className="col-md-2">Mã nhóm</label>
                                    <div className="col-md-10">
                                        <input
                                            type="text"
                                            value={maNhom}
                                            {...register("maNhom", {
                                            required: true,
                                            })}
                                            className="form-control"
                                        />
                                        {errors?.maNhom?.type === "required" && (
                                            <p className="text-danger">
                                            Không được để trống
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="ngayKhoiChieu" className="col-md-2">Ngày khởi chiếu</label>
                                    <div className="col-md-10">
                                         {/* <Controller name="ngayChieuGioChieu"  control={control} defaultValue={null}  render={({ field }) => (
                                            <DatePicker onChange={(e) => field.onChange(e)} selected={field.value} placeholderText = "Vui lòng chọn" dateFormat="dd/MM/yyyy" isClearable />
                                        )} className="form-control" type="text" placeholder="Chọn ngày chiếu"  {...register("ngayKhoiChieu", {
                                            required: true,
                                            })}  /> */}
                                        <input
                                            type="text"
                                            placeholder="dd-mm-yyyy"
                                            {...register("ngayKhoiChieu", {
                                            required: true,
                                            })}
                                            className="form-control"
                                        />
                                        {errors?.ngayKhoiChieu?.type === "required" && (
                                            <p className="text-danger">
                                            Không được để trống
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {/* <div className="form-group row">
                                    <label for="moTa" className="col-md-2">Đánh giá</label>
                                    <div className="col-md-10">
                                        <input
                                            type="text"
                                            placeholder="0-10"
                                            {...register("danhGia", {
                                            required: true,
                                            // min: 0,
                                            // max: 10,
                                            })}
                                            className="form-control"
                                        />
                                        {errors?.danhGia?.type === "required" && (
                                            <p className="text-danger">
                                            Không được để trống
                                            </p>
                                        )}
                                        {errors?.danhGia?.type === "min" && (
                                            <p className="text-danger">
                                                Đánh Giá từ 0-10
                                            </p>
                                        )}{" "}
                                        {errors?.danhGia?.type === "max" && (
                                            <p className="text-danger">
                                                Đánh Giá từ 0-10
                                            </p>
                                        )}
                                    </div>
                                </div> */}
                                <div className="form-group row">
                                    <label for="moTa" className="col-md-2">Mô tả</label>
                                    <div className="col-md-10">
                                        <textarea
                                            type="text"
                                            {...register("moTa", {
                                            required: true,
                                            })}
                                            className="form-control"
                                        />
                                        {errors?.moTa?.type === "required" && (
                                            <p className="text-danger">
                                            Không được để trống
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group add-movie text-center">
                                    <button type="submit" className="btn btn-add">Thêm phim</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
