package week01.BOJ_9498;

import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        if(N >= 90){
            System.out.println("A");
        }else if(N >= 80 && N <= 89)
            System.out.println("B");
        else if(N >= 70 && N <= 79)
            System.out.println("C");
        else if(N >= 60 && N <= 69)
            System.out.println("D");
        else
            System.out.println("F");
    }
}