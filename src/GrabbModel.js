export class GrabbModel {
  constructor(name, attributes, points, wins, results) {
    this.name = name;
    this.attributes = attributes;
    this.points = points;
    this.wins = wins;
    this.results = results;
  }

  getTotal = () => {
    const total = this.attributes.reduce(
      (total, attribute) => total + attribute.value,
      0
    );
    return Math.round(total / this.attributes.length);
  };
}
