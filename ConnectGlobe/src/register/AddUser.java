package register;


import java.sql.Connection;


import javax.servlet.ServletContext;

import org.apache.struts2.util.ServletContextAware;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

import CurrentUser.Details;
import com.db.DBConnection;
import com.db.DBCreateCommentTable;
import com.db.DBCreatePostTable;
import com.mysql.jdbc.Statement;
import com.opensymphony.xwork2.ActionSupport;

public class AddUser extends ActionSupport implements ServletContextAware{
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
private static String username, email,password;
	private ServletContext context;
	@Override
	public void setServletContext(ServletContext context){
		this.context=context;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		AddUser.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		AddUser.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		AddUser.password = password;
	}

		public String execute(){
			try{
				int i = getEmail().indexOf('@');
				setEmail(getEmail().substring(0,i));
				setEmail(getEmail().replace("_", "__"));
				setEmail(getEmail().replace(".", "_"));
				
			
			Connection con=  DBConnection.getConnection(); // creating connection with data base
		Statement st = (Statement) con.createStatement();
	ResultSet rs =	st.executeQuery("SELECT * FROM LOGIN WHERE email= '"+getEmail() +"'");
		if(!rs.next()){
			
				// creating
				// connection with
				  PreparedStatement ps1 =  (PreparedStatement) con.prepareStatement("insert into login(username,email,password) values(?,?,?)");  // Creating PreparedStatement object
				   System.out.println("yaha pr hu");
				    
		
				    
				    ps1.setString( 1,getUsername() );
					ps1.setString( 2,getEmail() );
					ps1.setString( 3,getPassword() );
					ps1.executeUpdate();
					System.out.println("update done");
										
					Details.setEmail(getEmail());
					Details.setUsername(getUsername());
					Details.setPassword(getPassword());
					System.out.println(Details.getEmail());
					DBCreatePostTable.CreateTablePost(Details.getEmail()); // Creating post table of Users
					
	// post
		    return "1"; // sends to the welcome page
			}

		else{
			System.out.println("user already exists");
		}
    
		}catch(Exception e){
			System.out.println("error");
			System.out.println(e);
	 
			}
			
			return "2";// sends to error pages		
		
	}
}
