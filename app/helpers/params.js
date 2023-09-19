export function encodeStateToSearchParams(state) {
  const searchParams = new URLSearchParams();

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      searchParams.append(key, state[key]);
    }
  }

  return searchParams.toString();
}

export function decodeStateFromSearchParams(searchParamsString) {
  const searchParams = new URLSearchParams(searchParamsString);
  const state = {};

  for (const [key, value] of searchParams.entries()) {
    state[key] = value;
  }

  return state;
}
