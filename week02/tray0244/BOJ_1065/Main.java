package week02.BOJ_1065;
import java.io.*;

public class Main {

    // 한수를 함수로 만듬
    static boolean hanSoo(int x){
        if (x < 100) return true;
        if (x >= 1000) return false;

        int a = x / 100;
        int b = (x / 10) % 10;
        int c = x % 10;

        return (a - b) == (b - c);
    }

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int count = 0;
        for(int i = 1; i <= N; i++){
            if(hanSoo(i)) count++;
        }
        System.out.println(count);
    }
}