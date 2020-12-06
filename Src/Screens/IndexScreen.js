import React, {useContext} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';


const IndexScreen =({navigation})=> {

    const {state, deleteblogpost} = useContext(Context);
                
    // console.log("Index ka state",state);
       



            React.useEffect (
            () => {
                navigation.setOptions ({
                headerRight: () => 
                <TouchableOpacity onPress={()=> navigation.navigate('CreateScreen')}>
                    <Icon style={styles.icon} name="plus" size={25} />
                </TouchableOpacity>
                });
            },
            [navigation]
            );


    return(
        <View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost)=> blogPost.title}
                renderItem={({item})=>{
                    console.log("itemmmmmmmmmmmmmmmmmmmmmm", item);
                    return (
                        <TouchableOpacity 
                        onPress={()=> navigation.navigate('ShowScreen', {id: item.id})}>
                            <View style={styles.row}>
                                    <Text style={styles.title}>
                                    {item.title} - {item.id} 
                                    </Text>
                                    <TouchableOpacity onPress={()=>deleteblogpost(item.id)}>
                                    <Icon style={styles.Icon} name="delete" size={30} />
                                    </TouchableOpacity>

                            </View>
                        </TouchableOpacity>
                    ) }}/>
        </View> 

    )

}





const styles = StyleSheet.create({
    icon:{
        fontWeight:"bold",
        color:"black",
        marginHorizontal:10,
       
    },
    row:{
        margin:10,
        flexDirection:'row',
    },
    title:{
        flex:1,
        fontSize:20,

    },
    Icon:{
        fontSize:25,   
    }

})



export default IndexScreen;