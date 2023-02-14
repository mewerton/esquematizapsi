import { team } from "../../dummydata";
import { Container } from "./styles";

export function TeamCard(){
    return(
        <Container>
           {team.map((val) => (
        <div className='items shadow' key={val.id}>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-whatsapp icon'></i>
              <i className='fab fa-instagram icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
        </Container>
    )

}