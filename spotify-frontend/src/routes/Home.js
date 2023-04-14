import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";

const Home = () => {
    return (
        <div className="h-full w-full flex">
            {/* This first div will be the left panel */}
            <div className="h-full w-1/5 bg-black">
                {/* This div is for logo */}
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="spotify logo" width={125} />
                </div>
                <div>
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
                </div>
            </div>
            {/* This second div will be the right part(main content) */}
            <div className="h-full"></div>
        </div>
    );
};

export default Home;
