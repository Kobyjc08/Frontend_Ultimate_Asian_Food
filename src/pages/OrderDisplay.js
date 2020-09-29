const [reference, setreference] = useState("");
  const [productName, setproductName] = useState("");

  const getCustomerOrders = async () => {
    try {
      const response = await fetch(
        `https://ultimate-asian-food-e-shop.herokuapp.com/orderItems/${customerID}`
      );
      const jsonData = await response.json();

      setreference(jsonData.order_reference);
      setproductName(jsonData.product_name);
    } catch (err) {
      console.error(err.message);
    }