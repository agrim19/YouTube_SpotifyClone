import {useState} from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import {Icon} from "@iconify/react";

const SearchPage = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <LoggedInContainer curActiveScreen="search">
            <div className="w-full py-6">
                <div
                    className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${
                        isInputFocused ? "border border-white" : ""
                    }`}
                >
                    <Icon icon="ic:outline-search" className="text-lg" />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full bg-gray-800 focus:outline-none"
                        onFocus={() => {
                            setIsInputFocused(true);
                        }}
                        onBlur={() => {
                            setIsInputFocused(false);
                        }}
                    />
                </div>
            </div>
        </LoggedInContainer>
    );
};

export default SearchPage;
