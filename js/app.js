
window.addEventListener('load',function(){


changeDescription = function(){
  var fam = document.getElementById("famFirst");
  fam.addEventListener('click', function(){
    console.log('clicked Fam First');
    document.getElementById("family").classList.remove("hidden");
    document.getElementById("grind").classList.add("hidden");
    document.getElementById("tunes").classList.add("hidden");
    document.getElementById("aF").classList.add("hidden");
    document.getElementById("vol").classList.add("hidden");

  });
    var vol = document.getElementById("ism");
    vol.addEventListener('click', function(){
      console.log('clicked volunteerism');
      document.getElementById("vol").classList.remove("hidden");
      document.getElementById("family").classList.add("hidden");
      document.getElementById("tunes").classList.add("hidden");
      document.getElementById("aF").classList.add("hidden");
      document.getElementById("grind").classList.add("hidden");
  });
      var friend = document.getElementById("friend");
      friend.addEventListener('click', function(){
        console.log('clicked and Friend');
        document.getElementById("aF").classList.remove("hidden");
        document.getElementById("grind").classList.add("hidden");
        document.getElementById("tunes").classList.add("hidden");
        document.getElementById("family").classList.add("hidden");
        document.getElementById("vol").classList.add("hidden");
    });
        var tunes = document.getElementById("api");
        tunes.addEventListener('click', function(){
          console.log('clicked apiTunes');
          document.getElementById("tunes").classList.remove("hidden");
          document.getElementById("grind").classList.add("hidden");
          document.getElementById("family").classList.add("hidden");
          document.getElementById("aF").classList.add("hidden");
          document.getElementById("vol").classList.add("hidden");
      });
          var grid = document.getElementById("grid");
          grid.addEventListener('click', function(){
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
