import React, {useState} from 'react';
import FooterComponent from "../components/footer";
import AdminSidebar from "../components/adminSide";
import Header from "../components/header";

const Settings = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [userNameError,setUserNameError] = useState(true);
    const [passwordError,setPasswordError] = useState(true);
    const [newPasswordError,setNewPasswordError] = useState(true);
    const [confirmPasswordError,setconfirmPasswordError] = useState(true);
    const [counter,setCounter] = useState(0);
  
    const updateLoginStatus = () => {
        if(sessionStorage.getItem('user') === 'admin' && sessionStorage.getItem('password') === 'admin123'){
            setIsLoggedIn(true);
        }  
      }

    const handleChange = (input) => {
        if(counter === 0){
            setCounter(1);
        }
        let name = input.target.name;
        let value = input.target.value;
        switch (name) {
            case 'AdminName':
                (value === 'admin') ? setUserNameError(false) : setUserNameError(true) 
                break;
            case 'password':
                (value === 'admin123') ? setPasswordError (false) : setPasswordError(true)
                break;
            case 'nPassword':
                (value === '') ? setNewPasswordError (false) : setNewPasswordError(true)
                break;
            case 'changePassword':
                (value === '') ? setconfirmPasswordError (false) : setconfirmPasswordError(true)
                break;
            default:
        }
    }

    const handleSubmit = () => { 
        if ( passwordError === false && userNameError === false) {
            
            sessionStorage.setItem(`user`, "admin");
            sessionStorage.setItem(`password`, "admin123");
            updateLoginStatus();
        }
        else{
            alert('Username or password is incorrect')
        }  
    }
    return(
        <>
            <div className="settingCont">
                <div className="row">
                    <Header />
                    <div className="row col-md-4"><AdminSidebar /></div>
                    <div className="row col-md-8 col-xs-12">
                        <div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1 settingCont__settingForm">
                            <h2>Dashboard / Settings</h2> 
                            <form onSubmit={handleSubmit} >
                                <div className="row col-md-12 col-xs-12 settingCont__settingForm__adminName">
                                    <div className="col-md-5 col-xs-5"><label for="AdminName">Admin Name</label></div>
                                    <div className="col-md-7 col-xs-7"><input onchange={handleChange} type="text" name="AdminName" id="AdminName"/>
                                    <p className= {(userNameError === true && counter === 1 ) ? "error" : "error__hide"}>Admin namme is incorrect</p>
                                    </div>
                                </div>
                                <div className="row col-md-12 col-xs-12 settingCont__settingForm__password">
                                    <div className="col-md-5 col-xs-5"><label for="name">Password</label></div>
                                    <div className="col-md-7 col-xs-7"><input onchange={handleChange} type="text" name="password" id="password"/>
                                    <p className= {(passwordError === true && counter === 1 ) ? "error" : "error__hide"}>password is incorrect</p>
                                    </div>
                                </div>
                                <div className="row col-md-12 col-xs-12 settingCont__settingForm__nPassword">
                                    <div className="col-md-5 col-xs-5"><label for="nPassword">New Password</label></div>
                                    <div className="col-md-7 col-xs-7"><input onchange={handleChange} type="text" name="nPassword" id="nPassword"/>
                                    <p className= {(newPasswordError === true && counter === 1 ) ? "error" : "error__hide"}>new password is incorrect</p>
                                    </div>
                                </div>
                                <div className="row col-md-12 col-xs-12 settingCont__settingForm__changePassword">
                                    <div className="col-md-5 col-xs-5"><label for="changePassword">Confirm Password</label></div>
                                    <div className="col-md-7 col-xs-7"><input onchange={handleChange} type="text" name="changePassword" id="changePassword"/>
                                    <p className= {(confirmPasswordError === true && counter === 1 ) ? "error" : "error__hide"}>confrim password is incorrect</p>
                                    </div>
                                </div>
                                <div className="row col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4 settingCont__settingForm__submit">
                                    <button>Submit</button>
                                </div>     
                            </form> 
                        </div>   
                    </div>
                </div>
                <FooterComponent />       
           </div>
      </>  
    )
}
export default Settings;