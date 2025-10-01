package week03.BOJ_2231_분해합;

import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int result = 0;

        for(int i = 1; i < N; i++){
            int sum = i;
            int temp = i;
            while (temp > 0){
                sum += temp %10;
                temp /= 10;
            }
            if(sum == N){
                result = i;
                break;
            }
        }
        System.out.println(result);
    }
}
