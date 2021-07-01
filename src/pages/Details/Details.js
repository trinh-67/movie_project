import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsMoviesAction } from "../../redux/actions/ListMovieAction";
import LightLity from "lity";
import { Fragment } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import DateOfYear from "../../Components/DateOfYear/DateOfYear";
import { COMMENT_MOVIE } from "../../configs/settings";
import Comment from "../../Components/Comment/Comment";
import { Link } from "react-scroll";

export default function Details(props) {
  const { detailsMovies } = useSelector((state) => state.ListMovieReducer);

  const { listComment } = useSelector((state) => state.ListMovieReducer);

  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(detailsMoviesAction(id));
  }, []);

  //Set date
  let dayTime = [];
  const findDate = () => {
    var date = new Date();
    let t = date.getDay() + 1;
    let n = date.getDay() + 1;
    var longDate = 0;
    let d = date.getDate() - 1;
    // console.log(date.getDate());
    if (
      date.getMonth() + 1 === 4 ||
      date.getMonth() + 1 === 6 ||
      date.getMonth() + 1 === 9 ||
      date.getMonth() + 1 === 11
    ) {
      longDate = 30;
    } else {
      if (date.getMonth() + 1 === 2) {
        if (date.getFullYear() % 400 === 0) {
          longDate = 29;
        } else {
          longDate = 28;
        }
      } else {
        longDate = 31;
      }
    }
    for (var i = 0; i <= 9; i++) {
      if (t + i > 7 && t + i < 15) {
        n = t + i - 7;
      } else if (t + i >= 15) {
        n = t + i - 14;
      } else {
        n = t + i;
      }
      d++;
      if (d > longDate) {
        d = d - longDate;
      }

      dayTime.push({ thu: n, ngay: d });
    }
  };

  findDate();

  const renderDate = () => {
    if (dayTime && dayTime.length > 0) {
      return dayTime.map((item, index) => {
        return (
          <DateOfYear
            key={item.ngay}
            Item={item}
            active={false}
            index={index}
          />
        );
      });
    }
  };

  //Comment
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };
  const handleSubmitRating = () => {
    // props.Comment(comment)
    dispatch({
      type: COMMENT_MOVIE,
      listComment,
    });
  };

  const renderComment = () => {
    return listComment.map((item, index) => {
      return <Comment key={index} cmt={item} />;
    });
  };

  let setting = {
    activeClass: "active",
    spy: true,
    smooth: true,
    offset: -90,
    duration: 400,
  };
  return (
    <div>
      <section className="detail-mv">
        <div className="inner-detail-mv-banner">
          <div className="detail-mv-banner"></div>
          <div className="overlay-banner"></div>
          <div className="container details-inner">
            <div className="row">
              <div className="col-md-3">
                <div className="detail-img">
                  <img
                    src={detailsMovies.hinhAnh}
                    alt={detailsMovies.hinhAnh}
                    className="img-fluid w-100"
                  />
                  <div className="icon-play">
                    <a data-lity className="video" href={detailsMovies.trailer}>
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 details-infor my-auto">
                <p className="date">1/11/2021</p>
                <p className="ttl">
                  <span className="agetype">P</span>
                  {detailsMovies.tenPhim}
                </p>
                <p className="time-ttl">120 phút - 0 IMDb - 2D/Digital</p>
                <Link  {...setting} to="schedule" className="btn btn-buy">
                  Mua vé
                </Link>
              </div>
              <div className="col-md-2 circle-custom my-auto">
                <div className="percent">
                  <svg>
                    <circle cx={60} cy={60} r={40} />
                    <circle cx={60} cy={60} r={40} />
                  </svg>
                  <div className="number">
                    <h2>8.8</h2>
                  </div>
                </div>
                <div className="icon-start">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="movie-dt-showtime" id="schedule">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="showtime-tab"
                data-toggle="tab"
                href="#showtime"
                role="tab"
                aria-controls="home"
              >
                Lịch chiếu
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="infomation-tab"
                data-toggle="tab"
                href="#infomation"
                role="tab"
                aria-controls="infomation"
              >
                Thông tin
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="review-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
              >
                Đánh giá
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade active show"
              id="showtime"
              role="tabpanel"
              aria-labelledby="showtime-tab"
            >
              <div className="cinema-block">
                <div className="cinema-inner">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="show-logo">
                        <ul
                          className="nav nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          {detailsMovies.heThongRapChieu?.map(
                            (details, index) => {
                              let classActive = index === 0 ? "active" : "";
                              return (
                                <li className="nav-item">
                                  <a
                                    className={`nav-link ${classActive}`}
                                    id="v-pills-home-tab"
                                    data-toggle="pill"
                                    href={`#${details.maHeThongRap}`}
                                    role="tab"
                                    aria-controls="v-pills-home"
                                  >
                                    <img
                                      src={details.logo}
                                      alt={details.logo}
                                      width="50px"
                                    />
                                    <span className="cinema-name">
                                      {details.tenHeThongRap}
                                    </span>
                                  </a>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-8 tab-content-bl">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div className="dayofweek">
                          {renderDate()}

                          {/* <div className="list-date">
                                                        <p className="day">Thứ 5</p>
                                                        <p className="date">06</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 6</p>
                                                        <p className="date">07</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 7</p>
                                                        <p className="date">08</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Chủ nhật</p>
                                                        <p className="date">09</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 2</p>
                                                        <p className="date">10</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 3</p>
                                                        <p className="date">11</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 4</p>
                                                        <p className="date">12</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 5</p>
                                                        <p className="date">13</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 6</p>
                                                        <p className="date">14</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 7</p>
                                                        <p className="date">15</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Chủ Nhật</p>
                                                        <p className="date">16</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 2</p>
                                                        <p className="date">17</p>
                                                    </div>
                                                    <div className="list-date">
                                                        <p className="day">Thứ 3</p>
                                                        <p className="date">18</p>
                                                    </div> */}
                        </div>
                        {detailsMovies.heThongRapChieu?.map(
                          (details, index) => {
                            let classActive = 0 === index ? "active" : "";
                            return (
                              <div
                                key={index}
                                className={`showtime-movie tab-pane fade show  ${classActive}`}
                                id={details.maHeThongRap}
                                role="tabpanel"
                                aria-labelledby="v-pills-home"
                              >
                                <div className="showtime-movie-it">
                                  {details.cumRapChieu?.map(
                                    (theater, index) => {
                                      return (
                                        <Fragment key={index}>
                                          <div className="row">
                                            <div className="movie-img col-2-img">
                                              <img
                                                src="http://movie0706.cybersoft.edu.vn/hinhanh/jurassic-world_gp05.jpg"
                                                class="img-fluid"
                                                width="50px"
                                              />
                                            </div>
                                            <div className="wrap-infor pl-0 col-10-infor">
                                              <p>
                                                <span className="age">P</span>
                                                {theater.tenCumRap}
                                              </p>
                                              <span>
                                                120 phút -FOX 9.4 -IMDb 8.7
                                              </span>
                                            </div>
                                          </div>
                                          <h5 className="ttl">2D Digital</h5>
                                          <div className="row">
                                            {theater.lichChieuPhim
                                              ?.slice(0, 8)
                                              .map((time, index) => {
                                                return (
                                                  <div
                                                    className="block-time"
                                                    key={index}
                                                  >
                                                    <NavLink
                                                      to={`/checkout/${time.maLichChieu}`}
                                                      className="time-movie"
                                                    >
                                                      <p>
                                                        <span>
                                                          {moment(
                                                            time.ngayChieuGioChieu
                                                          ).format("hh:mm A")}
                                                        </span>
                                                      </p>
                                                    </NavLink>
                                                  </div>
                                                );
                                              })}
                                          </div>
                                        </Fragment>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade infomation"
              id="infomation"
              role="tabpanel"
              aria-labelledby="infomation-tab"
            >
              <div className="row">
                <div className="col-md-6 movie-left">
                  <div className="inforleft">
                    <p className="title">Ngày công chiếu</p>
                    <p className="txt">
                      {new Date(
                        detailsMovies.ngayKhoiChieu
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="inforleft">
                    <p className="title">Đạo diễn</p>
                    <p className="txt">Alexs Stadermann</p>
                  </div>
                  <div className="inforleft">
                    <p className="title">Diễn viên</p>
                    <p className="txt">Show</p>
                  </div>
                  <div className="inforleft">
                    <p className="title">Thể Loại</p>
                    <p className="txt">Hoạt hình, Gia đình</p>
                  </div>
                  <div className="inforleft">
                    <p className="title">Định dạng</p>
                    <p className="txt">2D/Digital</p>
                  </div>
                  <div className="inforleft">
                    <p className="title">Quốc Gia SX</p>
                    <p className="txt">Việt Nam</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="ttl-4">Nội dung</h4>
                  <p className="description">{detailsMovies.moTa}</p>
                </div>
              </div>
            </div>
            {/* review */}
            <div
              className="tab-pane fade review"
              id="review"
              role="tabpanel"
              aria-labelledby="review"
            >
              <div
                className="myreview"
                data-toggle="modal"
                data-target="#reviewModal"
              >
                <div className="row">
                  <div className="col-1">
                    <i className="fa fa-user user"></i>
                  </div>
                  <div className="col-md-8">
                    <span className="txt-think">Bạn nghĩ gì về phim này?</span>
                  </div>
                  <div className="col-md-3 comment">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              {renderComment()}
              <div className="modal fade reviewmodal" id="reviewModal">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        <div className="box-root">4.0</div>
                        <div className="muirating-root">
                          <div className="comment">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <textarea
                        value={comment}
                        placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
                        className="w-100"
                        style={{ height: "100px" }}
                        onChange={handleChangeComment}
                      />
                    </div>
                    <div className="modal-footer">
                      <label className="upload">
                        <input type="file" className="file" />
                        <img src="../images/buttonmedia.png" alt="" />
                        Ảnh/Video
                      </label>
                      <button
                        className="btn btn-submit"
                        type="button"
                        data-dismiss="modal"
                        onClick={handleSubmitRating}
                      >
                        Đăng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
