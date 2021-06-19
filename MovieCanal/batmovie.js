function changeSelect(data) {
    var w = document.getElementById("cardsDestComedia");
    var x = document.getElementById("cardsDestAventura");
    var y = document.getElementById("cardsDestTerror");
    var z = document.getElementById("cardsDestPrincipal");

       
        if (data === "comedia") {
          w.style.display = "block";

        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";

        }

            else if (data === "aventura") {
                x.style.display = "block";

                w.style.display = "none";
                y.style.display = "none";
                z.style.display = "none";
      
      
              }

           else if (data === "terror") {
            y.style.display = "block";
  
            x.style.display = "none";
            w.style.display = "none";
            z.style.display = "none";
  
          }

          else if (data === "todosFilmes") {
            y.style.display = "block";
            x.style.display = "block";
            w.style.display = "block";
            z.style.display = "block";
  
          }
         else { 
          z.style.display = "block";

          x.style.display = "none";
          y.style.display = "none";
          w.style.display = "none";
        }

      }
      function todosFilmes() {
        var w = document.getElementById("cardsDestComedia");
        var x = document.getElementById("cardsDestAventura");
        var y = document.getElementById("cardsDestTerror");
        var z = document.getElementById("cardsDestPrincipal");

        if (z.style.display === "none") {
          y.style.display = "block";
          x.style.display = "block";
          w.style.display = "block";
          z.style.display = "block";
        } 

        else if (y.style.display === "none") {
          y.style.display = "block";
          x.style.display = "block";
          w.style.display = "block";
          z.style.display = "block";
        }

        else if (w.style.display === "none") {
          y.style.display = "block";
          x.style.display = "block";
          w.style.display = "block";
          z.style.display = "block";
        }

        else if (x.style.display === "none") {
          y.style.display = "block";
          x.style.display = "block";
          w.style.display = "block";
          z.style.display = "block";
        }

        else if (z.style.display === "none"){
          y.style.display = "block";
          x.style.display = "block";
          w.style.display = "block";
          z.style.display = "block";
        }

        else {
          y.style.display = "none";
          x.style.display = "none";
          w.style.display = "none";

          z.style.display = "block";
        }
      }
