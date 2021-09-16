import React from "react";
import { FaMagento } from "react-icons/fa";

const App = () => {
  return (
    <div className="h-screen flex">
      <div className="w-64 px-8 py-4 bg-gray-100 border-r">
        <FaMagento className="h-9 w-9" />
        <nav>
          <h2>Issues</h2>
        </nav>
      </div>
      <div className="bg-white">
        <div className="border-b-2 border-gray-200"></div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
