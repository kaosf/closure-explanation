f = []
for (var i = 0; i < 3; i++) {
  f[i] = function() {
    console.log(i);
  }
}
for (var j = 0; j < 3; j++) {
  f[j]();
}
