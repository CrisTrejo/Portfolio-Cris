const initialState = {
    musica:false,
    
}

// const REPRODUCIR_MUSICA = 'REPRODUCIR_MUSICA';
// const PAUSAR_MUSICA = 'PAUSAR_MUSICA';

function rootReducer(state = initialState, action) {
    switch(action.type){
        case 'REPRODUCIR_MUSICA':
      return { 
        ...state,
        musica: true 
    };
    case 'PAUSAR_MUSICA':
      return { 
        ...state,
        musica: false
     };
        default:
            return {...state}
    }
}
export default rootReducer