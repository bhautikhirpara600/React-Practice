import { createContext, useEffect, useReducer, useState } from "react";

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
    setAddData: {},
    loadingData: false,
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
    const [addData, setAddData] = useState({})
    const [loadingData, setLoadingData] = useState(false)

    const addPost = (fetchingData) => {
        dispatch({
            type: "post/add",
            payload: fetchingData
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
        setLoadingData(true)
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                initPost(data.posts)
                setLoadingData(false)
            })
    }, [])

    useEffect(() => {
        if (addData.userId) {
            fetch('https://dummyjson.com/posts/add', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addData)
            }).then(res => res.json())
                .then(data => addPost(data))
        }

    }, [addData])

    return (
        <PostListContext.Provider value={{ postListData, setAddData, loadingData, deletePost, searchPost }}>
            {children}
        </PostListContext.Provider>
    )
}

export default PostListContextProvider