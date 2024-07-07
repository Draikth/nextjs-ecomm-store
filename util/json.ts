import sjson from 'secure-json-parse';

export function parseJson(json: string) {
  if (!json) return undefined;
  try {
    return sjson.parse(json);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
