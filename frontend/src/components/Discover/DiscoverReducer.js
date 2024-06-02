/**
 * Represents the state of a certain application.
 * @typedef {Object} State
 * @property {Array} niche - An array representing different niches.
 * @property {Array} country - An array representing different countries.
 * @property {Array} age - An array representing different age groups.
 * @property {Array} gender - An array representing different genders.
 */

/**
 * Represents an action in a Redux-like architecture.
 * @typedef {Object} Action
 * @property {string} type - The type of the action.
 * @property {Object} payload - The payload of the action, containing the data needed to perform the action.
 * @property {Array} payload.niche - (Optional) An array representing different niches.
 * @property {Array} payload.country - (Optional) An array representing different countries.
 * @property {Array} payload.age - (Optional) An array representing different age groups.
 * @property {Array} payload.gender - (Optional) An array representing different genders.
 */

/**
 * A reducer function for managing the discovery state.
 * @param {State} state - The current state of the application.
 * @param {Action} action - The action to be processed.
 * @returns {State} The new state of the application.
 */
export const discoverReducer = (state, action) => {
  switch (action.type) {
    case "country":
      if (state.country.some((item) => item == action.payload)) return state;
      return { ...state, country: [...state.country, action.payload] };
    case "age":
      console.log(action.payload);
      if (state.age.some((item) => item == action.payload)) return state;
      return { ...state, age: [...state.age, action.payload] };
    case "gender":
      if (state.gender.some((item) => item == action.payload)) return state;
      return { ...state, gender: [...state.gender, action.payload] };
    default:
      break;
  }
};
