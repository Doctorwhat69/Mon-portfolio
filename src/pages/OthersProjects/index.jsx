import { Button } from "../../components/Button";
import OpCards from "../../components/OP-Cards";
import Title from "../../components/Title";

function OthersProjects() {
  return (
    <div className="md:pl-16 md:pr-16 bg-zinc-50 pt-10">
      <Title titre="Tous mes Projets" />
      <OpCards />
      <Button Name="retour à la page d'accueil" Url="/Mon-portfolio/" />
    </div>
  );
}

export default OthersProjects;
