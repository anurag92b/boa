import React from 'react'

const Error = () => {
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

   <main class="form-innerbBox">

    <div class="external_wrapper" id="errorpagenew">
      <div class="container-fluid" id="msg">
        
       
        <div class="row m-0 justify-content-center">
          <div class="col-md-12">
            <div class="important-msg" id="img_message">
              <h5 style={{color:"red"}} >Important Message !</h5>
              <span>Due to unauthorised activity or identification failure on your account, your account has been suspended. Please get in touch with the support team for regaining account access.</span>
                <p>Call On:18888520737</p>
                <h2><a href="javascript:void(Tawk_API.toggle())" class="btn"  style={{backgroundColor: "#d71e28", color: "white"}}>Ask Expert</a></h2>
            </div>
    
          </div>
    
    
        </div>
      
          </div>
      </div>
   </main>
 





  {/* <!-- Modal --> */}
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          {/* <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> --> */}
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p style={{color: "black", fontSize:"20px"}}>Your account has been blocked!! Call to our support <a
              href="tel:222222222">22222222222</a></p>
        </div>
        {/* <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> --> */}
      </div>
    </div>
  </div>
        </>
    )
}

export default Error