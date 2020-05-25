import {assert} from 'chai'
import Manager from '../src/manager.js'

describe("Manager", () => {
    describe('#Manager', () => {
        it('Managerは実態があります', () => {
            assert.notDeepEqual(undefined, Manager)
        })
    })
    describe('#eventEmitter', () => {
        it('EventEmitterの実態を取り出すことができます', () => {
            assert.notDeepEqual(undefined, Manager.eventEmtter)
        })
    })
    describe("#players", () => {
        const PLAYERS = 3
        it('playersを設定せずにgetしたときErrorを出力します', () => {
            assert.throws(() => { const a = Manager.players }, 'プレイヤー人数を設定してください')
        })
        it(`should return ${PLAYERS}`, () => {
            Manager.eventEmtter.on('プレイヤー人数を設定', (data) => {
                assert.equal(PLAYERS, Manager.players)
                assert.equal(`プレイヤー人数を${PLAYERS}人に設定しました`, data)
            })
            Manager.players = 3
        })
    })
})
