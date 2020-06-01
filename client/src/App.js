import React from 'react';
import Navigation from './components/navigation';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css"
import SignIn from './pages/Signin';
// import Login from './pages/Login';
// import FooterComponent from "./components/footer";

const App = props => {
 
  return (
    <div className="App">
     <Navigation />
     {props.children}
     {/* <FooterComponent/> */}
    </div>
  );
}

export default App;



// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.css"
// import './scss/styles.scss';
// import Navigation from './components/navigation';
// import SignIn from './pages/Signin';

// export default class App extends Component {

//   state = {
//     isLoggedIn: false
//   }
//   updateLoginStatus = () => {
//       if(sessionStorage.getItem('user') === 'admin' && sessionStorage.getItem('password') === 'admin123'){
//         this.setState({
//           isLoggedIn: true
//         })
//       }  
//     }
//     updateLogoutStatus = () => {
//       sessionStorage.removeItem(`user`);
//       sessionStorage.removeItem(`password`);
//       this.setState({
//         isLoggedIn: false
//       })
//     }
//   render() {
   
//     return (this.state.isLoggedIn)?
//     (
//       <div className="container-fluid">
//           <Navigation updateLogoutStatus = {this.updateLogoutStatus}/>
          
//             {this.props.children}
          
//       </div>
//     ) :
//     (
//       <SignIn updateLoginStatus={this.updateLoginStatus} />
//     );
//   }
// }
