import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipeDetails }) => {
  const navigate = useNavigate();
  return (
    <>
      {recipeDetails.map((recipe) => (
        <div
          key={recipe.id}
          className="border border-blue-300 rounded-lg cursor-pointer"
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          <div>
            <img
              className="w-full h-48 rounded-lg object-cover"
              src={recipe.image}
              alt={recipe.name}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl text-red-600 pb-4 font-bold">
              {recipe.name}
            </h2>
            <div className="flex justify-between">
              <h3 className="text-lg text-green-600 font-semibold">
                {recipe.cuisine}
              </h3>
              <h3 className="text-lg text-green-600 font-semibold">
                ⏲️{recipe.prepTimeMinutes} mins
              </h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecipeCard;
