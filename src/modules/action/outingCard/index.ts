export interface OutingCard {
  id: number;
  number: number;
  name: string;
  date: string;
  time: string;
  where: string;
  reason: string;
}

export const UPDATE_OUTING_CARD_LIST = 'outingCard/UPDATE_OUTING_CARD_LIST' as const;
export const UPDATE_OUTING_CARD_MODAL = 'outingCard/UPDATE_OUTING_CARD_MODAL' as const;

export const updateOutingCardList = (payload: OutingCard[]) => ({
  type: UPDATE_OUTING_CARD_LIST,
  payload,
});

export const updateOutingCardModal = (payload: number) => ({
  type: UPDATE_OUTING_CARD_MODAL,
  payload,
});

export type OutingCardAction =
  | ReturnType<typeof updateOutingCardList>
  | ReturnType<typeof updateOutingCardModal>;
