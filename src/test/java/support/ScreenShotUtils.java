package support;

import cucumber.api.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import static runner.RunBase.getDriver;

public class ScreenShotUtils {
    //Método abaixo vai receber por parâmetro o cenário, pois ele precisa saber em qual cenário ele vai adicionar o screenshot
    public static void addScreenShotInScenarioIfFails(Scenario scenario) {
        System.out.println("==================================================================================================================================================================================================================");
        // Para fazer com que o retorno da descrição do cenário saísse amarelo no console,
        // coloquei \033[1;33m antes do retorno e \033[0m depois do retorno para resetar a cor das
        // próximas linhas
        System.out.println("Teste executado: \033[1;33m" + scenario.getName() + "\033[0m");
        if (scenario.getStatus() == "passed") {
        // Para fazer com que o retorno do status saísse verde claro no console, coloquei \033[1;32m
        // antes do retorno e \033[0m depois do retorno para resetar a cor das próximas linhas
            System.out.println("Status: \033[1;32m" + scenario.getStatus() + "\033[0m");
        } else {
        // Para fazer com que o retorno do status diferente de passed saísse com fundo vermelho no console,
        // coloquei \033[41;1;37m antes do retorno e \033[0m depois do retorno para resetar a cor das próximas linhas
            System.out.println("Status: \033[41;1;37m" + scenario.getStatus() + "\033[0m");
        }
        System.out.println("Tag: " + scenario.getSourceTagNames());
        System.out.println("==================================================================================================================================================================================================================");
        if (scenario.isFailed()) {
            //O método vai tirar o screenshot, mas estará no formato de array de bytes
            byte[] screenshot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.BYTES);
            //Agora é necessário pegar o screenshot gerado em array de bytes e adicioná-lo no formato png, jpeg, etc
            scenario.embed(screenshot, "image/png");
        }
    }
}
