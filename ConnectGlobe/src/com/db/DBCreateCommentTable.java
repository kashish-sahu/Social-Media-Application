package com.db;

import java.sql.Connection;
import java.sql.Statement;

public class DBCreateCommentTable {
	
	public static int CreatePostCommentTable(String postid){
	    Statement stmt=null;
		postid = postid.replace("_", "__");
		postid = postid.replace(".", "_");
 
	     String createCommentTable=" ("
	            + "CUsername VARCHAR(25) NOT NULL,"
	            + "imagepath varchar(200) NULL,"
	            + "description VARCHAR(200) NULL)";
		Connection con=DBConnection.getConnection();
		try{
			
		stmt = (Statement) con.createStatement();
		System.out.println(postid);
		createCommentTable = "CREATE TABLE interactive."+postid+"comment "+createCommentTable; 
		stmt.executeUpdate(createCommentTable);
		System.out.println("table created");
		return 1;
		}catch(Exception e){
			System.out.println(e+"     create table post comment");
			return 0;
		}

	   }
}
