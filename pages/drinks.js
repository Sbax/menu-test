import React from "react";
import drinks from "../data/drinks.json";
import styles from "../styles/Drinks.module.css";

function Drink({ drinks }) {
  const categories = drinks.reduce((categories, { category, ...drink }) => {
    const found = categories.findIndex(({ name }) => name === category);
    if (found !== -1) {
      categories[found].drinks = [...categories[found].drinks, drink];
      return categories;
    }

    const newCategory = {
      name: category,
      drinks: [drink],
    };

    return [...categories, newCategory];
  }, []);

  return (
    <div>
      {categories.map(({ name, drinks }) => {
        return (
          <section key={name} className={`${styles.section} row`}>
            <h1>{name}</h1>

            {drinks.map(({ name, price }, index) => (
              <article key={`drink-${index}`} className="col-md-6">
                <div>
                  Nome: <span>{name}</span>
                </div>
                <div>
                  Prezzo: <span>{price}</span>
                </div>
              </article>
            ))}
          </section>
        );
      })}
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
