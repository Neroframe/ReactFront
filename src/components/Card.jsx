function Card({ title, link }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <a href={link}>Подробнее</a>
      </div>
    );
  }
  
  export default Card;
  