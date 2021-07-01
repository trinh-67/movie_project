import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Application() {
    const slickitem = {
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        next: false,
    }
    return (
        <div className="footer-inner" id="application">
            <div className="container">
                <div className="row">
                    <div className="footer-left col-md-6">
                    <h2 className="ttl-2">Ứng dụng tiện lợi dành cho<br />người yêu điện ảnh</h2>
                    <p className="txt">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <button className="btn btn-dowload btn-all-one">App miễn phí - Tải về ngay!</button>
                    <p className="txt-update">
                        TIX có hai phiên bản <a href="#">iOS</a> &amp; <a href="#">Android</a>
                    </p>
                    </div>
                    <div className="footer-right col-md-6">
                    <img src="./images/mobile.png" alt className="img-wrap" />
                    <div className="app-img">
                        <Slider {...slickitem}>
                            <img src="./images/slide1.jpg" alt className="img-fluid" />
                            <img src="./images/slide3.jpg" alt className="img-fluid" />
                            <img src="./images/slide4.jpg" alt className="img-fluid" />
                            <img src="./images/slide5.jpg" alt className="img-fluid" />
                            <img src="./images/slide6.jpg" alt className="img-fluid" />
                        </Slider>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
