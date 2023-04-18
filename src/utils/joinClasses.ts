type ClassName = string | undefined;

type ClassNameDef = ClassName | [ClassName, boolean];

type JoinClasses = (...classNameDefs: ClassNameDef[]) => string | undefined;

/**
 * Simple utility for merging many classes to one string
 *
 * simple example:
 *
 * const classes = joinClasses('foo', 'bar', 'baz')
 * console.log(classes) // 'foo bar baz'
 *
 * example with flags:
 *
 * const classes = joinClasses(
 *   'foo',
 *   undefined,
 *   ['bar', false],
 *   ['baz', true],
 *   [undefined, true]
 * )
 * console.log(classes) // 'foo baz'
 *
 */

export const joinClasses: JoinClasses = (...classNameDefs) => {
  const classNames = classNameDefs.reduce<string[]>((classNames, classNameDef) => {
    if (Array.isArray(classNameDef)) {
      const [className, shouldAdd] = classNameDef;
      if (className && shouldAdd) {
        classNames.push(className);
      }
    } else if (classNameDef) {
      classNames.push(classNameDef);
    }
    return classNames;
  }, []);
  return classNames.join(' ') || undefined;
};
