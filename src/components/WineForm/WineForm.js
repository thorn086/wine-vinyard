import React from 'react'
import './WineForm.css'
import PropTypes from 'prop-types'


export default function WineForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Wine__form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

WineForm.propTypes={
  className: PropTypes.string,
  otherProps: PropTypes.string
}