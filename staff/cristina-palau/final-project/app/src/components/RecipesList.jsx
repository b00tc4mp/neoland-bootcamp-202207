import './RecipesList.sass'
import '../index.sass'

function RecipesList({ userRecipes, onAddClick }) {
    return <div className="recipes-container__listRecipes container-recipes">
        {userRecipes && userRecipes.map((recipe, id) => <div className="listRecipe" key={id}>
            <div className="recipeTitle">{recipe.title}</div>
            <button className="add transparentButton" onClick={(event) => {
                event.preventDefault()
                onAddClick(recipe.id)}}><span className="material-symbols-outlined right white">add</span></button>
        </div>)}
    </div>
}

export default RecipesList