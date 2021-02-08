let json = '{"id":2}'

try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error("There is no name in that data!");
    }
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`We got an error: ${error.name}`);
} finally {
    console.log("I'll always work");
}

console.log("I'll be working");