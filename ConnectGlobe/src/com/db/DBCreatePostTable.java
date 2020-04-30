package com.db;

import java.sql.Connection;
import java.sql.Statement;


public class DBCreatePostTable {

	static Statement stmt=null;
	static  String createTable=" ("
	        + "postid VARCHAR(25) NOT NULL,"
	        + "imagepath varchar(200) NULL,"
	        + "description VARCHAR(200) NULL,"
	        + "time timestamp NOT NULL DEFAULT current_timestamp,"
	        + "title varchar(50))";
	public static int CreateTablePost(String email){
		Connection con=DBConnection.getConnection();
		
		try{
		stmt = (Statement) con.createStatement();
		createTable = "CREATE TABLE interactive."+email+"post "+createTable; 
		stmt.executeUpdate(createTable);
		System.out.println("table created");
		return 1;
		}catch(Exception e){
			System.out.print(e);
			return 0;
		}
		
	}
	
	
}
