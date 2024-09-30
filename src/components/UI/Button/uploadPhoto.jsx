import React, { useState } from "react";
import classes from './uploadPhoto.module.css';

const UploadPhotoButton = ({ onPhotoChange }) => {
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onPhotoChange(file);

            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleButtonClick = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <div className={classes.container}>
            <div className={classes.photo_container}>
                <button
                    className={classes.photo_button}
                    onClick={handleButtonClick}
                >
                    Выбрать фото
                </button>
                <input
                    className={classes.photo_input}
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>

            {previewUrl && (
                <div>
                    <img
                        src={previewUrl}
                        alt="Превью изображения"
                        className={classes.preview_image}
                    />
                </div>
            )}
        </div>
    );
};

export default UploadPhotoButton;
