import {createContext} from "react";

const songContext = createContext({
    currentSong: null,
    setCurrentSong: (currentSong) => {},
});

export default songContext;
