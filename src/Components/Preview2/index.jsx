export default function Preview2() {
  const showPreview = (event) => {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      const preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  };

  return (
    <section className="flex justify-center w-full h-full mt-3">
      <div className="card w-2/4 bg-sky-300 shadow-xl">
        <div className="card-body">
          <form className="">
            <div className="mb-3">
              <label className="label capitalize">gambar preview</label>

              <span className="flex items-center justify-between">
                <div className="preview">
                  <img id="file-ip-1-preview" />
                </div>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    showPreview(event);
                  }}
                />
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
