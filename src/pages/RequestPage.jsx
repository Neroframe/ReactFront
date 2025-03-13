import React, { useState } from "react";
import "../styles/RequestPage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const RequestPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Заявка отправлена!");
  };

  return (
    <div className="request-container">
      <div className="request-box">
        <h2>Оставить заявку</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="problem"
            placeholder="Опишите проблему"
            value={formData.problem}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default RequestPage;
