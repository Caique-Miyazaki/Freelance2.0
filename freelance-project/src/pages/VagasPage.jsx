import { Link } from "react-router-dom";
import "./vagasPage.css";
const VagasPage = () => {
  const serviços = [
    {
      id: 1,
      name: "Guilherme",
      title: "loewm ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit corrupti repellat, iusto .",
      price: 2000.0,
    },
    {
      id: 2,
      name: "Luiz",
      title: "loewm ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit corrupti repellat, iusto .",
      price: 1900,
    },
    {
      id: 3,
      name: "Kadu",
      title: "loewm ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit corrupti repellat, iusto .",
      price: 1800,
    },
    {
      id: 4,
      name: "Juan",
      title: "loewm ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit corrupti repellat, iusto .",
      price: 2000,
    },
  ];

  return (
    <div className="container">
      <div className="serviços">
        {serviços.map((servico) => {
          return (
            <div className="servico" key={servico.id}>
              <h2>{servico.title}</h2>
              <h3> {servico.name}</h3>
              <p>{servico.desc}</p>
              <p>{servico.price}</p>
              <div className="btn-">
                <Link to="/chat">
                  <button className="btn">Entre em contato</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VagasPage;
