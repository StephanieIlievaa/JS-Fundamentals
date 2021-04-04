function solve(input) {
    //descending order  by likes +comments
    let obj = {};
    let inputSec = input.slice(0, input.indexOf('Log out'));

    for (let line of inputSec) {
        let [command, username, count] = line.split(': ');

        switch (command) {
            case 'New follower':
                if (!obj.hasOwnProperty(username)) {
                    obj[username] = { 'likes': 0, 'comments': 0 };
                }
                break;

            case 'Like':
                if (!obj.hasOwnProperty(username)) {
                    obj[username] = { likes: Number(count), comments: 0 }
                } else {
                    obj[username].likes += Number(count);
                }
                break;

            case 'Comment':
                if (!obj.hasOwnProperty(username)) {
                    obj[username] = { likes: 0, comments: 1 }
                } else {
                    obj[username].comments += 1;
                }
                break;

            case 'Blocked':
                if (obj.hasOwnProperty(username)) {
                    delete obj[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
    }
    let array = Object.entries(obj);
    array.forEach(name => {
        name[1] = name[1].likes + name[1].comments;
    })

    let sorted = array.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    console.log(`${sorted.length} followers`);
    for (let line of sorted) {
        console.log(`${line[0]}: ${line[1]}`);
    }
}
solve((["New follower: george",
"Like: george: 5",
"Comment: george",
"New follower: george",
"New follower: john",
"Comment: george",
"Comment: john",
"Comment: peter",
"Log out"])
);