let rot13 = str => str
                    .split("")
                    .map.call(str, function(char) {
                      var x = char.charCodeAt(0);
                      if (x < 65 || x > 90) {
                        return String.fromCharCode(x);
                      }
                      else if (x < 78) {
                        return String.fromCharCode(x + 13);
                      }
                      return String.fromCharCode(x - 13);
                    })
                    .join("")