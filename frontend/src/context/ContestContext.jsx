import { createContext, useEffect, useState } from "react";
import { fetchContests } from "../api";

export const ContestContext = createContext();

export const ContestProvider = ({ children }) => {
  const [contests, setContests] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const loadContests = async () => {
      const data = await fetchContests();
      setContests(data);
    };
    loadContests();
  }, []);

  return (
    <ContestContext.Provider value={{ contests , bookmarks, setBookmarks }}>
      {children}
    </ContestContext.Provider>
  );
};
