require('isomorphic-fetch');

import { waitFor } from '@testing-library/react';
import Api from '../services/Api';

describe('Api', () => {
  it('should fetch all of patient vaccinations from the API', async () => {
    await waitFor(async () => {
      const vacinnations = await Api.vaccinations();
      expect(vacinnations).toBeInstanceOf(Array);
      expect(vacinnations.length).toEqual(25);
    });
  });

  it('should fetch a set of paged patient vaccinations from the API', async () => {
    await waitFor(async () => {
      const vacinnations = await Api.vaccinations({ page: 1, limit: 10 });
      expect(vacinnations).toBeInstanceOf(Array);
      expect(vacinnations.length).toEqual(10);
    });
  });

  it('should fetch a set of filtered patient vaccinations from the API using search', async () => {
    await waitFor(async () => {
      const vacinnations = await Api.vaccinations({ search: 'Di pere' });
      expect(vacinnations).toBeInstanceOf(Array);
      expect(vacinnations.length).toEqual(1);
    });
  });
});
