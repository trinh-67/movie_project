import React from 'react'
import Application from '../../Components/Application/Application'
import CarouselHome from '../../Components/CarouselHome/CarouselHome'
import ListMovie from '../../Components/ListMovie/ListMovie'
import New from '../../Components/New/New'
import SearchHome from '../../Components/SearchHome/SearchHome'
import ShowTimeMovie from '../../Components/ShowTimeMovie/ShowTimeMovie'





export default function Home(props) {

    const handleBackTop = () => {
        window.scroll({ left: 0, top: 0, behavior: 'smooth'});
    }
    return (
        <main className="main">
          <CarouselHome/>
          <SearchHome/>
          <ListMovie/>
          <ShowTimeMovie/>
          <New/>
          <Application />
          <div className="backtop" id="backtotop" onClick={handleBackTop}> 
            <i class="fa fa-angle-up"></i>
          </div>
        </main>
    )
}

