import React from 'react';
import '../../index.css';
import Card from 'react-bootstrap/Card';

class MyStoreItem extends React.Component {
  render(){
  return (
        <div>
            <Card>
  <Card.Header >{this.props.store.Title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.store.Poster}></img>
    <footer>
        {this.props.store.Price}
    </footer>
    </blockquote>
  </Card.Body>
</Card>

    </div>
  );
}
}

export default MyStoreItem;