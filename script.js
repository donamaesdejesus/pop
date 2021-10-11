let cats = [
{
  id: "1",
  name: "ASTRO",
  description: "Cat description goes here",
  price: "12.99",
  src:
  "data:image/jpeg;base64,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",
  count: "3" },

{
  id: "2",
  name: "ENHYPEN",
  description: "Cat description goes here",
  price: "22.99",
  src:
  "data:image/jpeg;base64,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",
  count: "2" },

{
  id: "3",
  name: "EXO",
  description: "Cat description goes here",
  price: "17.99",
  src:
  "data:image/jpeg;base64,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",
  count: "5" },

{
  id: "4",
  name: "TXT",
  description: "Cat description goes here",
  price: "27.99",
  src:
  "data:image/jpeg;base64,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",
  count: "3",





}];



let comments = ["Do you have a cat with a hat?", "Nice"];

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cats: cats,
      cart: [],
      display: {
        cats: true,
        cart: false,
        comments: false },

      comments: comments,
      cartLinkClassName: "material-icons" };

  }
  addToCart(id) {
    console.log("Added :", id);
    let cats = this.state.cats;
    let cart = this.state.cart;
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id == id && cats[i].count > 0) {
        if (cart.length === 0) {
          cats[i].count = cats[i].count - 1;
          let cat = Object.assign({}, cats[i]);
          delete cat.count;
          cat.howMany = typeof cat.howMany === "undefined" ? 1 : cat.howMany + 1;
          cart.push(cat);
        } else {
          let result = cart.filter(item => item.id == cats[i].id);
          if (result.length === 1) {
            for (let j = 0; j < cart.length; j++) {
              if (cart[j].id == cats[i].id) {
                cats[i].count = cats[i].count - 1;
                cart[j].howMany++;
              }
            }
          } else {
            cats[i].count--;
            let cat = Object.assign({}, cats[i]);
            delete cat.count;
            cat.howMany = typeof cat.howMany === "undefined" ? 1 : cat.howMany + 1;
            cart.push(cat);
          }
        }
      }
    }
    this.setState({
      cats: cats,
      cart: cart,
      cartLinkClassName: "material-icons rotateBasket" });

    setTimeout(() => this.setState({
      cartLinkClassName: "material-icons" }),
    2000);
  }
  removeItem(id) {
    let cats = this.state.cats;
    let cart = this.state.cart;
    let itemsToGetBack = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        let cartIndex = i;
        itemsToGetBack = cart[i].howMany;
        cart.splice(cartIndex, 1);
      }
    }
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id == id) {
        cats[i].count = cats[i].count + itemsToGetBack;
      }
    }
    this.setState({
      cats: cats,
      cart: cart });

  }
  displayThisComponent(comp) {
    switch (comp) {
      case "cats":
        this.setState({
          display: {
            cats: true,
            cart: false,
            comments: false } });


        break;
      case "cart":
        this.setState({
          display: {
            cats: false,
            cart: true,
            comments: false } });


        break;
      case "comments":
        this.setState({
          display: {
            cats: false,
            cart: false,
            comments: true } });


        break;}

  }
  addComment(comment) {
    let comments = this.state.comments;
    comments.push(comment);
    this.setState({
      comments: comments });

  }
  render() {
    let cats = this.state.display.cats ? /*#__PURE__*/React.createElement(Cats, { cats: this.state.cats, addToCart: this.addToCart.bind(this) }) : "";
    let cart = this.state.display.cart ? /*#__PURE__*/React.createElement(Cart, { cart: this.state.cart, removeItem: this.removeItem.bind(this) }) : "";
    let comments = this.state.display.comments ? /*#__PURE__*/React.createElement(Comments, { comments: this.state.comments, addComment: this.addComment.bind(this) }) : "";
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("nav", null, /*#__PURE__*/
      React.createElement("span", { onClick: () => this.displayThisComponent("cats") }, /*#__PURE__*/
      React.createElement("i", { className: "material-icons" }, "store")), /*#__PURE__*/

      React.createElement("span", { onClick: () => this.displayThisComponent("cart") }, /*#__PURE__*/
      React.createElement("i", { className: this.state.cartLinkClassName }, "add_shopping_cart")), /*#__PURE__*/

      React.createElement("span", { onClick: () => this.displayThisComponent("comments") }, /*#__PURE__*/
      React.createElement("i", { className: "material-icons" }, "chat_bubble"))),


      cats,
      cart,
      comments));


  }}


