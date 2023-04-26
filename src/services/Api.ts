interface QueryOptions {
  search?: string;
  filter?: string;
  page?: number;
  limit?: number;
  [key: keyof PatientRecord]: string | number | undefined;
}

export const API_URL = 'https://61ba219448df2f0017e5a929.mockapi.io/api';

function buildUrl(url: string, options: QueryOptions) {
  const urlWithQuerystring = new URL(url);
  for (const key in options) {
    const value = options[key]!;
    urlWithQuerystring.searchParams.append(key, value.toString());
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

  static get vaccinations() {
    const slug = '/patients';
    return Object.freeze({
      get: () => fetchRecords(slug),
      search: (search: string) => fetchRecords(slug, { search }),
      filter: (filter: string) => fetchRecords(slug, { filter }),
      page: (page: number, limit: number = 10) => fetchRecords(slug, { page, limit }),
    });
  }
}

export default Api;
