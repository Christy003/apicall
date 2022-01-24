import React from "react";
import { connect, useDispatch,useSelector } from "react-redux";
 import {getUsersFetch} from "./actions/action";



function App(){
    const dispatch= useDispatch();
    
    const users=useSelector(state=>state.apireducer.users);
    return(
        <>
        <button onClick={()=>dispatch(getUsersFetch())}>Click here for Details</button>
     {/* <div>Users:{users.map((user=>(<div>{user.name}</div>)))}</div> */}
     <table border="1" >
               <thead>
               <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Phone Number</th>
                   <th>Company Name</th>
               </tr>
               </thead>
               <tbody>
               {users.map(u =>
                   <tr  key={u.id}>
                       <td>{u.id}</td>
                       <td>{u.name}</td>
                       <td>{u.email}</td>
                       <td>{u.phone}</td>
                       <td>{u.company.name}</td>
                       <td><button>view</button></td>
                   </tr>
               )}
               </tbody>
           </table>
        </>
    )
}
// const mapStateToProps = (state) => {
//    return{
//         users: state.users}
//  }; 
// const mapDispatchToProps =(dispatch )=>{
//     return{
//     getUsersFetch:()=>dispatch(getUsersFetch)
//     }
//  };

export default
//  connect(mapStateToProps,mapDispatchToProps) (
     App
    //  )
     ;