import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const facebookicon = <FontAwesomeIcon className='iconCss' icon={faFaceGrinHearts} style={{ color: "#254b8d", }} />

const LoginPage = () => {
    return (
        <div>
            <div class="card" style={{ width: "350px", height: "450px", margin: "auto", alignItems: "center", marginTop: "15px" }}>
                <img style={{ width: "250px", height: "110px" }} src="../../images/cover.png" class="card-img-top" alt="..." />
                <input style={{ width: "75%", fontSize: "12px", marginTop: "10px" }} type="email" class="form-control" placeholder="Phone number, username, or email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <input style={{ width: "75%", fontSize: "12px", marginTop: "10px" }} type="email" class="form-control" placeholder="Password" id="exampleInputEmail1" aria-describedby="emailHelp" />
               
                <Link style={{ width: "75%", marginTop: "20px"}} to = "/home">
                <button style={{ width: "100%", color: "white", fontWeight: "bold" }}  type="button" class="btn btn-info">Log in</button>
                </Link>
                


                <ul style={{ display: "flex", marginTop: "20px", listStyleType: "none", alignItems: "center", width: "100%", marginLeft: "57px" }}>
                    <li> <h4 style={{ borderColor: "grey", borderBottom: "1px solid black", width: "100px" }}></h4></li>
                    <li><h6 style={{ width: "37px", padding: "5px", color: "grey" }}>OR</h6></li>
                    <li><h4 style={{ borderColor: "grey", borderBottom: "1px solid black", width: "100px" }}></h4></li>
                </ul>

                <div style={{ display: "flex" }}>
                    {facebookicon}
                    <p style={{ marginLeft: "6px", fontWeight: "bold", fontSize: "15px", color: "#254b8d" }}>Log in with Facebook</p>
                </div>
                <div><p style={{ fontSize: "17px" }}>Forgot Password?</p></div>



            </div>
            <div class="card" style={{ width: "350px", height: "60px", margin: "auto", alignItems: "center", marginTop: "15px" }}>
                <div style={{ display: "flex", margin: "auto", alignItems: "center" }}>
                    <p style={{ fontSize: "17px" }}>Don't have an account? </p><p style={{ marginLeft: "6px", fontWeight: "bold", fontSize: "15px", color: "#254b8d" }} > <a style = {{textDecoration: "none"}} href='/Signup'>Sign up</a></p>
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
export default LoginPage;