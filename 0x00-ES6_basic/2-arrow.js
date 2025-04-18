export default function getNeighborhoodlist() {
  this.sanFransciscoNeighborhoods = ['SOMA', 'Union Square'];
  
  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFransciscoNeighborhoods.push(newNeighborhood);
    return self.sanFransciscoNeighborhoods;
  }
}
