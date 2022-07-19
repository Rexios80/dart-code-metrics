import 'package:analyzer/dart/ast/ast.dart';
import 'package:analyzer/dart/ast/syntactic_entity.dart';
import 'package:analyzer/dart/ast/token.dart';
import 'package:analyzer/dart/ast/visitor.dart';
import 'package:analyzer/source/line_info.dart';

import '../../../../../utils/node_utils.dart';
import '../../../lint_utils.dart';
import '../../../models/internal_resolved_unit_result.dart';
import '../../../models/issue.dart';
import '../../../models/replacement.dart';
import '../../../models/severity.dart';
import '../../models/common_rule.dart';
import '../../rule_utils.dart';

part 'config_parser.dart';
part 'visitor.dart';

class AvoidUnnecessaryTrailingCommaRule extends CommonRule {
  static const ruleId = 'avoid-unnecessary-trailing-comma';

  static const _warningMessage = 'Avoid unnecessary trailing comma.';
  static const _correctionMessage = 'Remove trailing comma.';

  final int? _itemsBreakpoint;
  final int _lineLength;

  AvoidUnnecessaryTrailingCommaRule([Map<String, Object> config = const {}])
      : _itemsBreakpoint = _ConfigParser.parseBreakpoint(config),
        _lineLength = _ConfigParser.parseLineLength(config),
        super(
          id: ruleId,
          severity: readSeverity(config, Severity.warning),
          excludes: readExcludes(config),
        );

  @override
  Iterable<Issue> check(InternalResolvedUnitResult source) {
    final visitor = _Visitor(source, _itemsBreakpoint, _lineLength);

    source.unit.visitChildren(visitor);

    return visitor.nodes
        .map(
          (node) => createIssue(
            rule: this,
            location: nodeLocation(node: node, source: source),
            message: _warningMessage,
            replacement: Replacement(
              comment: _correctionMessage,
              replacement: source.content.substring(node.offset, node.end - 1),
            ),
          ),
        )
        .toList(growable: false);
  }
}
