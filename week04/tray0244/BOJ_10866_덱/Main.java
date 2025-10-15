package Algorithm_Study.week04.tray0244.BOJ_1874_스택수열;

import java.util.*;
import java.io.*;

public class Main{
    static int n, num;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Deque<Integer> d = new ArrayDeque<>();
        n = 0;
        for(int i = 0; i < N; i++){
            String str = br.readLine();
            String[] parts = str.split(" ");
            String input = parts[0];

            if(input.equals("push_front")){
                num = Integer.parseInt(parts[1]);
                d.addFirst(num);
            }else if(input.equals("push_back")){
                num = Integer.parseInt(parts[1]);
                d.addLast(num);
            }else if(input.equals("pop_front")){
                if(d.isEmpty()){
                    System.out.println(-1);
                }else{
                    n = d.getFirst();
                    System.out.println(n);
                    d.removeFirst();
                }
            }else if(input.equals("pop_back")){
                if(d.isEmpty()){
                    System.out.println(-1);
                }else{
                    n = d.getLast();
                    System.out.println(n);
                    d.removeLast();
                }
            }else if(input.equals("size")){
                n = d.size();
                System.out.println(n);
            }else if(input.equals("empty")){
                if(d.isEmpty()){
                    System.out.println(1);
                }else{
                    System.out.println(0);
                }
            }else if(input.equals("front")){
                if(d.isEmpty()){
                    System.out.println(-1);
                }else{
                    n = d.peek();
                    System.out.println(n);
                }
            }else if(input.equals("back")){
                if(d.isEmpty()){
                    System.out.println(-1);
                }else{
                    n = d.peekLast();
                    System.out.println(n);
                }
            }
        }
    }
}