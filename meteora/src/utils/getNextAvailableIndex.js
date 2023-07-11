export const getNextAvailableIndex = (array, selected) => {
  const availableList = array.filter(item => item.quantity !== 0);
  const currentIndex = selected;

  let nextIndex = currentIndex;

  while(nextIndex < availableList.length) {
    if(nextIndex !== currentIndex) {
      return nextIndex;
    }

    nextIndex++;
  };
  return currentIndex;
}