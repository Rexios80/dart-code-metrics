part of 'avoid_unnecessary_trailing_comma_rule.dart';

class _Visitor extends RecursiveAstVisitor<void> {
  final LineInfo _lineInfo;
  final List<String> _lines;
  final int? _breakpoint;
  final int _lineLength;

  final _nodes = <AstNode>[];

  Iterable<AstNode> get nodes => _nodes;

  _Visitor(
    InternalResolvedUnitResult source,
    this._breakpoint,
    this._lineLength,
  )   : _lineInfo = source.lineInfo,
        _lines = source.content.split('\n');

  @override
  void visitArgumentList(ArgumentList node) {
    super.visitArgumentList(node);

    _visitNodeList(node.arguments, node.leftParenthesis, node.rightParenthesis);
  }

  @override
  void visitFormalParameterList(FormalParameterList node) {
    super.visitFormalParameterList(node);

    _visitNodeList(
      node.parameters,
      node.leftParenthesis,
      node.rightParenthesis,
    );
  }

  @override
  void visitListLiteral(ListLiteral node) {
    super.visitListLiteral(node);

    _visitNodeList(node.elements, node.leftBracket, node.rightBracket);
  }

  @override
  void visitSetOrMapLiteral(SetOrMapLiteral node) {
    super.visitSetOrMapLiteral(node);

    _visitNodeList(node.elements, node.leftBracket, node.rightBracket);
  }

  void _visitNodeList(
    Iterable<AstNode> nodes,
    Token leftBracket,
    Token rightBracket,
  ) {
    if (nodes.isEmpty) {
      return;
    }

    final last = nodes.last;

    if (last.endToken.next?.type == TokenType.COMMA &&
        (_breakpoint == null || nodes.length < _breakpoint!) &&
        _couldFitOnSingleLine(nodes, leftBracket, rightBracket)) {
      _nodes.add(last);
    }
  }

  bool _couldFitOnSingleLine(
    Iterable<AstNode> nodes,
    Token leftBracket,
    Token rightBracket,
  ) {
    final leftBracketLineNumber = _getLineNumber(leftBracket);
    final leftBracketLine = _lines[leftBracketLineNumber - 1];
    // Include leading white space
    final leftBracketLineLength = leftBracketLine.length;

    final rightBracketLineNumber = _getLineNumber(rightBracket);
    final rightBracketLine = _lines[rightBracketLineNumber - 1];
    // Exclude leading white space
    final rightBracketLineLength = rightBracketLine.trim().length;

    // Exclude leading white space
    final nodeLines =
        nodes.map((node) => _lines[_getLineNumber(node) - 1].trim());
    // Add spacing that would exist if nodes were on a single line
    final singleNodeLine = nodeLines.join(' ');
    // Subtract 1 for the comma to be removed
    final nodesLength = singleNodeLine.length - 1;

    return leftBracketLineLength + rightBracketLineLength + nodesLength <=
        _lineLength;
  }

  int _getLineNumber(SyntacticEntity entity) =>
      _lineInfo.getLocation(entity.offset).lineNumber;
}
