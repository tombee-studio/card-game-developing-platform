import {assert} from 'chai'
import CardInfo from '../src/cardinfo.js'

describe('CardInfo', () => {
    describe('#name', () => {
        it('nameが設定されていないままgetされた場合、Errorをthrowします', () => {
            assert.throws(() => {
                const info = new CardInfo()
                const name = info.name
            }, '名前が指定されていないカードがあります')
        })
        it('カードの名前を指定できます', () => {
            const info = new CardInfo()
            info.name = 'テスト'
            assert.equal('テスト', info.name)
        })
    })
    describe('#description', () => {
        it('descriptionが設定されていないままgetされた場合、デフォルトの文章を表示します', () => {
            const info = new CardInfo()
            assert.equal(info.description, 'このカードには説明がありません')
        })
        it('カードの説明を設定できます', () => {
            const info = new CardInfo()
            info.description = 'テストテストテスト'
            assert.equal('テストテストテスト', info.description)
        })
    })
})
