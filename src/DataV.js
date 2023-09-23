import React, { useEffect, useState } from "react";

function DataV() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Function to fetch JSON data
    const fetchJsonData = async () => {
      try {
        const response = await fetch("./data.json"); // Replace with the actual path
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJsonData(data);
        console.log(data);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    // Call the fetch function when the component mounts
    fetchJsonData();
  }, []);

  return (
    <div>
      {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>Loading JSON data...</p>
      )}
    </div>
  );
}

export default DataV;
