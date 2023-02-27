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
              <a href={val.whats} target="_blank"><i className="fab fa-whatsapp icon"></i></a>
              <a href={val.insta} target="_blank"><i className="fab fa-instagram icon"></i></a> 
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