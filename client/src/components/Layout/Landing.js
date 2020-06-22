import React, {  } from 'react'
import {Link,Redirect} from "react-router-dom"
import {connect} from "react-redux"
import PropTypes from 'prop-types'

 const Landing=({isAuthenticated})=> {
    if(isAuthenticated) {
      return <Redirect to = "/dashboard" />

    }
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

Landing.propTypes = {
     isAuthenticated:PropTypes.bool,

}

const mapsStateToProps = state =>({
  isAuthenticated:state.register.isAuthenticated
})

export default connect(mapsStateToProps)(Landing)


