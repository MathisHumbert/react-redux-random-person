import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/actions';

const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer);
  console.log(data);

  React.useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      <div className="block bcg-black">random user starter</div>
      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="photo" />
          <p className="user-title">My hoverName is</p>
          <p className="user-value">hoverValue</p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <FaUser />
            </button>
            <button className="icon" data-label="email">
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age">
              <FaCalendarTimes />
            </button>
            <button className="icon" data-label="street">
              <FaMap />
            </button>
            <button className="icon" data-label="phone">
              <FaPhone />
            </button>
            <button className="icon" data-label="password">
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button">
            random user
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
