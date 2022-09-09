function reduserStore(state = [], action) {
  switch (action.type) {
    // case 'ADD':
    //     return [...state , ...action.payload]

    case "data":
      return [state, action.payload];

      break;

    default:
      return state;
  }
}

export default reduserStore;
