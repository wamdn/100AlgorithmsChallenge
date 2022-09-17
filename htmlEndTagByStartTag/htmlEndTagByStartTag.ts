function htmlEndTagByStartTag(startTag: string): string {
  const match = startTag.match(/[a-zA-z]+/);
  if (!match) throw new Error('Invalid Argument Exception: no balise tag on startTag');

  const htmlTag = match[0];
  return `</${htmlTag}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
