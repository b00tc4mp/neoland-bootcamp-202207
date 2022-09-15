import './RecipesMenu.sass'

function MyRecipesList({ recipes, onDeleteRecipe, onRecipeClick }) {

    return <div className="recipes-container__myRecipes container-recipes">
        {recipes && recipes.map((recipe, id) => <div className="userRecipe" key={id}>
            <div className="recipeTitle"  onClick={() => onRecipeClick(recipe.id)}>{recipe.title}</div>
            <button className="delete transparentButton" onClick={() => onDeleteRecipe(recipe.id)}>X</button>
        </div>)}
    </div>
}

export default MyRecipesList