import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new Recipes with Name
export const createRecipes = (Name) => {
  console.log("Creating: ", Name);
  const Recipes = Parse.Object.extend("Recipes");
  const recipes = new Recipes();
  // using setter to UPDATE the object
  recipes.set("name", Name);
  return recipes.save().then((result) => {
    // returns new Recipes object
    return result;
  });
};

// READ operation - get Recipes by ID
export const getById = (id) => {
  const Recipes = Parse.Object.extend("Recipes");
  const query = new Parse.Query(Recipes);
  return query.get(id).then((result) => {
    // return Recipes object with objectId: id
    return result;
  });
};

// READ operation - get all Recipess in Parse class Recipes
export const getAllRecipes = () => {
  const Recipes = Parse.Object.extend("Recipes");
  const query = new Parse.Query(Recipes);
  return query.find().then((results) => {
    // returns array of Recipes objects
    return results;
  });
};

// DELETE operation - remove Recipes by ID
export const removeRecipes = (id) => {
  const Recipes = Parse.Object.extend("Recipes");
  const query = new Parse.Query(Recipes);
  return query.get(id).then((recipes) => {
    recipes.destroy();
  });
};

// export const getArtistById = (id) => {

// }

// export const getAlbumByArtist = (artist) => {
//   const Album = Parse.Object.extend("Album");
//   const query = new Parse.Query(Album);
//   query.equalTo("artist", artist); // not artist id, it's the whole artist parse object
//   return query.find().then(results => results);
//   // [{ParseObject}]
// }
