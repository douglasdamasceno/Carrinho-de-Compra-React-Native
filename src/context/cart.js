import React,{createContext,useState,useContext,useEffect} from 'react';


const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [cartProduto, setCartProduto] = useState([])
    const [totalValue, setTotalValue] = useState(0)
    const [totalProduto, setTotalProduto] = useState(0)

    useEffect(() => {
        let value = 0
        let qtdProduto = 0
        cart.map((item) => {
            value += (item.price * item.qtd )
            qtdProduto += item.qtd
        })
        setTotalValue(value)
        setTotalProduto(qtdProduto)
    }, [cart])

   function add(index,item) {
        let newCart = cart
        if (newCart.length === 0) {
            const qtd = 1
            const itemCarinho = { ...item, qtd }
            newCart.push(itemCarinho)
        
        } else {
            const contem = newCart.filter((produto) => produto.id === item.id)
            if (contem.length===0) {
                const qtd = 1
                const itemCarinho = { ...item, qtd }
                newCart.push(itemCarinho)
            } else{
                    const qtd =  contem[0].qtd +1
                    const itemCarinho = { ...item, qtd}
                    newCart.splice(index, 1, itemCarinho)
                }
            }
        setCart([...newCart])
    }



    function remove(index,item) {
        let newCart = cart
        const contem = newCart.filter((produto) => produto.id === item.id)
        if (contem[0].qtd <=1) {
            newCart.splice(index, 1)
        } else {   
            const qtd = contem[0].qtd - 1
            const itemCarinho = { ...contem[0], qtd}
            newCart.splice(index, 1, itemCarinho)
        }
        setCart([...newCart])
    }

    const store = {
        add,
        remove,
        cart,
        cartProduto,
        totalValue,
        totalProduto,
    }
    
    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)

    const { cart,cartProduto, add,remove,totalValue,totalProduto } = context
    
    return {cart,cartProduto,add,remove,totalValue,totalProduto}
}