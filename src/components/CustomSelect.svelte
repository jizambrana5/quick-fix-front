<script>
    export let options = [];
    export let bindValue = '';
    export let label = '';
    export let placeholder = 'Selecciona una opción';
    
    let open = false;
  
    const selectOption = (option) => {
      bindValue = option;
      open = false;
    };
  </script>
  
  <div class="custom-select-container">
    <label class="block text-sm font-medium text-gray-700">{label}</label>
    <div class="custom-select" on:click={() => open = !open}>
      <span class="selected-value">{bindValue || placeholder}</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
    {#if open}
      <ul class="custom-select-options">
        {#each options as option}
          <li class="custom-select-option" on:click={() => selectOption(option)}>
            {option}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
  
  <style>
    .custom-select-container {
      position: relative;
      width: 100%;
    }
  
    .custom-select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  
    .selected-value {
      flex-grow: 1;
    }
  
    .custom-select-options {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
      max-height: 150px;
      overflow-y: auto;
    }
  
    .custom-select-option {
      padding: 0.5rem;
      cursor: pointer;
    }
  
    .custom-select-option:hover {
      background-color: #f0f0f0;
    }
  </style>
  