import axios from "axios";
import React, { useState } from "react";
function Balance()
{
    var [data,setData]=useState({
        "acno":"",
        "pin":"",
        
    })
    var [msg,setMsg]=useState()
    function getInput(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }

    var getbalance=async()=>{
        var res=await axios.get("http://localhost:3000/account")
        var dt=res.data.filter(item=>item.acno===data.acno && item.pin===data.pin)
        if(dt.length>0)
        {
            
               setMsg("Your Current Balance id"+dt[0].amount)

            }
           

       
        else
            setMsg("Invalid Account or Pin")
    }





    
    return(
        <div>
            <center><h1>Welcome to Balance Enquiry page</h1></center>
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
<input type="text" class="form-control" name="pin" onInput={(e)=>getInput(e)}/><br />

<input type="button" name="submit" value="Balance" class="btn btn-success" onClick={()=>getbalance()}/>

</div>
</div>
</div>
</div>
    )
}
export default Balance;
