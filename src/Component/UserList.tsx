import React, { useEffect } from "react";
import { deleteUserAction, getUserListAction } from "../app/features/users/userSlice";
import { ApiStatus } from "../app/features/users/userType";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";


export default function UserList() {

 const {list, listStatus} =  useAppSelector((state: RootState)=> state.user);
 console.log(list)

 const dispatch = useAppDispatch();
 const navigate = useNavigate()

  useEffect(()=> {
  dispatch(getUserListAction())
},[])

  return (
    <div>
      <table className="border border-zinc-800 w-[80%] lg:w-[50%] mx-auto mt-5">
        <thead className="border-b border-zinc-800">
          <tr>
            <th className="text-red-700">Name</th>
            <th className="border-x border-zinc-800 text-lime-600">Phone No</th>
            <th className="text-blue-600">Age</th>
            <th className="border-l border-zinc-800 text-pink-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {listStatus === ApiStatus.loading && <tbody>Users Loading...</tbody>}
          {listStatus === ApiStatus.error && (
            <tbody>Error in Users Loading...</tbody>
          )}

          {listStatus === ApiStatus.ideal &&
            list.map((user, index) => {
              return (
                <tr
                  className="border-b border-zinc-800 hover:bg-gray-200"
                  key={index}
                >
                  <td className="font-bold">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="border-x border-zinc-800">
                    {user.phoneNumber}
                  </td>
                  <td>{user.age}</td>
                  <td className="border-l border-zinc-800">
                    <button
                      className="hover:bg-green-800 rounded bg-green-600 p-1 m-1"
                      onClick={() => {
                        navigate(`user/${user._id}`);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="hover:bg-red-700 bg-red-500 p-1 m-1 rounded"
                      onClick={() => {
                        dispatch(deleteUserAction(user._id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
