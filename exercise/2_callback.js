function hello() {
    console.log("Hello World!");
}

function goodBye() {
    console.log("Goodbye, Cruel World!");
}

function print(callback) {
    callback();
}

print (hello);
print (goodBye);