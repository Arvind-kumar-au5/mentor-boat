import React from 'react'
import {Link} from "react-router-dom"

export default function MentorLanding() {
    const btnStyle = {
    display: 'inline-block',
    backgroundColor: '#304160',
    color: '#fff',
    fontWeight: '600',
    fontSize: '15px',
    padding: '12px 28px',
    borderRadius: '5px',
    transition: '.3s',
    border: '0',
    cursor: 'pointer',
    margin:'180px',
   
    }
    return (
        <div>
            <section className="container">
                <p>
                    <Link to="/mentor/apply" style={btnStyle} >Apply to be a mentor</Link>
                </p>
            </section>
        </div>
    )
}
