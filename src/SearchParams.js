import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  // useState returns to us an array with two things in it: the current value
  // of that state and a function to update that function.
  // We're using a feature of JavaScript called destructuring to get both of those thing`s out of the array.
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal,AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed,BreedDropdown,updateBreed] = useDropdown("Breed", "", breeds) ;
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

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
      <form onSubmit={
        event => {
          event.preventDefault();
          requestPets();
        }
      }>
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
        <label htmlFor="theme">
          Theme
          <select
              value={theme}
              onChange={event => setTheme(event.target.value)}
              onBlur={event => setTheme(event.target.value)}
          >
            <option value="darkblue">Dark Blue</option>
            <option value="peru">Peru</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />>
    </div>
  );
};

export default SearchParams;
