export class GrabbModel {
  constructor(name, attributes, points, wins, results) {
    this.name = name;
    this.attributes = attributes;
    this.results = results;
    this.points = this.totalPoints(results);
    this.wins = this.totalWins(results);
  }

  totalPoints = results => {
    let sum = 0;
    for (var i in results) {
      sum = sum + results[i].points;
    }
    return sum;
  };

  totalWins = results => {
    let sum = 0;
    for (var i in results) {
      if (results[i].win === true) {
        sum = sum + 1;
      }
    }
    return sum;
  };

  getTotal = () => {
    const total = this.attributes.reduce(
      (total, attribute) => total + attribute.value,
      0
    );
    return Math.round(total / this.attributes.length);
  };
}
