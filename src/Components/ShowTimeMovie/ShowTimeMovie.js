import React, {useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import moment from "moment";
import { ListCenemaShowAction, ListMovieShowTimeAction } from '../../redux/actions/ShowTimeMovieAction';
import ShowLogoMovie from './ShowLogoMovie';
import { NavLink } from 'react-router-dom';


export default function ShowTimeMovie(props) {

    const {listCinema, maHeThongRap, listMovie, maCumRap}  = useSelector(state => state.ShowTimeMovieReducer);
    const dispatch = useDispatch();

   
    useEffect(() => {
    //    dispatch(ListCenemaShowAction());
       dispatch(ListMovieShowTimeAction());
    }, []) 

    // const handleClickLogo = (maHT) => {
    //     dispatch(ListCenemaShowAction(maHT));
    // }

    // const handleClickTheart = (maHTRap) => {
    //     dispatch(ListMovieShowTimeAction(maHTRap))
    // }


    // const renderListMovie = () => {
    //         return listMovie.map((listfilm,index) => {
    //           return listfilm.lstCumRap?.map((ds,index) => {
                
    //               return ds.danhSachPhim?.map((dem,index) => {
    //                 <p key={index}><span className="doTuoi">P</span>{dem.tenPhim}</p>
    //                     return dem.lstLichChieuTheoPhim?.map((item, index) => {
    //                         <p key={index}><span className="doTuoi">P</span>{item.ngayChieuGioChieu}</p>
    //                     })
                     
                  
    //               });
                
    //           })
    //         });
         
    // }

    // const renderListMovie = () => {
    //     if (props.listMovie && props.listMovie.length > 0 && props.maCumRap !== "") {
    //       return props.listMovie.map((list,index) => {
    //         return list.lstCumRap?.map((ds,item) => {
    //           if (ds.maCumRap === props.maCumRap) {
    //             return ds.danhSachPhim?.map((ds1,index) => {
    //               return  <p><span className="doTuoi">P</span>{ds1.tenCumRap}</p>
    //             });
    //           };
    //         })
    //       });
    //     }
    
    //   }


    return (

        <section className="cinema-block" id="theater">
            <div className="container">
                <div className="cinema-inner">
                    <div className="row">
                        <div className="col-lg-1">
                            <div className="show-logo">
                                <ul className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <ShowLogoMovie/>
                                </ul>
                            </div>
                        </div>
                        <div className="col-11">
                            <div className="tab-content" id="v-pills-tabContent">
                                {listMovie.map((cinemaSystem, index) => {
                                   let classActive = index === 0 ? "active" : "";
                                    return (
                                        <div key={index} className = {`tab-pane fade show ${classActive}`} id={`${cinemaSystem.maHeThongRap}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="row">
                                                <div className="col-lg-4 sroll-tab">
                                                    <div className="nav flex-column nav-pills listmovie-content" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                        {cinemaSystem.lstCumRap?.map((inforTheater,index)=>{
                                                            let classActive = index === 0? "active" : "";
                                                            return (
                                                                <a key={index} className = {`nav-link theater-item ${classActive}`} id={`${cinemaSystem.maHeThongRap}`} data-toggle="pill" href={`#${inforTheater.maCumRap}`} role="tab" aria-controls="v-pills-messages"  aria-selected="false" >
                                                                    <div className="row">
                                                                            <div className="col-3 theater-img">
                                                                                <img src="./images/rap-bhd.jpg" alt width="100%" />
                                                                            </div>
                                                                            <div className="col-9 theater-text">
                                                                                <p>{inforTheater.tenCumRap}</p>
                                                                                <span>
                                                                                    {inforTheater.diaChi}
                                                                                </span><br />
                                                                                <a href="#">[ Chi tiết ]</a>
                                                                            </div>
                                                                        </div>
            
                                                                </a>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 tab-content-bl scroll-tab">
                                                    <div className="tab-content" id="v-pills-tabContent">
                                                        {cinemaSystem.lstCumRap?.map((inforTheater, index) => {
                                                            let classActive = index === 0 ? "active" : "";
                                                            return (
                                                                <div key={index} className={`showtime-movie tab-pane fade show ${classActive}`} id={inforTheater.maCumRap} role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                                    {inforTheater.danhSachPhim?.map((movie, index)=>{
                                                                        return (
                                                                            <div key={index} className="showtime-movie-it">
                                                                                <div className="row">
                                                                                    <div className="movie-img col-2-img">
                                                                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/jurassic-world_gp05.jpg" alt className="img-fluid" width="50px" />
                                                                                    </div>
                                                                                    <div className="wrap-infor pl-0 col-10-infor">
                                                                                        <p>
                                                                                            <span className="age">P</span>
                                                                                            {movie.tenPhim}
                                                                                        </p>
                                                                                        <span>120 phút -FOX 9.4 -IMDb 8.7</span>
                                                                                    </div>
                                                                                </div>
                                                                                <h5 className="ttl">2D Digital</h5>
                                                                                <div className="row">
                                                                                    {movie.lstLichChieuTheoPhim?.slice(0,8).map((timeShow,index) => {
                                                                                        return (
                                                                                            <div key={index} className="block-time">
                                                                                                <NavLink to={`checkout/${timeShow.maLichChieu}`} className="time-movie">
                                                                                                    <p>
                                                                                                    <span>{moment(timeShow.ngayChieuGioChieu).format("hh:mm A")}</span> ~
                                                                                                    12:10
                                                                                                    </p>
                                                                                                </NavLink>
                                                                                            </div>
                                                                                        )
                                                                                    })}
                                                                                   
                                                                                </div>
                                                                         </div>
                                                                        )
                                                                    })}
                                                                    
                                                            </div>
                                                            )
                                                        })}
                                                       
                                                    </div>
                                                </div>
                                        </div>
                            </div>
                                    )
                                })}
                           
                            
                            </div>
                        </div>
                </div>
        </div>
   </div>
</section>
        // <section className="cinema-block">
        // <div className="container">
        //     <div className="cinema-inner">
        //         <div className="row">
        //             <div className="col-md-1">
        //                 <div className="show-logo">
        //                     <ul className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        //                         <li className="nav-item" role="presentation">
        //                             {listLogoMovie.map((cinemaSystem,index)=>{
        //                                 let activeClass = index === 0 ? 'active':'';
        //                                 return (
        //                                     <a onClick={()=>{handleClickLogo(cinemaSystem.maHeThongRap)}} key={index} className={`nav-link ${activeClass}`} id="v-pills-home-tab" data-toggle="pill" href={`#${cinemaSystem.maHeThongRap}`} role="tab" aria-controls={cinemaSystem.maHeThongRap} aria-selected="true" >
        //                                       <img src={cinemaSystem.logo} alt={cinemaSystem.logo} width="100%" />
        //                                     </a>
        //                                 )
        //                             })}
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="col-md-11">
        //                 <div className="tab-content showtime-theater listmovie-content " id="v-pills-tabContent">
        //                     <div className="tab-pane fade active show" id="demo1" role="tabpanel" aria-labelledby="v-pills-home-tab">
        //                         <div className="row">
        //                             <div className="col-md-4">
        //                                 <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        //                                     {listCinema.map((cinema,index) => {
        //                                         return  <div key={index} className={maHeThongRap === "BHDStar" ? "tab-pane fade show active" : "tab-pane fade show"}  id={`${cinema.maHeThongRap}`} data-toggle="pill" role="tabpanel" aria-labelledby="v-pills-home-tab"> 
        //                                             <div className={props.index === 0 ? "theater-item show active" : "theater-item"}>
        //                                                 <div className="row">
        //                                                     <div className="col-3 theater-img">
        //                                                         <img src="./images/rap-bhd.jpg" alt="" width="100%" />
        //                                                     </div>
        //                                                     <div className="col-9 theater-text">
        //                                                         <p>{cinema.tenCumRap}</p>
        //                                                         <span>
        //                                                             {cinema.diaChi}
        //                                                         </span><br />
        //                                                         <a href="#">[ Chi tiết ]</a>
        //                                                     </div>
        //                                                 </div>
                                                        
        //                                             </div>
        //                                         </div>
        //                                     })}
        //                                     </div>
        //                             </div>
        //                            <div className="col-8 showtime-movie">
        //                                 <div className="tab-content" id="v-pills-tabContent">
        //                                     <div className="tab-pane fade" id="bhd-star-cineplex-bitexco" role="tabpanel" aria-labelledby="v-pills-messages-tab">
        //                                         <div>
        //                                             <h5> LỪA ĐỂU GẶP LỪA ĐẢO</h5>
        //                                             <div className="row"><a href="#" className="col-3">10:10 AM</a><a href="#" className="col-3">12:10 PM</a><a href="#" className="col-3">02:10
        //                                                 PM</a><a href="#" className="col-3">04:10 PM</a><a href="#" className="col-3">06:10 PM</a><a href="#" className="col-3">08:10
        //                                                 PM</a><a href="#" className="col-3">10:10 AM</a><a href="#" className="col-3">12:10 PM</a></div>
        //                                         </div>
        //                                         <div>
        //                                             <h5> Jurassic World</h5>
        //                                             <div className="row"><a href="#" className="col-3">04:30 PM</a></div>
        //                                         </div>
        //                                         <div>
        //                                             <h5> CHỊ MƯỜI BA: BA NGÀY SINH TỬ</h5>
        //                                             <div className="row"><a href="#" className="col-3">10:34 AM</a></div>
        //                                         </div>
        //                                     </div>
        //                                     <div className="tab-pane fade" id="bhd-star-cineplex-vincom-le-van-viet" role="tabpanel" aria-labelledby="v-pills-messages-tab">
        //                                         <div>
        //                                             <h5> CHỊ MƯỜI BA: BA NGÀY SINH TỬ</h5>
        //                                             <div className="row"><a href="#" className="col-3">10:10 AM</a><a href="#" className="col-3">12:10 PM</a><a href="#" className="col-3">02:10
        //                                                 PM</a><a href="#" className="col-3">04:10 PM</a><a href="#" className="col-3">06:10 PM</a><a href="#" className="col-3">08:10
        //                                                 PM</a><a href="#" className="col-3">10:10 AM</a><a href="#" className="col-3">12:10 PM</a></div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         <div className="col-md-7">
        //             <div className="showtime-movie">
        //                 {renderListMovie()}
        //                 {/* <div className="showtime-movie-it">
        //                 <div className="row">
        //                     <div className="movie-img">
        //                     <img src="http://movie0706.cybersoft.edu.vn/hinhanh/jurassic-world_gp05.jpg" alt className="img-fluid" width="50px" />
        //                     </div>
        //                     <div className="wrap-infor pl-0">
        //                     <p>
        //                         <span className="age">P</span>
        //                     Jurassic World
        //                 </p>
        //                 <span>120 phút -FOX 9.4 -IMDb 8.7</span>
        //                 </div>
        //             </div>
        //             <h5 className="ttl">2D Digital</h5>
        //             <div className="row">
        //                 <div className="block-time">
        //                 <div className="time-movie">
        //                     <p>
        //                     <span>10:10</span>
        //                     12:10
        //                     </p>
        //                 </div>
        //                 </div>
        //                 <div className="block-time">
        //                     <div className="time-movie">
        //                         <p>
        //                         <span>10:10</span>
        //                         12:10
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="block-time">
        //                     <div className="time-movie">
        //                         <p>
        //                         <span>10:10</span>
        //                         12:10
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="block-time">
        //                     <div className="time-movie">
        //                         <p>
        //                         <span>10:10</span>
        //                         12:10
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             </div> */}
        //         </div>
        //         </div>
        //     </div>
        //     </div>
        // </div>
        // </section>

    )
}
