import React from 'react';
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

function App() {
  const dispatch = useDispatch();
  const { user, hoverName } = useSelector((state) => state.reducer);

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  let tempUser = {};

  if (user.name) {
    const {
      name: { first, last },
      location: { street },
      dob: { age },
      phone,
      login: { password },
      email,
      picture: { large },
    } = user;
    tempUser = {
      name: `${first} ${last}`,
      street: `${street.number} ${street.name}`,
      email,
      age,
      phone,
      password,
      img: large,
    };
  }

  return (
    <>
      <div className="block bcg-black">random user starter</div>
      <div className="block">
        <div className="container">
          <img src={tempUser.img} alt="person" />
          <p className="user-title">{hoverName}</p>
          <p className="user-value">{tempUser[hoverName]}</p>
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
