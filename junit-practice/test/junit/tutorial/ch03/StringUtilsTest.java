package junit.tutorial.ch03;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

public class StringUtilsTest {

	@Test
	public void addで要素を追加するとサイズが1となりgetで取得できる() throws Exception {
		List<String> sut = new ArrayList<>();
		sut.add("hello");
		assertThat(sut.size(), is(1));
		assertThat(sut.get(0), is("hello"));
	}

}
