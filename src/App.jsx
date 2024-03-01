import { useState } from "react";
import upload from "/assets/icon/upload.svg";

function App() {
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState(upload);

  const onImageHandler = (event) => {
    const img = event.target.files?.[0];
    setImagePreview(URL.createObjectURL(img));
    return setImage(img);
  };

  console.log("upload image", image);

  return (
    <>
      <form>
        <div className="mb-3 form-control">
          <label className="label">gambar</label>

          <span className="flex items-center justify-between">
            <img
              src={imagePreview}
              width={90}
              height={90}
              alt={"icon upload"}
              className={"mb-2 rounded-lg"}
            />
            <input
              type="file"
              className="form-control"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                onImageHandler(event);
              }}
            />
          </span>
        </div>
      </form>
    </>
  );
}

export default App;
