import {getDists, newDist} from "../../services/distServices";
import * as types from './actionTypes';


//thunk Load Distributors
//action
const getDisrtribuidoresSuccess=(distri)=>{
    return {type: types.GET_DISTS, distri}
}

//thunk
export const getDistri = () => (dispatch) => {

    getDists()
        .then(distri=>{
            console.log(distri);
            dispatch(getDisrtribuidoresSuccess(distri));
        })
        .catch(e => console.log(e))
};



const addDistSuccess=(distribuidor)=>{
    return {type:types.NEW_DIST_SUCCESS,distribuidor}
}

export const addDistri = (obj) => (dispatch) => {
    newDist(obj)
        .then(distribuidor =>{
            dispatch(addDistSuccess(distribuidor));
        })
        .catch(e=>console.log(e))
}
