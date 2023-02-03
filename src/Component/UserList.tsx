import React from "react";
import { ApiStatus } from "../app/features/users/userType";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export default function UserList() {

 const {list, listStatus} =  useAppSelector((state: RootState)=> state.user);
 console.log(list)
 console.log(listStatus)
  return (
    <div>
      <table className="border border-gray-300 w-[50%] mx-auto mt-5">
        <thead className="border-b border-gray-300">
          <tr>
            <th>Name</th>
            <th className="border-x">Phone No</th>
            <th>Age</th>
            <th className="border-l">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td>Asis</td>
            <td className="border-x">9889898</td>
            <td>32</td>
            <td className="border-l">
              <button className="bg-green-400 p-1 m-1">update</button>
              <button className="bg-red-400 p-1 m-1">delete</button>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td>moss</td>
            <td className="border-x">897878666</td>
            <td>22</td>
            <td className="border-l">
              <button className="bg-green-400 p-1 m-1">update</button>
              <button className="bg-red-400 p-1 m-1">delete</button>
            </td>
          </tr>

          {
            listStatus === ApiStatus.loading && <tbody>Users Loading...</tbody>
          }
          {
            listStatus === ApiStatus.error && <tbody>Error in Users Loading...</tbody>
          }

          { listStatus === ApiStatus.ideal && list.map((user) => {
            return (
              <tr className="border-b border-gray-300">
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td className="border-x">{user.phoneNumber}</td>
                <td>{user.age}</td>
                <td className="border-l">
                  <button className="bg-green-400 p-1 m-1">update</button>
                  <button className="bg-red-400 p-1 m-1">delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}