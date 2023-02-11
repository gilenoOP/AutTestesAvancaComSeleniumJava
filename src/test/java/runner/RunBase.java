package runner;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import java.util.concurrent.TimeUnit;

// Classe auxiliar do RunCucumberTest para que todo cenário precise abrir o browser para iniciar os passos.
// Dessa forma cada cenário pode ser testado de forma isolada, sem correr o risco de ser impactado, caso um cenário anterior
// apresente erro, ou caso eu precise executar um cenário para testar algo de login, sendo que o cenário anterior também
// era de login, ou seja, o cenário vai tentar logar e não vai conseguir logar, pois já está logado do cenário anterior
public class RunBase {
    static WebDriver driver;

    public static WebDriver getDriver() {
        return driver;
    }

    public static WebDriver getDriver(String browser) {
        if (driver != null) {
            driver.quit();
        }
        switch (browser) {
            case "chrome":
                driver = new ChromeDriver();
                break;
            //O case abaixo é para caso o comando seja dado por um CI (GitHub, Jenkins, etc).
            // Nesse caso o browser não abre para o usuário ver e sim via background = headless
            case "chrome-ci":
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("--headless");
                //Por algum motivo o argumento abaixo não está funcionando com o chrome CI, provocando
                //erro de elemento não clicável. Só está funcionando corretamente no firefox CI.
                //Para resolver essa questão precisei colocar uma linha de argumento com o tamanho da tela
                //chromeOptions.addArguments("--start-maximized");
                chromeOptions.addArguments("--window-size=1920,1080");
                driver = new ChromeDriver(chromeOptions);
                break;
            case "firefox":
                driver = new FirefoxDriver();
                break;
            case "firefox-ci":
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                firefoxOptions.addArguments("-headless");
                firefoxOptions.addArguments("-start-maximized");
                driver = new FirefoxDriver(firefoxOptions);
                break;
            case "edge":
                throw new IllegalArgumentException("Edge ainda não suportado");
            default:
                throw new IllegalArgumentException("Navegador não encontrado! Informe um navegador suportado: chrome ou firefox");
        }
        if (driver != null) {
// Para cada passo dos testes o browser vai esperar até 30 segundos. Caso o resultado do comando já tenha sido
// realizado antes dos 30 segundos, sistema passa para o próximo passo, evitando o erro de elemento não clicável,
// por exemplo
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        }
        return driver;
    }
}
