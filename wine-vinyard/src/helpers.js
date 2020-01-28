export const getWine=(wines=[], id)=>(
    (!id)
    ? wines
    :wines.filter(wine=>wine.id === id)
)
