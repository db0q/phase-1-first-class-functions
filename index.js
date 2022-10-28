function receivesAFunction(callback) {
    callback();
  }
function returnsANamedFunction(){
    return function namedFunction() {
        console.log('name');
      };
}
function returnsAnAnonymousFunction(){
    return () => '';
}