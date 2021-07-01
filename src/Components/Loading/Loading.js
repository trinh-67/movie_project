import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

export default function Loading() {
  const isloading = useSelector((state) => state.LoadingReducer.loading);
  let renderLoading = () => {
    if (isloading) {
      return (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 11111,
            // display: "none"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
          <div className="lds-home lds-ellipsis">
            <span className="txt">Now Loading</span>
            <div />
            <div />
            <div />
            <div />
          </div>
          </div>
        </div>
      );
    //   return "";
    }
  };
    
  return <div>{renderLoading()}</div>;
}
