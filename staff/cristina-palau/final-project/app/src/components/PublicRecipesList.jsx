import './RecipesMenu.sass'

function PublicRecipesList({ recipes, reloadPublicRecipes, onRecipeClick }) {
    return <div className="container__inspiration container-recipes">
        {recipes && recipes.map((recipe, id) => <div className="publicRecipe" key={id} onClick={() => onRecipeClick(recipe.id)}>{recipe.title}</div>)}
        <div className="retrievePublicRecipe" onClick={reloadPublicRecipes}><span className="material-symbols-outlined">add</span> </div>
    </div>
}

export default PublicRecipesList