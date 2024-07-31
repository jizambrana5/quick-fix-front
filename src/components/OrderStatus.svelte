<script>
    export let status;
  
    let colorClass = '';
  
    $: {
      switch (status) {
        case 'completed':
          colorClass = 'bg-green-500 text-white';
          break;
        case 'pending':
          colorClass = 'bg-yellow-500 text-black';
          break;
        case 'accepted':
          colorClass = 'bg-blue-500 text-white';
          break;
        case 'cancelled':
          colorClass = 'bg-red-500 text-white';
          break;
        default:
          colorClass = 'bg-gray-500 text-white';
      }
    }
  </script>
  
  <div class="order-status {colorClass}">
    {#if status === 'completed'}Completada{/if}
    {#if status === 'pending'}Pendiente{/if}
    {#if status === 'accepted'}Aceptada{/if}
    {#if status === 'cancelled'}Cancelada{/if}
  </div>
  
  <style>
    .order-status {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.875rem;
      font-weight: bold;
      margin-top: 4px;
    }
  </style>
  