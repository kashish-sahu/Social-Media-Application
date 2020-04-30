package post;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import com.db.DBConnection;

import CurrentUser.Details;

public class AddComment {
String comment;

public String getComment() {
	return comment;
}

public void setComment(String comment) {
	this.comment = comment;
}
public String execute(){
	
	Connection con = DBConnection.getConnection();
	try {
		if(comment!=null){
		String sql= "insert into "+PostId.getPostId()+"comment (CUsername,imagepath,description) values(?,?,?)";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1,Details.getEmail());
		ps.setString(2, ""); 
		ps.setString(3, comment);
		ps.executeUpdate();
		}
	
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	
	
	return "1";
	
}

}
