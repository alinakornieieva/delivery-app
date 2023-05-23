import {useSelector} from 'react-redux'

export const ShoppingCartPage = () => {
    const {products} = useSelector(state => state.cart)
    return <div>
        ShoppingCartPage
    </div>
}