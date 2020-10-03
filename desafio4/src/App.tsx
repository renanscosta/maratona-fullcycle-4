import React, { useState, useEffect } from "react";
import axios from "axios";
import css from "./user.module.css";
type Props = {};

interface UserModel {
  id: string;
  email: string
  first_name: string;
  last_name: string;
  avatar: string;
}


function App(props: Props) {
  const [users, setUsers] = useState<UserModel[]>([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1&per_page=12").then((response) => {

      setUsers(response.data.data);

    }).catch((err) => {
      console.log(err);
    });
    return () => {

    };

  }, []);

  if (users.length === 0) {

    return (<div className="container">
      <h2 style={{ textAlign: "center" }}>Não há dados para exibir</h2>
    </div>)
  } else {

    return (
      <div className='container'>
        <div>
          <div className={css.flexRow}>
            {
              users.map((user, key) => (

                <div className={`card ${css.cardExtra}`} key={key}>
                  <div>
                    <img className={css.picture} src={user.avatar} title={user.first_name} alt={user.first_name} />
                  </div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {`${user.first_name} ${user.last_name}`}
                  </div>
                  <div>
                    {`${user.email}`}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
