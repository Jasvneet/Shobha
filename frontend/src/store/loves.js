import csrfFetch from './csrf';

export const RECEIVE_LOVES = 'loves/RECEIVE_LOVES'
export const RECEIVE_LOVE = 'loves/RECEIVE_LOVE'
export const REMOVE_LOVE = 'loves/REMOVE_LOVE'

export const receiveLoves = (loves) => ({
    type: RECEIVE_LOVES, 
    loves
})

export const receiveLove = (love) => ({
    type: RECEIVE_LOVE, 
    love
})

export const removeLove = (loveId) => ({
    type: REMOVE_LOVE, 
    loveId
})

export const fetchLoves = () => async(dispatch) => {
    const response = await csrfFetch(`/api/loves`)

    if (response.ok) {
        const loves = await response.json();
        // debugger
        dispatch(receiveLoves(loves))
    }
}

export const deleteLove = (loveId) => async(dispatch) => {
    const response = await csrfFetch(`/api/loves/${loveId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(removeLove(loveId))
    }
}

export const createLove = (love) => async(dispatch) => {
  
    const response = await csrfFetch(`/api/loves`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({love})
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveLove(data.love))
    }
}

export default function lovesReducer(state = {}, action) {
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_LOVES:
            return {...action.loves};
        case RECEIVE_LOVE:
            // debugger
            if (action.love) {
                return { ...state, [action.love.id]: action.love };
              }
              return state; 
        case REMOVE_LOVE:
            const loveId = action.loveId
            delete newState[loveId]
            return newState
        default:
            return state;
    }

}