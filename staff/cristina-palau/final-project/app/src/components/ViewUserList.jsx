import Loggito from '../utils/loggito'
import './NewForm.sass'
import './RecipesView.sass'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveList } from '../logic'
import * as html2pdf from "html2pdf.js";
import { toast } from 'react-toastify'

function ViewUserList({ onBackClick, recipe: list }) {

    const logger = new Loggito('Recipes')

    logger.info('render')

    const { id } = useParams()

    const [listState, setListState] = useState(list)

    useEffect(() => {
        if (!listState) {
            retrieveList(sessionStorage.token, id, (error, listFromLogic) => {
                if (error) {
                   
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})
            
                    logger.warn(error.message)
                    
                }
                setListState(listFromLogic)
            })
        }
    }, [])

    function handleDownloadPDF() {
        let elementToPrint = document.getElementById('PDFview')

        let opt = {
            margin: 1,
            image: { type: 'jpeg', quality: 0.98 },
            filename: 'myList.pdf',
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }

        html2pdf().set(opt).from(elementToPrint).save()
    }

    return <>
        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={onBackClick}>
            <span className="material-symbols-outlined">keyboard_backspace</span></button>
            <button className='transparentButton homeButton' onClick={handleDownloadPDF}>
                <span className="material-symbols-outlined">picture_as_pdf</span></button>
        </div>
        <div className="viewRecipeContainer" id="PDFview">
            <div className="recipeHeaderContainer">
                <h2 className="publicRecipeTitle" name="title" placeholder="Título" id="title">{listState ? listState.title : ''}</h2>
            </div>
            <h3 className="publicIngredientsTitle">Ingredientes</h3>

            <div className="ingredientsContainer"> {listState && listState.ingredients && listState.ingredients.map((ingredient, index) => {
                if (ingredient.unit === "unit") { (ingredient.quantity === 1) ? ingredient.unit = "unidad" : ingredient.unit = "unidades" }
                return <div className="ingredientsRowContainer" key={ingredient.id}>
                    <div className="publicIngredient quantity" name={`quantityt${index}`}> {ingredient.quantity} </div>
                    <div className="publicIngredient unit" name={`unit${index}`}>{ingredient.unit} de </div>
                    <div className="publicIngredient name" name={`ingredient${index}`}>{ingredient.ingredient.name}</div>
                </div>
            })
            }
            </div>
        </div>
    </>

}

export default ViewUserList