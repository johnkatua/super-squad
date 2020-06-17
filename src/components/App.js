import React, {Component} from 'react';
import CharacterList from './CharacterList'
import '../styles/index.css';
import HeroList from './HeroList';
import SquadStats from '../reducers/SquadStats';


class App extends Component  {
    render() {
        return(
            <div className='App'>
               <h1>Super Squad</h1> 
               <div className='col-md-4'>
                   <CharacterList /> 
               </div>
               <div className='col-md-4'>
                   <HeroList />
               </div>
               <div className='col-md-4'>
                   <SquadStats />
               </div>
            </div>
        )
    }
}

export default App;