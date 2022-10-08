import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [api, setApi] = useState("");
  const [type, setType] = useState("");

  //access token
  const Auth = {
    headers: {
      Authorization:
        "BearereyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2MzU5NjUyLCJpYXQiOjE2NjQ4MjM2NTIsImp0aSI6Ijg5ZDNjZDIwZTU2MDQ1MmY4NmY0ZDUzNTNmZjg4NzMyIiwidXNlcl9pZCI6NX0.BKDG676O2C5B_PZsjDVir3k_0AK8-IXuZBnTBD1_oMY",
    },
  };

  //send req by type
  const sendReq = () => {
    //post
    if (type === "POST") {
      axios
        .post(api, Auth)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //get
      axios
        .get(api, Auth)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="App">
      {/* heading */}
      <h1
        style={{
          color: "white",
        }}
      >
        {type}
        {" : "}
        {api}
      </h1>
      {/* api input */}
      <input
        style={{
          background: "red",
          color: "white",
          fontSize: "22px",
          width: "90%",
          border: "1px solid yellow",
          padding: "20px",
          margin: "20px 0",
        }}
        placeholder="Enter your api"
        value={api}
        onChange={(e) => setApi(e.target.value)}
      />
      <br />
      {/* type input */}
      <input
        style={{
          background: "red",
          color: "white",
          padding: "20px",
          width: "40%",
          fontSize: "22px",
          border: "1px solid yellow",
        }}
        placeholder="Enter POST / GET"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <br />
      {/* req button */}
      <button
        onClick={sendReq}
        style={{
          background: "green",
          color: "white",
          padding: "20px",
          fontSize: "22px",
          width: "20%",
          cursor: "pointer",
          border: "1px solid yellow",
          margin: "20px 0",
        }}
      >
        SEND
      </button>
      <h1
        style={{
          color: "white",
        }}
      >
        Check your Console
      </h1>
    </div>
  );
}

export default App;
