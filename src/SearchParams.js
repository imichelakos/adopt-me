import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  // useState returns to us an array with two things in it: the current value
  // of that state and a function to update that function.
  // We're using a feature of JavaScript called destructuring to get both of those thing`s out of the array.
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal,AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed,BreedDropdown,updateBreed] = useDropdown("Breed", "", breeds) ;

  useEffect(()=> {
    updateBreeds([]);
    updateBreed("");

    pet.breeds(animal).then(({breeds:apiBreeds})=>{
      const breedStrings = apiBreeds.map(({name})=> name);
      updateBreeds(breedStrings);
    },console.error);
  }, [animal,updateBreed,updateBreeds]);

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
        <AnimalDropdown/>
        <BreedDropdown/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
