package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import pages.LoginPage;
import runner.RunCucumberTest;
import support.ScreenShotUtils;

import static pages.LoginPage.*;
import static support.Utils.*;

public class LoginStep extends RunCucumberTest {

    @Dado("^que estou na tela de login$")
    public void que_estou_na_tela_de_login() {
        accessLoginScreen();
    }

    @Quando("^preencho o campo email\"([^\"]*)\" e senha\"([^\"]*)\"$")
    public void preencho_o_campo_email_e_senha(String arg1, String arg2) {
        fillField(ident_email_field, arg1);
        fillField(LoginPage.ident_password_field, arg2);
    }

    @Quando("^clico no botão de login$")
    public void clico_no_botão_de_login() {
        clickElement(ident_login_button);
    }

    @Então("^sistema apresenta mensagem\"([^\"]*)\" na tela de login$")
    public void sistema_apresenta_mensagem_na_tela_de_login(String arg1) {
        validateElementReceived(ident_text_error, arg1);
    }

    @Quando("^preencho campos obrigatórios login$")
    public void preencho_campos_obrigatórios_login() {
        fillMandatoryFields();
    }

    @Então("^sistema realiza login com sucesso$")
    public void sistema_realiza_login_com_sucesso() {
        waitElementToBePresent(ident_login_logoff_done_msg_area, 10);
        waitElementToBePresent(ident_logged_user_field, 10);
        String msgReceived = getDriver().findElement(ident_login_logoff_done_msg_area).getText();
        String userLogged = getDriver().findElement(ident_logged_user_field).getText();
        Assert.assertEquals("!!!Fail, Gileno!!!", "Olá, " + userLogged, msgReceived);
        clickElement(ident_confirmation_button_login);
        waitElementToBePresent(ident_logged_account_area, 10);
    }

    @Dado("^estou logado na aplicação$")
    public void estou_logado_na_aplicação() {
        preencho_campos_obrigatórios_login();
        clico_no_botão_de_login();
        sistema_realiza_login_com_sucesso();
    }

    @Quando("^passo o mouse sobre o menu do nome do usuário logado no header$")
    public void passo_o_mouse_sobre_o_menu_do_nome_do_usuário_logado_no_header() {
        hoverOverElement(ident_logged_user_field);
    }

    @Quando("^clico em Logoff$")
    public void clico_em_Logoff() {
        clickElement(ident_header_logoff_menu);
    }

    @Então("^sistema realiza o logoff com sucesso$")
    public void sistema_realiza_o_logoff_com_sucesso() {
        waitElementToBePresent(ident_logoff_done_msg, 10);
        String msgExpected = "Logout realizado";
        validateElementReceived(ident_logoff_done_msg, msgExpected);
        clickElement(ident_logoff_confirmation_button);
        waitElementToBePresent(ident_logged_out_user, 10);
        waitElementToBePresent(ident_login_area, 10);
    }

    @Quando("^clico no link informando não ter conta$")
    public void clico_no_link_informando_não_ter_conta() {
        clickElement(ident_nao_tenho_conta_link);
    }

    @Então("^sistema apresenta tela de cadastro de usuário$")
    public void sistema_apresenta_tela_de_cadastro_de_usuário() {
        waitElementToBePresent(ident_email_field_registration_screen, 10);
    }

    @After
    public static void afterScenario(Scenario scenario) {
        ScreenShotUtils.addScreenShotInScenarioIfFails(scenario);
    }
}