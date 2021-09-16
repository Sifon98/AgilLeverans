module.exports.validateQuery = (type) => {
  if(type !== "wishlist" && type !== "cart") {
    throw new Error("Query 'type' should be 'wishlist' or 'cart'");
  } ;
}