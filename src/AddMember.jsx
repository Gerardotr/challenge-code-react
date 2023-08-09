import React, { useState } from "react";

const AddMemberForm = ({ onAddMember }) => {
  const [newMember, setNewMember] = useState({
    name: "",
    favoriteFood: "",
    favoriteMovie: "",
    status: "Active",
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === "checkbox" ? event.target.checked : value;

    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddMember(newMember);
    setNewMember({
      name: "",
      favoriteFood: "",
      favoriteMovie: "",
      status: "Active",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6"
    >
      <h2 className="text-xl mb-4 text-gray-800 dark:text-white">
        Add New Member
      </h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={newMember.name}
          onChange={handleInputChange}
          className="w-full border rounded p-2 dark:bg-gray-700"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="favoriteFood"
          value={newMember.favoriteFood}
          onChange={handleInputChange}
          className="w-full border rounded p-2 dark:bg-gray-700"
          placeholder="Favorite Food"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="favoriteMovie"
          value={newMember.favoriteMovie}
          onChange={handleInputChange}
          className="w-full border rounded p-2 dark:bg-gray-700"
          placeholder="Favorite Movie"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Member
      </button>
    </form>
  );
};

export default AddMemberForm;
