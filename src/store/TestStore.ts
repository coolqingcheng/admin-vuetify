import { defineStore } from "pinia";


const useTestStore = defineStore('test', {

    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        add() {
            this.count += 1;
        }
    }
})

export {
    useTestStore
}