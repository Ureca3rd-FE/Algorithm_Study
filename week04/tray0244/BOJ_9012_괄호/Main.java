package Algorithm_Study.week04.tray0244.BOJ_1874_스택수열;

import java.util.*;
import java.io.*;

// 백준 9012번

public class Main{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Stack<String> stack = new Stack<>();
        int T = Integer.parseInt(br.readLine());

        for(int i = 0; i < T; i++){
            String input =br.readLine();
            boolean isValid = true;

            for(int j = 0; j < input.length(); j++){
                char ch = input.charAt(j);
                if(ch == '('){
                    stack.push("(");
                }else if(stack.isEmpty() && ch == ')') {
                    isValid = false;
                    break; // 스택이 비어있는데 닫는 괄호가 나오면 유효하지 않음
                }
                if(ch == ')'){
                    stack.pop();
                }
            }
            if(stack.isEmpty() && isValid){
                System.out.println("YES");
            }else System.out.println("NO");
            stack.clear(); // 스택 초기화
        }
    }
}