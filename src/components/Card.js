import '../styles/Card.css';

function Card({character}) {
    return(
  <div>
     <div class="card card--fixedWidth">
  <div class="card__description">
    <div class="icon fa fa-flask card__descriptionIcon"></div>
    <div class="card__descriptionText"><img className="fillwidth" src={character.image}></img></div>
  </div>
  <div class="card__price">{character.name}</div>
</div>
</div>
        
    )
}

export default Card