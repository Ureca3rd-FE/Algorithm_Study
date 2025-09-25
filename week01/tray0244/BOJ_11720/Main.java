package week01.BOJ_11720;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        String s = sc.next();
        int sum = 0;

        for(int i = 0; i < N; i++){
            sum += s.charAt(i) - '0';
        }
        System.out.println(sum);
    }
}