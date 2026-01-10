import Card from "./card";

const CardsContainer = ({ foods_list }) => {
  return (
    <>
      {foods_list.map((item) => (
        <Card
          key={item.id}
          name={item.food_name}
          image={item.food_image}
          price={item.price}
          type={item.food_type}
          id={item.id}
        />
      ))}
    </>
  );
};

export default CardsContainer;
