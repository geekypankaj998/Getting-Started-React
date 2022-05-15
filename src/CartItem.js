import React from "react";
import "./cartItem.css";

class CartItem extends React.Component {
  //this is a class based component
  //this render function convrts an class based component into an React component
  constructor() {
    super();
    this.state = {
      title: "Mobile-Phone",
      price: 1000,
      qty: 5,
      img: "",
    };
  }
  increaseQuantity=()=>{
     console.log("Increase Clicked!!");
    this.setState({
      title : "Smart Phone",        //form 1 it focusses on chaging / updating a prop of state
      qty : this.state.qty+=1       //form 1 it focusses on chaging / updating a prop of state let's say I want to update title then {title : this.state.title = "val"}  (hw=ere it is giving warning so we should use form 2)
    })
     
  }
  decreaseQuantity=()=>{
    console.log("Decrease Clicked!!");
    const {qty} = this.state;
 
    if(qty>0){
      this.setState((prevState)=>{
        return{
        qty : prevState.qty-=1      //form 2 it focusses on chaging / updating a prop of state when it is dependent on prev state countr needs prev Info also
      }
    })
    }
      
  }

  removeProd=()=>{
    console.log("Removed Clicked");
    console.log(this.state);   
   
  }
  render() {
    const { title, price, qty } = this.state;   //destructuring
    return (
      <div className="cartItem">
        <div className="leftBlock">
          <img style={{...(Object.assign(styles.image,styles.imgStyle))}} alt="" />
        </div>
        <div className="rightBlock">
          <p className="bigHeading" >{title}</p>
          <p className="smallHeading">Rs : {price}</p>
          <p className="smallHeading">Quantity : {qty}</p>
          <div className="actionItems">
            <img 
              onClick={this.increaseQuantity}
              alt="increase"
              className="iconStyle"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            />
            <img
              onClick={this.decreaseQuantity}
              alt="decrease"
              className="iconStyle"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            />
            <img
              onClick={this.removeProd}
              alt="delete"
              className="iconStyle"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 150,
    width: 150,
    background: "rgb(126, 212, 232)",
    boxSizing : "border-box"
  },
  imgStyle : {
    border : 4,
    borderColor : "blue"
  }
};
export default CartItem;
