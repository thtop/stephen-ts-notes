class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Something bad!')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
    // throw new Error();
    // console.log('swish');
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  // console.log(target.color); // undefined
  // console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    // console.log('Target: ', target);
    // console.log('Key: ', key);

    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot();
// testDecorator(Boat.prototype, 'pilot');
