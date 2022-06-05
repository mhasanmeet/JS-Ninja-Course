function closures() {
    let data = "Hello World ";
    return function() {
       let data2 = "Bangladesh";
       console.log('sentence: ' + (data + data2));
    }
 }

 closures()();