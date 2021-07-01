import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LightLity from 'lity';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { listMovieComingSoonAction, listMovieShowAction } from '../../redux/actions/ListMovieAction';
import MovieItems from '../MovieItems/MovieItems';


export default function ListMovie(props) {

    const listMovie = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
        ]
    }
    //Lấy dữ liệu về
    const {listMovieShow,listMovieComingSoon} = useSelector(state => state.ListMovieReducer);
    //Đưa dữ liệu lên sever
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(listMovieShowAction());
       dispatch(listMovieComingSoonAction());
    }, [])
    const renderListMovieShow = () => {
        return listMovieShow.map((movie,index)=>{
            return(
               <MovieItems key={index} movie={movie} showTimes={"beforeShow"}/>
            )
        })
    }

    const renderListMovieComing = () => {
        return listMovieComingSoon.map((movie,index) => {
            return (
                <MovieItems key={index} movie={movie} showTimes={"afterShow"}/>
            )
        })
    }

    return (
       <section className="listmovie container" id="showdate">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                <a className="nav-link active btn-all" id="pills-nowshow-tab" data-toggle="tab" href="#pills-nowshow" role="tab" aria-controls="pills-nowshow">Phim đang chiếu</a>
                </li>
                <li className="nav-item" role="presentation">
                <a className="nav-link btn-all" id="pills-comming-tab" data-toggle="tab" href="#pills-comming" role="tab" aria-controls="pills-comming">Phim sắp chiếu</a>
                </li>
            </ul>
            <div className="tab-content listmovie-content" id="pills-tabcontent">
                <div className="tab-pane fade content-item active show" id="pills-nowshow" role="tabpanel">
                    <div className="content-show">
                        <Slider  {...listMovie}>
                            {renderListMovieShow()}
                        </Slider>
                    </div>
                </div>
                {/*star show*/}
                <div className="tab-pane fade content-item" id="pills-comming" role="tabpanel">
                    <div className="content-show">
                        <Slider  {...listMovie}>
                            {renderListMovieComing()}
                        </Slider>
                    </div>
                </div>
                {/*end start show*/}
            </div>
            </section>

    )
}
