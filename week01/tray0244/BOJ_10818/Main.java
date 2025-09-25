package week01.BOJ_10818;

import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] num = new int[N];

        for(int i = 0; i < N; i++){
            num[i] = sc.nextInt();
        }
        int max = num[0];
        int min = num[0];

        for(int i = 1; i < N; i++){
            max = Math.max(num[i], max);
            min = Math.min(num[i], min);
        }
        System.out.print(min + " " + max);
    }
}