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
import { getUser, setValue } from './redux/actions';

const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';
function App() {
  const dispatch = useDispatch();
  const { user, hoverName } = useSelector((state) => state.reducer);
  console.log(user);

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  // need to get the values from the user obj
  // need to dispatch get user

  return (
    <>
      <div className="block bcg-black">random user starter</div>
      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="photo" />
          <p className="user-title">{hoverName}</p>
          <p className="user-value">user[hoverName]</p>
          <div className="values-list">
            <button
              className="icon"
              onMouseEnter={() => dispatch(setValue('name'))}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              onMouseEnter={() => dispatch(setValue('email'))}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              onMouseEnter={() => dispatch(setValue('age'))}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              onMouseEnter={() => dispatch(setValue('street'))}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              onMouseEnter={() => dispatch(setValue('phone'))}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              onMouseEnter={() => dispatch(setValue('password'))}
            >
              <FaLock />
            </button>
          </div>
          <button
            className="btn"
            type="button"
            onClick={() => dispatch(getUser())}
          >
            random user
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
