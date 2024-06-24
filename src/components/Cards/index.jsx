import Card from "../Projet-card";
import image from "../../../public/assets/Nina_Carducci.jpg";

function Cards() {
  return (
    <div className="box-border justify-center flex-col flex md:flex-row gap-12 p-4 whitespace-normal">
      <Card Src={image} Alt="" Description="lorem" />
      <Card Src={image} Alt="" Description="lorem" />
      <Card Src={image} Alt="" Description="lorem" />
    </div>
  );
}

export default Cards;
