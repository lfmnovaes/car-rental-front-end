const CREATE_NEW_USER = 'CREATE_NEW_USER';

export const saveUser = (payload) => ({
  type: CREATE_NEW_USER,
  user: payload,
});

export function getUser(name) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then(
        (json) => {
          if (json !== null) {
            const user = json.find((e) => e.name === name);
            dispatch(saveUser(user));
            localStorage.setItem('token', user.id);
            localStorage.setItem('userName', user.name);
          }
        },
      );
  };
}

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return [...state, action.user];
    default:
      return state;
  }
};

export default usersReducer;
