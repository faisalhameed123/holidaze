import React, { useState, useEffect } from "react";

const Redirect = (props) =>  {
  const [linker, setlinker] = useState ('');
  useEffect() 
  {
    setlinker(props.loc)
    window.location = linker;
  }
    return (<section>Redirecting...</section>); 
}

export default Redirect;