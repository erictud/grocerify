import { useAppContext } from "../context/appContext";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

export default function Alert() {
  const { alertType, alertText } = useAppContext();
  return (
    <div className={`alert ${alertType}`}>
      {alertType === "success" ? <TiTick /> : <AiOutlineExclamationCircle />}
      <p>{alertText}</p>
    </div>
  );
}
