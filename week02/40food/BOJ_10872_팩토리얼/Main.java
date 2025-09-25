package algo_study;

import java.util.Scanner;

public class Main {
	
	static int n;
	static int result=1;
	
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		n=sc.nextInt();
		facto(1);
		System.out.println(result);
	}
	
	public static void facto(int depth) {
		/* n이 0인 경우 1부터 시작하는 depth가 0을 넘으므로 바로 1 return
		 * n이 1인 경우 1에 1을 곱해서 1 return
		 * n이 2 이상인 경우 n까지 한 뒤 n 초과부터 종료
		 * */
		if(depth>n) return;
		
		result*=depth;
		facto(depth+1);
	}
}
