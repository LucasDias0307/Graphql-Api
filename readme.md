# API REST - Sistemas Distribu�dos

### Alunos
 - Everton Martins dos Santos (57765-0)
 - Gabriel Fernando de Carvalho Silva (58196-8)
 - Jos� Renato Garcia Martinez Martins (57928-9)
 - Lucas Felipe de Oliveira Dias (58138-0)

### Requisitos M�nimos
 - NodeJS instalado na m�quina v15>;
 - MySql instalado na m�quina;
 - Usu�rio padr�o do MySql user: root / senha: root
 - Base de dados no MySql chamada graphql;
 - Tabela criada, script abaixo:
	CREATE TABLE `aluno` (
  	`ra` varchar(11) NOT NULL,
  	`cpf` varchar(11) NOT NULL,
  	`nome` varchar(150) NOT NULL,
  	`curso` varchar(100) NOT NULL,
  	`semestre` int NOT NULL,
  	`cidade` varchar(80) NOT NULL,
  	PRIMARY KEY (`ra`),
  	UNIQUE KEY `cpf_UNIQUE` (`cpf`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

### Instru��es de Set-up
 - Clonar o reposit�rio em sua m�quina;
 - Configurar base no MySql;
 - Acessar diret�rio principal do projeto e executar o comando `npm i`;
 - Acessar a pasta src com o comando `./src`;
 - Executar o comando `node server.js`;
 - Pronto, j� pode usar a collection contida na raiz do reposit�rio para realizar os testes.