import axios from "axios";
import React, { useState } from "react";
function Fund()
{
    var [data,setData]=useState({
        "acno":"",
        "pin":"",
        "amount":"",
        "tacno":""
    })
    var [msg,setMsg]=useState()
    function getInput(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }

    var getTransfer=async()=>{
        var res=await axios.get("http://localhost:3000/account")
        var dt=res.data.filter(item=>item.acno===data.acno && item.pin===data.pin)
        if(dt.length>0)
        {
            if(parseInt(dt[0].amount)>parseInt(data.amount))
            {
            console.log(dt)
            
            var dt1=res.data.filter(item=>item.acno===data.tacno)
                if(dt1.length>0)
                        {
                        var camt=parseInt(dt[0].amount)-parseInt(data.amount)
                        var tamt=parseInt(dt1[0].amount)+parseInt(data.amount)
                        console.log("Afer withdraw amount "+camt)
                        var id=dt[0].id
                        var d=dt[0]
                        var id1=dt1[0].id
                        var d1=dt1[0]
                        d.amount=camt
                        d1.amount=tamt
                        console.log("After Update object ")
                        console.log(d)
                        res=await axios.put(`http://localhost:3000/account/${id}`,d)
                        res=await axios.put(`http://localhost:3000/account/${id1}`,d1)


   /*Transaction record */
             var datetime=new Date().toLocaleString();
            var transdata={
            "acno":data.acno,
            "Des":"Transfer",
            "amount":data.amount,
            "date":datetime}
            await axios.post("http://localhost:3000/mytrans",transdata);
            transdata={
            "acno":data.tacno,
            "Des":"Recieve",
            "amount":data.amount,
            "date":datetime}
            
            console.log(transdata)

            await axios.post("http://localhost:3000/mytrans",transdata);
        /*Transaction record */






                        setMsg("After withdraw "+data.amount+" YOur Current blacne is = "+camt)
                        
                        }
                else
                        setMsg("Invalid Benificary account")

            }
            else
                setMsg("Insufficent blacne")

        }
        else
            setMsg("Invalid Account or Pin")
    }





    
    return(
        <div>
            <center><h1>Welcome to FundTransfer page</h1></center>
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
<input type="text" class="form-control" name="acno" onInput={(e)=>getInput(e)}/><br/>
Enter Pin  Number
<input type="text" class="form-control" name="pin" onInput={(e)=>getInput(e)}/><br/>
Enter Amount to transfer
<input type="text" class="form-control" name="amount" onInput={(e)=>getInput(e)}/>
<br/>
Enter Account to transfer
<input type="text" class="form-control" name="tacno" onInput={(e)=>getInput(e)}/>
<br/>
<input type="button" name="submit" value="Fund trsansfer" class="btn btn-success" onClick={()=>getTransfer()}/>

</div>
</div>
</div>
</div>
    )
}
export default Fund;
