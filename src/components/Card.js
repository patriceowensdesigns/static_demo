
import pokemon from '../assets/demo.png'
// Function name matches file name
const Card = () => {
    // return must have one parent element
    const styles = {
        card: {
            "min-width": "100px",
            "max-width": "250px"
        },
        img: {
            "margin": "auto",
            "margin-top": "20px",
            "max-width": "100px",
            "max-height": "100px"
        }
    }
    return (
        <div className="card" style={styles.card}>
                <img src={pokemon} className="img-thumbnail"
                    style={styles.img}  alt="..." />
                <div className="card-body  text-center">
                    <h5 className="card-title">Bulbasaur</h5>
                    <p className="card-text">Type - Grass</p>
                    <a href="#" className="btn btn-primary">Abilities</a>
                </div>
        </div>

    )
}

// Makes it available for import
export default Card;