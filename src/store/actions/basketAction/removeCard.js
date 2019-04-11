export const REMOVE_CARD = 'remove_card';

export const removeCard = (cardId, selectColor) => {
  return {
    type: REMOVE_CARD,
    payload: { id: cardId, selectColor: selectColor }
  }
};
