package support;

import com.google.common.io.Files;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;

import java.io.File;
import java.time.Duration;

public class Utils extends RunCucumberTest {
    public static String home_url = "http://automationpratice.com.br/";

    public static By ident_login_link = By.xpath("//*[@id=\"top_header\"]/div/div/div[2]/div/ul/li[1]/a");

    public static By ident_home_menu = By.cssSelector("#mc_embed_signup > form > div > input");
    public static By ident_registration_link = By.xpath("//*[@id=\"top_header\"]/div/div/div[2]/div/ul/li[2]/a");

    public static void fillField(By element_location, String content) {
        waitElementToBePresent(element_location, 10);
        getDriver().findElement(element_location).sendKeys(content);
    }

    public static void clickElement(By element_location) {
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(10));
        wait.until(ExpectedConditions.elementToBeClickable(element_location));
        getDriver().findElement(element_location).click();
    }

    public static void validateElementReceived(By element_location, String expected_content) {
        waitElementToBePresent(element_location, 10);
        String received_content = getDriver().findElement(element_location).getText();
        Assert.assertEquals("!!!Fail, Gileno!!!", expected_content, received_content);
    }

    public static void waitElementToBePresent(By element, int tempo) {
        WebDriverWait wait = new WebDriverWait(getDriver(), Duration.ofSeconds(tempo));
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static String emailGenerator() {
        int size = 4;
        String start_of_email = "gileno.";
        String end_of_email = "@gmail.com";
        String characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";
        String random_character = "";
        for (int i = 0; i < size; i++) {
            random_character += characters.charAt((int) Math.floor(Math.random() * characters.length()));
        }
        System.out.println(random_character);
        return random_character;
    }

    public static void hoverOverElement(By locator) {
        WebElement element = getDriver().findElement(locator);
        Actions actions = new Actions(getDriver());
        actions.moveToElement(element).perform();
    }

    public static void takeSnapShot() throws Exception {
        File f = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.FILE);
        Files.copy(f, new File("C:\\Users\\Gileno OP\\OneDrive - Metatron\\Área de Trabalho\\Curso Automacao\\amazonscreenshot.jpg"));
    }

}
