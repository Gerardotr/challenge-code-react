import React from "react";
import TeamTable from "./TeamTable";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container mx-auto dark:bg-gray-900">
        <section>
          <Navbar />
          <TeamTable />
        </section>
      </div>
    </div>
  );
};

export default Home;
