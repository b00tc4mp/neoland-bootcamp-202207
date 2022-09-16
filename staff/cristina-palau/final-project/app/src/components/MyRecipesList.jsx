import './recipesList.sass'
import '../index.sass'

function MyRecipesList({ userRecipes, onDeleteRecipe, onRecipeClick }) {

    return (userRecipes !== null)?
        <div className="recipes-container__myRecipes container-recipes">
            {userRecipes.map((recipe, id) => <div className="userRecipe" key={id}>
                <div className="recipeTitle" onClick={() => onRecipeClick(recipe.id)}>{recipe.title}</div>
                <button className="delete transparentButton" onClick={() => onDeleteRecipe(recipe.id)}><span className="material-symbols-outlined right">delete</span></button>
            </div>)}
        </div>
        : <div className="recipes-container__myRecipes container-recipes"> <div className="userRecipe">Todavía no tienes recetas</div> </div>
        

}

export default MyRecipesList