import React, { useContext } from 'react';
import './SearchByName.css';
import EmployeeContext from '../../utils/EmployeeContext';

const SearchByName = () => {
  const context = useContext(EmployeeContext);

  return (
    <div className='searchbox'>
      <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id=''>
              Search
            </span>
          </div>
          <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='name'
          aria-label='Search'
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default SearchByName;
