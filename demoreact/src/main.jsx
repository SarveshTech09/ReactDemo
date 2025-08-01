import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h3>Hellodemo react !</h3>
    </div>
  )
}

/*
const anotherElement = (
   <a href='https:://google/' target='_blank'>Visit Google</a>
)
*/

// 
const anotherUser = "Hello DEMO HHH"

//Evaluated expression
const reactElement = React.createElement(
  'a',
  {href : 'https://www.google.com/', target:'_blank'},
  'Click for Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(

  // <App/>
  reactElement

  /*
  <React.StrictMode>
     <MyApp />
  </React.StrictMode>,
  */
)
