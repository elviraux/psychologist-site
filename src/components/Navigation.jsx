import React from "react";
import { Link } from "react-router-dom";
import "./navigation.sass";

const Navigation = () => (
  <div className="navigation">
    <div className="navigation-item">
      <Link to="/">Обо мне</Link>
    </div>
    <div className="navigation-item">
      <Link to="/trainings">Тренинги</Link>
    </div>
    <div className="navigation-item">
      <Link to="/contact">Связаться</Link>
    </div>
  </div>
);

export default Navigation;
