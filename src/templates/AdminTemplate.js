import React from 'react'
import { Route } from 'react-router';

export const AdminTemplate = (props) => {
    let {Component,...restParam} = props;
    
    return (
       <Route {...restParam} render = {(propsRoute) => {
            return <div>
              <Component {...propsRoute}/>
            </div>
       }}/>
    )
}
