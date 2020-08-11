import { ACTION_ADD, ACTION_REMOVE } from  '../actions';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export default function reducer(state = initialState, action){
    switch(action.type){
        case ACTION_ADD: 
            console.log('I BEEN CLICKED')
            return {
                ...state, 
                car: {
                    ...state.car, 
                    features: state.car.features.includes(action.payload) ? [state.car.features] : [state.car.features, action.payload]
                },
                additionalPrice: state.additionalPrice += action.payload.price
                
            }
        case ACTION_REMOVE:
            return {
                ...state, 
                car: {
                    ...state.car, 
                    features: state.car.features.filter(feature => feature.id !== action.payload.id)
                },
                additionalPrice: state.additionalPrice -= action.payload.price
            }
    default: 
        return state; 
    }

}