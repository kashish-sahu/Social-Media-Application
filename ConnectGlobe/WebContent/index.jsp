<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="zxx">
<head>
    <title>Login form</title>
    <link rel="stylesheet" href="rej.css">
</head>
<body>
    <div class="hero"> 
         <div class = "form-box">  
            <div class = "box-button"> 
                <div id="btn"></div>
               <button type="button"  class="toogle-btn" onclick="login()">Log In</button>  
               <button type="button"  class="toogle-btn" onclick="register()">Register</button>  
            </div> 
            
            <div class="social-icons">
                    <img src="login-img/fb.png">
                    <img src="login-img/tw.png">
                    <img src="login-img/gp.png">
              </div>

              <form action="login" id="login" method="post" class="input-grp">
                    <input type="email" name="email" class="input-field" placeholder="Email Id" required>
                    <input type="password" name="password" class="input-field" placeholder="Password" required>
                    <input type="checkbox" class="checkbox" > <span>Remember Password</span>
                    <button type="submit" class="submit-btn">Log In</button>
                   </form>

            
                   <form action="register" method="post" id="register" class="input-grp">
                        <input type="text" name="username" class="input-field" placeholder="User Id" required>
                        <input type="email" name="email" class="input-field" placeholder="Email Id" required>
                        <input type="password" name="password" class="input-field" placeholder="Password" required>
                        <input type="checkbox" class="checkbox" required> <span>I agree terms & conditions...</span>
                        <button type="submit" class="submit-btn">Register</button>
                       </form>
         </div> 
    </div>
    <script>
    
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");

    function register() {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    }

    function login() {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0";
    }
    
    </script>
</body>
</html>