import React from "react";
import DropZone from "react-dropzone";
import ImagePreview from "./imagePreview";
import Placeholder from "./placeholder";
import ShowError from "./showError";

const DropZoneField = ({
  handleOnDrop,
  input,
  imagefile,
  label,
  meta: { error, touched }
}) => (
  <div className="preview-container">
    <DropZone
      accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={handleOnDrop}
      onChange={file => input.onChange(file)}
    >
      {imagefile && imagefile.length > 0 ? (
        <ImagePreview imagefile={imagefile} />
      ) : (
        <Placeholder error={error} touched={touched} />
      )}
    </DropZone>
    {touched && error && <ShowError error={error} />}
  </div>
);

export default DropZoneField;
