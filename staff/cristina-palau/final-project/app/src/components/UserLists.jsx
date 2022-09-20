import './RecipesList.sass'
import '../index.sass'
import moment from 'moment'

function UserLists({ userLists, onListClick }) {
    debugger
    return userLists === null || (userLists.length) === 0 ? <div className="recipes-container__myRecipes container-recipes"> <div className="userRecipe">Todavía no tienes recetas</div> </div>
        : <div className="recipes-container__myRecipes container-recipes">
            {userLists.map((list, id) => <div className="userRecipe" key={id}>
                <div className="recipeTitle" onClick={() => onListClick(list.id)}>{list.title} {moment(list.createAt).subtract(10, 'days').calendar()}</div>
                <button className="delete transparentButton" ><span className="material-symbols-outlined right white">delete</span></button>
            </div>)}
        </div>
}

export default UserLists