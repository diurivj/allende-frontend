import * as types from './actionTypes';
import * as productServices from "../../services/productsServices";

//actions
const getProductsSuccess = (products) => ({
  type: types.GET_PRODUCTS,
  products
});

const getPromosSuccess = (promos) => ({
  type: types.GET_PROMOS,
  promos
});

//thunks
const loadProducts = () => (dispatch) => {
  productServices.getProducts()
  .then(products => {
    dispatch(getProductsSuccess(products));
  })
  .catch(e => console.log(e))
};

const loadPromos = () => (dispatch) => {
  productServices.getPromos()
  .then(promos => {
    dispatch(getPromosSuccess(promos));
  })
  .catch(e => console.log(e))
};

export const checkUser = () => (dispatch) => {
  if (!localStorage.getItem('user')) return;
  const user = JSON.parse(localStorage.getItem('user'));
  if(user.role === 'admin') {
    //admin actions
    dispatch(loadProducts());
    dispatch(loadPromos());
  } else {
    //dist actions
    console.log('it works?');
    //actions distribuidor



  }
};