export function snakeToCamel(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => snakeToCamel(v));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result: any, key: string) => {
      const camelKey = key.replace(/([-_]\w)/g, (matches) =>
        matches[1].toUpperCase(),
      );
      let value = obj[key];
      if (value !== null && typeof value === 'object') {
        value = snakeToCamel(value);
      }

      result[camelKey] = value;
      return result;
    }, {});
  }
  return obj;
}
//TODO: 타입관련 정의 필요
