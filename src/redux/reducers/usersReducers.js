const CREATE_NEW_USER = 'CREATE_NEW_USER';

export const saveUser = (payload) => ({
  type: CREATE_NEW_USER,
  user: payload,
});

export function getUser(name) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/users/${name}`)
      .then((response) => response.json())
      .then(
        (json) => {
          if (json.length > 0) {
            dispatch(saveUser(json));
            localStorage.setItem('token', json[0].id);
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