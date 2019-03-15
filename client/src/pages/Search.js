import React, { Component } from "react";
import Jumbotron from "../components/JumbotronSearch";
import Nav from "../components/NavSearch";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";

class Search extends Component {
  
  constructor(props){
    
    super(props);
    this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
    this.state = {
    recipes: [],
    recipeSearch: "",

  };
  }
  



  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleSaveInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    console.log("Inside handleFormSubmit");
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  }; 

  handleSaveSubmit = ( title, author, synopsis) => {
    
    const newSave = {
      title: title,
      author: author,
      synopsis: synopsis
    }
    console.log(newSave);
    // event.preventDefault();
    // if (this.state.title && this.state.author) {
      API.saveBook({
        title: newSave.title,
        author: newSave.author,
        synopsis: newSave.synopsis
      })
        .then(res => console.log("saved!"))
        .catch(err => console.log(err));
    // }
  };

  printAPIReturn = ()=> {
    console.log(this.state.recipes);
    console.log(this.state.recipeSearch);
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                    {this.state.recipes.map(book => {
                    return (
                      <RecipeListItem
                      handleSaveSubmit={this.handleSaveSubmit}
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors?book.volumeInfo.authors.join(", "):""}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"}
                      type="success"
                      className="input-lg"
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
