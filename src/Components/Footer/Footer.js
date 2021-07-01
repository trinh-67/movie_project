import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-infor">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4 block-footer">
                        <h4 clas="ttl-4">TIX</h4>
                        <p> <a href>FAQ</a> <span><a href>Thỏa thuận sử dụng</a></span> </p>
                        <p><a href>Brand Guidelines</a> <span> <a href>Chính sách bảo mật</a> </span></p>
                        </div>
                        <div className="col-md-4 block-footer logo-brand">
                        <h4 className="ttl-4">ĐỐI TÁC</h4>
                        <div className="row">
                            <div className="col">
                                <a href="#">
                                    <img src="../images/cgv.png" alt className="img-fluid" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <img src="../images/bhd.png" alt className="img-fluid" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <img src="../images/galaxycine.png" alt className="img-fluid" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <img src="../images/cinestar.png" alt className="img-fluid" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <img src="../images/megags.png" alt className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="#">
                                    <img src="../images/bt.jpg" alt className="img-fluid" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <img src="../images/dongdacinema.png" alt className="img-fluid" />
                                </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/TOUCH.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/cnx.jpg" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/STARLIGHT.png" alt className="img-fluid" />
                            </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <a href="#">
                                <img src="../images/dcine.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/lotte.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/payoo.jpg" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/zalopay_icon.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/AGRIBANK.png" alt className="img-fluid" />
                            </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <a href="#">
                                <img src="../images/VCB.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/VIETTINBANK.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/IVB.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/123go.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col">
                            <a href="#">
                                <img src="../images/laban.png" alt className="img-fluid" />
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 block-footer">
                        <div className="row">
                            <div className="col-md-6 social">
                            <h4 className="ttl-4">MOBILE APP</h4>
                            <a href="#">
                                <img src="../images/apple-logo.png" alt className="img-fluid" />
                            </a>
                            <a href="#">
                                <img src="../images/android-logo.png" alt className="img-fluid" />
                            </a>
                            </div>
                            <div className="col-md-6 social">
                            <h4 className="ttl-4">MOBILE APP</h4>
                            <a href="#">
                                <img src="../images/facebook-logo.png" alt className="img-fluid" />
                            </a>
                            <a href="#">
                                <img src="../images/zalo-logo.png" alt ="" className="img-fluid" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="f-infor-bottom">
                        <div className="row">
                            <div className="col-md-8">
                                <h4 className="ttl-4">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
                                <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                                <p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                                <p>Email: <a href="mailto:support@tix.vn" style={{color: '#FB4226'}}>support@tix.vn</a></p>
                            </div>
                            <div className="col-md-4 text-center mt-5">
                                <a
                                href="http://online.gov.vn/Home/WebDetails/62782" target="_blank" className="img-fluid">
                                <img
                                    src="../images/bocong thuong.png"
                                    alt="bocongthuong"
                                    className="img-fluid"
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>

        </div>
    )
}
