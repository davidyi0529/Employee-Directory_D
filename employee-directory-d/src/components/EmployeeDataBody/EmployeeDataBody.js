import React, { useContext } from 'react';
import './EmployeeDataBody.css';
import EmployeeContext from '../../utils/EmployeeContext';

const EmployeeDataBody = () => {
  const context = useContext(EmployeeContext);

  return (
    <tbody>
      {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
        context.developerState.filteredUsers.map(({ login, name, picture, phone, email, location }) => {
          return (
            <tr key={login.uuid}>
              <td data-th='Image' className='align-middle'>
                <img
                  src={picture.medium}
                  alt={'profile image for ' + name.first + ' ' + name.last}
                  className='img-responsive'
                />
              </td>
              <td data-th='Name' className='name-cell align-middle'>
                {name.first} {name.last}
              </td>
              <td data-th='Phone' className='align-middle'>
                {phone}
              </td>
              <td data-th='Email' className='align-middle'>
                <a href={'mailto:' + email} target='__blank'>
                  {email}
                </a>
              </td>
              <td data-th='Location' className='align-middle'>
                {location.city} , {location.state}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default EmployeeDataBody;
