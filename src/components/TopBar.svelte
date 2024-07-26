<!-- TopBar.svelte -->

<script>
  import { navigate } from 'svelte-routing';
  
  export let title = '';
  
  const handleBackClick = () => {
    navigate('/'); // Redirige al inicio
  };
</script>

<header class="top-bar">
  <div class="content">
    <button class="back-button" on:click={handleBackClick}>
      <span class="back-arrow">&larr;</span>
    </button>
    <h1>{title}</h1>
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
    padding: 10px;
    z-index: 10; /* Z-index para sobreposición */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra ligera */
  }

  .content {
    display: flex;
    align-items: center; /* Centra verticalmente el contenido */
    justify-content: center; /* Centra el título horizontalmente */
    position: relative; /* Necesario para posicionar el título */
    height: 100%;
    padding-left: 40px; /* Asegura espacio para el botón de regreso */
  }

  .back-button {
    background-color: transparent;
    border: none;
    color: white; /* Color de la flecha */
    font-size: 32px; /* Tamaño de la flecha */
    cursor: pointer;
    position: absolute;
    left: 10px; /* Espacio a la izquierda */
  }

  .back-arrow {
    transform: scaleX(0.7); /* Reducción de la anchura */
  }

  .back-button:hover .back-arrow {
    text-decoration: underline;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    flex-grow: 1; /* Ocupa el espacio restante */
    color: white; /* Asegura que el texto sea visible */
  }
</style>
