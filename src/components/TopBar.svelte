<!-- TopBar.svelte -->

<script>
    import { navigate } from 'svelte-routing';
  
    const handleBackClick = () => {
      navigate('/'); // Redirige al inicio
    };
  </script>
  
  <header class="top-bar">
    <div class="content">
      <button class="back-button" on:click={handleBackClick}>
        <span class="back-arrow">&larr;</span> {""}
      </button>
    </div>
  </header>
  
  <style>
    .top-bar {
      background-color: #8BC34A; /* Color verde */
      color: white;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      text-align: left; /* Alineación a la izquierda */
      padding: 10px;
      z-index: 10; /* Z-index reducido */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra ligera */
    }
  
    .content {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .back-button {
      background-color: transparent;
      border: none;
      color: transparent; /* Texto transparente */
      font-size: 32px; /* Tamaño de la flecha */
      cursor: pointer;
      padding: 0; /* Elimina el padding si es necesario */
    }
  
    .back-arrow {
      color: white; /* Color de la flecha */
      font-weight: bold; /* Asegura que la flecha sea más ancha */
      transform: scaleX(0.7); /* Reducción de la anchura */
    }
  
    .back-button:hover .back-arrow {
      text-decoration: underline;
    }
  </style>
  