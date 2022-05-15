$(document).ready(function(){

    $("#submitbtn").click(function(){


            function getuserdata(){
                let user = {
                    Email:$("#inputEmail4").val(),
                    Password:$("#inputPassword4").val(), 
                    Add:$("#inputAddress4").val(), 
                };
                // $("#Form")[0].reset();
                return user;
            }


            function localStorageStore(){
                if(!localStorage.getItem("user")){
                    localStorage.setItem("user",JSON.stringify(getuserdata()));
                }
                else{
                    localStorage.removeItem("user");
                    localStorage.setItem("user",JSON.stringify(getuserdata()));
                }

            }



            function sendData(){
                let xhr = new XMLHttpRequest();
                let data= JSON.stringify(getuserdata());
                xhr.open("POST","http://localhost:4000/storedata",true);
                xhr.setRequestHeader("Content-Type","application/json");
                xhr.send(data);
            }


            localStorageStore();

            window.location.href = "display-data.html"

    });
});