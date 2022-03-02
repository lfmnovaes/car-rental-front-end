import reservationsReducer from '../redux/reducers/reservationsReducer';

const prevState = [];

const r1 = {
  id: 1,
  date_start: '2022-01-12',
  date_end: '2022-01-15',
  created_at: '2022-03-01T17:27:25.907Z',
  updated_at: '2022-03-01T17:27:25.907Z',
  user_id: 1,
  city_id: 1,
  car_id: 1,
};

const fetchReservations = () => {
  const fetchedData = r1;
  return prevState.push(fetchedData);
};

describe('Reservations Reducer Testing', () => {
  test('Testing initial state reservationsReducer', () => {
    expect(reservationsReducer(undefined, {})).toEqual([]);
  });
  test('Testing fetching data to reservationsReducer', () => {
    expect(reservationsReducer(prevState, fetchReservations())).toEqual([
      {
        id: 1,
        date_start: '2022-01-12',
        date_end: '2022-01-15',
        created_at: '2022-03-01T17:27:25.907Z',
        updated_at: '2022-03-01T17:27:25.907Z',
        user_id: 1,
        city_id: 1,
        car_id: 1,
      },
    ]);
  });
});
