import './HeadContainer.css';
import Button from '../../button/Button'

function HeadCntainer() {
  return (
    <div className="headContainerBg">
       <div className='headContainer'>
         <h1 className="headContainerHeader">
         We Change Everything React.js
         </h1>
         <p className="headContainerText">
         This is the only React.js theme you will ever want to use.
         </p>
         <div className="btnContainer">
            <Button type="prpl-btn"/>
            <Button type="wht-btn" btnText="download now"/>
         </div>
       </div>
    </div>
  )
}

export default  HeadCntainer;