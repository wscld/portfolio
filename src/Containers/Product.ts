import { connect } from 'react-redux'
import Product from "../Pages/Product"
import { setProducts } from '../Reducers/actions'

const mapStateToProps = (state: any) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch: any) => ({
    loadProducts: (products: any[]) => dispatch(setProducts(products))
})


export default connect(mapStateToProps, mapDispatchToProps)(Product)