import CardInfo from "./cardinfo"

class CardInfoMap {
    constructor() { this._map = {} }
    set(card) {
        if(!this._map) throw Error('_mapが初期化されていません')
        else this._map[card.name] = card
    }
    cardOf(name) {
        if(this._map[name] instanceof CardInfo) return this._map[name]
        else throw Error(`名前: ${name}のカードはありません`)
    }
}

export default CardInfoMap
