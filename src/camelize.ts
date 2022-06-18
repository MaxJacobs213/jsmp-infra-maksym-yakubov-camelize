import camelCase from 'lodash.camelcase';

export function camelize(str: string): string {
  return camelCase(str);
}
