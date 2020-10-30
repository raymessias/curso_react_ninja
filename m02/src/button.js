'use strict'

import React from 'react'

// Utilizando o destructuring
// const Button = ({ children, handleClick }) => (
const Button = props => (
  <button onClick={props.handleClick}>
    {props.children}
  </button>
)

export default Button
