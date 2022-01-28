import React from "react";
import styles from "../Components/style.css";
import {useState} from "react";
function Show(props) {
   const {data}=props;
   // const {boolean}=props
console.log(props)
   return (
  <div className={styles.view}>
      <h5>{data.name} </h5>
      <h5> {data.email}</h5>
      <h5> {data.phone}</h5> 
      <h5>{data.company.name}</h5>
       <button type="button"onClick={()=>boolean}>Close</button>
    
</div>
 );
}


export default Show;