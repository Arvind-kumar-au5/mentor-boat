import React, { Fragment } from 'react'
import {Link} from "react-router-dom"
// import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
 const Landing=()=> {
    return (
        <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Mentor Boat</h1>
          <div className='buttons'>
            <Link to='/search' className='btn btn-primary'>
              Find Mentor
            </Link>
            <Link to='/mentor/apply' className='btn btn-light'>
              Become a mentor
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}

// Landing.propTypes = {

// }

export default Landing


