import 'package:dart_code_metrics/src/analyzers/lint_analyzer/models/severity.dart';
import 'package:dart_code_metrics/src/analyzers/lint_analyzer/rules/rules_list/avoid_unnecessary_trailing_comma/avoid_unnecessary_trailing_comma_rule.dart';
import 'package:test/test.dart';

import '../../../../../helpers/rule_test_helper.dart';

// ignore_for_file: avoid_escaping_inner_quotes

const _correctExamplePath =
    'avoid_unnecessary_trailing_comma/examples/correct_example.dart';
const _incorrectExamplePath =
    'avoid_unnecessary_trailing_comma/examples/incorrect_example.dart';

void main() {
  group('AvoidUnnecessaryTrailingCommaRule', () {
    test('initialization', () async {
      final unit = await RuleTestHelper.resolveFromFile(_correctExamplePath);
      final issues = AvoidUnnecessaryTrailingCommaRule().check(unit);

      RuleTestHelper.verifyInitialization(
        issues: issues,
        ruleId: 'avoid-unnecessary-trailing-comma',
        severity: Severity.warning,
      );
    });

    test('with default config reports about found issues', () async {
      final unit = await RuleTestHelper.resolveFromFile(_incorrectExamplePath);
      final issues = AvoidUnnecessaryTrailingCommaRule().check(unit);

      RuleTestHelper.verifyIssues(
        issues: issues,
        startLines: [4, 13, 20, 27, 36, 44, 64, 74, 80, 85],
        startColumns: [24, 24, 31, 26, 26, 8, 20, 22, 22, 56],
        locationTexts: List.filled(10, ','),
        messages: List.filled(10, 'Avoid unnecessary trailing comma.'),
        replacementComments: List.filled(10, 'Remove trailing comma.'),
        replacements: List.filled(10, ''),
      );
    });

    test('with default config reports no issues', () async {
      final unit = await RuleTestHelper.resolveFromFile(_correctExamplePath);
      final issues = AvoidUnnecessaryTrailingCommaRule().check(unit);

      RuleTestHelper.verifyNoIssues(issues);
    });

    test('with custom break-on config reports no issues', () async {
      final unit = await RuleTestHelper.resolveFromFile(_incorrectExamplePath);
      final config = {'break-on': 1};
      final issues = AvoidUnnecessaryTrailingCommaRule(config).check(unit);

      RuleTestHelper.verifyNoIssues(issues);
    });

    test('with custom line-length config reports no issues', () async {
      final unit = await RuleTestHelper.resolveFromFile(_incorrectExamplePath);
      final config = {'line-length': 10};
      final issues = AvoidUnnecessaryTrailingCommaRule(config).check(unit);

      RuleTestHelper.verifyNoIssues(issues);
    });

    test('with custom line-length config reports about found issues', () async {
      final unit = await RuleTestHelper.resolveFromFile(_correctExamplePath);
      final config = {'line-length': 240};

      final issues = AvoidUnnecessaryTrailingCommaRule(config).check(unit);

      RuleTestHelper.verifyIssues(
        issues: issues,
        startLines: [4, 19, 28, 63, 73, 80, 87],
        startColumns: [23, 25, 45, 20, 41, 41, 45],
        locationTexts: List.filled(7, ','),
        messages: List.filled(7, 'Avoid unnecessary trailing comma.'),
      );
    });
  });
}
