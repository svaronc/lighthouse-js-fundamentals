const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 20, "school"],
  ["Moose Mountain Community Centre", 40, "community centre"],
];

function chooseStations(stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20) {
      if (stations[i][2] == "school" || stations[i][2] == "community centre") {
        goodStations.push(stations[i][0]);
      }
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));
