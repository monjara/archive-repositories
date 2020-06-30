package junit.tutorial;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;

import org.junit.Test;

public class UserFormTest {

	@Test
	public void isValidはuserNameとpasswordがからでない場合にtrueを返す() {
		UserForm sut = new UserForm("user", "pass");
		assertThat(sut.isValid(), is(true));
	}
	
	@Test
	public void userNameが空の時にエラーメッセージを取得できる() throws Exception {
		UserForm sut = new UserForm("", "pass");
		String expected = "ユーザIDは必須です";
		String actual = sut.getErrorMessage();
		assertThat(actual, is(expected));
	}

}
