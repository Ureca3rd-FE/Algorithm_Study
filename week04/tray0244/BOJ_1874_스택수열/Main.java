package Algorithm_Study.week04.tray0244.BOJ_1874_스택수열;

import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int T = Integer.parseInt(br.readLine().trim());
        Stack<Integer> stack = new Stack<>();
        int current = 1;
        boolean isPossible = true;

        for (int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine().trim());
            while(current <= N){
                stack.push(current++);
                sb.append("+\n");
            }
            if(stack.peek() == N){
                stack.pop();
                sb.append("-\n");
            } else {
                isPossible = false;
                break;
            }
        }
        if(isPossible){
            System.out.println(sb);
        } else {
            System.out.println("NO");
        }
    }
}