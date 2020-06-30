package junit.tutorial;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;

import org.junit.Test;

public class CalculatorTest {

	@Test
	public void multiplyで乗算結果を取得できる() {
		Calculator calc = new Calculator();
		int expected = 12;
		int actual = calc.multiply(3, 4);
		assertThat(actual, is(expected));
	}
	
	@Test
	public void devideで除算結果を取得できる() {
		Calculator calc = new Calculator();
		float expected = 1.5f;
		float actual = calc.divide(3, 2);
		assertThat(actual, is(expected));
	}

}
