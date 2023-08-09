import React, { useState, useEffect } from "react";
import { useTeamMembers } from "./data/fetchMembers";
import AddMemberForm from "./AddMember";

const TeamTable = () => {
  const { teamMembers, isLoading } = useTeamMembers();
  const [sortedBy, setSortedBy] = useState(null);
  const [sortedMembers, setSortedMembers] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const activeMembers = teamMembers.filter(
        (member) => member.status === "Active"
      );

      setSortedMembers(activeMembers);
    }
  }, [isLoading, teamMembers]);

  const handleSort = (property) => {
    const newSortedMembers = [...sortedMembers].sort((a, b) =>
      a[property] > b[property] ? 1 : -1
    );
    if (sortedBy === property) {
      newSortedMembers.reverse();
    }
    setSortedBy(property);
    setSortedMembers(newSortedMembers);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleAddMember = (newMember) => {
    // Add the new member to the sortedMembers array
    setSortedMembers((prevMembers) => [...prevMembers, newMember]);
  };

  const handleDelete = (memberName) => {
    // Remove the member with the given name from the teamMembers array
    const updatedMembers = sortedMembers.filter(
      (member) => member.name !== memberName
    );
    setSortedMembers(updatedMembers);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Name
                <a onClick={() => handleSort("name")}>
                  <svg
                    className="w-3 h-3 ml-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Favorite Food
                <a onClick={() => handleSort("favoriteFood")}>
                  <svg
                    className="w-3 h-3 ml-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Favorite Movie
                <a onClick={() => handleSort("favoriteMovie")}>
                  <svg
                    className="w-3 h-3 ml-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Status</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Options</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedMembers.map((member) => (
            <tr
              key={member.name}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {member.name}
              </th>
              <td className="px-6 py-4">{member.favoriteFood}</td>
              <td className="px-6 py-4">{member.favoriteMovie}</td>
              <td className="px-6 py-4">{member.status}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDelete(member.name)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddMemberForm onAddMember={handleAddMember} />
    </div>
  );
};

export default TeamTable;
