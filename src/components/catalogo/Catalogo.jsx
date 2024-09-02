import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import "./catalogo.css";
import { getPosts } from "../../services/utils/crudFunctions";

function Catalogo() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(posts, setPosts);
  }, []);


  return (
    <div className="cat-container">
      <div className="cat-content">
        {posts.length > 0 ? (
          posts
            .slice(0, 8)
            .map((item, index) => (
              <Card
                key={index}
                item={item}
                make={item.make}
                model={item.model}
                year={item.year}
                color={item.color}
              />
            ))
        ) : (
          <div>
          <p>Carregando Catálogo.... </p>
          <img src="assets/images/wheel-spin-11932_128.gif" alt="car-gif" />
          </div>
        )}

      </div>
        <button>
          <Link to="/catalogo">Catálogo completo</Link>
        </button>
    </div>
  );
}

export default Catalogo;
