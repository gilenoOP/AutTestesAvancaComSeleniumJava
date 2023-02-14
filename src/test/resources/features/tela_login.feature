# language: pt

#No caso de querer que o primeiro cenário fosse executado sempre antes do primeiro step de cada cenário era só adicionar
#"Contexto:" abaixo de "Funcionalidade:"

@login
Funcionalidade: Página de login
  Como usuário
  Eu gostaria de me logar no site
  Para que eu possa ter ter acesso aos detalhes da minha conta


  Contexto: Acessar tela de login
    Dado que estou na tela de login

  @login-erro
  Esquema do Cenário: Validar: <identifier>
    Quando preencho o campo email"<email>" e senha"<password>"
    E clico no botão de login
    Então sistema apresenta mensagem"<message>" na tela de login
    Exemplos:
      | email                | password | message          | identifier                                       |
      |                      |          | E-mail inválido. | Realizar login sem preencher campos obrigatórios |
      |                      | 123456   | E-mail inválido. | Realizar login sem preencher campo e-mail        |
      | ateste@ateste.com.br |          | Senha inválida.  | Realizar login sem preencher campo senha         |
      | ateste@ateste        | 123456   | E-mail inválido. | Realizar login informando e-mail inválido        |
      | ateste@ateste.com.br | 123      | Senha inválida.  | Realizar login informando senha inválida         |

  @login-sucesso
  Cenário: Realizar login com sucesso
    Quando preencho campos obrigatórios login
    E clico no botão de login
    Então sistema realiza login com sucesso

  @logoff-sucesso
  Cenário: Realizar logoff com sucesso
    Dado estou logado na aplicação
    #Quando passo o mouse sobre o menu do nome do usuário logado no header
    Quando clico em Logoff
    Então sistema realiza o logoff com sucesso

  @link-nao-tenho-conta
  Cenário: Acessar tela de cadastro de usuários via link nao tenho conta
    Quando clico no link informando não ter conta
    Então sistema apresenta tela de cadastro de usuário