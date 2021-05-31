import {NavLink} from 'react-router-dom'
import React, {forwardRef} from 'react'

// eslint-disable-next-line react/display-name
export default forwardRef((props) => {
  return (
    <NavLink
      {...props}
      isActive={(match, location) => {
        if (!match || !location || location.hash !== '') {
          return false
        }
        return match.url === location.pathname
      }}
      exact
      activeClassName={'active'}
    />
  )
})