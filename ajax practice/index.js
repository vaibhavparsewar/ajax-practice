$(document).ready(function(){
    getdata();
});


function getdata(){
    let localstorage= localStorage.getItem("user");
    let ls= JSON.parse(localstorage);

    $("#inputEmail3").text(ls.Email);
    $("#inputPassword3").text(ls.Password);
    $("#inputAddress3").text(ls.Add);

}