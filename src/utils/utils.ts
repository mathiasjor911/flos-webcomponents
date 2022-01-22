export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function generateID(){
  return Math.floor(Math.random() * 10000).toString()
}
