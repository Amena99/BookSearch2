import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem(props) {
  return (
   
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <h5>{props.subtitle}</h5>
            <p onChange={props.onChange}>Author: {props.authors}</p>
            <p>Description: {props.description}</p>
            <p><a rel="noreferrer noopener" target="_blank" href={props.link}>
              Learn more about this book!
            </a></p>
            <Button 
            onClick={()=>props.handleSaveSubmit(props.title, props.authors, props.description)}
            className={props.className}

            >Save this Book</Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
