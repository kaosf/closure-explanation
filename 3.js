f = []
for (var i = 0; i < 3; i++) {
  f[i] = function() {
    console.log(i);
  }
}
for (var i = 0; i < 3; i++) {
  f[i]();
}
