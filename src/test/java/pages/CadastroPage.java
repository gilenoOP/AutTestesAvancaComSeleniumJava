package pages;

import org.openqa.selenium.By;
import runner.RunCucumberTest;

import static support.Utils.*;

public class CadastroPage extends RunCucumberTest {

    // A linha abaixo cria uma variável do tipo By para ser trabalhada de forma genérica, evitando mexer em vários locais, caso haja alteração do id do elemento
    public static By ident_name_field = By.id("user");

    public static By ident_email_field = By.id("email");

    public static By ident_password_field = By.id("password");

    public static By ident_registration_button = By.id("btnRegister");

    public static By ident_text_error = By.id("errorMessageFirstName");

    public static By ident_logged_user_field = By.id("userLogged");

    public static  By ident_registered_user_field = By.id("swal2-html-container");

    public static By ident_botao_confirmacao_cadastro = By.xpath("/html/body/div[3]/div/div[6]/button[1]");

    public static By ident_logged_account_area = By.id("my-account_area");


    public static void accessRegistrationScreen(){
        String browser = System.getProperty("browser");
        getDriver(browser).get(home_url);
        getDriver().manage().window().maximize();
        waitElementToBePresent(ident_registration_link,10);
        clickElement(ident_registration_link);
        waitElementToBePresent(ident_name_field,10);
    }

    public static void fillMandatoryFields(){
        fillField(ident_name_field, "Pedro");
        fillField(ident_email_field, "teste@teste.com.br");
        fillField(ident_password_field, "123456");
    }
}
