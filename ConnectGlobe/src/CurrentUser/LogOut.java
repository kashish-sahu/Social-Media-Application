package CurrentUser;
import com.opensymphony.xwork2.ActionSupport;

public class LogOut extends ActionSupport {

	
	public String execute(){
		Details.setEmail(null);
		Details.setPassword(null);
		Details.setUsername(null);
		return "1";
	}
}
