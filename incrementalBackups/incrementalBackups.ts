function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
  const filesToBackup = new Set<number>();
  let startIndex: number;
  for (let i = 0; i < changes.length; i++) {
    const [ts] = changes[i];
    if (ts !== lastBackupTime) continue;
    startIndex = i + 1;
    break;
  }
  if (!startIndex) return [];

  for (let i = startIndex; i < changes.length; i++) {
    const [_, fileId] = changes[i];
    filesToBackup.add(fileId);
  }
  return Array.from<number>(filesToBackup).sort((a: number, b: number): number => a - b);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]
  ])
);
