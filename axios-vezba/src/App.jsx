import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Test from "./Test";

function App() {
  // const axiosInstance = axios.create({
  //   baseURL: "https://jsonplaceholder.typicode.com",
  //   headers: { "Content-Type": "application/json" },
  // });

  // axiosInstance.interceptors.request.use((config) => {
  //   console.log(config);
  //   return config;
  // });

  // axiosInstance
  //   .get("/posts?_limit=5")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err.response));

  // axios
  //   .all([
  //     axiosInstance.get("/posts?_limit=5"),
  //     axiosInstance.get("/todos?_limit=7"),
  //   ])
  //   .then(
  //     axios.spread((posts, todos) => {
  //       console.log(posts);
  //     })
  //   )
  //   .catch((err) => console.log(err));

  const [dataList, setDataList] = useState([]);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    headers: { "Content-Type": "application/json" },
  });

  const axiosInstanceAuth = axios.create({
    baseURL: "http://localhost:4000",
    headers: { "Content-Type": "application/json" },
  });

  async function login() {
    const result = await axiosInstanceAuth.post("/login", {
      username: "vuk",
      password: "lozinka",
    });
    console.log(result);
    if (result?.status === 200) {
      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
    }
    console.log(result);
  }

  async function getProjects() {
    try {
      const result = await axiosInstance.get("/purchases");
      console.log(result);
      if (result) {
        setDataList(result.data);
      }
    } catch (error) {
      console.log(error, "get projects error");
    }
  }

  axiosInstance.interceptors.request.use(
    (req) => {
      const accessToken = localStorage.getItem("accessToken");
      req.headers["Authorization"] = `Bearer ${accessToken}`;
      return req;
    },
    (err) => {
      console.log("error in request interceptor");
    }
  );

  // axiosInstance.interceptors.response.use(
  //   (res) => {
  //     return res;
  //   },
  //   async (err) => {
  //     const originalRequest = err.config;
  //     console.log(err.config, err.response);
  //     if (err.response) {
  //       if (
  //         (err.response.status === 401 || err.response.status === 403) &&
  //         !originalRequest._retry
  //       ) {
  //         originalRequest._retry = true;
  //         try {
  //           const refreshToken = localStorage.getItem("refreshToken");
  //           const res = await axiosInstanceAuth.post("token", {
  //             token: refreshToken,
  //           });
  //           if (res.status === 201) {
  //             localStorage.setItem("accessToken", res.data.accessToken);
  //             // localStorage.setItem("refreshToken", res.data.refreshToken);
  //             axiosInstance.defaults.headers.common[
  //               "Authorization"
  //             ] = `Bearer ${localStorage.getItem("accessToken")}`;
  //             console.log("refreshed!!!");
  //             return axiosInstance(originalRequest);
  //           }
  //         } catch (_error) {
  //           Promise.reject(_error);
  //         }
  //       }
  //     }
  //     return Promise.reject(err);
  //   }
  // );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      // if (
      //   error.response.status === 401 &&
      //   originalRequest.url === `http://localhost:4000/token`
      // ) {
      //   console.log("/login");
      //   return Promise.reject(error);
      // }

      if (error.response.status === 403 && !originalRequest._retry) {
        console.log("retrying call");
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refreshToken");
        const res = await axiosInstanceAuth.post("/token", {
          token: refreshToken,
        });
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("accessToken", res.data.accessToken);
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("accessToken")}`;
          return axiosInstance(originalRequest);
        }
      }
      return Promise.reject(error);
    }
  );

  function getProjectsTwo() {
    axiosInstance
      .get(`/purchases`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response, "fetching");
        setDataList(response.data);
      })
      .catch((err) => {
        console.log(err);
        let refreshToken = localStorage.getItem("refreshToken");
        let token = {
          token: refreshToken,
        };
        axiosInstanceAuth.post(`/token`, token).then((res) => {
          console.log(res, "refreshed access token");
          localStorage.setItem("accessToken", res.data.accessToken);
          // localStorage.setItem("refreshToken", res.data.refreshToken);
          axiosInstance
            .get(`/purchases`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
              },
            })
            .then((obj) => {
              console.log("renewed projects");
              console.log(obj.data);
              setDataList(obj.data);
            })
            .catch((err) => {
              console.log(err);
              console.log("final projects error");
              // localStorage.removeItem("accessToken");
              // localStorage.removeItem("refreshToken");
            });
        });
      });
  }

  useEffect(() => {
    // getProjects();
  }, []);

  return (
    // <div className="App">
    //   <button onClick={login}>Login</button>
    //   <button onClick={getProjects}>Get projects</button>
    //   <ul>
    //     {dataList.map((obj) => {
    //       const { id, createdAt } = obj;
    //       return <li key={id}>{createdAt}</li>;
    //     })}
    //   </ul>
    // </div>
    <Test />
  );
}

export default App;
