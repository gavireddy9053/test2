import React from 'react'
import ReactDOM from 'react-dom/client'
// import User from './App'
import {App}  from './App'

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
// let heading = <h1>Heading </h1>
// let heading = React.createElement('h1',{},'Heading in react')
rootEle.render(<header>
  {/* {App()} */}
  <App />
</header>)