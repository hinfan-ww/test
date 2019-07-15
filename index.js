import * as Promise from 'bluebird';

console.log('start');
async function main() {
    await Promise.resolve();
    console.log('hi');
}

main().then(__ => console.log('done'));