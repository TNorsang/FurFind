import React from "react";
import jsonData from "./data.json";

function LocalJsonReader() {
  const users = jsonData.USERS;

  return (
    <div>
      {users.map((user, userIndex) => (
        <div key={userIndex}>
          <h3>{user.FirstName + " " + user.LastName}</h3>
          {user.PETS.map((pet, petIndex) => (
            <div key={`${userIndex}-${petIndex}`}>
              <p>Description: {pet.Description}</p>
              <img src={pet.Photo} alt={`Pet ${petIndex}`} />
              {pet.IsLost && (
                <p>
                  {" "}
                  Last Seen: {pet.LastGeoLocation.Longitude}{" "}
                  {pet.LastGeoLocation.Latitude}{" "}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LocalJsonReader;
