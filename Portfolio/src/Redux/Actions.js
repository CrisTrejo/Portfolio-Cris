export function reproducirMusica(payload){
    return{
      type:'REPRODUCIR_MUSICA',
      payload
    }
  }

  export function pausarMusica(payload){
    return{
      type:'PAUSAR_MUSICA',
      payload
    }
  }
  