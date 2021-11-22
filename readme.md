# API REST - Sistemas Distribuídos

### Alunos
 - Everton Martins dos Santos (57765-0)
 - Gabriel Fernando de Carvalho Silva (58196-8)
 - José Renato Garcia Martinez Martins (57928-9)
 - Lucas Felipe de Oliveira Dias (58138-0)

### Requisitos Mínimos
 - NodeJS instalado na máquina v15>;
 - MySql instalado na máquina;
 - Usuário padrão do MySql user: root / senha: root
 - Base de dados no MySql chamada graphql;
 - Tabela criada, script abaixo:
	CREATE TABLE `aluno` (
  	`ra` INT NOT NULL,
  	`cpf` BIGINT NOT NULL,
  	`nome` varchar(150) NOT NULL,
  	`curso` varchar(100) NOT NULL,
  	`semestre` int NOT NULL,
  	`cidade` varchar(80) NOT NULL,
  	PRIMARY KEY (`ra`),
  	UNIQUE KEY `cpf_UNIQUE` (`cpf`)
	);

### Instruções de Set-up
 - Clonar o repositório em sua máquina;
 - Configurar base no MySql;
 - Acessar diretório principal do projeto e executar o comando `npm i`;
 - Acessar a pasta src com o comando `./src`;
 - Executar o comando `node server.js`;
 - Pronto, já pode usar a collection contida na raiz do repositório para realizar os testes.
