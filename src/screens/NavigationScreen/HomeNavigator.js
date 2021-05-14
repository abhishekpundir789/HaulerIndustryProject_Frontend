import React, { useContext } from 'react';
import MenuIcon from './MenuIcon';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../SigninScreen/Signin';
import MyPostList from '../MyPostListScreen/MyPostList';
import Signup from '../SignupScreen/Signup';
import JobOffers from '../JobOffers/JobOffers';
import AddJunkNavigator from '../NavigationScreen/AddJunkNavigator';
import SignUpScreen2 from '../SignupScreen/SignUpScreen2'
import OfferDetails from '../OfferDetailsScreen/OfferDetails';
import PostDetails from '../PostDetailsScreen/PostDetails';
import ErrandScreenNavigator from './ErrandNavigator';
import { Context } from '../../context/ContextProvider';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    const { currentUser } = useContext(Context)
    return (
        <HomeStack.Navigator
            initialRouteName='Signin'
            screenOptions={{
                headerShown: true,
                title: 'Hauler',
            }}>
            {!currentUser ?
                <>
                    <HomeStack.Screen
                        name='Signin'
                        component={Signin}
                        options={{ headerShown: false }}
                    />
                    <HomeStack.Screen
                        name='Signup'
                        component={Signup}
                        options={{ headerShown: false }}
                    />
                    <HomeStack.Screen
                        name='SignUpScreen2'
                        component={SignUpScreen2}
                        options={{ headerShown: false }}
                    />
                    </> 
                    : 
                    <>
                    <HomeStack.Screen
                        name='MyPostList'
                        component={MyPostList}
                        options={{headerTitle: 'My Posts', headerRight: () => <MenuIcon /> }}
                    />
                    <HomeStack.Screen
                        name='PostDetails'
                        component={PostDetails}
                        options={{headerTitle: 'Details', headerRight: () => <MenuIcon /> }}
                    />
                    <HomeStack.Screen
                        name='JobOffers'
                        component={JobOffers}
                        options={{headerTitle: 'Offers', headerRight: () => <MenuIcon /> }}
                    />
                    <HomeStack.Screen
                        name='OfferDetails'
                        component={OfferDetails}
                        options={{headerTitle: 'Offers Details', headerRight: () => <MenuIcon /> }}
                    />
                    <HomeStack.Screen
                        name='AddJunkNavigator'
                        component={AddJunkNavigator}
                        options={{ headerRight: () => <MenuIcon /> }}
                    />
                    <HomeStack.Screen
                        name='ErrandNavigator'
                        component={ErrandScreenNavigator}
                        options={{ headerRight: () => <MenuIcon /> }}
                    />
                    </>
                    }
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
