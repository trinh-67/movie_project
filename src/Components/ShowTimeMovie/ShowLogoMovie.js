import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { ListLogoAction } from '../../redux/actions/ShowTimeMovieAction';

export default function ShowLogoMovie(props) {
    const {listLogoMovie}  = useSelector(state => state.ShowTimeMovieReducer);

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(ListLogoAction())
    }, [])
    return (
        <Fragment>
              {listLogoMovie.map((cinemaSystem,index) => {
              let activeClass = index === 0 ? 'active':'';
                 return (
                  <li className="nav-item" key={index} >
                    <a  className={`nav-link ${activeClass}`} id="v-pills-home-tab" data-toggle="pill" href={`#${cinemaSystem.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true" >
                    <img src={cinemaSystem.logo} alt={cinemaSystem.logo} width="100%" />
                  </a>
                  </li>
                 )
              })}
        </Fragment>
    )
}
