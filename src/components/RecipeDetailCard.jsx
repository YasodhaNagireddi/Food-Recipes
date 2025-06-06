import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetailCard = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipeDetails(data));
  }, [id]);

  if (!recipeDetails) {
    return (
      <h1 className="pt-60 text-2xl text-red-600 font-semibold text-center">
        Loading Recipe...
      </h1>
    );
  }

  const {
    name,
    image,
    ingredients,
    instructions,
    caloriesPerServing,
    cookTimeMinutes,
    cuisine,
    prepTimeMinutes,
    rating,
    reviewCount,
    servings,
    tags,
  } = recipeDetails;

  return (
    <div className="mt-28 max-w-5xl mx-auto bg-white rounded-xl shadow-md px-8 py-6 mb-4">
      <button
        onClick={() => navigate(-1)}
        className="text-green-500 text-sm  font-semibold hover:underline mb-4"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-pink-600 text-center mb-2">
        {name}
      </h1>
      <p className="text-center text-black text-sm mb-6">
        {cuisine} | <strong>Prep:</strong> {prepTimeMinutes} mins |{" "}
        <strong>Cook:</strong> {cookTimeMinutes} mins |{" "}
        <strong>Servings:</strong> {servings}
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col justify-center items-start space-y-2 text-black text-sm">
          <p>
            <span className="font-semibold">Calories per Serving:</span>{" "}
            {caloriesPerServing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating} ⭐ (
            {reviewCount} reviews)
          </p>
          <p>
            <span className="font-semibold">Tags:</span> {tags.join(", ")}
          </p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {/* Ingredients */}
        <div>
          <h2 className="text-xl font-bold text-pink-600 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside text-black space-y-1 text-sm">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-xl font-bold text-pink-600 mb-4">Instructions</h2>
          <ol className="list-decimal list-inside text-black space-y-2 text-sm">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailCard;
