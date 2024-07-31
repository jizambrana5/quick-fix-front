export const translateOrderStatus = (status) => {
    const statusMap = {
      pending: 'Pendiente',
      accepted: 'Aceptada',
      completed: 'Completada',
      cancelled: 'Cancelada',
    };
    return statusMap[status] || status;
  };
  