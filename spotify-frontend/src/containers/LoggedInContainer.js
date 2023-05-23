import {useState} from "react";
import {Howl, Howler} from "howler";
import {Icon} from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

const LoggedInContainer = ({children}) => {
    const [soundPlayed, setSoundPlayed] = useState(null);
    const [isPaused, setIsPaused] = useState(true);

    const playSound = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
    };

    const pauseSound = () => {
        soundPlayed.pause();
    };

    const togglePlayPause = () => {
        if (isPaused) {
            playSound(
                "https://res.cloudinary.com/dlmaf2wqn/video/upload/v1683832181/mdzsnfpdaupknork7vfn.mp3"
            );
            setIsPaused(false);
        } else {
            pauseSound();
            setIsPaused(true);
        }
    };

    return (
        <div className="h-full w-full bg-app-black">
            <div className="h-9/10 w-full flex">
                {/* This first div will be the left panel */}
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        {/* This div is for logo */}
                        <div className="logoDiv p-6">
                            <img
                                src={spotify_logo}
                                alt="spotify logo"
                                width={125}
                            />
                        </div>
                        <div className="py-5">
                            <IconText
                                iconName={"material-symbols:home"}
                                displayText={"Home"}
                                active
                            />
                            <IconText
                                iconName={"material-symbols:search-rounded"}
                                displayText={"Search"}
                            />
                            <IconText
                                iconName={"icomoon-free:books"}
                                displayText={"Library"}
                            />
                            <IconText
                                iconName={
                                    "material-symbols:library-music-sharp"
                                }
                                displayText={"My Music"}
                            />
                        </div>
                        <div className="pt-5">
                            <IconText
                                iconName={"material-symbols:add-box"}
                                displayText={"Create Playlist"}
                            />
                            <IconText
                                iconName={"mdi:cards-heart"}
                                displayText={"Liked Songs"}
                            />
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                            <Icon icon="carbon:earth-europe-africa" />
                            <div className="ml-2 text-sm font-semibold">
                                English
                            </div>
                        </div>
                    </div>
                </div>
                {/* This second div will be the right part(main content) */}
                <div className="h-full w-4/5 bg-app-black overflow-auto">
                    <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                        <div className="w-1/2 flex h-full">
                            <div className="w-2/3 flex justify-around items-center">
                                <TextWithHover displayText={"Premium"} />
                                <TextWithHover displayText={"Support"} />
                                <TextWithHover displayText={"Download"} />
                                <div className="h-1/2 border-r border-white"></div>
                            </div>
                            <div className="w-1/3 flex justify-around h-full items-center">
                                <TextWithHover displayText={"Upload Song"} />
                                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    AC
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content p-8 pt-0 overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
            {/* This div is the current playing song */}
            <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
                <div className="w-1/4 flex items-center">
                    <img
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="currentSongThumbail"
                        className="h-14 w-14 rounded"
                    />
                    <div className="pl-4">
                        <div className="text-sm hover:underline cursor-pointer">
                            Curtains
                        </div>
                        <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                            Ed Sheeran
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center h-full flex-col items-center">
                    <div className="flex w-1/3 justify-between items-center">
                        {/* controls for the playing song go here */}
                        <Icon
                            icon="ph:shuffle-fill"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 hover:text-white"
                        />
                        <Icon
                            icon="mdi:skip-previous-outline"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 hover:text-white"
                        />
                        <Icon
                            icon={
                                isPaused
                                    ? "ic:baseline-play-circle"
                                    : "ic:baseline-pause-circle"
                            }
                            fontSize={50}
                            className="cursor-pointer text-gray-500 hover:text-white"
                            onClick={togglePlayPause}
                        />
                        <Icon
                            icon="mdi:skip-next-outline"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 hover:text-white"
                        />
                        <Icon
                            icon="ic:twotone-repeat"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 hover:text-white"
                        />
                    </div>
                    {/* <div>Progress Bar Here</div> */}
                </div>
                <div className="w-1/4 flex justify-end">hello</div>
            </div>
        </div>
    );
};

export default LoggedInContainer;
