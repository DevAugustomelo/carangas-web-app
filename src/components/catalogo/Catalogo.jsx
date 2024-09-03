import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { Link, useParams } from "react-router-dom";
import "./catalogo.css";
import { getPosts } from "../../services/utils/crudFunctions";

function Catalogo() {

  const {id} = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(posts, setPosts);
  }, []);

  return (
    <div className="cat-container">
      <div className="cat-content">
        {posts.length > 0 ? (
          posts.slice(0, 8).map((item, index) => {
            // const car = JSON.parse(JSON.stringify(item));
            return (
              <Card
                key={index}
                // item={car}
                id={item._id}
                make={item.make}
                model={item.model}
                year={item.year}
                color={item.color}
              />
            );
          })
        ) : (
          <div>
            <p>Carregando Catálogo.... </p>
            <img src="assets/images/wheel-spin-11932_128.gif" alt="car-gif" />
          </div>
        )}
      </div>
      <Link to="/catalogo">
        <button className="mt-10 hover:bg-neutral-800 active:bg-neutral-900 focus:ring focus:ring-yellow-500">
          Catálogo completo
        </button>
      </Link>
    </div>
  );
}

export default Catalogo;
