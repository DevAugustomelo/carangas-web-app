import React from "react";
import "./pagination.css";




const MAX_PAGES = 7;
const MAX_ITENS = (MAX_PAGES - 1) / 2;

const Pagination = ({ limit, total, skip, setSkip }) => {
  const currentPage = skip ? skip / limit + 1 : 1;
  const totalPages = Math.ceil(total / limit);
  const firstPage = Math.max(currentPage - MAX_ITENS, 1);

  const skipPage = (page) => setSkip(page - 1);
  
  
  return (
    <div className="pgn-container">
      <button
        onClick={() => skipPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {Array.from({ length: Math.min(MAX_PAGES, totalPages) })
        .map((_, index) => index + firstPage)
        .map((item) => (
          <button onClick={() => setSkip(item - 1) * limit}>{item}</button>
        ))}
      <button
        onClick={() => skipPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próximo
      </button>
    </div>
  );
};

export default Pagination;
