package Algorithm_Study.week04.tray0244.BOJ_1874_스택수열;

import java.util.*;
import java.io.*;

public class Main{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        Queue<Integer> queue = new LinkedList<>();
        int last = -1;

        for(int i = 0; i < n; i++){
            String  input = br.readLine();

            if(input.startsWith("push")){
                int x = Integer.parseInt(input.split(" ")[1]);
                queue.offer(x);
                last = x;
            } else if(input.equals("pop")){
                sb.append(queue.isEmpty() ? -1 : queue.poll()).append('\n');
            } else if(input.equals("size")){
                sb.append(queue.size()).append('\n');
            } else if(input.equals("empty")){
                sb.append(queue.isEmpty() ? 1 : 0).append('\n');
            } else if(input.equals("front")){
                sb.append(queue.isEmpty() ? -1 : queue.peek()).append('\n');
            } else if(input.equals("back")){
                sb.append(queue.isEmpty() ? -1 : last).append('\n');
            }
        }
        System.out.print(sb);
    }
}