package week01.BOJ_2675;

import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();

        for(int i = 0; i < T; i++){
            int R = sc.nextInt();
            String S = sc.next();
            StringBuilder result = new StringBuilder();

            for(int j = 0; j < S.length(); j++){
                char c = S.charAt(j);
                for(int k = 0; k < R; k++){
                    result.append(c);
                }
            }
            System.out.println(result.toString());
        }
    }
}