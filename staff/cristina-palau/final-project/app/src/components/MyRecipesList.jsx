import './RecipesMenu.sass'

function MyRecipesList({ recipes, onDeleteRecipe }) {
   
    return <div className="recipes-container__myRecipes container-recipes">
        {recipes && recipes.map((recipe, id) => <div className="recipe" key={id}>{recipe.title}
            <button className="delete transparentButton" onClick={() => onDeleteRecipe(recipe.id)}><span className="deleteSpan material-symbols-outlined">
                X </span></button></div>)}
    </div>
}

export default MyRecipesList