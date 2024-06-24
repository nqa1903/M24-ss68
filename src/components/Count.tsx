import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, reset } from "../store/reducers/countReducer";

export default function Count() {
    const state:any = useSelector(state => state);
    const dispatch = useDispatch();
  return (
    <div>
        Câu 1 : Count
        <p>Giá trị count {state.count}</p>
        <button onClick={()=>dispatch(increase())}>Increase</button>
        <button onClick={()=>dispatch(decrease())}>decrease</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}
