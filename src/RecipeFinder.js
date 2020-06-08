import React, { useState, useEffect} from 'react';
import Recipe from "./Recipe"
import './App.css';



const RecipeFinder = () => {

  const APP_ID = "75d80ac9" 
  const APP_KEY = "d5ccd8cbae2ef6f5d08e6c47688ed3b1"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const request = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const recipesComponents = recipes.map(recipe => <Recipe 
                      key={recipe.recipe.label} 
                      title={recipe.recipe.label} 
                      ingredients={recipe.recipe.ingredientLines} 
                      image={recipe.recipe.image}
                      time={recipe.recipe.totalTime}
                      diet={recipe.recipe.dietLabels} />)

  // Watching changes on query state
  useEffect(() => {
    fetchRecipes()
  }, [query])


  //fetch recipes from API
  const fetchRecipes = () => {
    fetch(request)
    .then(response => response.json())
    .then(response => {
    setRecipes(response.hits)
    })
  
}
  //Change search state
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }


  //On form submit changes query state with search state value, and after query state is changed, useEffect() method trigers fetchRecipes()
  const getSearch = (event) => {
    event.preventDefault()
    setQuery(search)
  }


  return(
    <div className="App">
        <nav>
                <form className="searchForm" onSubmit={getSearch}>
                    <input className="searchBar" type="search" name="search" placeholder="search recipe" onChange={handleSearch}/>
                    <button type="submit" className="searchButton">Search</button>
                </form>
        </nav>
        <div className="recipes">
            {recipesComponents}
        </div>
     </div>
    
  )
}


export default RecipeFinder;
