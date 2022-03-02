import carsReducer from '../redux/reducers/carReducer';

const prevState = [];

const carMock = {
  id: 1,
  brand: 'Cadillac',
  model: 'CTS Luxury',
  year: '2019',
  image: 'https://i.imgur.com/K4g6Tmw.png',
  reserved: true,
  price: 400,
  created_at: '2022-03-01T17:27:25.817Z',
  updated_at: '2022-03-01T17:27:25.817Z',
};

const fetchCars = () => {
  const fetchedData = carMock;
  return prevState.push(fetchedData);
};

describe('Reservations Reducer Testing', () => {
  test('Testing initial state reservationsReducer', () => {
    expect(carsReducer(undefined, {})).toEqual([]);
  });
  test('Testing fetching data to reservationsReducer', () => {
    expect(carsReducer(prevState, fetchCars())).toEqual([
      {
        id: 1,
        brand: 'Cadillac',
        model: 'CTS Luxury',
        year: '2019',
        image: 'https://i.imgur.com/K4g6Tmw.png',
        reserved: true,
        price: 400,
        created_at: '2022-03-01T17:27:25.817Z',
        updated_at: '2022-03-01T17:27:25.817Z',
      },
    ]);
  });
});
