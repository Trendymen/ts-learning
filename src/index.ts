import "./store";
interface A {
  readonly a: string;
}
class ClassA implements A {
  a = "1";
}
const a = new ClassA();
a.a = "2";
