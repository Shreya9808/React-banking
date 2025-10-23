import React, { useState } from 'react'
import axios from 'axios'

var Createacc = () => {
  
    var [account, setAccount] = useState({
        "acno":"",
        "pin":"",
        "name":"",
        "fname":"",
        "email":"",
        "phone":"",
        "gender":"",
        "country":"",
        "state":"",
        "city":"",
        "amount":""
        
        
    })

    var [msg,setMsg]=useState()
 

    function getinput(e){
        setAccount({...account,[e.target.name]:e.target.value})
    }

    async function Caccount(){
        var res= await axios.get("http://localhost:3000/account")
        var x=res.data.length
        var ac="SBI"
        if (x>0)
        {
            x=x+101
            ac=ac+x

        }
        else
            ac="SBI101"


        account.acno=ac

        console.log(account)
       await axios.post("http://localhost:3000/account",account)
      
       setMsg("Accout successfully created with accout number",+ac)


       

        
        
    }

  return (
    <div>
        
        <center style={{marginTop:'20px',marginBottom:'20px'}}>
            <h1>OPEN YOUR ACCOUNT PAGE</h1>
            
        </center>
        <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div style={{border:'2px solid black',padding:'20px',borderRadius:'10px'}}>
                    <div className='alert alert-success' role="alert">
                        <h3>{msg}</h3>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            Enter Pin:
                            <input type='text' className='form-control'    onInput={(e)=>getinput(e)} name="pin"></input>
                        </div>
                    </div>

                    <div className='row' >
                        <div className='col'>
                             Enter Name:
                            <input type='text'    onInput={(e)=>getinput(e)} className='form-control'name="name"></input>
                        </div>
                        <div className='col'>
                             Enter FName:
                            <input type='text'    onInput={(e)=>getinput(e)} className='form-control' name="fname"></input>
                        </div>
                    </div>

                    <div className='row' >
                        <div className='col'>
                             Enter Email:
                            <input type='text'    onInput={(e)=>getinput(e)} name="eamil" className='form-control'></input>
                        </div>
                        <div className='col'>
                             Enter Phonenumber:
                            <input type='text'    onInput={(e)=>getinput(e)} name="phone" className='form-control'></input>
                        </div>
                    </div>

                     <div className='row'>
                        <div className='col'>
                            Enter Gender:
                            <input type='text'    onInput={(e)=>getinput(e)} name="gender" className='form-control'></input>
                        </div>
                    </div>

                     <div className='row' >
                        <div className='col'>
                             Enter Country:
                            <input type='text'   onInput={(e)=>getinput(e)}  name="country "className='form-control'></input>
                        </div>
                        <div className='col'>
                             Enter State:
                            <input type='text'    onInput={(e)=>getinput(e)} name="state" className='form-control'></input>
                        </div>
                        <div className='col'>
                             Enter City:
                            <input type='text'    onInput={(e)=>getinput(e)} name="city" className='form-control'></input>
                        </div>
                    </div>

                     <div className='row' >
                        <div className='col'>
                             Enter Opening Balance:
                            <input type='text'    onInput={(e)=>getinput(e)} name="amount" className='form-control'></input>
                        </div>
                       
                    </div>
                    <input type='button' name="submit" className='btn btn-primary' value='Create Account' style={{marginTop:'10px'}} onClick={()=>Caccount()}></input>

                    
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            </div>
                    </div>

                </div>
            </div>


        
      
    
  )
}

export default Createacc
