$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tela_cadastro.feature");
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
  "name": "Página de cadastro de usuários",
  "description": "Como usuário\r\nEu gostaria de me cadastrar no site\r\nPara que eu possa ter uma conta no usuário e possa realizar compras",
  "id": "página-de-cadastro-de-usuários",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro"
    }
  ]
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Validar: \u003cidentifier\u003e",
  "description": "",
  "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@cadastro-erro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho os campos nome\"\u003cname\u003e\",email\"\u003cemail\u003e\"e senha\"\u003cpassword\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"\u003cmessage\u003e\" na tela de cadastro",
  "keyword": "Então "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "password",
        "message",
        "identifier"
      ],
      "line": 22,
      "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "O campo nome deve ser prenchido",
        "Realizar cadastro sem preencher campo obrigatórios"
      ],
      "line": 23,
      "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;2"
    },
    {
      "cells": [
        "",
        "joao.almeida@teste.com",
        "123456",
        "O campo nome deve ser prenchido",
        "Realizar cadastro sem preencher campo Nome"
      ],
      "line": 24,
      "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;3"
    },
    {
      "cells": [
        "João de Almeida",
        "",
        "123456",
        "O campo e-mail deve ser prenchido corretamente",
        "Realizar cadastro sem preencher campo E-mail"
      ],
      "line": 25,
      "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;4"
    },
    {
      "cells": [
        "João de Almeida",
        "joao.almeida@teste.com",
        "",
        "O campo senha deve ter pelo menos 6 dígitos",
        "Realizar cadastro sem preencher campo Senha"
      ],
      "line": 26,
      "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;5"
    },
    {
      "cells": [
        "João de Almeida",
        "joao.almeida@",
        "123456",
        "O campo e-mail deve ser prenchido corretamente",
        "Realizar cadastro com e-mail inválido"
      ],
      "line": 27,
      "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;6"
    },
    {
      "cells": [
        "João de Almeida",
        "joao.almeida@teste.com",
        "123",
        "O campo senha deve ter pelo menos 6 dígitos",
        "Realizar cadastro com senha inválida"
      ],
      "line": 28,
      "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;7"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 13,
  "name": "Acessar tela de cadastro de usuários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela de cadastro de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroStep.que_estou_na_tela_de_cadastro_de_usuários()"
});
formatter.result({
  "duration": 5521884000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validar: Realizar cadastro sem preencher campo obrigatórios",
  "description": "",
  "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro"
    },
    {
      "line": 16,
      "name": "@cadastro-erro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho os campos nome\"\",email\"\"e senha\"\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"O campo nome deve ser prenchido\" na tela de cadastro",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "CadastroStep.preencho_os_campos_nome_email_e_senha(String,String,String)"
});
formatter.result({
  "duration": 153646500,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.clico_no_botão_de_cadastrar()"
});
formatter.result({
  "duration": 48745100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo nome deve ser prenchido",
      "offset": 27
    }
  ],
  "location": "CadastroStep.sistema_apresenta_mensagem_na_tela_de_cadastro(String)"
});
formatter.result({
  "duration": 39490700,
  "status": "passed"
});
formatter.after({
  "duration": 898000,
  "status": "passed"
});
formatter.after({
  "duration": 84100,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "Acessar tela de cadastro de usuários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela de cadastro de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroStep.que_estou_na_tela_de_cadastro_de_usuários()"
});
formatter.result({
  "duration": 5385509700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validar: Realizar cadastro sem preencher campo Nome",
  "description": "",
  "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro"
    },
    {
      "line": 16,
      "name": "@cadastro-erro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho os campos nome\"\",email\"joao.almeida@teste.com\"e senha\"123456\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"O campo nome deve ser prenchido\" na tela de cadastro",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "joao.almeida@teste.com",
      "offset": 32
    },
    {
      "val": "123456",
      "offset": 63
    }
  ],
  "location": "CadastroStep.preencho_os_campos_nome_email_e_senha(String,String,String)"
});
formatter.result({
  "duration": 164270600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.clico_no_botão_de_cadastrar()"
});
formatter.result({
  "duration": 48359800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo nome deve ser prenchido",
      "offset": 27
    }
  ],
  "location": "CadastroStep.sistema_apresenta_mensagem_na_tela_de_cadastro(String)"
});
formatter.result({
  "duration": 33757000,
  "status": "passed"
});
formatter.after({
  "duration": 59200,
  "status": "passed"
});
formatter.after({
  "duration": 52900,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "Acessar tela de cadastro de usuários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela de cadastro de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroStep.que_estou_na_tela_de_cadastro_de_usuários()"
});
formatter.result({
  "duration": 3950363900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validar: Realizar cadastro sem preencher campo E-mail",
  "description": "",
  "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro"
    },
    {
      "line": 16,
      "name": "@cadastro-erro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho os campos nome\"João de Almeida\",email\"\"e senha\"123456\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"O campo e-mail deve ser prenchido corretamente\" na tela de cadastro",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "João de Almeida",
      "offset": 24
    },
    {
      "val": "",
      "offset": 47
    },
    {
      "val": "123456",
      "offset": 56
    }
  ],
  "location": "CadastroStep.preencho_os_campos_nome_email_e_senha(String,String,String)"
});
formatter.result({
  "duration": 159261800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.clico_no_botão_de_cadastrar()"
});
formatter.result({
  "duration": 43869700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo e-mail deve ser prenchido corretamente",
      "offset": 27
    }
  ],
  "location": "CadastroStep.sistema_apresenta_mensagem_na_tela_de_cadastro(String)"
});
formatter.result({
  "duration": 36606100,
  "status": "passed"
});
formatter.after({
  "duration": 54900,
  "status": "passed"
});
formatter.after({
  "duration": 44500,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "Acessar tela de cadastro de usuários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela de cadastro de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroStep.que_estou_na_tela_de_cadastro_de_usuários()"
});
formatter.result({
  "duration": 9550615700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validar: Realizar cadastro sem preencher campo Senha",
  "description": "",
  "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro"
    },
    {
      "line": 16,
      "name": "@cadastro-erro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho os campos nome\"João de Almeida\",email\"joao.almeida@teste.com\"e senha\"\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"O campo senha deve ter pelo menos 6 dígitos\" na tela de cadastro",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "João de Almeida",
      "offset": 24
    },
    {
      "val": "joao.almeida@teste.com",
      "offset": 47
    },
    {
      "val": "",
      "offset": 78
    }
  ],
  "location": "CadastroStep.preencho_os_campos_nome_email_e_senha(String,String,String)"
});
formatter.result({
  "duration": 163398400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.clico_no_botão_de_cadastrar()"
});
formatter.result({
  "duration": 46471800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo senha deve ter pelo menos 6 dígitos",
      "offset": 27
    }
  ],
  "location": "CadastroStep.sistema_apresenta_mensagem_na_tela_de_cadastro(String)"
});
formatter.result({
  "duration": 32129000,
  "status": "passed"
});
formatter.after({
  "duration": 63500,
  "status": "passed"
});
formatter.after({
  "duration": 92400,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "Acessar tela de cadastro de usuários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela de cadastro de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroStep.que_estou_na_tela_de_cadastro_de_usuários()"
});
formatter.result({
  "duration": 8304554500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validar: Realizar cadastro com e-mail inválido",
  "description": "",
  "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro"
    },
    {
      "line": 16,
      "name": "@cadastro-erro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho os campos nome\"João de Almeida\",email\"joao.almeida@\"e senha\"123456\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"O campo e-mail deve ser prenchido corretamente\" na tela de cadastro",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "João de Almeida",
      "offset": 24
    },
    {
      "val": "joao.almeida@",
      "offset": 47
    },
    {
      "val": "123456",
      "offset": 69
    }
  ],
  "location": "CadastroStep.preencho_os_campos_nome_email_e_senha(String,String,String)"
});
formatter.result({
  "duration": 167045800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.clico_no_botão_de_cadastrar()"
});
formatter.result({
  "duration": 46904300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo e-mail deve ser prenchido corretamente",
      "offset": 27
    }
  ],
  "location": "CadastroStep.sistema_apresenta_mensagem_na_tela_de_cadastro(String)"
});
formatter.result({
  "duration": 31475700,
  "status": "passed"
});
formatter.after({
  "duration": 49900,
  "status": "passed"
});
formatter.after({
  "duration": 50100,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "Acessar tela de cadastro de usuários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela de cadastro de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroStep.que_estou_na_tela_de_cadastro_de_usuários()"
});
formatter.result({
  "duration": 5522737800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validar: Realizar cadastro com senha inválida",
  "description": "",
  "id": "página-de-cadastro-de-usuários;validar:-\u003cidentifier\u003e;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@cadastro"
    },
    {
      "line": 16,
      "name": "@cadastro-erro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho os campos nome\"João de Almeida\",email\"joao.almeida@teste.com\"e senha\"123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"O campo senha deve ter pelo menos 6 dígitos\" na tela de cadastro",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "João de Almeida",
      "offset": 24
    },
    {
      "val": "joao.almeida@teste.com",
      "offset": 47
    },
    {
      "val": "123",
      "offset": 78
    }
  ],
  "location": "CadastroStep.preencho_os_campos_nome_email_e_senha(String,String,String)"
});
formatter.result({
  "duration": 167036700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.clico_no_botão_de_cadastrar()"
});
formatter.result({
  "duration": 45104200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O campo senha deve ter pelo menos 6 dígitos",
      "offset": 27
    }
  ],
  "location": "CadastroStep.sistema_apresenta_mensagem_na_tela_de_cadastro(String)"
});
formatter.result({
  "duration": 33449500,
  "status": "passed"
});
formatter.after({
  "duration": 50000,
  "status": "passed"
});
formatter.after({
  "duration": 36400,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "Acessar tela de cadastro de usuários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela de cadastro de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroStep.que_estou_na_tela_de_cadastro_de_usuários()"
});
formatter.result({
  "duration": 5360225900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Realizar cadastro de usuário com sucesso",
  "description": "",
  "id": "página-de-cadastro-de-usuários;realizar-cadastro-de-usuário-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 30,
      "name": "@cadastro-sucesso"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "preencho campos obrigatórios cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "clico no botão cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "sistema realiza cadastro de usuário com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroStep.preencho_campos_obrigatórios_cadastro()"
});
formatter.result({
  "duration": 156870000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.clico_no_botão_cadastrar()"
});
formatter.result({
  "duration": 54761100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroStep.sistema_realiza_cadastro_de_usuário_com_sucesso()"
});
formatter.result({
  "duration": 500331100,
  "status": "passed"
});
formatter.after({
  "duration": 71400,
  "status": "passed"
});
formatter.after({
  "duration": 42400,
  "status": "passed"
});
formatter.uri("tela_login.feature");
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
formatter.scenarioOutline({
  "line": 17,
  "name": "Validar: \u003cidentifier\u003e",
  "description": "",
  "id": "página-de-login;validar:-\u003cidentifier\u003e",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-erro"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho o campo email\"\u003cemail\u003e\" e senha\"\u003cpassword\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"\u003cmessage\u003e\" na tela de login",
  "keyword": "Então "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "página-de-login;validar:-\u003cidentifier\u003e;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "message",
        "identifier"
      ],
      "line": 22,
      "id": "página-de-login;validar:-\u003cidentifier\u003e;;1"
    },
    {
      "cells": [
        "",
        "",
        "E-mail inválido.",
        "Realizar login sem preencher campos obrigatórios"
      ],
      "line": 23,
      "id": "página-de-login;validar:-\u003cidentifier\u003e;;2"
    },
    {
      "cells": [
        "",
        "123456",
        "E-mail inválido.",
        "Realizar login sem preencher campo e-mail"
      ],
      "line": 24,
      "id": "página-de-login;validar:-\u003cidentifier\u003e;;3"
    },
    {
      "cells": [
        "ateste@ateste.com.br",
        "",
        "Senha inválida.",
        "Realizar login sem preencher campo senha"
      ],
      "line": 25,
      "id": "página-de-login;validar:-\u003cidentifier\u003e;;4"
    },
    {
      "cells": [
        "ateste@ateste",
        "123456",
        "E-mail inválido.",
        "Realizar login informando e-mail inválido"
      ],
      "line": 26,
      "id": "página-de-login;validar:-\u003cidentifier\u003e;;5"
    },
    {
      "cells": [
        "ateste@ateste.com.br",
        "123",
        "Senha inválida.",
        "Realizar login informando senha inválida"
      ],
      "line": 27,
      "id": "página-de-login;validar:-\u003cidentifier\u003e;;6"
    }
  ],
  "keyword": "Exemplos"
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
  "duration": 5315404800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validar: Realizar login sem preencher campos obrigatórios",
  "description": "",
  "id": "página-de-login;validar:-\u003cidentifier\u003e;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-erro"
    },
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho o campo email\"\" e senha\"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"E-mail inválido.\" na tela de login",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "LoginStep.preencho_o_campo_email_e_senha(String,String)"
});
formatter.result({
  "duration": 89984200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 50839200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 27
    }
  ],
  "location": "LoginStep.sistema_apresenta_mensagem_na_tela_de_login(String)"
});
formatter.result({
  "duration": 30018600,
  "status": "passed"
});
formatter.after({
  "duration": 51200,
  "status": "passed"
});
formatter.after({
  "duration": 26400,
  "status": "passed"
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
  "duration": 8471945200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validar: Realizar login sem preencher campo e-mail",
  "description": "",
  "id": "página-de-login;validar:-\u003cidentifier\u003e;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-erro"
    },
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho o campo email\"\" e senha\"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"E-mail inválido.\" na tela de login",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    },
    {
      "val": "123456",
      "offset": 33
    }
  ],
  "location": "LoginStep.preencho_o_campo_email_e_senha(String,String)"
});
formatter.result({
  "duration": 90371300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 44516700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 27
    }
  ],
  "location": "LoginStep.sistema_apresenta_mensagem_na_tela_de_login(String)"
});
formatter.result({
  "duration": 31444400,
  "status": "passed"
});
formatter.after({
  "duration": 51700,
  "status": "passed"
});
formatter.after({
  "duration": 27800,
  "status": "passed"
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
  "duration": 4765068700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validar: Realizar login sem preencher campo senha",
  "description": "",
  "id": "página-de-login;validar:-\u003cidentifier\u003e;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-erro"
    },
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho o campo email\"ateste@ateste.com.br\" e senha\"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"Senha inválida.\" na tela de login",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "ateste@ateste.com.br",
      "offset": 23
    },
    {
      "val": "",
      "offset": 53
    }
  ],
  "location": "LoginStep.preencho_o_campo_email_e_senha(String,String)"
});
formatter.result({
  "duration": 111069200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 54021300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha inválida.",
      "offset": 27
    }
  ],
  "location": "LoginStep.sistema_apresenta_mensagem_na_tela_de_login(String)"
});
formatter.result({
  "duration": 35775200,
  "status": "passed"
});
formatter.after({
  "duration": 55100,
  "status": "passed"
});
formatter.after({
  "duration": 28800,
  "status": "passed"
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
  "duration": 6311879800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validar: Realizar login informando e-mail inválido",
  "description": "",
  "id": "página-de-login;validar:-\u003cidentifier\u003e;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-erro"
    },
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho o campo email\"ateste@ateste\" e senha\"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"E-mail inválido.\" na tela de login",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "ateste@ateste",
      "offset": 23
    },
    {
      "val": "123456",
      "offset": 46
    }
  ],
  "location": "LoginStep.preencho_o_campo_email_e_senha(String,String)"
});
formatter.result({
  "duration": 104411500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 45764800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 27
    }
  ],
  "location": "LoginStep.sistema_apresenta_mensagem_na_tela_de_login(String)"
});
formatter.result({
  "duration": 30521100,
  "status": "passed"
});
formatter.after({
  "duration": 63800,
  "status": "passed"
});
formatter.after({
  "duration": 29100,
  "status": "passed"
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
  "duration": 6360151100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validar: Realizar login informando senha inválida",
  "description": "",
  "id": "página-de-login;validar:-\u003cidentifier\u003e;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-erro"
    },
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "preencho o campo email\"ateste@ateste.com.br\" e senha\"123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "sistema apresenta mensagem\"Senha inválida.\" na tela de login",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "ateste@ateste.com.br",
      "offset": 23
    },
    {
      "val": "123",
      "offset": 53
    }
  ],
  "location": "LoginStep.preencho_o_campo_email_e_senha(String,String)"
});
formatter.result({
  "duration": 106428200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 41293600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha inválida.",
      "offset": 27
    }
  ],
  "location": "LoginStep.sistema_apresenta_mensagem_na_tela_de_login(String)"
});
formatter.result({
  "duration": 31453900,
  "status": "passed"
});
formatter.after({
  "duration": 58600,
  "status": "passed"
});
formatter.after({
  "duration": 34200,
  "status": "passed"
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
  "duration": 5121483700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Realizar login com sucesso",
  "description": "",
  "id": "página-de-login;realizar-login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 29,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "preencho campos obrigatórios login",
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "sistema realiza login com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.preencho_campos_obrigatórios_login()"
});
formatter.result({
  "duration": 105319100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 53736400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.sistema_realiza_login_com_sucesso()"
});
formatter.result({
  "duration": 558979600,
  "status": "passed"
});
formatter.after({
  "duration": 73300,
  "status": "passed"
});
formatter.after({
  "duration": 20200,
  "status": "passed"
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
  "duration": 8315377300,
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
  "duration": 659317000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.passo_o_mouse_sobre_o_menu_do_nome_do_usuário_logado_no_header()"
});
formatter.result({
  "duration": 135770100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_em_Logoff()"
});
formatter.result({
  "duration": 602953200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.sistema_realiza_o_logoff_com_sucesso()"
});
formatter.result({
  "duration": 149561900,
  "status": "passed"
});
formatter.after({
  "duration": 45400,
  "status": "passed"
});
formatter.after({
  "duration": 18700,
  "status": "passed"
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
  "duration": 7167273800,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Acessar tela de cadastro de usuários via link nao tenho conta",
  "description": "",
  "id": "página-de-login;acessar-tela-de-cadastro-de-usuários-via-link-nao-tenho-conta",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 42,
      "name": "@link-nao-tenho-conta"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "clico no link informando não ter conta",
  "keyword": "Quando "
});
formatter.step({
  "line": 45,
  "name": "sistema apresenta tela de cadastro de usuário",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.clico_no_link_informando_não_ter_conta()"
});
formatter.result({
  "duration": 47874000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.sistema_apresenta_tela_de_cadastro_de_usuário()"
});
formatter.result({
  "duration": 272231200,
  "status": "passed"
});
formatter.after({
  "duration": 54000,
  "status": "passed"
});
formatter.after({
  "duration": 20200,
  "status": "passed"
});
});