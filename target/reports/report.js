$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tela_login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 3,
      "value": "#No caso de querer que o primeiro cenário fosse executado sempre antes do primeiro step de cada cenário era só adicionar"
    },
    {
      "line": 4,
      "value": "#\"Contexto:\" abaixo de \"Funcionalidade:\""
    }
  ],
  "line": 7,
  "name": "Página de login",
  "description": "Como usuário\r\nEu gostaria de me logar no site\r\nPara que eu possa ter ter acesso aos detalhes da minha conta",
  "id": "página-de-login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.background({
  "line": 13,
  "name": "Acessar tela de login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginStep.que_estou_na_tela_de_login()"
});
formatter.result({
  "duration": 7426564800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Realizar logoff com sucesso",
  "description": "",
  "id": "página-de-login;realizar-logoff-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 35,
      "name": "@logoff-sucesso"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "estou logado na aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 38,
  "name": "passo o mouse sobre o menu do nome do usuário logado no header",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "clico em Logoff",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "sistema realiza o logoff com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.estou_logado_na_aplicação()"
});
formatter.result({
  "duration": 903262100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.passo_o_mouse_sobre_o_menu_do_nome_do_usuário_logado_no_header()"
});
formatter.result({
  "duration": 190576600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_em_Logoff()"
});
formatter.result({
  "duration": 629415200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.sistema_realiza_o_logoff_com_sucesso()"
});
formatter.result({
  "duration": 180020900,
  "status": "passed"
});
formatter.after({
  "duration": 1465600,
  "status": "passed"
});
formatter.after({
  "duration": 86200,
  "status": "passed"
});
});