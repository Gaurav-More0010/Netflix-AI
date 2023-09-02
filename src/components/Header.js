import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleAISearchView } from "../utils/AiSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showAiSearch = useSelector((store) => store.ai.showAiSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //this will be called unsubcribed when compo. is unmounted

    return () => unSubscribe();
  }, []);
  const handleAiSearchClick = () => {
    //Toggle Ai Search
    dispatch(toggleAISearchView());
  };

  const handleLangaugeChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div>
      <div className="justify-between flex w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex p-2">
            {showAiSearch && (
              <select
                className="m-2 p-2 bg-gray-900 text-white"
                onChange={handleLangaugeChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="rounded-lg py-2 px-4 my-2 mx-4 bg-purple-800 text-100"
              onClick={handleAiSearchClick}
            >
              {showAiSearch ? "Homepage" : "AI Search"}
            </button>
            <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
            <button onClick={handleSignOut} className="text-white font-bold">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
