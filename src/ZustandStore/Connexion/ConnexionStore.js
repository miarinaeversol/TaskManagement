import { create } from "zustand"

export const useConnexionStore = create((set) => ({
    firstDiv: 'block',
    secondDiv: 'none',
    thirdDiv: 'none',
    paginationTitle: 1,
    FirstStepForSubscribe: 'block',
    SecondStepForSubscribe: 'none',
    PaginationTitle: 1,

    /* homeBlock() {
        set({firstDiv: 'block'})
        set({secondDiv: 'none'})
        set({thirdDiv: 'none'})
    }, */

    connexionBlock() {
        set({firstDiv: 'none'})
        set({secondDiv: 'block'})
        set({thirdDiv: 'none'})
    },
    
    createAccountBlock() {
        set({firstDiv: 'none'})
        set({secondDiv: 'none'})
        set({thirdDiv: 'block'})
    },
    
    previewStep() {
        set({FirstStepForSubscribe: 'block'})
        set({SecondStepForSubscribe: 'none'})
        set({paginationTitle: 1})
    },

    nextStep() {
        set({FirstStepForSubscribe: 'none'})
        set({SecondStepForSubscribe: 'block'})
        set({paginationTitle: 2})
    },
}))