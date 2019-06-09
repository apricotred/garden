const Model = require("../../middleware/db/model/log")
export const state = () => (Model.Log)

export const mutations = {
    add (state) {
        state.counter++
    },
    sub (state) {
        state.counter--
    }
}