import { useNavigate } from "react-router-dom";

export default function MichaelButton(){ 
    
const navigate=useNavigate();
function onClickMichaelHandler(){
  navigate("/");
}
    return <div>
        <button onClick={onClickMichaelHandler}>Michael</button>
    </div>
}