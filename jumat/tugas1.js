var transformArrToLowerCase = arr => {
  // Ubah setiap element array menjadi lowercase!
  var lowerCase = arr.map(function(hasil) {
    return hasil.toLowerCase();
  });
  return lowerCase;
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']
