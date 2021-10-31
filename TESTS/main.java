package DEVER;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Sanduiche> listaSanduiche = new ArrayList<>();
        ArrayList<Suco> listaSuco = new ArrayList<>();

        Servico.menuPrincipal(listaSanduiche,listaSuco);
    }
}
