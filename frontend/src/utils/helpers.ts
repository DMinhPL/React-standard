export function mapModifiers(
  baseClassName: string,
  ...modifiers: (string | string[] | undefined)[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (typeof m === 'undefined'
        ? acc
        : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `-${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
      baseClassName,
    );
}
