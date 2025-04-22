import React from "react";
import { ClipLoader } from "react-spinners";
import { useFetch } from "../Hooks/useFetch";

//name, image preptime, id , ingredients, instructions, prpearation time

const Recipe = () => {
  const {
    data: { recipes },
    isLoading,
  } = useFetch("https://dummyjson.com/recipes");

  //   const [recipes, setRecipes] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     const getRecipes = async () => {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       console.log(data.recipes);
  //       setIsLoading(false);
  //       setRecipes(data.recipes);
  //     };
  //     getRecipes();
  //   }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-80">
        <ClipLoader color="#1098ad" />;
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <h1>Prepare Your favourute meals</h1>
      <section className="flex flex-wrap flex-col items-center justify-center gap-5">
        {recipes.map((recipe) => {
          const {
            id,
            name,
            ingredients,
            instructions,
            prepTimeMinutes,
            image,
            mealType,
          } = recipe;
          return (
            <div
              className=" max-w-[1000px]  h-screen max-h-[1000px] w-full shadow-lg rounded-xl"
              key={id}
            >
              <h1>Name: {name}</h1>
              <div className="flex flex-col md:flex-row justify-center gap-[20px] items-center ">
                <img
                  src={image}
                  alt={name}
                  className="w-[35%] rounded-t-xl h-[70%]"
                />
                <div className="w-[40%]">
                  <p>Preparation time: {prepTimeMinutes} mins</p>
                  <div>
                    <h1 className="font-bold">Ingredients</h1>
                    <ol>
                      {ingredients.map((ing, i) => {
                        return <li key={i}>{ing}</li>;
                      })}
                    </ol>
                  </div>
                  <div className="mt-3">
                    <h1 className="font-bold">Instructions</h1>
                    <ol>
                      {instructions.map((ins, i) => {
                        return <li key={i}>{ins}</li>;
                      })}
                    </ol>
                  </div>
                  <div className="mt-3">
                    <h1>Meal Type</h1>
                    <ul>
                      {mealType.map((meal, index) => {
                        return <li key={index}>{meal}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Recipe;
