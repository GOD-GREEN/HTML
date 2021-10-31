package DEVER;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Scanner;

public class Servico {
    public static void menuPrincipal(ArrayList<Sanduiche> sandubas,
                                     ArrayList<Suco> sucos)
    {
        while(0==0){// 0==0, true, 1==1, 1 > 0
            Scanner get = new Scanner(System.in);
            int opcao = 0;

            System.out.println("===========================");
            System.out.println("=====Lanchonete daskina====");
            System.out.println("===========================");
            System.out.println("(1)Cadastrar");
            System.out.println("(2)Consultar");
            System.out.println("(3) ==SAIR==");
            System.out.print("Escolha uma opção: ");
            opcao = get.nextInt();

            switch (opcao){
                case 1: //cadastra
                    menuCadastro(sandubas,sucos);
                    break;

                case 2: //consulta
                    menuConsulta(sandubas,sucos);
                    break;

                case 3: //sair
                    System.exit(01);
                    break;

                default:
                    System.out.println("\nOpção inválida!\n");

            }
        }
    }//fim menuprincipal

    public static void menuCadastro(ArrayList<Sanduiche> sandubas,
                                    ArrayList<Suco> sucos)
    {
        Scanner get = new Scanner(System.in);
        int opcao = 0;

        System.out.println("===CADASTRAR==");
        System.out.println("(1)Sanduiche");
        System.out.println("(2)Suco");
        System.out.print("Escolha uma opção: ");
        opcao = get.nextInt();

        switch(opcao){
            case 1://sanduiche
                cadastraSanduiche(sandubas);
                break;

            case 2: //suco
                cadastraSuco(sucos);
                break;

            default:
                System.out.println("\nOpção inválida\n");
        }
    }//fim menucadastro

    public static void cadastraSanduiche(ArrayList<Sanduiche> lista){
        String nome, ingredientes;
        double preco;
        Scanner get = new Scanner(System.in);

        System.out.print("Nome do Sanduiche: ");
        nome = get.nextLine();

        System.out.print("Ingredientes: ");
        ingredientes = get.nextLine();

        System.out.print("Preço: ");
        preco = get.nextDouble();

        lista.add(new Sanduiche(ingredientes, nome, preco));
    }//fim cadastrasanduiche

    public static void cadastraSuco(ArrayList<Suco> lista){
        String nome, sabor;
        double preco;
        Scanner get = new Scanner(System.in);

        System.out.print("Nome do Suco: ");
        nome = get.nextLine();

        System.out.print("Sabor: ");
        sabor = get.nextLine();

        System.out.print("Preço: ");
        preco = get.nextDouble();

        lista.add(new Suco( nome, preco,sabor));
    }//fim cadstro suco

    public static void menuConsulta(ArrayList<Sanduiche> sandubas,
                                    ArrayList<Suco> sucos)
    {
        Scanner get = new Scanner(System.in);
        int opcao = 0;

        System.out.println("===CONSULTAR===");
        System.out.println("(1)Sanduiche");
        System.out.println("(2)Suco");
        System.out.print("Escolha uma opção: ");
        opcao = get.nextInt();

        switch(opcao){
            case 1://sanduiche
                consultaSanduiche(sandubas);
                break;

            case 2: //consultar
                consultaSuco(sucos);
                break;

            default:
                System.out.println("\nOpção inválida\n");
        }
    }//fim menuconsulta

    public static void consultaSuco(ArrayList<Suco> lista){
        System.out.println("======LISTA DE SUCOS=======");
        if (lista.size() > 0 ){
            for(int i = 0 ; i < lista.size() ; i++){
                lista.get(i).imprime();
            }
        }else{
            System.out.println("\n\nLISTA VAZIA\n\n");
        }
    }//fim consultasuco

    public static void consultaSanduiche(ArrayList<Sanduiche> lista){
        System.out.println("======LISTA DE SANDUICHE=======");
        if (lista.size() > 0 ){
            for(int i = 0 ; i < lista.size() ; i++){
                lista.get(i).imprime();
            }
        }else{
            System.out.println("\n\nLISTA VAZIA\n\n");
        }
    }//fim consultasanduiche
}
