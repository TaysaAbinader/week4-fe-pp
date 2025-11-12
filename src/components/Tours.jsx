import { useState } from "react";
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

    const handleDelete = (id) =>{
        setToursData(toursData.filter(t=> t.id !==id))
    }
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} handleDelete={()=> handleDelete(tour.id)}/>;
        })}
      </div>
    </section>
  );
};
export default Tours;
