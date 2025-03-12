function GridSection({ title, text, link, image, reverse }) {
    return (
      <section className={`grid ${reverse ? "reverse" : ""}`}>
        {/* Conditionally Render Image First if Reverse */}
        {reverse && <img src={image} alt="Grid Image" className="image" />}
  
        <div className="grid-content">
          <a href={link} className="box-link">
            <h3 data-maxlength="144">{title}</h3>
          </a>
          <p className="box-text">{text}</p>
          <div className="box-bottom">
            <a href={link}>Read more</a>
          </div>
        </div>
  
        {/* Render Image Last if Not Reversed */}
        {!reverse && <img src={image} alt="Grid Image" className="image" />}
      </section>
    );
  }
  
  export default GridSection;
  