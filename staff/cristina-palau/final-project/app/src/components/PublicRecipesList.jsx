import './RecipesMenu.sass'

function PublicRecipesList({ recipes, reloadPublicRecipes }) {

    return <div className="recipes-container__inspiration container-recipes">
        {recipes && recipes.map((recipe, id)=> <div className="recipe" key={id}>{recipe.title}</div>)}
    <div className="retrievePublicRecipe" onClick={reloadPublicRecipes}>añadir más</div>
</div>
}

export default PublicRecipesList