


function CreateArticle(){
  return ( 
  
  <>
  <div className="grid-create">
    <div className="item-create">
      <div className="container-form-2">  

      <form className="form-create">
      <div className="form__field">
        <label htmlFor="name">Article name :</label>
        <input className="input" type="text" name="name" placeholder="articlename" id="articlename"/>
      </div>

      <div className="form__field">
        <label htmlFor="name">Category :</label>
        <input className="input" type="text" name="category" placeholder="category" id="category"/>
      </div>

      <div className="form__field">
        <label htmlFor="name">Quantity :</label>
        <input className="input" type="number" name="quantity" placeholder="quantity" id="quantity"/>
      </div>

      <div className="form__field">
        <label htmlFor="name">Description :</label>
        <input className="input" type="text" name="description" placeholder="description" id="description"/>
      </div>

     </form>
      </div>   
    </div>
  </div>

  <button className="button-create">Save</button>
  </>
  )  
}

export default CreateArticle