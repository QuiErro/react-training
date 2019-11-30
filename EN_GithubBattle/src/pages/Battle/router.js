import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";

import BattleMain from './BattleMain'
import Results from './Results'

class BattleRouter extends Component {
    render() {
        const {bgStyle} = this.props;
        
        return (
          <Switch>
            <Route exact path="/battle" render={() => <BattleMain bgStyle={bgStyle} />} />
            <Route path="/battle/results" render={() => <Results bgStyle={bgStyle} />} />
          </Switch>
        );
    }
}

export default BattleRouter;