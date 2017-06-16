var filterArrUnder10 = arr => {
  // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
  var sepuluhKeatas = arr.filter(function(hasil){
    return hasil >= 10;
  });
  return sepuluhKeatas;
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]
