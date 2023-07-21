import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons'

const facebookicon = <FontAwesomeIcon className='iconCss' icon={faFaceGrinHearts} style={{ color: "#254b8d", }} />


const SignUpPage = () => {
    return (
        <div>
            <div class="card" style={{ width: "350px", height: "650px", margin: "auto", alignItems: "center", marginTop: "15px" }}>
                <img style={{ width: "250px", height: "110px" }} src="../../images/cover.png" class="card-img-top" alt="..." />
                <div style={{width: "75%"}}><p style={{ fontWeight: "bold", color:"grey"}}>Sign up to see photos and videos from your friends.</p></div>


                <button style={{ width: "75%", color: "white", backgroundColor: "#254b8d" }} type="button" class="btn btn">Log in with Facebook</button>
                
                <ul style={{ display: "flex", listStyleType: "none", alignItems: "center", width: "100%", marginLeft: "45px" }}>
                    <li> <h4 style={{ borderColor: "grey", borderBottom: "1px solid black", width: "100px" }}></h4></li>
                    <li><h6 style={{ width: "37px", padding: "5px", color: "grey" }}>OR</h6></li>
                    <li><h4 style={{ borderColor: "grey", borderBottom: "1px solid black", width: "100px" }}></h4></li>
                </ul>

                
                
                <input style={{ width: "75%", fontSize: "12px", marginTop: "2px" }} type="email" class="form-control" placeholder="Mobile Number or Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <input style={{ width: "75%", fontSize: "12px", marginTop: "10px" }} type="email" class="form-control" placeholder="Full Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <input style={{ width: "75%", fontSize: "12px", marginTop: "10px" }} type="email" class="form-control" placeholder="Username" id="exampleInputEmail1" aria-describedby="emailHelp" />

                <input style={{ width: "75%", fontSize: "12px", marginTop: "10px" }} type="email" class="form-control" placeholder="Password" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div style={{justifyContent: "center"}}></div>
                <p style={{fontSize: "12px", marginTop: "20px", width: "75%", color : "grey"}}>People who use our service may have uploaded your contact information to Instagram.</p>

                <p style={{fontSize: "12px", marginTop: "10px", width: "75%", color : "grey"}}>By signing up, you agree to our <h10 style={{color:"#254b8d"}}>Terms</h10>  ,<h10 style={{color:"#254b8d"}}>Privacy Policy</h10> and <h10 style={{color:"#254b8d"}}>Cookies Policy</h10>.</p>

                

                <button style={{ width: "75%", marginTop: "20px", color: "white", fontWeight: "bold" }} type="button" class="btn btn-info">Sign up</button>

            </div>
            <div class="card" style={{ width: "350px", height: "60px", margin: "auto", alignItems: "center", marginTop: "15px" }}>
                <div style={{ display: "flex", margin: "auto", alignItems: "center" }}>
                    <p style={{ fontSize: "17px" }}>Have an account? </p><p  style={{ marginLeft: "6px", fontWeight: "bold", fontSize: "15px", color: "#254b8d",  }} ><a  style = {{textDecoration: "none"}} href='/Login'>Log in</a></p>
                </div>
            </div>

            <div class="card" style={{ margin: "auto", alignItems: "center", border: "none", marginTop: "10px" }}>
                <p>Get the app.</p>
                <div style={{ display: "flex" }}>
                    <img style={{ height: "40px", width: "120px", marginRight: "5px" }} src='../../images/google play store.png' alt='nothing to preview'></img>
                    <img style={{ height: "40px", width: "120px" }} src='../../images/microsoft.png' alt='nothing to preview'></img>
                </div>
            </div>
            <div class="card" style={{ margin: "auto", alignItems: "center", border: "none", marginTop: "60px" }}>
                <div style={{ display: "flex", listStyleType: "none" }}>
                   <li style={{padding: "7px", fontSize:"12px"}}>Meta</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>About</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Blog</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Jobs</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Help</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>API</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Privacy</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Terms</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Top Accounts</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Locations</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Instagram Lite</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Contact Uploading & Non-Users</li>
                   <li style={{padding: "7px", fontSize:"12px"}}>Meta Verified</li>
                </div>
                <p>&copy; 2023 Instagram from Meta</p>
            </div>
        </div>

    );
}
export default SignUpPage;