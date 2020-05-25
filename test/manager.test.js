import {assert} from 'chai'
import Manager from '../src/manager.js'

describe("Manager", () => {
    describe("#setPlayers", () => {
        it("Managerは実態があります", () => {
            assert.notDeepEqual(undefined, Manager)
        })
        it("EventEmitterの実態を取り出すことができます", () => {
            assert.notDeepEqual(undefined, Manager.eventEmtter)
        })
        it('playersを設定せずにgetしたときErrorを出力します', () => {
            assert.throws(() => { const a = Manager.players }, 'プレイヤー人数を設定してください')
        })
        it("should return '3'", () => {
            Manager.eventEmtter.on('プレイヤー人数を設定', (data) => {
                const PLAYERS = 3
                assert.equal(PLAYERS, Manager.players)
                assert.equal(`プレイヤー人数を${PLAYERS}人に設定しました`, data)
            })
            Manager.players = 3
        })
    })
})
