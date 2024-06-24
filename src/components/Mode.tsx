import { useDispatch, useSelector } from "react-redux";
import { change } from "../store/reducers/modeReducer";

export default function Mode() {
  const state: any = useSelector((state: any) => state);
  const dispatch = useDispatch();
  return (
    <div>
      Câu 4 : List Grid
      <br />
      <button onClick={() => dispatch(change())}>
        {state === "list" ? "Grid Mode" : "List mode"}
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state === "list" ? (
          <>
            <div style={{ width: "100%", marginBottom: "10px" }}>Item 1</div>
            <div style={{ width: "100%", marginBottom: "10px" }}>Item 2</div>
            <div style={{ width: "100%", marginBottom: "10px" }}>Item 3</div>
            <div style={{ width: "100%", marginBottom: "10px" }}>Item 4</div>
          </>
        ) : (
          <>
            <div style={{ width: "30%", marginBottom: "10px" }}>Item 1</div>
            <div style={{ width: "30%", marginBottom: "10px" }}>Item 2</div>
            <div style={{ width: "30%", marginBottom: "10px" }}>Item 3</div>
            <div style={{ width: "30%", marginBottom: "10px" }}>Item 4</div>
          </>
        )}
      </div>
    </div>
  );
}
