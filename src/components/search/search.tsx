import { AsyncPaginate } from 'react-select-async-paginate';
import React, { useState } from 'react';
import { GEO_API_URL, geoApiOptions } from '../../api';

interface onSearchChangeType {
  onSearchChange: (searchData: string) => void;
}

interface cityType {
  latitude: string;
  longitude: string;
  name: string;
  countryCode: string;
}

const Search = ({ onSearchChange: onSearchChange }: onSearchChangeType) => {
  const [search, setSearch] = useState('');
  const handleOnChange = (searchData: string | null) => {
    if (searchData === null) return;
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue: string) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    ).then((response) => response.json());

    const responseJSON = await response;
    return {
      options: responseJSON.data.map((city: cityType) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`
        };
      })
    };
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={400}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
