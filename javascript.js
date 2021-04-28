function show_progress(i) {
    var progress1 = i;
    var progress2 = progress1 + 1;
    var progress3 = progress1 + 2;
  
    var magic = "linear-gradient(to right, #FFC2CE " + progress1 + "% ,red " + progress2 + "% , #FFFFFF " + progress3 + "%)";
    document.getElementById("progress-0").style.background = magic;
  
    var magic = "linear-gradient(to right, lightblue " + progress1 + "% , lightgreen " + progress2 + "%)";
    document.getElementById("progress-1").style.background = magic;
  
    var magic = "linear-gradient(to right, lightblue " + progress1 + "% , #FFFFFF 100%)";
    document.getElementById("progress-2").style.background = magic;
  
    var magic = "linear-gradient(#FFC2CE " + progress1 + "% ,red " + progress2 + "% , #FFFFFF " + progress3 + "%)";
    document.getElementById("progress-3").style.background = magic;
  }
  
  function timeout() {
    t = setTimeout(function() {
      show_progress(t)
      timeout();
    }, 50);
    if (t == 78) {
      clearTimeout(t);
    }
    console.log(t);
  }
  
  timeout();