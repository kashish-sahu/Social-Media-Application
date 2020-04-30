package com.db;
// import classes start
import java.sql.DriverManager;
import java.sql.Connection;
// import classes ends
// creating class with return type connection 
public class DBConnection implements DBProperties  {
static	Connection con=null; // declare static Connection reference 
public static Connection getConnection(){
		try{
			Class.forName(driver);// loading driver of mysql.jdbc driver
			
return con=(Connection) DriverManager.getConnection(url,usernamedb,passworddb); // returning connection object

		   }catch(Exception e){
			//System.out.println(e);
			return con;
			}
		
	}
}
