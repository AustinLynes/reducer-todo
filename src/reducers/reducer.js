export const initalState = [
    {
        item: 'learn reducers',
        completed: false,
        id: 101
    }

]
export function reducer(state, action) {
    const handleRemove = () =>{
        let newState = state.slice();
        newState.splice(action.index, 1)
        return newState;
    }
    switch (action.type) {
        case 'ADD_TO_LIST':
            return [...state.slice(0, action.index), action.payload];
        case 'REMOVE_FROM_LIST':
            return handleRemove();
        default:
            return state;
    }
}
