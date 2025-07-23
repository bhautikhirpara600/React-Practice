export const customMiddleware = ({getState, dispatch}) => (next) => (action) => {
    const BASE_URL = 'https://fakestoreapi.com'
    if(action.type === 'api/makeCall') {
        const { url, onStart, onLoad, onError } = action.payload
        dispatch({ type: onStart })
        fetch(`${BASE_URL}/${url}`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: onLoad, payload: data })
            }).catch((err) => {
                console.log(err);
                dispatch({ type: onError })
            })
    }
    next(action)
}