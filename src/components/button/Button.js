import './Button.css';

export default function Button(props) {
  let btnType=`btn ${props.type}`
  return (
     <button className={btnType}>{props.btnText || "Read more"}</button>
  )
}
