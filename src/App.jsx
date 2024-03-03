import { useState } from "react";
import upload from "/assets/icon/upload.svg";
import Preview2 from "./Components/Preview2";
import PreviewWithFilePond from "./Components/PreviewWithFilePond";

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
      <section className="flex justify-center w-full h-full mt-3">
        <div className="w-2/4 shadow-xl card bg-sky-300">
          <div className="card-body">
            <form className="">
              <div className="mb-3">
                <label className="capitalize label">gambar preview</label>

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
                    className="bg-base-100"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      onImageHandler(event);
                    }}
                  />
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Preview2 />
      <PreviewWithFilePond />
    </>
  );
}

export default App;
