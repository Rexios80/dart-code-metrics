// LINT
void firstFunction(
  String firstArgument,
  String secondArgument,
) {
  return;
}

// LINT
void secondFunction() {
  firstFunction(
    'some string',
    'some other string',
  );
}

// LINT
void thirdFunction(
  String varName,
  void Function() callbackName,
) {}

class TestClass {
  // LINT
  void firstMethod(
    String firstArgument,
    String secondArgument,
  ) {
    return;
  }

  void secondMethod() {
    // LINT
    firstMethod(
      'some string',
      'some other string',
    );

    // LINT
    thirdFunction(
      'some string',
      () {
        return;
      },
    );
  }
}

// LINT
enum FirstEnum {
  firstItem,
  secondItem,
}

class FirstClass {
  final num firstField;
  final num secondField;
  final num thirdField;

  // LINT
  const FirstClass(
    this.firstField,
    this.secondField,
    this.thirdField,
  );
}

const instance =
    FirstClass(3.14159265359, 3.14159265359, 3.14159265359, 3.14159265359);

// LINT
final secondArray = [
  'some string',
  'some other string',
];

// LINT
final secondSet = {
  'some string',
  'some other string',
};

// LINT
final secondMap = {
  'some string': 'and another string for length exceed',
};
