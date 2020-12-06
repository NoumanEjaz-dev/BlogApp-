import React, {useContext} from 'react';
import {View, Text , StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/EvilIcons';


const ShowScreen = (props) => {
        // console.log ('mai showScreen ka navigation hun !!', props.navigation);

    const { state } = useContext(Context);
    // console.log ('mai showScreen ka st hun !!',state);

       const blogPost = state.find((blogPost)=> blogPost.id === props.route.params.id) 

                    React.useEffect (
            () => {
                props.navigation.setOptions ({
                headerRight: () => 
                <TouchableOpacity onPress={()=> props.navigation.navigate('EditScreen',{id: props.route.params.id})}>
                    <Icon style={styles.icon} name="pencil" size={30} />
                </TouchableOpacity>
                });
            },
            [props.navigation]
            );
    
    return (
            

    <View style={styles.blogView}>

        <View style={styles.blog}>
        <Text style={styles.id}> Your Title : {blogPost.title}</Text>
        <Text style={styles.blogstyle}>{blogPost.title}</Text>
        <Text style={styles.id}>Your  Id:</Text>
        <Text style={styles.blogstyle}>{blogPost.id}</Text>
        <Text style={styles.id}> Your Blog:</Text>
        <Text style={styles.blogstyle}>{blogPost.content}</Text>
       
        </View>

    </View>
    )
};


const styles = StyleSheet.create({
    blogView:{
        flex:1,
        backgroundColor:'lightblue',
    },
    blog:{
        flex:1,
        margin:10,
        borderWidth:2,
        maxHeight:400,
    },  
    id:{
        fontSize:20,
        padding:5,
        justifyContent:"center",
    },
    blogstyle:{
        fontSize:16,
    }
})
export default ShowScreen;