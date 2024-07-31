<script>
    export let message = '';
    export let type = 'success'; // 'success' o 'error'
  
    let visible = false;
  
    // Mostrar el mensaje por un tiempo limitado
    $: if (message) {
      visible = true;
      setTimeout(() => {
        visible = false;
      }, 3000); // 3 segundos
    }
  </script>
  
  {#if visible}
    <div class="notification {type}">
      {message}
    </div>
  {/if}
  
  <style>
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      color: white;
      z-index: 1000;
      animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }
  
    .notification.success {
      background-color: #4CAF50;
    }
  
    .notification.error {
      background-color: #F44336;
    }
  
    @keyframes fadein {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  
    @keyframes fadeout {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  </style>
  