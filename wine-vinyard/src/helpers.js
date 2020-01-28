export const getWineItem=(wines=[], id)=>(
    (!id)
    ? wines
    :wines.filter(wine=>wine.id === id)
)
