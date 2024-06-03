import { createSlice , PayloadAction } from "@reduxjs/toolkit";
// import counter from '../../../pages/productDetailePage/ProductDetailePage'
// import { stat } from "fs/promises";

// interface IbuyCart{
//     count:number,
//     id:null | number
// }
interface IState{
    id : string|number,
    count : number
}
const initState : IState[] = []
const buyCartReducer = createSlice({
    name : "buyCartReducerx",
    initialState : initState,
    reducers: {
      
        // add: (state,action)=>{
        //     state.push({id : Date.now() , ...action.payload})
        // },
        // remove: (state,action)=>{
        //     state.pop()
        // }
        // const productListX = useContext(ProductListContext);
        // let buyCartX = useContext(BuyCartContext);
        // const params : any = useParams()
    
        // let [counter, setCounter] = useState<number>(0)
        // increasCounter : function increasCounter() {
        //     setCounter(counter += 1)
        //     return counter
        // }
        // decreaseCounter : function decreaseCounter() {
        //     setCounter(counter -= 1)
        //     return counter
        // }

        
        addBuyCart : function (state , action) {
            console.log(action.payload)
            console.log(state)
            const buyCartIndexFinder  = state.findIndex((item:any)  =>  item.id === action.payload.id);
           
            // if (buyCartIndexFinder === -1) {
            //     state.push({ id: action.payload.id , count : action.payload.count });
            //     console.log(state[0])
            // }
            // else {
                
             
            //     state[buyCartIndexFinder].count += action.payload.count
        
            // }
        },
        
        increasCounter :  function (state , action) {
            let icreaseCounterIndexFinder = state.findIndex(item => item?.id === action?.payload?.id)
            if(icreaseCounterIndexFinder === -1 ){
                state.push({id : action.payload.id , count:1 })
            }else{
                state[icreaseCounterIndexFinder].count +=1
                console.log(state)
            }
               

         },
         decreaseCounter :  (state , action) => {
            let icreaseCounterIndexFinder = state.findIndex(item => item?.id === action?.payload?.id)
            if(icreaseCounterIndexFinder === -1 ){
                state.push({id : action.payload.id , count:1 })
            }else{
                state[icreaseCounterIndexFinder].count -=1
                console.log(state)
            }
        }
        
         
    }
    
})

export const {addBuyCart , increasCounter , decreaseCounter } = buyCartReducer.actions

export default buyCartReducer.reducer