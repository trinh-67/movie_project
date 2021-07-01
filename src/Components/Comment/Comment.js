import React, { useState } from 'react'

export default function Comment(props) {
    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
      }
    return (
        <div className="myreview">
            <div className="row">
                <div className="col-md-10 col-8">
                    <div className="view-user">
                        <img src="../images/userCatLovely.png" />
                        <span className="user">{props.cmt.user}</span>
                    </div>
                </div>
                <div className="col-md-2 col-4 text-center inner-comment">
                    <span className="number">{props.cmt.rating}</span>
                    <div className="comment">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                </div>
            </div>
            <span className="txt-think think-view">{props.cmt.comment}</span>
            <div className="like" onClick={handleLike}>
                <i className="far fa-thumbs-up like" style={{ color: like ? "red" : "#495057" }}></i>
                <span>{like ? "  1 Thích" : "  0 Thích"}</span>
            </div>
        </div>
    )
}
