<template>
  <div class="spinner">
    <div class="spinner-circle"></div>
  </div>
</template>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.spinner-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #333;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
