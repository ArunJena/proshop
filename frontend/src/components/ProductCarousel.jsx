import Loader from "./Loader";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import { Carousel } from "react-bootstrap";

const ProductCarousel = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();
  return (
    <>
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Carousel pause="hover" className="bg-primary">
          {data?.map((product) => (
            <Carousel.Item key={product._id}>
              ``
              <img
                className="d-block w-80"
                src={product.image}
                alt={product.name}
              />
              <Carousel.Caption>
                <h2>
                  {product.name} (${product.price})
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default ProductCarousel;
