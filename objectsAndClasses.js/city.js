function solve(nameArg, areaArg, populationArg, countryArg, postCodeArg) {

    let cityObject = { name: nameArg, area: areaArg, population: populationArg, country: countryArg, postCode: postCodeArg }

    for (let key in cityObject) {
        console.log(`${key} -> ${cityObject[key]}`);
    }
}
solve('Sofia', '492', '1238438', 'Bulgaria', '1000');