<script>
    import { goBack } from 'svelte-spa-router'; // Importamos la función goBack para manejar el botón de retroceso
  </script>
  
  <header class="top-bar">
    <div class="content">
      <button on:click={goBack}>&larr; Atrás</button>
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
      text-align: center;
      padding: 10px 0;
      z-index: 1000; /* Aseguramos que esté sobre otros elementos */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra ligera */
    }
  
    .content {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    button {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
  
    button:hover {
      text-decoration: underline;
    }
  </style>
  