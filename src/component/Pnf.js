import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Pnf() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>Page not found ! </h3>
                    <NavLink to={`/`} className={'btn btn-success'}>Back Home</NavLink>
                </div>
            </div>
            
        </div>
    )
}
