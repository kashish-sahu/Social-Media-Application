package post;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletContext;
import org.apache.struts2.util.ServletContextAware;
import CurrentUser.Details;
import com.db.DBConnection;
import com.db.DBCreateCommentTable;
import com.mysql.jdbc.Statement;
import com.opensymphony.xwork2.ActionSupport;

public class Upload extends ActionSupport implements ServletContextAware{

private static final long serialVersionUID = 1L;
private File ifile=null;
private ServletContext context=null;
private String Description=null;
private String title; 
// getter - setter starts
public File getIfile() {
	return ifile;
}
public void setIfile( File ifile) {
	this.ifile = ifile;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getDescription() {
	return Description;
}
public void setDescription(String discription) {
	Description = discription;
}
// getter - setter end
@Override
public void setServletContext(ServletContext context){
	this.context=context;
}
public String execute(){

	try{
			
		 	
			System.out.print(Details.getUsername());
			String postidno="select * from "+ Details.getEmail()+"post ";
			String sql="insert into "+	Details.getEmail()+"post (postid,imagepath,description,title) values (?,?,?,?)";
			int postno=1;
			Connection con=DBConnection.getConnection();
			Statement st = (Statement) con.createStatement();
			ResultSet rs =st.executeQuery(postidno);
			while(rs.next()){
				postno++;
			}
			
			System.out.println(""+postno);
			String Postid=(Details.getEmail()+"post"+postno);
			
			PreparedStatement ps = con.prepareStatement(sql);
			PreparedStatement ps1 = con.prepareStatement("insert into allpost (postid,imagepath,description,title) values (?,?,?,?)");
			
			if(ifile==null){	
			}else{	
					System.out.println("\n\n\n"+getIfile()+"\n\n\n");
					String path= "C:\\USERS\\"+System.getProperty("user.name")+"\\workspace\\ConnectGlobe\\WebContent\\postimages\\"+Postid+".jpg";
					InputStream ins = new FileInputStream(ifile);
					Files.copy(ins,Paths.get(path),StandardCopyOption.REPLACE_EXISTING);
                    
					ps.setString(1, Postid);
					ps.setString(2,path);
					ps.setString(3, getDescription());
					ps.setString(4,getTitle());
					ps.executeUpdate();
					ps1.setString(1, Postid);
					ps1.setString(2,path);
					ps1.setString(3, getDescription());
					ps1.setString(4,getTitle());
					ps1.executeUpdate();
					System.out.println("post "+Postid);
					DBCreateCommentTable.CreatePostCommentTable(Postid);
					System.out.println("tBLE POST COMMENT CREATED");
					setIfile(null);
				}
			return "1";
		}catch (Exception e) {
			System.out.println(e);
			return "2";
			}
	}
}

