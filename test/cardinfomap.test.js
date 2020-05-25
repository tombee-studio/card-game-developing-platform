import {assert} from 'chai'
import CardInfoMap from '../src/cardinfomap.js'
import CardInfo from '../src/cardinfo.js'

describe('CardInfoMap', () => {
    describe('#map', () => {
        it('cardOfでcardを取得', () => {
            const CARD_NAME = 'テスト'
            const card = new CardInfo()
            card.name = CARD_NAME
            card.description = 'テストテストテスト'

            const infomap = new CardInfoMap()
            infomap.set(card)

            const c = infomap.cardOf(CARD_NAME)
            assert.deepEqual(card, c)
        })
    })
})
