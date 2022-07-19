part of 'avoid_unnecessary_trailing_comma_rule.dart';

class _ConfigParser {
  static const _breakOnConfigName = 'break-on';
  static const _oldBreakOnConfigName = 'break_on';
  static const _lineLengthName = 'line-length';

  static int? parseBreakpoint(Map<String, Object> config) {
    final breakpoint = config.containsKey(_breakOnConfigName)
        ? config[_breakOnConfigName]
        : config[_oldBreakOnConfigName];

    return breakpoint != null ? int.tryParse(breakpoint.toString()) : null;
  }

  static int parseLineLength(Map<String, Object> config) =>
      config[_lineLengthName] as int? ?? 80;
}
