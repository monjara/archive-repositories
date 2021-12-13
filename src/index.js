const events = require('events');
const process = require('process');

const createFizzBuzzEventEmitter = (until) => {
  const eventEmitter = new events.EventEmitter();
  // _emitFizzBuzz(eventEmitter, until);
  process.nextTick(() => _emitFizzBuzz(eventEmitter, until));
  return eventEmitter;
};

const _emitFizzBuzz = async (eventEmitter, until) => {
  eventEmitter.emit('start');
  let count = 1;
  while (count <= until) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (count % 15 === 0) {
      eventEmitter.emit('FizzBuzz', count);
    } else if (count % 3 === 0) {
      eventEmitter.emit('Fizz', count);
    } else if (count % 5 === 0) {
      eventEmitter.emit('Buzz', count);
    }
    count++;
  }
  eventEmitter.emit('end', eventEmitter);
};

const startListener = () => {
  console.log('start');
};

const fizzBuzzListener = (count) => {
  console.log('FizzBuzz', count);
};

const fizzListener = (count) => {
  console.log('Fizz', count);
};

const buzzListener = (count) => {
  console.log('Buzz', count);
};

const endListener = (eventEmitter) => {
  console.log('end');
  eventEmitter
    .off('start', startListener)
    .off('Fizz', fizzListener)
    .off('Buzz', buzzListener)
    .off('FizzBuzz', fizzBuzzListener)
    .off('end', endListener);
};

createFizzBuzzEventEmitter(0)
  .on('start', startListener)
  .on('Fizz', fizzListener)
  .on('Buzz', buzzListener)
  .on('FizzBuzz', fizzBuzzListener)
  .on('end', endListener);
