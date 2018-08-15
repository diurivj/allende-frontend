import React, {Component} from 'react';
import DistribuidorMenu from './MenuDistribuidor/DistribuidorMenu';
import DistribuidorRoutes from './MenuDistribuidor/DistribuidorRoutes';

class DistribuidorContainer extends Component{

   /* componentWillMount() {
        if(!localStorage.getItem('user')) this.props.history.push('/');
    }

    logOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        this.props.history.push('/')
    };
*/
    render(){
        return(
            <div style={{ display: 'flex'}}>
                <DistribuidorMenu />
                <DistribuidorRoutes/>
            </div>
        )
    }
}
//
// function mapStateToProps(state, ownProps){
//     return {
//         products: state.products
//     }
// }
//
// function mapDispatchToProps(dispatch){
//     return {
//         actions: bindActionCreators(productsActions, dispatch)
//     }
// }

export default DistribuidorContainer;