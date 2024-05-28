import "./Card.css";
function Card(props){
    return(
    <>
        <div class="card">
            <div className="thumb">
            <img src={props.img} class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <div className='details'>
                    <a href='' className="text-decoration-none "><i class="fa-solid fa-user me-2 "></i>{props.author}</a>
                    <a href='' className="text-text-decoration-none "><i class="fa-regular fa-calendar me-2"></i>{props.date}</a>
                </div>
            </div>
            </div>
    </>
    )
} 
export default Card;