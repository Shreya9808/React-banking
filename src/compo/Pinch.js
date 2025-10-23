import axios from "axios";
import React, { useState } from "react";
function Pinch()
{
    var [data,setData]=useState({
        "acno":"",
        "pin":"",
        "newpin":""
    })
    var [msg,setMsg]=useState()
    function getInput(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }

    var getWith=async()=>{
        
        var res=await axios.get("http://localhost:3000/account")
        var dt=res.data.filter(item=>item.acno===data.acno && item.pin===data.pin)
        if(dt.length>0)
        {
            
               
                var id=dt[0].id
                var d=dt[0]
                d.pin=data.newpin
                console.log("After Update object ")
                console.log(d)
        res=await axios.put(`http://localhost:3000/account/${id}`,d)
        setMsg("Your new pin is = "+d.pin)

            }
           

       
        else
            setMsg("Invalid Account or Pin")
    }





    
    return(
        <div>
            <center><h1>Welcome to Pin page</h1></center>
            <br/>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div style={{border:'2px solid black',padding:'20px',borderRadius:'10px'}}>
                <div class="alert alert-success" role="alert">
                <h3>{msg}</h3>
                </div>
                <hr/>
Enter Account Number
<input type="text" class="form-control" name="acno" onInput={(e)=>getInput(e)}/>
Enter Pin  Number
<input type="text" class="form-control" name="pin" onInput={(e)=>getInput(e)}/>
Enter Newpin
<input type="text" class="form-control" name="newpin" onInput={(e)=>getInput(e)}/>
<br/><br/>
<input type="button" name="submit" value="Pinchange" class="btn btn-success" onClick={()=>getWith()}/>

</div>
</div>
</div>
</div>
    )
}
export default Pinch;
