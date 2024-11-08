import React, { createContext, useContext, useState, useEffect } from 'react';

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [mood, setMood] = useState(() => {
    return localStorage.getItem('mood') || null; // Retrieve mood from local storage
  });
  const [length, setLength] = useState(() => {
    return parseInt(localStorage.getItem('length'), 10) || 20; // Retrieve length from local storage, default to 20
  });
  const [playlistId, setPlaylistId] = useState(null);

  const [user, setUser] = useState(null); // User state

  useEffect(() => {
    localStorage.setItem('mood', mood); // Store mood in local storage
  }, [mood]);

  useEffect(() => {
    localStorage.setItem('length', length); // Store length in local storage
  }, [length]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setUser(userData); // Store user data in context
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data on component mount
  }, []);

  return (
    <PlaylistContext.Provider
      value={{
        mood,
        setMood,
        length,
        setLength,
        user,
        playlistId,
        setPlaylistId,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => {
  return useContext(PlaylistContext);
};
