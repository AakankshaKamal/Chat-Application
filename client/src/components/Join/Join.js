import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return (

      loading ? (
        <div className='splash'>
          <div className="middleclock">
            <div className="heading2">
              Loading......
            </div>
         <article class="clock">
  <div class="hours-container">
    <div class="hours"></div>
  </div>
  <div class="minutes-container">
    <div class="minutes"></div>
  </div>
  <div class="seconds-container">
    <div class="seconds"></div>
  </div>
</article>

</div>

         
        </div>
      ) : (
        


    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1>Sign IN</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'btn btn-primary btn-block btn-large'} type="submit">Let me in</button>
        </Link>
      </div>
    </div>
      )
  );
}