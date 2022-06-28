import {USERS} from './users'

const N = 10000; 

export const POSTS = [
    {
        imageSrc: require('../assets/posts/black-pug.jpg'),
        user: USERS[0].user,
        likes: Math.floor(Math.random() * N),
        caption: 'Me and my favorite human', 
        profile_picture: USERS[0].image, 
        comments: [
            {
                user: 'ih8cats',
                comment: 'Cuties 💕', 
            },
            {
                user: 'dogs.rule', 
                comment: 'Bowow 🥺'
            }
        ]
    },
    {
        imageSrc: require('../assets/posts/dog-biscuits.jpg'),
        user: USERS[1].user,
        likes:  Math.floor(Math.random() * N), 
        caption: 'I have officially perfected my biscuit recipe! First 100 people to order get 20% off. Link in bio!', 
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'noCatz',
                comment:'Nobody wants your biscuits bro 😂', 
            },
            {
                user: 'cats.drool',
                comment: "I just ordered! Can't wait!", 
            }
        ]
    },
    {
        imageSrc: require('../assets/posts/gingerbread.jpg'),
        user: USERS[2].user,
        likes: Math.floor(Math.random() * N),
        caption: 'Day 420 of life with humans: my human has made herself human-shaped   biscuits, but will not share them with me. I will now be chewing on her couch in protest. Signing off for the day, -Edgar',
        profile_picture: USERS[2].image,
        comments:[]
    }
]