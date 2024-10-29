create DATABASE ShelterBox;
use ShelterBox;

create TABLE WebSite(
 id_website int PRIMARY KEY,
 URL VARCHAR (20)
);

create TABLE Usuario(
 SenhaUsuario VARCHAR(20),
 PrimeroNome VARCHAR(20),
 UltimoNome VARCHAR(20),
 id_usuario int PRIMARY KEY,
 Email VARCHAR(20),
 Estado VARCHAR(20),
 CEP VARCHAR(20),
 País VARCHAR(20),
 Endereço VARCHAR (20),
 Cidade VARCHAR(20),
 Telefone vaRCHAR(20)
 );
 select * from Usuario;
 
 create TABLE Doações(
  QuantidadeDeUsuarios int,
  QuantidadeDeDoacao int,
  ValorDaDoacao float,
  TipoDeDoacao VARCHAR(20)
 );
 select * from Doações;
 