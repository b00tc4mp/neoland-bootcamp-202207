import './RecipesList.sass'
import '../index.sass'

function UserRecipesList({ userRecipes, onDeleteRecipe, onRecipeClick, onViewClick }) {
    return userRecipes === null || (userRecipes.length) === 0 ? <div className="recipes-container__myRecipes container-recipes"> <div className="userRecipe">Todavía no tienes recetas</div> </div>
        : <div className="recipes-container__myRecipes container-recipes">
            {userRecipes.map((recipe, id) => <div className="userRecipe" key={id}>
                <div className="recipeTitle" onClick={() => onRecipeClick(recipe.id)}>{recipe.title} para {recipe.persons} </div>
                <button className="delete transparentButton" onClick={(event) => {
                    event.preventDefault()
                    onViewClick(recipe.id)
                }
                }><span className="material-symbols-outlined right white">visibility</span></button>
                <button className="delete transparentButton" onClick={(event) => {
                    event.preventDefault()
                    onDeleteRecipe(recipe.id)
                }
                }><span className="material-symbols-outlined right white">delete</span></button>
            </div>)}
        </div>
}

export default UserRecipesList