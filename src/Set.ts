class SetTest {
  has(value: number): boolean {
    return false;
  }
  add(value: number): this {
    return this;
  }
}

// tslint:disable-next-line: max-classes-per-file
class MutableSet extends SetTest {}
