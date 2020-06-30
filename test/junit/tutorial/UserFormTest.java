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

}
