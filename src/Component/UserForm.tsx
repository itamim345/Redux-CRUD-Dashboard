import React, { useEffect, useRef, useState } from "react";
import { createUserAction, updateUserAction } from "../app/features/users/userSlice";
import { IUpdateUserActionProps, IUserForm } from "../app/features/users/userType";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RootState } from "../app/store";

interface Iprops {
  isUpdateForm?: boolean;
}

export default function UserForm(props: Iprops) {
  const { isUpdateForm } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(isUpdateForm){
        const formUpdatedData: IUpdateUserActionProps = {
          id: userIdtoUpdate.current || "544545454545abc",
          data: { firstName, lastName, phoneNumber, age },
        };
        dispatch(updateUserAction(formUpdatedData));
         setFirstName("");
         setLastName("");
         setPhoneNumber("");
         setAge("");
         alert("User Updated Successfully!");
         navigate("/");
    }else {
        let fdata: IUserForm = { firstName, lastName, phoneNumber, age };
        dispatch(createUserAction(fdata));
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setAge("");
        alert("User Added Successfully!");
        navigate("/");
    }
    
  };

  const userIdtoUpdate = useRef(params.id);

  const { list } = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (isUpdateForm && userIdtoUpdate.current) {
      //list of user
      const userData = list.filter((x) => x._id === userIdtoUpdate.current);
      if (userData.length) {
        setFirstName(userData[0].firstName);
        setLastName(userData[0].lastName);
        setPhoneNumber(userData[0].phoneNumber);
        setAge(userData[0].age);
      }
    }
  }, [isUpdateForm]);


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[60%] lg:w-[30%] mx-auto gap-2 mt-5"
      >
        <input
          type="text"
          name="fname"
          value={firstName}
          placeholder="First Name"
          className="border-2 p-1 border-green-700"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          name="lname"
          value={lastName}
          placeholder="Last Name"
          className="border-2 p-1 border-green-700"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          name="phone"
          value={phoneNumber}
          placeholder="Phone"
          className="border-2 p-1 border-green-700"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="number"
          name="Age"
          value={age}
          placeholder="Age"
          className="border-2 p-1 border-green-700"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="submit"
          value={isUpdateForm ? "Update User" : "Create User"}
          className="p-1 bg-green-700 cursor-pointer"
        />
      </form>
    </div>
  );
}
