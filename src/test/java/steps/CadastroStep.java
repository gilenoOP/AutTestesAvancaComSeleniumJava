package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import runner.RunCucumberTest;
import support.ScreenShotUtils;

import static pages.CadastroPage.*;
import static support.Utils.*;

public class CadastroStep extends RunCucumberTest {

    @Dado("^que estou na tela de cadastro de usuários$")
    public void que_estou_na_tela_de_cadastro_de_usuários() {
        accessRegistrationScreen();
    }

    @Quando("^preencho os campos nome\"([^\"]*)\",email\"([^\"]*)\"e senha\"([^\"]*)\"$")
    public void preencho_os_campos_nome_email_e_senha(String arg1, String arg2, String arg3) {
        fillField(ident_name_field, arg1);
        fillField(ident_email_field, arg2);
        fillField(ident_password_field, arg3);
    }

    @Quando("^clico no botão de cadastrar$")
    public void clico_no_botão_de_cadastrar() {
        clickElement(ident_registration_button);
    }

    @Então("^sistema apresenta mensagem\"([^\"]*)\" na tela de cadastro$")
    public void sistema_apresenta_mensagem_na_tela_de_cadastro(String arg1) {
        validateElementReceived(ident_text_error, arg1);
    }

    @Quando("^preencho campos obrigatórios cadastro$")
    public void preencho_campos_obrigatórios_cadastro() {
        fillMandatoryFields();
    }

    @Quando("^clico no botão cadastrar$")
    public void clico_no_botão_cadastrar() {
        clickElement(ident_registration_button);
    }

    @Então("^sistema realiza cadastro de usuário com sucesso$")
    public void sistema_realiza_cadastro_de_usuário_com_sucesso() {
        waitElementToBePresent(ident_logged_user_field, 10);
        waitElementToBePresent(ident_registered_user_field, 10);
        String msgReceived = getDriver().findElement(ident_registered_user_field).getText();
        String userLogged = getDriver().findElement(ident_logged_user_field).getText();
        Assert.assertEquals("!!!Fail, Gileno!!!", "Bem-vindo " + userLogged, msgReceived);
        clickElement(ident_botao_confirmacao_cadastro);
        waitElementToBePresent(ident_logged_account_area, 10);
    }

    @After
    public static void afterScenario(Scenario scenario) {
        ScreenShotUtils.addScreenShotInScenarioIfFails(scenario);
    }
}