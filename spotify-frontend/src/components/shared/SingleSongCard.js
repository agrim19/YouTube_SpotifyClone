const SingleSongCard = () => {
    return (
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm">
            <div
                className="w-12 h-12 bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
                }}
            ></div>
            <div className="flex w-full">
                <div className="text-white flex justify-center  flex-col pl-4 w-5/6">
                    <div className="cursor-pointer hover:underline">
                        Curtains
                    </div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                        Ed Sheeran
                    </div>
                </div>
                <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
                    <div>3:44</div>
                    {/* <div className="text-gray-400 text-lg flex items-center justify-center pl-3">
                        ...
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleSongCard;
