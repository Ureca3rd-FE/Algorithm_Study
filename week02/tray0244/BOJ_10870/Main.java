package week02.BOJ_10870;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        if (N == 0) {
            System.out.println(0);
        } else if (N == 1) {
            System.out.println(1);
        } else {
            int[] arr = new int[N + 1];

            arr[0] = 0;
            arr[1] = 1;

            for (int i = 2; i <= N; i++) {
                arr[i] = arr[i - 1] + arr[i - 2];
            }

            System.out.println(arr[N]);
        }
    }
}
