import React from 'react'

const MyCards = ({users,inputDatas}) => {

    // const searchQuerry = 
  return (

<div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8'>
    {users.map((user)=> (
     <div > 
     <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
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
           <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
         </li>

         <li className="p-1 leading-none">
           <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
         </li>

         <li className="p-1 leading-none">
           <a href="#" className="text-xs font-medium text-gray-300">Website</a>
         </li>
       </ul>
     </div>
   </div>
 </div>

 <ul className="mt-4 space-y-2">


   <li>
     <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
       <strong className="font-medium text-white">{user.status === true ? "Active" : "Resignd"}</strong>

       <p className="mt-1 text-xs font-medium text-gray-300">
      {user.jobTitle}
       </p>
     </a>
   </li>
 </ul>
</article>
   </div>
    ))  }
   

    </div>
  )
}

export default MyCards
