void firstFunction(
  String firstArgument,
  String secondArgument,
  String thirdArgument,
) {
  return;
}

void secondFunction(String arg1) {
  firstFunction('', '', '');
}

void thirdFunction(String arg1, void Function() callback) {}

class TestClass {
  void firstMethod(
    String firstArgument,
    String secondArgument,
    String thirdArgument,
  ) {
    return;
  }

  void secondMethod() {
    firstMethod(
      'some string',
      'some other string',
      'and another string for length exceed',
    );

    thirdFunction('', () {
      return;
    });
  }

  void thirdMethod(String arg1) {
    firstMethod(arg1, '', '');
    firstFunction(arg1, '', '');
  }
}

enum FirstEnum {
  firstItem,
  secondItem,
  thirdItem,
  forthItem,
  fifthItem,
  sixthItem,
}

enum SecondEnum { firstItem }

class FirstClass {
  final num firstField;
  final num secondField;
  final num thirdField;
  final num forthField;

  const FirstClass(
    this.firstField,
    this.secondField,
    this.thirdField,
    this.forthField,
  );
}

const firstInstance = FirstClass(0, 0, 0, 0);

final firstArray = ['some string that somehow makes this line exactly 80 char'];
final secondArray = [
  'some string',
  'some other string',
  'and another string for length exceed',
];

final firstSet = {'some string'};
final secondSet = {
  'some string',
  'some other string',
  'and another string for length exceed',
};

final firstMap = {'some string': 'some string'};
final secondMap = {
  'some string': 'and another string for length exceed',
  'and another string for length exceed':
      'and another string for length exceed',
};
