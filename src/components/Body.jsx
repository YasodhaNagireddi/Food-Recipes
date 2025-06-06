import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Body = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const fetchRecipeData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    setRecipeDetails(json.recipes);
    setFilteredRecipes(json.recipes);
    setLoading(false);
    console.log(json.recipes);
  };

  const handleSearch = () => {
    const filtered = recipeDetails.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRecipes(filtered);
    console.log(filtered);
  };

  const handleReset = () => {
    setSearchInput("");
    setFilteredRecipes(recipeDetails);
  };

  return loading ? (
    <h1 className="pt-60 text-2xl text-red-600 font-semibold text-center">
      Loading...
    </h1>
  ) : (
    <div className=" pt-40 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search recipes..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <div className=" flex flex-row gap-3">
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      {/* Recipe card  */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-4">
        <RecipeCard recipeDetails={filteredRecipes} />
      </div>
    </div>
  );
};

export default Body;
