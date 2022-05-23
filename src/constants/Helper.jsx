export const newCount = (arr, id, text) => arr.map(el => {
    if(el.id === id) {
        return ({
            ...el,
            count: text ?? ++el.count
        })
    }else {
        return el
    }
})