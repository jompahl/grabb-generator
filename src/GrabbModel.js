export class GrabbModel {
  constructor(name, attributes, points, wins) {
    this.name = name;
    this.attributes = attributes;
    this.points = points;
    this.wins = wins;
  }

  getTotal = () => {
    const total = this.attributes.reduce(
      (total, attribute) => total + attribute.value,
      0
    );
    return Math.round(total / this.attributes.length);
  };
}
