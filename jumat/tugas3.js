var reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  var nilaiMax = arr.reduce(function(a,b) {
    return Math.max(a,b);
  });
  return nilaiMax;
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9
