import { createContext, useEffect, useReducer } from "react";

// let initialState = []

// initialState = [
//     {
//         userId: "1",
//         title: "Going to Goa",
//         body: "Left behind the hustle of the city… now it's just ocean breeze, golden sunsets, and peace.",
//         tags: ["GoaDiaries", "SunsetAndSoul", "TravelMoodOn"],
//         reactions: 29
//     },
//     {
//         userId: "2",
//         title: "Going to Junagadh",
//         body: "Heading to the timeless peaks of Girnar… where every step feels like a whisper from the divine.",
//         tags: ["DivineTrek", "SacredSummits", "MountainMeditation"],
//         reactions: 35
//     }
// ]

export const PostListContext = createContext({
    postListData: [],
    addPost: () => { },
    deletePost: () => { },
    searchPost: () => { }
})

const reducer = (currentState, action) => {
    let newState = currentState
    if (action.type === "post/add") {
        newState = [action.payload, ...currentState]
    } else if (action.type === "post/delete") {
        newState = currentState.filter(post => post.title !== action.payload.postTitle)
    } else if (action.type === "post/search") {
        newState = currentState.filter(post => post.title.toLowerCase().includes(action.payload.postTitle))
    } else if (action.type === "post/init") {
        newState = [...action.payload]
    }
    return newState
}

const PostListContextProvider = ({ children }) => {

    const [postListData, dispatch] = useReducer(reducer, [])

    const addPost = ({ userId, title, body, tags, reactions }) => {
        dispatch({
            type: "post/add",
            payload: { userId, title, body, tags, reactions }
        })
    }

    const deletePost = (postTitle) => {
        dispatch({
            type: "post/delete",
            payload: { postTitle }
        })
    }

    const searchPost = (postTitle) => {
        dispatch({
            type: "post/search",
            payload: { postTitle: postTitle.toLowerCase() }
        })
    }

    const initPost = (postInit) => {
        dispatch({
            type: "post/init",
            payload: postInit
        })
    }

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => initPost(data.posts))
    }, [])

    return (
        <PostListContext.Provider value={{ postListData, addPost, deletePost, searchPost }}>
            {children}
        </PostListContext.Provider>
    )
}

export default PostListContextProvider