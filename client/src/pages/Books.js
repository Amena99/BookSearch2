import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { SavedList, SavedListItem } from "../components/SavedList";



class Books extends Component {
  
  constructor(props){
    
    super(props);
    this.deleteBook = this.deleteBook.bind(this);
    this.state = {
      books: [],
      title: "",
      author: "",
      synopsis: ""
    };
  }
  
  
  

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .then(res => console.log("deleted!"))
      .catch(err => console.log(err));
      
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
    
      
        <Row>
          <Col size="md-12 sm-12">
            <div className="container-full-bg">
            <Jumbotron/>
            </div>
            
          {/* <Container fluid>     */}
            {!this.state.books.length ? (
                <div>
                  <h1 className="text-center">No Books Saved Yet!</h1>
                  <h3 className="text-center">Click 'Search for Books' to find some books to save!</h3> 
                </div>
              ) : (
                <SavedList>
                    {this.state.books.map(book => {
                    return (
                      <SavedListItem
                      key={book._id}
                      id={book._id}
                      title={book.title}
                      link={book.link}
                      authors={book.author ? book.author:""}
                      description={book.synopsis}
                      image={book.image ? book.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"}
                      type="success"
                      className="input-lg"
                      deleteBook = {this.deleteBook}
                      />
                    ); 
                    })}
                </SavedList>
              )}
           {/* </Container>   */}
       
       </Col>
      </Row>
  
    );
  }
}

export default Books;
