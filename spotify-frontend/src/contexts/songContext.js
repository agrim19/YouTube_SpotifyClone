import {createContext} from "react";

const songContext = createContext({
    currentSong: null,
    setCurrentSong: (currentSong) => {},
    soundPlayed: null,
    setSoundPlayed: () => {},
    isPaused: null,
    setIsPaused: () => {},
});

export default songContext;
