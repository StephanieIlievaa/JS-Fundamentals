function solve(string) {

    let str = string;
    let pattern = /([=\/])(?<place>[A-Z][A-Za-z]{2,})\1/g

    let match = pattern.exec(str);
    let sum = 0;
    let arrayPlace = [];

    while (match) {

        let country = match.groups.place;
        sum += country.length
        arrayPlace.push(country)

        match = pattern.exec(str);
    }
    console.log(`Destinations: ${arrayPlace.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');