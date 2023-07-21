import SideNavbarComponent from "../Components/General/SideNavbarComponent";
import StoryComponent from "../Components/User/StoryComponent";
import UserPostcomponent from "../Components/User/UserPostcomponent";
import SuggestedComponent from "../Components/General/SuggestedComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane} from '@fortawesome/free-solid-svg-icons'


const heart = <FontAwesomeIcon style={{width:"25px", height: "25px", marginRight: "7px", marginTop: "5px", marginBottom: "5px"}} icon={faHeart} />
const comment = <FontAwesomeIcon style={{width:"25px", height: "25px", marginRight: "7px", marginTop: "5px", marginBottom: "5px"}} icon={faComment} />
const send =<FontAwesomeIcon style={{width:"25px", height: "25px", marginRight: "7px", marginTop: "5px", marginBottom: "5px"}} icon={faPaperPlane} />

const arr = 
  [{
    "name": "Lotstring",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image5.jpg",
    "likes": 1024
  }, {
    "name": "Lotlux",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image2.jpg",
    friend:"Rishi_Neemkhedia",
    "likes": 210
    

  }, {
    "name": "Job",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image3.jpg",
    "likes": 2045

  }, {
    "name": "Duobam",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image1.jpg",
     friend:"nikkhill_prajapati",
    "likes": 102

  }, {
    "name": "Tresom",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image4.jpg",
    "likes": 42

  }, {
    "name": "Stim",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image3.jpg",
    friend:"Rahul_Rajbhar",
    "likes": 1001

  }, {
    "name": "Subin",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image4.jpg",
    friend:"",
    "likes": 222

  }, {
    "name": "Kanlam",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image2.jpg",
    "likes": 251

  }, {
    "name": "Zoolab",
    "profileImage": "../../images/sampleimage.png",
    "postImage": "../../images/image1.jpg",
    "likes": 2

  }]
const Home = () => {
  return (
    <div className="responsive-component" >
      <div style={{ display: "flex", alignItems: "center" }}>
        

        <div className="posts-component">
          <div style={{margin: "auto"}}><StoryComponent /></div>
          <div>
            {arr.map((key)=>{
              return <div class="card" style={{width : "500px", margin: "auto", border: "none", zIndex: "-1", zIndex: "-1"}}>
              <div style={{display: "flex", alignItems: "center", marginTop: "10px", width:"100%", height: "85px"}}>
             <img className="Story-Component2"src={key.profileImage}></img>
            <div>
             <div style={{display: "flex"}}>
             <p><b>{key.name}</b></p>
            <p style={{marginLeft: "7px"}}>.2h</p>
             </div>
           
            <p style={{lineHeight: "0", fontSize: "12px"}}>निखिल प्रजापति</p> 
            </div></div>
           <img src={key.postImage} class="card-img-top" alt="..."/>
           <div>
           <div style={{display: "flex"}}>
             {heart}
             {comment}
             {send}
           </div>
           {key.friend?<p class="card-text">Liked by <b>{key.friend?key.friend:""}</b> and <b>{key.likes-1} others</b></p>
           :
           <p class="card-text"><b>{key.likes} Likes</b></p>}
             
             <p class="card-text"> <b style={{marginRight: "5px"}}>its_piyushsharma20</b>Time to update your wardrobe with our all- new Oversized T-shirts collection 😍 Shop now, only from The Souled Store.</p>
             <input type="text" style = {{border: "none", width: "100%"}}id="disabledTextInput" placeholder="Add a comment"/>
           </div>
           <hr/>
         </div>;
            })}
            
          </div>
        </div>

        <div className="stickyComponent">
          <SuggestedComponent />
        </div>

      </div>
    </div>
  );
}

export default Home;
