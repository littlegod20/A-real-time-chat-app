// creating a temporary delay function for my lazy loading components
export const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
