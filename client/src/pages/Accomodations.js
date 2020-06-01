import React,{useState} from 'react';
import FooterComponent from "../components/footer";
import AccomComponent from "../components/Accom";
import Searchbar from "../components/searchbar";
import Header from "../components/header";
import Estresp from "../server/establishments.json";

export default function Accomodations(props){
    const [ filterResults, setfilter ] = useState([]);
    const [ isResultFiltered, setIsResultfilt ] = useState(false);

    const handleSubmit =(input) => {
        input.preventDefault();
        var filterApi = Estresp;
        filterApi = filterApi.filter((value) =>{
          return value.establishmentName.toLowerCase().includes((input.target.value).toLowerCase());
    })
      setfilter(filterApi);
      setIsResultfilt(true);
    }
    return(
     <> 
      
        <div className="accoCont">
            <Header />
            {/* <Searchbar /> */}
            <form>
                <div className="row searcharea col-md-8 col-md-offset-2"> 
                    <div className="col-md-12 form-group">
                        <input className="form-control" onChange={handleSubmit} name="searchPhrase" type="text" placeholder="Search by name" id="dest"></input>
                        <button className="btn btn-primary">
                        <h4>Search</h4>
                        </button>
                    </div>   
                </div>
            </form>
            <div className="row col-md-12 col-xs-12">
                <div className="col-md-1"></div>
                <div className="col-md-2 col-xs-4 accoCont__accomheading">
                    <h2>Bed&Breakfast</h2>
                </div>
                <div className="col-md-2 col-xs-4 accoCont__accomheading">
                    <h2>Hotel</h2>
                </div>
                <div className="col-md-2 col-xs-4 accoCont__accomheading">
                    <h2>Guesthouse</h2>
                </div>
                <div className="col-md-5"></div>
            </div>
            <div className="row accoCont__body">
               <div className="col-md-9">
                   {
                            (isResultFiltered) ?
                            filterResults.map((data, index) => {
                              return  <AccomComponent
                              key={data.id}
                              id={data.id}
                              imageUrl={data.imageUrl}
                              name={data.establishmentName}
                              price={data.price}
                              />
                            }) 
                            :
                            Estresp.map((data)=>{
                            return (  
                                <AccomComponent
                                key={data.id}
                                id={data.id}
                                imageUrl={data.imageUrl}
                                name={data.establishmentName}
                                price={data.price}
                                />
                            );

                        })
                   }
        
                </div>     
                <div className="col-md-3 accoCont__sideBar">
                    <div className="row col-md-12">
                        <div className="row accoCont__sideBar__heading">
                            <h3>Prices</h3>
                        </div>
                        <div className="row col-md-12 col-xs-12 accoCont__sideBar__body">
                            <div className="row">
                                <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">

                                <label>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                    {/* <input type="checkbox" onclick="#" className="accoCont__sideBar__body--check__p1"/> <label className="accoCont__sideBar__body--check__label" for="p1"></label> */}
                                </div>
                                <div className="col-md-8 col-xs-8 accoCont__sideBar__body--price">
                                    <h3>0-1000</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                                    <input type="checkbox" onclick="#" className="p1"/> <label for="p1"></label>
                                </div>
                                <div className="col-md-8 col-xs-8 accoCont__sideBar__body--price">
                                    <h3>1000-2000</h3>
                                </div>
                            </div>     
                        </div>
                    </div>
                    <div className="row col-md-11">
                        <div className="row accoCont__sideBar__heading">
                            <h3>Max Guests</h3>
                        </div>
                        <div className="row col-md-12 col-xs-12 accoCont__sideBar__body">
                            <div className="row">
                                <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                                    <input type="checkbox" onclick="#" className="p1"/> <label for="p1"></label>
                                </div>
                                <div className="col-md-8 col-xs-8 accoCont__sideBar__body--amount">
                                    <h3>0-10</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                                    <input type="checkbox" onclick="#" className="p1"/> <label for="p1"></label>
                                </div>
                                <div className="col-md-8 col-xs-8 accoCont__sideBar__body--amount">
                                    <h3>10-20</h3>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="row col-md-11">
                        <div className="row accoCont__sideBar__heading">
                            <h3>Self Catering</h3>
                        </div>
                        <div className="row col-md-12 col-xs-12 accoCont__sideBar__body">
                            <div className="row">
                                <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                                    <input type="checkbox" onclick="#" className="p1"/> <label for="p1"></label>
                                </div>
                                <div className="col-md-8 col-xs-8 accoCont__sideBar__body--booleon">
                                    <h3>Yes</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                                    <input type="checkbox" onclick="#" className="p1"/> <label for="p1"></label>
                                </div>
                                <div className="col-md-8 col-xs-8 accoCont__sideBar__body--booleon">
                                    <h3>No</h3>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div> 
            </div>
           <FooterComponent/>    
        </div>
     </>
    )
}



