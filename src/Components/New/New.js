import React from 'react'

export default function New() {
    return (
       <section className="block-news" id="view">
        <div className="container">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active btn-all" id="cinema-24h" data-toggle="tab" href="#cinema-24h-show" role="tab" aria-controls="cinema-24h-show">Điện Ảnh 24h</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link btn-all" id="revies-tab" data-toggle="tab" href="#revies-tab-show" role="tab" aria-controls="revies-tab-show">Review</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link btn-all" id="sales-tab" data-toggle="tab" href="#sales-tab-show" role="tab" aria-controls="sales-tab-show">Khuyến Mãi</a>
            </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="cinema-24h-show" role="tabpanel" aria-labelledby="cinema-24h-show">
                <div className="row">
                <div className="col-md-6 block-news-img">
                    <img src="./images/new2.jpg" alt className="img-fluid" />
                    <a href className="ttl">[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</a>
                    <p className="txt">Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay ... </p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 2
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-6 block-news-img">
                    <img src="./images/news1.png" alt className="img-fluid img-news" />
                    <a href className="ttl">[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</a>
                    <p className="txt">Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay ... </p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 block-news-img block-new-one">
                    <img src="./images/new3.png" alt className="img-fluid" />
                    <a href className="ttl">Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</a>
                    <p className="txt">Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả... </p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-4 block-news-img block-new-one">
                    <img src="./images/new4.png" alt className="img-fluid" />
                    <a href className="ttl">Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</a>
                    <p className="txt">Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”...</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 1
                    <img src="./images/iconComment.png" alt />0
                    </p>
                </div>
                <div className="col-md-4 block-new-col">
                    <a href="#" className="col-news row">
                    <img src="./images/new5.png" alt className="img-fluid" />
                    <p className="ttl">6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám</p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/new6.png" alt className="img-fluid" />
                    <p className="ttl">Gái Già Lắm Chiêu V - Những cuộc đời vương giả</p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/new7.png" alt className="img-fluid" />
                    <p className="ttl">Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu</p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/new8.png" alt className="img-fluid" />
                    <p className="ttl">5 lý do bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ</p>
                    </a>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 block-news-img">
                    <img src="./images/new9.png" alt className="img-fluid" />
                    <a href className="ttl">TENET công bố ngày khởi chiếu chính thức tại Việt Nam</a>
                    <p className="txt">Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam. </p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 2
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-6 block-news-img">
                    <img src="./images/new10.jpg" alt className="img-fluid img-news" />
                    <a href className="ttl">Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</a>
                    <p className="txt">Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở thích bệnh hoạn với phụ nữ. </p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                </div>
                <div className="read-more text-center">
                <button className="btn btn-read-more">Xem thêm</button>
                </div>
            </div>
            <div className="tab-pane fade" id="revies-tab-show" role="tabpanel" aria-labelledby="revies-tab-show">
                <div className="row">
                <div className="col-md-6 block-news-img">
                    <img src="./images/review1.png" alt className="img-fluid" />
                    <a href className="ttl">Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</a>
                    <p className="txt">Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 2
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-6 block-news-img">
                    <img src="./images/review2.png" alt className="img-fluid img-news" />
                    <a href className="ttl">Review: Dinh Thự Oan Khuất (Ghost Of War)</a>
                    <p className="txt">Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 block-news-img block-new-one">
                    <img src="./images/review3.png" alt className="img-fluid" />
                    <a href className="ttl">‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</a>
                    <p className="txt">Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-4 block-news-img block-new-one">
                    <img src="./images/review4.png" alt className="img-fluid" />
                    <a href className="ttl">American Sniper - Chính nghĩa hay phi nghĩa?</a>
                    <p className="txt">American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 1
                    <img src="./images/iconComment.png" alt />0
                    </p>
                </div>
                <div className="col-md-4 block-new-col">
                    <a href="#" className="col-news row">
                    <img src="./images/review5.png" alt className="img-fluid" />
                    <p className="ttl">Review: Spider-Man: Into The Spider-Vesre </p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/review6.jpg" alt className="img-fluid" />
                    <p className="ttl">COVID-19 là bản chính thức của MEV-1 phim contagion (2011)</p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/review7.jpg" alt className="img-fluid" />
                    <p className="ttl">[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước đến thế</p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/review8.jpg" alt className="img-fluid" />
                    <p className="ttl">[Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng Valiant</p>
                    </a>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 block-news-img">
                    <img src="./images/review9.jpg" alt className="img-fluid" />
                    <a href className="ttl">[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn</a>
                    <p className="txt">Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 2
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-6 block-news-img">
                    <img src="./images/review10.jpg" alt className="img-fluid img-news" />
                    <a href className="ttl">[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân</a>
                    <p className="txt">Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                </div>
                <div className="read-more text-center">
                <button className="btn btn-read-more">Xem thêm</button>
                </div>
            </div>
            <div className="tab-pane fade" id="sales-tab-show" role="tabpanel" aria-labelledby="sales-tab-show">
                <div className="row">
                <div className="col-md-6 block-news-img">
                    <img src="./images/sales1.png" alt className="img-fluid" />
                    <a href className="ttl">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</a>
                    <p className="txt">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 2
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-6 block-news-img">
                    <img src="./images/sales2.jpg" alt className="img-fluid img-news" />
                    <a href className="ttl">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</a>
                    <p className="txt">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 block-news-img block-new-one">
                    <img src="./images/sales3.png" alt className="img-fluid" />
                    <a href className="ttl">Beta Cineplex trở lại với hàng loạt ưu đãi lớn</a>
                    <p className="txt">Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-4 block-news-img block-new-one">
                    <img src="./images/sales5.jpg" alt className="img-fluid" />
                    <a href className="ttl">[123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái</a>
                    <p className="txt">Từ giờ đến 05.12.2019, chỉ cần lần đầu mua vé trên 123Phim, chọn thanh toán bằng ZaloPay hoặc mục Vé Phim trên ZaloPay, bạn có thể đặt ngay vé phim Anh Trai Yêu Quái với giá chỉ 11k/vé.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 1
                    <img src="./images/iconComment.png" alt />0
                    </p>
                </div>
                <div className="col-md-4 block-new-col">
                    <a href="#" className="col-news row">
                    <img src="./images/sales6.jpg" alt className="img-fluid" />
                    <p className="ttl">[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay</p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/sales7.jpg" alt className="img-fluid" />
                    <p className="ttl">[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/sales8.jpg" alt className="img-fluid" />
                    <p className="ttl">[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang</p>
                    </a>
                    <a href="#" className="col-news row">
                    <img src="./images/sales9.jpg" alt className="img-fluid" />
                    <p className="ttl">Sinh Nhật Mega GS</p>
                    </a>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 block-news-img">
                    <img src="./images/sales9.jpg" alt className="img-fluid" />
                    <a href className="ttl">[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa</a>
                    <p className="txt">Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 2
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                <div className="col-md-6 block-news-img">
                    <img src="./images/sales10.jpg" alt className="img-fluid img-news" />
                    <a href className="ttl">[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng</a>
                    <p className="txt">Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn.</p>
                    <p className="icon-comment">
                    <i className="far fa-thumbs-up" /> 10
                    <img src="./images/iconComment.png" alt />1
                    </p>
                </div>
                </div>
                <div className="read-more text-center">
                <button className="btn btn-read-more">Xem thêm</button>
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}
