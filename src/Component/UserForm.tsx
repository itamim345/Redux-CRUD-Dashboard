import React, { useState } from 'react';
import { createUserAction } from '../app/features/users/userSlice';
import { IUserForm } from '../app/features/users/userType';
import { useAppDispatch } from '../app/hooks';
import { useNavigate } from "react-router-dom";

export default function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      let fdata: IUserForm = { firstName, lastName, phoneNumber, age };
    dispatch(createUserAction(fdata));
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setAge("")
    alert("User Added Successfully!");
    navigate('/')
    };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[30%] mx-auto gap-2 mt-5"
      >
        <input
          type="text"
          name="fname"
          value={firstName}
          placeholder="First Name"
          className="border-2 border-green-700"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lname"
          value={lastName}
          placeholder="Last Name"
          className="border-2 border-green-700"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="phone"
          value={phoneNumber}
          placeholder="Phone"
          className="border-2 border-green-700"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="number"
          name="Age"
          value={age}
          placeholder="Age"
          className="border-2 border-green-700"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="submit"
          value="Create User"
          className="p-1 bg-green-700 cursor-pointer"
        />
      </form>
    </div>
  );
}
