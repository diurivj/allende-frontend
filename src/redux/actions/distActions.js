import * as types from './actionTypes';
import * as distServices from '../../services/distServices';


//thunk Load Distributors


//action
const getDisrtribuidoresSuccess=(distri)=>{
    return {type: types.GET_DISTS, distri}
}

//thunk
export const getDistri = () => (dispatch) => {

    distServices.getDists()
    .then(distri=>{
        console.log(distri);
        dispatch(getDisrtribuidoresSuccess(distri));
    })
    .catch(e => console.log(e))
};



const addDistSuccess = (distribuidor) => (
    {type: types.NEW_DIST_SUCCESS, distribuidor}
)

export const addDistri = (obj) => (dispatch) => {
    return distServices.newDist(obj)
    .then(distribuidor => {
        dispatch(addDistSuccess(distribuidor));
    })
    .catch(e=>console.log(e))
}
