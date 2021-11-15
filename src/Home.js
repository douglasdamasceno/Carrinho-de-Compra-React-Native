
import * as React from 'react';
import { View, Text,FlatList,TouchableOpacity } from 'react-native';

import { useCart } from './context/cart';

export default function HomeScreen() {
    const {add,remove} = useCart()

    const data = [
        {
            id: '1',
            name: 'leite',
            price:5,
        },
        {
            id: '2',
            name: 'Feijao',
            price:10,
        },
        {
            id: '3',
            name: 'Arroz',
            price:8,
        },

    ]
    return (
        <FlatList
            contentContainerStyle={{flex:1,width:'100%'}}
                data={data}
            renderItem={({ index,item }) => {
                    return (
                        <View style={{
                            width: '100%',
                            padding: 20,
                            borderWidth: 1,
                            borderRadius: 8,
                            justifyContent:'space-evenly',
                            margin: 10,
                            flexDirection:'row',
                        }}>
                            <Text style={{
                            marginRight: 10,
                            }}>
                               {index} Id: {item.id} 
                            </Text>
                            <Text style={{
                            marginRight: 10,
                            }}>
                               Produto: {item.name}
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
                        </View>
                    )
                } }
            keyExtractor={(item)=> item.id} />
   
  );
}