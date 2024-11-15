import { useReducer } from "react";

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
  age: "",
  address: "",
  errors: {},
  isSubmitDisabled: true,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      const { name, value } = action;
      const updatedState = { ...state, [name]: value };
      const isSubmitDisabled = !state.username || !state.password;

      return { ...updatedState, isSubmitDisabled };

    case "VALIDATE_FORM":
      const errors = {};

      if (!state.username) {
        errors.username = "Username is required";
      }

      if (!state.password) {
        errors.password = "password is required";
      }

      return { ...state, errors };
    case "RESET_FORM":
      return initialState;
  }
};

const MyUserForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_FORM" });

    if (!Object.keys(formState.errors).length) {
        console.log("Form Submitted:", formState);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_FIELD",
      name,
      value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formState.username}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={formState.password}
        onChange={handleChange}
      />{" "}
      <br />
      <input
        type="text"
        name="confirmPassword"
        placeholder="confirmPassword"
        value={formState.confirmPassword}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="age"
        placeholder="age"
        value={formState.age}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="address"
        placeholder="address"
        value={formState.age}
        onChange={handleChange}
      />
      <br />
      <button type="submit" disabled={formState.isSubmitDisabled}>
        Submit
      </button>
      <button type="button">Reset</button>
    </form>
  );
};

export default MyUserForm;
