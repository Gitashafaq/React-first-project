
import NavLinks from "./NavLinks";
function Nav(){
    return(
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/*LINKS HERE */}
               <NavLinks/>
                <div>
                    <a href="" className="text-decoration-none "><i class="fa-solid fa-user me-2"></i>Create Account</a>
                </div>
                
                </div>
            </div>
            </nav>
        </>
    )
}
export default Nav;