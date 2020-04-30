package register;

import java.io.File;
import java.sql.ResultSet;
import java.sql.SQLException;

import CurrentUser.Details;
import com.db.DBConnection;
import com.db.DBCreatePostTable;
import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Statement;
import com.opensymphony.xwork2.ActionSupport;

public class CheckUser extends ActionSupport {
public String email =null;
public String password = null;

public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

public String execute(){
	
	try{
		Connection con = (Connection) DBConnection.getConnection();
		if(con.equals(null))
			System.out.print("\nnull\n");
		setEmail(getEmail().substring(0, getEmail().indexOf('@')));
		setEmail(getEmail().replace("_", "__"));
		setEmail(getEmail().replace(".", "_"));
		Statement st = (Statement) con.createStatement();
		ResultSet rs =st.executeQuery("select * from login where email='"+getEmail()+"'");
		if(rs.next()){
	if(rs.getString("password").equals(password)){
		Details.setEmail(rs.getString("email"));
		Details.setUsername(rs.getString("username"));
		Details.setPassword(rs.getString("password"));	
		System.out.println(Details.getEmail());
		System.out.println(System.getProperty("user.name"));
		String path= "C:\\USERS\\"+System.getProperty("user.name")+"\\workspace\\ConnectGlobe\\WebContent\\postimages";
		
		File file = new File(path);
	      //Creating the directory
	       file.mkdirs();
	     
	      
		
		return "1";
			}
			else
			{
				System.out.println(rs.getString("password")+password);
				return "2";
		}
		}
		
		
	}catch(SQLException sqle){
		System.out.println(sqle);
	}
	return "2";

	}

}
