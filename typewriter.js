const sentence = "hello there from lighthouse labs";

let ms = 0;
for (let i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if ( i == sentence.length - 1) {
      console.log();
    }
  }, ms)
  
  ms+=50;
}