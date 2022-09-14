import './RecipesMenu.sass'

function MyRecipesList({ recipes, onDeleteRecipe, onRecipeClick }) {
   
    return <div className="recipes-container__myRecipes container-recipes">
        {recipes && recipes.map((recipe, id) => <div className="userRecipe" key={id} onClick={() => onRecipeClick(recipe.id)}>{recipe.title}
            <button className="delete transparentButton" onClick={() => onDeleteRecipe(recipe.id)}><span className="deleteSpan material-symbols-outlined">
                X </span></button></div>)}
    </div>
}

export default MyRecipesList