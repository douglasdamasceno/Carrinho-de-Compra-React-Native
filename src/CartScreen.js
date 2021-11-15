
import * as React from 'react';
import { View,Text,FlatList,TouchableOpacity, ScrollView } from 'react-native';

import { useCart } from './context/cart';

export default function CartScreen() {
    const { add, remove, cart,totalValue } = useCart()


    return (
        <View style={{flex:1,width:'100%'}} >
      <Text>
          Meu Carinho : Valor total R${totalValue}
      </Text>
        <FlatList
            contentContainerStyle={{flex:1,width:'100%'}}
                data={cart}
            renderItem={({index,item }) => {
                    return (
                        <View style={{
                            width: '100%',
                            padding: 20,
                            borderWidth: 1,
                            borderRadius: 8,
                            justifyContent:'space-evenly',
                            flexDirection:'row',
                        }}>
                            <Text style={{
                            marginRight: 10,
                            }}>
                               Nome do Produto: {item.name}
                            </Text>


                            <Text style={{
                            marginRight: 10,
                            }}>
                                Preco: {item.price}
                            </Text>

                            <TouchableOpacity style={{
                            backgroundColor:'#000',
                                padding: 5,
                            width: 25,
                            borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            
                            onPress={()=> add(index,item)}
                            >
                                <Text style={{
                            color: '#fff',
                                }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 25,
                            backgroundColor:'#000',
                                padding: 5,
                            marginLeft:20,
                            borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                            
                            }}
                            onPress={()=> remove(index,item)}
                            >
                                <Text style={{
                            color: '#fff',
                                }}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <Text style={{
                                color: '#000',
                                
                                }}>
                                    Qtd{item.qtd}
                                </Text>
                        </View>
                    )
                } }
        keyExtractor={(item) => item.id} />
      
        </View>
   
  );
}