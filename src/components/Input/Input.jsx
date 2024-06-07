import "./Input.scss";

export default function Input({
  type,
  name,
  value,
  onChange,
  setFile,
  setImagePreview,
}) {
  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };
  if (type === "input") {
    return (
      <div className="input">
        <input
          className="input__input-field"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div className="input">
        <textarea
          className="input__input-field input__text-area"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  } else if (type === "file") {
    return (
      <div className="input">
        <input
          className="input__input-field input__file-input"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
      </div>
    );
  }
}
