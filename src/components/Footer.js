import NavLinks from "./NavLinks";


function Footer(){
    return(
        <>
        <div className="container-fluid bg-primary text-white py-5">
          <div className="container">
             <div className="row">
                <div className="col-md-4">
                    <h2> About us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odio dolorem et minus quos nam voluptatem suscipit z</p>

                    <ul>
                      <li>Address: ................</li> 
                      <li>Phone:078xxxxxxxxx</li>
                      <li>Email:abc@gmail.com</li> 
                    </ul>
                </div>

                <div className="col-md-4">
                    <h4>Quick Links</h4>
                     <NavLinks/>
                </div>

                <div className="col-md-4">
                    <h4>Subscribe</h4>
                    <form>
                        <div className="input-group "></div>
                        <input type="email" className="form-control" placeholder='your email'/>
                        <button className="btn btn-warning">Subscribe</button>
                    </form>
                </div>
             </div>
          </div>
        </div>
        
        </>
    );
}
export default Footer;