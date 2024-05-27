import Card from "../Projet-card";

function Cards() {
  return (
    <div className="box-border flex-col flex md:flex-row gap-6 p-4 whitespace-normal">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
