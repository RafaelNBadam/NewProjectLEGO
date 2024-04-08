import { useState } from 'react';
import './styles/Header.css'; // Arquivo CSS para estilização

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para atualizar o estado do termo de pesquisa
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="header-container">
      {/* Cabeçalho com opções */}
      <div className="header">
        <div className="logo">Logo do Site</div>
        <div className="options">
          <a href="#livro-do-dia">Livro do Dia</a>
          <a href="#todos-os-livros">Todos os Livros</a>
        </div>
      </div>
      
      {/* Barra de pesquisa */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar livros..."
          value={searchTerm}
          onChange={handleSearchChange} // Chamando a função de atualização do estado
        />
        <button>Buscar</button>
      </div>
    </div>
  );
}

export default Header;
