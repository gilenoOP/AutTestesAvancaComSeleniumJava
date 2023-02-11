# language: pt

#No caso de querer que o primeiro cenário fosse executado sempre antes do primeiro step de cada cenário era só adicionar
#"Contexto:" abaixo de "Funcionalidade:"

@cadastro
Funcionalidade: Página de cadastro de usuários
  Como usuário
  Eu gostaria de me cadastrar no site
  Para que eu possa ter uma conta no usuário e possa realizar compras


  Contexto: Acessar tela de cadastro de usuários
    Dado que estou na tela de cadastro de usuários

  @cadastro-erro
  Esquema do Cenário: Validar: <identifier>
    Quando preencho os campos nome"<name>",email"<email>"e senha"<password>"
    E clico no botão de cadastrar
    Então sistema apresenta mensagem"<message>" na tela de cadastro
    Exemplos:
      | name            | email                  | password | message                                        | identifier                                         |
      |                 |                        |          | O campo nome deve ser prenchido                | Realizar cadastro sem preencher campo obrigatórios |
      |                 | joao.almeida@teste.com | 123456   | O campo nome deve ser prenchido                | Realizar cadastro sem preencher campo Nome         |
      | João de Almeida |                        | 123456   | O campo e-mail deve ser prenchido corretamente | Realizar cadastro sem preencher campo E-mail       |
      | João de Almeida | joao.almeida@teste.com |          | O campo senha deve ter pelo menos 6 dígitos    | Realizar cadastro sem preencher campo Senha        |
      | João de Almeida | joao.almeida@          | 123456   | O campo e-mail deve ser prenchido corretamente | Realizar cadastro com e-mail inválido              |
      | João de Almeida | joao.almeida@teste.com | 123      | O campo senha deve ter pelo menos 6 dígitos    | Realizar cadastro com senha inválida               |

  @cadastro-sucesso
  Cenário: Realizar cadastro de usuário com sucesso
    Quando preencho campos obrigatórios cadastro
    E clico no botão cadastrar
    Então sistema realiza cadastro de usuário com sucesso