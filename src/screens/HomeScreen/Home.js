import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByService from '../../components/SearchByService/SearchByService';
import SearchByLocation from '../../components/SearchByLocation/SearchByLocation';
import PostsList from '../../components/PostList/PostList'
import { Context } from '../../context/ContextProvider'
import { useIsFocused } from "@react-navigation/native";
import { getAllPosts } from '../../../network';

export default function Home({ navigation }) {
    const { currentUser } = useContext(Context)
    const isFocused = useIsFocused();

    const [location, setLocation] = useState('')
    const [service, setService] = useState('')
    const [posts, setPosts] = useState('')

    const searchService = async (value) => {
       console.log("search pressed")
    }

    const searchLocation = async (value) => {
        console.log("location pressed")
    }
    
    const onActiveImagePress = async (value) => {
        console.log("Active post image pressed")
    }

    const onAcceptedDetails = async (value) => {
        console.log("In Progress post image pressed")
    }

    const onOffersPress = async (value) => {
        console.log("Offers pressed")
    }

    useEffect(() => {
        currentUser &&
            (async () => {
                const posts = await getAllPosts(currentUser.uid)
                console.log(posts)
                setPosts(posts)
            })()
    }, [isFocused])

return (
    <View style={styles.container}>
            <SearchByLocation
                location={location}
                setLocation={setLocation}
                searchLocation={searchLocation}
            />
            <SearchByService
                service={service}
                setService={setService}
                searchService={searchService}
            />
            <PostsList
                posts={posts}
                onActiveImagePress={onActiveImagePress}
                onAcceptedDetails={onAcceptedDetails}
                onOffersPress={onOffersPress}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
    }
})