class Cats extends React.Component {
  render() {
    var addToCart = this.props.addToCart;
    var catsNodes = this.props.cats.map((cat, i) => /*#__PURE__*/React.createElement(Cat, { key: i, cat: cat, addToCart: addToCart }));
    return /*#__PURE__*/(
      React.createElement("div", { className: "cats-all" },
      catsNodes));


  }}
;

class Cat extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "single-cat" }, /*#__PURE__*/
      React.createElement("h3", null, this.props.cat.name), /*#__PURE__*/
      React.createElement("img", { src: this.props.cat.src }), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Price"), " ", this.props.cat.price, " | ", this.props.cat.count, " ", " ", "available"), /*#__PURE__*/
      React.createElement("span", { onClick: () => this.props.addToCart(this.props.cat.id) }, /*#__PURE__*/React.createElement("i", { className: "material-icons" }, "add_shopping_cart"))));


  }}
;

class Cart extends React.Component {
  removeItem(id) {
    this.props.removeItem(id);
  }
  render() {
    const removeItem = this.removeItem.bind(this);
    let totalPrice = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      totalPrice = totalPrice + this.props.cart[i].price * this.props.cart[i].howMany;
    }
    totalPrice = totalPrice.toFixed(2);
    let itemsNodes = this.props.cart.map((item, i) => {
      let singleCatTotal = (item.price * item.howMany).toFixed(2);
      return /*#__PURE__*/(
        React.createElement("div", { key: i, className: "single-cat" }, /*#__PURE__*/
        React.createElement("h3", null, item.name), /*#__PURE__*/
        React.createElement("img", { src: item.src }), /*#__PURE__*/
        React.createElement("p", null, item.description), /*#__PURE__*/
        React.createElement("p", null, "Items ", item.howMany, " | price ", item.price, " | total ", singleCatTotal), /*#__PURE__*/
        React.createElement("span", { onClick: () => removeItem(item.id) }, /*#__PURE__*/React.createElement("i", { className: "material-icons" }, "delete"))));


    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "cart" }, /*#__PURE__*/
      React.createElement("div", { className: "items-wraper" },
      itemsNodes), /*#__PURE__*/

      React.createElement("h3", null, "Total : ", totalPrice)));


  }}
;

class Comments extends React.Component {
  constructor(props) {
    super();
    this.state = {
      comment: "" };

  }
  getComment(event) {
    this.setState({
      comment: event.target.value });

  }
  addComment() {
    if (this.state.comment != "") {
      this.props.addComment(this.state.comment);
    }
    this.setState({
      comment: "" });

  }
  render() {
    let commentsNodes = this.props.comments.map((comment, i) => /*#__PURE__*/React.createElement("div", { key: i }, /*#__PURE__*/React.createElement("p", null, comment)));
    return /*#__PURE__*/(
      React.createElement("div", { className: "comments" }, /*#__PURE__*/
      React.createElement("h1", null, "Comments"), /*#__PURE__*/
      React.createElement("input", { type: "text", onChange: this.getComment.bind(this), value: this.state.comment }), /*#__PURE__*/
      React.createElement("span", null, /*#__PURE__*/React.createElement("i", { className: "material-icons", onClick: this.addComment.bind(this) }, "message")), /*#__PURE__*/
      React.createElement("div", { className: "comments-wrapper" },
      commentsNodes)));



  }}
;

ReactDOM.render( /*#__PURE__*/
React.createElement(App, { cats: cats }),
document.getElementById("app"));