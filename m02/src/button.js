'use strict'

import React from 'react'

// Sem Destructuring
// const Button = props => (
//   <button onClick={props.handleClick}>
//     {props.children}
//   </button>
// )

// Utilizando o destructuring
const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

export default Button
