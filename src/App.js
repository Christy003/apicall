import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { take } from "redux-saga/effects";
import { getUsersFetch } from "./actions/action";

function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.apireducer.users);
  return (
    <>
      <button onClick={() => dispatch(getUsersFetch())}>
        Click here for Details
      </button>
      {/* <div>Users:{users.map((user=>(<div>{user.name}</div>)))}</div> */}
      <table border="1" id="Table">
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
          {users.map((u) => (
            <tr key={u.id}>
              <td className="row-data" id="myid">
                {u.id}
              </td>
              <td className="row-data">{u.name}</td>
              <td className="row-data">{u.email}</td>
              <td className="row-data">{u.phone}</td>
              <td className="row-data">{u.company.name}</td>
              <td>
                <button onClick={() => show()}>view</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p id="info"></p>
    </>
  );
}

function show() {
//   document.getElementById("info").innerHTML = "";
   var myTab = document.getElementById("Table");

  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
  for (let i = 1; i < myTab.rows.length; i++) {
    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
     var objCells = myTab.rows.item(i).cells;

    // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
 for (var j = 0; j < objCells.length - 1; j++) {
     info.innerHTML = info.innerHTML + " " + objCells.item(j).innerHTML;
  }
    info.innerHTML = info.innerHTML + "<br />"; // ADD A BREAK (TAG).



  }
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

export default //  connect(mapStateToProps,mapDispatchToProps) (
App;
//  )
