import axios from "axios";
import React, { useState } from "react";
function Deposit()
{
    var [data,setData]=useState({
        "acno":"",
        "pin":"",
        "amount":""
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
            
                var camt=parseInt(dt[0].amount)+parseInt(data.amount)
                console.log("Afer withdraw amount "+camt)
                var id=dt[0].id
                var d=dt[0]
                d.amount=camt
                console.log("After Update object ")
                console.log(d)
        res=await axios.put(`http://localhost:3000/account/${id}`,d)

                /*Transaction record */
             var datetime=new Date().toLocaleString();
            var transdata={
            "acno":data.acno,
            "Des":"Deposit",
            "amount":data.amount,
            "date":datetime}
            await axios.post("http://localhost:3000/mytrans",transdata);
                 /*Transaction record */




        setMsg("After withdraw "+data.amount+" YOur Current blacne is = "+camt)

            }
           

       
        else
            setMsg("Invalid Account or Pin")
    }





    
    return(
        <div>
            <center><h1>Welcome to Deposit page</h1></center>
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
Enter Amount to Deposit
<input type="text" class="form-control" name="amount" onInput={(e)=>getInput(e)}/>
<br/><br/>
<input type="button" name="submit" value="Deposit" class="btn btn-success" onClick={()=>getWith()}/>

</div>
</div>
</div>
</div>
    )
}
export default Deposit;
