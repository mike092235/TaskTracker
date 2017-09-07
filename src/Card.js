// Card component is what the user will interact with most
// Each card has a title, decription and a checklist

import React, { Component } from 'react';
import Checklist from './CheckList';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card_title">{this.props.title}</div>
        <div className="card_details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
} 

export default Card;