import {Form} from './components/form/Form.js'
import {useState} from 'react'
import {useEffect} from 'react'
import {personnages} from './data/personnages.js'

function App () {
    
    const[hero, setHero] = useState(personnages[0])
    const[heros, setHeros] = useState(personnages[0])
    return(
            <div className="App">
                <Form hero={hero} setHero={setHero}/>
            </div>
        )
}

export default App;