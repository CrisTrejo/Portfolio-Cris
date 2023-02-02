import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reproducirMusica, pausarMusica } from '../Redux/Actions';
import renegade from './Music/renegade.mp3'


export default function  Music  ()  {
  const musica = useSelector(state => state.musica);
  const dispatch = useDispatch();
  console.log(renegade, "esta es renegade")
  

  useEffect(() => {
    const reproductor = document.getElementById('miReproductor');
    if (musica) {
      reproductor.play();
    } else {
      reproductor.pause();
    }
  }, [musica]);

  function reproducirMusicaa() {
    dispatch(reproducirMusica());
  }

  function pausarMusicaa() {
    dispatch(pausarMusica());
  }

  return (
    <div>
      <audio id="miReproductor" src={renegade} type="audio/mpeg">
        Tu navegador no admite el elemento audio.
      </audio>
      {musica ? (
        <button onClick={pausarMusicaa}>Pausar</button>
      ) : (
        <button onClick={reproducirMusicaa}>Reproducir</button>
      )}
    </div>
  );
}