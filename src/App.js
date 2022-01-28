import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions/action";

import { useEffect, useState } from "react";
import Show from "./Components/Show";
import "../src/index";

function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.apireducer.users);
  const [state, setState] = useState({
    data: {},
    isActive: false,
  });
  const updateState = (u) => {
    setState((previousState) => {
      return {
        ...previousState,
        data: u,
        isActive: "true",
      };
    });
  };
  const close = () => {
    setState((previousState) => {
      // console.log(props.close)
      return {
        ...previousState,
        data: {},
        isActive: "false",
      };
    });
  };

  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);
console.log(close)
  return (
    <>
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
                <button onClick={() => updateState(u)}>view</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="info">
        {state.isActive && <Show data={state.data} boolean={close} />}
      </div>
    </>
  );
}
export default App;
