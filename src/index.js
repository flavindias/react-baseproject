import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'


ReactDOM.render(<App/>, document.getElementById('root'));
// const renderApp = (NextApp) => {
//   render(
//     <AppContainer>
//       <NextApp />
//     </AppContainer>,
//
//   )
// }
//
// renderApp(App)
//
// if (module.hot) {
//   module.hot.accept('./app', () => {
//     const NextApp = require('./components/App').default
//     renderApp(NextApp)
//   })
// }