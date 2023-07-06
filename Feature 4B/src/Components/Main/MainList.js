/* STATEFUL PARENT COMPONENT */
const MainList = ({ recipes }) => {
  return (
    <div>
      <hr />
      This page has details of all the recipes.
      <div>
        <p> Recipes by ID: </p>
        {/* Check that the recipes object exists */}
        {recipes.length > 0 && (
          <ul>
            {/* Using getter for recipes Object to display url */}
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                {" "}
                {recipe.id} | {recipe.get("Name")} | {recipe.get("url")}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default MainList;
