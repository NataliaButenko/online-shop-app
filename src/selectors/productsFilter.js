export const productFilter = (state) => {
  return state.products.reduce((done, product) => {
    let filterByName = product.name.toLowerCase().includes(state.search.toLowerCase());
    if(filterByName) {
      done.push(product);
    }
    return done
  }, [])
};
