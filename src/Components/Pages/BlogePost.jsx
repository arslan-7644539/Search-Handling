import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const BlogePost = () => {
  const [result, setResult] = useState(null);
  debugger;
  const { id } = useParams();


  async function resultData() {
    try {
      const response = await axios.get(apiData);
      console.log(response);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const apiData = `https://6774e84f92222241481a2d7f.mockapi.io/api/v1/employees/${id}`;

  useEffect(() => {
    resultData();
  }, [id]);

  return (
    <div>
      <Header />
   
      {result ? (
        <>
          <article className="rounded-xl border border-gray-700 bg-teal-600 p-4">
            <div className="flex items-center gap-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="size-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-medium text-white">
                  {result.name}
                </h3>

                <div className="flow-root">
                  <ul className="-m-1 flex flex-wrap">
                    <li className="p-1 leading-none">
                      <a href="#" className="text-xs font-medium text-gray-300">
                        {" "}
                        Twitter{" "}
                      </a>
                    </li>

                    <li className="p-1 leading-none">
                      <a href="#" className="text-xs font-medium text-gray-300">
                        {" "}
                        GitHub{" "}
                      </a>
                    </li>

                    <li className="p-1 leading-none">
                      <a href="#" className="text-xs font-medium text-gray-300">
                        Website
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li>
                <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                  <strong className="font-medium text-white">
                
                    <h3>User id : {result.id}</h3>
                    {result.status === true ? "Active" : "Resignd"}
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    {result.jobtype}
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </>
      ) : (
        <p>Employee note found</p>
      )}
    </div>
  );
};

export default BlogePost;
