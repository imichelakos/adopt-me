import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {

  // useState returns to us an array with two things in it: the current value
  // of that state and a function to update that function.
  // We're using a feature of JavaScript called destructuring to get both of those thing`s out of the array.
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal,AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed,BreedDropdown] = useDropdown("Breed", "", breeds) ;

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
        {/*<label htmlFor="animal">*/}
        {/*  Animal*/}
        {/*  <select*/}
        {/*      id="animal"*/}
        {/*      value={animal}*/}
        {/*      onChange={event => updateAnimal(event.target.value)}*/}
        {/*      onBlur={event => updateAnimal(event.target.value)}*/}
        {/*  >*/}
        {/*    <option />*/}
        {/*    {ANIMALS.map(animal => (*/}
        {/*        <option key={animal} value={animal}>*/}
        {/*          {animal}*/}
        {/*        </option>*/}
        {/*    ))}*/}
        {/*  </select>*/}
        {/*</label>*/}
        <AnimalDropdown/>
        {/*<label htmlFor="breed">*/}
        {/*  Breed*/}
        {/*  <select*/}
        {/*      id="breed"*/}
        {/*      value = {breed}*/}
        {/*      onChange = {event => updateBreed(event.target.value)}*/}
        {/*      onBlur = {event => updateBreed(event.target.value)}*/}
        {/*      disabled = {breeds.length === 0}*/}
        {/*  >*/}
        {/*    <option />*/}
        {/*    {breeds.map(breed=>(*/}
        {/*        <option key={breed} value={breed}>*/}
        {/*          {breed}*/}
        {/*        </option>*/}
        {/*    ))}*/}
        {/*  </select>*/}
        {/*</label>*/}
        <BreedDropdown/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
