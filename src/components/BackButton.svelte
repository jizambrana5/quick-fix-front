<script>
    export let color = '#FFFFFF'; // Color predeterminado
    export let size = '24'; // Tamaño predeterminado
  
    const goBack = () => {
      window.history.back();
    };
  </script>
  
  <button on:click={goBack} class="back-button" aria-label="Go back">
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-arrow-left"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  </button>
  
  <style>
    .back-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .back-button:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
    }
  </style>
  