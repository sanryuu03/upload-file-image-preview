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
      <section className="flex justify-center w-full h-full mt-3">
        <div className="card w-2/4 bg-sky-300 shadow-xl">
          <div className="card-body">
            <form className="">
              <div className="mb-3">
                <label className="label capitalize">gambar preview</label>

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
    </>
  );
}

export default App;
