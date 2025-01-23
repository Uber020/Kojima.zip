import BrokenThreads from "./images/BrokenThreads.jpg";

const links = {
    broken_threads: "https://salmaze.itch.io/broken-threads/",
};

function Projetos() {
    return (
        <div>
            <div className="content-section">
                <img src={BrokenThreads} alt="Logo do jogo Broken Threads"/>
                <div className="text-section">
                    <h1>Broken Threads</h1>
                    <p>
                        <a href={links.broken_threads} target="_blank" rel="noopener noreferrer">Broken Threads </a>
                        é um jogo de duelos de tiro em primeira<br/>
                        pessoa, utilizando conexões diretas por LAN. Ao final<br/>
                        da partida, o jogador com a maior pontuação vence.

                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projetos;
