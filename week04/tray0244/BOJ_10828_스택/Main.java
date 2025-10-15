package Algorithm_Study.week04.tray0244.BOJ_1874_스택수열;
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < n; i++) {
            String input = br.readLine();

            if (input.startsWith("push")) {
                int x = Integer.parseInt(input.split(" ")[1]);
                stack.push(x);
            } else if (input.equals("pop")) {
                sb.append(stack.isEmpty() ? -1 : stack.pop()).append('\n');
            } else if (input.equals("size")) {
                sb.append(stack.size()).append('\n');
            } else if (input.equals("empty")) {
                sb.append(stack.isEmpty() ? 1 : 0).append('\n');
            } else if (input.equals("top")) {
                sb.append(stack.isEmpty() ? -1 : stack.peek()).append('\n');
            }
        }

        System.out.print(sb);
    }
}