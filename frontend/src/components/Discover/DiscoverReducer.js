/**
 * Represents the state of a certain application.
 * @typedef {Object} State
 * @property {Array} niche - An array representing different niches.
 * @property {Array} country - An array representing different countries.
 * @property {Array} age - An array representing different age groups.
 * @property {Array} gender - An array representing different genders.
 * @property {Array} influencers - An array representing different genders.
 * @property {Array} data - An array representing different genders.
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
 * @property {Array} influencers - An array representing different genders.
 * @property {Array} data - An array representing different genders.
 */

/**
 * A reducer function for managing the discovery state.
 * @param {State} state - The current state of the application.
 * @param {Action} action - The action to be processed.
 * @returns {State} The new state of the application.
 */
export const discoverReducer = (state, action) => {
  let intermediate;
  switch (action.type) {
    case "country":
      if (state.country.some((item) => item == action.payload)) return state;
      intermediate = {
        ...state,
        country: [...state.country, action.payload],
      };
      return updateState(intermediate);
    case "age":
      if (state.age.some((item) => item == action.payload)) return state;
      return { ...state, age: [...state.age, action.payload] };
    case "gender":
      if (state.gender.some((item) => item == action.payload)) return state;
      intermediate = { ...state, gender: [...state.gender, action.payload] };
      return updateState(intermediate);
    case "niche-select":
      if (state.niche.some((item) => item == action.payload)) return state;
      intermediate = { ...state, niche: [...state.niche, action.payload] };
      return updateState(intermediate);
    case "niche-remove":
      intermediate = {
        ...state,
        niche: state.niche.filter((item) => item !== action.payload),
      };
      return updateState(intermediate);
    case "removeCountry":
      intermediate = {
        ...state,
        country: state.country.filter((item) => item !== action.payload),
      };
      return updateState(intermediate);
    case "removeAge":
      intermediate = {
        ...state,
        age: state.age.filter((item) => item !== action.payload),
      };
      return updateState(intermediate);
    case "removeGender":
      intermediate = {
        ...state,
        gender: state.gender.filter((item) => item !== action.payload),
      };
      return updateState(intermediate);
    case "removeNiche":
      intermediate = {
        ...state,
        niche: state.niche.filter((item) => item !== action.payload),
      };
      return updateState(intermediate);
    case "search":
      return {
        ...state,
        data: state.influencers.filter((influe) =>
          influe.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "updateState":
      return {
        ...state,
        influencers: action.payload,
        data: action.payload,
      };
    default:
      break;
  }
};

/**
 * A reducer function for managing the discovery state.
 * @param {State} state - The current state of the application.
 * @param {Action} action - The action to be processed.
 * @returns {State} The new state of the application.
 */
function updateState(state) {
  if (
    !state.niche.length &&
    !state.age.length &&
    !state.country.length &&
    !state.gender.length
  ) {
    return { ...state, data: state.influencers };
  }
  const newSet = new Set();
  let influencersMatchingNiche = state.influencers.filter((influe) =>
    state.niche.includes(influe.niche)
  );
  let influencerMatchingCountry = state.influencers.filter((influe) =>
    state.country.includes(influe.country)
  );
  let influencerMatchingGender = state.influencers.filter((influe) =>
    state.gender.includes(influe.gender)
  );
  // let influencerMatchingAge = state.influencers.filter((influe) =>
  //   state.gender.includes(influe.niche)
  // );
  influencersMatchingNiche.forEach((influ) => newSet.add(influ._id));
  influencerMatchingCountry.forEach((influ) => newSet.add(influ._id));
  influencerMatchingGender.forEach((influ) => newSet.add(influ._id));

  const filteredIds = Array.from(newSet);
  console.log(filteredIds);
  return {
    ...state,
    data: state.influencers.filter((d) => filteredIds.includes(d._id)),
  };
}
