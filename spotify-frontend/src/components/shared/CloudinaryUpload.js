import {openUploadWidget} from "../../utils/CloudinaryService";
import {cloudinary_upload_preset} from "../../config";

const CloudinaryUpload = () => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dlmaf2wqn",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    console.log(result.info.secure_url);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black  rounded-full p-4 font-semibold"
            onClick={uploadImageWidget}
        >
            Upload Song
        </button>
    );
};

export default CloudinaryUpload;
