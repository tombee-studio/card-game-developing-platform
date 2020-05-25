import events from 'events'

class Manager {
    get eventEmtter() { 
        if(this._em === undefined) this._em = new events.EventEmitter()
        return this._em 
    }
    get players() {
        if(this._players === undefined) throw new Error('プレイヤー人数を設定してください')
        return this._players
    }
    set players(_players) {
        this._players = _players
        this._em.emit('プレイヤー人数を設定', `プレイヤー人数を${_players}人に設定しました`)
    }
}

export default new Manager()
