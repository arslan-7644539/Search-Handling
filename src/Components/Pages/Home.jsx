import React, { useEffect, useState } from "react";
import Header from "../Header";
import MyCards from "../MyCards";
import axios from "axios";

const Home = () => {
  const [users, setusers] = useState([]);
  const [inputData, setinputData] = useState("");
  const URL = "https://6774e84f92222241481a2d7f.mockapi.io/api/v1/employees";

  async function getUser() {
    try {
      // debugger
      const response = await axios.get(URL);
      console.log(response);
      setusers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(users);

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Header inputData={inputData} setinputData={setinputData} />
      <MyCards users={users} inputData={inputData} />
    </div>
  );
};

export default Home;
