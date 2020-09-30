import { Reducer } from "redux";
import produce from 'immer';
import { ActionTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
    items: [],
    failCheckStockItems: [],
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    // console.log(state, action);
    //como vamos ter vários cases e todos retornarão o produce, podemos fazer um wrapper do produce no switch
    return produce(state, draft => {
        switch (action.type) {
            case ActionTypes.addProductToCartSuccess: {
                const { product } = action.payload;
                //atualizar a quantidade no carrinho, primeiro procura se já tem o item no carrinho e atualiza se tiver
                const productIndex = state.items.findIndex(item => item.product.id === product.id);
                if (productIndex >= 0) {
                    draft.items[productIndex].quantity++;
                } else {
                    //usando o produce
                    // return produce(state, draft => {
                    draft.items.push({
                        product,
                        quantity: 1
                    });
                }
                // });

                break;

                // antes de usar o produce
                // return {
                //     ...state,
                //     items: [
                //         ...state.items,
                //         {
                //             product,
                //             quantity: 1,
                //         }
                //     ]
                // };

            }
            case ActionTypes.addProductToCartFailure: {
                console.log('FAIL', action.payload);
                draft.failCheckStockItems.push(action.payload.productId);
                break;
            }
            default: {
                return draft;
            }
        }
    });
};

export default cart;