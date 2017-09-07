// The List component displays the list's name and
// renders all the card components within it
// by mapping ".map()" the cards array received via 
// props as well as pass individual information(ex: title)
// down to the card component, also as props

import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  render() {
    var cards = this.props.cards.map((card) => {
      return <Card id={card.id}
                   title={card.title}
                   description={card.description}
                   tasks={card.tasks} />
    });

    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}

export default List;