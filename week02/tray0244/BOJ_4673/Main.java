package week02.BOJ_4673;
import java.util.HashSet;

public class Main {
    public static int d(int n) {
        int result = n;
        while (n > 0) {
            result += n % 10;
            n /= 10;
        }
        return result;
    }

    public static void main(String[] args) {
        int limit = 10000;
        HashSet<Integer> s = new HashSet<>();

        for (int i = 1; i <= limit; i++) {
            s.add(d(i));
        }

        for (int i = 1; i <= limit; i++) {
            if (!s.contains(i)) {
                System.out.println(i);
            }
        }
    }
}