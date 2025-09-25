package week01.BOJ_2908;

import java.io.*;
import java.util.*;

public class Main {
    static String newA;
    static String newB;
    static int answer;
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        String A = st.nextToken();
        String B = st.nextToken();

        StringBuilder newA = new StringBuilder();
        StringBuilder newB = new StringBuilder();

        for(int i = 2; i >= 0; i--){
            newA.append(A.charAt(i));
            newB.append(B.charAt(i));
        }

        int numA = Integer.parseInt(newA.toString());
        int numB = Integer.parseInt(newB.toString());

        int answer = Math.max(numA, numB);
        System.out.println(answer);
    }
}