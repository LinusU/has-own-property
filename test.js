import assert from 'node:assert'
import hasOwnProperty from './index.js'

const obj = { a: 1, c: 2 }

assert.strictEqual(hasOwnProperty(obj, 'a'), true)
assert.strictEqual(hasOwnProperty(obj, 'b'), false)
assert.strictEqual(hasOwnProperty(obj, 'c'), true)

assert.strictEqual(hasOwnProperty(obj, 'toString'), false)
assert.strictEqual(hasOwnProperty(obj, 'valueOf'), false)
