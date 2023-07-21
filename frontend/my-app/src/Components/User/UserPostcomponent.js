import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane} from '@fortawesome/free-solid-svg-icons'


const heart = <FontAwesomeIcon style={{width:"25px", height: "25px", marginRight: "7px", marginTop: "5px", marginBottom: "5px"}} icon={faHeart} />
const comment = <FontAwesomeIcon style={{width:"25px", height: "25px", marginRight: "7px", marginTop: "5px", marginBottom: "5px"}} icon={faComment} />
const send =<FontAwesomeIcon style={{width:"25px", height: "25px", marginRight: "7px", marginTop: "5px", marginBottom: "5px"}} icon={faPaperPlane} />




const UserPostcomponent = () => {
    return (
        <div><div class="card" style={{width : "500px", margin: "auto", border: "none", zIndex: "-1", zIndex: "-1"}}>
           <div style={{display: "flex", alignItems: "center", marginTop: "10px", width:"100%", height: "85px"}}>
          <img className="Story-Component2"src="../../images/sampleimage.png"></img>
         <div>
          <div style={{display: "flex"}}>
          <p><b>nikkhill_prajapati</b></p>
         <p style={{marginLeft: "7px"}}>.2h</p>
          </div>
        
         <p style={{lineHeight: "0", fontSize: "12px"}}>निखिल प्रजापति</p> 
         </div></div>
        <img src="../../images/image5.jpg" class="card-img-top" alt="..."/>
        <div>
        <div style={{display: "flex"}}>
          {heart}
          {comment}
          {send}
        </div>
          <p class="card-text">Liked by <b>its_piyushsharma20</b> and <b>8,091 others</b></p>
          <p class="card-text"> <b style={{marginRight: "5px"}}>its_piyushsharma20</b>Time to update your wardrobe with our all- new Oversized T-shirts collection 😍 Shop now, only from The Souled Store.</p>
          <input type="text" style = {{border: "none", width: "100%"}}id="disabledTextInput" placeholder="Add a comment"/>
        </div>
        <hr/>
      </div>
      {/* <div class="card" style={{width : "500px", margin: "auto", border: "none", zIndex: "-1"}}>
        <img src="../../images/image1.jpg" class="card-img-top" alt="..."/>
        <div >
          <div style={{display: "flex"}}>
          {heart}
          {comment}
          {send}
        </div>
          <p class="card-text">Liked by <b>its_piyushsharma20</b> and <b>8,091 others</b></p>
          <p class="card-text"> <b style={{marginRight: "5px"}}>its_piyushsharma20</b>Time to update your wardrobe with our all- new Oversized T-shirts collection 😍 Shop now, only from The Souled Store.</p>
          <input type="text" style = {{border: "none", width: "100%"}}id="disabledTextInput" placeholder="Add a comment"/> 
        </div>
        <hr/>
      </div>
      <div class="card" style={{width : "500px", margin: "auto", border: "none", zIndex: "-1"}}>
        <img src="../../images/image2.jpg" class="card-img-top" alt="..."/>
        <div>
          <div style={{display: "flex"}}>
          {heart}
          {comment}
          {send}
        </div>
          <p class="card-text">Liked by <b>its_piyushsharma20</b> and <b>8,091 others</b></p>
          <p class="card-text"> <b style={{marginRight: "5px"}}>its_piyushsharma20</b>Time to update your wardrobe with our all- new Oversized T-shirts collection 😍 Shop now, only from The Souled Store.</p>
          <input type="text" style = {{border: "none", width: "100%"}}id="disabledTextInput" placeholder="Add a comment"/> 
        </div>
        <hr/>
      </div>
      <div class="card" style={{width : "500px", margin: "auto", border: "none", zIndex: "-1"}}>
        <img src="../../images/image3.jpg" class="card-img-top" alt="..."/>
        <div>
          <div style={{display: "flex"}}>
          {heart}
          {comment}
          {send}
        </div>
          <p class="card-text">Liked by <b>its_piyushsharma20</b> and <b>8,091 others</b></p>
          <p class="card-text"> <b style={{marginRight: "5px"}}>its_piyushsharma20</b>Time to update your wardrobe with our all- new Oversized T-shirts collection 😍 Shop now, only from The Souled Store.</p>
          <input type="text" style = {{border: "none", width: "100%"}}id="disabledTextInput" placeholder="Add a comment"/>          
        </div>
        <hr/>
      </div>
      <div class="card" style={{width : "500px", margin: "auto", border: "none", zIndex: "-1"}}>
        <img src="../../images/image4.jpg" class="card-img-top" alt="..."/>
        <div >
          <div style={{display: "flex"}}>
          {heart}
          {comment}
          {send}
        </div>
          <p class="card-text">Liked by <b>its_piyushsharma20</b> and <b>8,091 others</b></p>
          <p class="card-text"> <b style={{marginRight: "5px"}}>its_piyushsharma20</b>Time to update your wardrobe with our all- new Oversized T-shirts collection 😍 Shop now, only from The Souled Store.</p>
          <input type="text" style = {{border: "none", width: "100%"}}id="disabledTextInput" placeholder="Add a comment"/>          
        </div>
        <hr/>
      </div> */}
      </div>
        
    );
}

export default UserPostcomponent;
