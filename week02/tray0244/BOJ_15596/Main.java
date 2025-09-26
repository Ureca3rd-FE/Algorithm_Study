package week02.BOJ_15596;

public class Main {
    long sum(int[] a) {
        long ans = 0;
        for(int sum : a){
            ans += sum;
        }
        return ans;
    }
}
