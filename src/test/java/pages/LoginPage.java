package pages;

import org.openqa.selenium.By;
import runner.RunCucumberTest;

import static support.Utils.*;

public class LoginPage extends RunCucumberTest {
    // A linha abaixo cria uma variável do tipo By para ser trabalhada de forma genérica, evitando mexer em vários locais, caso haja alteração do id do elemento

    // Variáveis com identificação dos elementos
    public static By ident_email_field = By.id("user");

    public static By ident_password_field = By.id("password");

    public static By ident_login_button = By.id("btnLogin");

    public static By ident_text_error = By.className("invalid_input");

    public static By ident_nao_tenho_conta_link = By.id("createAccount");

    public static By ident_confirmation_button_login = By.xpath("/html/body/div[3]/div/div[6]/button[1]");

    public static By ident_logoff_confirmation_button = By.xpath("/html/body/div[3]/div/div[6]/button[1]");

    public static By ident_logged_account_area = By.id("my-account_area");

    public static By ident_login_area = By.id("login_area");

    public static By ident_login_logoff_done_msg_area = By.id("swal2-html-container");

    public static By ident_logoff_done_msg = By.id("swal2-title");

    public static By ident_logged_user_field = By.id("userLogged");

    public static By ident_logged_out_user = By.xpath("//*[@id=\"top_header\"]/div/div/div[2]/div/ul/li[2]/a");

    public static By ident_header_logoff_menu = By.xpath("//a[text()=\" Logout\"]");

    public static By ident_email_field_registration_screen = By.id("email");

    public static void accessLoginScreen() {
        String browser = System.getProperty("browser");
        getDriver(browser).get(home_url);
        getDriver().manage().window().maximize();
        waitElementToBePresent(ident_login_link, 10);
        clickElement(ident_login_link);
        waitElementToBePresent(ident_email_field, 10);
    }

    public static void fillMandatoryFields() {
        fillField(ident_email_field, "teste@teste.com.br");
        fillField(ident_password_field, "123456");
    }
}
