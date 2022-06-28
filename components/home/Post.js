import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {Divider} from 'react-native-elements'
import { TouchableOpacity } from 'react-native'


const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation='vertical'/>
      <Text style = {{color: 'white'}}></Text>
      <PostHeader post = {post}/>
      <PostImage post = {post}/>
      <View style = {{marginHorizontal: 10, marginTop: 10}}>
        <PostFooter/>
        <Likes post = {post}/>
        <Caption post = {post}/>
        <CommentSection post = {post}/>
        <Comments post = {post}/>
      </View>
    </View>
  )
}


const PostHeader = ({post}) => (
  <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 5}}>

    <View style = {{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
      <Image style = {styles.story} source = {post.profile_picture}/>
      <Text style={{color: 'white', marginLeft: 5, fontWeight: '700' }}>
        {post.user}
      </Text>
    </View>
    
    <Text style = {{color: 'white', fontWeight: '900'}}>...</Text>

  </View>
)


const PostImage = ({post}) => (
  <View style = {{width: '100%', height: 'auto'}}>
    <Image 
      source = {post.imageSrc}
      style = {{width:'100%', height: 400}}
    />
  </View>
)


const PostFooter = ({post}) =>(
  <View style = {{flexDirection: 'row'}}>
    <View style = {styles.leftFooterIcons}>
      <Icon imgStyle={styles.footerIcon} imgSrc = {PostFooterIcons[0].imageSrc}/>
      <Icon imgStyle={styles.footerIcon} imgSrc = {PostFooterIcons[1].imageSrc}/>
      <Icon imgStyle={styles.footerIcon} imgSrc = {PostFooterIcons[2].imageSrc}/>
    </View>

    <View style = {{flex: 1, alignItems: 'flex-end'}}>
      <Icon imgStyle={styles.footerIcon} imgSrc = {PostFooterIcons[3].imageSrc}/>
    </View>
  </View>
)


const Likes = ({post}) => (
  <View style = {{marginTop: 8}}>
    <Text style = {{color: 'white', fontWeight: '700'}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
)

const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style = {{color: 'white'}}>
      <Text style = {{fontWeight: '700'}}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
)


const CommentSection =({post}) => {
  if(!!post.comments.length){
    return (
      <View style = {{marginTop: 5}}>
        {post.comments.length && (
          <Text style= {{color: 'grey'}}>
            View{post.comments.length > 1 ? ' all '  : ' '}{post.comments.length > 1 ? post.comments.length : ''}{post.comments.length > 1 ? ' comments'  : 'comment'}
          </Text>)
        }
      </View> 
    )
  } else{
    return null
  }
}

const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key = {index} style = {{flexDirection: 'row', marginTop: 5}}>
        <Text style = {{color: 'white'}}>
          <Text style = {{fontWeight: '700'}}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
)


const Icon = ({imgStyle, imgSrc}) => (
  <TouchableOpacity>
    <Image style = {imgStyle} source = {imgSrc}/>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  story: {
      width: 35,
      height: 35,
      borderRadius: 100,
      marginRight: 5, 
      borderWidth: 1.6,
      borderColor: 'lime',
  },
  footerIcon: {
    width: 25,
    height: 25
  },

  leftFooterIcons: {
    flexDirection: 'row',
    width: '28%', 
    justifyContent: 'space-between',
  },
})


const PostFooterIcons = [
  {
    name: 'Like',
    imageSrc: require('../../assets/heart.png'),
    likedImageSrc: '../assets/liked.png'

  },
  {
    name: 'Comment',
    imageSrc: require('../../assets/comment.png')
  },
  {
    name: 'Share',
    imageSrc: require('../../assets/send.png')
  },
  {
    name: 'Save', 
    imageSrc: require('../../assets/save.png'),
    saveImageSrc: require('../../assets/save.png')
  }

]

export default Post