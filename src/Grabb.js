import React, { Component } from "react";

export class Grabb extends Component {
  render() {
    const name = this.props.name
    const attributes = this.props.attributes
    const total = this.props.total

    const attributeDivs = attributes.map(attribute => (
      <div className="attribute">
        <div className="value">{attribute.value}</div>
        <div className="shortName" title={attribute.name}>
          {attribute.shortName}
        </div>
      </div>
    ));

    return (
      <div className="card">
        <div className="total">{total}</div>
        <div className="TotalText">TOT</div>
        <div className="Name">{name}</div>
        <div className="score">{attributeDivs}</div>
        <div className="DownText">GK19</div>
      </div>
    );
  }
}
