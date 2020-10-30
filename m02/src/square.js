'use strict'

import React from 'react'

const Square = ({ color }) => (
  <div style={{
    background: color,
    height: '120px',
    width: '200px'
  }}
  />
)

Square.defaultProps = {
  color: 'red'
}

export default Square
