export const API_URL = 'https://61ba219448df2f0017e5a929.mockapi.io/api';

function buildUrl(url: string, options: QueryOptions) {
  const urlWithQuerystring = new URL(url);
  for (const key in options) {
    const value = options[key];
    if (value !== undefined) urlWithQuerystring.searchParams.append(key, value.toString());
  }

  return urlWithQuerystring.toString();
}

const fetchRecords = (slug: string, options: QueryOptions = {}) =>
  fetch(buildUrl(`${API_URL}${slug}`, options))
    .then((response) => response.json())
    .then<PatientRecord[]>((data) => data);

class Api {
  static before(callback: () => void) {
    callback();
    return this;
  }

  static vaccinations(options: QueryOptions = {}) {
    const slug = '/patients';
    return fetchRecords(slug, options);
  }
}

export default Api;
