const intitialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state = intitialState, action) => {
      switch (action.type) {
          case 'REMOVE_FEATURE': {
            return {...state.car, features: features.map(feature => {
                feature.id === action.payload ? 
                ([...features].splice(
                    (state.car.features.findIndex(x => x.id === action.payload)),
                        (state.car.features.findIndex(x => x.id === action.payload))
                        )) : null})}}
        case 'BUY_ITEM': {
            return {
                ...state.car, features: [...state.features, state.store[action.payload-1]] 
            }
        }
          default: return state;
      } 
  }