class CardInfo {
    get name() {
        if(!this._name) throw Error('名前が指定されていないカードがあります')
        return this._name
    }
    set name(_name) { this._name = _name }

    get description() {
        if(!this._description) return 'このカードには説明がありません'
        return this._description
    }
    set description(_description) { this._description = _description }
}

export default CardInfo
