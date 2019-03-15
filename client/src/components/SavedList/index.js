import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";
// import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function SavedList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function SavedListItem(props) {
  return (
   
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            
            <p onChange={props.onChange}>Author(s): {props.authors}</p>
            <p> {props.description}</p>
            <p><a rel="noreferrer noopener" target="_blank" href={props.link}>
              Learn more about this book!
            </a></p>
            <DeleteBtn type="danger" onClick={() => props.deleteBook(props.id)}>Remove</DeleteBtn>
           
          </Col>
        </Row>
      </Container>
    </li>
  );
}
