import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../store/reducers/toggleReducer";

export default function Toggle() {
    const state:any = useSelector((state:any)=>state.toggle);
    const dispatch = useDispatch();
  return (
    <div>
        Câu 3 : Light Dark
        <div style={{width:"200px", height:"200px" , backgroundColor: state?"wheat" : "black"}}>
            <button onClick={()=>dispatch(toggle())}>{state===true?"Light":"Dark"}</button>
        </div>
    </div>
  )
}
