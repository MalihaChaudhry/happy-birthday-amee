import { create } from 'zustand';

const useAmeeStore = create((set) => ({
  deckID: '',
  drawnCard: null,
  pileOfCards: [],
  setDeckID: (deckID) => set(() => ({ deckID })),
  setDrawnCard: (drawnCard) => set(() => ({ drawnCard })),
  setPileOfCards: (drawnCard) =>
    set((state) => ({ pileOfCards: [...state.pileOfCards, drawnCard] })),
}));

export default useAmeeStore;
