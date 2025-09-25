package week01.BOJ_1152;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String input = sc.nextLine();

        String[] words = input.trim().split("\\s+");
        if (input.trim().isEmpty()) {
            System.out.println(0);
        } else {
            System.out.println(words.length);
        }

        sc.close();
    }
}