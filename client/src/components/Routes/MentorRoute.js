import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from "../Layout/Spinner"

const MentorRoute = ({
  component: Component,
  mentor: { misAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      loading ? (
        <Spinner />
      ) : misAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/mentor/login" />
      )
    }
  />
);


MentorRoute.propTypes = {
  mentor : PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  mentor : state.mentor
});

export default connect(mapStateToProps)(MentorRoute);