'use strict'

import React, { Component } from 'react'
// import Title from './title'
import Square from './square'
import LikeButton from './likeButton'
import SearchButton from './searchButton'

// ES6
class App extends Component {
  render () {
    return (
      <div className='container'>
        <Square />
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

// ES5
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
