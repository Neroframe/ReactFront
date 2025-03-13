import "../styles/TextBox.css";

function TextBox({ title, paragraphs, imageURL, imageAlt }) {
  return (
    <div className="TextBox">
      {/* Text section */}
      <div className="TextBox-text">
        <p>
          <strong>{title}</strong>
        </p>
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      {/* Image section */}
      <div className="TextBox-image">
        <img src={imageURL} alt={imageAlt} />
      </div>
    </div>
  );
}

export default TextBox;
