import React, {Component} from 'react'
import { Route, Switch} from "react-router-dom"
import config from '@/config'

import BattleMain from './BattleMain'
import Results from './Results'

class BattleRouter extends Component {
    render() {
        const {bgStyle} = this.props;
        
        return (
          <Switch>
            <Route path={`${config.BASE_URL}/battle/results`} render={() => <Results bgStyle={bgStyle} />} />
            <Route path={`${config.BASE_URL}/battle`} render={() => <BattleMain bgStyle={bgStyle} />} />
          </Switch>
        );
    }
}

export default BattleRouter;