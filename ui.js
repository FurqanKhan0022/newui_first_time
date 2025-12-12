function games(){
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
}
function see(){
    swal("plz sorry cannot move ")
.then((value) => {
  swal(`The returned value is: ${value}`);
});
}
function openwindow(){
    window.open("https://poki.com/en/g/subway-surfers","_parent");
}