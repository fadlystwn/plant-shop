"use client"
import { setAddtoCart } from "@/stores/cartSlice";
import { useAppDispatch } from "@/stores/store"
const CartAction = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button className="button-primary" onClick={() => dispatch(setAddtoCart())}>Add to Cart</button>
    </div>
  )
}

export default CartAction