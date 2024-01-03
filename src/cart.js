import { useSelector, useDispatch } from 'react-redux'
// import cart actions

export default function Cart() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  // dispatch cart actions instead of setState
}
