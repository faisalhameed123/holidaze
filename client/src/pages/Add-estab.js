import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from "../components/footer";
import AdminSidebar from "../components/adminSide";
import Header from "../components/header";
import SignIn from './Signin';
import Redirect from "../components/Redirect";

export default function AddEstab(props){
    const filterPara = props.match.params.id;
    // const [isLoggedIn,setIsLoggedIn] = useState(false);
    // const updateLoginStatus = () => {
    //     if(sessionStorage.getItem('user') === 'admin' && sessionStorage.getItem('password') === 'admin123'){
    //         setIsLoggedIn(true);
    //     }  
    //   }
    return(
     <>  
        {
            (!filterPara)?
            <Redirect loc="/SignIn"/>
           : 
            <div className="addEstabCont">
            <Header />
            <div className="row">
                    <div className="col-md-4"><AdminSidebar id={filterPara} /></div>
                <div className="col-md-8 col-xs-12">
                    <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 addEstabCont__Form">
                            <h2>Dashboard / Add Establishment</h2> 
                        <form method="POST" action="http://localhost:8080/HOLIDAZE/client/src/server/add-establishments-success.php">
                            <div className="row col-md-12 col-xs-12 addEstabCont__Form__name form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__name__label"><label for="establishmentName">Establishment Name</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__name--input"><input type="text" name="establishmentName" className="form-control" id="establishmentName"/></div>
                            </div>
                            <div className="row col-md-12 col-xs-12 addEstabCont__Form__email form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__email__label"><label for="establishmentEmail">Establishment Email</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__email--input"><input type="text" name="establishmentEmail" className="form-control" id="establishmentEmail"/></div>
                            </div>
                           <div className="row col-md-12 col-xs-12 addEstabCont__Form__price form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__price__label"><label for="price">Price/night Kr</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__price--input"><input type="text" name="price" className="form-control" id="price"/></div>
                            </div>
                            <div className="row col-md-12 col-xs-12 addEstabCont__Form__guest form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__guest__label"><label for="maxGuests">Max guests</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__guest--input"><input type="number" name="maxGuests" className="form-control" id="maxGuests"/></div>
                            </div>
                            <div className="row col-md-12 col-xs-12 addEstabCont__Form__lat form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__lat__label"><label for="googleLat">Google Coordinates Latitude</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__lat--input"><input type="text" name="googleLat" className="form-control" id="googleLat"/></div>
                            </div>
                            <div className="row col-md-12 col-xs-12 addEstabCont__Form__long form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__long__label"><label for="googleLong">Google Coordinates Longitude</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__long--input"><input type="text" name="googleLong" className="form-control" id="googleLong"/></div>
                            </div>
                            <div className="row col-md-12 col-xs-12 addEstabCont__Form__desc form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__desc__label"><label for="description">Description</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__desc--input"><input type="text" name="description" className="form-control" id="description"/></div>
                            </div>
                            <div className="row col-md-12 addEstabCont__Form__self form-group">
                                <div className="col-md-4 addEstabCont__Form__self__label"><label for="selfCatering">Self-catering</label></div>
                                <div className="row col-md-8 addEstabCont__Form__self__options">
                                <div className="row col-md-6 addEstabCont__Form__self__options__true">
                                <div className="row col-md-6 addEstabCont__Form__self__options__true__label"><label for="true">True</label></div>
                                <div className="row col-md-6 addEstabCont__Form__self__options__true--input"><input type="radio" id="true" className="form-control" name="selfCatering" value="true"/></div>
                                </div>
                                <div className="row col-md-6 addEstabCont__Form__self__options__false">
                                <div className="row col-md-6 addEstabCont__Form__self__options__false__label"><label for="false">False</label></div>
                                <div className="row col-md-6 addEstabCont__Form__self__options__false--input"><input type="radio" id="false" className="form-control" name="selfCatering" value="false"/></div>
                                </div>
                                </div>
                                
                            </div>
                            <div className="row col-md-12 col-xs-12 addEstabCont__Form__id form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__id__label"><label for="id">ID</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__id--input"><input type="number" name="id" className="form-control" id="id"/></div>
                            </div>
                            <div className="row col-md-12 col-xs-12 addEstabCont__Form__image form-group">
                                <div className="col-md-3 col-xs-3 addEstabCont__Form__image__label"><label for="imageUrl">Image URL</label></div>
                                <div className="col-md-9 col-xs-9 addEstabCont__Form__image--input">
                                <div class="input-group">
                            <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01"></span>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile01" name="imageUrl"
                                aria-describedby="inputGroupFileAddon01"/>
                                <label className="custom-file-label" for="inputGroupFile01"></label>
                            </div>
                            </div>

                                </div>
                                
                            </div>
                            
                            <div className="row col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4 conCont__contForm__submit"> 
                                <button>Add</button>
                            </div>     
                        </form>  
                    </div>         
                </div>
           </div>
            <FooterComponent />    
        </div> 
        }
     </>
    )
}