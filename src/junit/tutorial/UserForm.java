package junit.tutorial;

public class UserForm {
	private  String userName;
	private  String password;
	
	public UserForm(String userName, String password) {
		this.userName = userName;
		this.password = password;
	}
	
	public boolean isValid() {
		return true;
	}
	
	public String getErrorMessage() {
		return "ユーザIDは必須です";
	}
}
