function addBorder(picture: string[]): string[] {
  const validLength = picture[0].length;
  const framedPicture = [];

  framedPicture.push('*'.repeat(validLength + 2));

  for (let i = 0; i < picture.length; i++) {
    const line = picture[i];
    if (line.length !== validLength)
      throw new Error('Invalid Argument Exception: every elements of the matrix need to have the same length');

    framedPicture.push('*' + line + '*');
  }

  framedPicture.push('*'.repeat(validLength + 2));

  return framedPicture;
}

console.log(addBorder(['abc', 'ded']));
