const alice = 'Alice';

function talk(name) {
    const hello = `hello I am ${name}.`;
    console.log(hello);
}

function repeat(times) {
    let counter = 0;

    function count() {
        console.log(`Count: ${counter}`);
        counter++; //closure
    }
    for (let i = 0; i < times; i++) {
        count();
    }
}

talk(alice);
repeat(3);