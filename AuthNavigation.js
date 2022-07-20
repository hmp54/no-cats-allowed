import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { firebase } from './firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'

const auth = getAuth();
const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const userHandler = user =>
        user ? setCurrentUser(user) : setCurrentUser(null)

    useEffect(
        onAuthStateChanged(auth, user=> userHandler(user))
    )

    return <>{currentUser ? <SignedInStack/> : <SignedOutStack/>}</>
}

export default AuthNavigation;