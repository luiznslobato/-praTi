-- Tabela Recursos
CREATE TABLE Recursos (
    id_recurso INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    numero_registro VARCHAR(50) NOT NULL UNIQUE,
    salario_atual DECIMAL(10, 2) NOT NULL,
    endereco_residencial TEXT NOT NULL,
    tipo ENUM('Gerente', 'Analista de Negócios', 'DBA', 'Programador') NOT NULL
);

-- Tabela Histórico de Salários
CREATE TABLE Historico_Salarios (
    id_historico INT AUTO_INCREMENT PRIMARY KEY,
    id_recurso INT NOT NULL,
    data_alteracao DATE NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_recurso) REFERENCES Recursos(id_recurso) ON DELETE CASCADE
);

-- Tabela Telefones
CREATE TABLE Telefones (
    id_telefone INT AUTO_INCREMENT PRIMARY KEY,
    id_recurso INT NOT NULL,
    numero VARCHAR(20) NOT NULL,
    tipo ENUM('Residencial', 'Comercial', 'Celular', 'Ramal') NOT NULL,
    FOREIGN KEY (id_recurso) REFERENCES Recursos(id_recurso) ON DELETE CASCADE
);

-- Tabela Ferramentas de Programação
CREATE TABLE Ferramentas (
    id_ferramenta INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    versao VARCHAR(50) NOT NULL
);

-- Tabela Programador_Ferramenta
CREATE TABLE Programador_Ferramenta (
    id_recurso INT NOT NULL,
    id_ferramenta INT NOT NULL,
    PRIMARY KEY (id_recurso, id_ferramenta),
    FOREIGN KEY (id_recurso) REFERENCES Recursos(id_recurso) ON DELETE CASCADE,
    FOREIGN KEY (id_ferramenta) REFERENCES Ferramentas(id_ferramenta) ON DELETE CASCADE
);

-- Tabela Equipes
CREATE TABLE Equipes (
    id_equipe INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    numero_recursos_maximo INT NOT NULL
);

-- Tabela Recursos_Equipes
CREATE TABLE Recursos_Equipes (
    id_recurso INT NOT NULL,
    id_equipe INT NOT NULL,
    PRIMARY KEY (id_recurso, id_equipe),
    FOREIGN KEY (id_recurso) REFERENCES Recursos(id_recurso) ON DELETE CASCADE,
    FOREIGN KEY (id_equipe) REFERENCES Equipes(id_equipe) ON DELETE CASCADE
);

-- Tabela Projetos
CREATE TABLE Projetos (
    id_projeto INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    data_inicio DATE NOT NULL,
    data_prevista_termino DATE NOT NULL,
    data_real_termino DATE,
    status ENUM('Em andamento', 'Finalizado', 'Aguardando prioridade') NOT NULL,
    horas_previstas INT NOT NULL,
    horas_reais INT,
    id_gerente INT NOT NULL,
    FOREIGN KEY (id_gerente) REFERENCES Recursos(id_recurso) ON DELETE RESTRICT
);

-- Tabela Equipe_Projeto
CREATE TABLE Equipe_Projeto (
    id_equipe INT NOT NULL,
    id_projeto INT NOT NULL,
    PRIMARY KEY (id_equipe, id_projeto),
    FOREIGN KEY (id_equipe) REFERENCES Equipes(id_equipe) ON DELETE CASCADE,
    FOREIGN KEY (id_projeto) REFERENCES Projetos(id_projeto) ON DELETE CASCADE
);

-- Tabela Atividades
CREATE TABLE Atividades (
    id_atividade INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL
);

-- Tabela Projeto_Atividade
CREATE TABLE Projeto_Atividade (
    id_projeto INT NOT NULL,
    id_atividade INT NOT NULL,
    PRIMARY KEY (id_projeto, id_atividade),
    FOREIGN KEY (id_projeto) REFERENCES Projetos(id_projeto) ON DELETE CASCADE,
    FOREIGN KEY (id_atividade) REFERENCES Atividades(id_atividade) ON DELETE CASCADE
);

-- Tabela Tarefas
CREATE TABLE Tarefas (
    id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT NOT NULL,
    id_atividade INT NOT NULL,
    FOREIGN KEY (id_atividade) REFERENCES Atividades(id_atividade) ON DELETE CASCADE
);
