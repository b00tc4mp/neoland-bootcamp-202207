import './RecipesList.sass'
import '../index.sass'
import moment from 'moment'

function UserLists({ userLists, onListClick, onDeleteList, onViewClick }) {

    return userLists === null || (userLists.length) === 0 ? <div className="recipes-container__myRecipes container-recipes"> <div className="userRecipe">Todavía no tienes recetas</div> </div>
        : <div className="container__myRecipes container-recipes">
            {userLists.map((list, id) => <div className="userRecipe" key={id}>
                <div className="recipeTitle">{list.title} ({moment(list.createAt).format('ll')})</div>
                <div className="buttonContainer">
                    <button className="visibility transparentButton" onClick={(event) => {
                        event.preventDefault()
                        onViewClick(list.id)
                    }}><span className="material-symbols-outlined right white">visibility</span>
                    </button>
                    <button className="edit transparentButton" onClick={(event) => {
                        event.preventDefault()
                        onListClick(list.id)
                    }}><span className="material-symbols-outlined right white">edit_note</span></button>
                    <button className="delete transparentButton" onClick={(event) => {
                        event.preventDefault()
                        onDeleteList(list.id)
                    }
                    } ><span className="material-symbols-outlined right white">delete</span></button>
                </div>
            </div>)
            }

        </div>
}

export default UserLists