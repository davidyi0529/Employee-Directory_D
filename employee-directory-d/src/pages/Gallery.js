import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import Container from "../components/Container";
import Row from "../components/Row";

function Gallery() {
  
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [userIndex, setUserIndex] = useState(0);
  
    useEffect(() => {
      
      });
  
    const loadUsers = (language) => {
      API.getUsersByLanguage(language).then((users) => {
        setUsers(users)
        setUser(users[0])
      })
        .catch(err => console.log(err));
    };
  
      return (
        <UserContext.Provider value={{user, users}}>
            <div>
              <Row>
                <Container />
              </Row>
            </div>
        </UserContext.Provider>
      );
    }
  
  export default Gallery;