function  solve(input = []) {
    let numCars = Number(input.shift());
    let cars = input.splice(0, numCars);
    let objCars = {};
  
    for (const car of cars) {
      let [carModel, mileage, fuel] = car.split('|');
      mileage = Number(mileage);
      fuel = Number(fuel);
  
      if (!objCars.hasOwnProperty(carModel)) {
        objCars[carModel] = {mileage: mileage, fuel: fuel};
      }
    }
  
    let betterInput = input.splice(0, input.indexOf('Stop'));
  
    for (const line of betterInput) {
      let [command, carName, value, value2] = line.split(' : ');
      value = Number(value);
      value2 = Number(value2);
  
      switch (command) {
        case 'Drive':
          let distance = value;
          let fuel = value2;
  
          if (fuel > objCars[carName].fuel) {
            console.log('Not enough fuel to make that ride');
          } else if (objCars[carName].fuel > fuel) {
            objCars[carName].fuel -= fuel;
            objCars[carName].mileage += distance;
            console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
  
            if (objCars[carName].mileage >= 100000) {
              console.log(`Time to sell the ${carName}!`);
              delete objCars[carName];
            }
          }
          break;
  
        case 'Refuel':
          let fuelForRefill = value;
  
          if (objCars[carName].fuel + fuelForRefill >= 75) {
            console.log(`${carName} refueled with ${75 - objCars[carName].fuel} liters`);
            objCars[carName].fuel = 75;
          } else {
            objCars[carName].fuel += fuelForRefill;
            console.log(`${carName} refueled with ${fuelForRefill} liters`);
          }
          break;
  
        case 'Revert':
          let KMs = value;
  
          if (objCars[carName].mileage - KMs <= 10000) {
            objCars[carName].mileage = 10000;
          } else {
            objCars[carName].mileage -= KMs;
            console.log(`${carName} mileage decreased by ${KMs} kilometers`);
          }
          break;
      }
    }
  
    function sortByMileage(a, b) {
      a = a[1].mileage;
      b = b[1].mileage;
  
      let comp = 0;
  
      if (b > a) {
        comp = 1;
      } else if (b < a) {
        comp = -1;
      }
  
      return comp;
    }
  
    function sortAlphabetically(a, b) {
      a = a[0];
      b = b[0];
  
      return a.localeCompare(b);
    }
  
    let arr = Object.entries(objCars).sort((a, b) => sortByMileage(a, b) || sortAlphabetically(a, b));
  
    for (let i = 0; i < arr.length; i++) {
      console.log(`${arr[i][0]} -> Mileage: ${arr[i][1].mileage} kms, Fuel in the tank: ${arr[i][1].fuel} lt.`);
    }
  }
  solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);