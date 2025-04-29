export const getServiceValue = (service: string): number => {
  switch (service.toLocaleLowerCase()) {
    case "corte masculino":
      return 30;
    case "barba completa":
      return 20;
    case "sobrancelha":
      return 15;
    case "luzes/descoloração":
      return 30;
    case "limpeza de pele":
      return 25;
    case "corte + barba":
      return 45;
    case "corte + sobrancelha":
      return 40;
    case "barba + sobrancelha":
      return 30;
    default:
      return 0;
  }
};
