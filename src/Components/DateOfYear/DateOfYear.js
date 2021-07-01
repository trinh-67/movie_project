import React from 'react'

var tmpp = 0;
var countt = -1;

export default function DateOfYear(props) {

    const handleClick = (index) => {
        if (tmpp > 0){
            document.getElementsByClassName(`${countt}`)[0].style.color = "black";
            document.getElementsByClassName(`${countt}`)[1].style.color = "black";
        }
        countt = index;
        document.getElementsByClassName(`${index}`)[0].style.color = "red";
        document.getElementsByClassName(`${index}`)[1].style.color = "red";
        tmpp++;
    }
    return (
        <div className="list-date" onClick = {() => {handleClick(props.index)}}>
            <p style={{ color: "black"}} className={`day ${props.index}`}>{props.Item.thu === 1 ? "Chủ Nhật" : `Thứ ${props.Item.thu}`}</p>
            <p style={{ color: "black"}} className={`date ${props.index}`}>{props.Item.ngay}</p>
        </div>
    )
}
