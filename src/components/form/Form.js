import {personnages} from '../../data/personnages.js'

export const Form = (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const selectedHero = personnages.find(personnage => personnage.id === parseInt(e.target.lockHero.value))
        props.setHero(selectedHero)
        console.log(selectedHero)
        alert(`Vous avez choisi ${selectedHero}`)
    }
    
    return(
            <form onSubmit={handleSubmit}>
                <label htmlFor="select">Choisissez un personnage</label>
                
                <select defaultValue={props.hero.id} name="select">
                    {personnages.map((e, i) =>{
                        return(
                                <option key={i} value={e.id}>{e.breed}</option>
                            )
                    })}
                </select>
                <input type="submit" value="Je veux me battre"></input>
            </form>
        )
}