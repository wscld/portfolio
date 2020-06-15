
interface IState {
    products: any[],
    repos:any[]
}


const BLANK_STATE: IState = ({
    products: [],
    repos:[]
});

const reducer = (state = BLANK_STATE, action: any) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return Object.assign({}, state, {
                products: action.products
            })
        case "SET_GITHUB_REPOS":
            return Object.assign({}, state, {
                repos: action.repos
            })
        default:
            return state;
    }
}

export default reducer;