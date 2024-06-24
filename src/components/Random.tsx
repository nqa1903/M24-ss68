import { useDispatch, useSelector } from "react-redux"
import { add, reset1 } from "../store/reducers/randomReducer";
import { reset } from "../store/reducers/countReducer";

export default function Random() {
    const state:any = useSelector(state=>state);
    const dispatch = useDispatch();
  return (
    <div>
      Câu 2 : Random Number
      <p>List Number [{state.random.join(", ")}]</p>
      <button onClick={()=>dispatch(add())}>Random Number</button>
      <button onClick={()=>dispatch(reset1())}>Reset</button>
    </div>
  )
}
