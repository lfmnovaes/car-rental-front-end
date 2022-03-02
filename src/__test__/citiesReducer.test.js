import citiesReducer from '../redux/reducers/citiesReducer';

const prevState = [];

const cityMock = {
  id: 1,
  name: 'Rio de Janeiro',
  created_at: '2022-03-01T17:27:25.883Z',
  updated_at: '2022-03-01T17:27:25.883Z',
};

const fetchCities = () => {
  const fetchedData = cityMock;
  return prevState.push(fetchedData);
};

describe('Reservations Reducer Testing', () => {
  test('Testing initial state reservationsReducer', () => {
    expect(citiesReducer(undefined, {})).toEqual([]);
  });
  test('Testing fetching data to reservationsReducer', () => {
    expect(citiesReducer(prevState, fetchCities())).toEqual([
      {
        id: 1,
        name: 'Rio de Janeiro',
        created_at: '2022-03-01T17:27:25.883Z',
        updated_at: '2022-03-01T17:27:25.883Z',
      },
    ]);
  });
});
