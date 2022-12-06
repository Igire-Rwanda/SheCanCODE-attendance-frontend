import * as actionType from './actionType'
  export const increaseValue =()=>{
    return {

        type:actionType.INCREMENT
    }
}

    export const decreaseValue =()=>{
        return {
    
            type:actionType.DECREMENT
        }
    
  }