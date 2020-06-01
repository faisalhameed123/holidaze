import React, {useState} from "react";
import FooterComponent from "../components/footer";
import Header from "../components/header";

export default function Contact(props){
    const [ NameError, setNameError ] = useState(false);
    const [ EmailError, setEmailError ] = useState(false);
    const [ MessageError, setMessageError ] = useState(false);
    const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const handleSubmit = (input) => {
        input.preventDefault();
        let name = input.target[0].value;
        let email = input.target[1].value;
        let message = input.target[2].value; 
        
        if  (name === ''){
                setNameError(true) 
        }
            else    
                { setNameError(false)
            }
        if  (! emailPattern.test(email)){
                setEmailError(true) 
        }
            else    
                { setEmailError(false)
            }     
        if  (message === ''){
                setMessageError(true) 
        }
            else    
                { setMessageError(false)
            }

        if( name === ''|| (! emailPattern.test(email))|| ( message === '') ){
            alert('form submitted unsuccesfull')
        }
        else{
            alert('form submitted succesfull')
        }
    }
    return(
     <>
        <div className="conCont">
            <Header />
            <div className="row">
                <div className="col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2 conCont__contForm">
                    <h2>Contact form</h2> 
                    <form method="POST" onSubmit={handleSubmit} action="contact-success.php">
                        <div className="row col-md-12 conCont__contForm__name">
                            <div className="col-md-3 col-xs-3"><label for="clientName">Fullname</label></div>
                            <div className="col-md-9 col-xs-9"><input type="text" name="name" id="name"/>
                            <p className={(NameError)?'error' : 'error__hide'}>Full Name Required</p>
                            </div>
                        </div>
                        <div className="row col-md-12 conCont__contForm__email">
                            <div className="col-md-3 col-xs-3"><label for="email">Email</label></div>
                            <div className="col-md-9 col-xs-9"><input type="text" name="email" id="email"/>
                            <p className={(EmailError) ? 'error' : 'error__hide'}>Email Invalid</p>
                            </div>
                        </div>
                        <div className="row col-md-12 conCont__contForm__message">
                            <div className="col-md-4 col-xs-4"><label for="message">Message</label></div>
                            <div className="col-md-8 col-xs-8"><textarea name="message" id="message" rows="3" cols="20"></textarea>
                            <p className={(MessageError) ? 'error' : 'error__hide'}>Invalid message</p>
                            </div>
                        </div>
                        <div className="row col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4 conCont__contForm__submit">
                            <button>Submit</button>
                        </div>     
                    </form> 
                </div>    
            </div>
            <FooterComponent />   
        </div>
     </>
    )
}