import { useReducer } from "react";

// 1. Define initial state
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isNewsletterSubscribed: false,
  country: "",
  errors: {}, // For validation errors
  isSubmitDisabled: true, // Conditional logic
};

// 2. Create a reducer function
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      const { field, value } = action;
      const updatedState = { ...state, [field]: value };

      // Enable/disable the submit button based on conditions
      const isSubmitDisabled =
        !updatedState.name ||
        !updatedState.email ||
        updatedState.password !== updatedState.confirmPassword;

      return { ...updatedState, isSubmitDisabled };

    case "TOGGLE_SUBSCRIPTION":
      return {
        ...state,
        isNewsletterSubscribed: !state.isNewsletterSubscribed,
      };

    case "VALIDATE_FORM":
      const errors = {};

      if (!state.name) errors.name = "Name is required";
      if (!state.email.includes("@")) errors.email = "Invalid email";
      if (!state.password) errors.password = "password is required";

      if (state.password !== state.confirmPassword)
        errors.confirmPassword = "Passwords do not match";

      return { ...state, errors };

    case "RESET_FORM":
      return initialState;

    default:
      throw new Error("Unhandled action type");
  }
}

// 3. Create the component
function UserForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_SUBSCRIPTION" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_FORM" });

    if (Object.keys(formState.errors).length === 0) {
      console.log("Form Submitted:", formState);
    } else {
      console.log("Validation Errors:", formState.errors);
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        {formState.errors.name && <span>{formState.errors.name}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        {formState.errors.email && <span>{formState.errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleChange}
        />
        {formState.errors.confirmPassword && (
          <span>{formState.errors.confirmPassword}</span>
        )}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={formState.isNewsletterSubscribed}
            onChange={handleToggle}
          />
          Subscribe to newsletter
        </label>
      </div>

      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formState.country}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="India">India</option>
        </select>
      </div>

      <button type="submit" disabled={formState.isSubmitDisabled}>
        Submit
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default UserForm;
