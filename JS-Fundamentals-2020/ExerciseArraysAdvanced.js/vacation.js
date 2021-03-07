function solve(input) {
  let daysOfTrip = Number(input.shift());
  let budget = Number(input.shift());
  let groupPeople = Number(input.shift());
  let priceFuelKm = Number(input.shift());
  let foodPerDayPerPerson = Number(input.shift());
  let hotelPerNightPerPerson = Number(input.shift());
  let travelledDistanceKmDaily = Number(input.shift());

  let diff = 0;

  let allHotel;
  if (groupPeople > 10) {
    allHotel = hotelPerNightPerPerson * groupPeople * daysOfTrip * 0.75;
  } else {
    allHotel = hotelPerNightPerPerson * groupPeople * daysOfTrip;
  }

  let allFood = foodPerDayPerPerson * groupPeople * daysOfTrip;

  let currentExpenses = allFood + allHotel;

  for (let i = 1; i <= daysOfTrip; i++) {

    if (currentExpenses > budget) {

      console.log(

        `Not enough money to continue the trip. You need ${diff}$ more.`

      );

      break;

    }

    let dailyFuel = priceFuelKm * travelledDistanceKmDaily;

    currentExpenses += dailyFuel;

    if (i % 3 === 0 || i % 5 === 0) {

      currentExpenses += currentExpenses * 0.4;

    }

    if (i % 7 === 0) {

      currentExpenses -= currentExpenses / groupPeople;

    }

    travelledDistanceKmDaily = Number(input.shift());

    diff = Math.abs(budget - currentExpenses).toFixed(2);

    if (currentExpenses > budget) {

      console.log(

        `Not enough money to continue the trip. You need ${diff}$ more.`

      );

      break;

    }

  }
}
solve(["7",
  "12000",
  "5",
  "1.5",
  "10",
  "20",
  "512",
  "318",
  "202",
  "154",
  "222",
  "108",
  "123"]);