import React, { useState } from 'react';

const SearchParams = () => {

  // useState returns to us an array with two things in it: the current value
  // of that state and a function to update that function.
  // We're using a feature of JavaScript called destructuring to get both of those thing`s out of the array.
  const [location, updateLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => updateLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
