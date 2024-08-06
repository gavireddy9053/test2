import React from 'react'
import ReactDOM from 'react-dom/client'

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
// let heading = <h1>Heading </h1>
// let heading = React.createElement('h1',{},'Heading in react')
rootEle.render(<header>
  <h1>Heading</h1>
  <p>Para</p>
</header>)