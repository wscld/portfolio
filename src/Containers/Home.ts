import { setProducts, setGithubRepos } from "../Reducers/actions"
import { connect } from 'react-redux'
import Home from "../Pages/Home"


const mapStateToProps = (state: any) => ({
    products: state.products,
    repos: state.repos
})

const mapDispatchToProps = (dispatch: any) => ({
    loadProducts: (products: any[]) => dispatch(setProducts(products)),
    loadRepos: (repos: any[]) => dispatch(setGithubRepos(repos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)