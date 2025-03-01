import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MyCards = ({ users, inputData }) => {
  const navigate = useNavigate();

  // const cardHandler = ()=>{
  //  navigate("/bloge", {state : {id : user.id}})
  // }

  // console.log("🚀 ~ MyCards ~ inputDatas:", inputData)

  // const result = users.filter((user)=> user.name === inputDatas)

  const searchQuerry = inputData
    ? users.filter((user) =>
        user.name.toLowerCase().includes(inputData.toLowerCase())
      )
    : users;
  // debugger

  // const id = user.id

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      {searchQuerry.map((user, index) => (
        // debugger
        <div key={index}>
          <article className="rounded-xl border border-gray-700 bg-teal-600 p-4">
            <div className="flex items-center gap-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="size-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-medium text-white">{user.name}</h3>

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
                    {/* ============================================================================= */}
                    {/* <Link to={`/bloge/${user.id}`}> */}
                    <button
                      onClick={() => navigate(`/bloge/${user.id}`)}
                      className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-[#65BFBE] px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                    >
                      More info
                    </button>
                    {/* </Link> */}
                    {/* =============================================================================== */}
                    <h3>User id : {user.id}</h3>
                    {user.status === true ? "Active" : "Resignd"}
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    {user.jobtype}
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </div>
      ))}
    </div>
  );
};

export default MyCards;
