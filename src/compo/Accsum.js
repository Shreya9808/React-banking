import axios from "axios";
import React, { useState } from "react";
function AccSum()
{


        var [data,setData]=useState({
        "acno":"",
        "pin":"",
        
    })
    var [tran,setTrans]=useState([])
    var [msg,setMsg]=useState()
    function getInput(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }

    var getSumery=async()=>{
        var res=await axios.get("http://localhost:3000/account")
    console.log(res.data)
        var dt=res.data.filter(item=>item.acno===data.acno && item.pin===data.pin)
    console.log(dt)
        if(dt.length>0)
        {

            var res1=await axios.get("http://localhost:3000/mytrans")
            var dt=res1.data.filter(item=>item.acno=data.acno)
            console.log(dt)
            setTrans(dt)
        }
        else
            setMsg("Invalid Account or Pin")
   
   
        }


    return(
        <div>
            <center><h1>Welcome to Account Summary Page</h1></center>
            <br/>
<div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-5">
                            <hr/>
                <div class="alert alert-success" role="alert">
                <h3>{msg}</h3></div>
            <hr/>

            Enter Account Number
<input type="text" className="form-control" name="acno" onInput={(e)=>getInput(e)}/>
Enter Pin  Number
<input type="text" className="form-control" name="pin"  onInput={(e)=>getInput(e)}/>

<br/><br/>
<input type="button" name="submit" value="Show" className="btn btn-success" onClick={()=>getSumery()}/>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-4" style={{"border":"2px solid blue","padding":"20px"}}>

            <table className="table table-bordered table-striped table-hover table-dark">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Account</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td>Descr</td>
                    </tr>

                    {
                        tran.map(row=>

                            <tr>
                        <td>{row.id}</td>
                        <td>{row.acno}</td>
                        <td>{row.amount}</td>
                        <td>{row.date}</td>
                        <td>{row.Des}</td>
                    </tr>
                    
                        )
                    }
                </tbody>
            </table>
        </div>

        </div>
        </div>
    )
}
export default AccSum;
