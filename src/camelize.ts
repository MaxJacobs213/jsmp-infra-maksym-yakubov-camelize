export function camelize(str: string): string {
  return str.replace(/^([A-Z])|[\s-_](\w)/g, (match, p1, p2) => (p2 ? p2.toUpperCase() : p1.toLowerCase()));
}
