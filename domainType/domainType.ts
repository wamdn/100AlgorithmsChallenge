/// <reference lib="es2015" />

function domainType(domains: string[]): string[] {
  const domainTypeInfo = new Map<string, string>([
    ['.org', 'organization'],
    ['.com', 'commercial'],
    ['.net', 'network'],
    ['.info', 'information']
  ]);

  const domainInfos = [];
  for (const domain of domains) {
    const matchArray = domain.match(/\.(org|com|net|info)$/);
    if (!matchArray) continue;

    const d = domainTypeInfo.get(matchArray[0]);
    domainInfos.push(d);
  }
  return domainInfos;
}

console.log(domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info']));
// console.log(domainType(['en.wiki.org']));
