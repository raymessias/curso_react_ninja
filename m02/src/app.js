'use strict'

import React, { Component } from 'react'
import Title from './title'

// ES6
class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Pedro' />
      </div>
    )
  }
}

//ES5
// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Pedro' />
//       </div>
//     )
//   }
// })

export default App
