import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Login from "../login";
import Logout from "../logout";

function Home({ list, setUserList }) {
  // const ifHasToken = localStorage.getItem("token");
  const [loginStatus, setLoginStatus] = useState(false);
  //const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    if (ifHasToken) {
      setLoading(false);
      setLoginStatus(true);
    } else {
      setLoading(false);
      console.log("token not working");
    }
  }, []);
*/
  return (
    <div className="App">
      <Header></Header>

      {loginStatus ? (
        <Logout setLoginStatus={setLoginStatus}></Logout>
      ) : (
        <Login
          loginStatus={loginStatus}
          setLoginStatus={setLoginStatus}
        ></Login>
      )}

      <Footer></Footer>
    </div>
  );
}

export default Home;
