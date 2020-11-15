import React, { useContext } from 'react';
import EmployeeDataBody from '../EmployeeDataBody/EmployeeDataBody';
import './EmployeeDataTable';
import EmployeeContext from '../../utils/EmployeeContext';

const EmployeeDataTable = () => {
  const context = useContext(EmployeeContext);

  return (

    <div className='datatable mt-5'>
      <table
        id='table'
        className='table table-striped table-hover table-condensed'
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name }) => {
              return (
                <th
                  key={name}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}                  
                </th>
              );
            })}
          </tr>
        </thead>

        <EmployeeDataBody />
      </table>
    </div>
  );
}

export default EmployeeDataTable;
