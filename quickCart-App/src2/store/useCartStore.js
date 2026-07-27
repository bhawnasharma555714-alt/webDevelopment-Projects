import { create } from 'zustand'; 
import { persist } from 'zustand/middleware';  

export const useCartStore = create
    (persist(
        (set,get)=>({
            cartItems: [],
            //adding product to cart
            addToCart: (product) => {
                const existing = get().cartItems.find((item) => item.id === product.id)

                if(existing){
                    set({ //increase quantity for the item with same id as product
                        cartItems: get().cartItems.map((item) => 
                        item.id === product.id ? {...item, quantity:item.quantity + 1}:item),
                    });
                } else {
                    set({cartItems : [...get().cartItems, {...product, quantity:1}]});
                }//copies all item from cartItems and product(all dea=tails) and paste them in new array and then updates cartItems
            },

            //removing item
            removeFromCart: (productId) => {
                set({
                    cartItems : get().cartItems.filter((item) => item.id !== productId),
                });
            },

            //empties all cart items
            clearCart : () => set({cartItems : []}),
        }),
        {
            name: 'quickkart-cart',
        }
    )
);