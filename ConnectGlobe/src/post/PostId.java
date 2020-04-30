package post;

public class PostId {
static String postId;

public static String getPostId() {
	return postId;
}

public void setPostId(String postId) {
	PostId.postId = postId;
}
public String execute(){
	System.out.println(postId);
	return "1";
}
}
