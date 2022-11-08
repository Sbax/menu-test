import React from "react";
import drinks from "../data/drinks.json";

function Drink({ drinks }) {
  return (
    <div>
      {drinks.map(({ name, price, category }, index) => (
        <article key={`drink-${index}`}>
          <div>
            Nome: <span>{name}</span>
          </div>
          <div>
            Prezzo: <span>{price}</span>
          </div>
          {category && (
            <div>
              Categoria: <span>{category}</span>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      drinks,
    }, // will be passed to the page component as props
  };
}

export default Drink;
