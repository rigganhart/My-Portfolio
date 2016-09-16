
window.addEventListener('load',function(){




changeBackground = function() {
    var randomNum = Math.ceil(Math.random()*10);
    console.log(randomNum);
    if (randomNum < 4) {
      document.body.style.backgroundImage = "url('images/folly-beach-pier-sc1.jpg')";
    } else if (randomNum >= 4 && randomNum < 8) {
      document.body.style.backgroundImage = "url('images/Vail.jpeg')";
    } else {
      document.body.style.backgroundImage = "url('images/deep-sea-fishing-3.jpg')";
    }
  }

setInterval(changeBackground, 10000);

changeDescription = function(){
  var fam = document.getElementById("famFirst");
  fam.addEventListener('click', function(event){
    event.preventDefault();
    console.log('clicked Fam First');
    document.getElementById("family").classList.remove("hidden");
    document.getElementById("grind").classList.add("hidden");
    document.getElementById("tunes").classList.add("hidden");
    document.getElementById("aF").classList.add("hidden");
    document.getElementById("vol").classList.add("hidden");

  });
    var vol = document.getElementById("ism");
    vol.addEventListener('click', function(event){
      event.preventDefault();
      console.log('clicked volunteerism');
      document.getElementById("vol").classList.remove("hidden");
      document.getElementById("family").classList.add("hidden");
      document.getElementById("tunes").classList.add("hidden");
      document.getElementById("aF").classList.add("hidden");
      document.getElementById("grind").classList.add("hidden");
  });
      var friend = document.getElementById("friend");
      friend.addEventListener('click', function(event){
        event.preventDefault();
        console.log('clicked and Friend');
        document.getElementById("aF").classList.remove("hidden");
        document.getElementById("grind").classList.add("hidden");
        document.getElementById("tunes").classList.add("hidden");
        document.getElementById("family").classList.add("hidden");
        document.getElementById("vol").classList.add("hidden");
    });
        var tunes = document.getElementById("api");
        tunes.addEventListener('click', function(event){
          event.preventDefault();
          console.log('clicked apiTunes');
          document.getElementById("tunes").classList.remove("hidden");
          document.getElementById("grind").classList.add("hidden");
          document.getElementById("family").classList.add("hidden");
          document.getElementById("aF").classList.add("hidden");
          document.getElementById("vol").classList.add("hidden");
      });
          var grid = document.getElementById("grid");
          grid.addEventListener('click', function(event){
            event.preventDefault();
            console.log('clicked grid grinder');
            document.getElementById("grind").classList.remove("hidden");
            document.getElementById("vol").classList.add("hidden");
            document.getElementById("tunes").classList.add("hidden");
            document.getElementById("aF").classList.add("hidden");
            document.getElementById("family").classList.add("hidden");
        });
  }
  changeDescription();
  });
