class ClassA {

  foo() {
    console.log('This is foo in ClassA');
  }

  bar() {
    console.log('This is bar in ClassA');
  }
}

// Ejemplo de uso
const classAObject = new ClassA();
console.log(classAObject.lorem); // Salida: Lorem ipsum
classAObject.foo(); // Salida: This is foo in ClassA
classAObject.bar(); // Salida: This is bar in ClassA
