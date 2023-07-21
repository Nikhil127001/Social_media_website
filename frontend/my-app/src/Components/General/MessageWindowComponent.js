const MessageWindowComponent = (props) => {
    const {messagewindow} = props;
    
return (
    <div style={{display: !messagewindow?"none":"block", height: "400px", width: "400px", backgroundColor: "white", position: "absolute", marginLeft: "75px", top: "0px", height: "725px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", zIndex: "2" ,   boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
 }}>
    <div style={{width: "95%", margin: "auto", height: "95%", marginTop: "10px"}}>
    <h4>Messages</h4>
    <input style={{marginTop: "30px"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search"/>

    </div>
      </div>
);
}
export default MessageWindowComponent;